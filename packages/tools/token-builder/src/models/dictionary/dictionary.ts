import path from 'path';
import { Config as SDConfig } from 'style-dictionary';

import Platform from '../platform';

import { CONSTANTS, Format } from '../../common';
import type { Config } from './types';

class Dictionary {
  protected config: Config;

  public constructor(config: Config) {
    this.config = structuredClone(config);
  }

  public get formats(): Array<Format> {
    return this.config.formats;
  }

  public get input(): string {
    return this.config.input;
  }

  public get output(): string {
    return this.config.output;
  }

  public get platforms(): Record<string, Platform> {
    return this.formats.reduce((platforms: Record<string, Platform>, format) => ({
      ...platforms,
      [CONSTANTS.FORMATS[format].NAME]: new Platform({
        file: this.config.file,
        format,
        output: this.output,
        prefix: this.prefix,
        transforms: CONSTANTS.FORMATS[format].TRANSFORMS,
      }),
    }), {});
  }

  public get prefix(): string | undefined {
    return this.config.prefix;
  }

  public get sdConfig(): SDConfig {
    return {
      source: this.targets,
      platforms: Object.entries(this.platforms).reduce((platforms, [key, value]) => ({
        ...platforms,
        [key]: value.sdConfig,
      }), {}),
    };
  }

  public get targets(): Array<string> {
    return this.config.file.targets.map((target) => path.join(this.input, target));
  }
}

export default Dictionary;
