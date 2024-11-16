// @ts-check
import { defineConfig } from 'astro/config';

import tailwind from '@astrojs/tailwind';

import vercelServerless from '@astrojs/vercel/serverless';

import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), vercelServerless()],
  output: 'server',
  base: '/',
  adapter: vercelServerless()
});