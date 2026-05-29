# Knowledge Base Schema

**Golden Rule**: The Momentum Design knowledge base follows a single, repeatable pattern:
every level that owns knowledge has a `knowledge-base/` folder containing
flat markdown files.

**Iron Law**: There are no nested topic subfolders. All topic documentation is flat within each `knowledge-base/` folder. The only permitted subdirectories are asset folders (currently `images/`), which hold non-topic files referenced by topic markdown.

Example:

```
packages/components/src/components/button/knowledge-base/accessibility.md         ✅
packages/components/src/components/button/knowledge-base/images/anatomy.png       ✅ (asset folder)
packages/components/src/components/button/knowledge-base/a11y/contrast.md         ❌ (nested topic)
```

This file is the contract for knowledge-base tiers and rules. Update this
file only when tiers or rules change.

## Rules

1. **One pattern everywhere.** `knowledge-base/<topic>.md` at every level
   that owns a topic. No alternative naming (`*.guidelines.md` etc.) and no
   nested topic folders inside `knowledge-base/`, except image asset folders
   (for example `knowledge-base/images/...`).
   Example: `knowledge-base/accessibility.md`, not `knowledge-base/a11y.guidelines.md`.
2. **Co-located with ownership.** The guideline lives at the level that owns
   the subject. Design-system-wide topics live at the repo root.
   Package-wide topics live in the package. Component-specific topics live
   in the component.
   Example: button-specific anatomy → `packages/components/src/components/button/knowledge-base/anatomy.md`.
3. **No duplication.** Each topic has exactly one canonical location. Other
   levels link to it; they do not copy it.
   Example: a single repo-root `knowledge-base/accessibility.md` referenced from package and component files instead of being copied into each.
4. **Placeholders require frontmatter.** A topic file may have no body, but
   it must still declare the required frontmatter (see
   [`frontmatter.config.json`](./frontmatter.config.json)) — typically with
   `status: planned`. Do not delete placeholders to "clean up".
5. **Human review gate.** When an AI agent drafts knowledge-base content,
   a human reviewer must confirm the content before it is merged. The AI
   writes the theory; the human signs it off.

## Structure

### Tier 1 — Design system (repo root)

High-level guidelines that describe the design system as a whole live at:

```
knowledge-base/<topic>.md
```

### Tier 2 — Package

Every package has it's own knowledge-base folder for guidelines that are related to that specific package:

```
packages/<package>/knowledge-base/<topic>.md
```

### Tier 3 — Component

Every component has its own `knowledge-base/` folder co-located with its
source:

```
packages/components/src/components/<component>/knowledge-base/<topic>.md
```

**Iron Law**: Tier 3 topic names are constrained. The canonical list of allowed Tier 3
topic file names — and the scope of each — lives in
[`topic-constraints.config.json`](./topic-constraints.config.json) and is enforced by the index
generator. Consult that file for the authoritative names and descriptions;
do not invent new Tier 3 topic names without updating it.

Tier 1 and Tier 2 topic file names are **not** constrained by this list —
they may use any descriptive `kebab-case` name appropriate to the scope.

Image assets may be placed in nested folders (for example
`knowledge-base/images/...`).

## Frontmatter

Every topic file must begin with YAML frontmatter. The required fields,
their value constraints, and any tier-specific overrides are defined in
[`frontmatter.config.json`](./frontmatter.config.json) — that file is the
source of truth (the generator reads it directly). Always consult it for
the current contract rather than relying on a copy here.

Example:

```markdown
---
title: Accessibility
summary: Keyboard, screen reader, focus, and ARIA expectations for the button component.
status: stable
tier: 3
owner: button
component: button
---
```

## Index

The repo-wide knowledge-base index lives at
[`knowledge-base/index.json`](../../knowledge-base/index.json). It is
**generated** by [`scripts/knowledge-base/generate-index.js`](../../scripts/knowledge-base/generate-index.js)
from the frontmatter of every topic file across all tiers. Do not hand-edit
it; the file carries a `generatedFrom` field and is validated against
[`config/knowledge-base/index.schema.json`](./index.schema.json).

**Golden Rule**: Agents should consume the index as the single discovery entry point:

1. Read `knowledge-base/index.json`.
2. Filter by `tier`, `owner`, `status`, or `component`.
3. Fetch the entry's `path` for full content.

The index is kept in sync by:

- Pre-commit: `yarn lint:staging` runs `yarn knowledge-base:index:check` whenever a KB file is staged.
- CI: `yarn analyze:root` runs the same check; stale or invalid KB content fails the build.

To regenerate after editing or adding topics, run:

```
yarn knowledge-base:index
```

and commit the updated `knowledge-base/index.json`.

## Non-goals

- The format and content of each topic file (headings, prose style, depth)
  remain out of scope. Only the frontmatter contract above and the index
  described in [Index](#index) are enforced.
- The workflow for **adding new** or **updating existing** topic files is
  not defined here. That workflow is owned by the
  [`contributing-to-knowledge-base` skill](../../.github/skills/contributing-to-knowledge-base/SKILL.md);
  this schema only defines the structural rules the skill enforces.
