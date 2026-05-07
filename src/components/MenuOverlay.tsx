import React, { useState } from 'react';
import { LogoIcon, NEPAL_NAV_ITEMS, BHUTAN_NAV_ITEMS, TIBET_NAV_ITEMS } from '../constants';
import { useTranslation } from '../i18n/useTranslation';

import img1 from '../assets/images/ui/menu/Flower.webp';
import img2 from '../assets/images/ui/menu/rhino-menu_2.webp';
import img3 from '../assets/images/ui/menu/tsechu-menu_3.webp';
import img4 from '../assets/images/ui/menu/village-menu_4.webp';
import img5 from '../assets/images/ui/menu/bisket-menu_7.webp';
import img6 from '../assets/images/ui/menu/lomanthang-menu_8.webp';
import img7 from '../assets/images/ui/menu/navadurgajatra-menu_6.webp';

import nepalImg from '../assets/images/country/nepal.webp';
import bhutanImg from '../assets/images/country/bhutan.webp';
import tibetImg from '../assets/images/country/Tibet.webp';

export interface MenuImages {
  scrollImages: string[];
  destinations: {
    nepal: string;
    bhutan: string;
    tibet: string;
  };
}

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  menuImages?: MenuImages;
}

const DEFAULT_SCROLL_IMAGES = [
  img1.src,
  img2.src,
  img3.src,
  img4.src,
  img5.src,
  img6.src,
  img7.src,
];

