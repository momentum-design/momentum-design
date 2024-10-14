# momentum-design

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/design-token-updates/LICENSE) ![state: alpha](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

The Momentum Design mono-repository is designed as a single source-of-truth for all Momentum Design related resources. Read more about our assets and token libraries here: https://momentum-design.github.io/momentum-design/en/.

This currently includes the following delivered distributables:

* [**@momentum-design/components**](https://github.com/momentum-design/momentum-design/tree/main/packages/components) - Web Components. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/components)
* [**@momentum-design/animations**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/animations) - Animation assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/animations)
* [**@momentum-design/brand-visuals**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/brand-visuals) - Brand Visual assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/brand-visuals)
* [**@momentum-design/fonts**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/fonts) - Fonts assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/fonts)
* [**@momentum-design/icons**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/icons) - Icon assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/icons)
* [**@momentum-design/illustrations**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/illustrations) - Illustration assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/illustrations)
* [**@momentum-design/tokens**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/tokens) - Token assets. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/tokens)
* [**@momentum-design/utils**](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/utils) - Common utilities. [NPMJS Package](https://www.npmjs.com/package/@momentum-design/utils)

## Testing

### End-to-End Testing

momentum-design utilizes Playwright as the core end-to-end testing framework to ensure continuous functionality during development. Our e2e tests focus on functionality rather than code coverage to strike a balance between quick feedback and usability.

### End-to-End Testing

#### Setup

The momentum-design project performs visual comparisons and functionality testing for all components. There are different setups for local environments versus GitHub Workflow:

- On Local:
  - You can run functional tests locally (for easier debugging) or in Docker.
  - Update snapshot images (golden images) only using Docker with the official Playwright image, via the provided npm scripts.
  - Uses playwright.docker.config.ts, relying on external Docker mounting and a Next.js web server.
- On Github Workflow:
  - GitHub Workflow pulls the official Playwright Docker image to run all tests, including snapshot tests.
  - Uses playwright.config.ts with a native web server running directly inside GitHub Workflow.
- Playwright projects:
  - Default = Functional tests and Snapshot tests
  - Skip Snapshot = Snapshot tests
- Supported Browsers:
  - Chrome
  - Firefox
  - WebKit
  - Microsoft Edge

Please see [consumption guide](https://github.com/momentum-design/momentum-design/blob/main/CONSUMPTION.md) for resources on how to consume this project.

## Contributing

Please see [contributing guide](https://github.com/momentum-design/momentum-design/blob/main/CONTRIBUTING.md) for resources on how to contribute to this project.
