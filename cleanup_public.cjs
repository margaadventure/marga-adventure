const fs = require('fs');
const path = require('path');

const rootDir = process.cwd();
const srcDir = path.join(rootDir, 'src');
const publicDir = path.join(rootDir, 'public');
const unusedDir = path.join(rootDir, 'unused-images');

// Ensure unused dir exists
if (!fs.existsSync(unusedDir)) {
    fs.mkdirSync(unusedDir, { recursive: true });
}

// 1. Get all code content
const codeExtensions = ['.ts', '.tsx', '.astro', '.css', '.json', '.js', '.mjs', '.html', '.jsx', '.md', '.mdx'];
let allCodeContent = '';

function collectCode(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            collectCode(fullPath);
        } else if (codeExtensions.includes(path.extname(file).toLowerCase())) {
            try {
                allCodeContent += fs.readFileSync(fullPath, 'utf8') + '\n';
            } catch (e) {
                console.error('Error reading', fullPath);
            }
        }
    });
}
console.log('Reading codebase...');
collectCode(srcDir);
// Also read constants or config in root if any
if (fs.existsSync(path.join(rootDir, 'astro.config.mjs'))) allCodeContent += fs.readFileSync(path.join(rootDir, 'astro.config.mjs'), 'utf8');

console.log('Codebase size:', allCodeContent.length, 'chars');

// 2. Walk public/images
const imageExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.avif', '.gif', '.ico'];
let movedCount = 0;

function walkPublic(dir) {
    const files = fs.readdirSync(dir);
    files.forEach(file => {
        const fullPath = path.join(dir, file);
        const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            walkPublic(fullPath);
        } else {
            if (imageExtensions.includes(path.extname(file).toLowerCase())) {
                const filename = file;
                const relativePath = path.relative(publicDir, fullPath); // e.g. images/foo/bar.jpg

                // We check if the FILENAME exists in the code
                // LIMITATION: if two files have same name in different folders, keeping one keeps both.
                // But if filename is NOT found, it is definitely unused.

                // Also check for URL encoded versions just in case
                const encoded = encodeURIComponent(filename);

                if (!allCodeContent.includes(filename) && !allCodeContent.includes(encoded)) {
                    // Safe guard: favicon or logo
                    if (filename === 'favicon.svg' || filename === 'logo.png') {
                        return;
                    }

                    console.log(`[UNUSED] ${relativePath}`);

                    const destination = path.join(unusedDir, 'public', relativePath);
                    const destDir = path.dirname(destination);

                    if (!fs.existsSync(destDir)) {
                        fs.mkdirSync(destDir, { recursive: true });
                    }

                    fs.renameSync(fullPath, destination);
                    movedCount++;
                }
            }
        }
    });
}

console.log('Scanning public directory...');
if (fs.existsSync(publicDir)) {
    walkPublic(publicDir);
}

console.log(`Done. Moved ${movedCount} files.`);
