import type { Settings } from './types';

const INITIAL_SETTINGS: Settings = {
  auth: {
    // TODO: adjust properly:
    githubPersonalToken: '<YourClassicPersonalAccessTokenHere>',
  },
  assets: {
    typeOfAsset: {
      name: '<type of asset>',
      mode: 'ADD',
      description: {
        name: '<Name of git repo>',
        url: '<URL of the git repo only for informational purpose>',
        urlText: '<url text>',
      },
      input: {
        mapPagesToFolder: [
          { page: '<substring of page>', folder: '<folder-name>' },
        ],
        exclude: {
          byVariant: '<variant which should be excluded>',
        },
        asset: {
          fileName: {
            // array of REPLACE_TERM:
            parts: ['SET_OR_COMPONENT_NAME', 'SF_ALTERNATIVE', 'RTL'],
            separator: '-',
            suffix: {
              // array of REPLACE_TERM:
              parts: ['WEIGHT', 'STATE', 'SIZE'],
              separator: '_',
            },
            replaceNumbers: true,
            replaceDots: true,
          },
          // figma export settings (https://www.figma.com/plugin-docs/api/properties/nodes-exportasync/):
          exportSettings: {
            format: 'SVG',
            contentsOnly: true,
            useAbsoluteBounds: false,
          },
          exportSettingsImage: {
            format: 'PNG',
            contentsOnly: true,
            useAbsoluteBounds: false,
          },
        },
      },
      output: {
        git: {
          githubOwner: '<owner-name>',
          gitRepo: '<repo-name>',
          gitBranch: `automation-assets-${new Date().toISOString().replace(/\.|:/g, '-')}`,
          prTitle: `Automated Assets Export ${new Date().toISOString()}`,
          prCommitMsg: `feat(assets): Export ${new Date().toISOString()}`,
          prMessage: `feat(assets): Export ${new Date().toISOString()}`,
          gitRepoFilePath: '<path where assets should be exported to>',
          prLabels: '<space separated list of labels>',
        },
      },
    },
  },
};

const CONSTANTS = {
  INITIAL_SETTINGS,
};

export { CONSTANTS };
