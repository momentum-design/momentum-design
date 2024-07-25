import { Config as ExternalConfig } from '../../common';

export interface Config {
  config: ExternalConfig | string;
  input: string;
  output: string;
}
