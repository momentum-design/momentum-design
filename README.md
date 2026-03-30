# momentum-design

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE) ![state: alpha](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

## Overview

**Momentum Design** is a monorepo that serves as the single source of truth for design system resources: tokens, visual assets, and UI components. Everything here is intended to stay aligned with the same design language so product teams can ship consistent experiences.

For a full picture of our components, tokens, and assets—including how they look and behave—visit **[momentum.design](https://momentum.design)**.

Published packages are released under the **`@momentum-design` scope on npm**. You can browse them on the [npm registry](https://www.npmjs.com/search?q=scope%3Amomentum-design) (search for `@momentum-design`). For install commands, version pins, and non-npm consumption options, see the **[Consumption](#consumption)** section below and the detailed [CONSUMPTION.md](./CONSUMPTION.md) guide.

---

## What's available

The repository is organized into four areas: **Assets**, **Components**, **Documentation**, and **Tools**.

### Assets

These packages ship static and generated artifacts (JSON, CSS, fonts, SVGs, etc.) for use in applications and design tooling. They are versioned and published independently so you can depend only on what you need.

| Package | Purpose |
| -------- | ------- |
| [**@momentum-design/tokens**](https://www.npmjs.com/package/@momentum-design/tokens) | Design tokens (themes, typography, elevation, component-related outputs) for color, spacing, type, and related decisions across platforms. |
| [**@momentum-design/icons**](https://www.npmjs.com/package/@momentum-design/icons) | Icon font and related data for UI iconography. |
| [**@momentum-design/illustrations**](https://www.npmjs.com/package/@momentum-design/illustrations) | Illustration assets for marketing and product surfaces. |
| [**@momentum-design/fonts**](https://www.npmjs.com/package/@momentum-design/fonts) | Font files and packaging for typographic use with Momentum. |
| [**@momentum-design/brand-visuals**](https://www.npmjs.com/package/@momentum-design/brand-visuals) | Brand visual assets (logos, marks, and related imagery). |
| [**@momentum-design/animations**](https://www.npmjs.com/package/@momentum-design/animations) | Animation assets (e.g. Lottie or related payloads) for motion in the UI. |
| [**@momentum-design/utils**](https://www.npmjs.com/package/@momentum-design/utils) | Shared utilities that support consuming or working with other `@momentum-design` packages. |

Source for each asset library lives under [`packages/assets/`](./packages/assets/).

### Components

[**@momentum-design/components**](https://www.npmjs.com/package/@momentum-design/components) is a **Web Component** library built with **Lit**. Because Web Components are a web standard, you can use these elements in **any web stack**—plain HTML, React, Vue, Angular, or server-rendered apps—without being tied to a single framework. The package also exposes **React** entrypoints for teams that prefer idiomatic React usage.

Source, Storybook, and tests live in [`packages/components/`](./packages/components/).

### Documentation

Product documentation for Momentum—including components, tokens, and assets—is published at **[momentum.design](https://momentum.design)**. That site is the best place to explore usage, examples, and guidance.

The documentation site in this repo is built from [`packages/documentation/`](./packages/documentation/) (Astro-based). If you are contributing to docs or running them locally, work in that package; readers should still rely on **momentum.design** as the canonical URL.

### Tools

The [`packages/tools/`](./packages/tools/) folder holds **internal CLI packages and supporting libraries** used to build, validate, and export assets from this monorepo. They are not the primary way most applications consume Momentum; instead, they power the pipelines that produce the published `@momentum-design/*` packages.

| Tool / package | Role |
| -------------- | ---- |
| **Builder** (`@momentum-design/builder`, CLI `md-builder`) | Transforms source definitions into distributable asset outputs (e.g. icons, fonts)—orchestrates SVG/font tooling and Style Dictionary–style flows. |
| **Token builder** (`@momentum-design/token-builder`, CLI `md-token-builder`) | Builds token packages from source; uses Style Dictionary and Tokens Studio–compatible transforms. |
| **Automation** (`@momentum-design/automation`, CLI `md-automation`) | Monorepo automation tasks (archiving, packaging workflows, and related CLI operations). |
| **Common** (`@momentum-design/common`) | Shared code used by the other tool packages. |
| **Telemetry** (`@momentum-design/telemetry`) | Telemetry hooks for tooling (usage and operational signals from build/automation CLIs). |
| **Figma plugin — assets export** (`@momentum-design/figma-plugin-assets-export`) | Figma plugin under `packages/tools/figma-plugins/assets-export` for exporting assets from Figma into the repo’s asset pipelines. |
| **Storybook addon — code preview** (`packages/tools/storybook-addon-code-preview`) | Custom Storybook addon used in component documentation and development workflows. |

---

## Consumption

How you install depends on whether you use **npm** (or Yarn, pnpm, etc.) or need **raw files** without a package manager.

### With npm (or compatible package managers)

Add the packages you need to `package.json` with the versions your project requires. Typical usage is one or more of:

- [**@momentum-design/components**](https://www.npmjs.com/package/@momentum-design/components) — Web Components (and React wrappers where applicable).
- [**@momentum-design/animations**](https://www.npmjs.com/package/@momentum-design/animations)
- [**@momentum-design/brand-visuals**](https://www.npmjs.com/package/@momentum-design/brand-visuals)
- [**@momentum-design/fonts**](https://www.npmjs.com/package/@momentum-design/fonts)
- [**@momentum-design/icons**](https://www.npmjs.com/package/@momentum-design/icons)
- [**@momentum-design/illustrations**](https://www.npmjs.com/package/@momentum-design/illustrations)
- [**@momentum-design/tokens**](https://www.npmjs.com/package/@momentum-design/tokens)
- [**@momentum-design/utils**](https://www.npmjs.com/package/@momentum-design/utils)

Each package’s `dist/` layout may differ; refer to **momentum.design** and package READMEs for import paths and frameworks-specific notes.

### Without npm: CDN-style access via unpkg

For quick experiments or non-Node pipelines, you can fetch published files from **[unpkg](https://unpkg.com)** (files as served from npm). Examples for theme token JSON:

```text
# dark-stable theme (JSON)
https://unpkg.com/@momentum-design/tokens/dist/json/theme/webex/dark-stable.json

# light-stable theme (JSON)
https://unpkg.com/@momentum-design/tokens/dist/json/theme/webex/light-stable.json
```

Replace the package name and path to match the asset and version you need. Pinning a version in the URL (`/package@version/path`) is recommended for production.

### Without npm: full package tarball

To download the **entire** contents of a published package (for example all files under `@momentum-design/tokens`), you can pull the `.tgz` from the registry and extract it. `curl` and `tar` are available on macOS and on [recent Windows](https://learn.microsoft.com/en-us/virtualization/community/team-blog/2017/20171219-tar-and-curl-come-to-windows) builds.

```bash
# Example: download a specific version of @momentum-design/tokens (adjust version and package name)
curl "https://registry.npmjs.org/@momentum-design/tokens/-/tokens-0.0.46.tgz" --output tokens.tgz
tar -xf tokens.tgz
```

Swap `@momentum-design/tokens` / `tokens-0.0.46.tgz` for the scope, package tarball name, and version you want.

More detail and edge cases are documented in [CONSUMPTION.md](./CONSUMPTION.md).

---

## Contributing

This project is under active development. Contributions are welcome; changes are reviewed for quality and alignment with Momentum Design goals. Until contribution policies are fully expanded, expect maintainers to exercise discretion on what merges and when.

### Tech stack

Contributors typically work with:

- **TypeScript** and **JavaScript**
- **Node.js** (see root `engines` in `package.json`)
- **React** (documentation and some tooling surfaces)
- **Lit** (Web Components)
- **Jest** and **Playwright** (tests)
- **Storybook** (component development)

Figma-related work may use the [Figma plugin API](https://www.figma.com/plugin-docs/). Individual packages may document additional stack details.

### First-time setup

1. Fork the repository and clone your fork.
2. Add the upstream remote:  
   `git remote add upstream https://github.com/momentum-design/momentum-design.git`
3. Confirm remotes with `git remote -v` (`origin` → your fork, `upstream` → this repo).
4. From the repo root, run **`yarn`** then **`yarn build`** so workspaces resolve and artifacts build.

### Running package scripts

This is a **Yarn workspaces** monorepo. From the repository root, run:

```bash
yarn <workspace-alias> <script>
```

Examples:

- `yarn icons build` — build the icons package  
- `yarn builder test` — run tests for the builder tool  

Workspace names match the shortcuts in the root `package.json` (e.g. `components`, `tokens`, `docs`).

### Pull requests

1. Update your local `main` from upstream (`git pull upstream main --ff-only`) and push to your fork as needed.
2. Create a branch, implement changes, and commit using **[Conventional Commits](https://www.conventionalcommits.org/)**.
3. Push to `origin` and open a PR against this repository’s default branch.
4. Use a clear **title** and **description** (replace any template boilerplate with real content).
5. If you have access, add the **`validated`** label to trigger the pipeline as documented in the team workflow.

### Reviews

**Authors:** Ensure CI passes before requesting review; respond to every comment; stay respectful in discussion; only reviewers should resolve review threads; do not dismiss others’ reviews without agreement.

**Reviewers:** Prefer **[Conventional Comments](https://conventionalcomments.org/)**; use **Request changes** or **Approve** when appropriate; require tests when behavior changes; check out the branch locally; watch for dependency upgrades that need extra validation; consider maintainability and reuse; hand off or finish reviews if you will be away.

Full step-by-step instructions remain in [CONTRIBUTING.md](./CONTRIBUTING.md).

### Contacts

For questions about Momentum Design or contributing to this repository, reach out to:

- **Trip Carroll**
- **Christoph Scheffauer**
