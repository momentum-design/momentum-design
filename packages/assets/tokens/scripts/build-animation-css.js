const fs = require('fs');
const path = require('path');

const SRC_ANIMATION = path.join(__dirname, '../src/motion/animation.json');
const RESOLVED_MOTION = path.join(__dirname, '../dist/json/motion/complete.json');
const OUTPUT_DIR = path.join(__dirname, '../dist/css/motion');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'animation.css');

const CSS_SELECTOR = '.mds-motion';
const TOKEN_REF_PATTERN = /^\{(.+)\}$/;

/**
 * Resolve a token reference like "{motion.duration.instant}" to its actual value
 * by traversing the resolved motion token tree.
 */
function resolveRef(ref, resolvedTokens) {
  const match = ref.match(TOKEN_REF_PATTERN);
  if (!match) return ref;

  const parts = match[1].split('.');
  let current = resolvedTokens;
  for (const part of parts) {
    if (current == null || typeof current !== 'object') {
      throw new Error(`Unresolved token reference: "${ref}" — path segment "${part}" not found.`);
    }
    current = current[part];
  }
  if (!current || !current.value) {
    throw new Error(`Unresolved token reference: "${ref}" — no value found.`);
  }
  return current.value;
}

/**
 * Resolve all token references in an animation token's fields.
 */
function resolveToken(token, resolvedTokens) {
  return {
    ...token,
    duration: resolveRef(token.duration, resolvedTokens),
    easing: resolveRef(token.easing, resolvedTokens),
    delay: resolveRef(token.delay, resolvedTokens),
  };
}

function toKebab(camelName) {
  return camelName.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase();
}

function buildTransitionValue(token) {
  return token.properties
    .map((prop) => `${prop} ${token.duration} ${token.easing} ${token.delay}`)
    .join(', ');
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
    const kebab = toKebab(name);

    if (token.type === 'transition') {
      variableLines.push(`  --mds-transition-${kebab}: ${buildTransitionValue(token)};`);

    } else if (token.type === 'keyframe') {
      const kfName = `mds-animation-${kebab}`;
      keyframeBlocks.push(buildKeyframeBlock(kfName, token));
      const iteration = token.iterationCount ? ` ${token.iterationCount}` : '';
      variableLines.push(
        `  --mds-animation-${kebab}: ${kfName} ${token.duration} ${token.easing} ${token.delay}${iteration};`,
      );

    } else if (token.type === 'compoundTransitions') {
      const parts = token.animations.flatMap((refName) => {
        const ref = resolved[refName];
        return ref ? buildTransitionValue(ref).split(', ') : [];
      });
      if (parts.length) {
        variableLines.push(`  --mds-transition-${kebab}: ${parts.join(', ')};`);
      }

    } else if (token.type === 'compoundKeyframes') {
      const parts = token.animations.map((refName) => {
        const ref = resolved[refName];
        if (!ref) return null;
        const refKebab = toKebab(refName);
        const iteration = ref.iterationCount ? ` ${ref.iterationCount}` : '';
        return `mds-animation-${refKebab} ${ref.duration} ${ref.easing} ${ref.delay}${iteration}`;
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

generate();
