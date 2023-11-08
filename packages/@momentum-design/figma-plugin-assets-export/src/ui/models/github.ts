/* eslint-disable no-await-in-loop */
/* eslint-disable no-restricted-syntax */
/* eslint-disable implicit-arrow-linebreak */
/* eslint-disable indent */
/* eslint-disable no-param-reassign */
import { Octokit } from '@octokit/core';
import { createPullRequest } from 'octokit-plugin-create-pull-request';
import { DEFAULTS } from '../../shared/export-constants';

import type { Asset, AssetChunks, GitSetting, InputSetting, Mode } from '../../shared/types';

const MyOctokit = Octokit.plugin(createPullRequest);

type Config = {
  git: GitSetting;
  mode?: Mode;
  input?: InputSetting;
};

type ChangedFiles = Array<string>;

type ChangesChunks = Array<{
  files: {
    [key: string]: any;
  };
  commit: string;
}>;

class Github {
  config: Config = {
    git: {
      githubPersonalToken: '',
      githubOwner: '',
      gitRepo: '',
      gitBranch: `automation-${new Date().toISOString().replace(/\.|:/g, '-')}`,
      prTitle: `Asset Automation ${new Date().toISOString()}`,
      prCommitMsg: `feat(assets): Asset Automation ${new Date().toISOString()}`,
      prMessage: `feat(assets): Asset Automation ${new Date().toISOString()}`,
      gitRepoFilePath: '',
    },
    mode: 'ADD',
  };

  octokit: any;

  constructor(config: GitSetting, mode?: Mode, inputConfig?: InputSetting) {
    this.config = { git: config, input: inputConfig, mode };
    this.octokit = new MyOctokit({
      auth: this.config.git.githubPersonalToken,
    });
  }

  private configErrors(): string | undefined {
    if (!this.config.git.githubOwner || !this.config.git.gitRepo || !this.config.git.githubPersonalToken) {
      return 'Github configuration is not valid!';
    }

    if (
      !this.config.git.githubPersonalToken
      || this.config.git.githubPersonalToken.includes('<')
      || this.config.git.githubPersonalToken.includes('<')
    ) {
      return 'Personal access token is not valid';
    }

    return undefined;
  }

