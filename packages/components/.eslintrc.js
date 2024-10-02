const config = require('../../.eslintrc.js');

module.exports = {
  ...config,
  extends: [...config.extends, 'plugin:lit/recommended'],
  parserOptions: { ...config.parserOptions, project: ['./tsconfig.json', './src/tsconfig.json'], projectService: true },
  rules: {
    ...config.rules,
    '@typescript-eslint/no-floating-promises': 'error',
    'no-redeclare': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': ['error', { ignore: ['dist'] }],
    'json/*': 'off',
  },
  ignorePatterns: [...config.ignorePatterns, 'prettier.config.js', '*.png', '*.css'],
};
