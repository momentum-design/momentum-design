# CodeConnect Generator - Agent Guide

This file defines how to safely work in `packages/tools/codeconnect-generator`.

## Intent

`codeconnect-generator` is a manifest-driven CLI that generates and maintains Figma Code Connect files from a `custom-elements.json` input. The tool should stay:

- Deterministic in generated output.
- Conservative around manual edits (marker-based updates by default).
- Observable during execution (clear progress, warnings, errors, and summaries).

## Current Architecture

- `src/cli/`: Program bootstrap, global options, help formatting, progress indicator, basic validation.
- `src/commands/`: CLI command registration and command handlers.
- `src/core/`: Shared enums/types/constants, logger, result/report helpers.
- `src/parsers/`: Manifest discovery/reading and model mapping preparation.
- `src/mappers/`: Conversion helpers for normalized `ComponentModel` construction.
- `src/emitters/`: Target-specific file generation (Web Component, React).
- `src/io/`: File IO abstraction and generated section update helpers.
- `src/pipeline/`: End-to-end orchestration and batch execution.
- `src/utils/`: Small pure utility helpers.

## Non-Goals

Do not reintroduce deprecated source/AST discovery behavior unless explicitly requested.

- No TypeScript program loading.
- No source-file recursive component scanning.
- No hidden config-path workflow for parsing.

## Design Rules

1. Keep command handlers thin
- Validate once, build context once, execute pipeline once.
- Keep observability in the handler and pipeline boundaries.

2. Keep pipeline behavior explicit
- Continue-on-error behavior must be intentional and test-backed.
- Diagnostics should include component context when possible.

3. Keep emitters deterministic
- Stable sorting for props/attributes/events.
- Keep generated formatting and section markers stable.
- Follow Figma Code Connect docs for emitted syntax.

4. Preserve manual edits by default
- Use generated section replacement when markers exist.
- If markers are missing, report warnings and avoid destructive updates.

5. Prefer pure transformations
- Core/mappers/utils should avoid side effects.
- IO stays isolated in `src/io` and pipeline write stages.

## Documentation Requirements

When changing behavior, update docs in the same PR:

- `README.md` (CLI behavior and examples).
- This `AGENTS.md` (architecture/guardrails if changed).
- Folder-level `README.md` files under `src/**` when responsibilities shift.

## Testing Expectations

For meaningful behavior changes, add or update tests close to the changed layer:

- CLI contract changes: `__tests__/cli` and command tests.
- Manifest parsing/discovery changes: `__tests__/parsers/custom-elements`.
- Output template changes: `__tests__/emitters`.
- Write/update strategy changes: `__tests__/io` and `__tests__/pipeline`.

Run at minimum:

```bash
yarn --cwd packages/tools/codeconnect-generator test
```

Run lint/typecheck when relevant; if they fail due pre-existing workspace policy issues, document that in your summary.

## Change Hygiene

- Keep APIs minimal; remove dead fields/helpers when no longer used.
- Avoid introducing new abstractions unless they materially reduce complexity.
- Keep user-facing logs actionable and concise.
- Keep README examples runnable and aligned with the actual command surface.
