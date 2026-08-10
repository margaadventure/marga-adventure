/**
 * Marga Adventure — Structured i18n Engine
 *
 * - No external dependencies (zero-cost, tree-shakeable)
 * - i18next-compatible JSON key structure: "namespace.key"
 * - Supports {{variable}} interpolation
 * - Supports pluralization via _one / _other suffixes
 * - localStorage persistence + browser language auto-detection
 * - Fallback to English for missing keys
 * - Lazy-loads locale JSON files from /public/locales/
 * - Fires a DOM event on language change for non-React consumers
 */

export type Locale = 'en' | 'fr';
export type TranslationDict = Record<string, unknown>;

export const SUPPORTED_LOCALES: Locale[] = ['en', 'fr'];
export const DEFAULT_LOCALE: Locale = 'en';
export const LOCALE_STORAGE_KEY = 'marga_lang';
export const LOCALE_CHANGE_EVENT = 'marga:language-changed';

// ─── In-memory cache ──────────────────────────────────────────────────────────
const cache: Partial<Record<Locale, TranslationDict>> = {};

export function deepMerge(target: any, source: any) {
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

export function setLocaleCache(locale: Locale, dict: TranslationDict) {
  if (dict && Object.keys(dict).length > 0) {
    cache[locale] = deepMerge(cache[locale] || {}, dict);
  }
}

// ─── Loader ───────────────────────────────────────────────────────────────────
export async function loadLocale(locale: Locale): Promise<TranslationDict> {
  if (cache[locale] && Object.keys(cache[locale]!).length > 0) return cache[locale]!;

  try {
    const [commonRes, tripsRes] = await Promise.all([
      fetch(`/locales/${locale}/common.json`).catch(() => null),
      fetch(`/locales/${locale}/trips.json`).catch(() => null),
    ]);

    let commonData: TranslationDict = {};
    if (commonRes && commonRes.ok) {
      commonData = (await commonRes.json()) as TranslationDict;
    }
    let tripsData: TranslationDict = {};
    if (tripsRes && tripsRes.ok) {
      tripsData = (await tripsRes.json()) as TranslationDict;
    }

    const data = deepMerge(commonData, tripsData);
    cache[locale] = data;
    return data;
  } catch (err) {
    console.warn(`[i18n] Failed to load locale "${locale}":`, err);
    // Fall back to English if available
    if (locale !== DEFAULT_LOCALE && cache[DEFAULT_LOCALE]) {
      return cache[DEFAULT_LOCALE]!;
    }
    return {};
  }
}

// ─── Key resolver (dot-notation: "nav.home") ─────────────────────────────────
function resolve(dict: TranslationDict, key: string): string | undefined {
  const parts = key.split('.');
  let current: unknown = dict;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') return undefined;
    current = (current as Record<string, unknown>)[part];
  }
  return typeof current === 'string' ? current : undefined;
}

// ─── Interpolation: replace {{variable}} tokens ───────────────────────────────
function interpolate(template: string, vars?: Record<string, string | number>): string {
  if (!vars) return template;
  return template.replace(/\{\{(\w+)\}\}/g, (_, key) =>
    vars[key] !== undefined ? String(vars[key]) : `{{${key}}}`
  );
}

// ─── Pluralization ────────────────────────────────────────────────────────────
function pluralize(
  dict: TranslationDict,
  key: string,
  count: number,
  vars?: Record<string, string | number>
): string {
  const pluralKey = count === 1 ? `${key}_one` : `${key}_other`;
  const template =
    resolve(dict, pluralKey) ?? resolve(dict, `${key}_other`) ?? key;
  return interpolate(template, { ...vars, count });
}

// ─── Core translate ───────────────────────────────────────────────────────────
export function t(
  dict: TranslationDict,
  key: string,
  vars?: Record<string, string | number>,
  fallbackDict?: TranslationDict
): string {
  // Pluralization shorthand: pass { count: N }
  if (vars && 'count' in vars && typeof vars.count === 'number') {
    return pluralize(dict, key, vars.count, vars);
  }

  let template = resolve(dict, key);

  // If not found in primary dict, try fallback dict
  if (template === undefined && fallbackDict) {
    template = resolve(fallbackDict, key);
  }

  // Graceful fallback: if still not found, return empty string (user request to "remove that")
  // instead of the raw key name.
  template = template ?? '';

  return interpolate(template, vars);
}

// ─── Browser language detection ───────────────────────────────────────────────
export function detectBrowserLocale(): Locale {
  if (typeof navigator === 'undefined') return DEFAULT_LOCALE;

  const langs = navigator.languages?.length
    ? navigator.languages
    : [navigator.language];

  for (const lang of langs) {
    const short = lang.split('-')[0].toLowerCase() as Locale;
    if (SUPPORTED_LOCALES.includes(short)) return short;
  }

  return DEFAULT_LOCALE;
}

// ─── Persistence helpers ──────────────────────────────────────────────────────
export function getStoredLocale(): Locale | null {
  try {
    const stored = localStorage.getItem(LOCALE_STORAGE_KEY);
    if (stored && SUPPORTED_LOCALES.includes(stored as Locale)) {
      return stored as Locale;
    }
  } catch {
    // localStorage may be blocked in some environments
  }
  return null;
}

export function storeLocale(locale: Locale): void {
  try {
    localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {
    // noop
  }
}

// ─── Initial locale resolution ────────────────────────────────────────────────
export function resolveInitialLocale(): Locale {
  return getStoredLocale() ?? detectBrowserLocale();
}

// ─── DOM event dispatch (for non-React consumers, e.g. legacy scripts) ───────
export function dispatchLocaleChange(locale: Locale): void {
  if (typeof window === 'undefined') return;
  window.dispatchEvent(
    new CustomEvent(LOCALE_CHANGE_EVENT, { detail: locale })
  );
  // Also fire the legacy event name used by Navbar/MenuOverlay
  window.dispatchEvent(
    new CustomEvent('language-changed', { detail: locale })
  );
}
