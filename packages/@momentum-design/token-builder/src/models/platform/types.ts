import type { ConfigFile, Format } from '../../common';

export interface Config {
  file: ConfigFile;
  format: Format;
  output: string;
  prefix?: string;
}
