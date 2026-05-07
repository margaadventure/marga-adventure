const fs = require('fs');

const pathEN = 'public/locales/en/trips.json';
const pathFR = 'public/locales/fr/trips.json';

const enData = JSON.parse(fs.readFileSync(pathEN, 'utf8'));
const frData = JSON.parse(fs.readFileSync(pathFR, 'utf8'));

// INNER PEACE (EN)
enData.spiritual.innerPeaceTrip = {
    title: "The Path to Inner Peace",
    subtitle: "Wellness Journey",
    overview: "This transformative wellness journey in Nepal blends ancient Himalayan spirituality with restorative nature experiences. Designed to realign the mind, body, and spirit, the trip takes you from the energy centers of Kathmandu to the serene lakeside of Pokhara. Through sound healing, monastery visits, and mountain yoga, you will disconnect from daily stress and reconnect with your inner self amidst the world’s highest peaks.",
    highlights: [
        { title: "Tibetan Sound Healing", description: "Experience deep vibrational therapy with singing bowls to release tension and align chakras." },
        { title: "Monastery Immersion", description: "Participate in a private meditation session with monks at a hilltop monastery near Boudhanath." },
        { title: "Sunrise Yoga", description: "Practice mindfulness facing the Annapurna range at Sarangkot as the sun illuminates the Himalayas." },
        { title: "Ayurvedic Rejuvenation", description: "Indulge in a traditional massage using herbal oils sourced from the Nepalese highlands." },
        { title: "Peace Pagoda Hike", description: "A silent, meditative walk through the forest to the World Peace Pagoda overlooking Phewa Lake." }
    ],
    itinerary: [
        { day: "Day 1", title: "Arrival, transfer to hotel and Vibrational Alignment", description: "Upon arrival in Kathmandu, you will be transferred to your tranquil hotel away from the city's bustle. The journey begins with a gentle orientation followed by a traditional Tibetan Sound Healing session in the evening. The deep vibrations of the handmade singing bowls will help clear travel fatigue and ground your energy. Enjoy a light, organic vegetarian dinner to prepare your body for the week ahead." },
        { day: "Day 2", title: "Spiritual Awakening in Boudhanath Stupa", description: "Start with a sunrise mindfulness practice before visiting the Boudhanath Stupa, the center of Tibetan Buddhism in Nepal. You will light butter lamps and circumambulate the dome with local pilgrims. In the afternoon, travel to a nearby monastery Kopan for a private guided meditation and a dharma talk on compassion. The day ends with a silent reflection period at your hotel." },
        { day: "Day 3", title: "Journey to the Lake City", description: 'Fly to Pokhara, a city renowned for its healing energy and stunning lakes. After checking into your lakeside wellness resort, take a "forest bathing" walk along the shores of Phewa Lake. In the afternoon, enjoy a private boat ride to the Tal Barahi Temple, situated on an island. Use this time to connect with the element of water, allowing the stillness of the lake to calm your mind.' },
        { day: "Day 4", title: "Mountain Energy and Inner Peace", description: "Rise early for a drive to Sarangkot for a mignificant sunrise over Annapurna range then back to hotel for yoga session. Afterward, hike silently up to the World Peace Pagoda. This white stupa offers panoramic views and a profound sense of serenity. Spend the afternoon journaling or resting in the resort’s garden." },
        { day: "Day 5", title: "Ayurvedic Healing and Grounding", description: 'Today focuses on physical restoration through Ayurveda. After a morning meditation, visit a specialized wellness center for a consultation and a traditional Ayurvedic massage using warm herbal oils. In the afternoon, visit the Gupteshwor Cave to experience the grounding energy of the earth element. The evening is reserved for a "Trataka" (candle gazing) meditation to improve focus and inner clarity before sleep.' },
        { day: "Day 6", title: "Ancient Roots and Reflection", description: "Fly back to Kathmandu and travel to the medieval city of Bhaktapur. Walk through its car-free cobblestone streets, observing the slow pace of life and ancient craftsmanship. You will participate in a clay pottery workshop, a grounding activity that connects you tactilely to the earth. In the evening, enjoy a farewell dinner with a traditional cultural performance, celebrating the journey you have undertaken." },
        { day: "Day 7", title: "Departure with Gratitude", description: 'Begin your final morning with a gratitude circle and a short closing ceremony to seal the benefits of your practice. Depending on your flight schedule, you may have time for last-minute souvenir shopping for singing bowls or incense. You will be transferred to the airport with a renewed sense of purpose and a "khada" (ceremonial scarf) for safe travels and good fortune.' }
    ]
};

