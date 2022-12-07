import Component from './models/component';
import { CONSTANTS } from './constants';

type TERM = keyof typeof CONSTANTS.REPLACE_TERMS;
/* eslint-disable no-undef */
export type Components = Array<Component>;
export type MapPagesToFolder = Array<{
  page: string;
  folder: string;
}>;

export type Config = {
  mapPagesToFolder: MapPagesToFolder;
  fileName: {
    parts: Array<TERM>,
    separator: string
    suffix: {
      part: TERM,
      separator: string,
    }
  },
  exclude: {
    byVariant: string,
  },
  exportSettings: ExportSettings;
};

export type Asset = {
  path: string;
  data: string;
};
