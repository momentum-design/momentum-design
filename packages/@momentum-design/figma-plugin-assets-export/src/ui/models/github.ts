/* eslint-disable no-param-reassign */
import { Octokit } from '@octokit/core';
import { createPullRequest } from 'octokit-plugin-create-pull-request';

import type { Asset, AssetChunks, GitSetting } from '../../shared/types';

const MyOctokit = Octokit.plugin(createPullRequest);

class Github {
  config: GitSetting = {
    githubPersonalToken: '<YourGithubTokenHere>',
    githubOwner: 'momentum-design',
    gitRepo: 'momentum-design',
    gitBranch: `automation-${new Date().toISOString().replace(/\.|:/g, '-')}`,
    prTitle: `Asset Automation ${new Date().toISOString()}`,
    prCommitMsg: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    prMessage: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    gitRepoFilePath: 'packages/@momentum-design',
    gitDistPath: '',
  };

  constructor(config: GitSetting) {
    this.config = config;
  }

  async pullRequest(data: AssetChunks | undefined) {
    const octokit = new MyOctokit({
      auth: this.config.githubPersonalToken,
    });

    return octokit?.createPullRequest({
      owner: this.config.githubOwner,
      repo: this.config.gitRepo,
      title: this.config.prTitle,
      body: this.config.prMessage,
      forceFork: true,
      createWhenEmpty: false,
      head: this.config.gitBranch,
      changes: data?.map((assets, index) => ({
        files: assets.reduce((accum: {[key: string]: any}, cur: Asset) => {
          accum[
            // eslint-disable-next-line max-len
            `${this.config.gitRepoFilePath}${this.config.gitDistPath ? `/${this.config.gitDistPath}/` : ''}${cur.path}`
          ] = cur.data;
          return accum;
        }, {}),
        commit: `${this.config.prCommitMsg}-chunk${index}`,
      })) || [],
    });
  }
}

export default Github;
