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
      });
  }

  public static build(config: Config): Promise<void> {
    const tokenBuilder = new TokenBuilder(config);

    return tokenBuilder.build()
      .then(() => undefined);
  }
}

export default TokenBuilder;