// INNER PEACE (FR)
frData.spiritual.innerPeaceTrip = {
    title: "Le chemin vers la paix intérieure",
    subtitle: "Voyage Bien-Être",
    overview: "Ce voyage de bien-être transformateur au Népal associe l'ancienne spiritualité himalayenne à des expériences de nature réparatrices. Conçu pour réaligner l'esprit, le corps et l'âme, le voyage vous emmène des centres énergétiques de Katmandou aux rives sereines de Pokhara. Par la guérison par le son, les visites de monastères et le yoga en montagne, vous vous déconnecterez du stress quotidien et vous vous reconnecterez à votre moi intérieur au milieu des plus hauts sommets du monde.",
    highlights: [
        { title: "Guérison par le Son Tibétain", description: "Expérimentez une thérapie vibratoire profonde avec des bols chantants pour relâcher les tensions et aligner les chakras." },
        { title: "Immersion Monastique", description: "Participez à une séance de méditation privée avec des moines dans un monastère au sommet d'une colline près de Boudhanath." },
        { title: "Yoga au Lever du Soleil", description: "Pratiquez la pleine conscience face à la chaîne des Annapurnas à Sarangkot alors que le soleil illumine l'Himalaya." },
        { title: "Rajeunissement Ayurvédique", description: "Laissez-vous tenter par un massage traditionnel à l'aide d'huiles végétales provenant des hauts plateaux népalais." },
        { title: "Randonnée à la Pagode de la Paix", description: "Une marche méditative silencieuse à travers la forêt jusqu'à la pagode de la paix mondiale surplombant le lac Phewa." }
    ],
    itinerary: [
        { day: "Jour 1", title: "Arrivée, transfert à l'hôtel et Alignement Vibratoire", description: "À votre arrivée à Katmandou, transfert à votre hôtel tranquille. La journée commence par une orientation en douceur suivie d'une séance traditionnelle de guérison par le son tibétain en soirée." },
        { day: "Jour 2", title: "Éveil Spirituel au Stupa de Boudhanath", description: "Commencez par une pratique de pleine conscience au lever du soleil avant de visiter le stupa de Boudhanath. L'après-midi, visite du monastère de Kopan." },
        { day: "Jour 3", title: "Voyage vers la Ville des Lacs", description: "Vol pour Pokhara. Profitez d'une promenade en forêt le long des rives du lac Phewa. L'après-midi, promenade en bateau privé jusqu'au temple de Tal Barahi." },
        { day: "Jour 4", title: "Énergie de la Montagne et Paix Intérieure", description: "Route matinale vers Sarangkot pour un magnifique lever de soleil sur la chaîne des Annapurnas, puis retour à l'hôtel pour une séance de yoga. Ensuite, marche silencieuse jusqu'à la pagode de la paix mondiale." },
        { day: "Jour 5", title: "Guérison Ayurvédique et Enracinement", description: "Visite d'un centre de bien-être spécialisé pour une consultation et un massage ayurvédique traditionnel. L'après-midi, visite de la grotte de Gupteshwor." },
        { day: "Jour 6", title: "Racines Anciennes et Réflexion", description: "Vol de retour pour Katmandou et voyage vers la ville médiévale de Bhaktapur. Participez à un atelier de poterie en argile." },
        { day: "Jour 7", title: "Départ avec Gratitude", description: "Cercle de gratitude et courte cérémonie de clôture. Transfert à l'aéroport avec une écharpe cérémonielle 'khada'." }
    ]
};

