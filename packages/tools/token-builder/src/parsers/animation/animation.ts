// AI-Assisted
import StyleDictionary, { Parser as SDParser, DesignTokens } from 'style-dictionary';
import { toKebabCase } from '../../common';

const ANIMATION_FILE_PATTERN = /motion[/\\\\]animation\.json$/;

type RawAnimationToken = {
  description: string;
  type: 'transition' | 'keyframe' | 'transitionCompound' | 'keyframeCompound';
  properties?: string[];
  duration?: string;
  easing?: string;
  delay?: string;
  iterationCount?: string | number;
  fillMode?: string;
  keyframes?: Array<{ propertyName: string; from: string; to: string }>;
  animations?: string[];
  composition?: 'parallel' | 'sequential';
};

type AnimationFile = { animation: Record<string, RawAnimationToken> };

/**
 * Builds the raw (un-resolved) transition shorthand value string for one transition token.
 * Token references like `{motion.duration.instant}` are kept intact — SD resolves them.
 */
function buildTransitionValue(token: RawAnimationToken): string {
  return (token.properties ?? []).map((prop) => `${prop} ${token.duration} ${token.easing} ${token.delay}`).join(', ');
}

/**
 * Builds the raw (un-resolved) animation shorthand value for one keyframe token.
 * The keyframe name is derived from the camelCase token name passed in.
 */
function buildKeyframeValue(kebabName: string, token: RawAnimationToken): string {
  const iteration = token.iterationCount ? ` ${token.iterationCount}` : '';
  const fill = token.fillMode ? ` ${token.fillMode}` : '';
  return `${token.duration} ${token.easing} ${token.delay}${iteration}${fill} mds-animation-${kebabName}`;
}

/**
 * Injects a `value` field into every animation token so that Style Dictionary
 * treats them as proper tokens (SD only recognises nodes that have a `value` key).
 *
 * Cross-file references such as `{motion.duration.instant}` are left as-is so
 * that SD can resolve them natively when `outputReferences: true` is set.
 *
 * Same-file compound references (`animations: ["buttonBackground"]`) are
 * expanded inline here because SD has no way to resolve those.
 */
class AnimationParser {
  public get pattern(): RegExp {
    return ANIMATION_FILE_PATTERN;
  }

  public get parser(): SDParser['parse'] {
    return ({ contents }): DesignTokens => {
      const source = JSON.parse(contents) as AnimationFile;
      const tokens = source.animation;

      const injected: Record<string, RawAnimationToken & { value: string }> = {};

      // First pass — inject value for primitive token types
      Object.entries(tokens).forEach(([name, token]) => {
        const kebab = toKebabCase(name);
        let value: string;

        if (token.type === 'transition') {
          value = buildTransitionValue(token);
        } else if (token.type === 'keyframe') {
          value = buildKeyframeValue(kebab, token);
        } else {
          // compound types — resolved in second pass
          value = '';
        }

        injected[name] = { ...token, value };
      });

      // Second pass — resolve compound types from the already-injected primitives
      Object.entries(tokens).forEach(([name, token]) => {
        if (token.type === 'transitionCompound') {
          const parts = (token.animations ?? []).flatMap((refName) => {
            const ref = injected[refName];
            if (!ref) {
              throw new Error(`AnimationParser: compound token "${name}" references unknown animation "${refName}".`);
            }
            return buildTransitionValue(ref).split(', ');
          });
          injected[name] = { ...token, value: parts.join(', ') };
        } else if (token.type === 'keyframeCompound') {
          const parts = (token.animations ?? []).map((refName) => {
            const ref = injected[refName];
            if (!ref) {
              throw new Error(`AnimationParser: compound token "${name}" references unknown animation "${refName}".`);
            }
            const refKebab = toKebabCase(refName);
            const iteration = ref.iterationCount ? ` ${ref.iterationCount}` : '';
            const fill = ref.fillMode ? ` ${ref.fillMode}` : '';
            return `${ref.duration} ${ref.easing} ${ref.delay}${iteration}${fill} mds-animation-${refKebab}`;
          });
          injected[name] = { ...token, value: parts.join(', ') };
        }
      });

      return { animation: injected } as unknown as DesignTokens;
    };
  }

  public get sdConfig(): SDParser {
    return {
      pattern: this.pattern,
      parse: this.parser,
    };
  }

  /**
   * Registers the animation parser on a Style Dictionary instance.
   *
   * MUST be called AFTER `registerTransforms()` from @tokens-studio/sd-transforms.
   * Both `registerTransforms` and this parser register on the same SD singleton
   * parser list. SD uses last-matching-pattern wins, so if AnimationParser is
   * registered first, the tokens-studio parser will overwrite it and animation
   * token `value` fields will be lost.
   */
  public static register(sd: typeof StyleDictionary): void {
    sd.registerParser(new AnimationParser().sdConfig);
  }
}

export default AnimationParser;
// End AI-Assisted
