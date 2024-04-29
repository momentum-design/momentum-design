import CONSTANTS from './constants';

export type Command = typeof CONSTANTS.COMMANDS[keyof typeof CONSTANTS.COMMANDS];

export type Options = typeof CONSTANTS.OPTIONS;

export interface Config {
  command: Command;
}
