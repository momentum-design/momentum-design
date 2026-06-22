---
title: Chip
summary: Usage, guidelines, and accessibility for mdc-chip — an interactive label chip for compact attributes, categories, or quick actions, with optional tooltip support.
tier: 3
component: chip
---

## Overview

Chips are small, interactive elements that represent a status, attribute, or action in a concise format. `mdc-chip` is the interactive label chip: a 24px-tall button-shaped surface with an optional leading icon and short label, commonly used when the chip needs to respond to pointer or keyboard input — for example to reveal supportive detail through an `mdc-tooltip`.

### When to use

- When a short label or attribute should be interactive — such as surfacing extra context on hover or focus via an `mdc-tooltip`.
- When several compact actions or attributes share the same visual weight in a horizontal row or wrap of chips.

### When not to use

- When the chip is purely informational and does not need interaction. Use `mdc-staticchip` instead.
- When the chip should toggle an applied filter on or off. Use `mdc-filterchip` instead.
- When the chip should communicate alert or validation status. Use `mdc-alertchip` instead.
- When the chip represents a removable user-entered value alongside an input pattern. Use `mdc-inputchip` instead.
- When the action needs more visual weight or longer text. Use `mdc-button` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/chip/index.js"; // custom element registration
// or via React wrapper
import { Chip } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-chip label="Design" icon-name="brush-bold"></mdc-chip>
```

Listen for the `click` event (or `keydown`/`keyup` for keyboard activation) to react to chip activations.

### Content guidance

- Keep the `label` short — limit to a maximum of **20 characters** including spaces. Labels should not need to be over-explained; use surrounding UI context and tooltips where needed.
- Use `icon-name` only when the icon clarifies the chip; a label is required for an accessible name.
- Use sentence case for the label.

### Property/Attribute details

- **`label`**: Visible label text rendered through `mdc-text`. Used as the accessible name. Recommended max length 20 characters.
- **`icon-name`**: Optional leading icon, rendered through `mdc-icon`. When omitted, no icon is rendered.
- **`color`**: Visual treatment for categorization or emphasis — one of `default` (default), `cobalt`, `gold`, `lime`, `mint`, `orange`, `pink`, `purple`, `slate`, `violet`. Do not use these colors to convey alert or validation status; reserve status colors for `mdc-alertchip`.
- **`disabled`**: When `true`, the chip is non-interactive and removed from the tab order.
- **`autoFocusOnMount`**: When `true`, focuses the chip on first render.

Connect an `mdc-tooltip` (via the tooltip's `triggerid` pointing at the chip's `id`) when the label is truncated or needs supplementary explanation on hover or keyboard focus.

### Limitations

- The chip is not a toggle: `active` and `soft-disabled` are explicitly reset on connect and should not be set. Use `mdc-filterchip` if a toggle is needed.
- The chip has a fixed size — the underlying button size is locked to 24, so chips share the same compact height regardless of label length.

## Accessibility

### Built-in features

The host renders with `role="button"` and a single tab stop. The component owns keyboard activation:

- `Enter` activates the chip on `keydown` (matches native button behavior).
- `Space` activates the chip on `keyup` (matches native button behavior; `keydown` is suppressed so the page does not scroll).
- Click activates the chip.

When `disabled` is `true`, click and keyboard activation are suppressed and the host is removed from the tab order.

The `label` provides the accessible name. The leading icon is decorative and is not announced.

#### Internal ARIA managed by the component

| Element | Attribute  | Value                                  |
| ------- | ---------- | -------------------------------------- |
| Host    | `role`     | `button`                               |
| Host    | `tabindex` | `0` when enabled; `-1` when `disabled` |

### Implementation requirements

#### General

- Use `disabled` (not `aria-hidden` or visual cues alone) when an option must not be interactive, so the state is exposed to assistive technology and removed from the tab order.
- Do not rely on `color` alone to convey meaning — pair color with a label that already states the semantic.

#### Labelling

- Provide a meaningful `label` — it is the accessible name of the chip and is mandatory for screen-reader users.
- When the chip is truncated, connect an `mdc-tooltip` (via the tooltip's `triggerid` pointing at the chip's `id`) so the full label remains discoverable.
