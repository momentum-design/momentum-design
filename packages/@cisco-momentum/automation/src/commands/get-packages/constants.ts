import { Command } from '../../models';
import type { CommandOptions } from '../../models';

const OPTIONS: CommandOptions = {
  changed: {
    alias: 'c',
    describe: 'filter for changed packages using the provided git ref',
    type: 'string',
  },
  'commit-index': {
    alias: 'ci',
    default: 1,
    describe: 'target commit index to use when changed is provided without a value',
    type: 'number',
  },
  dependent: {
    alias: 'd',
    describe: 'filter for dependent packages',
    type: 'boolean',
  },
  packages: {
    alias: 'p',
    describe: 'list of limited packages to process',
    type: 'array',
  },
  packagesPath: {
    alias: 'path',
    default: './packages',
    describe: 'path to the packages to process',
    type: 'string',
  },
  scope: {
    alias: 's',
    default: '@cisco-momentum',
    describe: 'scope of the packages to retreive',
    type: 'string',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  OPTIONS,
};

export default CONSTANTS;
