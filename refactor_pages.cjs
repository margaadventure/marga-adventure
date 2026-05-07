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
    
    // 1. Add getStaticPaths if not present
    if (!content.includes('export function getStaticPaths')) {
      // Find the first ---
      const firstDash = content.indexOf('---');
      if (firstDash !== -1) {
        const insertPos = firstDash + 3;
        const staticPaths = '\nexport function getStaticPaths() {\n  return [{ params: { lang: \'en\' } }, { params: { lang: \'fr\' } }];\n}\n';
        content = content.slice(0, insertPos) + staticPaths + content.slice(insertPos);
      }
    }
    
    // 2. Replace getLangFromUrl(Astro.url) with Astro.params
    content = content.replace(/const lang = getLangFromUrl\(Astro\.url\);/g, 'const { lang } = Astro.params;');
    
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${filePath}`);
  }
});
