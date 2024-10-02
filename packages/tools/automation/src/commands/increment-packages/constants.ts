import { Command } from '../../models';
import type { CommandOptions } from '../../models';
import GetPackages from '../get-packages';

const OPTIONS: CommandOptions = {
  ...GetPackages.CONSTANTS.OPTIONS,
  dryRun: {
    describe: 'dry run mode, does not write changes to disk or sends requests to NPM, other services',
    type: 'boolean',
  },
  patch: {
    default: [0, 0, 1],
    describe: 'values to increment the version of the filtered packages by patch: [major, minor, patch]',
    type: 'array',
  },
  minor: {
    default: [0, 1, 0],
    describe: 'values to increment the version of the filtered packages by minor: [major, minor, patch]',
    type: 'array',
  },

};

const CONSTANTS = {
  ...Command.CONSTANTS,
  OPTIONS,
};

export default CONSTANTS;
