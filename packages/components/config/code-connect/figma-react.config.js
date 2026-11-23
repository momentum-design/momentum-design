const { createDocumentUrlSubstitutions } = require('./utils');

/* eslint-disable global-require */
module.exports = () => ({
  codeConnect: {
    include: ['src/components/**/*.react.figma.ts'],
    exclude: [],
    label: 'React',
    language: 'jsx',
    documentUrlSubstitutions: {
      ...createDocumentUrlSubstitutions(),
    },
  },
});
