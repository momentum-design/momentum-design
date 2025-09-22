export const packagesList = [
  '@momentum-design/animations',
  '@momentum-design/brand-visuals',
  '@momentum-design/fonts',
  '@momentum-design/icons',
  '@momentum-design/illustrations',
  '@momentum-design/tokens',
  '@momentum-design/utils',
  '@momentum-design/components',
  '@momentum-design/docs',
  '@momentum-design/automation',
  '@momentum-design/builder',
  '@momentum-design/common',
  '@momentum-design/figma-plugin-assets-export',
  '@momentum-design/storybook-addon-code-preview',
  '@momentum-design/telemetry',
  '@momentum-design/token-builder',
];

export const patchVersionIncrementList: string[] = packagesList
  .map((packageName) => `${packageName}: 0.0.0 => 0.0.1`);

export const minorVersionIncrementList: string[] = packagesList
  .map((packageName) => `${packageName}: 0.0.0 => 0.1.0`);
