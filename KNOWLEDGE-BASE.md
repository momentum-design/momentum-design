# Knowledge Base

**Main audience:** Consuming engineers, designers, and product managers.

**Not an audience:** Contributing engineers — repo contribution guidance lives in [CONTRIBUTING.md](CONTRIBUTING.md).

**Canonical contract:** [Knowledge Base Schema](config/knowledge-base/SCHEMA.md)

## What it is

Structured markdown topics that capture design-system knowledge — usage, accessibility, content standards, and patterns. Topics are **co-located with the code they describe** and indexed for both humans and AI agents.

## What belongs here

The knowledge base documents the **distributables** — the assets, components, and patterns that consumers install and use. If it helps someone use what the design system ships, it belongs here.

**Include:**

- Documentation of assets, components, and design patterns — what they are, when to use them, and how
- Skills that support consuming the design system

**Do not include:**

- Engineering processes such as contribution workflows, PR reviews, or releases — these live in [CONTRIBUTING.md](CONTRIBUTING.md)
- Repo contributor guides — these live in [CONTRIBUTING.md](CONTRIBUTING.md) and the relevant `AGENTS.md`
- Documentation of tooling code — this lives with the tooling package it describes

**Rule of thumb:** If it documents *how to use what we ship*, it belongs in the knowledge base. If it documents *how we build or operate the repo*, it does not.

## Three tiers

| Tier | Scope | Location | Today |
| --- | --- | --- | --- |
| **1** | Design system (cross-cutting) | `knowledge-base/<topic>.md` | See [index.root.json](knowledge-base/index.root.json) |
| **2** | Package-wide | `packages/<package>/knowledge-base/<topic>.md` | See [index.packages.json](knowledge-base/index.packages.json) |
| **3** | Component-specific | `packages/components/src/components/<component>/knowledge-base/<component>.component.md` | See [index.components.json](knowledge-base/index.components.json) |

**Rule of thumb:** Put knowledge at the narrowest tier that owns it. Link up — never duplicate.

## Folder layout

```text
knowledge-base/
├── content-guidelines.md          ← Tier 1 (design-system-wide)
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

Every topic file starts with YAML frontmatter (enforced):

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

**Example to read:** [`packages/components/src/components/button/knowledge-base/button.component.md`](packages/components/src/components/button/knowledge-base/button.component.md)

## Finding topics

The index is **sharded by tier** into three JSON files. Search the narrowest shard first:

| Looking for… | Read |
| --- | --- |
| A specific component | [index.components.json](knowledge-base/index.components.json) → filter by `component` |
| Package-level guidance | [index.packages.json](knowledge-base/index.packages.json) → filter by `owner` |
| Cross-cutting DS guidance | [index.root.json](knowledge-base/index.root.json) |

Each entry has `path`, `title`, and `summary` — open `path` for full content.

If the narrowest shard misses, walk outward: **component → package → root**. First hit is canonical.

## Core rules

1. **One pattern everywhere** — `knowledge-base/<topic>.md`, flat layout
2. **Co-located with ownership** — lives where the subject lives
3. **No duplication** — one canonical location; link elsewhere
4. **Placeholders need frontmatter** — empty body is OK; don't delete stubs
5. **Human review gate** — AI-drafted content needs reviewer sign-off before merge

Full rule definitions: [SCHEMA.md — Rules](config/knowledge-base/SCHEMA.md#rules)

## Contributing

To add or update a topic, use the [Contributing to Momentum knowledge base](.github/skills/momentum-contributing-to-knowledge-base/SKILL.md) skill — it owns the full workflow, structure, and validation rules.

The [Knowledge Base Schema](config/knowledge-base/SCHEMA.md) is the canonical contract for tiers, frontmatter, and the index; validation runs on pre-commit and in CI.
