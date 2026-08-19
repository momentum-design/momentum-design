/* eslint-disable import/no-unresolved */
import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import copy from 'rollup-plugin-copy';
import { fileURLToPath } from 'url';
// https://astro.build/config
import mdx from '@astrojs/mdx';
import path from 'path';
import rehypeMdcText from './src/plugins/rehype-mdc-text.mjs';

// `import.meta.resolve` provides accurate, stable paths for the icons and illustrations packages,
// ensuring reliable path resolution for tasks like copying files, compared to using relative paths.
const getAssetsFolder = (manifestEntryPoint) => path.dirname(fileURLToPath(import.meta.resolve(manifestEntryPoint)));

const iconsDistFolder = getAssetsFolder('@momentum-design/icons/dist/manifest.json');
const illustrationsDistFolder = getAssetsFolder('@momentum-design/illustrations/dist/manifest.json');
const brandVisualsDistFolder = getAssetsFolder('@momentum-design/brand-visuals/dist/manifest.json');
// Using relative path approach for now as we don't keep storybook-static folder inside dist of components
const storybookFolder = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'components');

// Momentum's icon/brandvisual components load their assets via bare-specifier dynamic imports
// (e.g. `import(`@momentum-design/icons/dist/ts/${name}.ts`)`), which Vite/Rollup cannot statically
// analyze and warns about. This plugin rewrites those bare specifiers to relative paths pointing at
// the resolved package so the import can be analyzed. It runs in both dev and build (via `vite.plugins`).
// Ported from https://github.com/momentum-design/starter-react/blob/main/vite.config.ts
const DYNAMIC_IMPORT_PACKAGES = [
  {
    // Match the component file whether it resolves via node_modules or a workspace path.
    componentFile: /\/dist\/components\/brandvisual\/brandvisual\.component\.js$/,
    dynamicImport: /import\(\s*`@momentum-design\/brand-visuals\/([^`]+)`\s*\)/g,
    // `getAssetsFolder` returns the package `dist` folder; the import sub-path already includes `dist/`.
    packageRoot: path.dirname(brandVisualsDistFolder),
  },
  {
    componentFile: /\/dist\/components\/icon\/icon\.component\.js$/,
    dynamicImport: /import\(\s*`@momentum-design\/icons\/([^`]+)`\s*\)/g,
    packageRoot: path.dirname(iconsDistFolder),
  },
];

const rewriteBareDynamicImports = () => ({
  name: 'momentum-rewrite-bare-dynamic-imports',
  enforce: 'pre',
  transform(code, id) {
    // Strip any query suffix (e.g. `?v=hash`) Vite appends to module ids.
    const filePath = id.split('?')[0];
    const pkg = DYNAMIC_IMPORT_PACKAGES.find((entry) => entry.componentFile.test(filePath));

    if (!pkg) {
      return null;
    }

    const rewritten = code.replace(pkg.dynamicImport, (_match, importSubPath) => {
      const fullImportPath = path.join(pkg.packageRoot, importSubPath);
      const rel = path.relative(path.dirname(filePath), fullImportPath).replaceAll('\\', '/');
      return `import(\`${rel.startsWith('.') ? rel : `./${rel}`}\`)`;
    });

    return { code: rewritten, map: null };
  },
});

// https://astro.build/config
export default defineConfig({
  integrations: [
    // Enable Preact to support Preact JSX components.
    preact(),
    // Enable React for the Algolia search component.
    react(),
    mdx(),
  ],
  site: 'https://momentum.design',
  markdown: {
    // Keep Astro's built-in remark plugins (remark-gfm for tables, etc.);
    // providing custom plugins otherwise replaces the default set in Astro 1.x.
    extendDefaultPlugins: true,
    // Wrap knowledge-base article body text in <mdc-text>. Scoped to KB content
    // inside the plugin so inheriting MDX pages are not affected.
    rehypePlugins: [rehypeMdcText],
  },
  vite: {
    plugins: [rewriteBareDynamicImports()],
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
                src: path.join(brandVisualsDistFolder, '/png/*.png'),
                dest: 'dist/brand-visuals',
              },
              {
                src: path.join(brandVisualsDistFolder, '/svg/*.svg'),
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
