// AI-Assisted
import type { TransformedToken } from 'style-dictionary';
import { toKebabCase } from '../../common';

export type KeyframeEntry = { propertyName: string; from: string; to: string };

/** Matches every `{a.b.c}` token reference in a string. */
const TOKEN_REF_REGEX = /\{([^}]+)\}/g;

/**
 * Throws if any `{a.b.c}` reference in `value` does not correspond to a path in `validRefs`.
 * Build `validRefs` once before iterating tokens: `new Set(dictionary.allTokens.map(t => t.path.join('.')))`.
 */
export function validateRefs(
  value: string,
  validRefs: Set<string>,
  tokenName: string,
): void {
  const refs = [...value.matchAll(TOKEN_REF_REGEX)].map((m) => m[1]);
  refs.forEach((ref) => {
    if (!validRefs.has(ref)) {
      throw new Error(
        `AnimationFormat: token "${tokenName}" contains unknown ref "{${ref}}".`,
      );
    }
  });
}

/**
 * Replaces every `{a.b.c}` token reference in a composite value string with a
 * CSS custom property var() expression: `var(--mds-a-b-c)`.
 */
export function resolveRefsCss(value: string): string {
  return value.replace(
    TOKEN_REF_REGEX,
    (_, refPath: string) => `var(--mds-${refPath.replace(/\./g, '-')})`,
  );
}

/**
 * Replaces every `{a.b.c}` token reference in a composite value string with a
 * SCSS variable: `$mds-a-b-c`.
 */
export function resolveRefsScss(value: string): string {
  return value.replace(
    TOKEN_REF_REGEX,
    (_, refPath: string) => `$mds-${refPath.replace(/\./g, '-')}`,
  );
}

const ANIMATION_TYPES = new Set([
  'transition',
  'keyframe',
  'transitionCompound',
  'keyframeCompound',
]);

export type AnimationFormatConfig = {
  resolveRefs: (value: string) => string;
  makeTransitionLine: (kebab: string, value: string) => string;
  makeAnimationLine: (kebab: string, value: string) => string;
  buildVariablesSection: (lines: string[]) => string;
};

/** Builds a CSS keyframes block from a list of KeyframeEntry descriptors. */
export function buildKeyframeBlock(
  kfName: string,
  keyframes: KeyframeEntry[],
  resolveRefs: (value: string) => string,
): string {
  const fromProps: Record<string, string> = {};
  const toProps: Record<string, string> = {};
  keyframes.forEach(({ propertyName, from, to }) => {
    fromProps[propertyName] = resolveRefs(from);
    toProps[propertyName] = resolveRefs(to);
  });
  const fromStr = Object.entries(fromProps)
    .map(([p, v]) => `${p}: ${v}`)
    .join('; ');
  const toStr = Object.entries(toProps)
    .map(([p, v]) => `${p}: ${v}`)
    .join('; ');
  return `@keyframes ${kfName} {\n  from { ${fromStr}; }\n  to { ${toStr}; }\n}`;
}

/** Builds the full animation format output shared by CSS and SCSS formatters. */
export function buildAnimationOutput(
  dictionary: { allTokens: TransformedToken[] },
  config: AnimationFormatConfig,
): string {
  const {
    resolveRefs,
    makeTransitionLine,
    makeAnimationLine,
    buildVariablesSection,
  } = config;
  const keyframeBlocks: string[] = [];
  const variableLines: string[] = [];
  const validRefs = new Set(dictionary.allTokens.map((t) => t.path.join('.')));

  dictionary.allTokens.forEach((token) => {
    const tokenType = token.original.type as string;
    if (!ANIMATION_TYPES.has(tokenType)) return;

    const kebab = toKebabCase(token.path.at(-1) as string);
    // Use the original (pre-transform) value so that cross-file references
    // become format-specific variable references instead of resolved values.
    const rawValue = String(token.original.value);
    validateRefs(rawValue, validRefs, token.path.join('.'));
    const resolvedValue = resolveRefs(rawValue);

    if (tokenType === 'transition' || tokenType === 'transitionCompound') {
      variableLines.push(makeTransitionLine(kebab, resolvedValue));
    } else if (tokenType === 'keyframe') {
      const kfName = `mds-animation-${kebab}`;
      const keyframes = (token.original.keyframes ?? []) as KeyframeEntry[];
      keyframes.forEach(({ from, to }) => {
        validateRefs(from, validRefs, `${token.path.join('.')}.from`);
        validateRefs(to, validRefs, `${token.path.join('.')}.to`);
      });
      keyframeBlocks.push(buildKeyframeBlock(kfName, keyframes, resolveRefs));
      variableLines.push(makeAnimationLine(kebab, resolvedValue));
    } else if (tokenType === 'keyframeCompound') {
      variableLines.push(makeAnimationLine(kebab, resolvedValue));
    }
  });

  const header = '/**\n * Do not edit directly\n */';
  const keyframesSection = keyframeBlocks.join('\n\n');
  const variablesSection = buildVariablesSection(variableLines);

  return `${[header, keyframesSection, variablesSection].filter(Boolean).join('\n\n')}\n`;
}

// End AI-Assisted
