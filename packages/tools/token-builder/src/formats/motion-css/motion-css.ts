import StyleDictionary, { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';

import { buildReducedMotionMotionCoreBlock } from '../reduced-motion/utils';

import CONSTANTS from './constants';

class MotionCssFormat {
  public get formatter(): SDFormatter {
    return ({ dictionary, file, options, platform }): string => {
      const selector = (options?.selector as string | undefined) ?? '.mds-motion';
      const cssVariablesFormatter = StyleDictionary.format['css/variables'];

      if (!cssVariablesFormatter) {
        throw new Error('MotionCssFormat: css/variables formatter is not registered.');
      }

      const base = cssVariablesFormatter({ dictionary, file, options, platform });
      const reducedMotion = buildReducedMotionMotionCoreBlock(selector, dictionary);

      return reducedMotion ? `${base}\n\n${reducedMotion}\n` : `${base}\n`;
    };
  }

  public get name(): string {
    return MotionCssFormat.CONSTANTS.NAME;
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

export default MotionCssFormat;
