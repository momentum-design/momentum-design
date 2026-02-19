# Custom Elements Parser

## Purpose

Implements `custom-elements.json` discovery and parsing, then maps parsed declarations into normalized component metadata.

## Contents

- `manifest-reader.ts`: manifest discovery, read, and parse utilities.
- `manifest-mapper.ts`: parser-level model mapping into `ComponentModel` shape.
- `types.ts`: manifest schema and parsed intermediate types.
- `index.ts`: exports for this parser package.

## Maintenance Guidance

- Keep discovery behavior explicit and test-backed.
- Keep type normalization conservative and predictable.
- When mapping rules change, add focused regression tests.
- Validate with:
  - `__tests__/parsers/custom-elements/manifest-reader.test.ts`
  - `__tests__/parsers/custom-elements/manifest-mapper.test.ts`
