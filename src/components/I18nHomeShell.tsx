/**
 * General-purpose I18n page shell for Astro page components.
 * Wraps any page component with the I18nShell for locale-aware rendering.
 * Listens to marga:language-changed events to stay in sync with the Header.
 */
import React from 'react';
import { I18nShell } from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import HomeContent from './HomeContent';

interface JourneyImage {
  src: string;
  srcSet: string;
}

interface JourneyCategory {
  id: string;
  title: string;
  description: string;
  images: JourneyImage[];
  alignment: 'left' | 'right';
}

interface Props {
  initialLocale?: Locale;
  initialDict?: any;
  initialFallbackDict?: any;
  heroImageSrc?: string;
  heroImageSrcSet?: string;
  nepalMapSrc?: string;
  nepalMapSrcSet?: string;
  journeyCategories?: JourneyCategory[];
}

const I18nHomeShell: React.FC<Props> = ({ initialLocale, initialDict, initialFallbackDict, ...props }) => {
  return (
    <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
      <HomeContent {...props} />
    </I18nShell>
  );
};

export default I18nHomeShell;
