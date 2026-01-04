import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

import tunnel from 'astro-tunnel';

// https://astro.build/config
export default defineConfig({
  site: 'https://margaadventure.com',
  integrations: [react(), sitemap(), tunnel()],

  vite: {
    plugins: [tailwindcss()]
  }
});