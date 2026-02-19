# Commands Layer

## Purpose

The `commands` layer wires Commander commands to runtime behavior.

It is responsible for:

- command registration
- command-level option contract
- delegating execution to command handlers

## Contents

- `registry.ts`: registers all available commands.
- `index.ts`: command-level exports.
- `connect/`: implementation of the `connect` command.

## Maintenance Guidance

- Keep command registration simple and explicit.
- Avoid hidden runtime magic in command loading.
- Add new command folders only when there is a real user-facing command.
- For each new command, include:
  - command definition
  - handler
  - option types/constants
  - tests for option parsing and runtime behavior
