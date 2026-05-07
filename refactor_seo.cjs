const fs = require('fs');
const path = require('path');

function processDirectory(dir) {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            processDirectory(fullPath);
        } else if (file.endsWith('.astro')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;

            // Simple replacements for layout meta tags
            // Usually we'd map "title" to a dictionary key, but let's just use simple mapping
            // or maybe just replace 'Marga Adventure' with '<span translate="no">Marga Adventure</span>'
            // NO, the user said wrap it in `span`. But for `title="..."` we can't use span!
            // Wait, Astro <title> is just text. The user's instruction:
            // `"Marga Adventure" must NEVER be translated or modified. Wrap it with: <span translate="no">Marga Adventure</span>`
            // Let's replace "Marga Adventure" -> "<span class=\"notranslate\" translate=\"no\">Marga Adventure</span>" everywhere EXCEPT inside attributes like title="", description="", content="", etc.
            
            // Actually, we already did it for common.json!
            // Let's replace "Marga Adventure" with "<span translate=\"no\">Marga Adventure</span>" in Astro files, BUT we need to be careful with layout props!
            
            // Let's just fix the missing `<span translate="no">` in Layout.astro
            // And any other Astro files.
        }
    }
}
// processDirectory(path.join(__dirname, 'src', 'pages'));
