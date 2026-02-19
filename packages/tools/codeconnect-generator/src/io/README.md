# IO Layer

## Purpose

The `io` layer isolates file-system interactions and generated section update mechanics.

## Contents

- `adapter.ts`: filesystem adapter abstraction (`nodeIoAdapter`, memory adapter for tests).
- `file-writer.ts`: create/update/unchanged file write behavior.
- `section-updater.ts`: marker-based generated section replacement utilities.
- `index.ts`: IO exports.

## Maintenance Guidance

- Keep filesystem operations behind `IoAdapter` for testability.
- Preserve non-generated/manual content where markers are missing.
- Keep line-ending handling cross-platform-safe.
- Validate with:
  - `__tests__/io/file-writer.test.ts`
  - `__tests__/io/section-updater.test.ts`
