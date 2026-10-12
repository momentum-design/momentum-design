import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';

import CONSTANTS from './constants';
import { buildAnimationOutput } from '../animation/utils';
import { buildReducedMotionAnimationBlock } from '../reduced-motion/utils';

class AnimationCssFormat {
  public get formatter(): SDFormatter {
    return ({ dictionary, options }): string => {
      const selector = (options?.selector as string | undefined) ?? '.mds-animation';
      const base = buildAnimationOutput(dictionary, {
        makeTransitionLine: (kebab, value) => `  --mds-transition-${kebab}: ${value};`,
        makeAnimationLine: (kebab, value) => `  --mds-animation-${kebab}: ${value};`,
        buildVariablesSection: (lines) => `${selector} {\n${lines.join('\n')}\n}`,
      });
      const reducedMotion = buildReducedMotionAnimationBlock(selector, dictionary);

      return reducedMotion ? `${base}\n\n${reducedMotion}\n` : `${base}\n`;
    };
  }

  public get name(): string {
    return AnimationCssFormat.CONSTANTS.NAME;
  }

  public get sdConfig(): SDFormat {
    return {
      name: this.name,
      formatter: this.formatter,
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default AnimationCssFormat;
