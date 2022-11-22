import yargs from 'yargs';

import CONSTANTS from './constants';
import type { Options, Params } from './types';

/**
 * The Abstract Command class to be extended by scoped Command classes.
 *
 * @beta
 */
abstract class Command<O extends Options, P extends Params> {
  /**
   * Options to use when parsing the provided CLI command
   */
  public options: O;

  /**
   * Params generated in reflection of the provided options and the CLI command.
   */
  public params: Params;

  /**
   * Construct a new Command.
   *
   * @param options - Command options to process against the CLI command.
   */
  public constructor(options: O) {
    this.options = structuredClone(options);
    this.params = this.collect();

    this.clean();
  }

  /**
   * Prepare the processed results for emiting as a string.
   *
   * @remarks
   * This method should be implemented in class definitions that extend this
   * class. The scope of this method is to perform a transform on the provided
   * results into a string. Since this can require async operation, the
   * override method must return a Promise for API consistency.
   *
   * @param results - Processed results.
   */
  public abstract prepare(results: any): Promise<string>;

  /**
   * Process the Command params into a new object for transport.
   *
   * @remarks
   * This method should be implemented in class definitions that extend this
   * class. The scope of this method is to process params interpreted from the
   * provided CLI execution. This can return any data transfer Object, as the
   * return is intended to be used within `Command.prepare()`. Since this can
   * require async operation, the override method must return a Promise for API
   * consistency.
   */
  public abstract process(): Promise<any>;

  /**
   * Clean the params mounted to this Command.
   *
   * @remarks
   * This method removes all values that don't match the provided options
   * parameter when constructing a new Command.
   *
   * @returns - This Command.
   */
  protected clean(): this {
    this.params = Object.keys(this.options).reduce((clean, key) => ({
      ...clean,
      [key]: this.params[key],
    }), {} as P);

    return this;
  }

  /**
   * Collect all CLI arguments as parameters.
   *
   * @remarks
   * When providing a CLI execution string to a Command, the arguments must be
   * seperated from the rest of the CLI execution command via the appropriate
   * separator string, wrapped in one empty space on each side.
   *
   * @returns - A Record of parameters provided via the CLI execution.
   */
  protected collect(): Params {
    const offset = Command.CONSTANTS.COMMANDS_INDEX_OFFSET;
    const separator = Command.CONSTANTS.COMMANDS_SEPARATOR;
    const { argv } = process;
    const hasArgs = argv.includes(`${separator}`);

    if (!hasArgs) {
      return {};
    }

    const argsStartIndex = argv.indexOf(separator) + offset;

    return yargs(process.argv.slice(argsStartIndex))
      .options(this.options)
      .parseSync() as Record<string, any>;
  }

  /**
   * Constants associated with this Command.
   */
  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Command;
