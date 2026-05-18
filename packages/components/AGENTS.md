# AGENTS.md — Components Package

## Project Overview

The `@momentum-design/components` package is the core component library of the
Momentum Design System. It provides Web Components built with
[Lit](https://lit.dev/) and TypeScript, prefixed with `mdc-` (e.g.,
`mdc-button`, `mdc-card`). This package lives within the `momentum-design` mono
repository managed by Yarn Workspaces and is published to npm at
<https://www.npmjs.com/package/@momentum-design/components>.

## General Guidelines

- Use [TypeScript](https://www.typescriptlang.org/) for all code.
- Start all AI-generated code with `// AI-Assisted` and end with
  `// End AI-Assisted`.
- Follow the coding conventions in `packages/components/conventions/*.md`.
- Prefer existing mixins in `packages/components/src/utils/mixins/` to extend
  functionality.
- Icons are rendered using the `mdc-icon` component (e.g.,
  `<mdc-icon name="icon-name"></mdc-icon>`).

## Build and Dev Commands

```bash
# Start the development server (Storybook + manifest watcher)
yarn components dev

# Build components (manifest, React wrappers, module, browser bundle, Storybook)
yarn components build

# Lint and analysis
yarn components analyze:lint      # ESLint
yarn components analyze:style     # Stylelint for *.styles.ts
yarn components analyze:syntax    # TypeScript type-check (tsc --noEmit)
yarn components analyze           # All of the above

# E2E tests (local, skip snapshot — recommended for development)
yarn components test:e2e:install         # Install browser dependencies (one-time)
yarn components test:e2e:serve           # Build & serve on localhost:4000 (run in a separate terminal — supports hot reload)
yarn components test:e2e:skip-snapshot   # Run tests without visual regression snapshots
yarn components test:e2e:chrome          # Run on Chrome only (no snapshots)
yarn components test:e2e:firefox         # Run on Firefox only (no snapshots)

# E2E tests (Docker — required for snapshot updates)
yarn components test:e2e:docker:serve            # Run Playwright server in Docker on localhost:3000 (run in a separate terminal — supports hot reload)
yarn components test:e2e:docker                  # Run all tests in Docker
yarn components test:e2e:docker:update-snapshot  # Update visual regression snapshots

# Utilities
yarn components test:e2e:report   # Show previous test report
yarn components test:e2e:ui       # Run tests in Playwright UI mode
```

> All package scripts are run from the mono repo root using
> `yarn components <script-name>`. See [TESTING.md](TESTING.md) for full E2E
> testing setup (local, Docker, CI workflows, snapshot updates).

## Component Structure

Components are organized by name under `packages/components/src/components/`:

```
packages/components/src/components/component-name/
├── component-name.component.ts     # Lit component class
├── component-name.styles.ts        # Component styles
├── component-name.types.ts         # TypeScript types
├── component-name.constants.ts     # Constants and enums
├── component-name.stories.ts       # Storybook stories
├── component-name.e2e-test.ts      # Playwright E2E tests
└── index.ts                        # Public exports
```

## Code Style

### Lit Element Fundamentals

Refer to [lit.dev](https://lit.dev).

### State Management and Performance

- **Avoid redundant state variables**: Remove any boolean flags that can be
  derived from existing state.
- **Optimize re-render logic**: Use `willUpdate()` to perform expensive
  operations only when necessary.
- **Memory management**: Always clean up timeouts, intervals, and event
  listeners in `disconnectedCallback()`.
- **Encapsulation**: Make internal properties and methods private using
  TypeScript `private` keyword.
- **Queue management**: Implement bounded resource usage for components that
  handle dynamic content.

### Event Handling

- Fire appropriate events for state changes (`change`, `input`, etc.).
- Use `TypedCustomEvent` from `utils/types` for component-specific behaviors
  (e.g., `typing-complete`).
- Use `OverrideEventTarget` from `utils/types` when overriding the event target
  type for stronger type safety.
- Ensure events fire consistently for both programmatic and user-initiated
  changes.
- Include relevant data in event details for consumers.
- Use `@event` decorator for custom events to ensure proper type safety and
  documentation.
- Use `- (React: <eventInCamelCase>)` for event names in React components as a
  TSDoc comment.

### API Design Principles

- **Configuration over convention**: Provide sensible defaults but allow
  customization.
- **Progressive enhancement**: Basic functionality should work without
  configuration.
- **Consistent naming**: Follow established patterns for similar functionality
  across components.
- **Type safety**: Use TypeScript interfaces and enums for better developer
  experience.
- **Backward compatibility**: Consider migration paths when changing public
  APIs.

### Accessibility (A11Y)

- Always include proper ARIA attributes (`aria-live`, `aria-busy`, `role`,
  etc.).
- Ensure screen reader compatibility with meaningful announcements.
- Support keyboard navigation where applicable.
- Test with actual assistive technologies, not just automated tools.
- Make dynamic content accessible with live regions.

## Assets

All assets live under `packages/assets/`. To find an asset name, search the
relevant `src/` subdirectory — the filename without extension is the asset name.

| Asset Type    | Directory                       | Description                                               |
| ------------- | ------------------------------- | --------------------------------------------------------- |
| Icons         | `packages/assets/icons`         | Use `ICON_NAME-regular` when a file starts with that name |
| Fonts         | `packages/assets/fonts`         | Includes Inter Font with particular settings              |
| Tokens        | `packages/assets/tokens`        | Defines color palette, typography, spacing values         |
| Illustrations | `packages/assets/illustrations` | —                                                         |
| Animations    | `packages/assets/animations`    | —                                                         |
| Brand Visuals | `packages/assets/brand-visuals` | —                                                         |

## Testing (`*.e2e-test.ts`)

E2E tests focus on visual appearance, accessibility, and user interactions using
Playwright.

### Guidelines

- Use the `componentsPage` fixture in every test (provides the Playwright `page`
  object).
- Use the `setup` function to initialize the component before running tests.
- Place `*.e2e-test.ts` files in the same directory as the component they test.
- Use descriptive test names: `"should [expected behavior] when [condition]"`.
- Group related tests using `describe` blocks.
- Test accessibility features as first-class citizens, not afterthoughts.
- Test styling with visual regression tests.
- **Test through public APIs** — verify observable behavior, not implementation
  details.
- When running locally, ignore failures from missing browsers — CI environments
  have all browsers available.

### Do NOT

- Test for specific CSS styles or classes (implementation detail).
- Test private properties or methods directly.
- Rely on internal state verification.
- Test DOM structure unless it directly affects user experience.

## Storybook (`*.stories.ts`)

### Structure and Organization

- Every stories file must have at least one story named `Example` for basic
  usage.
- Create comprehensive coverage: basic examples, interactive demos,
  accessibility demonstrations, edge cases, and performance scenarios.

### Story Title Format

`GROUP_NAME/component-name`

| Group Name         | Usage                                                             |
| ------------------ | ----------------------------------------------------------------- |
| `Components`       | Released and stable components in the Momentum Design System      |
| `Work In Progress` | Components still in development, not yet released                 |
| `Internal`         | Components not published externally, used only within the project |
