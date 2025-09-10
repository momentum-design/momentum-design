import dynamicImport from 'vite-plugin-dynamic-import';

const config = {
  stories: ['../../src/docs/*.mdx', '../../src/**/*.accessibility.mdx', '../../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-docs',
    '@storybook/addon-a11y',
    'storybook-addon-rtl',
    '@momentum-design/storybook-addon-code-preview',
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
  features: {
    interactions: false,
    outline: false,
    measure: false,
    tags: false,
  },
  staticDirs: ['./public'],
};
export default config;
