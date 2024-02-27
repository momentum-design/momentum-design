/* eslint-disable no-undef */
import { CONSTANTS } from '../plugin/constants';

export type TERM = keyof typeof CONSTANTS.REPLACE_TERMS;

export type Asset = {
  path: string;
  data: string;
};

export type AssetChunks = Array<Array<Asset>>;

export type GitSetting = {
  githubPersonalToken: string;
  githubOwner: string;
  gitRepo: string;
  gitBranch: string;
  prTitle: string;
  prCommitMsg: string;
  prMessage: string;
  gitRepoFilePath: string;
};

export type MapPagesToFolder = Array<{
  page: string;
  folder: string;
}>;

export type Description = {
  name: string;
  url: string;
  urlText: string;
};

export type Mode = 'ADD' | 'DELETE_ONLY' | 'FULL_SYNC';

// copied from @figma/plugin-typings, since its not exported
interface ExportSettingsSVG {
  readonly format: 'SVG';
  readonly contentsOnly?: boolean; // defaults to true
  readonly useAbsoluteBounds?: boolean; // defaults to false
  readonly suffix?: string;
  readonly svgOutlineText?: boolean; // defaults to true
  readonly svgIdAttribute?: boolean; // defaults to false
  readonly svgSimplifyStroke?: boolean; // defaults to true
}

export type InputSetting = {
  mapPagesToFolder: MapPagesToFolder;
  exclude?: {
    byVariant: string;
  };
  asset: {
    fileName: {
      parts: Array<TERM>;
      separator: string;
      suffix: {
        parts: Array<TERM>;
        separator: string;
      };
      replaceNumbers?: boolean;
      replaceDots?: boolean;
    };
    exportSettings: ExportSettingsSVG;
  };
};

export type AssetSetting = {
  name: string;
  mode?: Mode;
  description?: Description;
  input: InputSetting;
  output: {
    git: Omit<GitSetting, 'githubPersonalToken'>;
  };
};

export type ExportAuth = {
  githubPersonalToken: string;
};

export type Settings = {
  auth: ExportAuth;
  assets: {
    [key: string]: AssetSetting;
  };
};
