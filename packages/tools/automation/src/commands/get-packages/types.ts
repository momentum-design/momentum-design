import CONSTANTS from './constants';

export type Options = typeof CONSTANTS.OPTIONS;

export interface Config {
  changed?: string;
  ['commit-index']: number;
  dependent?: boolean;
  ['dist-only']?: boolean;
  packages?: Array<string>;
  packagesPath: string;
  scope: string;
}
