---
title: Marker
summary: Usage, guidelines, and accessibility for mdc-marker — a thin vertical visual indicator used to call out rows, calendar items, or content blocks.
tier: 3
component: marker
---

## Overview

Markers draw attention to specific parts of content and provide visual emphasis alongside list items, cards, or content blocks. `mdc-marker` renders a thin vertical line (0.25rem / 4px wide by default) in `solid` or `striped` variants. Fill color can be customized to match context — for example validation status or calendar meeting categories — but meaning must always be conveyed elsewhere because the marker has no accessible name.

### When to use

- When visually calling out a row, calendar meeting item, or content block where a vertical accent helps users scan and categorize information.
- When a decorative companion to text or icons reinforces priority or categorization — never as the sole signal.

### When not to use

- When the meaning must be announced to screen readers — use a label, status text, or icon instead; the marker alone is invisible to assistive technology.
- When separating content sections rather than highlighting a single block. Use `mdc-divider` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/marker/index.js"; // custom element registration
// or via React wrapper
import { Marker } from '@momentum-design/components/dist/react';
```

Minimal markup example (solid marker next to a card title):

```html
<div class="row">
  <mdc-marker variant="solid"></mdc-marker>
  <mdc-text type="body-midsize-bold">Priority item</mdc-text>
</div>
```

Striped marker for higher-attention treatment:

```html
<mdc-marker variant="striped"></mdc-marker>
```

Customize color and width with CSS custom properties:

```html
<mdc-marker
  variant="solid"
  style="--mdc-marker-solid-background-color: var(--mds-color-theme-text-error); --mdc-marker-width: 0.5rem;"
></mdc-marker>
```

### Content guidance

- Always pair the marker with text or an icon that conveys the same meaning — color and pattern alone are not accessible.
- Reserve the `striped` variant for the highest-priority or most urgent treatment so it retains its visual weight.
- Override fill color with CSS custom properties to denote status types or categories (e.g. meeting types in a calendar). Default color is `outline/secondary`.
- Markers can be stretched to fill the height of their container based on layout context.

### Property/Attribute details

- **`variant`**: `solid` (default; single colored line) or `striped` (line with diagonal stripes for higher-attention treatment).
- **`--mdc-marker-solid-background-color`**: Fill color for the solid variant. Defaults to `outline/secondary`; override to match contextual status or category colors.
- **`--mdc-marker-striped-color`** / **`--mdc-marker-striped-background-color`**: Stripe and background colors for the striped variant.
- **`--mdc-marker-width`**: Line thickness. Defaults to 0.25rem (4px); increase when a bolder accent is needed in the layout.

### Limitations

- The marker is decorative and has no accessible name. It is invisible to screen readers and must always be accompanied by text or an icon that carries the same meaning.
- Width and height follow the container — ensure the parent layout gives the marker sufficient height to remain visible.

## Accessibility

### Built-in features

The marker has no role, no accessible name, and no keyboard or focus behavior — it is a purely decorative bar. Screen readers skip it.

### Implementation requirements

#### General

- Always pair the marker with a text label, status string, or icon that conveys the same meaning. Do not rely on color or pattern alone.
- Ensure sufficient color contrast between the marker and the surrounding background so sighted users with low vision can perceive it.
