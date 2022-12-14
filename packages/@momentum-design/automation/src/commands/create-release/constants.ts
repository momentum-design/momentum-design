import { Command } from '../../models';
import type { CommandOptions } from '../../models';
import GetPackages from '../get-packages';

const OPTIONS: CommandOptions = {
  ...GetPackages.CONSTANTS.OPTIONS,
  targets: {
    default: ['@momentum-design/tokens', '@momentum-design/icons', '@momentum-design/illustrations'],
    describe: 'Array of package name strings (fully qualified) to send telemetry for',
    type: 'array',
  },
  since: {
    default: 'upstream/main',
    describe: 'The command passed to workspaces list, to compare list',
    type: 'string',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  OPTIONS,
};

export default CONSTANTS;
