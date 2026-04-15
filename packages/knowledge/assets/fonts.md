# Fonts (`@momentum-design/fonts`)

## What it is

**Font files** and **CSS** that expose Momentum’s web font setup. The primary documented family is **Inter**. Source lives in [`packages/assets/fonts`](../../assets/fonts); build copies `src` to `dist` and runs `md-builder` with `--fonts` to produce manifests.

## Install (npm)

```bash
npm install @momentum-design/fonts
```

- Registry: [npmjs.com/package/@momentum-design/fonts](https://www.npmjs.com/package/@momentum-design/fonts)

## What ships in `dist/`

Typical layout:

- `dist/inter/` — Inter font files (formats vary by release)
- `dist/css/` — CSS with Momentum-oriented `@font-face` rules
- `dist/manifest.json` — manifest for packaged outputs

Inspect `node_modules/@momentum-design/fonts/dist` after install.

## How to use

- Import **font files** or **CSS** via your bundler (e.g. `import '@momentum-design/fonts/dist/css/...'` or equivalent path for your version), or copy paths into your app’s static assets.
- Apply the provided **CSS** so `@font-face` points at the shipped files correctly for your hosting layout.

## See also

- Package README: [`packages/assets/fonts/README.md`](../../assets/fonts/README.md)
- [CONSUMPTION.md](../../../CONSUMPTION.md)
