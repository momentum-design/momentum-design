import { GetPackagesConfig } from '../get-packages';

import CONSTANTS from './constants';

export type Options = typeof CONSTANTS.OPTIONS;

export interface Config extends GetPackagesConfig {
  script: string;
}
