---
title: Divider
summary: Usage, guidelines, and accessibility for mdc-divider — a thin horizontal or vertical separator with optional centered label or grabber button.
tier: 3
component: divider
---

## Overview

The divider draws a thin separator line between sections of a layout. It supports both horizontal and vertical orientations and two visual variants — `solid` (uniform color) and `gradient` (fades on both ends).

The component infers its type from the slotted content:

- **Primary** — no slotted content; renders just the line.
- **Text** — a single `mdc-text` child; renders the line with a centered label.
- **Grabber Button** — a single `mdc-button` child; renders the line with a centered interactive button (typically used to collapse/expand a resizable pane).

If the slot contains multiple elements or unrecognized tag names, the divider falls back to the primary type.

### When to use

- When separating sections of content within a layout, list, or table improves navigation and hierarchy.
- When a short caption between two visually similar sections clarifies the boundary.
- When a resizable or collapsible boundary between two panes needs a centered expand/collapse affordance.

### When not to use

- When whitespace, padding, or background-color groupings provide sufficient separation — dividers should add meaning, not decoration. Use them sparingly to avoid visual clutter.
- When `mdc-list` already renders separators between items — prefer list separators over nesting dividers inside list items.

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

- Keep text labels short and concise — a single word ("OR") or brief phrase fits the centered layout best. Short labels also prevent responsive and localization issues when text length increases under zoom or translation; the flanking lines shrink to accommodate longer label text.
- Reserve `variant="gradient"` for Webex App products and documentation — solid dividers are appropriate for any application. Gradient dividers soften separation between navigation and content areas.
- Text dividers use the solid variant only — do not combine a label with a gradient line.
- Use grabber-button dividers only when the divider is the collapse/expand affordance; otherwise prefer a primary divider next to a separate control.

### Property/Attribute details

- **`orientation`**: `horizontal` (default) or `vertical`. Vertical text dividers are not supported.
- **`variant`**: `solid` (default) or `gradient`. Drives the line fill. Solid is universal; gradient is reserved for Webex App surfaces.
- **`arrow-direction`**: Direction of the arrow icon on the grabber button — `positive` (up for horizontal, right for vertical) or `negative` (down for horizontal, left for vertical). Default `negative`. Only relevant for grabber-button dividers. Icons used: `arrow-up-regular`, `arrow-down-regular`, `arrow-left-regular`, `arrow-right-regular`.
- **`button-position`**: Position of the grabber button along the divider — `positive` (right for horizontal, top for vertical) or `negative` (left for horizontal, bottom for vertical). Default `negative`. Only relevant for grabber-button dividers.
- **`--mdc-divider-background-color`**: Line color for solid dividers. Defaults to `outline/secondary`; may be overridden only in specific cases such as notification patterns (e.g. Webex App "New messages").

### Limitations

- Vertical text dividers are not supported — combining `orientation="vertical"` with a text child will not render a centered label. Use the horizontal variant for text dividers.
- The divider type is inferred from a single slotted child. Multiple elements or unrecognized tag names fall back to the primary type and extra content is ignored visually.
- Dividers and grabber lines can be stretched to fill their container; the line remains 1px thick.
- Grabber-button dividers expose rest, hover, pressed, active, and focused states on the slotted `mdc-button` only — the line itself has no interactive states. The arrow icon indicates opened or closed section state; there are no disabled states for grabber buttons.
- The grabber button is clickable only; there is no draggable resize state on the button itself. Wire `click` handlers in the consumer to toggle pane visibility or size.

## Accessibility

### Built-in features

The divider is presentational and exposes no implicit ARIA role. When a grabber button is slotted, the button is fully focusable and keyboard-operable on its own (it is a standard `mdc-button`), and the consumer is responsible for wiring its accessibility (`aria-label`, `aria-expanded`, click handler) to the behavior it controls.

When a text label is slotted, the label is rendered inline through `mdc-text` and is read by screen readers in document order.

#### Internal ARIA managed by the component

| Element     | Attribute     | Value                                                                                     |
| ----------- | ------------- | ----------------------------------------------------------------------------------------- |
| Host        | `data-type`   | `mdc-primary-divider` (default), `mdc-text-divider`, or `mdc-grabber-divider` (inferred) |
| Slot button | `variant`     | `secondary` (auto-applied to a slotted `mdc-button`)                                      |
| Slot button | `prefix-icon` | Arrow icon derived from `orientation` and `arrow-direction`                               |

### Implementation requirements

#### General

- Place exactly one element in the slot when using a text or grabber-button divider; multiple elements fall back to the primary type.
- Ensure sufficient contrast between the divider line and the background — the component does not enforce a contrast ratio.

#### Labelling

- When using a grabber-button divider, provide an `aria-label` on the slotted `mdc-button` describing what activating it does ("Collapse panel", "Show details").
- When the grabber button controls an expandable region, also set `aria-expanded` on the button and update it from the consumer's state machine.
