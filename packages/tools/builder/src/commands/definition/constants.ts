import { Command } from '@momentum-design/common';
import type { CommandOptions } from '@momentum-design/common';

/**
 * Output header to be prepended to the results of the `prepare` method of a
 * Definition class Object.
 */
const HEADER: string = 'commands/definition';

/**
 * Command options and sxpecification for the Definition command class.
 *
 * @remarks
 * All additional details that can be provided to this executor should be stored
 * within the target `config` file provided as a CLI argument.
 */
const OPTIONS: CommandOptions = {
  config: {
    demandOption: true,
    describe: 'path to the definition config json file',
    type: 'string',
  },
};

const CONSTANTS = {
  ...Command.CONSTANTS,
  HEADER,
  OPTIONS,
};

export default CONSTANTS;
