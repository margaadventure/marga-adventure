import React from 'react';
import PageHero from './PageHero';
import { useTranslation } from '../i18n/useTranslation';
import buddhimanImg from "../assets/images/team/buddhiman-tamang.webp";
import deepakImg from "../assets/images/team/deepak-profile.webp";
import laxmiImg from "../assets/images/team/Laxmi.webp";
import binodImg from "../assets/images/team/Binod KC_.webp";
import buddhimanTrekImg from "../assets/images/team/Buddhiman-trek.webp";
import pierreImg from "../assets/images/team/pierre-etienne.png";
import trekkingBg from "../assets/images/activities/trekking/background.webp";

const TEAM_DATA = [
   { name: 'Buddhiman Tamang', roleKey: 'about.founderRole', img: buddhimanImg.src, noteKey: 'about.buddhimanNote' },
   { name: 'Laxmi Pradhan', roleKey: 'about.operationHead', img: laxmiImg.src },
   { name: 'Binod KC', roleKey: 'about.athleteRole', img: binodImg.src, noteKey: 'about.binodNote' },
   { name: 'Deepak Mahato Tharu', roleKey: 'about.cioRole', img: deepakImg.src, noteKey: 'about.deepakNote' },
   { name: 'Pierre-Etienne Vincent', roleKey: 'about.pierreRole', img: pierreImg.src, noteKey: 'about.pierreNote' },
];

