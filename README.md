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

`Momentum-design` utilizes Playwright as the core end-to-end testing framework to ensure continuous functionality during development. Our e2e tests focus on functionality rather than code coverage to strike a balance between quick feedback and usability.

#### Setup

`Momentum-design` project performs visual comparisons and functionality testing for all components. There are different setups for local environments versus GitHub Workflow:

- On Local:
  - You can run functional tests locally (for easier debugging) or in Docker.
  - Update snapshot images (golden images) only using Docker with the official Playwright image, via the provided yarn scripts.
  - Uses playwright.docker.config.ts, relying on external Docker mounting and a web server.
- On Github Workflow:
  - GitHub Workflow build the Playwright Docker image to run all tests, including snapshot tests.
  - Uses `playwright.config.ts` with a native web server running directly inside GitHub Workflow.
- Playwright projects:
  - Default = Functional tests and Snapshot tests
  - Skip Snapshot = Snapshot tests
- Supported Browsers:
  - Chrome
  - Firefox
  - WebKit
  - Microsoft Edge

#### Local development

For the best local development experience, the following E2E setup testing is recommended (Now only on components):

1. In the terminal, run:
   ```bash
     yarn test:e2e:install # install all browsers for playwright
     # you don't have to install if you already have them
   ```
2. Once the install completes, start run the test:
   ```bash
     yarn test:e2e:skip:snapshot # without snapshot (Recommended)
   ```
   - OR to run everything including snapshot:
   ```bash
     yarn test:e2e # with snapshot
     # snapshot tests might fail due to the pixel difference on local vs CI/CD LINUX
   ```
3. To Run <strong>single</strong> E2E Test file, run:
   ```bash
     yarn test:e2e:skip:snapshot XXX.e2e-test.ts # without snapshot (Recommended)
     yarn test:e2e XXX.e2e-test.ts # with snapshot
   ```
4. To Run <strong>individual</strong> test in a testing file, run:
   ```bash
     yarn test:e2e -- './src/components/iconprovider/iconprovider.e2e-test.ts' -g 'mdc-IconmProvider nested'
   ```

   - where the test file is `"./src/components/iconprovider/iconprovider.e2e-test.ts"`, while within the file, the test naming structure is `mdc-IconmProvider nested`.

#### Testing method (Components)

```bash
  # E2E test methods
  yarn test:e2e # runs everything on local including functional and snapshots testing
  yarn test:e2e:skip:snapshot # you should run this on local, tets are filter test base on snapshot condition check
  yarn test:e2e:install # install all the browsers dependencies
  yarn test:e2e:chrome # runs all test on specific browser
  yarn test:e2e:report # shows the previous test report (also work for docker test)

  yarn test:e2e:docker # the general playwright script docker is running, invoke it through dockerfile
  yarn test:e2e:docker:all # build and run all tests in docker
  yarn test:e2e:docker:update:snapshot # build and update snapshots
```

#### Note on Docker Perfomance on Mac (M Series)

Since Docker runs on the `amd64` architecture, using Docker on Mac with M chips may result in slower performance due to the emulation layer provided by Rosetta 2. For faster performance, it's recommended to run Docker in a native `amd64` environment or be aware of the potential delays when running locally on Mac.

## Consumption

Please see [consumption guide](https://github.com/momentum-design/momentum-design/blob/main/CONSUMPTION.md) for resources on how to consume this project.

## Contributing

Please see [contributing guide](https://github.com/momentum-design/momentum-design/blob/main/CONTRIBUTING.md) for resources on how to contribute to this project.
