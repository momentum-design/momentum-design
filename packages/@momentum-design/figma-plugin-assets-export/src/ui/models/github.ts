/* eslint-disable no-param-reassign */
import { Octokit } from '@octokit/core';
import { createPullRequest } from 'octokit-plugin-create-pull-request';

import type { Asset, AssetChunks, GithubSync } from '../../shared/types';

const MyOctokit = Octokit.plugin(createPullRequest);

class Github {
  config: GithubSync = {
    githubPersonalToken: '<YourGithubTokenHere>',
    githubOwner: 'momentum-design',
    gitRepo: 'momentum-design',
    gitBranch: `automation-${new Date().toISOString().replace(/\.|:/g, '-')}`,
    prTitle: `Asset Automation ${new Date().toISOString()}`,
    prCommitMsg: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    prMessage: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    gitRepoFilePath: 'packages/@momentum-design',
    assetTypePath: '',
  };

  data: AssetChunks | undefined;

  constructor(config: GithubSync) {
    this.config = config;
  }

  async pullRequest() {
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
      changes: this.data?.map((assets, index) => ({
        files: assets.reduce((accum: {[key: string]: any}, cur: Asset) => {
          accum[
            // eslint-disable-next-line max-len
            `${this.config.gitRepoFilePath}${this.config.assetTypePath ? `/${this.config.assetTypePath}/` : ''}${cur.path}`
          ] = cur.data;
          return accum;
        }, {}),
        commit: `${this.config.prCommitMsg}-chunk${index}`,
      })) || [],
    });
  }
}

export default Github;
