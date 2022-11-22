import CONSTANTS from './constants';

/**
 * Command CLI argument options to be parsed for the Definition command class.
 */
export type Options = typeof CONSTANTS.OPTIONS;

/**
 * Expected Options Object derived from the provided CLI arguments for the
 * Definition command class.
 */
export type Params = {
  config: string;
};
