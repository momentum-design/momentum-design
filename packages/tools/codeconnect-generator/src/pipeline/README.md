# Pipeline Layer

## Purpose

The `pipeline` layer orchestrates end-to-end execution from resolved options to final report output.

## Contents

- `runner.ts`: main pipeline orchestration and report finalization.
- `manifest-batch.ts`: per-component emitter execution and write behavior.
- `index.ts`: pipeline exports.

## Maintenance Guidance

- Keep orchestration stages explicit and easy to trace.
- Ensure continue-on-error behavior is intentional and test-covered.
- Include component context in diagnostics whenever feasible.
- Validate with:
  - `__tests__/commands/connect/handler.test.ts`
  - `__tests__/pipeline/manifest-batch.test.ts`
