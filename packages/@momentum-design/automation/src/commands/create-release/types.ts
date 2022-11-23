import { GetPackagesConfig } from '../get-packages';

import CONSTANTS from './constants';

export type Options = typeof CONSTANTS.OPTIONS;

// TODO: extend targets
export interface Config extends GetPackagesConfig {
  targets: Array<string>;
  since: string;
}
