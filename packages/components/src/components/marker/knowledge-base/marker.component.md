---
title: Marker
summary: Usage, guidelines, and accessibility for the mdc-marker component — a thin vertical visual indicator (solid or striped) used alongside list items, cards, or content blocks to convey status.
tier: 3
component: marker
---

## Overview

The marker is a thin vertical line (0.25rem wide by default) used to draw the eye to a piece of content — typically rendered alongside a list item, card, or content block to indicate status, priority, or categorisation. Two visual variants are available: `solid` (a single coloured line) and `striped` (a line with diagonal stripes for a high-attention variant).

The marker is purely presentational; its meaning must be conveyed elsewhere (label, status text, icon) because it has no accessible name.

### When to use

- Use `mdc-marker` to draw attention to important content, signal priority, or visually categorise items inside a layout.
- Use it as a decorative companion to a list item, card, or content block — never as the sole signal for the information.

### When not to use

- Use a label, status text, or an icon when the meaning must be announced to screen readers — the marker alone is invisible to assistive technology.
- Use `mdc-divider` for separating content sections rather than highlighting a single block.

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

Customise the colour and width with CSS custom properties:

```html
<mdc-marker
  variant="solid"
  style="--mdc-marker-solid-background-color: var(--mds-color-theme-text-error); --mdc-marker-width: 0.5rem;"
></mdc-marker>
```

### Content guidance

- Always pair the marker with text or an icon that conveys the same meaning — the colour and pattern alone are not accessible.
- Reserve the `striped` variant for the highest-priority or most urgent treatment so it retains its visual weight.
- Use the CSS custom properties (`--mdc-marker-solid-background-color`, `--mdc-marker-striped-color`, `--mdc-marker-striped-background-color`, `--mdc-marker-width`) to map the marker into a theme's colour tokens.

### Property/Attribute details

- `variant` — `solid` (default; single coloured line) or `striped` (line with diagonal stripes for higher-attention treatment).

### Limitations

- The marker is decorative and has no accessible name. It is invisible to screen readers and must always be accompanied by a text or icon affordance that carries the same meaning.

## Accessibility

### Built-in features

The marker has no role, no accessible name, and no keyboard or focus behaviour — it is a purely decorative bar. Screen readers skip it.

### Implementation requirements

#### General

- Always pair the marker with a text label, status string, or icon that conveys the same meaning. Do not rely on colour or pattern alone.
- Ensure sufficient colour contrast between the marker and the surrounding background so sighted users with low vision can perceive it.
