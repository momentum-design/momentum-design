// AI-Assisted
/**
 * CLI Options Module
 *
 * Provides helpers for reading global CLI options from Commander commands.
 *
 * @module cli/options
 */

import { Command } from 'commander';

import type { GlobalCliOptions } from './types';

/** Commander Command instance type. */
type CommandInstance = InstanceType<typeof Command>;

/**
 * Retrieves global options for a command, falling back to parent options.
 *
 * This function handles option inheritance from parent commands, allowing
 * global options to be specified at any level of the command hierarchy.
 *
 * @param command - The Command instance to retrieve options from.
 * @returns The resolved global CLI options.
 */
export function getGlobalOptions(command?: CommandInstance): GlobalCliOptions {
  const localOptions = command?.opts?.() ?? {};
  const parentOptions = command?.parent?.opts?.() ?? {};

  /**
   * Reads a single option, preferring local values over parent values.
   *
   * @param key - The option key to resolve.
   * @returns The resolved option value.
   */
  const pickOption = (key: keyof GlobalCliOptions): boolean | undefined => {
    if (localOptions[key] !== undefined) {
      return Boolean(localOptions[key]);
    }
    return parentOptions[key] === undefined ? undefined : Boolean(parentOptions[key]);
  };

  return {
    verbose: pickOption('verbose') ?? false,
    quiet: pickOption('quiet') ?? false,
    dryRun: pickOption('dryRun') ?? false,
  };
}
// End AI-Assisted
