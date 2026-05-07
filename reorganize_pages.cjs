const fs = require('fs');
const path = require('path');

const pagesDir = path.join(__dirname, 'src', 'pages');
const enDir = path.join(pagesDir, 'en');
const frDir = path.join(pagesDir, 'fr');

if (!fs.existsSync(enDir)) {
    fs.mkdirSync(enDir, { recursive: true });
}

function moveAndFixImports(currentDir, targetEnDir) {
    if (!fs.existsSync(targetEnDir)) {
        fs.mkdirSync(targetEnDir, { recursive: true });
    }
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        if (file === 'en' || file === 'fr' || file === 'api') continue;

        const currentPath = path.join(currentDir, file);
        const enPath = path.join(targetEnDir, file);
        
        const stat = fs.statSync(currentPath);
        if (stat.isDirectory()) {
            moveAndFixImports(currentPath, enPath);
            // remove empty dir
            const remaining = fs.readdirSync(currentPath);
            if (remaining.length === 0) {
                fs.rmdirSync(currentPath);
            }
        } else if (file.endsWith('.astro')) {
            let content = fs.readFileSync(currentPath, 'utf8');
            // Fix imports: anything starting with '../' or './' might need adjustment.
            // Since we are moving one level deeper (from pages/ to pages/en/), we replace
            // from "../" to "../../"
            // Wait, what if it's already deep? e.g. pages/wildlife/birdwatching.astro moves to pages/en/wildlife/birdwatching.astro
            // Yes, one level deeper.
            content = content.replace(/from\s+["'](\.\.\/)/g, 'from "../$1');
            content = content.replace(/import\s+([a-zA-Z0-9_{}\s,]+)\s+from\s+["'](\.\.\/)/g, 'import $1 from "../$2');
            
            // For images like `import bg from "../../assets/"` it becomes `import bg from "../../../assets/"`
            // Let's just blindly add "../" to any relative import starting with "../"
            
            fs.writeFileSync(enPath, content);
            fs.unlinkSync(currentPath); // delete original
        }
    }
}

moveAndFixImports(pagesDir, enDir);

// Now create an index redirect in the root pages directory
const redirectContent = `---
return Astro.redirect('/en/');
---
`;
fs.writeFileSync(path.join(pagesDir, 'index.astro'), redirectContent);

console.log('Done moving english pages to /en/ folder.');
