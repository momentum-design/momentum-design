import fs from 'fs/promises';
import StyleDictionary from 'style-dictionary';

import { CONSTANTS, Config as ExternalConfig } from '../../common';
import Dictionary from '../dictionary';

import type { Config } from './types';

class TokenBuilder {
  protected config: Config;

  public constructor(config: Config) {
    this.config = typeof config === 'string' ? config : structuredClone(config);
  }

  public build(): Promise<this> {
    return this.initialize()
      .then(() => {
        const configObj = this.config.config as ExternalConfig;
        const { input, output } = this.config;
        const dictionaries = configObj.files.map((file) => new Dictionary({
          file,
          formats: [...configObj.formats],
          input,
          output,
          prefix: configObj.prefix,
        }));

        const sdDictionaries = dictionaries.map((dictionary) => StyleDictionary.extend(dictionary.sdConfig));

        sdDictionaries.forEach((sdDictionary) => sdDictionary.buildAllPlatforms());

        return this;
      });
  }

  public initialize(): Promise<this> {
    if (typeof this.config.config === 'object') {
      return Promise.resolve(this);
    }

    return fs.readFile(this.config.config as string)
      .then((buffer: Buffer) => buffer.toString(CONSTANTS.FILE_ENCODING))
      .then((data: string) => JSON.parse(data))
      .then((json: ExternalConfig) => {
        this.config.config = json;

        return this;
      })
      .catch(() => {
        throw new Error(`TokenBuilder.initialize() - unable to read and parse data from "${this.config.config}"`);
      });
  }

  public static build(config: Config): Promise<TokenBuilder> {
    const tokenBuilder = new TokenBuilder(config);

    return tokenBuilder.build();
  }
}

export default TokenBuilder;
