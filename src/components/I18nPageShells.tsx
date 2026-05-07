/**
 * Generic i18n shells for all remaining page components.
 * Each page-level shell wraps its component with I18nShell
 * so locale changes from the Header propagate correctly.
 */
import React from 'react';
import { I18nShell } from '../i18n/I18nShell';
import type { Locale } from '../i18n/i18n';
import CommunityPage from './CommunityPage';
import BlogList from './BlogList';
import NepalPage from './NepalPage';

export const I18nCommunityShell: React.FC<{ initialLocale?: Locale; initialDict?: any; initialFallbackDict?: any }> = ({ initialLocale, initialDict, initialFallbackDict }) => (
  <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}><CommunityPage /></I18nShell>
);

export const I18nBlogShell: React.FC<{ initialLocale?: Locale; initialDict?: any; initialFallbackDict?: any }> = ({ initialLocale, initialDict, initialFallbackDict }) => (
  <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}><BlogList /></I18nShell>
);

export const I18nNepalShell: React.FC<{ initialLocale?: Locale; initialDict?: any; initialFallbackDict?: any }> = ({ initialLocale, initialDict, initialFallbackDict }) => (
  <I18nShell initialLocale={initialLocale} initialDict={initialDict} initialFallbackDict={initialFallbackDict}><NepalPage /></I18nShell>
);

export default I18nCommunityShell;
