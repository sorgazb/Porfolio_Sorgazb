// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel';  // ¡Usa la importación nueva!

// https://astro.build/config
export default defineConfig({
  output: 'static',  // Cambia a 'static' si no necesitas SSR
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
  vite: {
    plugins: [tailwindcss()]
  }
});