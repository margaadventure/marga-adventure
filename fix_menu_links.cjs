const fs = require('fs');
const path = require('path');

const menuFile = path.join(__dirname, 'src', 'components', 'MenuOverlay.tsx');
let menuContent = fs.readFileSync(menuFile, 'utf8');

// Fix `href="/en"` to `href={\`/${locale}\`}`
menuContent = menuContent.replace(/href="\/en"/g, 'href={`/${locale}`}');

// Fix hardcoded links like href="/community"
menuContent = menuContent.replace(/href="\/([^"]+)"/g, (match, p1) => {
    if (p1.startsWith('http') || p1 === 'en' || p1.startsWith('${')) return match;
    return `href={\`/\${locale}/${p1}\`}`;
});

// Fix dynamic links like href={item.href}
menuContent = menuContent.replace(/href=\{item\.href\}/g, 'href={`/${locale}${item.href === \'/\' ? \'\' : item.href}`}');

// Fix href="/nepal"
// Note: Some might be caught by the first regex. Let's check.
// `href="/nepal"` was replaced to `href={\`/${locale}/nepal\`}` which is correct.

fs.writeFileSync(menuFile, menuContent);
console.log("Updated MenuOverlay.tsx links");
