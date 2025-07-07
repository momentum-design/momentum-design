const { createDocumentUrlSubstitutions } = require('./utils');

/* eslint-disable global-require */
module.exports = () => ({
  codeConnect: {
    parser: 'html',
    include: ['src/components/**/*.webcomponent.figma.ts'],
    exclude: [],
    documentUrlSubstitutions: {
      ...createDocumentUrlSubstitutions(),
    },
  },
});
