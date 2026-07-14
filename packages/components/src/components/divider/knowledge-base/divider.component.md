---
title: Divider
summary: Usage, guidelines, and accessibility for the mdc-divider component — a thin horizontal or vertical separator that can optionally host a centered text label or an interactive grabber button.
tier: 3
component: divider
---

## Overview

The divider draws a thin separator line between sections of a layout. It supports both horizontal and vertical orientations and two visual variants — `solid` (uniform colour) and `gradient` (fades on both ends).

The component infers its type from the slotted content:

- **Primary** — no slotted content; renders just the line.
- **Text** — a single `mdc-text` child; renders the line with a centred label.
- **Grabber Button** — a single `mdc-button` child; renders the line with a centred interactive button (typically used to collapse/expand a resizable pane).

If the slot contains multiple elements or unrecognised tag names, the divider falls back to the primary type.

### When to use

- Use `mdc-divider` to separate sections of content within a layout, list, or table.
- Use a text divider to add a short caption between two visually similar sections.
- Use a grabber-button divider to create a resizable boundary between two panes.

### When not to use

- Use whitespace, padding, or background-colour groupings when a visible line is not needed — a divider should add meaning, not decoration.
- Use `mdc-list` separators rather than nesting dividers inside list items, since lists already render their own dividers.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/divider/index.js"; // custom element registration
// or via React wrapper
import { Divider } from '@momentum-design/components/dist/react';
```

Primary divider:

```html
<mdc-divider></mdc-divider>
```

Text divider:

```html
<mdc-divider>
  <mdc-text>OR</mdc-text>
</mdc-divider>
```

Grabber-button divider:

```html
<mdc-divider arrow-direction="negative" button-position="negative">
  <mdc-button aria-label="Collapse panel"></mdc-button>
</mdc-divider>
```

The component sets `data-type="mdc-primary-divider"` on connect and updates it to `mdc-text-divider` or `mdc-grabber-divider` whenever the slot contents change.

For a grabber-button divider the component automatically applies `variant="secondary"` and the correct `prefix-icon` to the slotted `mdc-button`, based on `orientation` and `arrow-direction`. The button is owned by the consumer for interactivity (e.g. `click` listeners that toggle a pane's collapsed state).

### Content guidance

- Keep text labels short — a single word ("OR") or a brief phrase fits the centred layout best.
- Use the grabber-button divider only when the divider itself is the resize/expand affordance; otherwise prefer a primary divider next to a separate control.
- Pick `variant="gradient"` when the divider sits over a coloured surface and a hard solid line would feel heavy; otherwise prefer `solid`.

### Property/Attribute details

- `orientation` — `horizontal` (default) or `vertical`. Vertical text dividers are not currently supported.
- `variant` — `solid` (default) or `gradient`. Drives the line's fill.
- `arrow-direction` — direction of the arrow icon on the grabber button. `positive` (up for horizontal, right for vertical) or `negative` (down for horizontal, left for vertical). Default `negative`. Only relevant for the grabber-button divider.
- `button-position` — position of the grabber button along the divider. `positive` (right for horizontal, top for vertical) or `negative` (left for horizontal, bottom for vertical). Default `negative`. Only relevant for the grabber-button divider.

### Limitations

- Vertical text dividers are not supported — combine `orientation="vertical"` with a text child and the layout will not render the label centred. Use the horizontal variant for text dividers.
- The divider type is inferred from a single slotted child. If the slot contains more than one element or unrecognised tag names, the divider falls back to the primary type and any extra content is ignored visually.

## Accessibility

### Built-in features

The divider is presentational and exposes no implicit ARIA role. When a grabber button is slotted, the button is fully focusable and keyboard-operable on its own (it is a standard `mdc-button`), and the consumer is responsible for wiring its accessibility (`aria-label`, `aria-expanded`, click handler) to the resize behaviour it controls.

When a text label is slotted, the label is rendered inline through `mdc-text` and is read by screen readers in document order.

#### Internal ARIA managed by the component

| Element     | Attribute   | Value                                                                                       |
| ----------- | ----------- | ------------------------------------------------------------------------------------------- |
| Host        | `data-type` | `mdc-primary-divider` (default), `mdc-text-divider`, or `mdc-grabber-divider` (inferred)    |
| Slot button | `variant`   | `secondary` (auto-applied to a slotted `mdc-button`)                                        |
| Slot button | `prefix-icon` | arrow icon derived from `orientation` and `arrow-direction`                               |

### Implementation requirements

#### General

- Place exactly one element in the slot when using a text or grabber-button divider; multiple elements fall back to the primary type.
- Ensure sufficient contrast between the divider line and the background — the component does not enforce a contrast ratio.

#### Labelling

- When using a grabber-button divider, provide an `aria-label` on the slotted `mdc-button` describing what activating it does ("Collapse panel", "Show details").
- When the grabber button controls an expandable region, also set `aria-expanded` on the button and update it from the consumer's state machine.
