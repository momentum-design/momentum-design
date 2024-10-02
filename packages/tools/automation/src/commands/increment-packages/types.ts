import { GetPackagesConfig } from '../get-packages';

import CONSTANTS from './constants';

export type Options = typeof CONSTANTS.OPTIONS;

export interface Config extends GetPackagesConfig {
  dryRun: boolean;
  minor: Array<number>;
  patch: Array<number>;
  target: number;
}
