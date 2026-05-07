const fs = require('fs');
const path = require('path');

const enDir = path.join(__dirname, 'src', 'pages', 'en');
const frDir = path.join(__dirname, 'src', 'pages', 'fr');

function fixImports(dir, baseDir) {
    if (!fs.existsSync(dir)) return;
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            fixImports(fullPath, baseDir);
        } else if (file.endsWith('.astro') || file.endsWith('.tsx')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            
            // We want to fix `../../../` where it's too deep.
            // Actually, we can just replace all `../` chains with the correct depth.
            // A more robust way: resolve the current broken path relative to the old location?
            // No, the easiest way is to use regex.
            // If the depth of `fullPath` relative to `baseDir` is 1 (e.g. src/pages/en/about.astro)
            // Then from `src/pages/en/about.astro` to `src/components/` is `../../components/`
            const depth = path.relative(path.join(__dirname, 'src', 'pages'), fullPath).split(path.sep).length - 1;
            // depth for src/pages/en/about.astro is 1. We need 2 `../` to reach `src/`
            const correctPrefix = '../'.repeat(depth + 1);
            
            // replace `from "../../../` with `from "../../`
            // Instead of guessing, let's just do a simple string replace for all known paths if they are broken.
            // Since `reorganize_pages.cjs` blindly added one `../` to EVERYTHING in `en/`:
            // Let's just remove one `../` from every `from "../` in `en/` ONLY!
            // Wait, why did `reorganize` add `../`?
            // Because I used: `content.replace(/from\s+["'](\.\.\/)/g, 'from "../$1');`
            // Let's reverse that: `content.replace(/from\s+["']\.\.\//g, 'from "');` wait no!
            // `from "../../../` -> `from "../../`
            
            if (dir.includes('pages' + path.sep + 'en')) {
                // Revert the exact regex from reorganize:
                content = content.replace(/from\s+["']\.\.\/(\.\.\/)/g, 'from "$1');
                content = content.replace(/import\s+([a-zA-Z0-9_{}\s,]+)\s+from\s+["']\.\.\/(\.\.\/)/g, 'import $1 from "$2');
                fs.writeFileSync(fullPath, content);
            }
        }
    }
}

fixImports(enDir, enDir);
console.log("Fixed imports in enDir");
