# Conventions

Use the `Applies when` column to select relevant guidance. The linked document
remains the source of truth for each convention.

## General Coding

| Convention                                                                 | Applies when                                                            |
| -------------------------------------------------------------------------- | ----------------------------------------------------------------------- |
| [Component naming](./component-naming-guidelines.md)                       | Naming a component class, internal CSS class, or CSS part.              |
| [Clean Code Guidelines](./clean-code-guidelines.md)                        | Writing or reviewing production code, comments, logs, or generated IDs. |
| [Component Folder Structure](./component-code-structure.md)                | Scaffolding a component or deciding where component files belong.       |
| [Component text ownership](./component-text-ownership.md)                  | Adding visible, accessibility-only, or locale-sensitive display text.   |
| [Component Error Handling](./component-error-handling.md)                  | Handling asynchronous or recoverable component errors.                  |
| [Component Import Guidelines: Index File Structure](./component-import.md) | Adding component dependencies or referencing component tag names.       |
| [Typescript Type Only Imports](./typescript-type-only-imports.md)          | Importing TypeScript symbols used only as types.                        |
| [Using Enums and Alternatives in TypeScript](./constants-and-enums.md)     | Defining a finite set of values or exported constants.                  |
| [Mixin typing](./mixin-tsdoc-guidelines.md)                                | Adding public or protected APIs through a TypeScript mixin.             |
| [No relative workspace imports](./no-relative-imports-workspace.md)        | Importing code or assets from another workspace package.                |
| [Component attribute initialisation](./component-initialisation.md)        | Initializing attributes or other DOM-related state.                     |

## Accessibility

| Convention                                                                   | Applies when                                                             |
| ---------------------------------------------------------------------------- | ------------------------------------------------------------------------ |
| [Aria Delegation vs Host Aria per Component](./component-aria-delegation.md) | Choosing whether ARIA semantics live on the host or an internal control. |

## Styling

| Convention                                                    | Applies when                                                                |
| ------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Component Styling](./component-styling.md)                   | Styling a component, exposing CSS customization, or adding animation.       |
| [Height and width as styles](./height-and-width-as-styles.md) | Exposing consumer-controlled component height or width.                     |
| [Using data attributes](./data-attributes-on-host.md)         | Representing host state without depending on consumer-editable class names. |

## Documentation

| Convention                                                      | Applies when                                                                |
| --------------------------------------------------------------- | --------------------------------------------------------------------------- |
| [Writing proper stories in Storybook](./component-storybook.md) | Creating stories or changing a component's release status.                  |
| [TSDoc per Component](./component-tsdoc.md)                     | Documenting a component, public API, slots, parts, events, or dependencies. |
