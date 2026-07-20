---
title: Divider
summary: Usage, guidelines, and accessibility for the mdc-divider component — a thin horizontal or vertical separator that can host a centered text label or an interactive grabber button.
tier: 3
component: divider
---

## Overview

The divider separates regions of a layout so users can see where one section ends and the next begins. It can optionally caption the break with a short label, or act as a resize boundary when paired with a grabber button.

### When to use

- Use `mdc-divider` to separate sections of content within a layout, list, or table.
- Use `mdc-divider` with an `mdc-text` child to caption the break between two visually similar sections.
- Use `mdc-divider` with an `mdc-button` child to create a resizable or collapsible boundary between two panes.

### When not to use

- Do not use `mdc-divider` purely for decoration where spacing would do. Use layout whitespace instead.
- Do not use `mdc-divider` between items in an `mdc-list`. Use the list's own separators instead.
- Do not use `mdc-divider` to flag or highlight a single block. Use `mdc-marker` instead.

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

### Composition

- Leave the slot empty for a plain separator; the divider renders just the line.
- Slot a single `mdc-text` child for a labeled divider, or a single `mdc-button` child for a grabber divider — the divider infers its type from that one child.
- For a grabber divider, the divider owns the button's `variant="secondary"` and `prefix-icon` (derived from `orientation` and `arrow-direction`); you own the button's `click` handling and its accessible name.
- More than one slotted child, or an unrecognized tag, falls back to the plain divider.

### Content guidance

- Keep a text-divider label short — a single word ("OR") or a brief phrase fits the centered layout best and survives localization and zoom.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `orientation` | `horizontal` (default) or `vertical` line. A vertical divider cannot carry a text label. |
| `variant` | `solid` (default) or `gradient` fill. Reserve `gradient` for colored surfaces, such as between navigation and content, where a solid line would feel heavy. |
| `arrow-direction` | Grabber only: which way the button's arrow points — `positive` (up/right) or `negative` (down/left, default). Match it to the open or closed state of the pane it controls. |
| `button-position` | Grabber only: where the button sits along the line — `positive` (right/top) or `negative` (left/bottom, default). |

### Limitations

- **No vertical text divider** — a `vertical` orientation cannot render a centered label; use a `horizontal` divider for labeled breaks.
- **Single slotted child** — the type is inferred from one child; extra elements or unknown tags fall back to the plain line.
- **Line is not interactive** — only a slotted grabber button is operable; the line has no states of its own, so wire resize or collapse behavior on the button.
- **No enforced contrast** — the component does not guarantee a contrast ratio against its background; verify the line is perceivable.

## Accessibility

### Built-in features

The divider is presentational and exposes no implicit ARIA role. A slotted text label is rendered inline through `mdc-text` and read in document order. A slotted grabber button is a standard `mdc-button` — focusable and keyboard-operable on its own — and the consumer wires its accessibility to the behavior it controls.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `data-type` | `mdc-primary-divider` (default), `mdc-text-divider`, or `mdc-grabber-divider` (inferred from the slot) |
| Slot button | `variant` | `secondary` (auto-applied to a slotted `mdc-button`) |
| Slot button | `prefix-icon` | Arrow icon derived from `orientation` and `arrow-direction` |

### Implementation requirements

#### General

- Place exactly one element in the slot for a text or grabber divider; multiple elements fall back to the plain type.
- Ensure sufficient contrast between the line and the background — the component does not enforce a ratio.

#### Labeling

- On a grabber divider, give the slotted `mdc-button` an `aria-label` describing what activating it does ("Collapse panel", "Show details").
- When the grabber controls an expandable region, set `aria-expanded` on the button and keep it in sync with the consumer's state.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-marker` | For flagging or highlighting a single block rather than separating sections. |
| `mdc-text` | Slotted as the label of a text divider. |
| `mdc-button` | Slotted as the grabber on a resizable or collapsible divider. |
