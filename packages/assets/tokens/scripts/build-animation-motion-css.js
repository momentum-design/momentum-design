const fs = require('fs');
const path = require('path');
const kebabCase = require('lodash/kebabCase');

const SRC_ANIMATION = path.join(__dirname, '../src/motion/animation.json');
const OUTPUT_DIR = path.join(__dirname, '../dist/css/motion');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'animation.css');

const CSS_SELECTOR = '.mds-motion';
const TOKEN_REF_PATTERN = /^\{(.+)\}$/;

/**
 * Converts a token reference (e.g. "{motion.duration.instant}") to a CSS
 * var() expression (e.g. "var(--mds-motion-duration-instant)").
 * Returns the raw value unchanged if it is not a token reference.
 *
 * @param {string} ref
 * @returns {string}
 */
function resolveRef(ref) {
  const match = ref.match(TOKEN_REF_PATTERN);
  if (!match) return ref;
  const varName = `--mds-${match[1].replace(/\./g, '-')}`;
  return `var(${varName})`;
}

/**
 * Resolves duration, easing, and delay fields on a token to CSS var() refs.
 *
 * @param {object} token
 * @returns {object}
 */
function resolveToken(token) {
  return {
    ...token,
    ...(token.duration !== undefined && { duration: resolveRef(token.duration) }),
    ...(token.easing !== undefined && { easing: resolveRef(token.easing) }),
    ...(token.delay !== undefined && { delay: resolveRef(token.delay) }),
  };
}

/**
 * Builds a CSS @keyframes block from a resolved keyframe token.
 *
 * @param {string} kfName - The @keyframes identifier.
 * @param {object} token  - Resolved keyframe token.
 * @returns {string}
 */
function buildKeyframeBlock(kfName, token) {
  const fromProps = {};
  const toProps = {};
  token.keyframes.forEach(({ propertyName, from, to }) => {
    fromProps[propertyName] = resolveRef(from);
    toProps[propertyName] = resolveRef(to);
  });
  const fromStr = Object.entries(fromProps).map(([p, v]) => `${p}: ${v}`).join('; ');
  const toStr = Object.entries(toProps).map(([p, v]) => `${p}: ${v}`).join('; ');
  return `@keyframes ${kfName} {\n  from { ${fromStr}; }\n  to { ${toStr}; }\n}`;
}

/**
 * Builds the CSS transition shorthand value for a resolved transition token.
 *
 * @param {object} token - Resolved transition token with duration, easing, delay, properties.
 * @returns {string}
 */
function buildTransitionValue(token) {
  return token.properties
    .map((prop) => `${prop} ${token.duration} ${token.easing} ${token.delay}`)
    .join(', ');
}

function generate() {
  if (!fs.existsSync(SRC_ANIMATION)) {
    console.error(`Error: ${SRC_ANIMATION} not found.`);
    process.exit(1);
  }

  const source = JSON.parse(fs.readFileSync(SRC_ANIMATION, 'utf8'));
  const animations = source.animation;

  // Pre-resolve all tokens so compound types can look up resolved siblings
  const resolved = {};
  for (const [name, token] of Object.entries(animations)) {
    resolved[name] = resolveToken(token);
  }

  const keyframeBlocks = [];
  const variableLines = [];

  for (const [name, token] of Object.entries(resolved)) {
    const kebab = kebabCase(name);

    if (token.type === 'transition') {
      variableLines.push(`  --mds-transition-${kebab}: ${buildTransitionValue(token)};`);

    } else if (token.type === 'keyframe') {
      const kfName = `mds-animation-${kebab}`;
      keyframeBlocks.push(buildKeyframeBlock(kfName, token));
      const iteration = token.iterationCount ? ` ${token.iterationCount}` : '';
      // TODO: `fillMode` ('none' | 'forwards' | 'backwards' | 'both') is declared in the
      // schema but not yet emitted. The CSS animation shorthand order is:
      // duration easing delay iteration-count direction fill-mode play-state name.
      // Supporting fillMode requires inserting it after iteration-count in that order.
      variableLines.push(
        `  --mds-animation-${kebab}: ${token.duration} ${token.easing} ${token.delay}${iteration} ${kfName};`,
      );

    } else if (token.type === 'transitionCompound') {
      // TODO: `composition` ('parallel' | 'sequential') is stored in the token but not yet
      // implemented. Currently all compound transitions are emitted as parallel (all listed
      // in a single `transition` declaration). Sequential composition would require
      // incrementally offsetting `delay` values across sub-transitions.
      const parts = token.animations.flatMap((refName) => {
        const ref = resolved[refName];
        if (!ref) throw new Error(`Invalid animation reference: "${refName}" not found in resolved animations.`);
        return buildTransitionValue(ref).split(', ');
      });
      if (parts.length) {
        variableLines.push(`  --mds-transition-${kebab}: ${parts.join(', ')};`);
      }

    } else if (token.type === 'keyframeCompound') {
      const parts = token.animations.map((refName) => {
        const ref = resolved[refName];
        if (!ref) throw new Error(`Invalid animation reference: "${refName}" not found in resolved animations.`);
        const refKebab = kebabCase(refName);
        const iteration = ref.iterationCount ? ` ${ref.iterationCount}` : '';
        return `${ref.duration} ${ref.easing} ${ref.delay}${iteration} mds-animation-${refKebab}`;
      });
      if (parts.length) {
        variableLines.push(`  --mds-animation-${kebab}: ${parts.join(', ')};`);
      }
    }
  }

  const header = '/**\n * Do not edit directly\n */\n';
  const keyframesSection = keyframeBlocks.join('\n\n');
  const variablesSection = `${CSS_SELECTOR} {\n${variableLines.join('\n')}\n}`;
  const output = [header, keyframesSection, variablesSection].filter(Boolean).join('\n\n');

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }
  fs.writeFileSync(OUTPUT_FILE, output);
  console.log(`✔︎ dist/css/motion/animation.css`);
}

if (require.main === module) {
  generate();
}

module.exports = { resolveRef, resolveToken, buildKeyframeBlock, buildTransitionValue };
