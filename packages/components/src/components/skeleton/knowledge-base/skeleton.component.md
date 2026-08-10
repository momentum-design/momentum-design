---
title: Skeleton
summary: Usage, guidelines, and accessibility for the mdc-skeleton component — a gray placeholder block that signals loading content.
tier: 3
component: skeleton
---

## Overview

The skeleton is a low-fidelity placeholder that shows real content is loading and the layout is on its way, not stalled. By mirroring the shape and size of the content it replaces, it previews the structure, reduces the perceived wait, and prevents the page from shifting once the real content arrives.

### When to use

- Use `mdc-skeleton` when content is likely to take more than about 300ms to load and the layout is known ahead of time, such as cards, lists, or profile views.
- Use `mdc-skeleton` to hold the layout in place while data loads, so the page does not shift when real content replaces it.
- Use `mdc-skeleton` `circular` for avatar placeholders, `button` for button placeholders, and `rounded` or `rectangular` for text, cards, or table cells, so each placeholder matches the shape it stands in for.

### When not to use

- Do not use `mdc-skeleton` for near-instant loads (under about 200ms), where it only flickers. Render the content directly instead.
- Do not use `mdc-skeleton` when the final layout is unknown or highly dynamic. Use `mdc-spinner` instead.
- Do not use `mdc-skeleton` for full-page transitions or file uploads. Use `mdc-spinner` or `mdc-progressbar` instead.
- Do not use `mdc-skeleton` for static content that is already loaded, such as page titles, headers, or navigation. Render it directly instead.

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

### Composition

- Wrap a known-shape child in the default slot; the skeleton adopts that child's dimensions (and sets a `has-content` attribute) while hiding the child from view.
- Leave the slot empty to render a standalone block that fills its parent; size it with the `--mdc-skeleton-width` and `--mdc-skeleton-height` custom properties.
- Apply skeletons only to the data-driven parts of a progressively loading view — not every element needs one.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `variant` | Sets the placeholder's corner shape: `rectangular` (default), `rounded`, `circular` (avatars), or `button`. Choose the one closest to the content being replaced so the layout matches. |

### Limitations

- **Static placeholder** — the skeleton renders a solid block with no progress indication; it signals "loading," not how much remains.
- **Hidden from assistive tech** — the host is `aria-hidden`, so it announces nothing on its own; convey the loading state from a live region.
- **Fixed corner shapes** — corner radius is set per `variant` rather than to arbitrary values; pick the closest variant to the real content.
- **No built-in timing** — the component does not decide when to appear or disappear; the host swaps it for real content.

## Accessibility

### Built-in features

The host sets `aria-hidden="true"` on `connectedCallback`, so assistive technologies ignore the placeholder entirely. The default slot is observed, and the host toggles a `has-content` attribute so styling can switch between "fit content" and "fill parent" sizing modes.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `aria-hidden` | `true` |

### Implementation requirements

#### General

- Because the skeleton is `aria-hidden`, it contributes nothing to the accessibility tree. When the loading state matters to screen reader users, announce it from a sibling region (for example an `mdc-screenreaderannouncer` or an `aria-live` region) rather than relying on the placeholder.
- Match the skeleton's size and shape to the real content so focus order and layout stay stable when it is replaced.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-spinner` | For loading with an unknown or dynamic layout, or a single inline indicator. |
| `mdc-progressbar` | For loading with a known, measurable progress value. |
| `mdc-progressspinner` | For determinate progress shown in a compact, circular form. |
