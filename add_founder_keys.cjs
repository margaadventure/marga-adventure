const fs = require('fs');
const path = require('path');

const enFile = path.join(__dirname, 'public', 'locales', 'en', 'common.json');
const frFile = path.join(__dirname, 'public', 'locales', 'fr', 'common.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

en.home.founderQuote = "\"The right path doesn't just lead to a summit, it leads you back to yourself.\"";
fr.home.founderQuote = "\"Le bon chemin ne mène pas seulement à un sommet, il vous ramène à vous-même.\"";

en.home.founderRole = "Founder & CEO";
fr.home.founderRole = "Fondateur & PDG";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

console.log("Added founder keys.");
