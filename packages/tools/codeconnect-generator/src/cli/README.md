# CLI Layer

## Purpose

The `cli` layer owns command-line UX concerns only:

- program setup and help output
- global option reading
- lightweight option validation
- terminal progress feedback

It must not implement parsing, generation, or file-write orchestration logic.

## Contents

- `program.ts`: CLI bootstrap (`createProgram`, `run`), global flags, help formatting.
- `options.ts`: resolves inherited global options from Commander command hierarchy.
- `validators.ts`: validates user-facing CLI inputs.
- `progress.ts`: spinner/no-op progress indicator for TTY and non-TTY flows.
- `types.ts`: shared CLI option and progress interfaces.
- `index.ts`: public exports for the CLI layer.

## Maintenance Guidance

- Keep the CLI thin. Delegate domain behavior to `commands/` and `pipeline/`.
- Keep validation messages actionable and specific to the flag being validated.
- Keep progress labels short and stage-oriented.
- If you add or remove flags, update:
  - `program.ts` help/examples
  - package `README.md`
  - relevant command tests under `__tests__/cli` and `__tests__/commands`
