
import React from 'react';
import PageHero from './PageHero';

const TEAM = [
   { name: 'Buddhiman Tamang', role: 'Founder & CEO', img: '/images/buddhiman-tamang.webp', note: 'Master in Psychology & Adventure Tourism' },
   { name: 'Deepak Mahato Tharu', role: 'Chief Information Officer', img: '/images/deepak-profile.webp', note: 'Tech Strategy & Innovation' },


];

const AboutPage: React.FC = () => {
   return (
      <div className="bg-white">
         <PageHero
            title="Marga Adventure"
            subtitle="A journey within."
            image="/images/Trekking/DSCN7142.webp"
            parallax={true}
         />

         <section className="py-24 px-6 md:px-12 lg:px-24">
            {/* New Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-24">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">About Marga Adventure</span>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Finding Your Path in the <span className="italic font-light text-brand">Himalayas</span></h2>
               <div className="text-gray-500 text-lg leading-relaxed font-light space-y-6">
                  <p>In Sanskrit and Nepali, the word "Marga" means "The Path" or "The Way."</p>
                  <p>At Marga Adventure, we believe that travel is more than just moving from one place to another; it is about finding the right path-one that leads to discovery, connection, and peace of mind. We are a company built on a foundation of decades of experience.</p>
               </div>
            </div>

            <div className="max-w-4xl mx-auto my-12">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Our Visionary</span>
               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/3 shrink-0">
                     <div className="relative rounded-none overflow-hidden shadow-2xl">
                        <img
                           src="/images/buddhiman-tamang.webp"
                           alt="Buddhiman Tamang"
                           className="w-full aspect-[3/4] object-cover grayscale hover:grayscale-0 transition-all duration-700"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                           <p className="text-white font-bold text-xl">Buddhiman Tamang</p>
                           <p className="text-brand text-xs uppercase tracking-widest mt-1">Founder & CEO</p>
                        </div>
                     </div>
                  </div>
                  <div className="flex-1">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">Walking the Path for <span className="text-brand italic font-light">18 Years</span>.</h2>
                     <div className="space-y-6 text-gray-500 text-lg leading-relaxed font-light">
                        <p>
                           His journey began in 2006, working at the grassroots level as a trekking guide before rising to become a senior tour leader. Over the course of 18 years, Buddhiman has navigated the varied terrains of Nepal, mastering the logistics of high-altitude trekking and the nuances of cross-cultural hospitality.
                        </p>
                        <p>
                           What sets Buddhiman apart is his dual academic background. He holds a <strong>Master’s degree in Adventure Tourism</strong> as well as a <strong>Master’s degree in Psychology</strong>. This unique educational foundation allows him to curate experiences that are not only operationally seamless but also deeply attentive to group dynamics and the psychological well-being of his guests.
                        </p>
                        <p className="border-l-4 border-brand pl-6 italic text-gray-600">
                           In 2025, Buddhiman channeled his nearly two decades of experience into founding his own company Marga Adventure with vision to offer travel experiences that go beyond sightseeing and trekking - blending professional safety standards with a deep understanding of the transformative power of travel.
                        </p>
                     </div>
                  </div>
               </div>
            </div>
         </section>

         <section className="py-24 bg-gray-50 px-6 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
                  <div>
                     <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-2 block">Our People</span>
                     <h2 className="text-4xl font-bold text-gray-900">Meet the Team</h2>
                  </div>
                  <p className="text-gray-500 max-w-md text-right font-light">The experts, guides, and visionaries dedicated to your safe and transformative journey.</p>
               </div>

               <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-8">
                  {TEAM.map((member, i) => (
                     <div key={i} className="group relative overflow-hidden rounded-none h-[500px] shadow-xl">
                        <img
                           src={member.img}
                           alt={member.name}
                           className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                           <p className="text-white font-bold text-xl xl:text-2xl mb-1 whitespace-nowrap">{member.name}</p>
                           <p className="text-brand font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                           <div className="h-0 group-hover:h-8 overflow-hidden transition-all duration-300">
                              <p className="text-white/60 text-xs">{member.note}</p>
                           </div>
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
               <h3 className="text-3xl font-bold mb-16">The Philosophy of Marga</h3>
               <div className="grid md:grid-cols-3 gap-12">
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">Sustainability First</h4>
                     <p className="text-gray-500 text-sm font-light">We leave footprints, not scars. Our operations are plastic-free and carbon-conscious.</p>
                  </div>
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">Community Rooted</h4>
                     <p className="text-gray-500 text-sm font-light">We hire locally, buy locally, and invest in the villages we pass through.</p>
                  </div>
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">Uncompromised Safety</h4>
                     <p className="text-gray-500 text-sm font-light">Expert guides, satellite comms, and rigorous training ensure your peace of mind.</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AboutPage;
