# Animations (`@momentum-design/animations`)

## What it is

Published **motion assets** for Momentum: **Lottie** (JSON) and **SVG** animation outputs, plus generated **manifests** and **TypeScript** helpers under `dist/`. Source and build config live in [`packages/assets/animations`](../../assets/animations).

Build pipeline: copy `src` to `dist`, then `md-builder` with `--animations` (see that package’s `package.json` scripts).

## Install (npm)

```bash
npm install @momentum-design/animations
```

(Yarn / pnpm: `yarn add` / `pnpm add` the same package name.)

- Registry: [npmjs.com/package/@momentum-design/animations](https://www.npmjs.com/package/@momentum-design/animations)

## What ships in `dist/`

After a local or published build, expect roughly:

- `dist/lottie/` — Lottie JSON files
- `dist/svg/` — SVG outputs
- `dist/manifest.json`, `dist/manifest.ts` — Lottie-oriented manifest
- `dist/manifest-svg.json`, `dist/manifest-svg.ts` — SVG-oriented manifest
- `dist/types/` — generated types

Exact filenames change with releases; inspect `node_modules/@momentum-design/animations/dist` for the version you pinned.

## How to use

- **Lottie:** Import JSON from the package (path depends on your bundler), or resolve paths via the manifest. Render with a Lottie player (the assets README points to [dotlottie-web](https://github.com/LottieFiles/dotlottie-web) as one option).
- **SVG:** Use like static SVG (inline, `<img src="...">`, or bundler imports); no separate player required.

Pin a **version** in `package.json` for reproducible builds. For CDN-style fetches without a package manager, see the root [CONSUMPTION.md](../../../CONSUMPTION.md) (unpkg / tarball patterns).

## See also

- Package README: [`packages/assets/animations/README.md`](../../assets/animations/README.md)
- Broader install list: [CONSUMPTION.md](../../../CONSUMPTION.md)
