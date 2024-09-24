# Testing

## E2E Testing

Testing of the mounted, built component in real browsers.
E2E Testing is done with the help of [Playwright](https://playwright.dev/).

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

### Local development

For the best local development experience, the following E2E setup testing is recommended:

1. Open 2 terminals
2. In the first terminal, run `yarn components test:e2e:setup`
    * This will spin up the local dev environment with dev server
    * Wait till a `Serving!` message appears
3. In the second terminal, run `yarn components test:e2e`
    * This allows to run all E2E tests
    * To run a specific E2E test, run `yarn components test:e2e XXX`
    * To run the tests in `headed mode`, run `yarn components test:e2e --headed`

You can keep the first terminal open, while running/developing E2E tests in the second terminal.

#### Other ways of running tests

* Using UI Mode - by running `yarn components test:e2e:ui` a separate browser window will be available, which allows you to control the running of tests from there
* Using [Playwright VS Code extension](https://marketplace.visualstudio.com/items?itemName=ms-playwright.playwright)
