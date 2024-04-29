import { Command } from '@momentum-design/common';
import type { CommandOptions } from '@momentum-design/common';

/**
 * Allowed command arguments for the Main command class.
 *
 * @remarks
 * For each builder that can be executed via CLI, their cli name must be added
 * to this list to allow for its execution.
 */
const COMMANDS: Record<string, string> = {
  DEFINITION: 'definition',
};

/**
 * Command options and specification for the Main command class.
 *
 * @remarks
 * This Object is dynamically generated from the `COMMANDS` constant. This means
 * that no changes to this constant should be necessary for future additions.
 */
const OPTIONS: CommandOptions = Object.values(COMMANDS)
  .reduce((results, command) => ({
    ...results,
    [command]: {
      describe: `command to build ${command}`,
      type: 'boolean',
    },
  }), {});

const CONSTANTS = {
  ...Command.CONSTANTS,
  COMMANDS,
  OPTIONS,
};

export default CONSTANTS;