  /**
   * Get data from github using contents api
   */
  private async getData(octokit: any, path: string) {
    return octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: this.config.git.githubOwner,
      repo: this.config.git.gitRepo,
      path,
    });
  }

  /**
   * Get data from github using tree api
   */
  private async getDataTree(octokit: any, sha: string) {
    return octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
      owner: this.config.git.githubOwner,
      repo: this.config.git.gitRepo,
      tree_sha: sha,
    });
  }

  /**
   * Get all file paths from github
   * @param octokit
   * @returns
   */
  private async getAllFilePaths(octokit: any): Promise<Array<string>> {
    const { data } = await this.getData(octokit, this.config.git.gitRepoFilePath);

    // get the all files list only from specified folders in the plugin config
    // this means if there are folder changes, like a folder is not used anymore,
    // it has to be maintained manually on the repo (like deleting the folder has to be done manually)
    const folders = this.config.input?.mapPagesToFolder.map((pages) => pages.folder);
    const pathInformationOfFolders: Array<{ sha: string; path: string }> | undefined = folders?.map((folderName) => {
      const folder = (data as Array<any>).find((subfolder) => subfolder.name === folderName);
      if (!folder) {
        return { sha: '', path: '' };
      }
      return { sha: folder.sha, path: folder.path };
    });

    if (!pathInformationOfFolders) {
      return [];
    }

    const filePaths: Array<string> = [];

    // get all files from the folders using the tree api (because contents api does not return more than 1000 files)
    const promises = pathInformationOfFolders.map(async ({ sha, path: folderPath }) => {
      if (sha && folderPath) {
        return this.getDataTree(octokit, sha).then(({ data }) => {
          filePaths.push(data.tree.map((file: any) => [folderPath, file.path].join('/')));
          return data;
        });
      }
      return new Promise<void>((resolve) => { resolve(); });
    });

    await Promise.all(promises);

    return filePaths.flat();
  }

  private calculateChangesChunks(data: AssetChunks): ChangesChunks {
    return data?.map((assets, index) => ({
      files: assets.reduce((accum: { [key: string]: string }, cur: Asset) => {
        accum[[this.config.git.gitRepoFilePath, cur.path].join('/')] = cur.data;
        return accum;
      }, {}),
      commit: `${this.config.git.prCommitMsg}-chunk${index}`,
    }));
  }

  private calculateChangedFiles(data: AssetChunks): ChangedFiles {
    return data?.reduce((accum: Array<string>, cur: Array<Asset>) => {
      cur.forEach((asset) => {
        accum.push([this.config.git.gitRepoFilePath, asset.path].join('/'));
      });
      return accum;
    }, []);
  }

  private generateChunksOfFilesWhichShouldBeDeleted(
    allExistingFiles: Array<string>,
    changedFiles: ChangedFiles,
    existingChunksLength: number,
  ) {
    const chunksOfFilesToBeDeleted: Array<Array<string>> = [];
    const filesToBeDeleted: Array<string> = [];
    // get all files which should be deleted
    allExistingFiles.forEach((file) => {
      if (!changedFiles?.includes(file)) {
        filesToBeDeleted.push(file);
      }
    });

    // split the files into chunks
    for (let i = 0; i < filesToBeDeleted.length; i += DEFAULTS.CHUNK_SIZE) {
      chunksOfFilesToBeDeleted.push(filesToBeDeleted.slice(i, i + DEFAULTS.CHUNK_SIZE));
    }

    return chunksOfFilesToBeDeleted?.map((assets, index) => ({
      files: assets.reduce((accum: { [key: string]: null }, cur: string) => {
        accum[cur] = null;
        return accum;
      }, {}),
      commit: `${this.config.git.prCommitMsg}-delete-chunk${existingChunksLength + index}`,
    }));
  }

  private async filterChangesChunks(changesChunks: ChangesChunks, existingFiles: Array<string>) {
    const filteredChangesChunks: ChangesChunks = [];
    for (const chunk of changesChunks) {
      const filteredFiles: { [key: string]: string } = {};

      for (const [path, contentOfChangedFile] of Object.entries(chunk.files)) {
        if (existingFiles.includes(path)) {
          const { data } = await this.getData(this.octokit, path);
          // use atob, since it is running in the browser
          const contentOfExistingFile = atob(data.content);
          if (contentOfChangedFile !== contentOfExistingFile) {
            filteredFiles[path] = contentOfChangedFile;
          }
        } else {
          filteredFiles[path] = contentOfChangedFile;
        }
      }
      if (Object.keys(filteredFiles).length) {
        filteredChangesChunks.push({
          files: filteredFiles,
          commit: chunk.commit,
        });
      }
    }

    return filteredChangesChunks;
  }

  public async generateChanges(data: AssetChunks | undefined) {
    const configErrors = this.configErrors();

    if (configErrors) {
      return Promise.reject(configErrors);
    }

    if (!data) {
      return Promise.reject(new Error('No changes found!'));
    }

    const allChangedFiles = this.calculateChangedFiles(data);
    const allExistingFiles = await this.getAllFilePaths(this.octokit);

    const changesChunks = this.calculateChangesChunks(data);
    // const filteredChangesChunks = await this.filterChangesChunks(changesChunks, allExistingFiles);

    const chunksLength = changesChunks?.length;

    const chunksOfFilesToBeDeleted = this.generateChunksOfFilesWhichShouldBeDeleted(
      allExistingFiles,
      allChangedFiles,
      chunksLength,
    );

    const cummulatedChanges = [...changesChunks, ...chunksOfFilesToBeDeleted];

    if (!changesChunks.length && !chunksOfFilesToBeDeleted.length) {
      return Promise.reject(new Error('No changes found!'));
    }

    switch (this.config.mode) {
      case 'ADD':
        return changesChunks;
      case 'DELETE_ONLY':
        return chunksOfFilesToBeDeleted;
      case 'FULL_SYNC':
        return cummulatedChanges;

      default:
        return changesChunks;
    }
  }

  public async pullRequest(changes: ChangesChunks) {
    return this.octokit.createPullRequest({
      owner: this.config.git.githubOwner,
      repo: this.config.git.gitRepo,
      title: this.config.git.prTitle,
      body: this.config.git.prMessage,
      forceFork: true,
      createWhenEmpty: false,
      head: this.config.git.gitBranch,
      changes: changes || [],
    });
  }
}

export default Github;
