import type { ConfigFile, Format, Transform } from '../../common';

export interface Config {
  file: ConfigFile;
  format: Format;
  output: string;
  prefix?: string;
  transforms?: Array<Transform>;
}
