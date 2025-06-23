module.exports = () => ({
  codeConnect: {
    parser: 'html',
    include: [
      'src/components/**/*.webcomponent.figma.ts',
    ],
    exclude: [],
    documentUrlSubstitutions: {
      '<FIGMA_RADIO_URL>': process.env.FIGMA_RADIO_URL,
    },
  },
});
