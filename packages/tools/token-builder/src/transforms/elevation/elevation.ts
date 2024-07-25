import type { Named, Transform as SDTransform } from 'style-dictionary';

import type { Config, Matcher, Token, Transformer, Type } from './types';

import CONSTANTS from './constants';

class Elevation {
  protected config: Config;

  public constructor(config: Config = {}) {
    this.config = structuredClone(config);
  }

  public get matcher(): Matcher {
    return (token: Token) => (
      Elevation.CONSTANTS.TARGET_TOKEN_TYPES.includes(token.type)
      && Elevation.CONSTANTS.TARGET_TOKEN_VALUE_TYPES.includes(token.value.type)
    );
  }

  public get name(): string {
    return Elevation.CONSTANTS.NAME;
  }

  public get transformer(): Transformer {
    return (token: Token) => {
      const { blur, color, spread, type, x, y } = token.value;

      let value: string;

      switch (type) {
        case Elevation.CONSTANTS.TARGET_TOKEN_VALUE_TYPES[0]:
          value = `${x}px ${y}px ${blur}px ${spread}px ${color}`.trim();
          break;

        case Elevation.CONSTANTS.TARGET_TOKEN_VALUE_TYPES[1]:
          value = `drop-shadow(${x}px ${y}px ${blur}px ${color})`.trim();
          break;

        default:
          value = token.value;
      }

      return value;
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
      type: this.type,
      transitive: this.transitive,
      matcher: this.matcher,
      transformer: this.transformer,
    };
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Elevation;
