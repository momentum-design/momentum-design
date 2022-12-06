import { CONSTANTS } from './constants';
import Component from './models/component';

/* eslint-disable no-undef */
export type Components = Array<Component>;
export type MapPagesToFolder = Array<{
  page: string;
  folder: string;
}>;

export type Config = {
  mapPagesToFolder: MapPagesToFolder;
  fileName: {
    parts: Array<keyof typeof CONSTANTS.REPLACE_TERMS>,
    separator: string,
  };
  exportSettings: ExportSettings;
};

export type Asset = {
  path: string;
  data: string;
};
