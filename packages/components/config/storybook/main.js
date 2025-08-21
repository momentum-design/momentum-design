import dynamicImport from 'vite-plugin-dynamic-import';
import { configureSort } from 'storybook-multilevel-sort';

configureSort({
  storyOrder: {
    consumption: null,
    styling: null,
    components: {
      '**': {
        docs: null,
        accessibility: null,
        example: null,
      },
    },
    widgets: {
      '**': {
        docs: null,
        accessibility: null,
        example: null,
      },
    },
    'work in progress': {
      '**': {
        docs: null,
        accessibility: null,
        example: null,
      },
    },
    '**': { default: null },
  },
});

const config = {
  stories: ['../../src/docs/*.mdx', '../../src/**/*.accessibility.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-controls',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-a11y',
    '@geometricpanda/storybook-addon-badges',
    'storybook-addon-rtl',
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
      plugins: [dynamicImport({})],
    });
  },
  docs: {
    autodocs: 'tag',
  },
  staticDirs: ['./public'],
};
export default config;
