# Utils (`@momentum-design/utils`)

## What it is

**JavaScript utilities** that support working with Momentum (for example, helpers that relate token choices to UI). This is **code**, not static artwork: it publishes **`main`** and **`types`** entrypoints from `dist/` after an **esbuild** + **TypeScript declarations** build.

Source: [`packages/assets/utils`](../../assets/utils). Depends on `@momentum-design/tokens` at build/workspace time for typings and behavior.

## Install (npm)

```bash
npm install @momentum-design/utils
```

- Registry: [npmjs.com/package/@momentum-design/utils](https://www.npmjs.com/package/@momentum-design/utils)

You usually install **`@momentum-design/tokens`** alongside it if your app uses token values the utilities expect.

## What ships in `dist/`

- `dist/index.js` (and related bundles per `esbuild.config.js`)
- `dist/types/` — TypeScript declarations (`types` field in `package.json` points here)

## How to use

Import named exports from the package root:

```javascript
import { calculateForegroundColor } from '@momentum-design/utils';
```

`calculateForegroundColor` picks an appropriate foreground token for a given background (see package README for behavior). New utilities should appear in the same export surface as they are added to `src/index.ts`.

Use **TypeScript** or JSDoc-friendly editors to discover the current public API from `dist/types`.

## See also

- Package README: [`packages/assets/utils/README.md`](../../assets/utils/README.md)
- [CONSUMPTION.md](../../../CONSUMPTION.md)
