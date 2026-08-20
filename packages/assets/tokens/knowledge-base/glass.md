---
title: Glass
summary: The Momentum glass aesthetic and the material, blur, and overlay tokens that build layered, translucent surfaces.
tier: 2
websitePath: foundations/glass
---

# Glass

Glass is a layered, translucent surface treatment. It is based on the
"Glassneumorphism" trend but reworked for Momentum's needs: interfaces that feel
alive and responsive to what's behind them, while staying legible.

Glass is built from three token types — **material** and **overlay** (color) plus
**blur** (effect). The color tokens follow the same semantic model as everything
in [Color](./color.md); this topic explains how they combine.

## Principles

- **Exaggerated layer blur** softens background interference so content on top
  stays readable.
- **Tuned transparency** lets a layer pick up background tones while still
  supporting readable text and controls.
- **Relatively flat design** reduces visual weight and lets the layers
  themselves define hierarchy.

The result: vibrant but not noisy, responsive to the environment, yet always
legible.

## Anatomy of a glass layer

A glass surface is composed bottom-to-top:

```text
Background image
  → Material (light / medium / heavy) + Blur
    → Overlay (for emphasis only)
```

Layer a **material** over a background, apply a **blur** so the background reads
as context rather than detail, and add an **overlay** only where a surface needs
extra emphasis.

## Material — `color.theme.background.glass.*`

The foundational layer for application UI. Materials come in three transparency
levels, and the tint **inverts by theme** (white in light mode, dark in dark
mode) so the material always reads as frosted glass over the current background.

| Token | Transparency | Light | Dark |
| --- | --- | --- | --- |
| `background.glass.light` | 40% | `core.white-alpha.40` | `core.black-alpha.40` |
| `background.glass.medium` | 60% | `core.white-alpha.60` | `core.black-alpha.60` |
| `background.glass.heavy` | 80% | `core.white-alpha.80` | `core.black-alpha.80` |
| `background.glass.normal` | base fill | `core.white-alpha.40` | `core.white-alpha.5` |
| `background.glass.active` | base, active | `core.white-alpha.60` | `core.white-alpha.11` |
| `background.glass.radial.0` / `.1` | overlay gradient stops | `white-alpha.5` → `white-alpha.0` | same |

Heavier materials pass less background through — reach for `heavy` where
legibility matters most, `light` where you want the environment to show through.

## Blur — `effect.backdrop-filter.*`

Blur is an **effect** token, not a color, and lives in
`packages/assets/tokens/src/core/effect.json`. The numeric name is a token step,
not the pixel value.

| Token | Resolves to | Role |
| --- | --- | --- |
| `blur20` | `blur(10px)` | **Contextual blur.** Provides context for what's behind a layout object. Use sparingly and intentionally — test type and graphic accessibility. |
| `blur200` | `blur(100px)` | **Primary blur.** The general-purpose layer blur. |
| `blur800` | `blur(400px)` | **Background blur.** For primary layout objects that must stay accessible. Always pair with a material so the background does not bleed through distractingly. |

## Overlay — Figma color styles

For emphasis, glass adds an overlay layer. In Figma these are **composite color
styles**; in code they are built from the underlying theme tokens.

- **`color.theme.glass.overlay`** — combines `color.theme.background.glass.normal`
  with a linear gradient of `color.theme.background.glass.radial.0` →
  `color.theme.background.glass.radial.1`.
- **`color.theme.glass.outline`** — a linear gradient of
  `color.theme.outline.glass.normal`.

`outline.glass.normal` is itself a gradient (`black-alpha.7` → `black-alpha.20` in
light; `white-alpha.11` → `white-alpha.5` in dark).

## Glass variants in other groups

Glass treatment also appears in specific components:

- **`color.theme.button.glass.primary.{normal,hover,pressed}`** — glass buttons.
- **`color.theme.avatar.glass.{normal,active}`** — glass avatars.

These follow the standard state model; see [Color](./color.md) for their groups.

## Accessibility

Transparency plus blur reduces contrast, so legibility must be verified, not
assumed:

- Test text and graphic contrast on top of glass in both light and dark themes.
- Prefer a heavier material (`medium`/`heavy`) or an overlay behind critical
  content.
- Use `blur20` (contextual) sparingly; always pair `blur800` with a material so
  the background does not distract.

## Related

- [Color](./color.md) — the `background.glass`, `button.glass`, `outline.glass`,
  and `avatar.glass` rows and the semantic model behind them.
- [Theming](./theming.md) — how glass material tint inverts across themes.
- `themeprovider` component (Tier 3) — applying a theme at runtime.
