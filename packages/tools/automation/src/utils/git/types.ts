import CONSTANTS from './constants';

export type ListItem = typeof CONSTANTS.FORMAT;

export interface Changes {
  added: number;
  removed: number;
  file: string;
}

export interface ChangeDetails {
  label: string;
  changes: Changes[];
}

export type CalculatedChanges = Pick<Changes, 'added' | 'removed'> & {changed: number};
