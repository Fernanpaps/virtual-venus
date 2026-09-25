import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';

export default defineConfig({
  site: 'https://astrofernnadoleon.netlify.app',
  integrations: [preact()],
});
