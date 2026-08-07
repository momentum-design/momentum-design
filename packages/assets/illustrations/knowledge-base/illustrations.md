---
title: Illustrations
summary: Guidance for Momentum's illustration library — SVG illustrations, when to use them, how to consume them via mdc-illustration and mdc-illustrationprovider, and accessibility.
tier: 2
---

# Illustrations

Guidance for **product designers and developers** working with the Momentum
illustration library (`@momentum-design/illustrations`). This article explains
what the library contains, when to reach for an illustration, how illustrations
are consumed, and the accessibility contract.

## What the illustrations library is

`@momentum-design/illustrations` ships Momentum's illustrations as **SVG** files
(and Lit templates). Consumers load an illustration by name and render it; the
package distributes the source assets rather than drawing them at runtime.

Each illustration carries its own **baked-in palette and default size** — the
choice of `name` selects both the artwork and its colouring. Illustrations are
larger, narrative graphics, distinct from single-colour interface icons and from
moving animation assets (see below).

## Illustrations versus other Momentum assets

| Asset type | Package | Use for |
| --- | --- | --- |
| **Illustrations** | `@momentum-design/illustrations` | Larger *static* narrative artwork — empty states, onboarding, confirmations |
| **Icons** | `@momentum-design/icons` | Small, single-colour UI glyphs — controls, status, navigation |
| **Animations** | `@momentum-design/animations` | Moving Lottie/SVG artwork |
| **Brand visuals** | `@momentum-design/brand-visuals` | Logos, wordmarks, and approved product imagery |

## When to use illustrations

- **Use an illustration** for larger illustrative graphics: empty states,
  onboarding screens, success/error confirmations, and feature highlights.
- Use one when the asset should be loaded from the shared illustration source
  rather than bundled inline.
- **Use a single illustration per surface.** Pairing two illustrations on the
  same empty state or confirmation dilutes their visual weight.

Do **not** use an illustration where a smaller asset fits better:

- Reach for an **icon** (`mdc-icon`) for small, single-colour interface glyphs.
- Use an inline `<svg>` for a one-off graphic that does not need to load through
  the illustration provider system.

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
- `name` selects the artwork (and its baked palette). If the illustration cannot
  be fetched, nothing is rendered.
- Override the rendered size with the `--mdc-illustration-size` CSS property only
  when the layout demands a non-default footprint; the per-illustration defaults
  are tuned to feel consistent across surfaces.

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

## Contributing assets

New illustrations are added to the `@momentum-design/illustrations` package
source and ship through the normal release. Keep product-specific usage rules in
the relevant product repository and this guideline focused on the shared
library's mechanics.

## Related

- [Animations](../../animations/knowledge-base/animations.md) — moving Lottie/SVG
  artwork (a different asset class).
- [Brand visuals](../../brand-visuals/knowledge-base/brand-visuals.md) — logos,
  wordmarks, and product imagery.
- [`mdc-illustration`](../../../components/src/components/illustration/knowledge-base/illustration.component.md)
  and
  [`mdc-illustrationprovider`](../../../components/src/components/illustrationprovider/knowledge-base/illustrationprovider.component.md)
  components (Tier 3) — rendering illustrations.
