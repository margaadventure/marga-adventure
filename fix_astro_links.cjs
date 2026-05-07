const fs = require('fs');
const path = require('path');

function processDir(dir, locale) {
    const files = fs.readdirSync(dir, { withFileTypes: true });

    for (const file of files) {
        const fullPath = path.join(dir, file.name);
        
        if (file.isDirectory()) {
            processDir(fullPath, locale);
        } else if (fullPath.endsWith('.astro')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Replace href="/"
            if (content.includes('href="/"')) {
                content = content.replace(/href="\/"/g, `href="/${locale}"`);
                modified = true;
            }

            // Replace href="/contact"
            if (content.includes('href="/contact"')) {
                content = content.replace(/href="\/contact"/g, `href="/${locale}/contact"`);
                modified = true;
            }

            // Replace href="/blog*"
            if (content.includes('href="/blog')) {
                content = content.replace(/href="\/blog([^"]*)"/g, `href="/${locale}/blog$1"`);
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content);
                console.log(`Updated links in: ${fullPath}`);
            }
        }
    }
}

const enDir = path.join(__dirname, 'src', 'pages', 'en');
const frDir = path.join(__dirname, 'src', 'pages', 'fr');

if (fs.existsSync(enDir)) processDir(enDir, 'en');
if (fs.existsSync(frDir)) processDir(frDir, 'fr');

console.log("Astro links update complete.");
