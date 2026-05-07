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

const pagesDir = path.join(process.cwd(), 'src/pages/[lang]');

walk(pagesDir, (filePath) => {
  if (filePath.endsWith('.astro')) {
    let content = fs.readFileSync(filePath, 'utf8');
    
    // Replace link: "/..." with link: `/${lang}/...`
    // We match link: "/something" and replace with link: `/${lang}/something`
    // We avoid replacing if it already has ${lang}
    
    let newContent = content.replace(/link:\s*"\/([^"]*)"/g, (match, path) => {
        if (path.startsWith('${lang}')) return match;
        return `link: \`/\${lang}/${path}\``;
    });
    
    // Also handle href="/..." in the same way for anchor tags that might be there
    newContent = newContent.replace(/href="\/([^"]*)"/g, (match, path) => {
        if (path.startsWith('${lang}')) return match;
        if (path === 'en' || path === 'fr') return match; // avoid loops
        return `href={\`/\${lang}/${path}\`}`;
    });

    if (newContent !== content) {
      fs.writeFileSync(filePath, newContent);
      console.log(`Fixed links in ${filePath}`);
    }
  }
});
