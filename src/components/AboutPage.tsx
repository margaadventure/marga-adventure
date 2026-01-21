import React from 'react';
import PageHero from './PageHero';
import buddhimanImg from "../assets/images/team/buddhiman-tamang.webp";
import deepakImg from "../assets/images/team/deepak-profile.webp";
import laxmiImg from "../assets/images/team/Laxmi.webp";
import binodImg from "../assets/images/team/Binod KC_.webp";
import buddhimanTrekImg from "../assets/images/team/Buddhiman-trek.webp";
import trekkingBg from "../assets/images/activities/trekking/background.webp";

const TEAM = [
   { name: 'Buddhiman Tamang', role: 'Founder & CEO', img: buddhimanImg.src, note: 'Master in Psychology & Adventure Tourism' },
   { name: 'Laxmi Pradhan', role: 'Operation Head', img: laxmiImg.src },
   { name: 'Binod KC', role: 'Athlete & Travel Expert', img: binodImg.src, note: 'Grand Raid des Pyrenees' },
   { name: 'Deepak Mahato Tharu', role: 'Chief Information Officer', img: deepakImg.src, note: 'Tech Strategy & Innovation' },
];

const AboutPage: React.FC = () => {
   return (
      <div className="bg-white">
         <PageHero
            title="Marga Adventure"
            subtitle="A journey within."
            image={trekkingBg.src}
            parallax={true}
         />

         <section className="py-24 px-6 md:px-12 lg:px-24">
            {/* New Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-24">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">About Marga Adventure</span>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">Finding Your Path in the <span className="italic font-light text-brand">Himalayas</span></h2>
               <div className="text-gray-500 text-lg leading-relaxed font-light space-y-6">
                  <p>In Sanskrit and Nepali, the word "Marga" means "The Path" or "The Way."</p>
                  <p>At Marga Adventure, we believe that travel is more than just moving from one place to another; it is about finding the right path—one that leads to discovery, connection, and peace of mind. With decades of experience working with thousands of clients, we can definitely help you with your own discovery. </p>
               </div>
            </div>

            <div className="max-w-4xl mx-auto my-12">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-6 block">Our Visionary</span>
               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/3 shrink-0">
                     <div className="relative rounded-none overflow-hidden shadow-2xl">
                        <img
                           src={buddhimanTrekImg.src}
                           alt="Buddhiman Tamang - Founder and CEO of Marga Adventure"
                           className="w-full aspect-[3/4] object-cover md:grayscale md:hover:grayscale-0 transition-all duration-700"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="hidden md:block absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black/80 to-transparent">
                           <p className="text-white font-bold text-xl">Buddhiman Tamang</p>
                           <p className="text-brand text-xs uppercase tracking-widest mt-1">Founder & CEO</p>
                        </div>
                     </div>
                     <div className="md:hidden mt-4">
                        <p className="text-gray-900 font-bold text-xl">Buddhiman Tamang</p>
                        <p className="text-brand text-xs uppercase tracking-widest mt-1">Founder & CEO</p>
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
                           In 2025, Buddhiman channeled his nearly two decades of experience into founding his own company Marga Adventure with vision to offer travel experiences that go beyond sightseeing and trekking - blending professional safety standards with a deep understanding of the transformative power of travel. Ultimately, Buddhiman’s mission is to ensure that every client returns home not just with photos, but with a renewed perspective on the world and their place within it.
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
                           alt={`${member.name} - ${member.role} at Marga Adventure`}
                           className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110 md:grayscale md:group-hover:grayscale-0"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90 transition-opacity duration-300 flex flex-col justify-end p-8">
                           <p className="text-white font-bold text-xl xl:text-2xl mb-1 leading-tight">{member.name}</p>
                           <p className="text-brand font-bold text-xs uppercase tracking-widest mb-4">{member.role}</p>
                           <div className="h-8 md:h-0 md:group-hover:h-8 overflow-hidden transition-all duration-300">
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
               <h3 className="text-3xl font-bold mb-16">The Pillars of Your Marga</h3>
               <div className="grid md:grid-cols-3 gap-12">
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">The Conscious Path</h4>
                     <p className="text-gray-500 text-sm font-light">We tread lightly on the sacred earth. Our journeys are designed to leave footprints of respect, not scars, honoring the Himalayas.</p>
                  </div>
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.848.578-4.182m-5.452 7.747c-2.07-.63-4.228-1.02-6.44-1.127m0 2.253A11.967 11.967 0 0021 12c0-3.033-.996-5.811-2.697-8.086"></path></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">The Shared Path</h4>
                     <p className="text-gray-500 text-sm font-light">We are one sangha. We empower local hands and hearts, ensuring that every step of your journey uplifts the villages we call home.</p>
                  </div>
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">The Guided Path</h4>
                     <p className="text-gray-500 text-sm font-light">Your safety is our vow. Led by local experts who know every stone and storm, we clear the way so you can focus on the inner journey.</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AboutPage;
