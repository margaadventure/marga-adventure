/**
 * App-level I18n wrapper component.
 * 
 * Wraps any React component tree with the I18nProvider and listens
 * for locale changes from sibling React trees (e.g. the Header).
 * 
 * Multiple instances of I18nProvider (one per isolated React tree) 
 * stay in sync via localStorage + the marga:language-changed DOM event.
 */
import React, { useEffect } from 'react';
import { I18nProvider } from '../i18n/useTranslation';
import { LOCALE_CHANGE_EVENT, type Locale, type TranslationDict } from '../i18n/i18n';

interface I18nShellProps {
  children: React.ReactNode;
  /** Pass 'fr' from /fr/* Astro pages to boot with correct locale */
  initialLocale?: Locale;
  /** Optional: pre-load translations for SSR or faster hydration */
  initialDict?: TranslationDict;
  /** Optional: pre-load fallback translations (usually English) */
  initialFallbackDict?: TranslationDict;
}

/**
 * A stateful wrapper that remounts its I18nProvider when the locale changes.
 * This is needed for isolated React trees (like the Footer) to re-render 
 * when the locale changes from another tree (like the Header).
 */
export const I18nShell: React.FC<I18nShellProps> = ({ children, initialLocale, initialDict, initialFallbackDict }) => {
  const [key, setKey] = React.useState(0);

  useEffect(() => {
    const handleChange = () => {
      // Force re-render of I18nProvider to pick up new locale
      setKey((k) => k + 1);
    };

    window.addEventListener(LOCALE_CHANGE_EVENT, handleChange);
    return () => window.removeEventListener(LOCALE_CHANGE_EVENT, handleChange);
  }, []);

  return (
    <I18nProvider key={key} initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
      {children}
    </I18nProvider>
  );
};

export default I18nShell;
