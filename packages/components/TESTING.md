# Testing

## E2E Testing

`@momentum-design/components` utilizes [Playwright](https://playwright.dev/) as the core end-to-end testing framework to ensure continuous functionality during development. Our e2e tests focus on functionality rather than code coverage to strike a balance between quick feedback and usability.

### Scope

* Testing visual consistency of a component
* Does the component display correctly in x browser (consistency and responsiveness)?
* Are attributes and methods useable as expected in x browser?
* Does the components functions work correctly in x browser?
* Is the component accessible in x browser?
* Are interactions with the component working as expected in x browser?

### Browser List to test

* Chrome
* Firefox
* Edge
* Safari/webkit

#### Setup

`@momentum-design/components` project performs visual comparisons and functionality testing for all components. There are different setups for local environments versus GitHub Workflow:

- On Local:
  - You can run functional tests locally (for easier debugging) or in Docker.
  - Update snapshot images (golden images) only using Docker with the official Playwright image, via the provided yarn scripts.
  - Uses `playwright.config.ts`, relying on external Docker mounting or local and a web server.
- On Github Workflow:
  - GitHub Workflow build the Playwright Docker image to run all tests, including snapshot tests.
- Playwright projects:
  - Default = Functional tests and Snapshot tests (Use Docker)
  - Skip Snapshot = Snapshot tests (Recommend for local)

### Local development

For the best local development experience, the following E2E setup testing is recommended:

1. In the terminal, run:
   ```bash
     yarn component test:e2e:install # install all browsers for playwright to run on local
     # you don't have to install if you already have them
   ```
2. Once the install completes, start run the test:
   ```bash
     yarn component test:e2e:skip-snapshot # without snapshot (Recommended)
   ```
   - OR to run everything including snapshot (Use Docker):
   ```bash
     yarn component yarn test:e2e:docker:all # with snapshot
     # this only works if docker is installed
   ```
   - To run the tests in `headed mode`, run:
   ```bash
     yarn component test:e2e:skip-snapshot -- --headed # without snapshot
   ```
3. To Run <strong>single</strong> E2E Test file, run:
   ```bash
     yarn component test:e2e:skip-snapshot XXX.e2e-test.ts # without snapshot
   ```
4. To Run <strong>individual</strong> test in a testing file, run:
   ```bash
     yarn component test:e2e:skip-snapshot -- './src/components/iconprovider/iconprovider.e2e-test.ts' -g 'mdc-IconmProvider nested'
   ```

   - where the test file is `"./src/components/iconprovider/iconprovider.e2e-test.ts"`, while within the file, the test naming structure is `mdc-IconmProvider nested`.

#### Testing method (Components)

```bash
  # E2E test methods
  yarn component test:e2e:skip-snapshot # you should run this on local, test are filter test base on snapshot condition check
  yarn component test:e2e # the general playwright script for local and docker to run,
  yarn component test:e2e:install # install all the browsers dependencies
  yarn component test:e2e:chrome # runs all test on specific browser, without snapshot
  yarn component test:e2e:report # shows the previous test report (also work for docker test)

  yarn component test:e2e:docker:all # build and run all tests in docker (Only works if docker is installed)
  yarn component test:e2e:docker:update-snapshot # build and update snapshots (Only works if docker is installed)
```

#### Other ways of running tests

* Using UI Mode - by running `yarn components test:e2e:ui` a separate browser window will be available, which allows you to control the running of tests from there
* Using [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

#### Note on Docker Perfomance on Mac (M Series)

Since Docker runs on the `amd64` architecture, using Docker on Mac with M chips may result in slower performance due to the emulation layer provided by Rosetta 2. For faster performance, it's recommended to run Docker in a native `amd64` environment or be aware of the potential delays when running locally on Mac.

