/* eslint-disable no-param-reassign */
import { Octokit } from '@octokit/core';
import { createPullRequest } from 'octokit-plugin-create-pull-request';

import type { Asset, AssetChunks, GitSetting } from '../../shared/types';

const MyOctokit = Octokit.plugin(createPullRequest);

class Github {
  config: GitSetting = {
    githubPersonalToken: '',
    githubOwner: '',
    gitRepo: '',
    gitBranch: `automation-${new Date().toISOString().replace(/\.|:/g, '-')}`,
    prTitle: `Asset Automation ${new Date().toISOString()}`,
    prCommitMsg: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    prMessage: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    gitRepoFilePath: '',
  };

  constructor(config: GitSetting) {
    this.config = config;
  }

  configErrors(): string | undefined {
    if (!this.config.githubOwner || !this.config.gitRepo || !this.config.githubPersonalToken) {
      return 'Github configuration is not valid!';
    }

    if (
      !this.config.githubPersonalToken
      || this.config.githubPersonalToken.includes('<')
      || this.config.githubPersonalToken.includes('<')
    ) {
      return 'Personal access token is not valid';
    }

    return undefined;
  }

  async pullRequest(data: AssetChunks | undefined) {
    const octokit = new MyOctokit({
      auth: this.config.githubPersonalToken,
    });

    const configErrors = this.configErrors();

    if (configErrors) {
      return Promise.reject(configErrors);
    }

    return octokit?.createPullRequest({
      owner: this.config.githubOwner,
      repo: this.config.gitRepo,
      title: this.config.prTitle,
      body: this.config.prMessage,
      forceFork: true,
      createWhenEmpty: false,
      head: this.config.gitBranch,
      changes:
        data?.map((assets, index) => ({
          files: assets.reduce((accum: { [key: string]: any }, cur: Asset) => {
            accum[[this.config.gitRepoFilePath, cur.path].join('/')] = cur.data;
            return accum;
          }, {}),
          commit: `${this.config.prCommitMsg}-chunk${index}`,
        })) || [],
    });
  }
}

export default Github;
