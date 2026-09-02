import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import dynamicImport from 'vite-plugin-dynamic-import';

const componentsRoot = fileURLToPath(new URL('../..', import.meta.url));
const distComponentsRoot = path.resolve(componentsRoot, 'dist/components');
const srcComponentsRoot = path.resolve(componentsRoot, 'src/components');

const distReactSegment = `${path.sep}packages${path.sep}components${path.sep}dist${path.sep}react${path.sep}`;

function preferSourceComponentsInStorybook() {
  const cleanSpecifier = value => value.split('?')[0].split('#')[0];
  const isFile = candidate => {
    try {
      return fs.statSync(candidate).isFile();
    } catch {
      return false;
    }
  };
  const resolveSourceFile = target => {
    const candidates = [
      `${target}.ts`,
      `${target}.tsx`,
      `${target}.js`,
      `${target}.jsx`,
      path.join(target, 'index.ts'),
      path.join(target, 'index.tsx'),
      path.join(target, 'index.js'),
      path.join(target, 'index.jsx'),
    ];

    return candidates.find(isFile) ?? null;
  };

  return {
    name: 'mdc-prefer-source-components-in-storybook',
    enforce: 'pre',
    resolveId(source, importer) {
      if (!importer || !importer.includes(distReactSegment)) return null;
      if (!source.startsWith('../../components/')) return null;

      const resolvedDistTarget = path.resolve(path.dirname(cleanSpecifier(importer)), cleanSpecifier(source));
      const sourceRelativePath = path.relative(distComponentsRoot, resolvedDistTarget);

      if (sourceRelativePath.startsWith('..')) return null;
      const sourceTarget = path.resolve(srcComponentsRoot, sourceRelativePath);
      return resolveSourceFile(sourceTarget);
    },
  };
}

const config = {
  stories: ['../../src/docs/*.mdx', '../../src/**/*.accessibility.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-addon-rtl',
    '@momentum-design/storybook-addon-code-preview',
    '@momentum-design/storybook-addon-docs',
  ],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  core: {
    disableTelemetry: true, // 👈 Disables telemetry
  },
  async viteFinal(config) {
    // Merge custom configuration into the default config
    const { mergeConfig } = await import('vite');

    return mergeConfig(config, {
      // adding dynamic import to support dynamic icon import
      // in icon component
      plugins: [preferSourceComponentsInStorybook(), dynamicImport({})],
      server: {
        watch: {
          ignored: ['**/packages/components/dist/custom-elements.json'],
        },
      },
    });
  },
  docs: {
    autodocs: 'tag',
  },
  features: {
    interactions: false,
    outline: false,
    measure: false,
    tags: false,
  },
  staticDirs: ['./public'],
};
export default config;
