# Illustrations (`@momentum-design/illustrations`)

## What it is

**Illustration artwork** as **SVG** (and generated **manifest**, **TS**, **types**), for marketing and product surfaces that need richer art than UI icons. Built with `md-builder` (`--icons` definition path in this package—shared builder pattern with other SVG libraries).

Source: [`packages/assets/illustrations`](../../assets/illustrations).

## Install (npm)

```bash
npm install @momentum-design/illustrations
```

- Registry: [npmjs.com/package/@momentum-design/illustrations](https://www.npmjs.com/package/@momentum-design/illustrations)

## What ships in `dist/`

Typical layout:

- `dist/svg/` — illustration SVGs
- `dist/manifest.json` — index of assets
- `dist/ts/`, `dist/types/` — generated modules and types

Check `node_modules/@momentum-design/illustrations/dist` for the version you use.

## How to use

Import **SVG** files with your asset loader or reference paths from the **manifest** for dynamic choice. Same general pattern as other static assets from npm: resolve `node_modules/@momentum-design/illustrations/dist/...` in bundler config or copy into your CDN.

## See also

- Package README: [`packages/assets/illustrations/README.md`](../../assets/illustrations/README.md)
- [CONSUMPTION.md](../../../CONSUMPTION.md)
