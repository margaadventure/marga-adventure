const fs = require('fs');

const pathEN = 'public/locales/en/trips.json';
const pathFR = 'public/locales/fr/trips.json';

const enData = JSON.parse(fs.readFileSync(pathEN, 'utf8'));
const frData = JSON.parse(fs.readFileSync(pathFR, 'utf8'));

// 1. SHAMAN
enData.photography.shaman = {
    title: "Shaman Festival",
    overview: "A shaman festival in Lukum Village, East Rukum, is a rare photographic odyssey into the heart of Kham Magar mysticism. Celebrated during Sawan Sankranti (mid-July), this gathering sees dozens of Jhankris (shamans) converge to perform rhythmic dances and \"spirit-capture\" rituals to protect the community. The uniqueness of Lukum lies in its shamanistic practices, featuring rare artifacts like single-skin drums and leather armor decorated with bells and animal attributes. Photographers capture an untouched, primitive culture where ancient trances and ancestral offerings unfold against a backdrop of traditional stone houses and the rugged Dhorpatan landscape.",
    features: [
        { title: "Kham Magar Mysticism", description: "Lukum Village in East Rukum offers a rare glimpse into an untouched, primitive culture. The Shaman Festival is a photographic odyssey into the heart of ancient beliefs, featuring rhythmic dances and spirit-capture rituals aimed at protecting the community." }
    ],
    highlights: [
        { title: "Sawan Sankranti", description: "Witness dozens of Jhankris (shamans) converging in mid-July for a powerful display of faith and tradition." },
        { title: "Rare Artifacts", description: "Photograph unique shamanistic tools, including single-skin drums and leather armor adorned with bells and animal attributes." },
        { title: "Primitive Culture", description: "Capture the raw essence of an untouched culture where ancient trances and ancestral offerings are still a way of life." },
        { title: "Dramatic Backdrop", description: "Frame your shots against the rugged landscapes of Dhorpatan and the traditional stone houses of Lukum Village." },
        { title: "Spirit Capture", description: "Document the intense 'spirit-capture' rituals, a central part of the festival's purpose to safeguard the village." },
        { title: "Exclusive Access", description: "Gain access to a remote and rarely visited region, ensuring a portfolio of truly unique and exclusive images." }
    ]
};

frData.photography.shaman = {
    title: "Festival des Chamanes",
    overview: "Un festival de chamanes dans le village de Lukum, East Rukum, est une rare odyssée photographique au cœur du mysticisme Kham Magar. Célébré pendant Sawan Sankranti (mi-juillet), ce rassemblement voit des dizaines de Jhankris (chamanes) converger pour exécuter des danses rythmées et des rituels de « capture d'esprit » pour protéger la communauté. La particularité de Lukum réside dans ses pratiques chamaniques, mettant en vedette des objets rares comme des tambours à une seule peau et des armures en cuir décorées de cloches et d'attributs d'animaux. Les photographes capturent une culture primitive intacte où les transes anciennes et les offrandes ancestrales se déroulent sur fond de maisons traditionnelles en pierre et du paysage accidenté de Dhorpatan.",
    features: [
        { title: "Mysticisme Kham Magar", description: "Le village de Lukum, dans l'East Rukum, offre un aperçu rare d'une culture primitive intacte. Le Festival des Chamanes est une odyssée photographique au cœur des croyances anciennes, avec des danses rythmées et des rituels de capture d'esprit visant à protéger la communauté." }
    ],
    highlights: [
        { title: "Sawan Sankranti", description: "Soyez témoin de la convergence de dizaines de Jhankris (chamanes) à la mi-juillet pour une puissante démonstration de foi et de tradition." },
        { title: "Artefacts rares", description: "Photographiez des outils chamaniques uniques, y compris des tambours à une seule peau et des armures en cuir ornées de cloches et d'attributs d'animaux." },
        { title: "Culture primitive", description: "Capturez l'essence brute d'une culture intacte où les transes anciennes et les offrandes ancestrales sont encore un mode de vie." },
        { title: "Toile de fond spectaculaire", description: "Cadrez vos photos contre les paysages accidentés de Dhorpatan et les maisons traditionnelles en pierre du village de Lukum." },
        { title: "Capture d'esprit", description: "Documentez les rituels intenses de « capture d'esprit », un élément central de l'objectif du festival de sauvegarder le village." },
        { title: "Accès exclusif", description: "Accédez à une région isolée et rarement visitée, garantissant un portfolio d'images vraiment uniques et exclusives." }
    ]
};

