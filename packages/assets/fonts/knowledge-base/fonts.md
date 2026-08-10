---
title: Fonts
summary: Install and load the Momentum typeface from @momentum-design/fonts — Inter as a variable font registered under the family name "Momentum" — and how it connects to typography tokens.
tier: 2
---

# Fonts

Package-level guidance for **`@momentum-design/fonts`**, the npm package that
ships the Momentum typeface files and the `@font-face` declaration products
need to render Momentum UI correctly.

**Primary audience:** Product engineers integrating Momentum assets, and designers
who need to know which typeface the system uses and how it is configured.

## What this package owns

`@momentum-design/fonts` is the **source of truth for the typeface files**
the design system loads in the browser:

- **Inter** — the primary Momentum typeface, delivered as a single variable
  font file (`Inter.var.woff2`).
- **`fonts.css`** — registers the face under the CSS family name **`Momentum`**
  so products and tokens can refer to one stable name.
- **`manifest.json`** — lists the built asset paths for tooling and loaders.

This package does **not** define typography scale (font sizes, line heights,
composite text styles, or the full font stack). Those live in
**`@momentum-design/tokens`**. Load both packages when building a Momentum
experience: fonts supply the face; tokens supply the scale and utility classes.

For applying predefined text styles in components, see the
[`mdc-text`](../../../components/src/components/text/knowledge-base/text.component.md)
component documentation.

## The Momentum typeface

Momentum uses **Inter** as its primary UI typeface. The package exposes it
through a single `@font-face` rule that registers the family as **`Momentum`**:

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

- **Variable font** — one file covers the full weight range (`font-weight: 1
  1000`), so regular, medium, and bold styles resolve without separate files.
- **`font-display: swap`** — text renders immediately with a fallback while
  the font loads, then swaps when ready. Avoid hiding text behind an invisible
  font (`font-display: block` or `optional`) unless you have a deliberate
  reason.
- **OpenType feature `ss02`** — enabled by default in the Momentum registration.
  This is part of the approved Inter configuration for Momentum; do not strip
  it when re-hosting the font.
- **Fallback stack** — when tokens resolve `font.family.primary`, the stack is
  `Momentum, Inter, Arial, Helvetica Neue, Helvetica, sans-serif`. Loading
  `fonts.css` ensures `Momentum` resolves to the bundled Inter file; the
  remaining names are system fallbacks.

Do not substitute a different typeface, self-host a different Inter build, or
register a competing `@font-face` under the name `Momentum`. That breaks visual
parity with Figma, Storybook, and Momentum components.

## Installation

Add the package to your project via your package manager of choice:

```bash
npm install @momentum-design/fonts

# or

yarn add @momentum-design/fonts
```

Pin the version to match the rest of your Momentum dependencies. See
[CONSUMPTION.md](../../../../CONSUMPTION.md) for general npm consumption patterns.

## Loading the font

Once the font package has been added to your project, import the fonts via a link element:

```html
<link rel="stylesheet" href="/packages/@momentum-design/fonts/dist/css/fonts.css">
```

Ensure your bundler resolves **WOFF2** assets referenced from that CSS file.
Most webpack, Vite, and Rspack setups handle this when CSS and font loaders
are configured.

You can also load font files directly via your asset pipeline using paths from
`dist/manifest.json`, but importing `fonts.css` is the supported path — it
keeps `@font-face` settings (family name, `ss02`, weight range) consistent
with the design system.

## Integration checklist

When consuming Momentum components or token typography, treat font loading as
**required**, not optional:

1. **Import `fonts.css`** (see above).
2. **Import typography tokens** — for example
   `@momentum-design/tokens/dist/css/typography/complete.css` or the bundled
   `@momentum-design/tokens/dist/css/components/complete.css`.
3. **Apply typography utilities** — add `mds-typography` (and typically
   `mds-elevation`) on your application root, as described in the components
   setup documentation.
4. **Wrap with `mdc-themeprovider`** — descendant components expect theme and
   font-related CSS variables to be defined on an ancestor provider.
5. **Match Figma rendering on macOS** — set antialiasing on the root or body:

   ```css
   body {
     -webkit-font-smoothing: antialiased;
     -moz-osx-font-smoothing: grayscale;
   }
   ```

If text looks like a system font, the usual cause is a missing `fonts.css`
import or a build step that fails to emit the WOFF2 file.

## Usage guidelines

### Do

- Load `@momentum-design/fonts/dist/css/fonts.css` in any surface that renders
  Momentum typography or components.
- Use typography **tokens** and **`mdc-text`** for size, weight, and line
  height — not raw pixel values.
- Keep Momentum, token, and component package versions aligned when upgrading.

### Do not

- Do not change the registered `font-family` name away from `Momentum` while
  still using Momentum tokens or components that reference it.
- Do not add parallel `@font-face` rules for Inter under a product-specific
  family name and point Momentum styles at that name.
- Do not rely on Inter being installed locally on the user's machine — always
  bundle and load the npm package (or an equivalent approved CDN path to the
  same built files).
