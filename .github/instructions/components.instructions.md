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

## Component Development Best Practices

### Lit Element Fundamentals
- Use `@state` for internal component state that should trigger re-renders
- Use `@property` for public API properties that can be set via attributes
- Implement proper reactive property lifecycle with `willUpdate()` for performance optimization
- Always call `super.willUpdate(changedProperties)` when overriding lifecycle methods

### State Management and Performance
- **Avoid redundant state variables**: Remove any boolean flags that can be derived from existing state
- **Optimize re-render logic**: Use `willUpdate()` to perform expensive operations only when necessary
- **Memory management**: Always clean up timeouts, intervals, and event listeners in `disconnectedCallback()`
- **Encapsulation**: Make internal properties and methods private using TypeScript `private` keyword
- **Queue management**: Implement bounded resource usage for components that handle dynamic content

### Event Handling
- Fire appropriate events for state changes (`change`, `input`, etc.)
- Use `TypedCustomEvent` from `utils/types` for component-specific behaviors (e.g., `typing-complete`)
- Use `OverrideEventTarget` from `utils/types` when you need to override the type of the event target for stronger type safety
- Ensure events are fired consistently for both programmatic and user-initiated changes
- Include relevant data in event details for consumers
- Use `@event` decorator for custom events to ensure proper type safety and documentation
- use `- (React: <eventInCamelCase>)` for event names in React components to follow React's event naming conventions and add it as a comment for the tsdoc

### Property and Attribute Management
- Use `@property` decorator for public properties with appropriate type annotations
- Use `@attribute` decorator for properties that should be reflected as HTML attributes
- use `@internal` tsdocs for properties that are not part of the public API but are used internally

### Accessibility (A11Y) First
- Always include proper ARIA attributes (`aria-live`, `aria-busy`, `role`, etc.)
- Ensure screen reader compatibility with meaningful announcements
- Support keyboard navigation where applicable
- Test with actual assistive technologies, not just automated tools
- Make dynamic content accessible with live regions

### API Design Principles
- **Configuration over convention**: Provide sensible defaults but allow customization
- **Progressive enhancement**: Basic functionality should work without configuration
- **Consistent naming**: Follow established patterns for similar functionality across components
- **Type safety**: Use TypeScript interfaces and enums for better developer experience
- **Backward compatibility**: Consider migration paths when changing public APIs

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
- **Test through public APIs**: Always test component behavior through public interfaces, not internal implementation details
- **Behavior-focused testing**: Verify what users see and experience, not how the component works internally
- **Comprehensive coverage**: Include tests for all major features, edge cases, accessibility, and performance aspects

### DONTs
- Do not generate implementation style tests in `*.e2e-test.ts` files. For example, do not generate tests that check for specific CSS styles or classes.
- **Never test private properties or methods directly** - this makes tests brittle and breaks encapsulation
- Do not rely on internal state verification - focus on observable behavior instead
- Avoid testing implementation details like specific DOM structure or CSS classes unless they affect user experience

### Test Organization Best Practices
- Group related tests using `describe` blocks for better organization
- Use consistent test naming patterns: "should [expected behavior] when [condition]"
- Include setup and teardown as needed to ensure test isolation
- Test accessibility features as first-class citizens, not afterthoughts

## *.stories.ts files

### Story Structure and Organization
- Use `*.stories.ts` files to create interactive stories for components using Storybook.
- Each stories file should at least have one story named `Example` that demonstrates the component's basic usage.
- Create comprehensive story coverage including:
  - Basic usage examples (Example, variations)
  - Interactive demos showing dynamic behavior
  - Accessibility demonstrations
  - Edge cases and error states
  - Performance scenarios (if applicable)

### Story Implementation Best Practices
- **Dogfooding**: Always use Momentum Design components (`mdc-*`) instead of native HTML elements in stories
  - Replace `<button>` with `<mdc-button variant="primary|secondary|tertiary">`
  - Replace `<h1>`, `<h2>`, `<h3>` with `<mdc-text type="heading-*" tagname="h1|h2|h3">`
  - Replace `<p>` with `<mdc-text type="body-*" tagname="p">`
  - Replace `<input>` with `<mdc-input>`
  - Replace `<select>` with `<mdc-select>` and wrap `<mdc-option>` with `<mdc-selectlistbox>`
  - Replace `<ul><li>` with `<mdc-list><mdc-listitem>`
  - Replace `<option>` with `<mdc-option>`

- **Event Handling**
  - use `import { action } from '@storybook/addon-actions';` and event bindings like `@click="${action('onclick')}"` for event handling
  
- **Interactive Stories**: Use proper event handlers and DOM manipulation for dynamic demonstrations
- **Consistent Styling**: Use consistent spacing (`gap: 12px`, `margin-top: 20px`) and layout patterns
- **Responsive Design**: Use `flex-wrap: wrap` for button groups to handle smaller screens

### Story Categories and Badges
- `badges` in the parameters section should be used to indicate the status of the component:
  - `stable` for components that are fully implemented and tested.
  - `experimental` for components that are in active development but functional.
  - `wip` for components that are still in development and not yet released.
- The `title` in the meta should be in the format `GROUP_NAME/component-name` where `component-name` is the name of the component in lowercase and `GROUP_NAME` is the name of the group the component belongs to. `GROUP_NAME` can be one of the following:
  - `Components` - for all released and stable components that are part of the Momentum Design System.
  - `Work In Progress` - for components that are still in development and not yet released.
  - `Internal` - for components that are not published as part of the Momentum Design System and are used internally in the project.