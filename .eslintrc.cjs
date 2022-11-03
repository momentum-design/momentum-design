module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:json/recommended',
  ],
  globals: {
    BufferEncoding: 'readonly',
  },
  ignorePatterns: ['**/dist/**', '*.hbs', 'scripts/**'],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
        node: true,
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
    'eslint-plugin-tsdoc',
  ],
  rules: {
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        allowTemplateLiterals: true,
      },
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: ['**/config/**/*.*'] }],
    'import/no-relative-packages': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { code: 120 }],
    indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'], SwitchCase: 1 }],
    'object-curly-newline': 'off',
    'tsdoc/syntax': 'warn',
  },
  settings: {
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
