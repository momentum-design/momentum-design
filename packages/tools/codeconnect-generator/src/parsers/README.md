# Parsers Layer

## Purpose

The `parsers` layer discovers and parses input metadata into parser-level structures.

## Contents

- `custom-elements/`: custom-elements manifest discovery/parse/mapping support.
- `index.ts`: parser exports.

## Maintenance Guidance

- Keep parser scope strictly input interpretation.
- Avoid output-generation concerns in parser modules.
- For input discovery/parsing changes, update tests in:
  - `__tests__/parsers/custom-elements/*`
