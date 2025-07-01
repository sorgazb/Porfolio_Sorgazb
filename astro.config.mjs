// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';
import dotenv from 'dotenv';

// Cargar variables de entorno
dotenv.config();

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
  vite: {
    plugins: [tailwindcss()],
    define: {
      // Usar variables de entorno de Vercel en producción
      'import.meta.env.SENDGRID_API_KEY': JSON.stringify(process.env.SENDGRID_API_KEY)
    }
  }
});