const fs = require('fs');
const path = require('path');

module.exports = {
  createDocumentUrlSubstitutions: () =>
    Object.fromEntries(
      fs
        .readdirSync(path.resolve(__dirname, '../../src/components'))
        .filter(name => fs.statSync(path.resolve(__dirname, '../../src/components', name)).isDirectory())
        .map(name => [`<FIGMA_${name.toUpperCase()}_URL>`, process.env[`FIGMA_${name.toUpperCase()}_URL`]]),
    ),
};
