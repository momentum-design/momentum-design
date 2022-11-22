import CONSTANTS from './constants';

/**
 * Allowed command arguments for the Main command class.
 */
export type Command = typeof CONSTANTS.COMMANDS[keyof typeof CONSTANTS.COMMANDS];

/**
 * Command CLI argument options to be parsed for the Main command class.
 */
export type Options = typeof CONSTANTS.OPTIONS;

/**
 * Expected Options Object derived from the provided CLI arguments for the Main
 * command class.
 */
export type Params = Record<Command, boolean>;
