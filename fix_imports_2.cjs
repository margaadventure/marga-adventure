const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const enDir = path.join(srcDir, 'pages', 'en');

function fixAllImports(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixAllImports(fullPath);
        } else if (file.endsWith('.astro') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // Re-calculate all relative imports
            content = content.replace(/from\s+["'](\.[^"']+)["']/g, (match, p1) => {
                // p1 is the broken relative path.
                // We know that `fix_imports.cjs` removed one `../`. So the current p1 is equivalent to what it was in `src/pages/` before any scripts!
                // Wait! Let's just find the actual file.
                // It could be missing 1 or 2 `../`.
                // Let's try to resolve it from fullPath with 1 `../`, 2 `../`, 3 `../` etc.
                let resolved = false;
                let finalRel = p1;
                
                const possiblePaths = [
                    path.resolve(path.dirname(fullPath), p1),
                    path.resolve(path.dirname(fullPath), '..', p1),
                    path.resolve(path.dirname(fullPath), '..', '..', p1),
                    path.resolve(path.dirname(fullPath), p1.replace('../', '')),
                ];
                
                for (const p of possiblePaths) {
                    if (fs.existsSync(p) || fs.existsSync(p + '.tsx') || fs.existsSync(p + '.ts') || fs.existsSync(p + '.astro') || fs.existsSync(p + '.webp') || fs.existsSync(p + '.png')) {
                        // Found it!
                        // Calculate relative path from fullPath to p
                        let newRel = path.relative(path.dirname(fullPath), p).replace(/\\/g, '/');
                        if (!newRel.startsWith('.')) {
                            newRel = './' + newRel;
                        }
                        finalRel = newRel;
                        resolved = true;
                        break;
                    }
                }
                
                if (!resolved) {
                    // Try removing the file extension to check
                }
                
                return `from "${finalRel}"`;
            });
            
            // Also fix dynamic imports or components like image={photo1.src} ?
            // The image is imported via `import photo1 from ...` which is caught above.
            
            fs.writeFileSync(fullPath, content);
        }
    }
}

fixAllImports(enDir);
console.log("Fixed all imports strictly.");
