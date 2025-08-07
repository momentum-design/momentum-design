/** @type {import('stylelint').Config} */
module.exports = {
  rules: {
    'block-no-empty': true,
    'max-nesting-depth': 0,
  },
  customSyntax: 'postcss-lit',
};
