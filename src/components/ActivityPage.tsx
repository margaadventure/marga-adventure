
import React from 'react';
import PageHero from './PageHero';
import { useTranslation } from '../i18n/useTranslation';
import I18nShell from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';

interface ActivityPageProps {
  title: string;
  titleKey?: string;  // optional i18n key for CTA translation
  subtitle: string;
  description: string;
  heroImage: string;
  highlights: (string | { text: string; link: string })[];
  galleryImages: string[];
  overlayOpacity?: string;
  initialLocale?: Locale;
  initialDict?: any;
}

const ActivityPageContent: React.FC<ActivityPageProps> = ({ title, titleKey, subtitle, description, heroImage, highlights, galleryImages, overlayOpacity }) => {
  const { t, locale } = useTranslation();

  return (
    <div className="bg-white">
      <PageHero title={title} subtitle={subtitle} image={heroImage} overlayOpacity={overlayOpacity} />

      <section className="py-24 px-6 md:px-12 lg:px-24">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 items-start">
          {/* Content Side */}
          <div className="lg:col-span-7">
            <span className="inline-block py-2 px-4 rounded-none bg-brand/5 border border-brand/10 text-brand font-bold text-[10px] uppercase tracking-[0.2em] mb-8">
              {t('activity.margaExperiences')}
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-[1.1]">
              {t('activity.experienceHeading', { highlight: '' }).replace('  ', ' ').split(t('activity.experienceHighlight')).map((part, i, arr) =>
                i < arr.length - 1
                  ? <React.Fragment key={i}>{part}<span className="text-brand italic font-serif">{t('activity.experienceHighlight')}</span></React.Fragment>
                  : part
              )}
            </h2>
            <p className="text-gray-500 leading-relaxed text-xl font-light mb-12">
              {description}
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {highlights.map((highlight, index) => (
                <div key={index} className="flex gap-4 p-6 rounded-none bg-gray-50 border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="w-8 h-8 rounded-none bg-white flex items-center justify-center text-brand shadow-sm shrink-0 font-serif italic">
                    {index + 1}
                  </div>
                  {typeof highlight === 'string' ? (
                    <span className="text-gray-900 font-semibold self-center">{highlight}</span>
                  ) : (
                    <a href={highlight.link} className="text-gray-900 font-semibold self-center hover:text-brand transition-colors">{highlight.text}</a>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Gallery Side */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            {galleryImages.map((img, i) => (
              <div key={i} className={`rounded-none overflow-hidden shadow-lg ${i === 0 ? 'col-span-2 aspect-4/3' : 'aspect-square'}`}>
                <img
                  src={img}
                  alt="Gallery"
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-1000"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-brand-dark">
          <img
            src={heroImage}
            className="w-full h-full object-cover opacity-20 grayscale"
            alt="bg"
            loading="lazy"
            decoding="async"
          />
          <div className="absolute inset-0 bg-linear-to-r from-brand-dark via-brand-dark/90 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          <div className="text-white max-w-2xl">
            <h3 className="text-4xl font-bold mb-6">{t('activity.readyToStart', { title: titleKey ? t(titleKey).toLowerCase() : title.toLowerCase() })}</h3>
            <p className="text-white/80 text-lg font-light">{t('activity.readyBody')}</p>
          </div>
          <a href={`/${locale}/contact`} className="bg-white text-brand px-12 py-5 rounded-none text-[10px] font-bold uppercase tracking-[0.4em] hover:bg-brand-light hover:text-white transition-all shadow-2xl shrink-0 flex items-center gap-6">
            {t('activity.bookConsultation')} <span>→</span>
          </a>
        </div>
      </section>
    </div>
  );
};

export default ActivityPageContent;


