---
title: Fonts
summary: Install and load the Momentum typeface from @momentum-design/fonts — Inter as a variable font registered under the family name "Momentum" — and how it connects to typography tokens.
tier: 2
---

# Fonts

Package-level guidance for `@momentum-design/fonts`, the npm package that ships the Momentum typeface files and the `@font-face` declaration products need to render Momentum UI correctly.

**Primary audience:** Product engineers consuming Momentum assets, and designers who need to know which typeface the system uses and how it is configured.

## What this package owns

`@momentum-design/fonts` provides **the typeface files** the design system loads in the browser:

- **Inter** — the primary Momentum typeface, delivered as a single variable font file (`Inter.var.woff2`).
- `fonts.css` — registers the face under the CSS family name `Momentum` so products and tokens can refer to one stable name.
- `manifest.json` — lists the built asset paths for tooling and loaders.

For more information on typography styling, sizing, and weights, review the tokens/knowledge base guideline.

## The Momentum typeface

Momentum uses **Inter** as its primary UI typeface. The package exposes it through a single `@font-face` rule that registers the family as `Momentum`:

```css
@font-face {
  font-family: "Momentum";
  src: url("../inter/Inter.var.woff2") format("woff2");
  font-style: normal;
  font-display: swap;
  font-feature-settings: "ss02" on;
  font-weight: 1 1000;
}
```

Key details:

- **Variable font** — one file covers the full weight range (`font-weight: 1 1000`), so regular, medium, and bold styles resolve without separate files.
- `font-display: swap` — text renders immediately with a fallback while the font loads, then swaps when ready. Avoid hiding text behind an invisible font (`font-display: block` or `optional`) unless you have a deliberate reason.
- **OpenType feature** `ss02` — enabled by default in the Momentum registration. This is part of the approved Inter configuration for Momentum and related to accessibility rendering of the typeface; do not strip it when re-hosting the font.
- **Fallback stack** — when tokens resolve `font.family.primary`, the stack is `Momentum, Inter, Arial, Helvetica Neue, Helvetica, sans-serif`. Loading `fonts.css` ensures `Momentum` resolves to the bundled Inter file; the remaining names are system fallbacks.

Do not substitute a different typeface, self-host a different Inter build, or register a competing `@font-face` under the name `Momentum`. That breaks visual parity with Figma, Storybook, and Momentum components.

## Installation

Add the package to your project:

```bash
npm install @momentum-design/fonts

# or

yarn add @momentum-design/fonts
```

Pin the version to match the rest of your Momentum dependencies. See [CONSUMPTION.md](../../../../CONSUMPTION.md) for general npm consumption patterns.

## Loading the font

Import the provided stylesheet so the `@font-face` rule is applied before Momentum typography renders:

```javascript
import '@momentum-design/fonts/dist/css/fonts.css';
```

Ensure your bundler resolves **WOFF2** assets referenced from that CSS file. Most webpack, Vite, and Rspack setups handle this when CSS and font loaders are configured.

You can also load font files directly via your asset pipeline using paths from `dist/manifest.json`, but importing `fonts.css` is the supported path — it keeps `@font-face` settings (family name, `ss02`, weight range) consistent with the design system.

## Package contents

After `yarn build` in this package, `dist/` contains:

| Asset         | Path                         | Purpose                               |
| ------------- | ---------------------------- | ------------------------------------- |
| Stylesheet    | `dist/css/fonts.css`         | Registers the `Momentum` `@font-face` |
| Variable font | `dist/inter/Inter.var.woff2` | Inter variable font file              |
| Manifest      | `dist/manifest.json`         | Asset path index for tooling          |

Example manifest:

```json
{
  "fonts": "./css/fonts.css",
  "Inter": "./inter/Inter.var.woff2",
  "manifest": "./manifest.json"
}
```

## Licensing

The `@momentum-design/fonts` package is released under the [MIT License](../LICENSE.md). Inter is bundled as a third-party typeface; retain license notices shipped with the package when redistributing font files.
