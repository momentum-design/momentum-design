/**
 * @fileoverview ESLint Configuration for codeconnect-generator
 *
 * Extends the root ESLint configuration with additional rules optimized for
 * TypeScript CLI tool development with strict code quality standards.
 *
 * @see https://eslint.org/docs/latest/use/configure/
 */

const rootConfig = require('../../../.eslintrc.js');

// ============================================================================
// CONFIGURATION CONSTANTS
// ============================================================================

/**
 * Complexity thresholds for maintainable code.
 * Set to reasonable limits for a CLI tool with AST parsing logic.
 */
const COMPLEXITY_LIMITS = {
  cognitive: 15,
  cyclomatic: 15,
};

/**
 * TypeScript unused variables configuration.
 * Allows underscore-prefixed variables to be intentionally unused.
 */
const UNUSED_VARS_CONFIG = {
  argsIgnorePattern: '^_',
  caughtErrors: 'all',
  caughtErrorsIgnorePattern: '^_',
  destructuredArrayIgnorePattern: '^_',
  ignoreRestSiblings: true,
  varsIgnorePattern: '^_',
};

/**
 * Glob patterns for test and mock files.
 */
const TEST_FILE_GLOBS = ['**/__tests__/**/*.ts', '**/__mocks__/**/*.ts', '**/*.test.ts', '**/*.spec.ts'];

/**
 * Restricted syntax patterns for code quality and maintainability.
 */
const RESTRICTED_SYNTAX_PATTERNS = [
  {
    message: 'Do not use ReturnType; prefer explicit function return types or exported interfaces.',
    selector: 'TSTypeReference[typeName.name="ReturnType"]',
  },
  {
    message:
      "Do not use indexed access types (e.g., Interface['property']); define explicit types or interfaces instead.",
    selector:
      'TSIndexedAccessType[objectType.type="TSTypeReference"][objectType.typeName.type="Identifier"]:not([objectType.typeName.name=/^(Parameters|ReturnType|Awaited|ConstructorParameters|InstanceType|ThisParameterType|OmitThisParameter)$/])',
  },
  {
    message:
      'Do not re-export from parent directories (../). Re-exports should only reference sibling or child modules to prevent circular dependencies.',
    selector: 'ExportAllDeclaration[source.value=/^[.][.]/]',
  },
  {
    message:
      'Do not re-export from parent directories (../). Re-exports should only reference sibling or child modules to prevent circular dependencies.',
    selector: 'ExportNamedDeclaration[source.value=/^[.][.]/]',
  },
  {
    message: 'Do not use unions of literal types. Use an enum instead.',
    selector: 'TSTypeAliasDeclaration[typeAnnotation.type="TSUnionType"] > TSUnionType > TSLiteralType',
  },
];

// ============================================================================
// EXPORTED CONFIGURATION
// ============================================================================

