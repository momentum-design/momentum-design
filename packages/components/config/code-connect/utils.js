const fs = require('fs');
const path = require('path');

const COMPONENTS_DIR = path.resolve(__dirname, '../../src/components');
const URL_PLACEHOLDER = /^\/\/\s*url=<(FIGMA_[A-Z0-9_]+_URL)>$/gm;

const findTemplates = dir =>
  fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findTemplates(entryPath);
    return entry.isFile() && entry.name.endsWith('.figma.ts') ? [entryPath] : [];
  });

module.exports = {
  // Keyed off what the templates declare rather than off directory names, because one component can
  // map to several Figma component sets — button covers both Button/Pill and Button/Icon, each with
  // its own URL. An unset variable resolves to undefined, which validateFigmaCodeConnect.js reports.
  createDocumentUrlSubstitutions: () =>
    Object.fromEntries(
      findTemplates(COMPONENTS_DIR)
        .flatMap(file => [...fs.readFileSync(file, 'utf8').matchAll(URL_PLACEHOLDER)].map(([, name]) => name))
        .map(name => [`<${name}>`, process.env[name]]),
    ),
};
