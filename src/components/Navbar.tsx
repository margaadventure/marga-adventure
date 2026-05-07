
import React, { useState, useEffect } from 'react';
import { LogoIcon } from '../constants';
import { useTranslation } from '../i18n/useTranslation';
import { storeLocale, dispatchLocaleChange, type Locale } from '../i18n/i18n';

interface NavbarProps {
  onMenuOpen: () => void;
  forceOpaque?: boolean;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuOpen, forceOpaque = false }) => {
  const [scrolled, setScrolled] = useState(false);
  const { locale, t } = useTranslation();

  useEffect(() => {
    let timeoutId: number;
    let rafId: number;

    const handleScroll = () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
      timeoutId = window.setTimeout(() => {
        rafId = requestAnimationFrame(() => {
          setScrolled(window.scrollY > 80);
        });
      }, 50);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (timeoutId) clearTimeout(timeoutId);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  const isOpaque = scrolled || forceOpaque;

  /**
   * URL-based language switching.
   * Stores the selection in localStorage, then navigates to the
   * corresponding locale URL. Layout.astro listens to marga:language-changed
   * and also handles the redirect — here we do it directly for speed.
   */
  function switchLanguage(next: Locale) {
    storeLocale(next);
    dispatchLocaleChange(next);
  }

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-700 will-change-transform transform-gpu ${isOpaque ? 'bg-gray-50/90 backdrop-blur-md py-3 md:py-4 shadow-sm border-b border-gray-200' : 'bg-transparent py-6 md:py-8'}`}>
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-10 lg:px-20 flex justify-between items-center">
        <a href={locale === 'fr' ? '/fr' : '/en'} className="flex items-center gap-3 md:gap-4 group cursor-pointer">
          <div className={`transition-all duration-500 group-hover:rotate-12 ${isOpaque ? 'text-brand' : 'text-white'}`}>
            <LogoIcon className="w-8 h-8 md:w-10 md:h-10 lg:w-11 lg:h-11" />
          </div>
          <span
            className={`font-bold tracking-tighter text-xl md:text-2xl transition-colors duration-500 font-sans ${isOpaque ? 'text-gray-900' : 'text-white'} notranslate`}
            translate="no"
          >
            Marga <span className="font-light text-brand">Adventure</span>
          </span>
        </a>

        <div className="flex items-center gap-6 md:gap-10">
          {/* Language switcher — EN | FR */}
          {/* Language toggle button */}
          <button
            onClick={() => switchLanguage(locale === 'en' ? 'fr' : 'en')}
            className={`font-bold text-sm tracking-wider transition-colors px-2 py-1 border-b-2 ${
              isOpaque 
                ? 'text-brand border-brand/20 hover:border-brand' 
                : 'text-white border-white/20 hover:border-white'
            }`}
            aria-label={locale === 'en' ? t('nav.passerEnFrancais') : t('nav.switchToEnglish')}
          >
            {locale === 'en' ? 'FR' : 'EN'}
          </button>

          <button
            id="hamburger-menu-btn"
            type="button"
            onClick={() => {
              onMenuOpen();
              window.dispatchEvent(new CustomEvent('open-menu-overlay'));
            }}
            className="notranslate flex items-center gap-3 md:gap-4 group p-2 md:p-3 mx-1 cursor-pointer"
            aria-label={t('nav.openMenu')}
          >
            <span className={`text-[10px] font-bold uppercase tracking-[0.5em] transition-all duration-500 hidden lg:block notranslate ${isOpaque ? 'text-gray-400 group-hover:text-brand' : 'text-white/60 group-hover:text-white'}`}>
              {t('nav.navigation')}
            </span>
            <div className="flex flex-col gap-1.5 p-1.5 md:p-2 transition-all">
              <div className={`h-0.5 transition-all duration-300 ${isOpaque ? 'bg-brand w-6 md:w-8' : 'bg-white w-6 md:w-8'} group-hover:w-5 md:group-hover:w-6`}></div>
              <div className={`h-0.5 transition-all duration-300 ${isOpaque ? 'bg-brand w-5 md:w-6' : 'bg-white w-5 md:w-6'} group-hover:w-6 md:group-hover:w-8`}></div>
              <div className={`h-0.5 transition-all duration-300 ${isOpaque ? 'bg-brand w-3 md:w-4' : 'bg-white w-3 md:w-4'} group-hover:w-6 md:group-hover:w-8`}></div>
            </div>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;