// 2. MUSTANG
enData.photography.mustang = {
    title: "Mustang & Chitwan Photography Expedition",
    overview: "This 14-day photography expedition takes you from the jungles of Chitwan to the forbidden kingdom of Upper Mustang. The itinerary is anchored by the vibrant Tiji Festival in Lomanthang, offering a rare chance to document ancient Tibetan rituals. You will capture the architectural diversity of Kathmandu, the wildlife of the Terai, and the stark, high-altitude desert landscapes of the Trans-Himalaya. It is a journey of extreme contrasts, designed to build a diverse and powerful photographic portfolio.",
    highlights: [
        { title: "Tiji Festival Masks", description: "Freeze the dramatic motion of monks in brocade costumes performing the \"Demon Chasing\" dances in Lomanthang." },
        { title: "Upper Mustang Landscapes", description: "Capture the surreal red cliffs of Ghami and the moon-like terrain of the Tibetan plateau." },
        { title: "Lomanthang Walled City", description: "Photograph the medieval walled capital, its narrow alleys, and the daily life of the Lopa people." },
        { title: "Chitwan Wildlife", description: "Shoot one-horned rhinos and spotted deer in the soft, misty morning light of the jungle." },
        { title: "Aerial Mountain Views", description: "Capture the Dhaulagiri and Annapurna ranges from above during the dramatic Jomsom-Pokhara flight." },
        { title: "Boudhanath Kora", description: "Document the devotion of pilgrims circumambulating the massive white dome of the stupa." },
        { title: "Market Colors", description: "Close-up macro shots of vibrant produce and the chaotic trade energy at Kathmandu’s vegetable markets." }
    ],
    itinerary: [
        { day: "Day 1", title: "Arrival and transfer to hotel", description: "Upon arrival, transfer to your hotel and prepare your gear." },
        { day: "Day 2", title: "Visit Patan, Swayambhunath Stupa, and Pashupatinath temple", description: "Start at Patan Durbar Square to photograph the intricate stone carvings and golden temples." },
        { day: "Day 3", title: "Boudhanath Stupa and Bhaktapur Durbar Square", description: "Begin at Boudhanath Stupa, focusing on the symmetry of the eyes and the motion of pilgrims." },
        { day: "Day 4", title: "Drive to Chitwan", description: "The drive takes you from the hills to the flat Terai plains." },
        { day: "Day 5", title: "Chitwan, Jungle Safari", description: "Utilize your longest lens for the jungle safari to capture the one-horned rhino." },
        { day: "Day 6", title: "Drive to Pokhara", description: "This drive offers scenic transitions. Stop at vantage points to photograph the terraced fields." },
        { day: "Day 7", title: "Drive to Jomsom", description: "This is a long, rugged journey offering raw adventure photography." },
        { day: "Day 8", title: "Drive Jomsom to Ghami", description: "Enter the stark, high-altitude desert of Upper Mustang." },
        { day: "Day 9", title: "Drive Ghami to Lomanthang", description: "The drive to the walled capital of Lomanthang is visually spectacular." },
        { day: "Day 10", title: "Tiji Festival", description: "This is the visual climax of the trip in the main square of Lomanthang." },
        { day: "Day 11", title: "Visit Lomanthang and Koncholing", description: "Explore the mysteries of the sky caves at Koncholing." },
        { day: "Day 12", title: "Drive back to Jomsom", description: "Retrace your path through the desert, with a different lighting perspective." },
        { day: "Day 13", title: "Flight Jomsom to Pokhara and Pokhara to Kathmandu", description: "The early morning flight provides one of the best aerial photography opportunities." },
        { day: "Day 14", title: "Visit Vegetable and fruits market and afternoon leisure", description: "Visit the wholesale Kalimati or Ason market early in the morning." }
    ]
};

