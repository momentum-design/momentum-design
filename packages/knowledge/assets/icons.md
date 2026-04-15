# Icons (`@momentum-design/icons`)

## What it is

The **Momentum icon set** in multiple consumption forms: **SVG** files, an **icon font** (with **CSS**), **Swift**-oriented outputs where applicable, plus **manifests** and **TypeScript** modules. Built with `md-builder` (`--icons`) and minified icon CSS (`MomentumFontIcons.min.css`).

Source: [`packages/assets/icons`](../../assets/icons).

## Install (npm)

```bash
npm install @momentum-design/icons
```

- Registry: [npmjs.com/package/@momentum-design/icons](https://www.npmjs.com/package/@momentum-design/icons)

## What ships in `dist/`

Typical layout:

- `dist/svg/` — one SVG per icon name / weight
- `dist/fonts/` — font binaries for the icon font
- `dist/data/MomentumFontIcons.css`, `dist/data/MomentumFontIcons.min.css` — stylesheet for the font-based workflow
- `dist/manifest.json` — maps logical names to relative file paths (e.g. `./svg/...`)
- `dist/ts/` — per-icon or grouped TS modules (large tree)
- `dist/types/` — TypeScript types for generated modules

## How to use

- **SVG:** Import individual SVGs from `dist/svg/` (path from package root via your bundler), or drive imports from `manifest.json`.
- **Icon font:** Include the CSS from `dist/data/` and font files from `dist/fonts/` per your build; use the documented font workflow for your platform.
- **Swift / non-npm:** See [CONSUMPTION.md](../../../CONSUMPTION.md) for tarball / download patterns.

Prefer **pinning a version**; the icon set and file tree are large and change between releases.

## See also

- Package README: [`packages/assets/icons/README.md`](../../assets/icons/README.md)
- [CONSUMPTION.md](../../../CONSUMPTION.md)
- Product docs: [momentum.design](https://momentum.design) (when you need UX copy beyond repo layout)
