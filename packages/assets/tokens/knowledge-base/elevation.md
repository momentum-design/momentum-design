---
title: Elevation
summary: The Momentum elevation tokens — a four-step drop-shadow scale that conveys surface depth and layering on the z-axis.
tier: 2
---

# Elevation

Elevation expresses how far a surface sits above the ones behind it. Momentum
delivers it as a small, fixed set of **drop-shadow tokens** so that floating
surfaces — dialogs, popovers, toasts — read as layered without each component
inventing its own shadow.

Like all tokens, elevation is consumed through a compiled CSS custom property
(`var(--mds-elevation-<n>)`), never a hand-written `box-shadow`.

## Principles

- **Depth communicates hierarchy** — the higher a surface's elevation, the more
  it stands out as temporary or focal (a menu over a page, a dialog over
  everything).
- **Low elevation grounds content** — small, subtle shadows create gentle depth
  while keeping a surface connected to the primary content it belongs to, such as
  content containers and resting cards.
- **High elevation creates a focal point** — larger shadows lift transient,
  attention-worthy surfaces clearly above the page, such as dialogs, popovers,
  and secondary windows.
- **A fixed scale, not free-form shadows** — there are four steps; pick the one
  that matches the surface's altitude rather than tuning offsets and blur by
  hand.
- **Restraint** — most UI sits flat. Reserve elevation for surfaces that
  genuinely float above the content.

## The scale

Four levels, each a single drop shadow (`x y blur spread color`). Offset and blur
grow with altitude:

| Token | Use for |
| --- | --- |
| `elevation.1` | Subtle lift — resting cards, low-raised surfaces |
| `elevation.2` | Raised surfaces and hovered cards |
| `elevation.3` | Floating surfaces — dialogs, popovers, toasts, banners |
| `elevation.4` | Highest, most detached surfaces |

Authoritative source: `packages/assets/tokens/src/core/elevation.json`.

## Theme behavior

Elevation is **theme-independent**. Unlike color, the shadow tokens are emitted
once (under the `.mds-elevation` selector) rather than per theme, so the same
dark, semi-transparent shadow is used in light, dark, and high-contrast modes.
Because the shadow is a translucent black, it reads correctly over most
backgrounds without flipping. See [Theming](./theming.md) for the tokens that
*do* change per theme.

## Usage

- **Match the step to the surface's altitude**, not to a desired shadow look.
  Floating overlays use `elevation.3`; deeper stacking (rare) uses `elevation.4`.
- **Do not hand-roll `box-shadow`** or override a token's offsets to fake a new
  level — that fragments the scale and drifts from the system.
- **Pair elevation with the right surface token** (see
  [Color](./color.md) — `background.solid.*`). Elevation provides the shadow; the
  surface token provides the fill.
- For translucent, blurred depth (rather than a cast shadow), use the
  [Glass](./glass.md) material and blur tokens instead.

Currently consumed by `banner`, `dialog`, `popover`, `slider`, and `toast` — all
via `elevation.3` for their floating surfaces.

## Related

- [Color](./color.md) — surface fills that elevation shadows sit on.
- [Theming](./theming.md) — why elevation, unlike color, does not change per
  theme.
- [Glass](./glass.md) — the alternative, translucent approach to depth.
