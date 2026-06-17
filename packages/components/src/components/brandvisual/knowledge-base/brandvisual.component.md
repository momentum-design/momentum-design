---
title: Brandvisual
summary: Usage, guidelines, and accessibility for the mdc-brandvisual component — a dynamic loader that renders branded logos and wordmarks from the Momentum brand-visuals package.
tier: 3
component: brandvisual
---

## Overview

The brandvisual renders brand artwork — logos and wordmarks — from the Momentum `brand-visuals` package. Assets are loaded dynamically by name, so the consumer only references the visual they need and the component handles fetching and inserting the SVG or image at runtime. Successful loads emit a `load` event; failed lookups emit an `error` event so the host application can react.

### When to use

- Use `mdc-brandvisual` to render product, company, or partner logos that ship with the Momentum brand library.
- Use it when the logo asset is published in `@momentum-design/brand-visuals` and you want the design system to keep the artwork in sync rather than hard-coding inline SVG.

### When not to use

- Use `mdc-icon` for UI iconography (controls, status, decorative glyphs) rather than brand artwork.
- Use `mdc-illustration` for larger illustrative imagery that is not a brand mark.
- Use a plain `<img>` tag when the asset lives outside the Momentum brand library and you do not need the dynamic-loading or event semantics.

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

### Property/Attribute details

- `name` — the filename of the brand visual to load from `@momentum-design/brand-visuals`. Changing the value triggers a new dynamic import. On success the component dispatches a `load` event; on failure it dispatches an `error` event whose `event.detail.error` carries the original error (for example, an unknown `name` or a missing asset).
- `alt-text` — accessible alternative text. Applied to the underlying `<img>` element when the loaded asset is an image (e.g. PNG). For inline SVG artwork, provide the accessible name via the surrounding context (see Accessibility).

## Accessibility

### Built-in features

The brandvisual renders the fetched artwork as-is and does not set any ARIA role on the host element. When the loaded asset is an image (PNG), the component forwards `alt-text` onto the `<img>`'s `alt` attribute, giving screen readers an accessible name for that image.

#### Internal ARIA managed by the component

| Element                   | Attribute | Value                                                                |
| ------------------------- | --------- | -------------------------------------------------------------------- |
| Host                      | `role`    | None set by the component                                            |
| Loaded `<img>` (PNG only) | `alt`     | Mirrors the `alt-text` attribute set by the consumer                 |

### Implementation requirements

#### Labelling

- For image (PNG) assets, always set `alt-text` to a short description of what the logo represents (e.g. `alt-text="Webex"`). Leave `alt-text` empty only when the same brand name is already conveyed by adjacent visible text.
- For SVG assets (which do not receive the `alt` attribute), provide the accessible name through the surrounding context — for example, wrap the brandvisual in an element with `aria-label`, or place visually hidden text alongside it.
- When the brand visual is purely decorative and a non-decorative label exists nearby, mark the host with `aria-hidden="true"` so assistive technologies do not announce it twice.
