# CodeConnect Generator CLI

Generate and maintain Figma Code Connect files for Momentum Design components.

This CLI reads a `custom-elements.json` manifest, maps component metadata into an internal model,
and emits Code Connect files for Web Components and React.

## Features

- Discover `custom-elements.json` automatically from the provided path or use `--manifest`.
- Parse manifest declarations into normalized component metadata.
- Generate `webcomponent` and `react` Code Connect files with standardized sections.
- Update only generated sections when files already exist.
- Provide dry-run mode with structured warnings/errors and summary diagnostics.
- Force replacement of connect files instead of section-only updates.

## Requirements

- Node `>=20`.
- Yarn `3.2.4` if building from this repo.
- A valid `custom-elements.json` manifest.

## Install / Build (from this repo)

```bash
# From the repo root

yarn --cwd packages/tools/codeconnect-generator build
node packages/tools/codeconnect-generator/dist/bin/codeconnect-generator.js --help
```

If this package is installed from a registry, the `codeconnect-generator` binary is available on your `PATH` after install.

## Quick Start

```bash
# Generate Code Connect files for a single component path
codeconnect-generator connect --path ./packages/components/src/components/accordion

# Generate from an auto-discovered manifest
codeconnect-generator connect --path ./packages/components

# Emit only Web Component targets
codeconnect-generator connect --path ./packages/components --emit webcomponent

# Preview file changes without writing
codeconnect-generator connect --path ./packages/components --dry-run

# Use an explicit manifest path
codeconnect-generator connect --path ./packages/components --manifest ./packages/components/custom-elements.json

# Continue processing even when errors occur
codeconnect-generator connect --path ./packages/components --continue-on-error

# Stop on the first error
codeconnect-generator connect --path ./packages/components --no-continue-on-error

# Force rewrite connect files instead of section updates
codeconnect-generator connect --path ./packages/components --force

# Use custom import path for components
codeconnect-generator connect --path ./packages/components --base-import-path @momentum-design/components
```

## Command Reference

`codeconnect-generator connect`

| Option                      | Description                                                        | Default       |
| --------------------------- | ------------------------------------------------------------------ | ------------- |
| `-p, --path <path>`         | Base path used to discover a `custom-elements.json` manifest.      | Required      |
| `-m, --manifest <path>`     | Explicit path to `custom-elements.json` (skips auto-discovery).    | Auto-detected |
| `-d, --dry-run`             | Preview changes without writing files.                             | `false`       |
| `-e, --emit <targets>`      | Emit targets: `webcomponent`, `react`, or `all` (comma-separated). | `all`         |
| `--continue-on-error`       | Continue processing remaining components when errors occur.         | `true`        |
| `--no-continue-on-error`    | Stop processing on the first error.                                | `false`       |
| `--force`                   | Force replacement of files instead of updating generated sections. | `false`       |
| `--base-import-path <path>` | Custom base path for generated component imports.                  | Auto-detected |

Global options

| Option          | Description                            | Default |
| --------------- | -------------------------------------- | ------- |
| `-v, --verbose` | Enable verbose logging.                | `false` |
| `-q, --quiet`   | Suppress non-error output.             | `false` |
| `-d, --dry-run` | Preview changes without writing files. | `false` |

## Manifest Discovery

- If `--manifest` is provided, that file is used directly.
- Otherwise the CLI walks upward from `--path` to find `custom-elements.json`.
- If not found, it also checks `dist/custom-elements.json` while walking upward.
- It also checks `node_modules/@momentum-design/components/custom-elements.json`
  while walking upward from the provided path.

## Output

Generated files are written to a `code-connect` directory under each component folder.

Web Component target

- `code-connect/<ComponentName>.webcomponent.figma.ts`

React target

- `code-connect/<ComponentName>.react.figma.tsx`

Placeholders like `<FIGMA_<COMPONENT>_URL>` are inserted and should be replaced with real Figma URLs.

## Generated Sections

When an output file already exists, the CLI updates only the generated sections. It looks for markers like:

```text
// BEGIN GENERATED: props
// END GENERATED: props
```

If the markers are missing, the CLI skips updates and reports a warning to avoid overwriting manual edits.

When `--force` is enabled, the CLI rewrites the full connect file and ignores existing markers.

## Source Directory Guides

The `src` directory now includes folder-level READMEs for maintainers:

- `src/cli/README.md`
- `src/commands/README.md`
- `src/commands/connect/README.md`
- `src/core/README.md`
- `src/emitters/README.md`
- `src/emitters/figma-react/README.md`
- `src/emitters/figma-webcomponent/README.md`
- `src/io/README.md`
- `src/mappers/README.md`
- `src/parsers/README.md`
- `src/parsers/custom-elements/README.md`
- `src/pipeline/README.md`
- `src/utils/README.md`

## Development

```bash
# Build the CLI
yarn --cwd packages/tools/codeconnect-generator build

# Run unit tests
yarn --cwd packages/tools/codeconnect-generator test

# Run linting
yarn --cwd packages/tools/codeconnect-generator lint

# Run type checking
yarn --cwd packages/tools/codeconnect-generator typecheck
```

## Contributing

See [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines on contributing to this tool.

## Extending

See [src/emitters/README.md](./src/emitters/README.md) for emitter architecture and extension patterns.
