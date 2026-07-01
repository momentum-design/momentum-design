import StyleDictionary, {
  Parser as SDParser,
  DesignTokens,
} from 'style-dictionary';
import { toKebabCase } from '../../common';

const ANIMATION_FILE_PATTERN = /motion[/\\\\]animation\.json$/;

type AnimationTransition = {
  type: 'transition';
  description: string;
  properties: string[];
  duration: string;
  easing: string;
  delay: string;
};

type AnimationKeyframeEntry = {
  propertyName: string;
  from: string;
  to: string;
};

type AnimationKeyframe = {
  type: 'keyframe';
  description: string;
  duration: string;
  easing: string;
  delay: string;
  keyframes: AnimationKeyframeEntry[];
  iterationCount: 'infinite' | number;
  fillMode: 'none' | 'forwards' | 'backwards' | 'both';
};

type AnimationTransitionCompound = {
  type: 'transitionCompound';
  description: string;
  animations: string[];
  composition: 'parallel' | 'sequential';
};

type AnimationKeyframeCompound = {
  type: 'keyframeCompound';
  description: string;
  animations: string[];
  composition: 'parallel' | 'sequential';
};

type AnimationToken =
  | AnimationTransition
  | AnimationKeyframe
  | AnimationTransitionCompound
  | AnimationKeyframeCompound;

type AnimationFile = { animation: Record<string, AnimationToken> };

function buildTransitionValue(token: AnimationTransition): string {
  return (token.properties ?? []).map((prop) => `${prop} ${token.duration} ${token.easing} ${token.delay}`).join(', ');
}

function buildKeyframeValue(
  kebabName: string,
  token: AnimationKeyframe,
): string {
  const iteration = token.iterationCount ? ` ${token.iterationCount}` : '';
  const fill = token.fillMode ? ` ${token.fillMode}` : '';
  return `${token.duration} ${token.easing} ${token.delay}${iteration}${fill} mds-animation-${kebabName}`;
}

class AnimationParser {
  public get pattern(): RegExp {
    return ANIMATION_FILE_PATTERN;
  }

  public get parser(): SDParser['parse'] {
    return ({ contents }): DesignTokens => {
      const source = JSON.parse(contents) as AnimationFile;
      const tokens = source.animation;

      const injected: Record<string, AnimationToken & { value: string }> = {};

      Object.entries(tokens).forEach(([name, token]) => {
        const kebab = toKebabCase(name);
        let value: string;

        if (token.type === 'transition') {
          value = buildTransitionValue(token);
        } else if (token.type === 'keyframe') {
          value = buildKeyframeValue(kebab, token);
        } else {
          value = '';
        }

        injected[name] = { ...token, value };
      });

      const resolveRef = (refName: string, compoundName: string): AnimationToken & { value: string } => {
        const ref = injected[refName];
        if (!ref) {
          throw new Error(
            `AnimationParser: compound token "${compoundName}" references unknown animation "${refName}".`,
          );
        }
        return ref;
      };

      Object.entries(tokens).forEach(([name, token]) => {
        if (token.type === 'transitionCompound') {
          // eslint-disable-next-line arrow-body-style
          const parts = (token.animations ?? []).flatMap((refName) => {
            return buildTransitionValue(resolveRef(refName, name) as AnimationTransition).split(', ');
          });
          injected[name] = { ...token, value: parts.join(', ') };
        } else if (token.type === 'keyframeCompound') {
          // eslint-disable-next-line arrow-body-style
          const parts = (token.animations ?? []).map((refName) => {
            return buildKeyframeValue(toKebabCase(refName), resolveRef(refName, name) as AnimationKeyframe);
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
   * MUST be called AFTER `registerTransforms()` from \@tokens-studio/sd-transforms.
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
