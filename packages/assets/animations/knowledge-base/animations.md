---
title: Animations
summary: Guidance for Momentum's animation assets — Lottie/SVG animations, what the library contains, how to consume them via mdc-animation, and how they differ from motion tokens.
tier: 2
---

# Animations

Guidance for **product designers and developers** working with the Momentum
animation library (`@momentum-design/animations`). This article explains what the
library contains, how animated assets are consumed, and how animation *assets*
differ from motion *tokens*.

## What the animations library is

`@momentum-design/animations` ships pre-authored animated assets — **Lottie**
JSON files and a small set of animated **SVG**s. Consumers load an asset by name
(or URL) and render it; the package distributes the source files, it does not
draw the animation itself.

Lottie is the primary format: vector animations exported to JSON and played by a
Lottie renderer. Use animated assets for short, self-contained motion — loading
states, empty/success states, and small narrative moments — not for the timing of
UI state changes (that is motion tokens; see below).

## Animations versus motion tokens

These are two different systems in two different packages — do not conflate them:

| | Animation assets (`@momentum-design/animations`) | Motion tokens (`@momentum-design/tokens`) |
| --- | --- | --- |
| What it is | Pre-authored Lottie/SVG files | Duration, easing, delay, and stagger values |
| Answers | *What* animated artwork plays | *How* a UI transition is timed and eased |
| Consumed via | `mdc-animation` | CSS custom properties (`--mds-motion-*`) / animation recipes |
| Example | A "calling" Lottie loop | A 200 ms hover fade with `standard` easing |

Reach for a **motion token** to time a UI transition (hover, expand, enter/exit).
Reach for an **animation asset** when you need a designed, moving graphic. See
[Motion](../../tokens/knowledge-base/motion.md) for the token side.

## Animations versus other Momentum assets

| Asset type | Package | Use for |
| --- | --- | --- |
| **Animations** | `@momentum-design/animations` | Moving Lottie/SVG artwork — loading, empty/success states, small narrative moments |
| **Icons** | `@momentum-design/icons` | Static UI glyphs — controls, status, navigation |
| **Illustrations** | `@momentum-design/illustrations` | Larger *static* narrative or empty-state artwork |
| **Brand visuals** | `@momentum-design/brand-visuals` | Logos, wordmarks, and approved product imagery |

## What's in the library

- **`src/lottie/`** — Lottie JSON animations (for example `calling`, `meeting`,
  `space`, `personal_insight`), including grouped sets such as `reactions/` and
  `cisco-ai-assistant/`.
- **`src/svg/`** — animated SVGs (for example `webex-logo-loop`).

Assets are distributed as source files: a Lottie renderer (such as the official
dotLottie web player) plays the JSON, while animated SVGs can be embedded
directly in HTML.

## Consuming animations

Render animations with the
[`mdc-animation`](../../../components/src/components/animation/knowledge-base/animation.component.md)
component, a wrapper around the Lottie renderer:

```html
<mdc-animation name="calling" loop="true"></mdc-animation>
```

- `name` — a bundled animation, resolved through the shipped manifest.
- `src` — a URL to a Lottie JSON file; takes precedence over `name`.
- `loop` — `true` (default), `false`, or a numeric loop count.
- `autoplay` — starts automatically when loaded (default `true`).

See the component doc for the full attribute contract and events.

## Accessibility

- **Decorative by default.** `mdc-animation` marks its internal graphic
  `aria-hidden`; with no label the host is skipped by assistive technology.
- **Label only meaningful animations.** Provide `aria-label`/`aria-labelledby`
  when the animation conveys information; the host then receives `role="img"`.
- **Respect reduced motion.** Honor `prefers-reduced-motion` — pause, shorten, or
  replace non-essential animation for users who request it. Prefer `loop="false"`
  (or a finite count) over infinite loops for content that need not move
  continuously.

## Contributing assets

New animations are added to the `@momentum-design/animations` package source and
ship through the normal release. Some assets are brand- or product-specific;
keep product-level usage rules in the relevant product repository and this
guideline focused on the shared library's mechanics.

## Related

- [Motion](../../tokens/knowledge-base/motion.md) — the timing/easing **tokens**
  that animate UI state changes (distinct from these assets).
- [Illustrations](../../illustrations/knowledge-base/illustrations.md) — static
  narrative artwork.
- [`mdc-animation`](../../../components/src/components/animation/knowledge-base/animation.component.md)
  component (Tier 3) — rendering an animation.
