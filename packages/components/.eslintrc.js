const config = require('../../.eslintrc.js');

module.exports = {
  ...config,
  extends: [...config.extends, 'plugin:lit/recommended', 'prettier'],
  parserOptions: { ...config.parserOptions, project: ['./tsconfig.json', './src/tsconfig.json'], projectService: true },
  rules: {
    ...config.rules,
    '@typescript-eslint/no-floating-promises': 'error',
    'no-redeclare': 'off',
    'implicit-arrow-linebreak': 'off',
    'import/no-unresolved': ['error', { ignore: ['dist'] }],
    'json/*': 'off',
    // prettier
    indent: 'off',
    'max-len': 'off',
    '@typescript-eslint/quotes': 'off',
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent', 'sibling', 'index'],
        'newlines-between': 'always',
      },
    ],
  },
  overrides: [
    {
      files: ['src/utils/mixins/**/*.ts'],
      rules: {
        'max-classes-per-file': 'off',
      },
    },
  ],
  ignorePatterns: [
    ...config.ignorePatterns,
    'storybook-static/*',
    'config/storybook/public/*',
    '.eslintrc.js',
    'prettier.config.js',
    '*.png',
    '*.css',
    '*.json',
    '*.mdx',
    '*.md',
    '*.html',
    '*.figma*',
    'jest.config.js',
  ],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true, // Always try to resolve types under `<root>@types` directory even if it doesn't contain any source code, like `@types/unist`
        project: './tsconfig.json',
      },
    },
  },
};
