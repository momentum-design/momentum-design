const fs = require('node:fs');
const path = require('node:path');

const REPO_ROOT = path.resolve(__dirname, '../../../..');
const TOKENS_ROOT = path.resolve(__dirname, '../../../assets/tokens/src');
const OUTPUT_PATH = path.resolve(__dirname, '../src/data/colors.registry.ts');

const STATIC_TOKEN_SOURCES = [
  { sourcePath: 'core/value.json', category: 'core' },
  { sourcePath: 'theme/stable/light.json', category: 'theme', theme: 'stable-light' },
  { sourcePath: 'theme/stable/dark.json', category: 'theme', theme: 'stable-dark' },
  {
    sourcePath: 'theme/stable/highcontrast/hc_light.json',
    category: 'theme',
    theme: 'stable-highcontrast-light',
  },
  {
    sourcePath: 'theme/stable/highcontrast/hc_dark.json',
    category: 'theme',
    theme: 'stable-highcontrast-dark',
  },
  { sourcePath: 'aaos/day.json', category: 'aaos', theme: 'aaos-day' },
  { sourcePath: 'aaos/night.json', category: 'aaos', theme: 'aaos-night' },
];

function getAdditionalThemeSources() {
  const additionalThemeRoot = path.join(TOKENS_ROOT, 'additionaltheme');

  if (!fs.existsSync(additionalThemeRoot)) {
    return [];
  }

  return fs
    .readdirSync(additionalThemeRoot, { withFileTypes: true })
    .filter(dirent => dirent.isDirectory())
    .flatMap(modeDirent => {
      const mode = modeDirent.name;
      const modePath = path.join(additionalThemeRoot, mode);

      return fs
        .readdirSync(modePath, { withFileTypes: true })
        .filter(dirent => dirent.isFile() && path.extname(dirent.name) === '.json')
        .map(dirent => {
          const themeName = path.basename(dirent.name, '.json');

          return {
            sourcePath: `additionaltheme/${mode}/${dirent.name}`,
            category: 'additional-theme',
            theme: `${mode}-${themeName}`,
          };
        });
    });
}

const TOKEN_SOURCES = [...STATIC_TOKEN_SOURCES, ...getAdditionalThemeSources()];

function readJson(relativePath) {
  return JSON.parse(fs.readFileSync(path.join(TOKENS_ROOT, relativePath), 'utf8'));
}

function isColorToken(value) {
  return Boolean(
    value
    && typeof value === 'object'
    && value.type === 'color'
    && typeof value.value === 'string',
  );
}

function toCssVariable(tokenName) {
  return `--mds-${tokenName.replace(/\./g, '-')}`;
}

function collectColorTokens(value, pathParts, sourceConfig) {
  if (isColorToken(value)) {
    const name = pathParts.join('.');

    return [
      {
        name,
        cssVariable: toCssVariable(name),
        value: value.value,
        resolvedValue: value.value,
        description: typeof value.description === 'string' ? value.description : '',
        category: sourceConfig.category,
        theme: sourceConfig.theme,
        parent: typeof value.parent === 'string' ? value.parent : sourceConfig.sourcePath.replace(/\.json$/, ''),
        sourcePath: path.relative(REPO_ROOT, path.join(TOKENS_ROOT, sourceConfig.sourcePath)),
        references: [...value.value.matchAll(/\{([^}]+)\}/g)].map(match => match[1]),
      },
    ];
  }

  if (!value || typeof value !== 'object' || Array.isArray(value)) {
    return [];
  }

  return Object.entries(value).flatMap(([key, childValue]) => (
    key.startsWith('$') ? [] : collectColorTokens(childValue, [...pathParts, key], sourceConfig)
  ));
}

function buildKeywords(entry) {
  return [
    entry.name,
    entry.cssVariable,
    entry.value,
    entry.resolvedValue,
    entry.description,
    entry.category,
    entry.theme,
    entry.parent,
  ]
    .filter(Boolean)
    .join(' ')
    .toLowerCase()
    .split(/[^a-z0-9]+/)
    .filter(Boolean)
    .filter((keyword, index, all) => all.indexOf(keyword) === index)
    .sort();
}

function resolveValue(value, entryByName, seen = new Set()) {
  return value.replace(/\{([^}]+)\}/g, (_match, referenceName) => {
    if (seen.has(referenceName)) {
      return `{${referenceName}}`;
    }

    const referenceEntry = entryByName.get(referenceName);
    if (!referenceEntry) {
      return `{${referenceName}}`;
    }

    return resolveValue(referenceEntry.value, entryByName, new Set([...seen, referenceName]));
  });
}

function main() {
  const entries = TOKEN_SOURCES.flatMap(sourceConfig => (
    collectColorTokens(readJson(sourceConfig.sourcePath), [], sourceConfig)
  ));
  const entryByName = new Map();

  entries.forEach(entry => {
    if (!entryByName.has(entry.name) || entry.category === 'core') {
      entryByName.set(entry.name, entry);
    }
  });

  const colorEntries = entries
    .map(entry => {
      const resolvedValue = resolveValue(entry.value, entryByName);
      const completeEntry = {
        ...entry,
        resolvedValue,
      };

      return {
        ...completeEntry,
        keywords: buildKeywords(completeEntry),
      };
    })
    .sort((a, b) => (
      a.category.localeCompare(b.category)
      || String(a.theme ?? '').localeCompare(String(b.theme ?? ''))
      || a.name.localeCompare(b.name)
    ));
  const jsonChunks = JSON.stringify(colorEntries, null, 2)
    .match(/[\s\S]{1,16000}/g)
    .map(chunk => JSON.stringify(chunk))
    .join(',\n  ');

  const output = `// Generated by scripts/generate-color-registry.js. Do not edit manually.
import type { ColorTokenRegistryEntry } from './registry.types';

const colorTokensRegistryJson: string = [
  ${jsonChunks},
].join('');

const colorTokensRegistry = JSON.parse(colorTokensRegistryJson) as ColorTokenRegistryEntry[];

export default colorTokensRegistry;
`;

  fs.mkdirSync(path.dirname(OUTPUT_PATH), { recursive: true });
  fs.writeFileSync(OUTPUT_PATH, output);
  console.log(`Generated ${colorEntries.length} color token registry entries.`);
}

main();
