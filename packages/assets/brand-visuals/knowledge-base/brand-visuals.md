---
title: Brand visuals
summary: Guidance for Momentum's brand-visuals library — approved logos, wordmarks, and imagery, how to consume them via mdc-brandvisual, and the criteria for inclusion.
tier: 2
---

# Brand visuals

Guidance for **product designers and developers** working with the Momentum
brand-visuals library (`@momentum-design/brand-visuals`). This article explains
what the library contains, how to consume it, and the criteria an asset must meet
to be included.

## What the brand-visuals library is

`@momentum-design/brand-visuals` is the shared source of **approved** brand
artwork — logos, wordmarks, device/product imagery, and backgrounds — intended
for use across products. It centralizes brand assets so teams consume a single
approved copy rather than hard-coding their own.

Product-specific assets are **not** part of this library; they are managed by the
respective product teams. This library holds only assets relevant across multiple
products.

## Brand visuals versus other Momentum assets

| Asset type | Package | Use for |
| --- | --- | --- |
| **Brand visuals** | `@momentum-design/brand-visuals` | Logos, wordmarks, and approved product/partner imagery |
| **Icons** | `@momentum-design/icons` | Static UI glyphs — controls, status, navigation |
| **Illustrations** | `@momentum-design/illustrations` | Larger narrative or empty-state artwork |
| **Animations** | `@momentum-design/animations` | Moving Lottie/SVG artwork |

## What's in the library

- **`src/logos/`** — product, company, and partner logos and wordmarks.
- **`src/images/`** — approved photography and device imagery.
- **`src/backgrounds/`** — brand background artwork.

## Consuming brand visuals

Render brand artwork with the
[`mdc-brandvisual`](../../../components/src/components/brandvisual/knowledge-base/brandvisual.component.md)
component, which loads an asset by name at runtime:

```html
<mdc-brandvisual name="webex-logo" alt-text="Webex"></mdc-brandvisual>
```

- `name` — the filename of the asset in `@momentum-design/brand-visuals`; changing
  it triggers a new dynamic import. Success emits a `load` event; an unknown name
  emits an `error` event.
- `alt-text` — accessible alternative text, applied to the underlying `<img>` for
  image (e.g. PNG) assets.

See the component doc for the full attribute contract and events.

## Accessibility

- For **image** assets (PNG), set `alt-text` so screen readers announce the
  artwork; the component forwards it to the `<img>`'s `alt`.
- For inline **SVG** artwork, `mdc-brandvisual` sets no host role — provide an
  accessible name via the surrounding context (for example a labelled container)
  when the mark is meaningful. Treat purely decorative marks as decorative.

## Criteria for inclusion

Assets are admitted to the shared library only when they meet all three:

- **Relevancy** — commonly used across multiple products, not a single product's
  asset.
- **Approval** — cleared through brand and quality approval.
- **Utility** — meets the needs of multiple teams and reflects the brand's visual
  identity.

Requests to add an asset go through the Momentum team and are subject to the
criteria above. Keep product-specific brand rules (clear-space, co-branding,
campaign usage) in the product/brand source of truth and link to it rather than
restating it here.

## Related

- [Illustrations](../../illustrations/knowledge-base/illustrations.md) — narrative
  artwork (a different asset class).
- [`mdc-brandvisual`](../../../components/src/components/brandvisual/knowledge-base/brandvisual.component.md)
  component (Tier 3) — rendering a brand visual.
