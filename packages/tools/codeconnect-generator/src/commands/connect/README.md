# Connect Command

## Purpose

Implements `codeconnect-generator connect`, which runs the manifest-to-output pipeline.

## Contents

- `command.ts`: Commander option definitions and `.action(...)` binding.
- `handler.ts`: validates resolved options, invokes pipeline, and reports diagnostics.
- `types.ts`: command option shape from Commander.
- `constants.ts`: emit target option formatting and allowed targets.
- `index.ts`: command export.

## Observability Contract

`handler.ts` is the primary user-facing reporting boundary:

- starts/stops progress indicators
- logs summary, dry-run details, warnings, and errors
- sets process exit code on error status

## Maintenance Guidance

- Keep handler logic linear and explicit.
- Keep reporting output stable; users rely on consistent diagnostics.
- Any option changes must be reflected in:
  - `command.ts`
  - package `README.md`
  - tests under `__tests__/commands/connect`
