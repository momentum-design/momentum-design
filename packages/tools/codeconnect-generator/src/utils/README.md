# Utils Layer

## Purpose

`utils` contains small, reusable, pure helpers used across layers.

## Contents

- `paths.ts`: path normalization helper(s).
- `merge-by-key.ts`: deterministic merge utility.
- `index.ts`: utility exports.

## Maintenance Guidance

- Keep utilities side-effect-free.
- Keep scope narrow; move domain-specific behavior into domain layers.
- Add direct unit tests for new helper behavior in `__tests__/utils`.
