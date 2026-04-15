# Assets

Guidance for **published asset packages** under `@momentum-design/*`: what each library is for and how to install and consume it from **npm** (or compatible clients). Source trees and builds live in [`packages/assets/`](../../assets); authoritative behavior and `dist/` layout are always the **shipped package** for the version you pin.

Build tooling across most asset packages: [`md-builder`](../../tools/builder) (`md-builder` CLI). **Tokens** use [`md-token-builder`](../../tools/token-builder) instead.

## Package index

| Topic | npm package | Knowledge page |
|--------|-------------|----------------|
| Animations (Lottie, SVG) | `@momentum-design/animations` | [animations.md](./animations.md) |
| Brand visuals (logos, suite imagery) | `@momentum-design/brand-visuals` | [brand-visuals.md](./brand-visuals.md) |
| Fonts (e.g. Inter) + CSS | `@momentum-design/fonts` | [fonts.md](./fonts.md) |
| UI icons (SVG, font, manifests) | `@momentum-design/icons` | [icons.md](./icons.md) |
| Illustrations (SVG) | `@momentum-design/illustrations` | [illustrations.md](./illustrations.md) |
| Design tokens (CSS, JSON, SCSS, mobile) | `@momentum-design/tokens` | [tokens.md](./tokens.md) |
| JS helpers for Momentum | `@momentum-design/utils` | [utils.md](./utils.md) |

## Cross-cutting

- Install overview and non-npm options (unpkg, `.tgz`): [CONSUMPTION.md](../../../CONSUMPTION.md)
- Product documentation: [momentum.design](https://momentum.design)

If this knowledge base disagrees with a published package or the repo under `packages/assets/`, **trust the package + repo** and update these pages.
