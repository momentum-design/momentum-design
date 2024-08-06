export const packagesList: string[] = [
  '@momentum-design/animations',
  '@momentum-design/automation',
  '@momentum-design/brand-visuals',
  '@momentum-design/builder',
  '@momentum-design/common',
  '@momentum-design/components',
  '@momentum-design/docs',
  '@momentum-design/figma-plugin-assets-export',
  '@momentum-design/fonts',
  '@momentum-design/icons',
  '@momentum-design/illustrations',
  '@momentum-design/telemetry',
  '@momentum-design/token-builder',
  '@momentum-design/tokens',
];

export const packageVersionIncrementList: string[] = packagesList
  .map((packageName) => `${packageName}: 0.0.0 => 0.0.1`);

export const figmaPackage = '@momentum-design/figma-plugin-assets-export';