// SUMMIT WITHIN (EN)
enData.spiritual.summitTrip = {
    title: "The Summit Within",
    overview: "\"The Summit Within\" is a transformative journey inspired by the philosophy that the ultimate peak to scale is the one inside the mind. Primarily set in the Everest or Manaslu regions, this expedition blends the physical grit of high-altitude trekking with deep psychological inquiry. What makes this unique is its metaphorical approach to mountaineering. Unlike standard treks focused on the destination, this program uses the mountain's challenges—thin air, steep ascents, and isolation—as tools for self-realization. Participants engage in structured \"reflective pauses\" at high passes, using the vast Himalayan silence to confront internal obstacles and achieve a \"summit\" of clarity and resilience.",
    highlights: [
        { title: "The Inner Peak", description: "Embrace the philosophy that the ultimate peak to scale is the one inside the mind." },
        { title: "Reflective Pauses", description: "Engage in structured reflective sessions at high passes, using the vast silence to confront internal obstacles." },
        { title: "Summit of Clarity", description: "Achieve a 'summit' of personal resilience and mental clarity through the rigors of high-altitude trekking." },
        { title: "Psychological Inquiry", description: "Blend the physical grit of trekking with deep psychological exploration in the Everest or Manaslu regions." },
        { title: "Himalayan Silence", description: "Use the profound isolation and silence of the mountains to disconnect from noise and reconnect with your core self." },
        { title: "Transformative Grit", description: "Develop mental fortitude as you overcome the physical demands of the Himalayas." }
    ],
    features: [
        { title: "Metaphorical Mountaineering", description: "Unlike standard treks focused solely on the destination, this program uses the mountain's physical challenges—thin air, steep ascents, and isolation—as powerful metaphors and tools for self-realization. It is a journey where the outer landscape mirrors the inner one." }
    ]
};

// SUMMIT WITHIN (FR)
frData.spiritual.summitTrip = {
    title: "Le sommet intérieur",
    overview: "\"Le sommet intérieur\" est un voyage transformateur inspiré par la philosophie selon laquelle le sommet ultime à gravir est celui de l'esprit. Située principalement dans les régions de l'Everest ou du Manaslu, cette expédition associe le courage physique du trekking en haute altitude à une profonde introspection psychologique. Ce programme utilise les défis de la montagne comme outils de réalisation de soi.",
    highlights: [
        { title: "Le Sommet Intérieur", description: "Adoptez la philosophie selon laquelle le sommet ultime à gravir est celui de l'esprit." },
        { title: "Pauses Réflexives", description: "Participez à des sessions de réflexion structurées aux cols de haute altitude, en utilisant le vaste silence pour affronter les obstacles internes." },
        { title: "Sommet de Clarté", description: "Atteignez un « sommet » de résilience personnelle et de clarté mentale à travers les rigueurs du trekking en haute altitude." },
        { title: "Exploration Psychologique", description: "Mélangez le courage physique du trekking avec une exploration psychologique profonde dans les régions de l'Everest ou du Manaslu." },
        { title: "Silence Himalayen", description: "Utilisez l'isolement profond et le silence des montagnes pour vous déconnecter du bruit et vous reconnecter à votre être profond." },
        { title: "Courage Transformateur", description: "Développez une force mentale en surmontant les exigences physiques de l'Himalaya." }
    ],
    features: [
        { title: "Alpinisme Métaphorique", description: "Contrairement aux treks standards, ce programme utilise les défis physiques de la montagne comme de puissantes métaphores et des outils de réalisation de soi." }
    ]
};

// YOGA TREK (EN)
enData.spiritual.yogaTrip = {
    title: "Himalayan Yoga Trek",
    overview: "A Himalayan yoga trek in Nepal is a transformative fusion of physical challenge and spiritual serenity, set against the world's most dramatic skyline. Traveling through the Annapurna or Everest regions, participants begin and end each day with guided asanas, pranayama (breathwork), and meditation in the shadow of 8,000-meter peaks. What makes this journey unique is the \"altitude-yoga\" synergy. The deep breathing techniques of yoga are scientifically utilized to aid acclimatization, turning the trek into a moving meditation. Practicing in the \"Abode of the Divine,\" you connect with ancient traditions in remote monasteries and high-altitude lakes, finding a level of inner stillness rarely achievable in a city studio.",
    highlights: [
        { title: "Skyline Asanas", description: "Practice guided asanas and meditation against the backdrop of the world’s most dramatic skyline and 8,000-meter peaks." },
        { title: "Moving Meditation", description: "Experience trekking as a spiritual practice, with every step and breath synchronized in the 'Abode of the Divine'." },
        { title: "Acclimatization", description: "Utilize Pranayama (breathwork) techniques to naturally aid your body's adaptation to high altitudes." },
        { title: "Inner Stillness", description: "Find a level of silence and inner peace in remote monasteries and high-altitude lakes that is rarely achievable in a city." },
        { title: "Ancient Traditions", description: "Connect with centuries-old spiritual traditions in the sacred spaces of the Annapurna or Everest regions." },
        { title: "Holistic Wellness", description: "A transformative fusion of physical trekking challenges and the spiritual serenity of yoga practice." }
    ],
    features: [
        { title: "Altitude-Yoga Synergy", description: "What makes this journey unique is the scientifically utilized deep breathing techniques of yoga to aid acclimatization. This 'altitude-yoga' synergy turns the trek into a moving meditation, allowing for a deeper connection with both the mountains and oneself." }
    ]
};

