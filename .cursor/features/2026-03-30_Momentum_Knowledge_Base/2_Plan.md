# Implementation plan: Momentum Knowledge Base (phase 1)

**Status:** Approved  
**PRD:** `.cursor/features/current/1_ProductRequirementsDocument.md`  
**Date:** 2026-03-30  

---

## Overview

Introduce `packages/knowledge` as a Yarn workspace package containing only markdown and a small `package.json` so root workspace scripts keep working. Document a clear folder layout and naming rules in the package README, add one overview stub per top-level domain, and establish the “shipped code wins” rule in prose. No MCP, no Astro wiring, no embedded media.

---

## Architecture decisions

### Yarn workspace membership

The root `workspaces` glob is `./packages/**/*`; only directories with a `package.json` participate. Add `@momentum-design/knowledge` with `private: true` and minimal `build`, `analyze`, `clean`, and `test` scripts (no-op or single echo) so `yarn workspaces foreach` at the repo root does not fail on a missing script.

### Information architecture (phase 1)

Use a flat set of top-level topic folders under `packages/knowledge/` aligned with the monorepo mental model:

- `tokens/` — token naming, themes, consumption pointers (text only).
- `assets/` — icons, fonts, illustrations, etc., at a guidance level (not asset binaries).
- `components/` — usage and patterns for `@momentum-design/components` (text only).
- `patterns/` — cross-component UX and composition guidance.
- `tools/` — CLIs and pipelines (`md-builder`, `md-token-builder`, etc.) at a “how we work” level.

Each folder gets a `README.md` acting as that section’s index. Individual topics use **kebab-case** `.md` filenames (e.g. `spacing-scale.md`). No requirement for YAML front matter in phase 1; optional later.

### Authoritative source

State in `packages/knowledge/README.md` that **shipped code in this repository** overrides Figma or external docs when they conflict; KB entries should be updated to match code.

---

## File and folder changes

| Action | Path | Notes |
|--------|------|-------|
| Create | `packages/knowledge/package.json` | `@momentum-design/knowledge`, `private: true`, noop lifecycle scripts |
| Create | `packages/knowledge/README.md` | Purpose, IA map, precedence, text-only / no-embed policy, how to add a file |
| Create | `packages/knowledge/tokens/README.md` | Section index (stub welcome text) |
| Create | `packages/knowledge/assets/README.md` | Section index (stub) |
| Create | `packages/knowledge/components/README.md` | Section index (stub) |
| Create | `packages/knowledge/patterns/README.md` | Section index (stub) |
| Create | `packages/knowledge/tools/README.md` | Section index (stub) |
| Create | `packages/knowledge/tokens/overview.md` | Short stub: what belongs here; pointer to `packages/assets/tokens` for code |
| Create | `packages/knowledge/assets/overview.md` | Short stub; pointer to `packages/assets/*` |
| Create | `packages/knowledge/components/overview.md` | Short stub; pointer to `packages/components` |
| Create | `packages/knowledge/patterns/overview.md` | Short stub; what “patterns” means in this KB |
| Create | `packages/knowledge/tools/overview.md` | Short stub; pointer to `packages/tools` |

---

## Phased task sequence

### Phase 1 — Package shell and conventions

- [x] Add `packages/knowledge/package.json` with noop `build`, `analyze`, `clean`, `test` scripts — S — unblocks root `yarn build` / `analyze` / `clean` / `test`
- [x] Write `packages/knowledge/README.md` (IA diagram or bullet tree, precedence rule, text-only policy, filename conventions, pointer to monorepo roots) — M

### Phase 2 — Folder tree and stubs

- [x] Create five section folders with `README.md` index stubs — S
- [x] Add one `overview.md` per section with 3–6 sentences and repo pointers — M

### Phase 3 — Discoverability (optional)

- [ ] Add a short “Knowledge base (in-repo)” bullet or subsection to the root `README.md` linking to `packages/knowledge/README.md` — S — [deferrable]

---

## Risk flags and open technical questions

- **No-op scripts:** If the team later adds lint or link checking for markdown, replace echoes with real checks; until then, CI behavior is unchanged except for an extra workspace.
- **Duplicate narrative:** `scratch/` and `packages/documentation` may overlap with KB topics; phase 1 does not require migration—only note in KB README that `scratch/` is interim and may be consolidated later.
- **Open question:** Whether to add `publish:npmjs` noop for consistency with other workspaces—only needed if automation expects it on every workspace; validate against `yarn publish:npmjs` / automation scripts before adding.

---

## Out of scope

Per PRD: MCP, momentum.design migration, embedded images or Figma visuals, embeddings/sync, formal governance. No Astro or content-collection wiring in this plan.
