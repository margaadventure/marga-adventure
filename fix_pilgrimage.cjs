const fs = require('fs');
let content = fs.readFileSync('src/pages/[lang]/spiritual/buddhist-pilgrimage.astro', 'utf8');

// Extract imports up to line 11 (import type { Locale }...)
const topPart = content.split('const itinerary = [')[0];

const newContent = topPart + `const { tripData } = await useAstroI18n(Astro.url);
const lang = Astro.params.lang as Locale;
const trip = tripData("spiritual.pilgrimageTrip") || {};
---
<Layout
    title={\`\${trip.title || 'A Buddhist Pilgrimage'} | Marga Adventure\`}
    image={bgImage.src}
    keywords="Buddhist Pilgrimage Nepal, Lumbini travel, Boudhanath Stupa, meditation retreat Nepal, spiritual journey Nepal"
>
    <TripItineraryPage
        title={trip.title || 'A Buddhist Pilgrimage'}
        subtitle={trip.subtitle || 'Path of Enlightenment'}
        heroImage={bgImage.src}
        overview={trip.overview || ''}
        highlights={trip.highlights || []}
        itinerary={trip.itinerary || []}
        tripStats={{
            duration: trip.duration || '7 Days',
            maxAltitude: trip.maxAltitude || 'Culture / Spirit',
            maxAltitudeLabel: trip.maxAltitudeLabel || 'Trip Type',
            difficulty: trip.difficulty || 'Easy',
            groupSize: trip.groupSize || '2-10',
        }}
        showElevationGraph={false}
        client:visible
     initialLocale={lang} />
</Layout>
`;

fs.writeFileSync('src/pages/[lang]/spiritual/buddhist-pilgrimage.astro', newContent);
console.log('Updated buddhist-pilgrimage.astro');
