/* eslint-disable no-param-reassign */
import { Octokit } from '@octokit/core';
import { createPullRequest } from 'octokit-plugin-create-pull-request';
import type { Options } from 'octokit-plugin-create-pull-request/dist-types/types';
import { DEFAULTS } from '../../shared/export-constants';

import type { Asset, AssetChunks, GitSetting, InputSetting, Mode } from '../../shared/types';

// initialize octokit with createPullRequest plugin
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
      prLabels: '',
    },
    mode: 'ADD',
  };

  octokit: Octokit & {
    createPullRequest: (args_0: Options) => Promise<any>;
  };

  constructor(config: GitSetting, mode?: Mode, inputConfig?: InputSetting) {
    this.config = { git: config, input: inputConfig, mode };
    this.octokit = new MyOctokit({
      auth: this.config.git.githubPersonalToken,
    });
  }

  /**
   * Validation of the config
   * @returns error message if config is not valid
   */
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
  private async getData(path: string) {
    return this.octokit.request('GET /repos/{owner}/{repo}/contents/{path}', {
      owner: this.config.git.githubOwner,
      repo: this.config.git.gitRepo,
      path,
    });
  }

  /**
   * Get data from github using tree api
   */
  private async getDataTree(sha: string) {
    return this.octokit.request('GET /repos/{owner}/{repo}/git/trees/{tree_sha}', {
      owner: this.config.git.githubOwner,
      repo: this.config.git.gitRepo,
      tree_sha: sha,
    });
  }

  /**
   * Get all file paths from github
   *
   * This is necessary to get all files from the folders to calculate files to be deleted later.
   * Using the tree api (because contents api does not return more than 1000 files).
   *
   * @returns array of file paths
   */
  private async getAllFilePaths(): Promise<Array<string>> {
    const { data } = await this.getData(this.config.git.gitRepoFilePath);

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
        return this.getDataTree(sha).then(({ data }) => {
          filePaths.push(...data.tree.map((file: any) => [folderPath, file.path].join('/')));
          return data;
        });
      }
      return new Promise<void>((resolve) => {
        resolve();
      });
    });

    await Promise.all(promises);

    return filePaths.flat();
  }

  /**
   * Calculate the github changes chunks based on the figma asset chunks
   *
   * Github changes chunks are supposed to be in the format:
   * ```
   * [
   *   {
   *     files: [...]
   *     commit: 'commitMsg-chunk0'
   *   },
   *   ...
   * ]
   * ```
   * @param data - asset chunks (Nested array of Assets)
   * @returns github changes chunks (right format to pass to octokit)
   */
  private calculateChangesChunks(data: AssetChunks): ChangesChunks {
    return data?.map((assets, index) => ({
      files: assets.reduce((accum: { [key: string]: any }, cur: Asset) => {
        if (cur.path.match(/\.(png)$/i)) {
          accum[[this.config.git.gitRepoFilePath, cur.path].join('/')] = {
            content: cur.data,
            encoding: 'base64',
          };
        } else {
          accum[[this.config.git.gitRepoFilePath, cur.path].join('/')] = cur.data;
        }
        return accum;
      }, {}),
      commit: `${this.config.git.prCommitMsg}-chunk${index}`,
    }));
  }

  /**
   * Returns an array of paths of files which are changed,
   * based on the passed in chunks `data`
   * @param data - asset chunks
   * @returns array of paths of files which are changed
   */
  private calculateChangedFiles(data: AssetChunks): ChangedFiles {
    return data?.reduce((accum: Array<string>, cur: Array<Asset>) => {
      cur.forEach((asset) => {
        accum.push([this.config.git.gitRepoFilePath, asset.path].join('/'));
      });
      return accum;
    }, []);
  }

  /**
   * Generate github chunks of files which should be deleted
   *
   * If changedFile (from `changedFiles`) is not in `allExistingFiles`,
   * it should be deleted (= added to the chunk)
   *
   * @param allExistingFiles - all files from github
   * @param changedFiles - changed files from figma
   * @param existingChunksLength - existing chunks length to properly index the delete chunks
   * @returns github chunks of files to be deleted
   */
  private generateChunksOfFilesWhichShouldBeDeleted(
    allExistingFiles: Array<string>,
    changedFiles: ChangedFiles,
    existingChunksLength: number,
  ): ChangesChunks {
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
        // null is used to delete the file
        accum[cur] = null;
        return accum;
      }, {}),
      commit: `${this.config.git.prCommitMsg}-delete-chunk${existingChunksLength + index}`,
    }));
  }

  /**
   * Generate changes for github
   *
   * Function to generate the changes chunks before sending to github.
   *
   * Mode is taken in consideration:
   *
   * - Mode ADD: Only add the new files
   * - Mode DELETE_ONLY: Only delete the files which are not in Figma anymore
   * - Mode FULL_SYNC: Add new files and delete the files which are not in Figma anymore
   *
   * @param data - data from Figma
   * @returns github changes chunks (in the right format to pass to octokit)
   */
  public async generateChanges(data: AssetChunks | undefined): Promise<ChangesChunks> {
    const configErrors = this.configErrors();

    if (configErrors) {
      return Promise.reject(configErrors);
    }

    if (!data) {
      return Promise.reject(new Error('No changes found!'));
    }

    const allChangedFiles = this.calculateChangedFiles(data);
    const allExistingFiles = await this.getAllFilePaths();

    const changesChunks = this.calculateChangesChunks(data);

    const chunksLength = changesChunks?.length;

    const chunksOfFilesToBeDeleted = this.generateChunksOfFilesWhichShouldBeDeleted(
      allExistingFiles,
      allChangedFiles,
      chunksLength,
    );

    const cummulatedChanges = [...changesChunks, ...chunksOfFilesToBeDeleted];

    if (!cummulatedChanges.length) {
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

  /**
   * Create a pull request on github, using the config and changes passed in
   *
   * @param changes - changes chunks to be sent to github
   * @returns - Promise
   */
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
      labels: this.config.git.prLabels.split(' '),
    });
  }
}

export default Github;
