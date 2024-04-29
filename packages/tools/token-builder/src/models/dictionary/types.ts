import type { ConfigFile, Format, Transform } from '../../common';

export interface Config {
  file: ConfigFile
  formats: Array<Format>
  input: string;
  output: string;
  prefix: string;
  transforms?: Array<Transform>;
}