frData.photography.mustang = {
    title: "Expédition Photographique au Mustang et à Chitwan",
    overview: "Cette expédition photographique de 14 jours vous emmène des jungles de Chitwan au royaume interdit du Haut Mustang. L'itinéraire est ancré par le vibrant festival de Tiji à Lo Manthang, offrant une occasion rare de documenter d'anciens rituels tibétains. Vous capturerez la diversité architecturale de Katmandou, la faune du Téraï et les paysages désertiques austères de haute altitude du Trans-Himalaya.",
    highlights: [
        { title: "Masques du Festival Tiji", description: "Figez le mouvement dramatique des moines en costumes de brocart exécutant les danses de « Chasse aux démons » à Lo Manthang." },
        { title: "Paysages du Haut Mustang", description: "Capturez les falaises rouges surréalistes de Ghami et le terrain lunaire du plateau tibétain." },
        { title: "Ville fortifiée de Lo Manthang", description: "Photographiez la capitale médiévale fortifiée, ses ruelles étroites et la vie quotidienne du peuple Lopa." },
        { title: "Faune de Chitwan", description: "Photographiez des rhinocéros unicornes et des cerfs tachetés dans la douce lumière matinale et brumeuse de la jungle." },
        { title: "Vues Aériennes des Montagnes", description: "Capturez les chaînes du Dhaulagiri et de l'Annapurna d'en haut lors du vol dramatique Jomsom-Pokhara." },
        { title: "Kora de Boudhanath", description: "Documentez la dévotion des pèlerins qui tournent autour du dôme blanc massif du stupa." },
        { title: "Couleurs du Marché", description: "Des gros plans macro de produits vibrants et l'énergie chaotique du commerce sur les marchés de légumes de Katmandou." }
    ],
    itinerary: [
        { day: "Jour 1", title: "Arrivée et transfert à l'hôtel", description: "Dès votre arrivée, transfert à votre hôtel et préparation de votre équipement." },
        { day: "Jour 2", title: "Visite de Patan, du stupa de Swayambhunath et du temple de Pashupatinath", description: "Commencez par la place Durbar de Patan pour photographier les sculptures en pierre complexes." },
        { day: "Jour 3", title: "Stupa de Boudhanath et place Durbar de Bhaktapur", description: "Commencez par le stupa de Boudhanath, en vous concentrant sur la symétrie des yeux." },
        { day: "Jour 4", title: "Route pour Chitwan", description: "Le trajet vous emmène des collines aux plaines plates du Téraï." },
        { day: "Jour 5", title: "Chitwan, Safari dans la jungle", description: "Utilisez votre plus long objectif pour le safari dans la jungle." },
        { day: "Jour 6", title: "Route pour Pokhara", description: "Ce trajet offre des transitions panoramiques. Arrêtez-vous à des points de vue pour photographier les champs en terrasses." },
        { day: "Jour 7", title: "Route pour Jomsom", description: "C'est un long voyage accidenté offrant des paysages d'aventure bruts." },
        { day: "Jour 8", title: "Route de Jomsom à Ghami", description: "Entrez dans le désert austère de haute altitude du Haut Mustang." },
        { day: "Jour 9", title: "Route de Ghami à Lo Manthang", description: "La route vers la capitale fortifiée de Lo Manthang est visuellement spectaculaire." },
        { day: "Jour 10", title: "Festival Tiji", description: "C'est l'apogée visuel du voyage sur la place principale de Lo Manthang." },
        { day: "Jour 11", title: "Visite de Lo Manthang et Koncholing", description: "Explorez les mystères des grottes célestes à Koncholing." },
        { day: "Jour 12", title: "Route de retour à Jomsom", description: "Retracez votre chemin à travers le désert, avec une perspective d'éclairage différente." },
        { day: "Jour 13", title: "Vol Jomsom vers Pokhara et Pokhara vers Katmandou", description: "Le vol tôt le matin offre l'une des meilleures opportunités de photographie aérienne." },
        { day: "Jour 14", title: "Visite du marché aux fruits et légumes et après-midi libre", description: "Visitez le marché de gros de Kalimati ou d'Ason tôt le matin." }
    ]
};

