# Changelog

All notable changes to the `@momentum-design/codeconnect-generator` tool will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/), and this project adheres to [Semantic Versioning](https://semver.org/).

## [0.1.0] - 2026-02-12

Initial pre-release of the Figma Code Connect automated file generator.

### Added

#### CLI & Commands

- `bin/codeconnect-generator.ts` entry point with Commander.js program, global options (`--verbose`, `--quiet`, `--config`), and formatted help output.
- `connect` command with `--path`, `--recursive`, `--dry-run`, `--emit` (webcomponent, react, all), `--force`, `--strict`, `--manifest`, and `--base-import-path` options.
- Command registry pattern for extensible sub-command registration.
- Argument validation and progress indicator utilities.

#### Core Infrastructure

- `ComponentModel`, `PropertyDescriptor`, `AttributeDescriptor`, `EventDescriptor`, `GenerationReport` type definitions.
- `EmitterTarget` and `FigmaPropertyType` enums.
- `Logger` with structured log levels (debug, info, warn, error), quiet/verbose modes, and context-aware output.
- `Result<T>` monad with `map`, `chain`, `addError`, `addWarnings`, and aggregate helpers.
- Report builder with accumulation, summary formatting, timing, and per-component file change details.
- Generated section marker constants and builder for named props/example blocks.

#### Emitters

- `BaseEmitter` (GoF Template Method) with shared generation flow for imports, props, example, and trailing sections.
- `FigmaReactEmitter` producing `*.react.figma.tsx` files using `@figma/code-connect` with JSX examples.
- `FigmaWebComponentEmitter` producing `*.webcomponent.figma.ts` files using `@figma/code-connect/html` with lit-html templates.
- Emitter factory with registry-based creation by target name.
- Emitter utilities: prop-to-Figma mapping (boolean, string, number, enum), section builders, file payload builders, deterministic sorting, and formatting helpers.

#### IO Layer

- `IoAdapter` interface with `nodeIoAdapter` (filesystem) and `MemoryIoAdapter` (in-memory for tests).
- `writeFile` with dry-run support, create/update/unchanged status, and section-based update mode.
- Section updater with marker-based extraction, replacement, insertion, and multi-section batch updates.
- Cross-platform line-ending detection and normalization.

#### Mappers

- `attribute-mapper` converting `PropertyDescriptor` arrays to deduplicated `AttributeDescriptor` arrays via `mergeByKey`.
- `component-model` mapper normalizing parser output into emitter-ready `ComponentModel` with import path derivation.

#### Parsers

- `custom-elements` manifest reader with filesystem discovery (walks parent directories), JSON parse, and component extraction.
- `custom-elements` manifest mapper converting `ParsedComponent` to `ComponentModel` with type normalization, enum value extraction, and event-to-React-handler mapping.
- Full `custom-elements.json` schema type definitions (modules, declarations, attributes, events, slots, CSS properties).

#### Pipeline

- `runConnectPipeline` orchestrator using Chain of Responsibility pattern with sequential steps: manifest resolution, manifest parsing, emitter initialization, batch processing, and report finalization.
- `processManifestBatch` processing each `ComponentModel` through configured emitters with force-overwrite, section-based update, and continue-on-error support.
- Package root resolution handling manifest-in-subdirectory scenarios.

#### Utilities

- `normalizePath` for cross-platform POSIX-style path normalization.
- `mergeByKey` for deterministic map merging with configurable merge strategy.

#### Testing

- 29 test suites, 263 tests across all layers:
  - CLI: options parsing, program setup, progress indicators, validators.
  - Commands: connect handler, constants, command registry.
  - Core: component model, emit targets, logger, report, result helpers.
  - Emitters: factory, figma-react output, figma-webcomponent output, emitter utilities.
  - IO: adapter, file writer, section updater, multi-section updates.
  - Mappers: attribute mapper, component model mapper.
  - Parsers: custom-elements manifest reader and mapper.
  - Pipeline: manifest batch processor, runner orchestration.
  - Utils: merge-by-key, path normalization.
  - Integration: connect CLI end-to-end.
- Shared test helpers: fixtures, mocks, assertions.
- Test fixtures for accordion, accordionbutton, standalone, variant, and mixin components.

#### Documentation & Configuration

- Package README with CLI usage, architecture overview, and development instructions.
- CONTRIBUTING guide with PR workflow and conventional commit requirements.
- SCRIPTS reference for available package commands.
- Per-layer README files for CLI, commands, core, emitters, IO, mappers, parsers, pipeline, and utils.
- Testing guidelines in `__tests__/AGENTS.md`.
- MIT license header on all source files (Copyright (c) 2022 Momentum Design).
- ESLint configuration with jsdoc and simple-import-sort plugins.
- Prettier configuration.
- TypeScript build (`tsconfig.json`) emitting to `dist/` and test config (`tsconfig.test.json`).
- Jest configuration with ts-jest and coverage thresholds.
- API Extractor configuration for declaration bundling.
