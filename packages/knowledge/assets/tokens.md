# Tokens (`@momentum-design/tokens`)

## What it is

**Design tokens** as build outputs in several **platform formats**: CSS variables, **JSON** (including **minimal** JSON), **SCSS**, **Android XML**, **iOS Swift** classes, and related bundles. Source tokens and Style Dictionary–style configs live in [`packages/assets/tokens`](../../assets/tokens); builds use **`md-token-builder`** (multiple configs: core, typography, elevation, additional themes, plus a **components CSS** script).

This page summarizes the **asset package**; narrative-only token guidance may also grow under [`../tokens/`](../tokens/) in this knowledge base.

## Install (npm)

```bash
npm install @momentum-design/tokens
```

- Registry: [npmjs.com/package/@momentum-design/tokens](https://www.npmjs.com/package/@momentum-design/tokens)

## What ships in `dist/`

Typical top-level folders:

- `dist/css/` — CSS token artifacts
- `dist/json/`, `dist/json-minimal/` — JSON token sets (including theme groupings such as `json/theme/...`)
- `dist/scss/` — SCSS variables / maps
- `dist/ios/`, `dist/ios-webex/` — Apple platform outputs
- `dist/resources/` — Android XML and related resources

The engineering team controls supported formats; inspect the package for the exact tree at your pinned version.

## How to use

- **Web:** Import or load CSS/SCSS/JSON according to your stack (design tokens as data vs generated stylesheets).
- **Mobile:** Consume `ios` / `resources` outputs per platform conventions.
- **CDN / no package manager:** Use **unpkg** (or similar) with explicit **version** in the URL. Example pattern from repo [CONSUMPTION.md](../../../CONSUMPTION.md):

  `https://unpkg.com/@momentum-design/tokens@<version>/dist/json/theme/webex/dark-stable.json`

  Adjust path and version for your theme and environment.

## See also

- Package README: [`packages/assets/tokens/README.md`](../../assets/tokens/README.md)
- [CONSUMPTION.md](../../../CONSUMPTION.md) (unpkg + tarball)
- Knowledge: [tokens section overview](../tokens/README.md)
