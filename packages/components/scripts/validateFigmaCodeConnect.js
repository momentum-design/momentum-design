// Validates Code Connect template files before they are published.
// Covers the checks the Figma CLI does not do: Figma URLs must stay out of the repo,
// every placeholder must resolve, and every source link must point at a file that exists.
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');
const chalk = require('chalk');

const PACKAGE_ROOT = process.cwd();
const REPO_ROOT = path.resolve(PACKAGE_ROOT, '../..');
const COMPONENTS_DIR = path.join(PACKAGE_ROOT, 'src', 'components');
const SOURCE_URL_PREFIX = 'https://github.com/momentum-design/momentum-design/blob/main/';
const FIGMA_URL_PATTERN = /https:\/\/(www\.)?figma\.com\/(design|file)\//;

const CONFIGS = [
  { name: 'React', file: 'figma-react.config.json' },
  { name: 'Web Components', file: 'figma-webcomponent.config.json' },
];

const errors = [];

function findTemplateFiles(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findTemplateFiles(entryPath);
    return entry.isFile() && entry.name.endsWith('.figma.ts') ? [entryPath] : [];
  });
}

function readMetadata(contents, key) {
  const match = contents.match(new RegExp(`^//\\s*${key}=(.+)$`, 'm'));
  return match ? match[1].trim() : undefined;
}

function validateTemplate(filePath) {
  const relativePath = path.relative(PACKAGE_ROOT, filePath);
  const contents = fs.readFileSync(filePath, 'utf8');
  const report = message => errors.push(`${relativePath}: ${message}`);

  if (FIGMA_URL_PATTERN.test(contents)) {
    report('contains a literal figma.com URL. Use a <FIGMA_<COMPONENT>_URL> placeholder instead.');
  }

  const url = readMetadata(contents, 'url');
  if (!url) {
    report('is missing a "// url=" metadata comment.');
  } else {
    const placeholder = url.match(/^<(FIGMA_[A-Z0-9_]+_URL)>$/);
    if (!placeholder) {
      report(`has "// url=${url}", which is not a <FIGMA_<COMPONENT>_URL> placeholder.`);
    } else if (!process.env[placeholder[1]]) {
      report(`uses placeholder <${placeholder[1]}> but that variable is not set in .env.`);
    }
  }

  const source = readMetadata(contents, 'source');
  if (!source) {
    report('is missing a "// source=" metadata comment.');
  } else if (!source.startsWith(SOURCE_URL_PREFIX)) {
    // A relative path is silently discarded at publish time, producing an empty source link.
    report(`has "// source=${source}". It must be an absolute URL starting with ${SOURCE_URL_PREFIX}`);
  } else {
    const sourcePath = path.join(REPO_ROOT, source.slice(SOURCE_URL_PREFIX.length));
    if (!fs.existsSync(sourcePath)) {
      report(`has a "// source=" URL pointing at ${source.slice(SOURCE_URL_PREFIX.length)}, which does not exist.`);
    }
  }

  if (!readMetadata(contents, 'component')) {
    report('is missing a "// component=" metadata comment.');
  }
}

function runCliParse({ name, file }) {
  if (!fs.existsSync(path.join(PACKAGE_ROOT, file))) {
    errors.push(`${file} was not generated. Run the figma:publish:prepare:* scripts first.`);
    return;
  }
  const result = spawnSync(
    path.join(REPO_ROOT, 'node_modules', '.bin', 'figma'),
    ['connect', 'parse', '--config', file, '--exit-on-unreadable-files'],
    { cwd: PACKAGE_ROOT, encoding: 'utf8' },
  );
  if (result.status !== 0) {
    errors.push(`"${name}" Code Connect files failed to parse:\n${(result.stderr || '').trim()}`);
  }
}

const templates = findTemplateFiles(COMPONENTS_DIR);
templates.forEach(validateTemplate);
CONFIGS.forEach(runCliParse);

if (errors.length > 0) {
  console.error(chalk.red(`\nCode Connect validation failed (${errors.length} problem(s)):\n`));
  errors.forEach(error => console.error(chalk.red(`  • ${error}`)));
  process.exit(1);
}

console.log(chalk.green(`Code Connect validation passed (${templates.length} template file(s)).`));
