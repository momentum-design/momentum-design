---
applyTo: 'packages/components/**/*'
---

# Project coding standards for Components package

## General

- Use [TypeScript](https://www.typescriptlang.org/) for all code.
- Follow the coding conventions outlined in #packages/components/conventions/**/*.md
- Always prefer using the existing mixins provided in the #packages/omponents/src/utils/mixins folder to extend functionality.

## *.e2e-test.ts files

### DOs
- Use `*.e2e-test.ts` files for end-to-end tests that focus on the visual appearance and output of components.
- Test for visual regressions, accessibility, attribute variations, and user interactions.
- Use the `setup` function to initialize the component and set up any necessary state or props before running tests.
- Use the `componentsPage` fixture in every test. The `page` object of Playwright is added as a object to the `componentsPage` fixture.
- Ensure that the `*.e2e-test.ts` files are located in the same directory as the component they are testing.
- Use descriptive test names that clearly indicate what the test is verifying.

### DONTs
- Do not generate implementation style tests in `*.e2e-test.ts` files. For example, do not generate tests that check for specific CSS styles or classes.
