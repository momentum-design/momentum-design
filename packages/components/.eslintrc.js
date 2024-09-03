const config = require('../../.eslintrc.js');

module.exports = {
  ...config,
  extends: [
    ...config.extends,
    'plugin:lit/recommended',
  ],
  parserOptions: { project: './tsconfig.json' },
  rules: {
    ...config.rules,
    '@typescript-eslint/no-floating-promises': 'error',
    'no-redeclare': 'off',
    'implicit-arrow-linebreak': 'off',
  },
};
