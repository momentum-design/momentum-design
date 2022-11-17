import CONSTANTS from './constants';

export type Format = keyof typeof CONSTANTS.FORMATS;

export type Transform = keyof typeof CONSTANTS.TRANSFORMS;

export type Filter = Array<string>;

export interface Filters {
  categories?: Filter;
  items?: Filter;
  types?: Filter;
}

export interface ConfigFile {
  destination: string;
  filters?: Filters;
  name?: string;
  references?: boolean;
  targets: Array<string>;
}

export interface Config {
  files: Array<ConfigFile>;
  formats: Array<Format>;
  prefix: string;
  transforms?: Array<Transform>;
}
