/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import copy from 'rollup-plugin-copy';
// https://astro.build/config
import mdx from '@astrojs/mdx';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx(),
  ],
  site: 'https://momentum-design.github.io',
  base: '/momentum-design',
  vite: {
    build: {
      rollupOptions: {
        plugins: [
          copy({
            targets: [
              {
                src: path.join(process.cwd(), '../../', 'assets/icons/dist/svg/*.svg'),
                dest: 'dist/icons',
              },
              {
                src: path.join(process.cwd(), '../../', 'assets/illustrations/dist/svg/*.svg'),
                dest: 'dist/illustrations',
              },
            ],
          }),
        ],
      },
    },
  },
});
