import { defineConfig } from 'astro/config';
import { createLogger } from 'vite';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import tunnel from 'astro-tunnel';

const customLogger = createLogger();
const originalWarn = customLogger.warn;
customLogger.warn = (msg, options) => {
  if (msg.includes('esbuild') || msg.includes('optimizeDeps.esbuildOptions') || msg.includes('vite:react-babel')) {
    return;
  }
  originalWarn(msg, options);
};

// https://astro.build/config
export default defineConfig({
  output: 'static',
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
      prefixDefaultLocale: false,
    },
  },

  vite: {
    customLogger,
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'always',
  },
  server: {
    host: true,
  },
});