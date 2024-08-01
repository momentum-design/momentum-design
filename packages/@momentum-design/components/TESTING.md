# Testing

## Unit Testing

## E2E Testing

Testing of the mounted, built component in real browsers.
E2E Testing is done with the help of [Playwright](https://playwright.dev/).

### Scope

* Testing visual consistency of a component
* Does the component display correctly in x browser (consistency and responsiveness)?
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
    * To run a specific E2E test, run `yarn components test:e2e XXX.e2e-test.ts`
    * To run the tests in `headed mode`, run `yarn components test:e2e -- --headed`

You can keep the first terminal open, while running/developing E2E tests in the second terminal.
