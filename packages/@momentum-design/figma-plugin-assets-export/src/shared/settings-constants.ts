import type { Settings } from './types';

const INITIAL_SETTINGS: Settings = {
  auth: {
    // TODO: adjust properly:
    githubPersonalToken: '<YourClassicPersonalAccessTokenHere>',
  },
  assets: {
    icons: {
      name: 'Icons',
      description: {
        name: 'Icons',
        url: 'https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/icons',
        urlText: 'Momentum icons package',
      },
      input: {
        mapPagesToFolder: [
          { page: '✅', folder: 'core' },
          { page: 'Colored Icons', folder: 'colored' },
          { page: 'Brand Icons', folder: 'brand' },
        ],
        exclude: {
          byVariant: 'sf alternative',
        },
        asset: {
          fileName: {
            parts: ['SET_OR_COMPONENT_NAME', 'SF_ALTERNATIVE', 'RTL'],
            separator: '-',
            suffix: {
              parts: ['WEIGHT', 'STATE', 'SIZE'],
              separator: '_',
            },
          },
          exportSettings: {
            format: 'SVG',
            contentsOnly: true,
            useAbsoluteBounds: false,
          },
        },
      },
      output: {
        git: {
          githubOwner: 'momentum-design',
          gitRepo: 'momentum-design',
          gitBranch: `automation-icons-${new Date().toISOString().replace(/\.|:/g, '-')}`,
          prTitle: `Automated Icons Export ${new Date().toISOString()}`,
          prCommitMsg: `feat(assets/icons): Export ${new Date().toISOString()}`,
          prMessage: `feat(assets/icons): Export ${new Date().toISOString()}`,
          gitRepoFilePath: 'packages/@momentum-design/icons',
          gitDistPath: 'src',
        },
      },
    },
    illustrations: {
      name: 'Illustrations',
      description: {
        name: 'Illustrations',
        url: 'https://github.com/momentum-design/momentum-design/tree/main/packages/%40momentum-design/illustrations',
        urlText: 'Momentum illustrations package',
      },
      input: {
        mapPagesToFolder: [
          { page: '✅', folder: '' },
        ],
        exclude: {
          byVariant: 'sf alternative',
        },
        asset: {
          fileName: {
            // TODO: adjust properly:
            parts: ['SET_OR_COMPONENT_NAME', 'SF_ALTERNATIVE', 'RTL'],
            separator: '-',
            suffix: {
              parts: ['COLOR'],
              separator: '-',
            },
          },
          exportSettings: {
            format: 'SVG',
            contentsOnly: true,
            useAbsoluteBounds: false,
          },
        },
      },
      output: {
        git: {
          githubOwner: 'momentum-design',
          gitRepo: 'momentum-design',
          gitBranch: `automation-illustrations-${new Date().toISOString().replace(/\.|:/g, '-')}`,
          prTitle: `Automated Illustrations Export ${new Date().toISOString()}`,
          prCommitMsg: `feat(assets/illustrations): Export ${new Date().toISOString()}`,
          prMessage: `feat(assets/illustrations): Export ${new Date().toISOString()}`,
          gitRepoFilePath: 'packages/@momentum-design/illustrations',
          gitDistPath: 'src',
        },
      },
    },
  },
};

const CONSTANTS = {
  INITIAL_SETTINGS,
};

export { CONSTANTS };
