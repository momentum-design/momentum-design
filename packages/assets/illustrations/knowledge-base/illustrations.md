---
title: Illustrations
summary: Guidance for Momentum's illustration library — style principles, when to use, sizing and colour, consumption via mdc-illustration and mdc-illustrationprovider, and accessibility.
tier: 2
---

# Illustrations

Guidance for **product designers and developers** working with the Momentum
illustration library (`@momentum-design/illustrations`). Momentum uses a distinct
illustration style to explain complex ideas and abstract themes **clearly and
universally**. This article covers the visual principles, when to reach for an
illustration, sizing and colour, how illustrations are consumed in code, and the
accessibility contract.

## What the illustrations library is

`@momentum-design/illustrations` ships Momentum's illustrations as **SVG** files
(and Lit templates). Consumers load an illustration by name and render it; the
package distributes the source assets rather than drawing them at runtime.

Each illustration carries a **baked-in palette and default size** — the choice of
`name` selects both the artwork and its colouring, and the container size is
encoded in the name (for example `calling-320`). Illustrations are larger,
narrative graphics, distinct from single-colour interface icons and from moving
animation assets.

## Illustration principles

Momentum illustrations share one visual language. Keep new or customised artwork
consistent with it:

- **Geometric** — build from geometric shapes (circle, square, triangle, pill).
- **Rounded** — take a cohesive approach to radii and terminals.
- **Depth** — use overlapping lines and changes in scale to create the illusion
  of depth.
- **Open** — use composition and line to show a clear starting and end point.
- **Continuous** — connect elements with a single continuous line to convey
  movement or action.
- **Simple** — use recognisable everyday objects in their simplest form.

## Illustrations versus other Momentum assets

| Asset type | Package | Use for |
| --- | --- | --- |
| **Illustrations** | `@momentum-design/illustrations` | Larger *static* narrative artwork — empty states, onboarding, confirmations |
| **Icons** | `@momentum-design/icons` | Small, single-colour UI glyphs — controls, status, navigation |
| **Animations** | `@momentum-design/animations` | Moving Lottie/SVG artwork |
| **Brand visuals** | `@momentum-design/brand-visuals` | Logos, wordmarks, and approved product imagery |

## When to use illustrations

Use illustrations **in moderation** — to supplement at a glance, reinforce
interactivity, or simplify a complex idea. Used deliberately, a single
illustration is a delightful addition to the experience. The core use cases:

- **Empty states** — when there is no data or content to display; guide and
  inform users on the actions they can take.
- **Onboarding** — help users set up an area of the app for the first time, or
  introduce a new feature.
- **Success / error** — reinforce the message when a task completes successfully
  or a system error occurs.
- **Spot illustrations** — occasional, targeted moments: draw attention to
  something important on a busy page, or explain a technical concept.

Two habits keep illustrations effective:

- **Use one illustration per view.** Multiple illustrations in a single view
  overwhelm the page and make it hard to focus; pick the one place that most
  needs attention.
- **Pair with copy.** Illustrations support content, they do not stand on their
  own. Where a space feels empty, pair the illustration with a short line of copy
  rather than leaving the area blank.

Do **not** use an illustration where a smaller asset fits better:

- Reach for an **icon** (`mdc-icon`) for small, single-colour interface glyphs.
- Use an inline `<svg>` for a one-off graphic that does not need to load through
  the illustration provider system.

## Sizing

Illustrations come in three base sizes, chosen by the artwork's complexity
(simple → complex). All sizes use a **2.5px stroke weight**, and the container
size is encoded in the illustration name.

| Base size | Container | Resize range |
| --- | --- | --- |
| Small | 120×120px | 60–192px |
| Medium | 192×192px | 120–320px |
| Large | 320×320px | 192–480px |

Pick the correct **base** illustration before scaling — starting from the right
base keeps the artwork's integrity intact, and resized illustrations should keep
the 2.5px stroke weight. In code, override the rendered size with the
`--mdc-illustration-size` CSS property only when the layout demands a non-default
footprint; the per-illustration defaults are tuned to feel consistent across
surfaces.

## Colour

Colour is applied **deliberately and by context** — each use case has a defined
set of colours, drawn from the Momentum palette. When in doubt, use a solid
colour.

- **Solid** — black or white depending on theme; the default for all
  illustrations, and the option for **spot illustrations**. It promotes
  accessibility, simplicity, and consistency across the UI.
- **Gradient** — a brand-forward option that lightens the mood or adds
  personality, reserved for **empty states, onboarding, and success / error**.

Colouring is baked into each illustration `name`; pick a different `name` to
change palette rather than recolouring at runtime.

## Consuming illustrations

Illustrations render through two components: a context
[`mdc-illustrationprovider`](../../../components/src/components/illustrationprovider/knowledge-base/illustrationprovider.component.md)
that configures the source once, and one or more
[`mdc-illustration`](../../../components/src/components/illustration/knowledge-base/illustration.component.md)
elements that each resolve a `name` into an inlined SVG. An `mdc-illustration`
outside a provider cannot resolve its source and renders nothing.

Momentum illustrations (dynamic import from the `@momentum-design/illustrations`
package):

```html
<mdc-illustrationprovider illustration-set="momentum-illustrations">
  <mdc-illustration name="empty-state-inbox"></mdc-illustration>
</mdc-illustrationprovider>
```

Custom illustrations (fetched over HTTP from a URL the consumer hosts):

```html
<mdc-illustrationprovider
  illustration-set="custom-illustrations"
  url="/assets/illustrations"
  file-extension="svg"
>
  <!-- application root -->
</mdc-illustrationprovider>
```

- Mount the provider **once** near the application root; every nested
  `mdc-illustration` inherits its configuration through context.
- `name` selects the artwork (and its baked palette and size). If the
  illustration cannot be fetched, nothing is rendered.
- Override the rendered size with `--mdc-illustration-size` only when the layout
  demands a non-default footprint.

See the component docs for the full attribute contracts, caching options, and
`load`/`error` events.

## Accessibility

`mdc-illustration` handles two modes, selected by what the consumer sets:

- **Decorative** (default) — no `aria-label`/`aria-labelledby`. The host has no
  `role` and the inlined SVG is `aria-hidden`, so screen readers skip it.
- **Informative** — set `aria-label` (or `aria-labelledby`). The host receives
  `role="img"` and announces the accessible name; the SVG stays `aria-hidden` so
  its contents are not announced twice.

Decide deliberately whether each illustration is decorative or informative — that
choice drives the ARIA contract. The provider renders no UI and owns no
accessibility of its own.

## Requesting or contributing illustrations

Reuse an existing library illustration whenever the visual metaphor and meaning
still make sense. If nothing fits, combine elements from existing illustrations
before drawing something new. New or changed illustrations are requested through
the Momentum change-request process and ship with the
`@momentum-design/illustrations` package. Keep product-specific usage rules in the
relevant product repository and this guideline focused on the shared library's
mechanics.

## Related

- [Animations](../../animations/knowledge-base/animations.md) — moving Lottie/SVG
  artwork (a different asset class).
- [Brand visuals](../../brand-visuals/knowledge-base/brand-visuals.md) — logos,
  wordmarks, and product imagery.
- [`mdc-illustration`](../../../components/src/components/illustration/knowledge-base/illustration.component.md)
  and
  [`mdc-illustrationprovider`](../../../components/src/components/illustrationprovider/knowledge-base/illustrationprovider.component.md)
  components (Tier 3) — rendering illustrations.
