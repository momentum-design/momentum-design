const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');

const SRC_COMPONENT = path.join(__dirname, '../src/motion/component.json');
const SRC_ANIMATION = path.join(__dirname, '../src/motion/animation.json');
const CEM_PATH = path.join(__dirname, '../../../components/dist/custom-elements.json');
const OUTPUT_DIR = path.join(__dirname, '../dist/css/motion');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'component.css');

const KEYFRAME_TYPES = new Set(['keyframe', 'keyframeCompound']);
const TRANSITION_TYPES = new Set(['transition', 'transitionCompound']);

const NATIVE_PSEUDO_CLASSES = new Set([
  'hover',
  'active',
  'focus',
  'focus-visible',
  'focus-within',
  'disabled',
  'enabled',
  'valid',
  'invalid',
  'required',
  'optional',
]);

/**
 * Maps a single state name to its CSS pseudo-class string.
 *
 * Resolution order:
 * 1. If state is ':noState' → return '' (no pseudo-class)
 * 2. If componentName is given and state appears in that component's cssCustomStates
 *    in the CEM → use `:state(name)`
 * 3. If state is in NATIVE_PSEUDO_CLASSES → use `:name`
 * 4. Otherwise → throw an error
 *
 * @param {string} state
 * @param {string} [componentName] - e.g. "mdc-button"
 * @param {object|null} [cem] - parsed custom-elements.json manifest
 * @returns {string}
 */
function stateToSelector(state, componentName, cem) {
  if (state === ':noState') return '';

  const declaration = cem?.modules
    .flatMap(mod => mod.declarations ?? [])
    .find(dec => dec.tagName === componentName);
  const customStates = declaration?.cssCustomStates ?? [];
  if (customStates.some(s => s.name === state)) {
    return `:state(${state})`;
  }

  if (NATIVE_PSEUDO_CLASSES.has(state)) {
    return `:${state}`;
  }

  throw new Error(`Unknown state "${state}" for component "${componentName}". Add it to NATIVE_PSEUDO_CLASSES or expose it as a CSS custom state via @cssstate in the component.`);
}

/**
 * Resolves an animation token name (e.g. "buttonLoadingSpin") to its
 * CSS property and var() reference.
 *
 * @param {string} name - Key from the animation token map.
 * @param {Record<string, {type: string}>} animations
 * @returns {{ cssProp: string, cssVar: string }}
 */
function resolveAnimation(name, animations) {
  const token = animations[name];
  if (!token) {
    throw new Error(`Animation token not found: "${name}"`);
  }
  const kebab = kebabCase(name);
  if (KEYFRAME_TYPES.has(token.type)) {
    return { cssProp: 'animation', cssVar: `var(--mds-animation-${kebab})` };
  }
  if (TRANSITION_TYPES.has(token.type)) {
    return { cssProp: 'transition', cssVar: `var(--mds-transition-${kebab})` };
  }
  throw new Error(`Unknown animation type "${token.type}" for token "${name}"`);
}

/**
 * Builds the CSS selector for a component part entry.
 *
 * @param {string} componentName - e.g. "mdc-button"
 * @param {string} part - ":host" or a part name e.g. "prefix-icon"
 * @param {string[]} states - Array of state names; may be empty or omitted.
 * @param {object|null} [cem] - parsed custom-elements.json manifest
 * @returns {string}
 */
function buildSelector(componentName, part, states, cem) {
  const stateStr = (states || []).map(s => stateToSelector(s, componentName, cem)).join('');
  if (part === ':host') {
    return `${componentName}${stateStr}`;
  }
  return `${componentName}${stateStr}::part(${part})`;
}

/**
 * Builds a single CSS rule string.
 *
 * @param {string} selector
 * @param {string} cssProp - e.g. "animation" or "transition"
 * @param {string} cssVar  - e.g. "var(--mds-animation-button-loading-spin)"
 * @returns {string}
 */
function buildCSSRule(selector, cssProp, cssVar) {
  return `${selector} {\n  ${cssProp}: ${cssVar};\n}`;
}

function generate() {
  if (!fs.existsSync(SRC_COMPONENT)) {
    console.error(`Error: ${SRC_COMPONENT} not found.`);
    process.exit(1);
  }

  if (!fs.existsSync(SRC_ANIMATION)) {
    console.error(`Error: ${SRC_ANIMATION} not found.`);
    process.exit(1);
  }

  const source = JSON.parse(fs.readFileSync(SRC_COMPONENT, 'utf8'));
  const animations = JSON.parse(fs.readFileSync(SRC_ANIMATION, 'utf8')).animation;

  if (!fs.existsSync(CEM_PATH)) {
    console.error(`Error: Custom Elements Manifest not found at ${CEM_PATH}.`);
    console.error('Run the full root build (yarn build) so the components package generates it before motion tokens.');
    process.exit(1);
  }

  const cem = JSON.parse(fs.readFileSync(CEM_PATH, 'utf8'));

  const rules = [];

  for (const [componentName, entries] of Object.entries(source.component)) {
    for (const entry of entries) {
      const { part, state, animation } = entry;
      const { cssProp, cssVar } = resolveAnimation(animation, animations);
      const selector = buildSelector(componentName, part, state, cem);
      rules.push(buildCSSRule(selector, cssProp, cssVar));
    }
  }

  const header = '/**\n * Do not edit directly\n */\n';
  const output = [header, ...rules].join('\n\n') + '\n';

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`✔︎ dist/css/motion/component.css`);
}

if (require.main === module) {
  generate();
}

module.exports = { stateToSelector, resolveAnimation, buildSelector, buildCSSRule };
