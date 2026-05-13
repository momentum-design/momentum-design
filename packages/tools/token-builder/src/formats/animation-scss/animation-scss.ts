// AI-Assisted
import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';

import CONSTANTS from './constants';
import { resolveRefsScss, buildAnimationOutput } from '../animation/utils';

class AnimationScssFormat {
  public get formatter(): SDFormatter {
    // eslint-disable-next-line arrow-body-style
    return ({ dictionary }): string => buildAnimationOutput(dictionary, {
      resolveRefs: resolveRefsScss,
      makeTransitionLine: (kebab, value) => `$mds-transition-${kebab}: ${value};`,
      makeAnimationLine: (kebab, value) => `$mds-animation-${kebab}: ${value};`,
      // SCSS variables are file-level — no class selector wrapper.
      buildVariablesSection: (lines) => lines.join('\n'),
    });
  }

  public get name(): string {
    return AnimationScssFormat.CONSTANTS.NAME;
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

export default AnimationScssFormat;
// End AI-Assisted
