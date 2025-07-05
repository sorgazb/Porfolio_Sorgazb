import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import vercel from '@astrojs/vercel/serverless';
import dotenv from 'dotenv';
import sitemap from '@astrojs/sitemap';

dotenv.config();

export default defineConfig({
  output: 'server',
  adapter: vercel({
    webAnalytics: {
      enabled: true,
    }
  }),
  integrations: [sitemap()],
  site: 'https://porfolio-sorgazb.vercel.app',
  vite: {
    plugins: [tailwindcss()],
    define: {
      'import.meta.env.SENDGRID_API_KEY': JSON.stringify(process.env.SENDGRID_API_KEY)
    }
  }
});



