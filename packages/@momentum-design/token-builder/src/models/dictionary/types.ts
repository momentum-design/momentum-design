import type { ConfigFile, Format } from '../../common';

export interface Config {
  file: ConfigFile
  formats: Array<Format>
  input: string;
  output: string;
  prefix: string;
}
