import { Format as SDFormat, Formatter as SDFormatter } from 'style-dictionary';
import Handlebars from 'handlebars';
import fs from 'fs';
import path from 'path';
import HandlebarsHelpers from './handlebars-helpers';
import CONSTANTS from './constants';

const template = (filePath: string) => Handlebars.compile(
  fs.readFileSync(path.resolve(__dirname, '../../../../', filePath), { encoding: 'utf8' }),
);

class IOSWebex {
  iosWebexPath: string;

  constructor(iosWebexPath?: string) {
    if (!iosWebexPath) {
      throw new Error('ios webex path not found!');
    }
    this.iosWebexPath = iosWebexPath;

    HandlebarsHelpers.register();
  }

  public get formatter(): SDFormatter {
    return ({ dictionary, file }): string => template(this.iosWebexPath!)({
      tokens: dictionary.allTokens,
      destination: file.destination,
    });
  }

  public get name(): string {
    return IOSWebex.CONSTANTS.NAME;
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

export default IOSWebex;