// 3. TSHECHU ITINERARY
enData.photography.tshechu.itinerary = [
    { day: "Day 1", title: "Arrival and transfer to hotel", description: "Arrive in Kathmandu and transfer to your hotel. Use this day to acclimatize." },
    { day: "Day 2", title: "Visit Patan, Swayambhunath, and Pashupatinath temple", description: "Start with the intricate golden details and Newari architecture of Patan Durbar Square." },
    { day: "Day 3", title: "Boudhanath and Shechen Monastery Tsechu Festival", description: "Begin with the symmetry of the colossal Boudhanath Stupa. Move to Shechen Monastery for the Tsechu Festival." },
    { day: "Day 4", title: "Travel to Bhaktapur, Bisket Jatra", description: "As the Bisket Jatra begins, document the assembly of the massive wooden chariot." },
    { day: "Day 5", title: "Bhaktapur Bisket Jatra", description: "Immerse yourself in the high energy of the festival. Today is about action photography." },
    { day: "Day 6", title: "Bhaktapur Bisket Jatra - The Climax", description: "Focus on the climax of the festival, often involving the raising of the Yashin." },
    { day: "Day 7", title: "Drive to Chitwan", description: "The drive to the lowlands offers a shift in landscape photography." },
    { day: "Day 8", title: "Chitwan, Jungle Safari", description: "Switch to your longest telephoto lens for wildlife." },
    { day: "Day 9", title: "Drive to Bandipur", description: "Bandipur is a gem for street photography without the chaos." },
    { day: "Day 10", title: "Drive to Pokhara", description: "The drive offers scenic valley views, but the highlight awaits in Pokhara." },
    { day: "Day 11", title: "Drive to Ghandruk", description: "This journey takes you up close to the peaks." },
    { day: "Day 12", title: "Drive back to Pokhara", description: "Wake up before dawn for the sunrise over the mountains." },
    { day: "Day 13", title: "Fly back to Kathmandu", description: "You will get an opportunity to take aerial shots of the Himalayas." },
    { day: "Day 14", title: "Departure", description: "Use these final hours for detail-oriented shots." }
];

frData.photography.tshechu.itinerary = [
    { day: "Jour 1", title: "Arrivée et transfert à l'hôtel", description: "Arrivez à Katmandou et transfert à votre hôtel. Utilisez cette journée pour vous acclimater." },
    { day: "Jour 2", title: "Visite de Patan, Swayambhunath et temple de Pashupatinath", description: "Commencez par les détails dorés complexes et l'architecture Newari de la place Durbar de Patan." },
    { day: "Jour 3", title: "Boudhanath et festival Tsechu du monastère de Shechen", description: "Commencez par la symétrie du colossal stupa de Boudhanath. Déplacez-vous au monastère de Shechen pour le festival de Tsechu." },
    { day: "Jour 4", title: "Voyage à Bhaktapur, Bisket Jatra", description: "Alors que le Bisket Jatra commence, documentez l'assemblage de l'énorme char en bois." },
    { day: "Jour 5", title: "Bhaktapur Bisket Jatra", description: "Plongez dans la grande énergie du festival. Aujourd'hui est consacré à la photographie d'action." },
    { day: "Jour 6", title: "Bhaktapur Bisket Jatra - L'apogée", description: "Concentrez-vous sur l'apogée du festival, impliquant souvent le levage du Yashin." },
    { day: "Jour 7", title: "Route pour Chitwan", description: "La route vers les basses terres offre un changement dans la photographie de paysage." },
    { day: "Jour 8", title: "Chitwan, Safari dans la jungle", description: "Passez à votre téléobjectif le plus long pour la faune." },
    { day: "Jour 9", title: "Route pour Bandipur", description: "Bandipur est un joyau pour la photographie de rue sans le chaos." },
    { day: "Jour 10", title: "Route pour Pokhara", description: "La route offre des vues panoramiques sur la vallée, mais le point culminant vous attend à Pokhara." },
    { day: "Jour 11", title: "Route pour Ghandruk", description: "Ce voyage vous emmène au plus près des sommets." },
    { day: "Jour 12", title: "Route de retour à Pokhara", description: "Réveillez-vous avant l'aube pour le lever du soleil sur les montagnes." },
    { day: "Jour 13", title: "Vol de retour à Katmandou", description: "Vous aurez l'occasion de prendre des photos aériennes de l'Himalaya." },
    { day: "Jour 14", title: "Départ", description: "Utilisez ces dernières heures pour des photos détaillées." }
];

fs.writeFileSync(pathEN, JSON.stringify(enData, null, 2));
fs.writeFileSync(pathFR, JSON.stringify(frData, null, 2));
console.log("trips.json updated.");
