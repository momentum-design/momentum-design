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
  gitDistPath?: string;
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

export type AssetSetting = {
  name: string;
  description?: Description;
  input: {
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
      };
      // @ts-ignore: next-line
      exportSettings: ExportSettings;
    };
  };
  output: {
    git: GitSetting;
  };
};

export type Settings = {
  assets: {
    [key: string]: AssetSetting;
  };
};
