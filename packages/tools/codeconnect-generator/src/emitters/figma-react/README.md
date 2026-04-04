# Figma React Emitter

## Purpose

Generates `*.react.figma.tsx` Code Connect files for React-based usage.

## Contents

- `emitter.ts`: React target implementation.
- `index.ts`: target exports.

## Behavior

- Emits React `figma.connect(...)` files.
- Resolves import paths for component usage in generated examples.
- Uses shared section and props generation from base/util helpers.

## Maintenance Guidance

- Keep generated import resolution predictable and test-backed.
- Keep JSX example output minimal and stable.
- Validate changes with `__tests__/emitters/figma-react.test.ts`.
