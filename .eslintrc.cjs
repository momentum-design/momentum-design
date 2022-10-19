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
  ignorePatterns: ['**/dist/**', '*.hbs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 'error',
    'import/extensions': 'off',
    'import/no-relative-packages': 'off',
    'import/prefer-default-export': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { code: 120 }],
    indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'] }],
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
