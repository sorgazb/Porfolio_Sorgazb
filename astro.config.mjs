// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
// Elige uno de los siguientes imports de adapter según tu despliegue:
import vercel from '@astrojs/vercel/serverless'; // Para Serverless
// import vercel from '@astrojs/vercel/static'; // Para sitio estático

// https://astro.build/config
export default defineConfig({
  output: 'server', // Para SSR (Serverless)
  // output: 'static', // Para sitio estático (default)
  adapter: vercel({}),
  vite: {
    plugins: [tailwindcss()]
  }
});