/**
 * Server-side i18n utilities for Astro pages.
 *
 * These run at BUILD TIME in Astro frontmatter — no fetch(), no localStorage.
 * They read the JSON translation files directly via static import.
 *
 * Usage in any .astro file:
 *
 *   import { getLangFromUrl, useAstroI18n } from '../i18n/astro';
 *   const lang = getLangFromUrl(Astro.url);
 *   const { t, altLang, altPath } = await useAstroI18n(Astro.url);
 *
 *   <html lang={lang}>
 *   <link rel="alternate" hreflang={altLang} href={altPath} />
 *   <h1>{t('home.heroTitle')}</h1>
 */

import type { Locale } from './i18n';

// ─── Locale detection from URL ─────────────────────────────────────────────────
/**
 * Extract locale from URL pathname.
 * /fr/*  → 'fr'
 * /*     → 'en'  (default — no prefix)
 */
export function getLangFromUrl(url: URL): Locale {
  const segments = url.pathname.split('/').filter(Boolean);
  if (segments[0] === 'fr') return 'fr';
  return 'en';
}

// ─── Alternate URL helpers ─────────────────────────────────────────────────────
/**
 * Given the current URL, return the alternate-language URL.
 * en → /fr/...
 * fr → /...
 */
export function getAlternateUrl(url: URL, site: string | URL): { enUrl: string; frUrl: string } {
  const base = typeof site === 'string' ? site.replace(/\/$/, '') : site.toString().replace(/\/$/, '');
  const path = url.pathname;

  const isFr = path.startsWith('/fr');
  const enPath = isFr ? (path.replace(/^\/fr/, '') || '/') : path;
  const frPath = isFr ? path : `/fr${path === '/' ? '' : path}`;

  return {
    enUrl: `${base}${enPath}`,
    frUrl: `${base}${frPath}`,
  };
}

// ─── Static locale resolver ────────────────────────────────────────────────────
type TranslationDict = Record<string, unknown>;

function resolve(dict: TranslationDict, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = dict;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, k) =>
    vars[k] !== undefined ? String(vars[k]) : `{{${k}}}`
  );
}

/**
 * Returns a t() function bound to the current page's locale.
 * Works synchronously from pre-imported JSON.
 */
export function createT(dict: TranslationDict, fallbackDict?: TranslationDict) {
  return function t(key: string, vars?: Record<string, string | number>): string {
    let template = resolve(dict, key);
    if (template === undefined && fallbackDict) {
      template = resolve(fallbackDict, key);
    }
    // Return empty string if not found (user request to "remove that")
    template = template ?? '';
    return interpolate(template, vars);
  };
}

function deepMerge(target: any, source: any) {
  const result = { ...target };
  for (const key in source) {
    if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
      result[key] = deepMerge(target[key] || {}, source[key]);
    } else {
      if (target[key] === undefined) {
        result[key] = source[key];
      }
    }
  }
  return result;
}

// ─── Convenience wrapper ───────────────────────────────────────────────────────
/**
 * One-stop shop for Astro pages:
 *   const { lang, t, enUrl, frUrl } = await useAstroI18n(Astro.url, Astro.site);
 */
export async function useAstroI18n(url: URL, site?: string | URL) {
  const lang = getLangFromUrl(url);

  // Dynamic import so Vite bundles the correct JSON at build time
  const enMod = await import('../../public/locales/en/common.json');
  const enDict = enMod.default as TranslationDict;
  const enTripsMod = await import('../../public/locales/en/trips.json');
  const enTrips = enTripsMod.default as TranslationDict;

  let dict: TranslationDict;
  let trips: TranslationDict;

  if (lang === 'fr') {
    const mod = await import('../../public/locales/fr/common.json');
    const rawFrDict = mod.default as TranslationDict;
    const tripsMod = await import('../../public/locales/fr/trips.json');
    const rawFrTrips = tripsMod.default as TranslationDict;

    // Merge French with English fallbacks
    dict = deepMerge(rawFrDict, enDict);
    trips = deepMerge(rawFrTrips, enTrips);
  } else {
    dict = enDict;
    trips = enTrips;
  }

  const t = createT(dict, enDict);
  const tTrip = createT(trips, enTrips);
  
  const tripData = (key: string) => {
    const parts = key.split('.');
    let current: any = trips;
    for (const part of parts) {
      if (current == null || typeof current !== 'object') break;
      current = current[part];
    }
    if (current !== undefined) return current;

    // Fallback to English
    let fallbackCurrent: any = enTrips;
    for (const part of parts) {
      if (fallbackCurrent == null || typeof fallbackCurrent !== 'object') return undefined;
      fallbackCurrent = fallbackCurrent[part];
    }
    return fallbackCurrent;
  };
  
  const altLang: Locale = lang === 'en' ? 'fr' : 'en';

  const { enUrl, frUrl } = site
    ? getAlternateUrl(url, site)
    : { enUrl: url.pathname, frUrl: `/fr${url.pathname === '/' ? '' : url.pathname}` };

  return { lang, t, tTrip, tripData, dict, trips, enDict, enTrips, altLang, enUrl, frUrl };
}
