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

* On Local:
  * You can run functional tests locally (for easier debugging) or in Docker.
  * Update snapshot images (golden images) only using Docker with the official Playwright image, via the provided yarn scripts.
  * Uses `playwright.config.ts`, relying on local and a web server.
* On Github Workflow:
  * GitHub Workflow build the Playwright Docker image to run all tests, including snapshot tests.
* Playwright projects:
  * Default = Functional tests and Snapshot tests (Docker required)
  * Skip Snapshot = Snapshot tests (Recommend for local)

### Local development

For the best local development experience, the following E2E setup testing is recommended:

1. In the terminal, run:

   ```bash
     yarn components test:e2e:install # install all browsers for playwright to run on local
     # you don't have to install if you already have them
   ```

2. Once the install completes, setup the webserver:

   ```bash
     yarn components test:e2e:serve # setup server on localhost:4000
   ```

3. Open another terminal, now you can start run the test:

   ```bash
     yarn components test:e2e:skip-snapshot # without snapshot 
     # if you want to test the snapshot, please see Docker Testing
   ```

   * To run the tests in `headed mode`, run:

   ```bash
     yarn components test:e2e:skip-snapshot -- --headed # without snapshot
   ```

4. To Run **single** E2E Test file, run:

   ```bash
     yarn components test:e2e:skip-snapshot XXX.e2e-test.ts # without snapshot
   ```

5. To Run **individual** test in a testing file, run:

   ```bash
     yarn components test:e2e:skip-snapshot -- './src/components/iconprovider/iconprovider.e2e-test.ts' -g 'mdc-IconmProvider nested'
   ```

    * where the test file is `"./src/components/iconprovider/iconprovider.e2e-test.ts"`, while within the file, the test naming structure is `mdc-IconmProvider nested`.

6. To Run test in **specific** browser, run:

   ```bash
     yarn components test:e2e:chrome # run on chrome whithout snapshots
     yarn components test:e2e:firefox # run on firefox whithout snapshots
   ```

### Update Visual Regression snapshots

To update Visual Regression snapshots, follow the steps below to run E2E testing on Docker:

1. You need to have docker installed on local.

2. **Docker engine / daemon needs to run before executing.**

3. Login to the docker ghrc.io:

   ```bash
    echo $PAT | docker login ghcr.io -u username --password-stdin # login to docker with you github credentials (replace $PAT with personal access token (access token needs write packages access))
   ```

4. Open a terminal to setup webserver:

   ```bash
     yarn components test:e2e:serve # setup server on localhost:4000
   ```

5. Open another terminal to run docker image:

   ```bash
     yarn components test:e2e:docker:serve # run docker image on localhost:3000
   ```

6. Open another terminal to start run the test:

   ```bash
     yarn components test:e2e:docker # run all the e2e test
     yarn components test:e2e:docker:update-snapshot # update snapshots
   ```

7. To Run **single** E2E Test file, run:

   ```bash
     yarn components test:e2e:docker XXX.e2e-test.ts 
     yarn components test:e2e:docker:update-snapshot XXX.e2e-test.ts # update snapshots
   ```

8. To update snapshots for a **single** E2E Test in **specific** browser, run:

   ```bash
     yarn components test:e2e:docker:update-snapshot:chrome XXX.e2e-test.ts # run only on chrome with update snapshots
     yarn components test:e2e:docker:update-snapshot:firefox XXX.e2e-test.ts # run only on firefox with update snapshots
     yarn components test:e2e:docker:update-snapshot:webkit XXX.e2e-test.ts # run only on webkit with update snapshots
     yarn components test:e2e:docker:update-snapshot:msedge XXX.e2e-test.ts # run only on msedge with update snapshots
   ```

#### Testing method

```bash
  # E2E test methods
  yarn components test:e2e:skip-snapshot # you should run this on local, test are filter test base on snapshot condition check
  yarn components test:e2e # the general playwright script for local to run
  yarn components test:e2e:install # install all the browsers dependencies to local
  yarn components test:e2e:chrome # runs all test on specific browser, without snapshot
  yarn components test:e2e:report # shows the previous test report (also work for docker test)

  yarn components test:e2e:docker:build # build docker image that required for testing (can pull from GHCR)
  yarn components test:e2e:docker:serve # run Playwright server in docker image to run the test
  yarn components test:e2e:docker # the general playwright script for docker to run (Follow Docker Testing Instruction)
  yarn components test:e2e:docker:update-snapshot # build and update snapshots (Only works if docker is installed)
```

#### Other ways of running tests

* Using UI Mode - by running `yarn components test:e2e:ui` a separate browser window will be available, which allows you to control the running of tests from there
* Using [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)

#### Note on Docker Perfomance on Mac (M Series)

Since Docker runs on the `amd64` architecture, using Docker on Mac with M chips may result in slower performance due to the emulation layer provided by Rosetta 2. For faster performance, it's recommended to run Docker in a native `amd64` environment or be aware of the potential delays when running locally on Mac.

### Upload Latest Version of Docker Playwright Image

1. You need to have docker installed on local.

2. Set the version to latest playwright version and build the new image to local :

   ```bash
     "yarn components test:e2e:docker:build": "docker build --platform linux/amd64 -f ./config/playwright/docker/utils/Dockerfile.test.postbuild -t ghcr.io/momentum-design/momentum-design/docker-playwright:v1.49.1 ."
     # replace all the v1.49.1 to the latest version of playwright and run this script to build new image
   ```

3. After the build is done, login to the docker ghrc.io:

   ```bash
    echo $PAT | docker login ghcr.io -u username --password-stdin # login to docker with you github credentials (replace $PAT with personal access token (access token needs write packages access))
   ```

4. Now you can push the latest image to GHRC:

   ```bash
     docker push ghcr.io/momentum-design/momentum-design/docker-playwright:v1.49.1
     # replace the v1.49.1 to the version you want to push
   ```

5. You can check the image that you push here [Docker-Playwright](https://github.com/orgs/momentum-design/packages/container/package/momentum-design%2Fdocker-playwright)
