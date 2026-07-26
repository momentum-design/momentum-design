const config = require('../../../.eslintrc.js');

module.exports = {
  ...config,
  ignorePatterns: [
    ...(config.ignorePatterns ?? []),
    'src/data/assets.registry.ts',
    'src/data/colors.registry.ts',
    'src/data/components.registry.ts',
  ],
};
