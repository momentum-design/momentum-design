# Mappers Layer

## Purpose

The `mappers` layer converts parser outputs into normalized, emitter-ready models.

## Contents

- `component-model.ts`: base component model normalization and import path derivation.
- `attribute-mapper.ts`: maps properties to attribute descriptors.
- `index.ts`: mapper exports.

## Maintenance Guidance

- Keep mapping logic pure and deterministic.
- Keep fallback behavior explicit (e.g., unknown class names/import path derivation).
- Validate changes with `__tests__/mappers/*` and downstream parser/emitter tests.
