import { Command } from '../../models';
import type { CommandOptions } from '../../models';
import GetPackages from '../get-packages';

const OPTIONS: CommandOptions = {
  ...GetPackages.CONSTANTS.OPTIONS,
  targets: {
    default: ['@momentum-design/tokens'],
    describe: 'Array of package name strings (fully qualified) to send telemetry for',
    type: 'array',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  OPTIONS,
};

export default CONSTANTS;
