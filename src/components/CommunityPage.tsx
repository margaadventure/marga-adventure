
import React from 'react';
import PageHero from './PageHero';

// Import images
import schoolGroupImg from '../assets/images/Community/school-group.webp';
import donationEventImg from '../assets/images/Community/donation-event.webp';
import libraryBalloonsImg from '../assets/images/Community/library-balloons.webp';
import playgroundFunImg from '../assets/images/Community/playground-fun.webp';

const CommunityPage: React.FC = () => {
  return (
    <div className="bg-white">
      <PageHero
        title="Our Community"
        subtitle="We believe that tourism should leave a footprint of kindness, not just boots in the snow."
        image={schoolGroupImg.src}
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">Social Impact Partner</span>
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 tracking-tight">Bravehearts <span className="italic font-light text-brand font-serif">Nepal</span></h2>
            <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light mb-10">
              <p className="italic text-gray-600 border-l-4 border-brand pl-6">
                "Nepal is not just a destination to us; it is our home. We are dedicated to ensuring that the beauty of the Himalayas and culture is preserved for future generations and that the communities who host us benefit directly from your visit."
              </p>
              <p>
                <strong>Bravehearts Nepal</strong> is a non-profit organization founded in the aftermath of the 2015 earthquake. Their mission is to build knowledgeable and socially empowered communities where local people drive their own transformation.
              </p>
              <p>
                We stand with their vision of creating self-reliant communities through decentralized and inclusive development. By choosing Marga, you support their vital work in education, child welfare, and community empowerment across the nation.
              </p>
            </div>
            <a href="https://braveheartsnepal.org.np/" target="_blank" rel="noopener noreferrer" className="px-12 py-5 bg-brand text-white text-[10px] font-bold uppercase tracking-[0.4em] rounded-full hover:bg-brand-dark transition-all shadow-xl hover:shadow-brand/30 flex items-center gap-6 w-fit">
              Visit Bravehearts Website <span>→</span>
            </a>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-brand rounded-none rotate-3 opacity-20 group-hover:rotate-6 transition-transform duration-500"></div>
            <div className="relative h-[600px] rounded-none overflow-hidden shadow-2xl bg-gray-100">
              <img
                src={donationEventImg.src}
                alt="Community Donation Event"
                className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute bottom-0 left-0 w-full p-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent text-white">
                <p className="font-bold text-2xl mb-2">Sharing Warmth</p>
                <p className="text-xs uppercase tracking-widest opacity-80">Winter Blanket Drive</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 bg-brand-dark text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-16">Stories of Hope</h3>
          <div className="grid md:grid-cols-3 gap-8">

            {/* Card 1 */}
            <div className="group rounded-none bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img src={libraryBalloonsImg.src} alt="Library Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
              <div className="p-8 text-left">

                <div className="text-xl font-bold mb-2">Active Learning</div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-4">Library Projects</p>
                <p className="text-sm opacity-80 font-light">Creating vibrant spaces like the Shree Nepal National Secondary School library where curiosity takes flight.</p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group rounded-none bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img src={playgroundFunImg.src} alt="Playground Fun" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
              <div className="p-8 text-left">

                <div className="text-xl font-bold mb-2">Joyful Childhood</div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-4">Recreation Support</p>
                <p className="text-sm opacity-80 font-light">Ensuring every child has the right to play. Building safe playgrounds that echo with laughter and happiness.</p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group rounded-none bg-white/5 backdrop-blur-sm border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-500 hover:-translate-y-2">
              <div className="h-64 overflow-hidden">
                <img src={schoolGroupImg.src} alt="Babuko Asha Project" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700" loading="lazy" decoding="async" />
              </div>
              <div className="p-8 text-left">

                <div className="text-xl font-bold mb-2">Babuko Asha</div>
                <p className="text-xs uppercase tracking-widest opacity-60 mb-4">Community Trust</p>
                <p className="text-sm opacity-80 font-light">"Babuko Asha" means "Father's Hope". We partner with local schools to honor heritage while building a modern future.</p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};

export default CommunityPage;
