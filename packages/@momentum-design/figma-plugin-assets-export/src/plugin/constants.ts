const DOCUMENT = {
  VALID_CHILD_TYPES: ['PAGE'],
};

const SEARCH_CRITERIA = ['COMPONENT' as const];

const REPLACE_TERMS = {
  COMPONENT_NAME: 'COMPONENT_NAME' as const,
  PARENT_NAME: 'PARENT_NAME' as const,
  SET_OR_COMPONENT_NAME: 'SET_OR_COMPONENT_NAME' as const,
  SF_ALTERNATIVE: 'SF_ALTERNATIVE' as const,
  RTL: 'RTL' as const,
  WEIGHT: 'WEIGHT' as const,
};

// note: variants have to be provided lowercase here:
const FIGMA_VARIANTS = {
  WEIGHT: 'weight',
  RTL: 'right to left',
  SF_ALTERNATIVE: 'sf alternative',
};

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
  sync: {
    git: {
      githubPersonalToken:
        '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',
      githubOwner: 'momentum-design',
      gitRepo: 'momentum-design',
      gitBranch: `automation-${new Date().toISOString().replace(/\.|:/g, '-')}`,
      prTitle: `Asset Automation ${new Date().toISOString()}`,
      prCommitMsg: `feat(assets): Asset Automation ${new Date().toISOString()}`,
      prMessage: `feat(assets): Asset Automation ${new Date().toISOString()}`,
      gitRepoFilePath: 'packages/@momentum-design',
    },
  },
};

const CONSTANTS = {
  DOCUMENT,
  SEARCH_CRITERIA,
  REPLACE_TERMS,
  FIGMA_VARIANTS,
  INITIAL_SETTINGS,
};

export {
  CONSTANTS,
};
