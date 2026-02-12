# Emitters Layer

## Purpose

The `emitters` layer transforms normalized `ComponentModel` inputs into Code Connect file payloads.

## Contents

- `types.ts`: emitter interfaces.
- `base-emitter.ts`: shared template method for connect file assembly.
- `factory.ts`: emitter creation and target registration.
- `utils.ts`: shared formatting/template helpers.
- `figma-react/`: React target emitter.
- `figma-webcomponent/`: HTML/Web Component target emitter.
- `index.ts`: emitter exports.

## Maintenance Guidance

- Keep output deterministic (stable ordering and formatting).
- Keep shared flow in `BaseEmitter`; avoid duplicating structure in targets.
- Ensure generated syntax matches Figma Code Connect docs.
- For emitter changes, update tests in `__tests__/emitters`.
