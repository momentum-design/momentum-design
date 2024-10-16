import type { Named, Transform as SDTransform } from 'style-dictionary';

import type { Config, Matcher, Token, Transformer, Type } from './types';

import CONSTANTS from './constants';

class PxToRem {
  protected config: Config;

  public constructor(config: Config = {}) {
    this.config = structuredClone(config);
  }

  public get matcher(): Matcher {
    return (token: Token) => (
      PxToRem.CONSTANTS.TARGET_TOKEN_TYPES.includes(token.type)
    );
  }

  public get name(): string {
    return PxToRem.CONSTANTS.NAME;
  }

  public get transformer(): Transformer {
    return (token, options) => {
      const baseFont = (options && options.basePxFontSize) || 16;
      const floatVal = parseFloat(token.value);

      if (Number.isNaN(floatVal)) {
        throw new Error(
          `Invalid Number: '${token.name}: ${token.value}' is not a valid number, `
          + 'cannot transform to \'rem\' \n',
        );
      }

      if (floatVal === 0) {
        return '0';
      }

      return `${floatVal / baseFont}rem`;
    };
  }

  public get transitive(): boolean | undefined {
    return this.config.transitive;
  }

  public get type(): Type {
    return 'value';
  }

  public get sdConfig(): Named<SDTransform> {
    return {
      name: this.name,
      type: 'value',
      transitive: this.transitive,
      matcher: this.matcher,
      transformer: this.transformer,
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default PxToRem;
