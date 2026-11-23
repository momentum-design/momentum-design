// `figma connect create` and AI-authored templates both emit a literal Figma URL.
// This rewrites those to the committed `<FIGMA_<COMPONENT>_URL>` placeholder form
// and records the real value in the gitignored .env, so the key never reaches git.
const fs = require('fs');
const path = require('path');

const PACKAGE_ROOT = process.cwd();
const COMPONENTS_DIR = path.join(PACKAGE_ROOT, 'src', 'components');
const ENV_FILE = path.join(PACKAGE_ROOT, '.env');
const FIGMA_URL = /https?:\/\/(?:www\.)?figma\.com\/(?:design|file)\/[^\s"'`]+/g;

// Must stay identical to createDocumentUrlSubstitutions in config/code-connect/utils.js —
// if the two derivations drift, the placeholder stops resolving at publish time.
const placeholderFor = component => `<FIGMA_${component.toUpperCase()}_URL>`;
const envKeyFor = component => `FIGMA_${component.toUpperCase()}_URL`;

function findTemplates(dir) {
  if (!fs.existsSync(dir)) return [];
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return findTemplates(entryPath);
    return entry.isFile() && entry.name.endsWith('.figma.ts') ? [entryPath] : [];
  });
}

const discovered = new Map();
const conflicts = [];
const rewritten = [];

findTemplates(COMPONENTS_DIR).forEach(file => {
  const original = fs.readFileSync(file, 'utf8');
  const matches = original.match(FIGMA_URL);
  if (!matches) return;

  const component = path.relative(COMPONENTS_DIR, file).split(path.sep)[0];

  matches.forEach(url => {
    const existing = discovered.get(component);
    if (existing && existing !== url) conflicts.push({ component, file });
    else discovered.set(component, url);
  });

  fs.writeFileSync(file, original.replace(FIGMA_URL, placeholderFor(component)));
  rewritten.push(path.relative(PACKAGE_ROOT, file));
});

if (conflicts.length) {
  console.error('\n✖ A component has templates pointing at different Figma nodes:\n');
  conflicts.forEach(({ component, file }) => console.error(`  ${component} — ${path.relative(PACKAGE_ROOT, file)}`));
  console.error('\nThe React and Web Components templates for a component must share one URL.\n');
  process.exit(1);
}

if (!rewritten.length) {
  console.log('No literal Figma URLs found — nothing to scrub.');
  process.exit(0);
}

const env = fs.existsSync(ENV_FILE) ? fs.readFileSync(ENV_FILE, 'utf8') : '';
const additions = [];
const alreadySet = [];

discovered.forEach((url, component) => {
  const key = envKeyFor(component);
  const current = env.match(new RegExp(`^${key}=(.*)$`, 'm'));
  if (!current) additions.push(`${key}=${url}`);
  // Never overwrite: the local value may deliberately point at a branch or a draft node.
  else if (current[1].trim() !== url) alreadySet.push(key);
});

if (additions.length) {
  const separator = env.length && !env.endsWith('\n') ? '\n' : '';
  fs.writeFileSync(ENV_FILE, `${env}${separator}${additions.join('\n')}\n`);
}

console.log(`Scrubbed ${rewritten.length} template file(s):`);
rewritten.forEach(file => console.log(`  ${file}`));
console.log(`Added ${additions.length} key(s) to .env: ${additions.map(line => line.split('=')[0]).join(', ') || '—'}`);
if (alreadySet.length) {
  console.log(`\nLeft unchanged in .env (different value already set): ${alreadySet.join(', ')}`);
}
