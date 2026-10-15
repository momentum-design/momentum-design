const { rules } = require('./stylelint.config');

/**
 * Plain stylesheets shipped to consumers. Same rules as the Lit styles, but
 * parsed as CSS — postcss-lit expects a TypeScript file.
 *
 * @type {import('stylelint').Config}
 */
module.exports = { rules };
