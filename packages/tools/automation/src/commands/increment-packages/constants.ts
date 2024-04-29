import { Command } from '../../models';
import type { CommandOptions } from '../../models';
import GetPackages from '../get-packages';

const OPTIONS: CommandOptions = {
  ...GetPackages.CONSTANTS.OPTIONS,
  step: {
    default: [0, 0, 1],
    describe: 'values to increment the version of the filtered packages by: [major, minor, patch]',
    type: 'array',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  OPTIONS,
};

export default CONSTANTS;
