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

| Theme | Primitive reference | Final value |
| --- | --- | --- |
| Stable light | `color.core.black-alpha.95` | black at 95% alpha |
| Stable dark | `color.core.white-alpha.95` | white at 95% alpha |
| High-contrast light | `color.highcontrast.white.WindowTextColor` | `#000000` |
| High-contrast dark | `color.highcontrast.black.WindowTextColor` | `#ffffff` |

High-contrast modes resolve to a fixed system-color palette
(`WindowTextColor`, `WindowColor`, `ButtonTextColor`, `HighlightColor`,
`GrayTextColor`, `HotlightColor`…). For example, in high-contrast light
`background.solid.primary.normal` → `color.highcontrast.white.WindowColor`
(`#ffffff`) and `outline.primary.normal` → `WindowTextColor` (`#000000`); the
dark palette inverts these.

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
`color.highcontrast.*` system-color palette for accessibility.

**AAOS (automotive) is a distinct token namespace, not a re-tint of the stable
modes.** Instead of the stable `color.theme.text/background/button/…` groups, it
defines its own smaller set (~39 tokens) under `color.theme.surface.*` and
`color.theme.content.*` — for example `color.theme.surface.neutral.0.default`
(`color.core.gray.93` in day), `color.theme.content.text.neutral.primary`
(`#ffffffe0`), and `color.theme.content.btn.accent.default`. Components that
target AAOS consume that namespace directly; the stable usage groups documented
in [Color](./color.md) do not apply there.

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

At runtime the
[`themeprovider`](../../../components/src/components/themeprovider/knowledge-base/themeprovider.component.md)
component applies the appropriate class (via its `themeclass` attribute), and
every `var(--mds-color-theme-*)` beneath it resolves to that theme's values. The
provider currently exposes the stable Webex mode and its brand accents as
runtime-selectable classes; high-contrast and AAOS selectors are emitted by the
build and can be applied the same way.

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
- [`themeprovider`](../../../components/src/components/themeprovider/knowledge-base/themeprovider.component.md)
  component (Tier 3) — applying a theme at runtime.
