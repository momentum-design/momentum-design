# @momentum-design/fonts

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE) ![State](https://img.shields.io/badge/State-Stable-limegreen?style=flat-square) [![NPM Version](https://img.shields.io/npm/v/%40momentum-design%2Ffonts)](https://www.npmjs.com/package/@momentum-design/fonts)

## Overview

Contains the Momentum font files and a CSS file that registers them.

Momentum uses **Inter**, shipped as a variable font and registered under the CSS font family name **`Momentum`**.

This package only provides the typeface. Font sizes, line heights and the full font stack live in [`@momentum-design/tokens`](../tokens/README.md).

## Consumption

Install the package:

```bash
yarn add @momentum-design/fonts
```

### Using the CSS file (recommended)

Import `fonts.css` so the `Momentum` font family is registered with the correct settings (including `font-display`, OpenType features and the supported weight range):

```css
@import '@momentum-design/fonts/dist/css/fonts.css';
```

Or, in HTML:

```html
<link rel="stylesheet" href="/path/to/@momentum-design/fonts/dist/css/fonts.css">
```

The CSS references the font file by relative path, so make sure your bundler or server resolves **WOFF2** assets referenced from CSS and keeps the folder structure of `dist/` intact.

Then use the font family via the typography tokens (`font.family.primary`) or directly:

```css
body {
  font-family: Momentum, sans-serif;
}
```

### Using the font file directly

The font file can also be consumed through an asset loader by importing it straight from NPM. In that case you need to provide your own `@font-face` rule. Mirror the family name and font settings from `fonts.css` so rendering stays consistent with the rest of Momentum.