module.exports = {
  ...rootConfig,

  env: {
    ...rootConfig.env,
    jest: true,
    node: true,
  },

  parserOptions: {
    ...rootConfig.parserOptions,
    project: './tsconfig.json',
    tsconfigRootDir: __dirname,
  },

  ignorePatterns: [
    ...(rootConfig.ignorePatterns || []),
    'dist/**',
    'coverage/**',
    '__fixtures__/**',
    '__tests__/__output__/**',
    '*.js',
    '*.cjs',
    '*.mjs',
    '!.eslintrc.cjs',
  ],

  rules: {
    ...rootConfig.rules,

    // ════════════════════════════════════════════════════════════════════════
    // Code Complexity
    // ════════════════════════════════════════════════════════════════════════
    complexity: ['warn', { max: COMPLEXITY_LIMITS.cyclomatic }],
    'max-depth': ['warn', { max: 5 }],
    'max-nested-callbacks': ['error', { max: 4 }],
    'max-params': ['error', { max: 4 }],
    'max-len': ['error', { code: 120, ignorePattern: '^\\s*(//|/\\*|\\*)' }],

    // ════════════════════════════════════════════════════════════════════════
    // TypeScript Rules
    // ════════════════════════════════════════════════════════════════════════
    '@typescript-eslint/no-unused-vars': ['error', UNUSED_VARS_CONFIG],
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'error',
      {
        functions: false,
        classes: true,
        variables: true,
        allowNamedExports: true,
      },
    ],
    'no-undef': 'off', // TypeScript handles this

    // ════════════════════════════════════════════════════════════════════════
    // Import Organization
    // ════════════════════════════════════════════════════════════════════════
    'import/order': 'off',
    'import/first': 'error',
    'import/newline-after-import': 'error',
    'import/no-duplicates': 'error',
    'import/no-mutable-exports': 'error',
    'import/no-unresolved': 'off', // TypeScript handles module resolution
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // Side effect imports.
          ['^\\u0000'],
          // Node.js builtins prefixed with `node:`.
          ['^node:'],
          // Packages.
          ['^@?\\w'],
          // Internal aliases.
          ['^@/'],
          // Parent imports.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // Same-folder imports.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Style imports.
          ['^.+\\.s?css$'],
        ],
      },
    ],
    'simple-import-sort/exports': 'error',

    // ════════════════════════════════════════════════════════════════════════
    // Code Quality
    // ════════════════════════════════════════════════════════════════════════
    'no-console': ['warn', { allow: ['warn', 'error'] }],
    'no-debugger': 'error',
    'no-alert': 'error',
    'no-var': 'error',
    'prefer-const': 'error',
    'prefer-arrow-callback': 'error',
    'prefer-template': 'error',
    'object-shorthand': 'error',
    'no-param-reassign': ['error', { props: false }],
    eqeqeq: ['error', 'always', { null: 'ignore' }],
    curly: ['error', 'all'],
    'implicit-arrow-linebreak': 'off', // Conflicts with max-len and Prettier

    // Allow for...of loops (modern JS standard)
    'no-restricted-syntax': [
      'error',
      {
        selector: 'ForInStatement',
        message: 'for..in loops iterate over the entire prototype chain. Use Object.{keys,values,entries} instead.',
      },
      {
        selector: 'LabeledStatement',
        message: 'Labels are a form of GOTO; using them makes code confusing and hard to maintain and understand.',
      },
      {
        selector: 'WithStatement',
        message: '`with` is disallowed in strict mode because it makes code impossible to predict and optimize.',
      },
      ...RESTRICTED_SYNTAX_PATTERNS,
    ],
    'no-continue': 'off', // Allow continue in loops

    // ════════════════════════════════════════════════════════════════════════
    // Naming Conventions
    // ════════════════════════════════════════════════════════════════════════
    camelcase: ['error', { properties: 'never', ignoreDestructuring: true }],

    // ════════════════════════════════════════════════════════════════════════
    // TSDoc (disabled - @module is standard JSDoc, not TSDoc)
    // ════════════════════════════════════════════════════════════════════════
    'tsdoc/syntax': 'off',

    // ════════════════════════════════════════════════════════════════════════
    // Miscellaneous
    // ════════════════════════════════════════════════════════════════════════
    'global-require': 'off', // Allow dynamic requires for lazy loading
    'import/export': 'off', // TypeScript handles duplicate exports
    'no-bitwise': 'off', // Allow bitwise ops for TypeScript modifier flags
    'no-nested-ternary': 'off', // Allow for concise conditional expressions

    // ════════════════════════════════════════════════════════════════════════
    // JSDoc Requirements
    // ════════════════════════════════════════════════════════════════════════
    'jsdoc/require-jsdoc': [
      'error',
      {
        contexts: ['FunctionDeclaration', 'FunctionExpression', 'ArrowFunctionExpression', 'MethodDefinition'],
        publicOnly: false,
        require: {
          ArrowFunctionExpression: true,
          FunctionDeclaration: true,
          FunctionExpression: true,
          MethodDefinition: true,
        },
      },
    ],
    'jsdoc/require-description': 'error',
    'jsdoc/require-param': 'error',
    'jsdoc/require-param-description': 'error',
    'jsdoc/require-returns': 'error',
    'jsdoc/require-returns-description': 'error',
  },

  plugins: [...(rootConfig.plugins || []), 'jsdoc', 'simple-import-sort'],

  settings: {
    ...(rootConfig.settings || {}),
    jsdoc: {
      mode: 'typescript',
    },
  },

  overrides: [
    ...(rootConfig.overrides || []),

    // ──────────────────────────────────────────────────────────────────────────
    // Parser Files Configuration (complex AST traversal)
    // ──────────────────────────────────────────────────────────────────────────
    {
      files: ['src/parsers/**/*.ts', 'src/emitters/**/*.ts'],
      rules: {
        // AST parsing often requires higher complexity
        complexity: ['warn', { max: 25 }],
        'max-depth': ['warn', { max: 6 }],
      },
    },

    // ──────────────────────────────────────────────────────────────────────────
    // Test File Configuration
    // ──────────────────────────────────────────────────────────────────────────
    {
      files: TEST_FILE_GLOBS,
      parserOptions: {
        project: './tsconfig.test.json',
      },
      env: {
        jest: true,
        node: true,
      },
      rules: {
        // Complexity rules relaxed for tests
        complexity: 'off',
        'max-depth': 'off',
        'max-nested-callbacks': 'off',
        'max-params': 'off',

        // TypeScript rules relaxed for mocking
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': ['error', UNUSED_VARS_CONFIG],

        // Allow console in tests
        'no-console': 'off',

        // Import rules relaxed
        'import/no-extraneous-dependencies': 'off',

        // Allow magic numbers in tests
        'no-magic-numbers': 'off',

        // Disable JSDoc requirements in tests
        'jsdoc/require-jsdoc': 'off',
        'jsdoc/require-description': 'off',
        'jsdoc/require-param': 'off',
        'jsdoc/require-param-description': 'off',
        'jsdoc/require-returns': 'off',
        'jsdoc/require-returns-description': 'off',
      },
    },

    // ──────────────────────────────────────────────────────────────────────────
    // CLI Entry Point Configuration
    // ──────────────────────────────────────────────────────────────────────────
    {
      files: ['bin/**/*.ts'],
      rules: {
        'no-console': 'off',
      },
    },

    // ──────────────────────────────────────────────────────────────────────────
    // Logger Configuration (console is the primary output mechanism)
    // ──────────────────────────────────────────────────────────────────────────
    {
      files: ['src/core/logger.ts'],
      rules: {
        'no-console': 'off',
      },
    },
  ],
};
