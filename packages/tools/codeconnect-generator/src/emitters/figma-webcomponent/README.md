# Figma Web Component Emitter

## Purpose

Generates `*.webcomponent.figma.ts` files using `@figma/code-connect/html`.

## Contents

- `emitter.ts`: Web Component target implementation.
- `helpers.ts`: target-specific import line helper(s).
- `index.ts`: target exports.

## Behavior

- Uses `import figma, { html } from '@figma/code-connect/html';`.
- Emits HTML template examples mapped from component attributes.
- Emits `imports: [...]` lines for component runtime imports.

## Maintenance Guidance

- Keep emitted HTML example syntax aligned with Figma HTML docs.
- Keep attribute binding behavior deterministic and easy to inspect.
- Validate with `__tests__/emitters/figma-webcomponent.test.ts`.
