import { Command } from '@momentum-design/common';

import { Builders } from '../../models';
import { TokensBuilder } from '../../tokens';

import CONSTANTS from './constants';
import type { Options, Params } from './types';

/**
 * The Definition command class to be used to generate deliverable assets to
 * down-stream consumers of this package
 *
 * @beta
 */
class Definition extends Command<Options, Params> {
  /**
   * Construct a new Definition command executor.
   */
  public constructor() {
    super(Definition.CONSTANTS.OPTIONS);
  }

  /**
   * Prepare processed results into an emitable string.
   *
   * @remarks
   * This method prepends a header to its output. Additionally, the data
   * provided to this method is iterated over to output a multi-line string to
   * denote which Builder class Objects were executed.
   *
   * @param results - Processed Builders class Object collect data from.
   * @returns - Promise resolving to a string to be emitted.
   */
  public prepare(results: Builders): Promise<string> {
    const { builders } = results;

    const output = builders.map((builder) => `executed "${builder.type}" builder`);
    return Promise.resolve([
      Definition.CONSTANTS.HEADER,
      ...output,
    ].join('\n'));
  }

  /**
   * Generate data based on the provided CLI arguments.
   *
   * @remarks
   * This method mounts a default list of Builder class constructors for usage
   * while generating deliverable assets. If this package is being consumed
   * outside of the scope of this project, the **module** deliverable should be
   * used to mount custom Builder class constructors.
   *
   * @returns - Promise resolving in a Builders class Object.
   */
  public process(): Promise<Builders> {
    const { config } = this.params;
    const builder = new Builders({
      definitionPath: config,
      builders: [
        TokensBuilder,
      ],
    });

    return builder.build();
  }

  /**
   * Constants associated with this Definition command class.
   */
  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }
}

export default Definition;
