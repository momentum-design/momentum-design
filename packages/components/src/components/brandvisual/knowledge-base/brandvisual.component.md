---
title: Brandvisual
summary: Usage, guidelines, and accessibility for the mdc-brandvisual component — a dynamic loader that renders branded logos and wordmarks from the Momentum brand-visuals package.
tier: 3
component: brandvisual
---

## Overview

The brandvisual renders official brand artwork — logos and wordmarks — from the Momentum `brand-visuals` library. Loading by name keeps brand marks centrally managed and consistent, so products reference the approved artwork instead of hand-maintaining inline copies.

### When to use

- Use `mdc-brandvisual` to render product, company, or partner logos that ship in the Momentum brand library.
- Use `mdc-brandvisual` when you want the design system to keep brand artwork in sync rather than hard-coding inline SVG.

### When not to use

- Do not use `mdc-brandvisual` for UI iconography such as controls, status, or decorative glyphs. Use `mdc-icon` instead.
- Do not use `mdc-brandvisual` for larger illustrative imagery that is not a brand mark. Use `mdc-illustration` instead.
- Do not use `mdc-brandvisual` for assets outside the Momentum brand library. Use a plain `<img>` tag instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/brandvisual/index.js"; // custom element registration
// or via React wrapper
import { Brandvisual } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-brandvisual name="webex-logo" alt-text="Webex"></mdc-brandvisual>
```

Listen for the `load` event to react to a successful fetch and `error` to handle a failed lookup (`event.detail.error`).

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `name` | Filename of the brand visual to load from `@momentum-design/brand-visuals`. Changing it triggers a new dynamic import; success fires `load`, an unknown or missing asset fires `error`. |
| `alt-text` | Accessible alternative text applied to the underlying `<img>` when the loaded asset is an image (PNG). For inline SVG artwork, name it through surrounding context instead. |

### Limitations

- **Library-bound** — only assets published in `@momentum-design/brand-visuals` render; an unknown `name` fires `error` and shows nothing.
- **Alt text is image-only** — `alt-text` reaches the DOM only for PNG assets; SVG artwork needs an accessible name from surrounding context.
- **No sizing API** — the component exposes no size property; control the footprint through CSS and layout.

## Accessibility

### Built-in features

The brandvisual renders the fetched artwork as-is and sets no ARIA role on the host. When the asset is a PNG, the component forwards `alt-text` onto the `<img>`'s `alt` attribute, giving screen readers an accessible name for that image.

#### Internal ARIA managed by the component

| Element                   | Attribute | Value                                                |
| ------------------------- | --------- | ---------------------------------------------------- |
| Host                      | `role`    | None set by the component                            |
| Loaded `<img>` (PNG only) | `alt`     | Mirrors the `alt-text` attribute set by the consumer |

### Implementation requirements

#### Labeling

- For image (PNG) assets, set `alt-text` to a short description of what the logo represents (e.g. `alt-text="Webex"`). Leave it empty only when the same brand name is already in adjacent visible text.
- For SVG assets (which do not receive `alt`), provide the accessible name through surrounding context — for example, wrap the brandvisual in an element with `aria-label`, or place visually hidden text alongside it.
- When the brand visual is purely decorative and a non-decorative label sits nearby, mark the host with `aria-hidden="true"` so assistive technologies do not announce it twice.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-icon` | For UI iconography rather than brand artwork. |
| `mdc-illustration` | For larger illustrative imagery that is not a brand mark. |
