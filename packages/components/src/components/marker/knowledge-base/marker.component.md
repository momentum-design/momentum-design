---
title: Marker
summary: Usage, guidelines, and accessibility for the mdc-marker component — a thin vertical indicator (solid or striped) used alongside content to convey status or category.
tier: 3
component: marker
---

## Overview

The marker draws the eye to a piece of content — flagging a row, card, or block as having a status, priority, or category. It is presentational, so the meaning it hints at is carried by accompanying text or an icon.

### When to use

- Use `mdc-marker` to flag a row, card, or content block with a status, priority, or category cue.
- Use `mdc-marker` `striped` for the highest-attention treatment; use `solid` (default) for everything else.

### When not to use

- Do not use `mdc-marker` as the only signal for meaning; it has no accessible name. Pair it with text or an icon instead.
- Do not use `mdc-marker` to separate sections of a layout. Use `mdc-divider` instead.
- Do not use `mdc-marker` to mark items in a list. Use `mdc-bullet` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/marker/index.js"; // custom element registration
// or via React wrapper
import { Marker } from '@momentum-design/components/dist/react';
```

Solid marker next to a card title:

```html
<div class="row">
  <mdc-marker variant="solid"></mdc-marker>
  <mdc-text type="body-midsize-bold">Priority item</mdc-text>
</div>
```

Override the fill color and width with CSS custom properties to map the marker into a theme's tokens:

```html
<mdc-marker
  variant="solid"
  style="--mdc-marker-solid-background-color: var(--mds-color-theme-text-error); --mdc-marker-width: 0.5rem;"
></mdc-marker>
```

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `variant` | `solid` (default) for a single-color line, or `striped` for a diagonal-stripe line. Reserve `striped` for the most urgent state so it keeps its visual weight. |

### Limitations

- **No accessible name** — the marker is decorative and invisible to screen readers; adjacent text or an icon must convey its meaning.
- **Color is meaning-free to AT** — overriding the fill to signal status only helps sighted users, so always pair it with a textual status.
- **No enforced contrast** — verify the marker is perceivable against its background; the component does not guarantee a ratio.

## Accessibility

### Built-in features

The marker has no role, no accessible name, and no keyboard or focus behavior — it is a purely decorative bar that screen readers skip.

### Implementation requirements

#### General

- Pair the marker with a text label, status string, or icon that conveys the same meaning; do not rely on color or pattern alone.
- Ensure sufficient contrast between the marker and its background so users with low vision can perceive it.

#### Labeling

- The marker exposes no accessible name; put the status or category into adjacent visible text so assistive technology can announce it.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-divider` | For separating sections rather than flagging a single block. |
| `mdc-bullet` | For marking items in a list rather than flagging content. |
| `mdc-badge` | For counts or notification status rather than a status or category cue. |