const AboutPage: React.FC = () => {
   const { t } = useTranslation();

   return (
      <div className="bg-white">
         <PageHero
            title="Marga Adventure"
            subtitle={t('about.heroTitle')}
            image={trekkingBg.src}
            parallax={true}
            overlayOpacity="bg-black/0"
         />

         <section className="py-24 px-6 md:px-12 lg:px-24">
            {/* New Intro Section */}
            <div className="max-w-3xl mx-auto text-center mb-24">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t('about.aboutLabel')} <span className="notranslate">Marga Adventure</span></span>
               <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
                  {t('about.findingYourPath', { highlight: '' }).replace('  ', ' ').split(t('about.himalayas')).map((part, i, arr) =>
                     i < arr.length - 1
                        ? <React.Fragment key={i}>{part}<span className="italic font-light text-brand">{t('about.himalayas')}</span></React.Fragment>
                        : part
                  )}
               </h2>
               <div className="text-gray-800 text-lg leading-relaxed font-light space-y-6">
                  <p>{t('about.margaMeans')}</p>
                  <p>{t('about.margaPhilosophy', { brand: '<span translate="no">Marga Adventure</span>' })}</p>
               </div>
            </div>

            <div className="max-w-4xl mx-auto my-12">
               <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-6 block">{t('about.ourVisionary')}</span>
               <div className="flex flex-col md:flex-row gap-12 items-start">
                  <div className="w-full md:w-1/3 shrink-0">
                     <div className="relative rounded-none overflow-hidden shadow-2xl">
                        <img
                           src={buddhimanTrekImg.src}
                           alt="Buddhiman Tamang - Founder and CEO of Marga Adventure"
                           className="w-full aspect-3/4 object-cover xl:grayscale xl:hover:grayscale-0 transition-all duration-700"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="hidden xl:block absolute bottom-0 left-0 w-full p-6 bg-linear-to-t from-black/80 to-transparent">
                           <p className="text-white font-bold text-xl">Buddhiman Tamang</p>
                           <p className="text-brand text-xs uppercase tracking-widest mt-1">{t('about.founderRole')}</p>
                        </div>
                     </div>
                     <div className="xl:hidden mt-4">
                        <p className="text-gray-900 font-bold text-xl">Buddhiman Tamang</p>
                        <p className="text-brand text-xs uppercase tracking-widest mt-1">{t('about.founderRole')}</p>
                     </div>
                  </div>
                  <div className="flex-1">
                     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">{t('about.walkingThePath', { years: t('about.yearsCount') })}</h2>
                     <div className="space-y-6 text-gray-800 text-lg leading-relaxed font-light">
                        <p>{t('about.founderBio1')}</p>
                        <p>
                           {t('about.founderBio2', { masters1: '', masters2: '' }).split('')[0]}
                           <strong>{t('about.masterAdventureTourism')}</strong>
                           {' '}{t('about.asWellAsA')}{' '}
                           <strong>{t('about.masterPsychology')}</strong>.{' '}
                           {t('about.founderBio2').split('.').slice(1).join('.').trim()}
                        </p>
                        <p className="border-l-4 border-brand pl-6 italic text-gray-700">
                           {t('about.founderQuote', { brand: '<span translate="no">Marga Adventure</span>' })}
                        </p>
                     </div>
                  </div>
               </div>
            </div>

         </section>

         <section className="py-24 bg-gray-50 px-6 border-y border-gray-100">
            <div className="max-w-7xl mx-auto">
               <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-16 gap-6">
                  <div>
                     <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-2 block">{t('about.ourPeople')}</span>
                     <h2 className="text-4xl font-bold text-gray-900">{t('about.meetTheTeam')}</h2>
                  </div>
                  <p className="text-gray-600 max-w-md md:text-right font-light">{t('about.teamTagline')}</p>
               </div>

               <div className="grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-5 gap-8">
                  {TEAM_DATA.map((member, i) => (
                     <div key={i} className="group relative overflow-hidden rounded-none h-[500px] shadow-xl">
                        <img
                           src={member.img}
                           alt={`${member.name} - ${t(member.roleKey)} at <span translate="no">Marga Adventure</span>`}
                           className="w-full h-full object-cover transition-transform duration-700 xl:group-hover:scale-110 xl:grayscale xl:group-hover:grayscale-0"
                           loading="lazy"
                           decoding="async"
                        />
                        <div className="absolute bottom-0 w-full xl:inset-0 bg-linear-to-t from-black/95 via-black/70 to-transparent xl:via-transparent xl:from-black/90 xl:opacity-90 transition-opacity duration-500 flex flex-col justify-end p-6 xl:p-8">
                           <p className="text-white font-bold text-xl xl:text-2xl mb-1 leading-tight">{member.name}</p>
                           <p className="text-brand font-bold text-xs uppercase tracking-widest mb-2">{t(member.roleKey)}</p>
                           {member.noteKey && (
                              <div className="grid grid-rows-[1fr] xl:grid-rows-[0fr] xl:group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-700 ease-out">
                                 <div className="overflow-hidden">
                                    <p className="text-white/90 text-xs leading-relaxed mt-2">{t(member.noteKey as any)}</p>
                                 </div>
                              </div>
                           )}
                        </div>
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <section className="py-24 px-6">
            <div className="max-w-5xl mx-auto text-center">
               <h3 className="text-3xl font-bold mb-16">{t('about.pillarsHeading')}</h3>
               <div className="grid md:grid-cols-3 gap-12">
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">{t('about.pillar1Title')}</h4>
                     <p className="text-gray-600 text-sm font-light">{t('about.pillar1Body')}</p>
                  </div>
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.2-2.848.578-4.182m-5.452 7.747c-2.07-.63-4.228-1.02-6.44-1.127m0 2.253A11.967 11.967 0 0021 12c0-3.033-.996-5.811-2.697-8.086"></path></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">{t('about.pillar2Title')}</h4>
                     <p className="text-gray-600 text-sm font-light">{t('about.pillar2Body')}</p>
                  </div>
                  <div>
                     <div className="w-16 h-16 rounded-none bg-brand/10 flex items-center justify-center text-brand text-2xl mb-6 mx-auto">
                        <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                     </div>
                     <h4 className="font-bold text-lg mb-4">{t('about.pillar3Title')}</h4>
                     <p className="text-gray-600 text-sm font-light">{t('about.pillar3Body')}</p>
                  </div>
               </div>
            </div>
         </section>
      </div>
   );
};

export default AboutPage;
