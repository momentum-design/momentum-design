import yargs from 'yargs';

import CONSTANTS from './constants';
import type { Config, Options } from './types';

abstract class Command {
  public static execute(): Promise<string> {
    throw new Error('"execute()" is not implemented');
  }

  public static clean<C extends Config, O extends Options>(results: C, options: O): C {
    return Object.keys(options).reduce((clean, key) => ({
      ...clean,
      [key]: results[key],
    }), {} as C);
  }

  public static collect<O extends Options>(options: O): Record<string, any> {
    const offset = Command.CONSTANTS.COMMANDS_INDEX_OFFSET;
    const separator = Command.CONSTANTS.COMMANDS_SEPARATOR;
    const { argv } = process;
    const commandsStartIndex = argv.indexOf(separator) + offset;

    if (commandsStartIndex === 0) {
      throw new Error(`commands must be specified after "${separator}"`);
    }

    return yargs(process.argv.slice(commandsStartIndex))
      .options(options)
      .parseSync() as Record<string, any>;
  }

  public static parse<C extends Config, O extends Options>(options: O): C {
    const results = Command.collect<O>(options);

    return Command.clean<C, O>(results as C, options);
  }

  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Command;
