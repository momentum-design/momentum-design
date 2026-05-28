# Core Layer

## Purpose

The `core` layer defines shared contracts and cross-cutting primitives used by all other layers.

## Contents

- `types.ts`: canonical domain types and enums (`ComponentModel`, `GenerationReport`, etc.).
- `constants.ts`: default settings and generated marker constants.
- `emit-targets.ts`: emit target parse/format helpers.
- `logger.ts`: structured logger and log-level handling.
- `result.ts`: immutable diagnostics container (`Result<T>`) utilities.
- `report.ts`: immutable report builders and reducers.
- `index.ts`: core exports.

## Maintenance Guidance

- Treat these types as API contracts for the package.
- Keep data immutable (`readonly`), avoid mutation helpers.
- Prefer small pure helpers in `result.ts` and `report.ts`.
- If enums or shared types change, review impacted tests across:
  - `__tests__/core`
  - parser/mapper tests
  - emitter/pipeline tests
