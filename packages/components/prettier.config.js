/** @type {import("prettier").Config} */
// this prettier.config.js file is only used for creating React components
const config = {
  arrowParens: 'avoid',
  bracketSpacing: true,
  htmlWhitespaceSensitivity: 'css',
  insertPragma: false,
  bracketSameLine: false,
  jsxSingleQuote: false,
  printWidth: 120,
  proseWrap: 'always',
  quoteProps: 'as-needed',
  requirePragma: false,
  semi: true,
  singleQuote: true,
  tabWidth: 2,
  trailingComma: 'all',
  useTabs: false,
  plugins: ['prettier-plugin-gherkin'],
  overrides: [
    {
      files: ['*.md', '*.mdx'],
      options: {
        proseWrap: 'always',
        printWidth: 80,
      },
    },
    {
      files: ['*.feature'],
      options: {
        printWidth: 120,
        tabWidth: 2,
      },
    },
  ],
};

module.exports = config;
