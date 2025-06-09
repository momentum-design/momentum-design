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
  overrides: [
    {
      files: ['src/utils/mixins/**/*.ts'],
      rules: {
        'max-classes-per-file': 'off',
      }
    }
  ],
  ignorePatterns: [...config.ignorePatterns, '.eslintrc.js', 'prettier.config.js', '*.png', '*.css', 'tsdoc.json', '*.mdx'],
};
