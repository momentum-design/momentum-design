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

[**@momentum-design/components**](https://www.npmjs.com/package/@momentum-design/components) is a **Web Component** library built with **Lit**(https://lit.dev/).

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
