import animationSource from '../../../../assets/tokens/src/animation/animation.json';
import motionSource from '../../../../assets/tokens/src/core/motion.json';

import { kebabCase } from './motion-tokens.stories.utils';

export type MotionPrimitiveCategory = 'duration' | 'easing' | 'delay' | 'stagger';

export interface MotionPrimitiveToken {
  category: MotionPrimitiveCategory;
  name: string;
  value: string;
  description: string;
  cssVar: string;
}

export type AnimationTokenType = 'transition' | 'transitionCompound' | 'keyframe' | 'keyframeCompound';

export interface AnimationToken {
  name: string;
  kebabName: string;
  description: string;
  type: AnimationTokenType;
  cssVar: string;
  properties: string[];
  demoProperties: string[];
  isExit: boolean;
  durationValue: string;
  easingName: string;
  easingLabel: string;
  borderColorTransition?: string;
}

interface MotionTokenEntry {
  value: string;
  description?: string;
}

interface AnimationTokenEntry {
  description?: string;
  type: AnimationTokenType;
  properties?: string[];
  duration?: string;
  easing?: string;
  delay?: string;
}

const MOTION_CATEGORIES: MotionPrimitiveCategory[] = ['duration', 'easing', 'delay', 'stagger'];

const EXIT_TRANSITION_NAMES = new Set(['fadeOut', 'collapse', 'slideExit']);

const OBJECT_STATE_TOKEN_NAMES = ['backgroundColor', 'borderColor', 'objectColor', 'textChange'] as const;

const DEMO_PROPERTY_OVERRIDES: Partial<Record<string, string[]>> = {
  borderColor: ['border-color'],
};

function parseMotionReference(reference: string): { category: string; name: string } | null {
  const match = reference.match(/^\{motion\.(\w+)\.(\w+)\}$/);

  if (!match) {
    return null;
  }

  return { category: match[1], name: match[2] };
}

function resolveMotionValue(reference: string | undefined): string {
  if (!reference) {
    return '';
  }

  const parsed = parseMotionReference(reference);

  if (!parsed) {
    return reference;
  }

  const categoryEntries = motionSource.motion[parsed.category as keyof typeof motionSource.motion] as Record<
    string,
    MotionTokenEntry
  >;

  return categoryEntries[parsed.name]?.value ?? reference;
}

function formatEasingLabel(easingName: string): string {
  return easingName.charAt(0).toUpperCase() + easingName.slice(1);
}

function buildBorderColorTransition(entry: AnimationTokenEntry): string | undefined {
  const duration = resolveMotionValue(entry.duration);
  const easing = resolveMotionValue(entry.easing);
  const delay = resolveMotionValue(entry.delay);

  if (!duration || !easing) {
    return undefined;
  }

  return `border-color ${duration} ${easing} ${delay || '0ms'}`;
}

export function buildMotionPrimitiveTokens(): MotionPrimitiveToken[] {
  return MOTION_CATEGORIES.flatMap(category => {
    const entries = motionSource.motion[category] as Record<string, MotionTokenEntry>;

    return Object.entries(entries).map(([name, entry]) => ({
      category,
      name,
      value: entry.value,
      description: entry.description ?? '',
      cssVar: `--mds-motion-${category}-${kebabCase(name)}`,
    }));
  });
}

export function buildAnimationTokens(): AnimationToken[] {
  const animation = animationSource.animation as Record<string, AnimationTokenEntry>;

  return Object.entries(animation).map(([name, entry]) => {
    const kebabName = kebabCase(name);
    const prefix = entry.type === 'keyframe' || entry.type === 'keyframeCompound' ? 'animation' : 'transition';
    const easingRef = parseMotionReference(entry.easing ?? '');
    const easingName = easingRef?.name ?? 'standard';
    const properties = entry.properties ?? [];

    return {
      name,
      kebabName,
      description: entry.description ?? '',
      type: entry.type,
      cssVar: `--mds-${prefix}-${kebabName}`,
      properties,
      demoProperties: DEMO_PROPERTY_OVERRIDES[name] ?? properties,
      isExit: EXIT_TRANSITION_NAMES.has(name),
      durationValue: resolveMotionValue(entry.duration),
      easingName,
      easingLabel: formatEasingLabel(easingName),
      borderColorTransition: name === 'borderColor' ? buildBorderColorTransition(entry) : undefined,
    };
  });
}

export const motionPrimitiveTokens = buildMotionPrimitiveTokens();
export const animationTokens = buildAnimationTokens();

export const objectStateAnimationTokens = OBJECT_STATE_TOKEN_NAMES.map(
  name => animationTokens.find(token => token.name === name)!,
);

export const motionPrimitivesByCategory = Object.fromEntries(
  MOTION_CATEGORIES.map(category => [
    category,
    motionPrimitiveTokens.filter(token => token.category === category),
  ]),
) as Record<MotionPrimitiveCategory, MotionPrimitiveToken[]>;
