---
title: Skeleton
summary: Usage, guidelines, and accessibility for the mdc-skeleton component — a grey placeholder block that signals loading content.
status: draft
tier: 3
component: skeleton
---

## Overview

The skeleton is a grey placeholder block that signals to users that real content is being loaded. It can wrap a child element to take that element's dimensions, or stretch to fill its parent when used standalone.

### When to use

- Use `mdc-skeleton` to indicate that content is loading, in place of the real content while it is being fetched or rendered.
- Use it to wrap a known-shape child (button, avatar, paragraph) so the placeholder matches the eventual layout.

### When not to use

- Use `mdc-spinner` when the loading duration is short or you only need a single inline indicator rather than a layout-matching placeholder.
- Use `mdc-progressbar` when there is a known, measurable progress value to communicate.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/skeleton/index.js"; // custom element registration
// or via React wrapper
import { Skeleton } from '@momentum-design/components/dist/react';
```

Minimal markup examples:

```html
<!-- Standalone placeholder that fills its parent -->
<mdc-skeleton variant="rounded" style="--mdc-skeleton-height: 1rem;"></mdc-skeleton>

<!-- Wrapping content so the placeholder matches the eventual layout -->
<mdc-skeleton variant="button">
  <mdc-button>Loading button</mdc-button>
</mdc-skeleton>
```

### Property/Attribute details

- `variant` — visual variant. One of:
  - `rectangular` — default, 0.25 rem border radius.
  - `rounded` — 0.5 rem border radius.
  - `circular` — 50% border radius for circular shapes (e.g. avatar placeholders).
  - `button` — 1.25 rem border radius, sized for button placeholders.
- Sizing:
  - When the default slot has content, the skeleton takes the dimensions of that content (and toggles a `has-content` attribute on the host).
  - Otherwise it grows to fill the parent container. Use the `--mdc-skeleton-width` and `--mdc-skeleton-height` CSS custom properties to size standalone skeletons.

## Accessibility

### Built-in features

The host sets `aria-hidden="true"` on `connectedCallback`, so assistive technologies ignore the placeholder entirely. The slot is observed, and the host toggles a `has-content` attribute so styling can switch between "fit content" and "fill parent" sizing modes.

#### Internal ARIA managed by the component

| Element | Attribute     | Value  |
| ------- | ------------- | ------ |
| Host    | `aria-hidden` | `true` |

### Notes

Because the host is `aria-hidden="true"`, the skeleton itself contributes nothing to the accessibility tree. When the loading state is important for screen readers, announce it from a sibling region (for example via `mdc-screenreaderannouncer` or an `aria-live` region) rather than relying on the skeleton.
