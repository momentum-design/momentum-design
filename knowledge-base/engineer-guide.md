---
title: Engineer guide
summary: Engineer onboarding for the Momentum knowledge base — tiers, folder layout, index lookup, contributing workflow, and CI enforcement.
tier: 1
---

**Primary audience:** Engineering.

**Canonical contract:** [Knowledge Base Schema](../config/knowledge-base/SCHEMA.md)

## What it is

Structured markdown topics that capture design-system knowledge — usage, accessibility, content standards, and patterns. Topics are **co-located with the code they describe** and indexed for both humans and AI agents.

## Three tiers

| Tier | Scope | Location | Today |
| --- | --- | --- | --- |
| **1** | Design system (cross-cutting) | `knowledge-base/<topic>.md` | See [index.root.json](./index.root.json) |
| **2** | Package-wide | `packages/<package>/knowledge-base/<topic>.md` | See [index.packages.json](./index.packages.json) |
| **3** | Component-specific | `packages/components/src/components/<component>/knowledge-base/<component>.component.md` | See [index.components.json](./index.components.json) |

**Rule of thumb:** Put knowledge at the narrowest tier that owns it. Link up — never duplicate.

## Folder layout

```text
knowledge-base/
├── content-guidelines.md          ← Tier 1 (design-system-wide)
├── engineer-guide.md              ← Tier 1 (this file)
├── index.root.json                ← generated index, Tier 1
├── index.packages.json            ← generated index, Tier 2
└── index.components.json          ← generated index, Tier 3

packages/components/src/components/button/
├── button.component.ts
├── button.stories.ts
└── knowledge-base/
    ├── button.component.md        ← Tier 3 topic (flat — no subfolders)
    └── images/                    ← optional asset folder only
        └── anatomy.png
```

**Iron law:** Topic files are **flat** inside `knowledge-base/`. The only allowed subfolder is `images/` for assets. No nested topic folders like `knowledge-base/a11y/contrast.md`.

## Topic file anatomy

Every file starts with YAML frontmatter (enforced):

```yaml
---
title: Button
summary: Usage, guidelines, and accessibility for the mdc-button component.
tier: 3
component: button
---
```

**Required fields:** `title`, `summary`, `tier`

**Tier 3 also requires:** `component`

**Tier 3 filename:** `{component}.component.md` only — no custom topic names

**Example to read:** [`packages/components/src/components/button/knowledge-base/button.component.md`](../packages/components/src/components/button/knowledge-base/button.component.md)

## Finding topics

The index is **sharded by tier** into three JSON files. Search the narrowest shard first:

| Looking for… | Read |
| --- | --- |
| A specific component | [index.components.json](./index.components.json) → filter by `component` |
| Package-level guidance | [index.packages.json](./index.packages.json) → filter by `owner` |
| Cross-cutting DS guidance | [index.root.json](./index.root.json) |

Each entry has `path`, `title`, and `summary` — open `path` for full content.

If the narrowest shard misses, walk outward: **component → package → root**. First hit is canonical.

## Core rules

1. **One pattern everywhere** — `knowledge-base/<topic>.md`, flat layout
2. **Co-located with ownership** — lives where the subject lives
3. **No duplication** — one canonical location; link elsewhere
4. **Placeholders need frontmatter** — empty body is OK; don't delete stubs
5. **Human review gate** — AI-drafted content needs reviewer sign-off before merge

Full rule definitions: [SCHEMA.md — Rules](../config/knowledge-base/SCHEMA.md#rules)

## Contributing workflow

1. Pick the tier (see table above)
2. Search the index shard — link if topic already exists elsewhere
3. Create or edit the `.md` file at that tier
4. For prose standards, read [content-guidelines.md](./content-guidelines.md)
5. Validate and regenerate the index:

```bash
yarn knowledge-base:validate   # schema + index checks
yarn knowledge-base:index      # regenerate index.*.json
```

1. Commit both the `.md` file and updated `index.*.json` shards

Full step-by-step: [momentum-contributing-to-knowledge-base skill](../.github/skills/momentum-contributing-to-knowledge-base/SKILL.md)

## CI enforcement

- Pre-commit: KB files trigger `yarn knowledge-base:validate`
- CI: `yarn analyze:root` includes the same check
- Stale or invalid index shards **fail the build**

## Config reference

| File | Purpose |
| --- | --- |
| [SCHEMA.md](../config/knowledge-base/SCHEMA.md) | Structural contract (tiers, rules, index) |
| [frontmatter.config.json](../config/knowledge-base/content/frontmatter.config.json) | Required frontmatter fields |
| [body.config.json](../config/knowledge-base/content/body.config.json) | Body heading conventions |
| [topic-constraints.config.json](../config/knowledge-base/topic-constraints.config.json) | Allowed Tier 3 filenames |
| [index.schema.json](../config/knowledge-base/index.schema.json) | Index JSON shape |

## Quick start checklist

- [ ] Read [SCHEMA.md](../config/knowledge-base/SCHEMA.md) (5 min)
- [ ] Browse [index.components.json](./index.components.json) for your component
- [ ] Open [button.component.md](../packages/components/src/components/button/knowledge-base/button.component.md) as a reference
- [ ] Run `yarn knowledge-base:validate` before opening a PR