// YOGA TREK (FR)
frData.spiritual.yogaTrip = {
    title: "Trek Yoga dans l'Himalaya",
    overview: "Un trek de yoga himalayen au Népal est une fusion transformatrice de défi physique et de sérénité spirituelle, avec pour toile de fond la ligne d'horizon la plus spectaculaire du monde. En voyageant à travers les régions de l'Annapurna ou de l'Everest, les participants commencent et terminent chaque journée avec des asanas guidés, du pranayama (travail de la respiration) et de la méditation à l'ombre des sommets de 8 000 mètres. Ce qui rend ce voyage unique, c'est la synergie « altitude-yoga ».",
    highlights: [
        { title: "Asanas avec Vue", description: "Pratiquez des asanas guidés et de la méditation avec en toile de fond la ligne d'horizon la plus spectaculaire du monde et les sommets de 8 000 mètres." },
        { title: "Méditation en Mouvement", description: "Vivez le trekking comme une pratique spirituelle, chaque pas et chaque respiration étant synchronisés." },
        { title: "Acclimatation", description: "Utilisez des techniques de Pranayama (travail de la respiration) pour aider naturellement votre corps à s'adapter aux hautes altitudes." },
        { title: "Immobilité Intérieure", description: "Trouvez un niveau de silence et de paix intérieure dans les monastères isolés et les lacs de haute altitude." },
        { title: "Traditions Anciennes", description: "Connectez-vous à des traditions spirituelles séculaires dans les espaces sacrés des régions de l'Annapurna ou de l'Everest." },
        { title: "Bien-Être Holistique", description: "Une fusion transformatrice des défis physiques du trekking et de la sérénité spirituelle de la pratique du yoga." }
    ],
    features: [
        { title: "Synergie Altitude-Yoga", description: "Ce qui rend ce voyage unique, c'est l'utilisation scientifique de techniques de respiration profonde pour favoriser l'acclimatation." }
    ]
};

fs.writeFileSync(pathEN, JSON.stringify(enData, null, 2));
fs.writeFileSync(pathFR, JSON.stringify(frData, null, 2));

// NOW REWRITE THE ASTRO FILES
const updateFile = (path, componentName, tripKey, dictProps, extraContent) => {
    let content = fs.readFileSync(path, 'utf8');
    
    // Replace all constant arrays
    const topPart = content.split('const ')[0];
    
    let newContent = topPart + `
const { tripData, dict } = await useAstroI18n(Astro.url);
const lang = Astro.params.lang as Locale;
const trip = tripData("${tripKey}") || {};
---
<Layout
    title={\`\${trip.title} | Marga Adventure\`}
    image={${extraContent.image}}
    keywords="${extraContent.keywords}"
>
    <${componentName}
        title={trip.title}
${dictProps}
        overview={trip.overview || ''}
        highlights={trip.highlights || []}
${extraContent.features ? '        features={trip.features || []}\n' : ''}${extraContent.itinerary ? '        itinerary={trip.itinerary || []}\n' : ''}        ${extraContent.tripStats}
        client:visible
        initialLocale={lang}
        initialDict={dict} />
</Layout>
`;

    // keep imports at top
    const imports = content.match(/import .* from .*;/g).join('\\n');
    const layoutMatch = content.match(/---[\\s\\S]*?---/);
    if (!layoutMatch) return;

    // manual rewrite is safer
};

// I'll do a simpler replacement for the astro files.
// Read content, split by "const highlights" or something to discard everything but imports, then reconstruct.
