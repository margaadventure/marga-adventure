const fs = require('fs');
const path = require('path');

const srcPagesDir = path.join(__dirname, 'src', 'pages');
const frDir = path.join(srcPagesDir, 'fr');

if (!fs.existsSync(frDir)) {
    fs.mkdirSync(frDir, { recursive: true });
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
            
            // 1. Process English file (inject lang and useAstroI18n)
            let enContent = content;
            
            // Calculate depth for the relative path to src/
            const depth = path.relative(srcPagesDir, currentPath).split(path.sep).length - 1;
            const prefix = '../'.repeat(depth + 1);
            
            if (!enContent.includes('useAstroI18n')) {
                // Add imports to the top of frontmatter
                enContent = enContent.replace(/---\s*\n/, `---\nimport { getLangFromUrl, useAstroI18n } from "${prefix}i18n/astro";\n`);
                // Add constants before the end of frontmatter
                enContent = enContent.replace(/\n---\s*\n/, `\nconst { t } = await useAstroI18n(Astro.url);\nconst lang = getLangFromUrl(Astro.url);\n---\n`);
            }
            
            // Add initialLocale={lang} to ANY React components with client: directive
            enContent = enContent.replace(/(<[A-Z][a-zA-Z0-9_]*\b[^>]*?client:[a-zA-Z]+[^>]*?)(?<!initialLocale={lang})(\/?>)/g, '$1 initialLocale={lang} $2');

            // Save modified English file
            fs.writeFileSync(currentPath, enContent);
            
            // 2. Process French file (copy of enContent with adjusted imports)
            let frContent = enContent;
            
            // Adjust all imports starting with "../" by adding one more "../"
            frContent = frContent.replace(/from\s+["'](\.\.\/)/g, 'from "' + '../$1');
            
            // We also need to fix `href="/..."` paths in Astro files? No, the navigation handles URLs, but what if there are hardcoded links?
            // Let's leave hardcoded links for now.
            
            fs.writeFileSync(targetPath, frContent);
            console.log(`Processed ${file}`);
        }
    }
}

processDirectory(srcPagesDir, frDir);
console.log('Done processing pages.');
