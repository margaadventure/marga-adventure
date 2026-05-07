/**
 * I18n-aware shell for AboutPage
 */
import React from 'react';
import { I18nShell } from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import AboutPage from './AboutPage';

const I18nAboutShell: React.FC<{ initialLocale?: Locale; initialDict?: any; initialFallbackDict?: any }> = ({ initialLocale, initialDict, initialFallbackDict }) => {
  return (
    <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
      <AboutPage />
    </I18nShell>
  );
};

export default I18nAboutShell;
