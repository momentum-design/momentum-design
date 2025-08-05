module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'airbnb-base',
    'plugin:json/recommended',
    'plugin:astro/recommended',
  ],
  globals: {
    BufferEncoding: 'readonly',
  },
  ignorePatterns: [
    'dist/**/*',
    'dist',
    '**/dist/**/*',
    '**/dist/**',
    '*.hbs',
    'scripts/**',
    '**/husky/**',
    '**/Dockerfile.*',
    'stoyrebook-static/**',
    'react/**',
    'test-results/**',
    'node_modules/**',
    'playwright-report/**',
    'coverage/**',
    'playwright-temp/**',
    '*.feature',
  ],
  overrides: [
    {
      files: ['**/*.test.ts'],
      env: {
        jest: true,
        node: true,
      },
    },
    {
      // Define the configuration for `.astro` file.
      files: ['*.astro'],
      // Allows Astro components to be parsed.
      parser: 'astro-eslint-parser',
      // Parse the script in `.astro` as TypeScript by adding the following configuration.
      // It's the setting you need when using TypeScript.
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro'],
      },
      rules: {
        'prettier/prettier': 'off',
        'no-tabs': 'off',
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
    'linebreak-style': 'off',
    '@typescript-eslint/no-unused-vars': 'error',
    'class-methods-use-this': 'off',
    'import/extensions': 'off',
    'import/no-extraneous-dependencies': ['off', {
      devDependencies: [
        '**/config/**/*.*',
        '**/jest.config.*',
        '**/test/**/*.*',
      ],
    }],
    'import/no-relative-packages': 'off',
    'import/prefer-default-export': 'off',
    'no-confusing-arrow': 'off',
    'no-shadow': 'off',
    'no-unused-vars': 'off',
    'max-len': ['error', { code: 120 }],
    indent: ['error', 2, { ignoredNodes: ['PropertyDefinition'], SwitchCase: 1 }],
    'object-curly-newline': 'off',
    'tsdoc/syntax': 'warn',
    'no-unsafe-optional-chaining': 'off',
    'no-nonoctal-decimal-escape': 'off',
    'json/*': ['error', { allowComments: true }],
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
