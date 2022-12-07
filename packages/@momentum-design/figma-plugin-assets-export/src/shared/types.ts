export type Asset = {
  path: string;
  data: string;
};

export type AssetChunks = Array<Array<Asset>>;

export type GithubSync = {
  githubOwner: string;
  githubPersonalToken: string;
  gitBranch: string;
  gitRepo: string;
  prTitle: string;
  prMessage: string;
  gitRepoFilePath: string;
  prCommitMsg: string;
  assetTypePath?: string;
};