export const MenuOverlay: React.FC<MenuOverlayProps> = ({ isOpen, onClose, menuImages }) => {
  const [activeSub, setActiveSub] = useState<string | null>(null);
  const [activeNestedSub, setActiveNestedSub] = useState<string | null>('nepal');
  const { locale, toggleLocale, t } = useTranslation();

  // Use optimized images if provided, otherwise fallback to default imported images
  const scrollImages = menuImages?.scrollImages || DEFAULT_SCROLL_IMAGES;
  const nepalImageSrc = menuImages?.destinations.nepal || (typeof nepalImg === 'string' ? nepalImg : nepalImg.src);
  const bhutanImageSrc = menuImages?.destinations.bhutan || (typeof bhutanImg === 'string' ? bhutanImg : bhutanImg.src);
  const tibetImageSrc = menuImages?.destinations.tibet || (typeof tibetImg === 'string' ? tibetImg : tibetImg.src);

  const nextLangLabel = locale === 'en' ? 'FR' : 'EN';

  if (!isOpen) return null;

  const nepalItems = NEPAL_NAV_ITEMS.filter(item => item.href !== '/nepal');
  const bhutanItems = BHUTAN_NAV_ITEMS;
  const tibetItems = TIBET_NAV_ITEMS;

  return (
    <div className="fixed inset-0 z-100 bg-brand text-white overflow-hidden flex flex-col font-sans">
      {/* Header (Close Button Only - Desktop) */}
      <div className="hidden lg:flex justify-end items-center pr-8 py-8 relative z-20 bg-transparent pointer-events-none">
        <button
          onClick={onClose}
          className="group flex items-center gap-4 pointer-events-auto"
          aria-label={t('nav.closeMenu')}
        >
          <div className="w-12 h-12 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand group-hover:border-white transition-all text-white shadow-sm">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </div>
        </button>
      </div>

      {/* Main Nav Container */}
      <div className="flex-1 flex flex-col xl:flex-row relative z-10 overflow-hidden">

        {/* Column 1: Main Menu Items */}
        <nav className={`w-full ${activeSub === 'destination' ? 'xl:w-[25%]' : 'xl:w-[35%]'} flex flex-col justify-start pl-16 pr-8 md:pl-32 lg:pl-40 gap-8 bg-brand overflow-y-auto h-full pt-4 pb-6 md:pt-6 md:pb-10 no-scrollbar transition-all duration-500 border-r border-white/10 z-20 relative font-sans`}>

          {/* Logo & Mobile Close Button */}
          <div className="mb-20 md:mb-28 lg:mb-6 flex justify-between items-center w-full">
            <a href={`/${locale}`} onClick={onClose} className="flex items-center gap-3 md:gap-4 group cursor-pointer w-fit">
              <div className="text-white">
                <LogoIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-12 lg:h-12 brightness-0 invert" />
              </div>
              <span className="font-bold tracking-tighter text-lg md:text-xl lg:text-2xl text-white font-sans notranslate" translate="no">
                Marga <span className="font-light text-white">Adventure</span>
              </span>
            </a>

            {/* Mobile Close Button */}
            <button
              onClick={onClose}
              className="lg:hidden group flex items-center justify-center"
              aria-label={t('nav.closeMenu')}
            >
              <div className="w-8 h-8 md:w-10 md:h-10 border border-white/20 rounded-full flex items-center justify-center group-hover:bg-white group-hover:text-brand group-hover:border-white transition-all text-white shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 md:w-5 md:h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
            </button>
          </div>

          <a href={`/${locale}`} onClick={onClose} className="group text-lg md:text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left tracking-tight">
            {t('nav.home')}
          </a>

          <div className="relative group shrink-0">
            <div className="flex items-center justify-between w-full">
              <button
                type="button"
                onClick={() => setActiveSub(activeSub === 'destination' ? null : 'destination')}
                className={`text-lg md:text-2xl font-bold transition-colors text-left outline-none tracking-tight ${activeSub === 'destination' ? 'text-white' : 'text-white hover:text-white/80'}`}
              >
                {t('nav.destinations')}
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveSub(activeSub === 'destination' ? null : 'destination');
                }}
                className="pl-4 outline-none relative z-30"
              >
                <span className={`text-2xl transition-transform duration-300 block ${activeSub === 'destination' ? 'rotate-90 text-white' : 'text-white/50'}`}>›</span>
              </button>
            </div>

            {/* Mobile Accordion Only */}
            {activeSub === 'destination' && (
              <div className="xl:hidden ml-4 mt-6 flex flex-col gap-6 animate-in fade-in slide-in-from-left-4 duration-300 border-l mb-4 pl-6 border-white/20">
                <div className="flex flex-col gap-4">

                  {/* Nepal Mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveNestedSub(activeNestedSub === 'nepal' ? null : 'nepal')}
                      className="flex items-center justify-between group outline-none w-full"
                    >
                      <span className={`font-bold text-lg text-left ${activeNestedSub === 'nepal' ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{t('destinations.nepal')}</span>
                      <span className={`text-xl transition-transform duration-300 ${activeNestedSub === 'nepal' ? 'rotate-90 text-white' : 'text-white/50'}`}>›</span>
                    </button>
                    {activeNestedSub === 'nepal' && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        <a href={`/${locale}/nepal`} onClick={onClose} className="text-white/70 hover:text-white py-1">{t('nav.overview')}</a>
                        {nepalItems.map(item => (
                          <a key={item.href} href={`/${locale}${item.href === '/' ? '' : item.href}`} onClick={onClose} className="text-white/70 hover:text-white py-1">{t(item.nameKey)}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Bhutan Mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveNestedSub(activeNestedSub === 'bhutan' ? null : 'bhutan')}
                      className="flex items-center justify-between group outline-none w-full"
                    >
                      <span className={`font-bold text-lg text-left ${activeNestedSub === 'bhutan' ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{t('destinations.bhutan')}</span>
                      <span className={`text-xl transition-transform duration-300 ${activeNestedSub === 'bhutan' ? 'rotate-90 text-white' : 'text-white/50'}`}>›</span>
                    </button>
                    {activeNestedSub === 'bhutan' && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        {bhutanItems.map(item => (
                          <a key={item.href} href={`/${locale}${item.href === '/' ? '' : item.href}`} onClick={onClose} className="text-white/70 hover:text-white py-1">{t(item.nameKey)}</a>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Tibet Mobile */}
                  <div className="flex flex-col gap-2">
                    <button
                      type="button"
                      onClick={() => setActiveNestedSub(activeNestedSub === 'tibet' ? null : 'tibet')}
                      className="flex items-center justify-between group outline-none w-full"
                    >
                      <span className={`font-bold text-lg text-left ${activeNestedSub === 'tibet' ? 'text-white' : 'text-white/80 group-hover:text-white'}`}>{t('destinations.tibet')}</span>
                      <span className={`text-xl transition-transform duration-300 ${activeNestedSub === 'tibet' ? 'rotate-90 text-white' : 'text-white/50'}`}>›</span>
                    </button>
                    {activeNestedSub === 'tibet' && (
                      <div className="pl-4 flex flex-col gap-2 border-l border-white/20 animate-in fade-in slide-in-from-top-2 duration-300">
                        {tibetItems.map(item => (
                          <a key={item.href} href={`/${locale}${item.href === '/' ? '' : item.href}`} onClick={onClose} className="text-white/70 hover:text-white py-1">{t(item.nameKey)}</a>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>

          <a href={`/${locale}/community`} onClick={onClose} className="group text-lg md:text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left tracking-tight">
            {t('nav.community')}
          </a>
          <a href={`/${locale}/about`} onClick={onClose} className="group text-lg md:text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left tracking-tight">
            {t('nav.about')}
          </a>
          <a href={`/${locale}/blog`} onClick={onClose} className="group text-lg md:text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left tracking-tight">
            {t('nav.journal')}
          </a>
          <a href={`/${locale}/contact`} onClick={onClose} className="group text-lg md:text-2xl font-bold text-white hover:text-white/80 transition-colors inline-flex items-center justify-between gap-4 shrink-0 text-left tracking-tight">
            {t('nav.contact')}
          </a>
        </nav>

        {activeSub === 'destination' && (
          <div className="hidden xl:flex w-[20%] flex-col gap-8 bg-brand border-r border-white/10 py-20 px-12 animate-in fade-in slide-in-from-left-4 duration-500 z-10 transition-all">

            {/* Nepal Group */}
            <div className="flex flex-col gap-3">
              <a
                href={`/${locale}/nepal`}
                onMouseEnter={() => setActiveNestedSub('nepal')}
                onClick={onClose}
                className={`text-2xl font-medium transition-colors cursor-pointer ${activeNestedSub === 'nepal' ? 'text-white' : 'text-white/50 hover:text-white'}`}
              >
                {t('destinations.nepal')}
              </a>
              {activeNestedSub === 'nepal' && (
                <div className="flex flex-col gap-2 pl-4 animate-in fade-in slide-in-from-top-1 duration-200 border-l-2 border-white/20">
                  {nepalItems.map(item => (
                    <a
                      key={item.href}
                      href={`/${locale}${item.href === '/' ? '' : item.href}`}
                      onClick={onClose}
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      {t(item.nameKey)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Bhutan Group */}
            <div className="flex flex-col gap-3">
              <a
                href={`/${locale}/bhutan`}
                onMouseEnter={() => setActiveNestedSub('bhutan')}
                onClick={onClose}
                className={`text-2xl font-medium transition-colors cursor-pointer ${activeNestedSub === 'bhutan' ? 'text-white' : 'text-white/50 hover:text-white'}`}
              >
                {t('destinations.bhutan')}
              </a>
              {activeNestedSub === 'bhutan' && (
                <div className="flex flex-col gap-2 pl-4 animate-in fade-in slide-in-from-top-1 duration-200 border-l-2 border-white/20">
                  {bhutanItems.map(item => (
                    <a
                      key={item.href}
                      href={`/${locale}${item.href === '/' ? '' : item.href}`}
                      onClick={onClose}
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      {t(item.nameKey)}
                    </a>
                  ))}
                </div>
              )}
            </div>

            {/* Tibet Group */}
            <div className="flex flex-col gap-3">
              <a
                href={`/${locale}/tibet`}
                onMouseEnter={() => setActiveNestedSub('tibet')}
                onClick={onClose}
                className={`text-2xl font-medium transition-colors cursor-pointer ${activeNestedSub === 'tibet' ? 'text-white' : 'text-white/50 hover:text-white'}`}
              >
                {t('destinations.tibet')}
              </a>
              {activeNestedSub === 'tibet' && (
                <div className="flex flex-col gap-2 pl-4 animate-in fade-in slide-in-from-top-1 duration-200 border-l-2 border-white/20">
                  {tibetItems.map(item => (
                    <a
                      key={item.href}
                      href={`/${locale}${item.href === '/' ? '' : item.href}`}
                      onClick={onClose}
                      className="text-sm font-medium text-white/70 hover:text-white transition-colors"
                    >
                      {t(item.nameKey)}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {/* Column 3: Visual / Images */}
        <div className="hidden xl:flex flex-1 relative items-center justify-center bg-brand h-full overflow-hidden p-20">

          {activeSub === 'destination' ? (
            /* Feature Image Stack */
            <>
              {/* Image Container */}
              <a
                href={
                  activeNestedSub === 'bhutan' ? `/${locale}/bhutan` :
                    activeNestedSub === 'tibet' ? `/${locale}/tibet` :
                      `/${locale}/nepal`
                }
                onClick={onClose}
                className="relative w-full max-w-sm aspect-3/4 animate-in zoom-in-95 duration-700 block group"
              >
                {/* Decorative Backdrop 1 (Furthest) */}
                <div className="absolute inset-0 bg-white/10 -rotate-6 scale-105 rounded-none z-0 transform origin-bottom-right transition-transform duration-700 group-hover:-rotate-12"></div>

                {/* Decorative Backdrop 2 (Closer) */}
                <div className="absolute inset-0 bg-white/20 -rotate-3 scale-105 rounded-none z-0 transform origin-bottom-right transition-transform duration-700 delay-75 group-hover:-rotate-6"></div>

                {/* Front Main Photo */}
                <div className="absolute inset-0 shadow-2xl overflow-hidden cursor-pointer transition-all duration-500 rounded-none z-10 bg-gray-200 ring-1 ring-white/20">
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/40 via-transparent to-transparent z-10 opacity-60 transition-opacity duration-500 group-hover:opacity-40"></div>
                  <img
                    src={
                      activeNestedSub === 'nepal' ? nepalImageSrc :
                        activeNestedSub === 'bhutan' ? bhutanImageSrc :
                          activeNestedSub === 'tibet' ? tibetImageSrc :
                            nepalImageSrc // default
                    }
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={t('trip.destination')}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </a>
            </>
          ) : (
            /* Default Scroll Images */
            <>
              <div className="flex flex-col animate-vertical-scroll w-full transition-all duration-700">
                {[...scrollImages, ...scrollImages].map((src, idx) => (
                  <div key={idx} className="relative w-full h-[50vh] shrink-0 mb-0">
                    <img
                      src={src}
                      alt="Marga Experience"
                      className="w-full h-full object-cover shadow-lg mix-blend-multiply opacity-90"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                ))}
              </div>
            </>
          )}
        </div>

      </div>

      {/* Footer */}
      <div className="px-6 md:px-10 lg:px-20 py-8 flex flex-col md:flex-row justify-between items-center border-t border-white/10 gap-8 z-40 relative bg-brand/40 backdrop-blur-xl">
        <div className="flex gap-10 items-center">
          <button
            id="lang-switcher-menu"
            onClick={() => {
              onClose();
              setTimeout(() => toggleLocale(), 150);
            }}
            className="group flex flex-col items-center gap-1"
            aria-label={t('nav.toggleLanguage')}
          >
            <span className="text-[9px] uppercase tracking-[0.3em] text-white/40 group-hover:text-brand-light transition-colors">{t('nav.language')}</span>
            <span className="text-sm font-bold tracking-[0.2em] border-b border-white/20 group-hover:border-brand-light transition-all pb-1 uppercase">{nextLangLabel}</span>
          </button>

          <div className="flex gap-8 items-center border-l border-white/10 pl-10 h-10">
            <a href="https://www.facebook.com/profile.php?id=61585603559230" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">Facebook</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.instagram.com/margaadventure/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-[#E1306C] transition-all transform hover:scale-110">
              <span className="sr-only">Instagram</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.468.99c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.821-.049.975-.045 1.504-.207 1.857-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.059-1.37.059-4.041v-.08c0-2.597-.01-2.917-.058-3.821-.045-.975-.207-1.504-.344-1.857a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/margaadventure/" target="_blank" rel="noopener noreferrer" className="text-white/40 hover:text-white transition-all transform hover:scale-110">
              <span className="sr-only">LinkedIn</span>
              <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-[10px] uppercase tracking-[0.5em] text-white/20 font-sans md:ml-auto">
          © 2026 <span className="notranslate" translate="no">Marga Adventure</span>
        </div>
      </div>
    </div>
  );
};
