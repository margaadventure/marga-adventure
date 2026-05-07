import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  site: 'https://margaadventure.com',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en-US',
          fr: 'fr-FR',
        },
      },
    }),
    tunnel(),
  ],

  // ── Astro 5 built-in i18n ──────────────────────────────────────────────────
  // English is the default and has NO prefix (stays on /*)
  // French lives under /fr/*
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr'],
    routing: {
      prefixDefaultLocale: true,
    },
  },

  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always',
  },
  server: {
    host: true,
  },
});