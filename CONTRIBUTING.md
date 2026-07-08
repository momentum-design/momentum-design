# Contributing

This package is currently under development. Contributions to this project will be strictly reviewed at the owner's disgression until this project has well-defined contribution details. Once those details are available, the contribution model will contain helpful details to assist in making active contributions to this project.

## Tech Stack

- Typescript, Javascript
- Node.js
- React
- Jest
- Lit
- Playwright
- Storybook

Specific tech:

- [Figma Plugin Development](https://www.figma.com/plugin-docs/)

More specific information is provided in each sub-package.

## First time setup

1. Fork the repository
2. Clone the forked repository
    ```
    git clone https://github.com/{username}/momentum-design.git
    ```
3. Navigate to the root of the repo.
    ```
    cd momentum-design
    ```
4. Setup upstream remote references in your local
    ```
    git remote add upstream https://github.com/momentum-design/momentum-design.git
    ```
5. Verify that your forked repos are set up with the correct remote references.
    Running `git remote -v` in your repository directory should return settings like these:

    ```bash
    origin git@github.com:{username}/momentum-design.git (fetch)
    origin git@github.com:{username}/momentum-design.git (push)
    upstream git@github.com:momentum-design/momentum-design.git (fetch)
    upstream git@github.com:momentum-design/momentum-design.git (push)
    ```
6. Run `yarn` in the root of the repo
7. Run `yarn build` in the root of the repo

## Executing scripts in the packages

This is a mono-repo (using yarn workspaces), to run scripts in each sub-package (like building, testing, etc.), run `yarn <PACKAGE_NAME> <SCRIPT_NAME>` from the root of the repository.

For example,
    to build the icons package - `yarn icons build`
    to run the builder tests - `yarn builder test`

## Create a PR

Steps for creating a PR (after [First time setup](#first-time-setup) has been done):

1. Make sure your main branch is up to date with the remote, by executing `git pull upstream main -ff` and then push.
2. Create a new branch and make your changes.
3. Commit your changes, using [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary).
4. Push your branch to the origin remote
5. Create a PR against base repository / main branch on Github
6. **Important: Add a proper description and title to the PR - it should be formatted, human-readable and also not include the description template text anymore.**
7. Set the *validated* label on the PR to kick off the pipeline if you have the access rights for it.

## Knowledge base

Structured markdown topics capture design-system knowledge — usage, accessibility, content standards, and patterns. Topics are **co-located with the code they describe** and indexed for both humans and AI agents.

**Canonical contract:** [Knowledge Base Schema](config/knowledge-base/SCHEMA.md)

### Three tiers

| Tier | Scope | Location | Today |
| --- | --- | --- | --- |
| **1** | Design system (cross-cutting) | `knowledge-base/<topic>.md` | See [index.root.json](knowledge-base/index.root.json) |
| **2** | Package-wide | `packages/<package>/knowledge-base/<topic>.md` | See [index.packages.json](knowledge-base/index.packages.json) |
| **3** | Component-specific | `packages/components/src/components/<component>/knowledge-base/<component>.component.md` | See [index.components.json](knowledge-base/index.components.json) |

**Rule of thumb:** Put knowledge at the narrowest tier that owns it. Link up — never duplicate.

### Folder layout

```text
knowledge-base/
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

### Topic file anatomy

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

**Example to read:** [button.component.md](packages/components/src/components/button/knowledge-base/button.component.md)

### Finding topics

The index is **sharded by tier** into three JSON files. Search the narrowest shard first:

| Looking for… | Read |
| --- | --- |
| A specific component | [index.components.json](knowledge-base/index.components.json) → filter by `component` |
| Package-level guidance | [index.packages.json](knowledge-base/index.packages.json) → filter by `owner` |
| Cross-cutting DS guidance | [index.root.json](knowledge-base/index.root.json) |

Each entry has `path`, `title`, and `summary` — open `path` for full content.

If the narrowest shard misses, walk outward: **component → package → root**. First hit is canonical.

### Core rules

1. **One pattern everywhere** — `knowledge-base/<topic>.md`, flat layout
2. **Co-located with ownership** — lives where the subject lives
3. **No duplication** — one canonical location; link elsewhere
4. **Placeholders need frontmatter** — empty body is OK; don't delete stubs
5. **Human review gate** — AI-drafted content needs reviewer sign-off before merge

Full rule definitions: [SCHEMA.md — Rules](config/knowledge-base/SCHEMA.md#rules)

### Contributing to the knowledge base

1. Pick the tier (see table above)
2. Search the index shard — link if topic already exists elsewhere
3. Create or edit the `.md` file at that tier
4. For prose standards, read [content-guidelines.md](knowledge-base/content-guidelines.md) when present at Tier 1
5. Validate and regenerate the index:

```bash
yarn knowledge-base:validate   # schema + index checks
yarn knowledge-base:index      # regenerate index.*.json
```

1. Commit both the `.md` file and updated `index.*.json` shards

Full step-by-step: [momentum-contributing-to-knowledge-base skill](.github/skills/momentum-contributing-to-knowledge-base/SKILL.md)

### CI enforcement

- Pre-commit: KB files trigger `yarn knowledge-base:validate`
- CI: `yarn analyze:root` includes the same check
- Stale or invalid index shards **fail the build**

### Config reference

| File | Purpose |
| --- | --- |
| [SCHEMA.md](config/knowledge-base/SCHEMA.md) | Structural contract (tiers, rules, index) |
| [frontmatter.config.json](config/knowledge-base/content/frontmatter.config.json) | Required frontmatter fields |
| [body.config.json](config/knowledge-base/content/body.config.json) | Body heading conventions |
| [topic-constraints.config.json](config/knowledge-base/topic-constraints.config.json) | Allowed Tier 3 filenames |
| [index.schema.json](config/knowledge-base/index.schema.json) | Index JSON shape |

### Quick start checklist

- [ ] Read [SCHEMA.md](config/knowledge-base/SCHEMA.md) (5 min)
- [ ] Browse [index.components.json](knowledge-base/index.components.json) for your component
- [ ] Open [button.component.md](packages/components/src/components/button/knowledge-base/button.component.md) as a reference
- [ ] Run `yarn knowledge-base:validate` before opening a PR

## PR Reviews

### Asking for Review

When asking for a review on a PR, consider the following:

- Pipeline should pass before asking for review
- Every comment on a PR should be answered / addressed
- If there is disagreement or discussions, please stay respectful and try to resolve the issues together
- Comments from reviewer should always be resolved by reviewer
- Do not dismiss anyones review/re-review

### Reviewing a PR

When reviewing/re-reviewing a PR, consider the following:

- It is encouraged to use [conventional comments](https://conventionalcomments.org/)
- Use "Request changes" or "Approve" option in Github ("Adding comments" should be used when a PR shouldn't be blocked, but feedback should still be provided)
- Check that the PR should include unit or e2e test changes for all the implementation changes
- Every PR should be checked out locally, ran and tested manually.
- Check for breakages due to changing dependencies (like if u update a dependecy, you need a more thorough test)
- Conventions & common coding standards should be pointed out on reviews.
- Maintainability of the changes should be checked (like is it extensible / flexible / etc.)
- Check if similar areas of code need changes or code can be reused from these similar areas
- In case of a longer time off / being not available, consider to finish/handover your review.
