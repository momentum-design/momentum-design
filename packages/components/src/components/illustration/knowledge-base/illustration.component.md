---
title: Illustration
summary: Usage, guidelines, and accessibility for the mdc-illustration component — a dynamically loaded SVG illustration reading its URL from a parent mdc-illustrationprovider.
tier: 3
component: illustration
---

## Overview

The illustration renders an SVG illustration by name. It must be mounted inside an `mdc-illustrationprovider`, which supplies the source URL (or selects the `momentum-illustrations` package), file extension, and optional cache strategy. Setting `name` triggers a fetch (or dynamic import); on success the SVG is inlined into the component, and on failure the component renders nothing.

Default sizing is baked into each illustration name. Override the rendered size with the `--mdc-illustration-size` CSS property. Colouring is also baked into the SVG, so the choice of `name` determines the palette.

### When to use

- Use `mdc-illustration` for larger illustrative graphics in empty states, onboarding screens, success/error confirmations, and feature highlights.
- Use it when the asset should be loaded from the shared illustration source rather than bundled inline.

### When not to use

- Use `mdc-icon` for small, single-colour interface icons rather than full illustrations.
- Use an inline `<svg>` for one-off illustrations that do not need to be loaded through the illustration provider system.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/illustration/index.js"; // custom element registration
// or via React wrapper
import { Illustration, IllustrationProvider } from '@momentum-design/components/dist/react';
```

Minimal markup example (decorative illustration inside a provider):

```html
<mdc-illustrationprovider illustration-set="momentum-illustrations">
  <mdc-illustration name="empty-state-inbox"></mdc-illustration>
</mdc-illustrationprovider>
```

Informative illustration (announced by screen readers):

```html
<mdc-illustration
  name="empty-state-inbox"
  aria-label="Your inbox is empty"
></mdc-illustration>
```

Override the size:

```html
<mdc-illustration
  name="success-confetti"
  style="--mdc-illustration-size: 240px;"
></mdc-illustration>
```

Listen for the `load` event to react to a successful fetch and `error` to handle a failed fetch.

### Content guidance

- Pick a `name` that exists in the configured illustration set. When the illustration cannot be fetched, nothing is rendered.
- Override `--mdc-illustration-size` only when the surrounding layout demands a non-default footprint; the per-illustration defaults are designed to feel consistent across surfaces.
- Decide deliberately whether the illustration is decorative or informative — the right answer drives the ARIA contract.

### Property/Attribute details

- `name` — the filename of the illustration to load (without extension). When unset or fetch fails, nothing is rendered.
- `aria-label` — accessible name for informative illustrations. When set (or `aria-labelledby` is set), the host receives `role="img"`. When unset, `role` is removed.
- `aria-labelledby` — id of an element that labels the illustration. Same effect on `role` as `aria-label`.

### Limitations

- Colouring is baked into each illustration name — the component does not expose a way to recolour the SVG at runtime. Pick a different `name` for a different palette.
- Default sizing is also baked into each illustration name. Use the `--mdc-illustration-size` CSS property to override the rendered size when needed.

## Accessibility

### Built-in features

The component handles two accessibility modes, selected by what the consumer sets on it:

- **Decorative**: no `aria-label` and no `aria-labelledby`. The host has no `role`, and the inlined `<svg>` is set to `aria-hidden="true"` so screen readers skip it entirely.
- **Informative**: `aria-label` (or `aria-labelledby`) is set. The host receives `role="img"` and the configured accessible name is announced. The inlined `<svg>` remains `aria-hidden="true"` so the SVG's internal contents do not duplicate the announcement.

The component does not own keyboard handling or focus.

#### Internal ARIA managed by the component

| Element       | Attribute        | Value                                                                       |
| ------------- | ---------------- | --------------------------------------------------------------------------- |
| Host          | `role`           | `img` when `aria-label` or `aria-labelledby` is set, otherwise removed      |
| Host          | `aria-label`     | mirrors `aria-label` when set                                               |
| Host          | `aria-labelledby` | mirrors `aria-labelledby` when set                                         |
| Inlined SVG   | `aria-hidden`    | `true` (the SVG content is never announced)                                 |
| Inlined SVG   | `data-name`      | mirrors the illustration `name`                                             |
| Inlined SVG   | `part`           | `illustration`                                                              |

### Implementation requirements

#### General

- Mount every `mdc-illustration` inside an `mdc-illustrationprovider`; outside of one the fetch fails and the component renders nothing.
- Use a single illustration per empty state / confirmation surface — pairing two illustrations on the same screen dilutes their visual weight.

#### Labelling

- Leave `aria-label`/`aria-labelledby` unset for decorative illustrations — the SVG is already hidden from screen readers.
- For informative illustrations, provide a meaningful `aria-label` (or `aria-labelledby`) that describes what the illustration conveys to a sighted user.
