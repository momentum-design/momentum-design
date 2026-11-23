const { createDocumentUrlSubstitutions } = require('./utils');

/* eslint-disable global-require */
module.exports = () => ({
  codeConnect: {
    include: ['src/components/**/*.webcomponent.figma.ts'],
    exclude: [],
    label: 'Web Components',
    language: 'html',
    documentUrlSubstitutions: {
      ...createDocumentUrlSubstitutions(),
    },
  },
});
