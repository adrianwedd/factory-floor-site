// @ts-check
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://factory.wedd.au',
  trailingSlash: 'always',
  integrations: [mdx(), preact()],
  vite: {
    plugins: [tailwindcss()],
  },
});
