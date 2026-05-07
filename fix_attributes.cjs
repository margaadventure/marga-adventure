const fs = require('fs');
const path = require('path');

function walk(dir, callback) {
  fs.readdirSync(dir).forEach( f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ?
      walk(dirPath, callback) : callback(path.join(dir, f));
  });
};

const srcDir = path.join(process.cwd(), 'src');

walk(srcDir, (filePath) => {
  if (filePath.endsWith('.astro') || filePath.endsWith('.tsx') || filePath.endsWith('.jsx')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Find attributes that contain the span and remove the tags
    // This regex looks for attribute values (between quotes) that contain the span
    const regex = /([a-z-]+)="([^"]*)<span translate="no">Marga Adventure<\/span>([^"]*)"/gi;
    
    let newContent = content;
    let match;
    while ((match = regex.exec(content)) !== null) {
        const attribute = match[1];
        const before = match[2];
        const after = match[3];
        const fullMatch = match[0];
        const fixedValue = `${attribute}="${before}Marga Adventure${after}"`;
        newContent = newContent.replace(fullMatch, fixedValue);
    }
    
    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed attributes in ${filePath}`);
    }
  }
});
