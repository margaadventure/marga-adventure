/**
 * I18n-aware Footer Shell for Astro integration.
 * Wraps the Footer component with the I18nShell for locale synchronization.
 */
import React from 'react';
import Footer from './Footer';
import { I18nShell } from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';

interface Props {
  initialLocale?: Locale;
  initialDict?: any;
  initialFallbackDict?: any;
  footerImages?: {
    ntb: string;
    taan: string;
    nma: string;
  };
}

const I18nFooterShell: React.FC<Props> = ({ initialLocale, initialDict, initialFallbackDict, footerImages }) => {
  return (
    <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}>
      <Footer footerImages={footerImages} />
    </I18nShell>
  );
};

export default I18nFooterShell;
