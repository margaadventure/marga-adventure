
import React from 'react';
import I18nShell from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import PageHero from './PageHero';
import { useTranslation } from '../i18n/useTranslation';
import trekking1 from "../assets/images/activities/trekking/congde-tekking_1.webp";
import spiritual1 from "../assets/images/activities/spiritual/yoga-spiritual_1.webp";
import wildlife1 from "../assets/images/activities/wildlife/rhino.webp";
import photo1 from "../assets/images/activities/photography/Sadhu-photography_1.webp";
import bg from "../assets/images/country/nepal-hero.webp";

const NepalPageContent: React.FC<any> = (props) => {
  const { t, locale } = useTranslation();

  const ACTIVITIES = [
    {
      id: 'trekking',
      title: t('nepal.act1Title'),
      subtitle: t('nepal.act1Subtitle'),
      description: t('nepal.act1Desc'),
      image: trekking1.src,
      icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" /></svg>
    },
    {
      id: 'spiritual',
      title: t('nepal.act2Title'),
      subtitle: t('nepal.act2Subtitle'),
      description: t('nepal.act2Desc'),
      image: spiritual1.src,
      icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
    },
    {
      id: 'wildlife',
      title: t('nepal.act3Title'),
      subtitle: t('nepal.act3Subtitle'),
      description: t('nepal.act3Desc'),
      image: wildlife1.src,
      icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
    },
    {
      id: 'photography',
      title: t('nepal.act4Title'),
      subtitle: t('nepal.act4Subtitle'),
      description: t('nepal.act4Desc'),
      image: photo1.src,
      icon: <svg className="w-8 h-8 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
    }
  ];

  return (
    <div className="bg-white">
      <PageHero
        title="Nepal"
        subtitle={t('nepal.heroSubtitle')}
        image={bg.src}
        parallax={true}
        overlayOpacity="bg-black/20"
      />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-4xl mx-auto text-center mb-20">
          <span className="text-brand font-bold text-xs uppercase tracking-[0.4em] mb-4 block">{t('nepal.himalayaKingdom')}</span>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8 leading-tight">
            {t('nepal.diversityHeading', { highlight: '' }).replace('  ', ' ').split(t('nepal.diversityHighlight')).map((part, i, arr) =>
              i < arr.length - 1
                ? <React.Fragment key={i}>{part}<span className="italic font-light text-brand">{t('nepal.diversityHighlight')}</span></React.Fragment>
                : part
            )}
          </h2>
          <p className="text-xl text-gray-500 font-light leading-relaxed">{t('nepal.diversityBody')}</p>
        </div>

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          {ACTIVITIES.map((activity) => (
            <a
              href={`/${locale}/${activity.id}`}
              key={activity.id}
              className="group relative h-[500px] rounded-none overflow-hidden cursor-pointer shadow-[0_20px_50px_rgba(0,0,0,0.3)] hover:shadow-[0_20px_50px_rgba(30,115,190,0.3)] transition-all duration-500 md:hover:-translate-y-2"
            >
              <img
                src={activity.image}
                alt={`${activity.title} - <span translate="no">Marga Adventure</span> Activity in Nepal`}
                className="w-full h-full object-cover transition-transform duration-700 md:group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-transparent opacity-90 transition-opacity pointer-events-none"></div>

              <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white z-20 pointer-events-none">
                <div className="mb-4 md:mb-8 w-12 h-12 md:w-14 md:h-14 rounded-none bg-white/20 backdrop-blur-md flex items-center justify-center text-2xl md:text-3xl">
                  {activity.icon}
                </div>
                <p className="text-[10px] md:text-xs font-bold uppercase tracking-[0.3em] mb-2 md:mb-4 text-brand-light">{activity.subtitle}</p>
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6 leading-tight">{activity.title}</h3>
                <p className="text-white/80 font-light max-w-xs mb-6 md:mb-8 text-sm md:text-base opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 md:translate-y-4 md:group-hover:translate-y-0 line-clamp-3 md:line-clamp-4">
                  {activity.description}
                </p>
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-[0.4em] group-hover:text-brand-light transition-colors">
                  {t('nepal.explorePath')} <span>→</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="py-24 bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h3 className="text-3xl font-bold mb-12">{t('nepal.byTheNumbers')}</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
            <div>
              <div className="text-5xl font-bold text-brand mb-2">8</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{t('nepal.highestPeaks')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">126</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{t('nepal.ethnicGroups')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">850+</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{t('nepal.birdSpecies')}</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-brand mb-2">∞</div>
              <div className="text-xs uppercase tracking-widest text-gray-500">{t('nepal.memories')}</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};


const NepalPage = (props: any) => (
  <I18nShell initialLocale={props.initialLocale}>
    <NepalPageContent {...props} />
  </I18nShell>
);
export default NepalPage;

