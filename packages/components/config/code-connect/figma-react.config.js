module.exports = () => ({
  codeConnect: {
    parser: 'react',
    include: [
      'src/components/**/*.react.figma.tsx',
    ],
    exclude: [],
    importPaths: {
      'dist/react/*': '@momentum-design/components/dist/react',
    },
    paths: {
      '@momentum-design/components/dist/react': [
        'dist/react/*',
      ],
    },
    documentUrlSubstitutions: {
      '<FIGMA_RADIO_URL>': process.env.FIGMA_RADIO_URL,
    },
  },
});
