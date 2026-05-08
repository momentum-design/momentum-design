const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');

const SRC_COMPONENT = path.join(__dirname, '../src/motion/component.json');
const SRC_ANIMATION = path.join(__dirname, '../src/motion/animation.json');
const OUTPUT_DIR = path.join(__dirname, '../dist/css/motion');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'component.css');

const KEYFRAME_TYPES = new Set(['keyframe', 'keyframeCompound']);
const TRANSITION_TYPES = new Set(['transition', 'transitionCompound']);

// Native CSS pseudo-classes that map to `:name` syntax.
// Everything else is treated as a CustomStateSet selector: `:state(name)`.
const NATIVE_PSEUDO_CLASSES = new Set([
  'hover',
  'active',
  'focus',
  'focus-visible',
  'focus-within',
  'disabled',
  'enabled',
  'checked',
  'indeterminate',
  'placeholder-shown',
  'valid',
  'invalid',
  'required',
  'optional',
  'read-only',
  'read-write',
  'visited',
  'link',
  'any-link',
  'target',
  'empty',
  'root',
  'first-child',
  'last-child',
  'first-of-type',
  'last-of-type',
]);

/**
 * Maps a single state name to its CSS pseudo-class string.
 * Native pseudo-classes use `:name`; custom states use `:state(name)`.
 *
 * @param {string} state
 * @returns {string}
 */
function stateToSelector(state) {
  return NATIVE_PSEUDO_CLASSES.has(state) ? `:${state}` : `:state(${state})`;
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
 * @returns {string}
 */
function buildSelector(componentName, part, states) {
  const stateStr = (states || []).map(stateToSelector).join('');
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

  const rules = [];

  for (const [componentName, entries] of Object.entries(source.component)) {
    for (const entry of entries) {
      const { part, state, animation } = entry;
      const { cssProp, cssVar } = resolveAnimation(animation, animations);
      const selector = buildSelector(componentName, part, state);
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
