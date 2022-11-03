import path from 'path';
import type { Platform as SDPlatform } from 'style-dictionary';

import { CONSTANTS, Format } from '../../common';
import File from '../file';

import type { Config } from './types';

class Platform {
  protected config: Config;

  public constructor(config: Config) {
    this.config = structuredClone(config);
  }

  public get file(): File {
    return new File({
      destination: this.config.file.destination,
      filters: this.config.file.filters,
      format: this.format,
    });
  }

  public get format(): Format {
    return this.config.format;
  }

  public get group(): string {
    return CONSTANTS.FORMATS[this.config.format].GROUP;
  }

  public get output(): string {
    return path.join(this.config.output, this.group, '/');
  }

  public get prefix(): string | undefined {
    return this.config.prefix;
  }

  public get sdConfig(): SDPlatform {
    return {
      prefix: this.prefix,
      transformGroup: this.group,
      buildPath: this.output,
      files: [this.file.sdConfig],
    };
  }
}

export default Platform;
