
import React from 'react';
import PageHero from './PageHero';
import trekking1 from "../assets/images/Trekking/congde-tekking_1.jpg";
import spiritual1 from "../assets/images/Spirituality Retreat/yoga-spiritual_1.jpeg";
import wildlife1 from "../assets/images/Wildlife/rhino-wildlife_1.jpg";
import photo1 from "../assets/images/Photography/Sadhu-photography_1.jpg";
import bg from "../assets/images/Trekking/background.jpg";

const ACTIVITIES = [
  {
    id: 'trekking',
    title: 'Sacred Steps in the Himalayas',
    subtitle: 'Trekking and Culture',
    description: 'Walk the ancient ridges where the mountains embrace the sky and stone paths tell stories of a thousand years. Blend the thrill of the ascent with the deep peace of temple chants.',
    image: trekking1.src,
    icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
  },
  {
    id: 'spiritual',
    title: 'Awaken in the Himalayas',
    subtitle: 'Spiritual Retreat',
    description: 'Nepal is a sanctuary where the spirit finds its home. From the sacred birth of peace in Lumbini to the meditative silence of high-altitude monasteries, every breath here feels like a prayer.',
    image: spiritual1.src,
    icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  },
  {
    id: 'wildlife',
    title: 'Wildlife Encounters',
    subtitle: 'Wildlife & Nature',
    description: 'Venture into the untamed heart of Nepal, where dense jungles and grassy plains teem with exotic life. Spot Bengal Tigers, Rhinos, and over 850 avian species in their natural habitat.',
    image: wildlife1.src,
    icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
  },
  {
    id: 'photography',
    title: 'Chasing Light in the Himalayas',
    subtitle: 'Photography Trip',
    description: 'Nepal is a living masterpiece painted in light and shadow. Frame the golden dawn igniting the himalayan peaks and the ancient, mist-shrouded temples where time stands still.',
    image: photo1.src,
    icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
  }
];

const NepalPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Nepal"
        subtitle="Where the earth touches the sky."
        image={bg.src}
        parallax={true}
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">The Himalayan Kingdom</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            A land of <span className="italic font-light text-brand">infinite</span> diversity.
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">
            Nepal is a sanctuary where the Himalayas touch the heavens and ancient spirituality grounds the soul. In the shadow of Everest, the air itself feels like a prayer. Wander the timeless alleys of Kathmandu where history lingers like incense, feel the wild, beating heart of the jungle in Chitwan, and find your center in the sacred silence of Lumbini. Nepal is not just a journey across the land, but a pilgrimage into the depths of wonder.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {ACTIVITIES.map((activity) => (
            <a
              href={`/${activity.id}`}
              key={activity.id}
              className="group relative h-[500px] rounded-none overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(30,115,190,0.3)] transition-all duration-500 hover:-translate-y-2"
            >
              <img
                src={activity.image}
                alt={activity.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity"></div>

              <div className="absolute bottom-0 left-0 w-full p-10 md:p-14 text-white">
                <div className="mb-4 w-14 h-14 rounded-none bg-white/20 backdrop-blur-md flex items-center justify-center text-3xl">
                  {activity.icon}
                </div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] mb-2 text-brand-light">{activity.subtitle}</p>
                <h3 className="text-3xl md:text-4xl font-bold mb-4">{activity.title}</h3>
                <p className="text-white/70 font-light max-w-sm mb-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-4 group-hover:translate-y-0">
                  {activity.description}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-brand-light transition-colors">
                  Explore Path <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">Nepal by the Numbers</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold text-brand mb-2">8</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Highest Peaks</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">126</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Ethnic Groups</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">850+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Bird Species</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">∞</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">Memories</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NepalPage;
