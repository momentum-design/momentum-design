import type { TransformedToken } from 'style-dictionary';
import { toKebabCase } from '../../common';

export type KeyframeEntry = { propertyName: string; from: string; to: string };

const TOKEN_REF_REGEX = /\{([^}]+)\}/g;

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

const ANIMATION_TYPES = new Set([
  'transition',
  'keyframe',
  'transitionCompound',
  'keyframeCompound',
]);

export type AnimationFormatConfig = {
  makeTransitionLine: (kebab: string, value: string) => string;
  makeAnimationLine: (kebab: string, value: string) => string;
  buildVariablesSection: (lines: string[]) => string;
};

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
  const { makeTransitionLine, makeAnimationLine, buildVariablesSection } = config;
  const keyframeBlocks: string[] = [];
  const variableLines: string[] = [];
  const validRefs = new Set(dictionary.allTokens.map((t) => t.path.join('.')));

  const resolveValue = (value: string): string => value.replace(TOKEN_REF_REGEX, (_, path: string) => {
    const t = dictionary.allTokens.find((tk) => tk.path.join('.') === path);
    return t ? String(t.value) : value;
  });

  dictionary.allTokens.forEach((token) => {
    const tokenType = token.original.type as string;
    if (!ANIMATION_TYPES.has(tokenType)) return;

    const kebab = toKebabCase(token.path.at(-1) as string);
    const resolvedValue = String(token.value);

    if (tokenType === 'transition' || tokenType === 'transitionCompound') {
      variableLines.push(makeTransitionLine(kebab, resolvedValue));
    } else if (tokenType === 'keyframe') {
      const kfName = `mds-animation-${kebab}`;
      const keyframes = (token.original.keyframes ?? []) as KeyframeEntry[];
      keyframes.forEach(({ from, to }) => {
        validateRefs(from, validRefs, `${token.path.join('.')}.from`);
        validateRefs(to, validRefs, `${token.path.join('.')}.to`);
      });
      keyframeBlocks.push(buildKeyframeBlock(kfName, keyframes, resolveValue));
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
