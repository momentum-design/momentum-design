const { createDocumentUrlSubstitutions } = require('./utils');

/* eslint-disable global-require */
module.exports = () => ({
  codeConnect: {
    parser: 'react',
    include: ['src/components/**/*.react.figma.tsx'],
    exclude: [],
    importPaths: {
      'dist/react/*': '@momentum-design/components/dist/react',
    },
    paths: {
      '@momentum-design/components/dist/react': ['dist/react/*'],
    },
    documentUrlSubstitutions: {
      ...createDocumentUrlSubstitutions(),
    },
  },
});
