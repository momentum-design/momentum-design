---
title: Theming
summary: How Momentum semantic color tokens resolve across themes and modes, how a theme is applied, and how to add one.
tier: 2
---

# Theming

A **theme** is a complete set of resolved values for every semantic token. The
same token key — `color.theme.text.primary.normal` — points at a different
primitive in each theme, so a single component build renders correctly in light,
dark, and high-contrast without any conditional code.

This topic covers how that resolution works and how to add a theme. For what the
tokens *mean*, see [Color](./color.md).

## The contract

Semantic token **keys are stable**; only the **primitive they reference swaps**
per theme. Components reference the key (compiled to a `--mds-color-theme-*` CSS
custom property) and never the primitive.

`color.theme.text.primary.normal` resolves to:

| Theme | Resolves to |
| --- | --- |
| Stable light | `color.core.black-alpha.95` |
| Stable dark | `color.core.white-alpha.95` |
| High-contrast light | `color.highcontrast.white.WindowTextColor` |
| High-contrast dark | `color.highcontrast.black.WindowTextColor` |

Because the key never changes, choosing a token by **intent** (not by its
light-mode value) is what guarantees it stays correct in every theme.

## Themes have two axes

A theme is a **mode** combined with a **brand accent**.

### Modes (the light/dark/contrast axis)

Each mode is a source file under `packages/assets/tokens/src/`:

| Mode | Source |
| --- | --- |
| Stable light | `theme/stable/light.json` |
| Stable dark | `theme/stable/dark.json` |
| High-contrast light | `theme/stable/highcontrast/hc_light.json` |
| High-contrast dark | `theme/stable/highcontrast/hc_dark.json` |
| AAOS day (automotive) | `aaos/day.json` |
| AAOS night (automotive) | `aaos/night.json` |

Stable light/dark are the primary modes. High-contrast maps onto the
`color.highcontrast.*` palette for accessibility. AAOS is a separate automotive
theme with its own token set (`aaos/common.json` + day/night) and does not
mirror every stable token.

### Brand accents (the color-identity axis)

On top of stable light/dark, an accent overlay re-tints brand-driven tokens.
The default is **Webex**; the alternates live in
`src/additionaltheme/{light,dark}/`:

- Indigo, Jade, Bronze, Rose, Lavender

An accent overlay only redefines the tokens that carry brand identity; every
other token inherits from the underlying stable mode.

## How a theme is applied

At build time each mode/accent combination compiles to a CSS class selector that
carries the resolved `--mds-color-theme-*` custom properties — for example:

- `.mds-theme-stable-lightWebex`
- `.mds-theme-stable-darkWebex`
- `.mds-theme-stable-hcLightWebex` / `.mds-theme-stable-hcDarkWebex`
- `.mds-theme-stable-darkIndigoWebex` (accent overlay)
- `.mds-theme-aaos-day` / `.mds-theme-aaos-night`

The selectors and their token sources are declared in
`packages/assets/tokens/config/tokens/core.json` and
`config/tokens/additional-themes.json`.

At runtime the `themeprovider` component applies the appropriate class, and every
`var(--mds-color-theme-*)` beneath it resolves to that theme's values. See the
`themeprovider` component (Tier 3) for the runtime API.

## Inverted and common

Two token groups exist specifically to control theming behavior:

- **`color.theme.inverted.*`** — the mirror of the active theme (light colors in
  light mode, dark in dark mode). Use it for surfaces that must contrast against
  the current theme, such as tooltips and coachmarks.
- **`color.theme.common.*`** — colors that stay the **same across every theme**.
  Use these only when a color must not flip with the theme (e.g. partner file
  colors, media touchbar). Only a few components need common colors.

Both are catalogued in [Color](./color.md#usage-groups).

## Fallback behavior

A theme swaps custom-property values; it does not invent them. If a component
references a `--mds-color-theme-*` property that a given theme does not define,
the custom property is unset and CSS falls back to the inherited/initial value —
which is almost never what you want.

Consequences:

- Only reference semantic tokens that exist in [Color](./color.md); do not invent
  token names.
- A mode that intentionally omits tokens (as AAOS does) will not provide those
  properties — components used there must rely only on tokens that mode defines.
- When you add a token, define it in **every** mode that component ships to.

## Adding a theme or mode

1. Add the source JSON under `packages/assets/tokens/src/` (a new
   `theme/stable/<mode>.json`, or an accent overlay in
   `additionaltheme/<light|dark>/<accent>.json`).
2. Define **every** semantic key the target components use, following the same
   `color.theme.<usage>.<variant>.<state>` structure as the existing modes.
3. Register a build target (destination + `cssSelector` + `targets`) in the
   relevant `config/tokens/*.json` so the mode compiles to its own
   `.mds-theme-*` selector.
4. Rebuild the tokens package so the CSS custom properties are emitted.
5. Wire the new selector into `themeprovider` if it should be runtime-selectable.

## Related

- [Color](./color.md) — the semantic token catalogue these themes resolve.
- [Glass](./glass.md) — glass material/blur tokens and how they behave per theme.
- `themeprovider` component (Tier 3) — applying a theme at runtime.
