---
applyTo: 'packages/components/**/*'
---

# General information for Components package

- The prefix for momentum-design components is `mdc-` (e.g., `mdc-button`, `mdc-card`, etc.).
- Icons are rendered using the `mdc-icon` component (e.g., `<mdc-icon name="icon-name"></mdc-icon>`).


# Project coding standards for Components package

## General

- Use [TypeScript](https://www.typescriptlang.org/) for all code.
- Follow the coding conventions outlined in #packages/components/conventions/**/*.md
- Always prefer using the existing mixins provided in the #packages/omponents/src/utils/mixins folder to extend functionality.

## Use of Momentum Design Assets
### Icons
- Icons are stored in the `packages/assets/icons` directory.
- In case you need to search for a Icon name, you can search for it in the `packages/assets/icons/src` directory and subdirectories 
(file name without extension = icon name).
- In case you need to search for a specific icon and you a file in the `packages/assets/icons/src` directory starts with that requested icon name, you can use `ICON_NAME-regular` for further operations.

### Fonts
- Fonts are stored in the `packages/assets/fonts` directory.

### Tokens
- Tokens are stored in the `packages/assets/tokens` directory.
- Tokens are used to define the design system's color palette, typography, spacing, and other design-related values.
<!-- TODO: add proper instructions on how to find Theme tokens -->

### Illustrations
- Illustrations are stored in the `packages/assets/illustrations` directory.
- In case you need to search for a Illustration name, you can search for it in the `packages/assets/illustrations/src` directory and subdirectories 
(file name without extension = icon name).

### Animations
- Animations are stored in the `packages/assets/animations` directory.
- In case you need to search for a Animation name, you can search for it in the `packages/assets/animations/src` directory and subdirectories
(file name without extension = icon name).

### Brand Visuals
- Brand visuals are stored in the `packages/assets/brand-visuals` directory.
- In case you need to search for a Brand Visual name, you can search for it in the `packages/assets/brand-visuals/src` directory and subdirectories
(file name without extension = icon name).

## *.stories.ts files
- The `title` in meta should be in the format `GROUP_NAME/component-name` where `component-name` is the name of the component in lowercase and `GROUP_NAME` is the name of the group the component belongs to.
The following groups are available:
  - `Components` - for all released and stable components that are part of the Momentum Design System.
  - `Work In Progress` - for components that are still in development and not yet released.
  - `Internal` - for components that are not published as part of the Momentum Design System and are used internally in the project.


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

## *.stories.ts files

- Use `*.stories.ts` files to create interactive stories for components using Storybook.
- Each stories file should at least have one story named `Example` that demonstrates the component's basic usage.
- `badges` in the parameters section should be used to indicate the status of the component:
  - `stable` for components that are fully implemented and tested.
  - `wip` for components that are still in development and not yet released.
- The `title` in the meta should be in the format `GROUP_NAME/component-name` where `component-name` is the name of the component in lowercase and `GROUP_NAME` is the name of the group the component belongs to. `GROUP_NAME` can be one of the following:
  - `Components` - for all released and stable components that are part of the Momentum Design System.
  - `Work In Progress` - for components that are still in development and not yet released.
  - `Internal` - for components that are not published as part of the Momentum Design System and are used internally in the project.