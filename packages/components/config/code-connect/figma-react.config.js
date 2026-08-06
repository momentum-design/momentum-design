const { createDocumentUrlSubstitutions } = require('./utils');

/* eslint-disable global-require */
module.exports = () => ({
  codeConnect: {
    language: 'jsx',
    include: ['src/components/**/*.react.figma.ts'],
    exclude: [],
    documentUrlSubstitutions: {
      ...createDocumentUrlSubstitutions(),
    },
  },
});
