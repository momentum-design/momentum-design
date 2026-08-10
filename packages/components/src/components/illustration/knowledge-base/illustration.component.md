---
title: Illustration
summary: Usage, guidelines, and accessibility for the mdc-illustration component — a dynamically loaded SVG illustration reading its source from a parent mdc-illustrationprovider.
tier: 3
component: illustration
---

## Overview

The illustration renders a larger Momentum illustration by name for expressive moments such as empty states, onboarding, and confirmations. It resolves its source from a surrounding `mdc-illustrationprovider`, so illustration assets stay centrally managed rather than bundled inline per feature.

### When to use

- Use `mdc-illustration` for larger illustrative graphics in empty states, onboarding screens, success/error confirmations, and feature highlights.
- Use `mdc-illustration` when the asset should load from the shared illustration source rather than bundled inline.

### When not to use

- Do not use `mdc-illustration` for small, single-color interface glyphs. Use `mdc-icon` instead.
- Do not use `mdc-illustration` for brand logos or wordmarks. Use `mdc-brandvisual` instead.
- Do not use `mdc-illustration` for a one-off graphic that should not load through the provider system. Use an inline `<svg>` instead.

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

Override the size with the `--mdc-illustration-size` custom property:

```html
<mdc-illustration
  name="success-confetti"
  style="--mdc-illustration-size: 240px;"
></mdc-illustration>
```

Listen for the `load` event to react to a successful fetch and `error` to handle a failed fetch.

### Composition

- Mount `mdc-illustration` inside an `mdc-illustrationprovider`; outside of one it cannot resolve its source and renders nothing.
- Use a single illustration per empty state or confirmation surface; pairing two on the same screen dilutes their visual weight.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `name` | Filename of the illustration to load (without extension). When unset or the fetch fails, nothing renders. The name also determines the default size and palette. |
| `aria-label` / `aria-labelledby` | Accessible name for an informative illustration; setting either gives the host `role="img"`. Leave both unset for decorative use. |

### Limitations

- **Provider required** — outside an `mdc-illustrationprovider` the illustration cannot resolve its source and renders nothing.
- **Palette baked in** — coloring is fixed per illustration `name` with no runtime recolor; pick a different `name` for a different palette.
- **Size baked in** — the default size comes from the `name`; override the rendered size with the `--mdc-illustration-size` custom property.
- **SVG only** — the component fetches and inlines SVG assets; other formats are not supported.

## Accessibility

### Built-in features

The component handles two accessibility modes, selected by what the consumer sets on it:

- **Decorative**: no `aria-label` and no `aria-labelledby`. The host has no `role`, and the inlined `<svg>` is set to `aria-hidden="true"` so screen readers skip it entirely.
- **Informative**: `aria-label` (or `aria-labelledby`) is set. The host receives `role="img"` and the configured accessible name is announced. The inlined `<svg>` remains `aria-hidden="true"` so its internal contents do not duplicate the announcement.

The component does not own keyboard handling or focus.

#### Internal ARIA managed by the component

| Element     | Attribute         | Value                                                                  |
| ----------- | ----------------- | ---------------------------------------------------------------------- |
| Host        | `role`            | `img` when `aria-label` or `aria-labelledby` is set, otherwise removed |
| Host        | `aria-label`      | mirrors `aria-label` when set                                          |
| Host        | `aria-labelledby` | mirrors `aria-labelledby` when set                                     |
| Inlined SVG | `aria-hidden`     | `true` (the SVG content is never announced)                            |
| Inlined SVG | `data-name`       | mirrors the illustration `name`                                        |
| Inlined SVG | `part`            | `illustration`                                                         |

### Implementation requirements

#### Labeling

- Leave `aria-label`/`aria-labelledby` unset for decorative illustrations — the SVG is already hidden from screen readers.
- For informative illustrations, provide a meaningful `aria-label` (or `aria-labelledby`) describing what the illustration conveys to a sighted user.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-illustrationprovider` | Required ancestor that configures the illustration source. |
| `mdc-icon` | For small, single-color interface glyphs. |
| `mdc-brandvisual` | For brand logos and wordmarks. |
