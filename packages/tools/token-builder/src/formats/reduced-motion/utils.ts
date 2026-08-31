import type { TransformedToken } from 'style-dictionary';

import { toKebabCase } from '../../common';

const ANIMATION_TYPES = new Set([
  'transition',
  'transitionCompound',
  'keyframe',
  'keyframeCompound',
]);

const MOTION_REDUCED_CATEGORIES = new Set(['duration', 'delay', 'stagger']);

function buildMediaBlock(selector: string, lines: string[]): string {
  if (lines.length === 0) {
    return '';
  }

  return `@media (prefers-reduced-motion: reduce) {\n  ${selector} {\n${lines.join('\n')}\n  }\n}`;
}

function getAnimationVariableName(token: TransformedToken): string | null {
  const tokenType = token.original?.type as string | undefined;

  if (!tokenType || !ANIMATION_TYPES.has(tokenType)) {
    return null;
  }

  const kebab = toKebabCase(token.path.at(-1) as string);

  if (tokenType === 'transition' || tokenType === 'transitionCompound') {
    return `--mds-transition-${kebab}`;
  }

  return `--mds-animation-${kebab}`;
}

export function buildReducedMotionMotionCoreBlock(
  selector: string,
  dictionary: { allTokens: TransformedToken[] },
): string {
  const lines = dictionary.allTokens
    .filter((token) => token.path[0] === 'motion' && MOTION_REDUCED_CATEGORIES.has(token.path[1] as string))
    .map((token) => `    --${token.name}: 0ms;`);

  return buildMediaBlock(selector, lines);
}

export function buildReducedMotionAnimationBlock(
  selector: string,
  dictionary: { allTokens: TransformedToken[] },
): string {
  const lines = dictionary.allTokens
    .filter((token) => token.path[0] === 'animation')
    .map((token) => getAnimationVariableName(token))
    .filter((name): name is string => name !== null)
    .map((name) => `    ${name}: none;`);

  return buildMediaBlock(selector, lines);
}
