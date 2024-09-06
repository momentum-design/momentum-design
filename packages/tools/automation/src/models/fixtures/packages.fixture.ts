export const packagesList = [
  '@momentum-design/animations',
  '@momentum-design/brand-visuals',
  '@momentum-design/fonts',
  '@momentum-design/icons',
  '@momentum-design/illustrations',
  '@momentum-design/tokens',
  '@momentum-design/components',
  '@momentum-design/docs',
  '@momentum-design/automation',
  '@momentum-design/builder',
  '@momentum-design/common',
  '@momentum-design/figma-plugin-assets-export',
  '@momentum-design/telemetry',
  '@momentum-design/token-builder',
];

export const packageVersionIncrementList: string[] = packagesList
  .map((packageName) => `${packageName}: 0.0.0 => 0.0.1`);
