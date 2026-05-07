/**
 * I18n-aware shell for ContactPage
 */
import React from 'react';
import { I18nShell } from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import ContactPage from './ContactPage';

const I18nContactShell: React.FC<{ initialLocale?: Locale }> = ({ initialLocale }) => {
  return (
    <I18nShell initialLocale={initialLocale}>
      <ContactPage />
    </I18nShell>
  );
};

export default I18nContactShell;
