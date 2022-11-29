import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';

import CONSTANTS from './constants';

class JsonMinimal {
  public get formatter(): SDFormatter {
    return ({ dictionary }): string => {
      const mutable = {};

      dictionary.allTokens.forEach((token) => {
        let current: Record<string, any>;

        token.path.forEach((path, index) => {
          if (!current) {
            current = mutable;
          }

          current[path] = current[path] || {};

          if (index === token.path.length - 1) {
            current[path] = token.value;
          }

          current = current[path];
        });
      });

      return JSON.stringify(mutable, null, 2);
    };
  }

  public get name(): string {
    return JsonMinimal.CONSTANTS.NAME;
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

export default JsonMinimal;
