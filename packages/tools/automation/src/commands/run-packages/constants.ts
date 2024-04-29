import { Command } from '../../models';
import type { CommandOptions } from '../../models';
import GetPackages from '../get-packages';

const OPTIONS: CommandOptions = {
  ...GetPackages.CONSTANTS.OPTIONS,
  script: {
    demandOption: true,
    describe: 'script to run on the processed packages',
    type: 'string',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  OPTIONS,
};

export default CONSTANTS;
