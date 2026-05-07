const fs = require('fs');
const path = require('path');

const enFile = path.join(__dirname, 'public', 'locales', 'en', 'common.json');
const frFile = path.join(__dirname, 'public', 'locales', 'fr', 'common.json');

const en = JSON.parse(fs.readFileSync(enFile, 'utf8'));
const fr = JSON.parse(fs.readFileSync(frFile, 'utf8'));

if (!en.home) en.home = {};
if (!fr.home) fr.home = {};

// Spiritual
en.home.spiritualTitle = "Awakening Your Inner Compass";
en.home.spiritualDesc = "Spirituality is the quiet conversation between your true self and the universe. It is a profound stillness that transcends religious dogmas. Nepal is a sanctuary where the peaks of the Himalayas meet ancient wisdom. <span translate=\"no\" class=\"notranslate\">Marga Adventure</span> carves the route to self through these monumental experiences.";

fr.home.spiritualTitle = "Éveiller votre boussole intérieure";
fr.home.spiritualDesc = "La spiritualité est la conversation silencieuse entre votre véritable moi et l'univers. C'est une immobilité profonde qui transcende les dogmes religieux. Le Népal est un sanctuaire où les sommets de l'Himalaya rencontrent la sagesse ancienne. <span translate=\"no\" class=\"notranslate\">Marga Adventure</span> trace la route vers soi à travers ces expériences monumentales.";

// Photography
en.home.photographyTitle = "Capture The Soul Of Himalayas";
en.home.photographyDesc = "Chase the shifting light where earth meets heaven. From the fluttering dance of prayer flags to the ringing silence of the snow-crowned giants, We invite you to frame stories etched in stone and spirit.";

fr.home.photographyTitle = "Capturer l'âme de l'Himalaya";
fr.home.photographyDesc = "Poursuivez la lumière changeante où la terre rencontre le ciel. De la danse voltigeante des drapeaux de prière au silence résonnant des géants couronnés de neige, nous vous invitons à encadrer des histoires gravées dans la pierre et l'esprit.";

// Wildlife
en.home.wildlifeTitle = "Wild Moments";
en.home.wildlifeDesc = "Wander where the jungle breathes. Feel the vibration of the tiger’s prowl in golden grassland and watch the armored rhino emerge from the silver morning mist. This is a true Marga(path) into the heart of the wild. Every rustle reveals a new, untamed story.";

fr.home.wildlifeTitle = "Instants sauvages";
fr.home.wildlifeDesc = "Errez là où la jungle respire. Ressentez la vibration du tigre rôdant dans la prairie dorée et observez le rhinocéros cuirassé émerger de la brume argentée du matin. C'est un véritable Marga (chemin) au cœur de la nature sauvage. Chaque bruissement révèle une nouvelle histoire indomptée.";

// Trekking
en.home.trekkingTitle = "Trails of Timeless Spirit";
en.home.trekkingDesc = "Traverse ancient trails where the majesty of the Himalayas meets deep-rooted traditions. Trekking here is a physical prayer. <span translate=\"no\" class=\"notranslate\">Marga Adventure</span> would walk along with you in every encounter with vivid mani walls and the soft hum of remote monasteries.";

fr.home.trekkingTitle = "Sentiers de l'esprit intemporel";
fr.home.trekkingDesc = "Traversez des sentiers anciens où la majesté de l'Himalaya rencontre des traditions profondément enracinées. Le trekking ici est une prière physique. <span translate=\"no\" class=\"notranslate\">Marga Adventure</span> marchera à vos côtés à chaque rencontre avec les murs mani colorés et le doux bourdonnement des monastères isolés.";

// Testimonial 1
en.home.testimonial1Text = "“Having traveled for over 30 years and worked with many guides, I can confidently say Buddhiman is the best. He is organized, punctual, knowledgeable about Nepal, and a reassuring guide with genuine values. Flexible, attentive, discreet, and responsive, Boudhiman ensures the most wonderful adventures. Trust his agency to make your Nepalese dreams a reality.”";
en.home.testimonial1Author = "Pierre-Etienne Vincent";
en.home.testimonial1Role = "France, Publisher and Editor-in-Chief Le Temps d’un Voyage";

fr.home.testimonial1Text = "« Ayant voyagé pendant plus de 30 ans et travaillé avec de nombreux guides, je peux affirmer avec certitude que Buddhiman est le meilleur. Il est organisé, ponctuel, connaît parfaitement le Népal et c'est un guide rassurant avec de vraies valeurs. Flexible, attentif, discret et réactif, Buddhiman garantit les plus belles aventures. Faites confiance à son agence pour réaliser vos rêves népalais. »";
fr.home.testimonial1Author = "Pierre-Etienne Vincent";
fr.home.testimonial1Role = "France, Éditeur et rédacteur en chef du Temps d'un Voyage";

// Testimonial 2
en.home.testimonial2Text = "“Buddhimnan is an exceptional, long-time acquaintance. He is serious, professional, attentive, and speaks perfect French, simplifying communication during our Nepal trips. Cultured and passionate, he cheerfully and kindly shares his country's beauty. His extensive skills allow him to guide us on both mountain treks and sightseeing tours. I highly recommend him; he will make you love Nepal and ensure an unforgettable trip.”";
en.home.testimonial2Author = "Nelly Guigue";
en.home.testimonial2Role = "France";

fr.home.testimonial2Text = "« Buddhiman est une connaissance exceptionnelle de longue date. Il est sérieux, professionnel, à l'écoute et parle un français parfait, ce qui simplifie grandement la communication lors de nos voyages au Népal. Cultivé et passionné, il partage avec bonne humeur et bienveillance la beauté de son pays. Ses compétences étendues lui permettent de nous guider aussi bien en trek en montagne qu'en visites culturelles. Je le recommande vivement ; il vous fera aimer le Népal et vous garantira un voyage inoubliable. »";
fr.home.testimonial2Author = "Nelly Guigue";
fr.home.testimonial2Role = "France";

// Testimonial 3
en.home.testimonial3Text = "“Since 2014, Buddhiman Tamang has provided exceptional trekking experiences to me and my groups in Nepal. A warm, competent, and multilingual tour leader (French and English), he expertly tailors trips to client wishes. Highly recommended for his efficiency and positive spirit, Buddhiman ensures every journey through Nepal’s stunning regions is professional and truly unforgettable.”";
en.home.testimonial3Author = "Yvonne Decrey";
en.home.testimonial3Role = "Switzerland";

fr.home.testimonial3Text = "« Depuis 2014, Buddhiman Tamang m'a offert, ainsi qu'à mes groupes, des expériences de trekking exceptionnelles au Népal. Accompagnateur chaleureux, compétent et polyglotte (français et anglais), il adapte avec expertise les voyages aux souhaits des clients. Hautement recommandé pour son efficacité et son esprit positif, Buddhiman veille à ce que chaque voyage à travers les magnifiques régions du Népal soit professionnel et véritablement inoubliable. »";
fr.home.testimonial3Author = "Yvonne Decrey";
fr.home.testimonial3Role = "Suisse";

fs.writeFileSync(enFile, JSON.stringify(en, null, 2));
fs.writeFileSync(frFile, JSON.stringify(fr, null, 2));

console.log("Added keys successfully!");
