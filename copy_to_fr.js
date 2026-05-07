const fs = require('fs');
const path = require('path');

const srcPagesDir = path.join(__dirname, 'src', 'pages');
const frDir = path.join(srcPagesDir, 'fr');

if (!fs.existsSync(frDir)) {
    fs.mkdirSync(frDir, { recursive: true });
}

function adjustPaths(content) {
    // Replace "../" with "../../" in imports
    return content.replace(/from\s+["'](\.\.\/)+([^"']+)["']/g, (match, prefix, rest) => {
        return `from "../../${rest}"`;
    });
}

function processDirectory(currentDir, targetDir) {
    if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
    }
    const files = fs.readdirSync(currentDir);
    for (const file of files) {
        if (file === 'fr') continue; // skip the fr directory itself
        
        const currentPath = path.join(currentDir, file);
        const targetPath = path.join(targetDir, file);
        
        const stat = fs.statSync(currentPath);
        if (stat.isDirectory()) {
            processDirectory(currentPath, targetPath);
        } else if (file.endsWith('.astro')) {
            let content = fs.readFileSync(currentPath, 'utf8');
            
            // For the files in /fr/ directory, we need to adjust imports
            const depth = path.relative(srcPagesDir, currentPath).split(path.sep).length;
            let importReplacement = '';
            for (let i = 0; i <= depth; i++) {
                importReplacement += '../';
            }
            
            // A more robust way: just replace any import starting with "../" by prepending an extra "../"
            let frContent = content.replace(/from\s+["'](\.\.\/)/g, 'from "' + '../$1');
            
            // Handle Astro components like <I18nHomeShell ... /> -> wait, component names don't need path adjustments if they are imported.
            
            fs.writeFileSync(targetPath, frContent);
            console.log(`Copied and adjusted ${file} to ${targetPath}`);
        }
    }
}

processDirectory(srcPagesDir, frDir);
console.log('Done copying to /fr/');
