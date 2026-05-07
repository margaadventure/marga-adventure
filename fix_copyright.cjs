const fs = require('fs');
const path = require('path');

const enFile = path.join(__dirname, 'public', 'locales', 'en', 'common.json');
const frFile = path.join(__dirname, 'public', 'locales', 'fr', 'common.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

if (en.footer) en.footer.copyright = "© {{year}}";
if (fr.footer) fr.footer.copyright = "© {{year}}";

// Also fix the span tags in the home translations we just added!
// They will ALSO render as text in React if we use them directly with t() without dangerouslySetInnerHTML!
// Wait! In HomeContent.tsx we just use {t('home.spiritualDesc')}. That will escape the <span>!
// So let's remove the span from there too!

en.home.spiritualDesc = en.home.spiritualDesc.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
fr.home.spiritualDesc = fr.home.spiritualDesc.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');

en.home.trekkingDesc = en.home.trekkingDesc.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');
fr.home.trekkingDesc = fr.home.trekkingDesc.replace(/<span[^>]*>(.*?)<\/span>/g, '$1');

// What about other keys?
// Let's just blindly remove ANY HTML tags from all keys in common.json to be safe, but wait, maybe some use it.
// Let's just fix the home ones we just added.

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

console.log("Fixed copyright and home keys.");
