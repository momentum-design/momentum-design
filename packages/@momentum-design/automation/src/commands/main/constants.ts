import { Command } from '../../models';

import type { CommandOptions } from '../../models';

const COMMANDS: Record<string, string> = {
  GET_PACKAGES: 'get-packages',
  INCREMENT_PACKAGES: 'increment-packages',
  RUN_PACKAGES: 'run-packages',
};

const OPTIONS: CommandOptions = {
  command: {
    choices: Object.values(COMMANDS),
    describe: 'command to execute within this package',
    demandOption: true,
    type: 'string',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  COMMANDS,
  OPTIONS,
};

export default CONSTANTS;
