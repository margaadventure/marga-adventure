/**
 * React Context + Hook for the Marga i18n system.
 *
 * Usage:
 *   const { t, locale, setLocale } = useTranslation();
 *   t('nav.home')                       // → "Accueil" (fr)
 *   t('common.welcome', { name: 'Alex' }) // → "Bienvenue, Alex !"
 *   t('common.days', { count: 3 })      // → "3 jours"
 */

import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import {
  t as coreT,
  loadLocale,
  resolveInitialLocale,
  storeLocale,
  dispatchLocaleChange,
  type Locale,
  type TranslationDict,
  DEFAULT_LOCALE,
} from './i18n';

// ─── Context shape ────────────────────────────────────────────────────────────
interface I18nContextValue {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  toggleLocale: () => void;
  t: (key: string, vars?: Record<string, string | number>) => string;
  isLoading: boolean;
}

const I18nContext = createContext<I18nContextValue | null>(null);

// ─── Provider ─────────────────────────────────────────────────────────────────
interface I18nProviderProps {
  children: React.ReactNode;
  /** Optional: pre-load a specific locale (e.g. from server-side detection) */
  initialLocale?: Locale;
  /** Optional: pre-load translations for SSR or faster hydration */
  initialDict?: TranslationDict;
  /** Optional: pre-load fallback translations (usually English) */
  initialFallbackDict?: TranslationDict;
}

export const I18nProvider: React.FC<I18nProviderProps> = ({
  children,
  initialLocale,
  initialDict,
  initialFallbackDict,
}) => {
  // If initialLocale is provided (from Astro URL detection), use it as source of truth.
  // Otherwise fall back to localStorage / browser detection.
  const [locale, setLocaleState] = useState<Locale>(
    initialLocale ?? DEFAULT_LOCALE
  );
  const [dict, setDict] = useState<TranslationDict>(initialDict ?? {});
  const [fallbackDict, setFallbackDict] = useState<TranslationDict>(initialFallbackDict ?? {});
  const [isLoading, setIsLoading] = useState(!initialDict);

  // Load English fallback dictionary on mount
  useEffect(() => {
    if (DEFAULT_LOCALE === initialLocale && initialDict) {
      setFallbackDict(initialDict);
    } else {
      loadLocale(DEFAULT_LOCALE).then(setFallbackDict);
    }
  }, [initialLocale, initialDict]);

  // On mount: resolve true initial locale
  // If initialLocale is set (URL-based), it wins over localStorage.
  useEffect(() => {
    const resolved = initialLocale ?? resolveInitialLocale();
    setLocaleState(resolved);
    // Keep localStorage in sync with URL-detected locale
    if (initialLocale) {
      storeLocale(initialLocale);
    }
  }, [initialLocale]);

  // Load translation dict whenever locale changes
  useEffect(() => {
    let cancelled = false;
    setIsLoading(true);

    loadLocale(locale).then((data) => {
      if (!cancelled) {
        setDict(data);
        setIsLoading(false);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [locale]);

  const setLocale = useCallback((next: Locale) => {
    setLocaleState(next);
    storeLocale(next);
    dispatchLocaleChange(next);
  }, []);

  const toggleLocale = useCallback(() => {
    setLocale(locale === 'en' ? 'fr' : 'en');
  }, [locale, setLocale]);

  const translate = useCallback(
    (key: string, vars?: Record<string, string | number>) =>
      coreT(dict, key, vars, fallbackDict),
    [dict, fallbackDict]
  );

  const value = useMemo<I18nContextValue>(
    () => ({ locale, setLocale, toggleLocale, t: translate, isLoading }),
    [locale, setLocale, toggleLocale, translate, isLoading]
  );

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
};

// ─── Hook ──────────────────────────────────────────────────────────────────────
export function useTranslation(): I18nContextValue {
  const ctx = useContext(I18nContext);
  if (!ctx) {
    throw new Error(
      '[i18n] useTranslation must be used inside <I18nProvider>.'
    );
  }
  return ctx;
}
