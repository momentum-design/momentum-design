# Context map: momentum-design monorepo (whole repo)

**Scanned:** 2026-03-30  
**Scope:** Repository root, `packages/*` layout, root and representative workspace `package.json` files, shared `config/typescript/tsconfig.base.json`, `README.md`  
**Project:** momentum-design  

---

## Project shape

Private **Yarn 3.2.4 Berry** monorepo (`workspaces: ./packages/**/*`, `packageManager: yarn@3.2.4`). **Node ≥20**. Single source of truth for **Momentum Design**: publishable **asset packages** (tokens, icons, fonts, etc.), **Lit-based Web Components** (`@momentum-design/components`), **internal CLI tools** (asset/token build pipelines), and **Astro documentation**. Root orchestration uses `yarn workspaces foreach --topological-dev` for `build`, `test`, `analyze`, `clean`, and `publish:npmjs` — no Turborepo/Nx detected.

---

## What exists in scope

- **Root**
  - `package.json` — workspace root scripts, shared devDeps (ESLint, TS 4.8, Jest, Plop, Husky, syncpack)
  - `yarn.lock` — Yarn Berry lockfile
  - `README.md` — distributables list and links to consumption/contributing
  - `config/` — shared tooling (TypeScript base, ESLint, Husky, Plop, etc.; not fully enumerated)
  - `scripts/` — git/package helper Node scripts

- **`packages/assets/`** (published NPM packages where versioned)
  - `tokens/` — `md-token-builder` CLI, multi-config token builds + component CSS script
  - `icons/`, `illustrations/`, `fonts/`, `brand-visuals/`, `animations/`, `utils/` — asset pipelines; icons use `md-builder` + clean-css minify (icons example read)

- **`packages/components/`**
  - `@momentum-design/components` — Lit 3, Storybook 8 (Vite + web-components), CEM, esbuild browser bundle, React wrappers (`@lit/react`), Playwright e2e (incl. Docker), Figma Code Connect

- **`packages/documentation/`**
  - `@momentum-design/docs` — Astro ~1.6, MDX, React/Preact integrations, Algolia docsearch; depends on components, tokens, token-builder, icons, illustrations

- **`packages/tools/`** (mostly `private: true`)
  - `builder/` — `md-builder` CLI; Style Dictionary, SVG/font tooling (svgo, svg2ttf, ttf2woff, etc.); api-extractor/documenter
  - `token-builder/` — `md-token-builder` CLI; Style Dictionary + Tokens Studio sd-transforms, Ajv
  - `common/`, `telemetry/` — shared libraries for tools
  - `automation/` — `md-automation` CLI
  - `figma-plugins/assets-export/` — Figma plugin workspace
  - `storybook-addon-code-preview/` — custom Storybook addon

---

## Patterns in use

- **Workspaces**: all packages under `packages/**/*`; depend on each other via `workspace:*` / `workspace:^`
- **TypeScript**: shared strict base in `config/typescript/tsconfig.base.json` (ES6 target, CommonJS module, decorators on, `strict: true`, unused checks)
- **Tool packages**: typical pattern `tsc` → `dist/module` + esbuild for CLI `bin`; Jest for unit tests where implemented
- **Components**: co-located `*.component.ts`, `*.styles.ts`, `*.stories.ts`, e2e `*.e2e-test.ts`; build = manifest + React codegen + `tsc` + esbuild + Storybook static
- **Assets**: build often delegated to **`md-builder`** or **`md-token-builder`** with JSON configs beside package `config/`
- **Quality gates**: per-package `analyze` scripts (lint, `tsc --noEmit`, etc.); components add Stylelint on `*.styles.ts`
- **Scaffolding**: Plop at root and in components (`yarn generate`, `generate:component`)

---

## Relevant config

- **Engines**: Node `>=20.0.0`, npm `>=8.0.0` (root + several packages)
- **Root `type`**: `commonjs` (root); individual packages set their own where needed
- **TypeScript (base)**: `target` ES6, `module` CommonJS, `strict: true`, `experimentalDecorators` + `emitDecoratorMetadata: true`
- **Key runtime/framework versions (from read manifests)**: `typescript` ^4.8.4, `lit` ^3.2.0, `astro` ^1.6.10, `storybook` ^8.2.5, `style-dictionary` ^3.7.1, `esbuild` ^0.23.0

---

## Docs & notes

- README: project is **alpha**; published packages listed (components, animations, brand-visuals, fonts, icons, illustrations, tokens, utils); consumption guide referenced as `CONSUMPTION.md` (path in README points at upstream `main` on GitHub — verify local copy if needed)
- Docs site URL referenced: `https://momentum-design.github.io/momentum-design/en/`
- `docs:build` at root: `yarn tokens build && yarn docs build` (tokens before docs)

---

## Gaps & unknowns

- CI/CD workflow files (e.g. `.github/workflows`) not opened — pipeline details unknown
- Full `config/` tree not enumerated; ESLint/Stylelint specifics per package not extracted
- Individual asset packages (illustrations, fonts, etc.) build steps not all read — pattern inferred from tokens + icons
- Whether local `CONSUMPTION.md` / `CONTRIBUTING.md` exist at repo root not verified in this scan

---

## Loaded for downstream use

The following context is now active for this session:

- **Stack:** Yarn 3 workspaces monorepo; TypeScript 4.8; Lit 3 Web Components; Astro docs; Storybook 8; Playwright e2e; Style Dictionary + custom CLIs for tokens/assets
- **Patterns:** Topological workspace scripts; strict TS base; tool CLIs (`md-builder`, `md-token-builder`, `md-automation`) drive asset/token outputs; components multi-target (`tsc` + esbuild + React wrappers + CEM)
- **Constraints:** Node 20+; root/private vs publishable packages mixed; components tests lean on postbuild e2e (Docker Playwright path)
- **Scope boundary:** Whole-repo shape and primary architectures covered; deep per-package internals and CI not scanned
