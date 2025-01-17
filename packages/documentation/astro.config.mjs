/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import copy from 'rollup-plugin-copy';
import { fileURLToPath } from 'url';
// https://astro.build/config
import mdx from '@astrojs/mdx';
import path from 'path';

// `import.meta.resolve` provides accurate, stable paths for the icons and illustrations packages,
// ensuring reliable path resolution for tasks like copying files, compared to using relative paths.
const getAssetsFolder = (manifestEntryPoint) => path.dirname(fileURLToPath(import.meta.resolve(manifestEntryPoint)));

const iconsDistFolder = getAssetsFolder('@momentum-design/icons/dist/manifest.json');
const illustrationsDistFolder = getAssetsFolder('@momentum-design/illustrations/dist/manifest.json');
const brandVisualsDistFolder = getAssetsFolder('@momentum-design/brand-visuals/dist/manifest.json');
// Using relative path approach for now as we don't keep storybook-static folder inside dist of components
const storybookFolder = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'components');

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
                src: path.join(iconsDistFolder, '/svg/*.svg'),
                dest: 'dist/icons',
              },
              {
                src: path.join(illustrationsDistFolder, '/svg/*.svg'),
                dest: 'dist/illustrations',
              },
              {
                src: path.join(brandVisualsDistFolder, '/backgrounds/*.png'),
                dest: 'dist/brand-visuals',
              },
              {
                src: path.join(brandVisualsDistFolder, '/images/*.png'),
                dest: 'dist/brand-visuals',
              },
              {
                src: path.join(brandVisualsDistFolder, '/images/*.svg'),
                dest: 'dist/brand-visuals',
              },
              {
                src: path.join(brandVisualsDistFolder, '/logos/*.svg'),
                dest: 'dist/brand-visuals',
              },
              {
                src: path.join(storybookFolder, '/storybook-static/*'),
                dest: 'dist/storybook-static',
              },
            ],
          }),
        ],
      },
    },
  },
});
