const INITIAL_SETTINGS = {
  mapPagesToFolder: [
    { page: '✅', folder: 'core' },
    { page: 'Colored Icons', folder: 'colored' },
    { page: 'Brand Icons', folder: 'brand' },
  ],
  fileName: {
    parts: ['SET_OR_COMPONENT_NAME', 'SF_ALTERNATIVE', 'RTL'],
    separator: '-',
    suffix: {
      part: 'WEIGHT',
      separator: '_',
    },
  },
  exclude: {
    byVariant: 'sf alternative',
  },
  exportSettings: {
    format: 'SVG',
    contentsOnly: true,
    useAbsoluteBounds: false,
  },
};

const SYNC_SETTINGS = {
  git: {
    githubPersonalToken: '<YourClassicPersonalAccessTokenHere>',
    githubOwner: 'momentum-design',
    gitRepo: 'momentum-design',
    gitBranch: `automation-${new Date().toISOString().replace(/\.|:/g, '-')}`,
    prTitle: `Asset Automation ${new Date().toISOString()}`,
    prCommitMsg: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    prMessage: `feat(assets): Asset Automation ${new Date().toISOString()}`,
    gitRepoFilePath: 'packages/@momentum-design',
  },
};

const CONSTANTS = {
  INITIAL_SETTINGS,
  SYNC_SETTINGS,
};

export {
  CONSTANTS,
};
