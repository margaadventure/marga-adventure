/**
 * I18n shells for ActivityPage and DestinationPage.
 * These are needed because each Astro `client:*` island
 * is an isolated React tree without locale context.
 */
import React from 'react';
import { I18nShell } from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import ActivityPage from './ActivityPage';
import DestinationPage from './DestinationPage';

// ─── ActivityPage Shell ───────────────────────────────────────────────────────
interface ActivityShellProps {
  initialLocale?: Locale;
  initialDict?: any;
  initialFallbackDict?: any;
  title: string;
  titleKey?: string;
  subtitle: string;
  description: string;
  heroImage: string;
  highlights: (string | { text: string; link: string })[];
  galleryImages: string[];
  overlayOpacity?: string;
}

export const I18nActivityShell: React.FC<ActivityShellProps> = ({ initialLocale, initialDict, initialFallbackDict, ...props }) => (
  <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
    <ActivityPage {...props} />
  </I18nShell>
);

// ─── DestinationPage Shell ────────────────────────────────────────────────────
interface DestinationShellProps {
  initialLocale?: Locale;
  initialDict?: any;
  initialFallbackDict?: any;
  country: string;
  heroImage: string;
  description: string;
  features: { title: string; text: string; image: string }[];
  mainTitle?: string;
  activeMonths?: string[];
  seasonNote?: string;
}

export const I18nDestinationShell: React.FC<DestinationShellProps> = ({ initialLocale, initialDict, initialFallbackDict, ...props }) => (
  <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
    <DestinationPage {...props} />
  </I18nShell>
);

export default I18nActivityShell;
