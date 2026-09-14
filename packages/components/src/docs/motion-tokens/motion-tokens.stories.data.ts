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
  isExit: boolean;
}

interface MotionTokenEntry {
  value: string;
  description?: string;
}

const MOTION_CATEGORIES: MotionPrimitiveCategory[] = ['duration', 'easing', 'delay', 'stagger'];

const EXIT_TRANSITION_NAMES = new Set(['fadeOut', 'collapse', 'slideExit']);

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
  const animation = animationSource.animation as Record<
    string,
    {
      description?: string;
      type: AnimationTokenType;
      properties?: string[];
    }
  >;

  return Object.entries(animation).map(([name, entry]) => {
    const kebabName = kebabCase(name);
    const prefix = entry.type === 'keyframe' || entry.type === 'keyframeCompound' ? 'animation' : 'transition';

    return {
      name,
      kebabName,
      description: entry.description ?? '',
      type: entry.type,
      cssVar: `--mds-${prefix}-${kebabName}`,
      properties: entry.properties ?? [],
      isExit: EXIT_TRANSITION_NAMES.has(name),
    };
  });
}

export const motionPrimitiveTokens = buildMotionPrimitiveTokens();
export const animationTokens = buildAnimationTokens();

export const motionPrimitivesByCategory = Object.fromEntries(
  MOTION_CATEGORIES.map(category => [
    category,
    motionPrimitiveTokens.filter(token => token.category === category),
  ]),
) as Record<MotionPrimitiveCategory, MotionPrimitiveToken[]>;
