const fs = require('fs');
const path = require('path');
const get = require('lodash/get');
const kebabCase = require('lodash/kebabCase');

const SRC_ANIMATION = path.join(__dirname, '../src/motion/animation.json');
const RESOLVED_MOTION = path.join(__dirname, '../dist/json/motion/complete.json');
const OUTPUT_DIR = path.join(__dirname, '../dist/css/motion');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'animation.css');

const CSS_SELECTOR = '.mds-motion';
const TOKEN_REF_PATTERN = /^\{(.+)\}$/;

function resolveRef(ref, resolvedTokens) {
  const match = ref.match(TOKEN_REF_PATTERN);
  if (!match) return ref;

  const value = get(resolvedTokens, `${match[1]}.value`);
  if (!value) {
    throw new Error(`Unresolved token reference: "${ref}" — no value found.`);
  }
  return value;
}

function resolveToken(token, resolvedTokens) {
  return {
    ...token,
    ...(token.duration !== undefined && { duration: resolveRef(token.duration, resolvedTokens) }),
    ...(token.easing !== undefined && { easing: resolveRef(token.easing, resolvedTokens) }),
    ...(token.delay !== undefined && { delay: resolveRef(token.delay, resolvedTokens) }),
  };
}

function buildKeyframeBlock(kfName, token) {
  const fromProps = {};
  const toProps = {};
  token.keyframes.forEach(({ propertyName, from, to }) => {
    fromProps[propertyName] = from;
    toProps[propertyName] = to;
  });
  const fromStr = Object.entries(fromProps).map(([p, v]) => `${p}: ${v}`).join('; ');
  const toStr = Object.entries(toProps).map(([p, v]) => `${p}: ${v}`).join('; ');
  return `@keyframes ${kfName} {\n  from { ${fromStr}; }\n  to { ${toStr}; }\n}`;
}

function buildTransitionValue(token) {
  return token.properties
    .map((prop) => `${prop} ${token.duration} ${token.easing} ${token.delay}`)
    .join(', ');
}

function generate() {
  if (!fs.existsSync(RESOLVED_MOTION)) {
    console.error(`Error: ${RESOLVED_MOTION} not found. Run 'yarn build:motion' first.`);
    process.exit(1);
  }

  const source = JSON.parse(fs.readFileSync(SRC_ANIMATION, 'utf8'));
  const resolvedMotion = JSON.parse(fs.readFileSync(RESOLVED_MOTION, 'utf8'));
  const animations = source.animation;

  // Pre-resolve all tokens so compound types can look up resolved siblings
  const resolved = {};
  for (const [name, token] of Object.entries(animations)) {
    resolved[name] = resolveToken(token, resolvedMotion);
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
      variableLines.push(
        `  --mds-animation-${kebab}: ${token.duration} ${token.easing} ${token.delay}${iteration} ${kfName};`,
      );

    } else if (token.type === 'transitionCompound') {
      const parts = token.animations.flatMap((refName) => {
        const ref = resolved[refName];
        return ref ? buildTransitionValue(ref).split(', ') : [];
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
      }).filter(Boolean);
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
