import { GetPackagesConfig } from '../get-packages';

import CONSTANTS from './constants';

export type Options = typeof CONSTANTS.OPTIONS;

export interface Config extends GetPackagesConfig {
  targets: Array<string>;
  since: string;
<<<<<<< HEAD
  history: number;
=======
>>>>>>> 522dc7e0f44852d7662e064732cfe0c0f62a0e15
}
