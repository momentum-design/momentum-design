# Brand visuals (`@momentum-design/brand-visuals`)

## What it is

**Approved brand imagery** for the suite: logos, device imagery, and related **PNG** and **SVG** (and supporting **TS** / **types**), distributed for consistent use across Webex products. Product-specific artwork stays outside this library; only shared, approved assets belong here.

Source and builder config: [`packages/assets/brand-visuals`](../../assets/brand-visuals). Built with `md-builder` using the icons-style definition path (`--icons` in that package’s build script—same pipeline family as illustrations for manifests).

## Install (npm)

```bash
npm install @momentum-design/brand-visuals
```

- Registry: [npmjs.com/package/@momentum-design/brand-visuals](https://www.npmjs.com/package/@momentum-design/brand-visuals)

## What ships in `dist/`

Typical layout:

- `dist/png/`, `dist/svg/` — raster and vector assets
- `dist/manifest.json` — asset index / paths
- `dist/ts/`, `dist/types/` — generated helpers and types

Confirm under `node_modules/@momentum-design/brand-visuals/dist` for your version.

## How to use

Import files with your bundler or static pipeline (same idea as other image packages: reference paths under `dist/` from Node resolution or copy step). Use the **manifest** when you need programmatic discovery of available assets.

**Criteria:** assets are suite-wide, approved, and reusable; teams manage their own product-only artwork separately (see package README).

## See also

- Package README: [`packages/assets/brand-visuals/README.md`](../../assets/brand-visuals/README.md)
- [CONSUMPTION.md](../../../CONSUMPTION.md)
