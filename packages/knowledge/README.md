# @momentum-design/knowledge

In-repository **markdown knowledge base** for the Momentum Design System. It is written for **both humans and AI readers**: stable paths, plain text, and clear section boundaries.

Published product docs remain at **[momentum.design](https://momentum.design)** and in [`packages/documentation/`](../documentation/). This package does **not** replace them; it aggregates guidance and pointers in one tree for the monorepo.

## Source of truth

When narrative guidance, Figma, or external docs disagree with **shipped code in this repository**, **code wins**. Designers and engineers update KB prose to match the repo. Use this package to explain intent and link to implementation; do not contradict APIs, element names, or token outputs that the packages actually ship.

## Content rules (phase 1)

- **Text only** in markdown. Do not embed images, diagrams, or Figma previews. You may link to URLs (including Figma) when helpful.
- **Filenames:** use `kebab-case.md` for topic files (e.g. `spacing-scale.md`).
- **Front matter:** optional for a later phase; not required yet.

## Information architecture

```text
packages/knowledge/
├── README.md           ← you are here
├── tokens/             ← token naming, themes, consumption (see packages/assets/tokens for builds)
├── assets/             ← guidance for icons, fonts, illustrations, etc. (not binary assets)
├── components/         ← @momentum-design/components usage and notes
├── patterns/           ← cross-component UX and composition
└── tools/              ← CLIs and pipelines (md-builder, md-token-builder, …)
```

Each section uses a single `README.md` as both the folder index (shown by GitHub and editors) and the section overview.

## Monorepo pointers

| Area | Code / packages |
|------|------------------|
| Tokens | `packages/assets/tokens/`, `@momentum-design/tokens` |
| Other assets | `packages/assets/*` |
| Web components | `packages/components/`, `@momentum-design/components` |
| Docs site (app) | `packages/documentation/` |
| Build tools | `packages/tools/` |

## Interim docs elsewhere

[`scratch/`](../../scratch/) holds interim markdown until a fuller docs story exists. Prefer adding **durable** design-system knowledge here under `packages/knowledge/`; we may consolidate or migrate from `scratch/` later.

## Adding a new page

1. Pick the section (tokens, assets, components, patterns, tools).
2. Add `your-topic.md` with `kebab-case` name, or extend that section’s `README.md` if it is a small addition.
3. Link to repo paths or npm scope (`@momentum-design/...`) where useful.
