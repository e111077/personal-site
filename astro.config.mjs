import { defineConfig } from 'astro/config';
import lit from '@astrojs/lit';

export default defineConfig({
  site: 'https://elliottmarquez.dev',
  integrations: [
    lit(),
  ],
});
