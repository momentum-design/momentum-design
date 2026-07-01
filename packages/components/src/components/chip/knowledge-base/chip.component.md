---
title: Chip
summary: Usage, guidelines, and accessibility for the mdc-chip component — a small interactive button-shaped element representing compact info, an attribute, or a quick action with optional icon and label.
tier: 3
component: chip
---

## Overview

The chip is a compact interactive surface that renders an optional leading icon and a short label. It behaves like a button (single tap or `Enter`/`Space` activation, focus, hover, and disabled states) and is commonly used to represent a tag, attribute, filter trigger, or quick action.

Keep the label short — we recommend a maximum of **20 characters** (including spaces). Chips can be connected to an `mdc-tooltip` (via the tooltip's `triggerid` pointing at the chip's `id`) to surface additional context when the label is truncated or needs explanation.

### When to use

- Use `mdc-chip` to represent an attribute, tag, or quick action that fits in a single, short word or phrase.
- Use it inside a horizontal row or wrap of chips when several short actions or attributes share the same visual weight.

### When not to use

- Use `mdc-button` when the action needs more visual weight, more text, or icon-only treatment beyond a compact tag.
- Use `mdc-filterchip` when the chip should reflect an applied filter that can be toggled and removed.
- Use `mdc-alertchip` when the chip should communicate a status (information, warning, error) rather than trigger an action.
- Use `mdc-staticchip` when the chip is purely decorative and should not be interactive (e.g. inside a list item that owns the click target).

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

- Keep the `label` short — we recommend up to 20 characters including spaces.
- Use `icon-name` only when the icon clarifies the chip; an icon-only chip is not supported (a label is required for an accessible name).
- Pick a `color` token that matches the chip's semantic meaning in your surface; do not rely on color alone to convey meaning.

### Property/Attribute details

- `label` — visible label text rendered through `mdc-text`. Used as the accessible name. Recommended max length 20 characters.
- `icon-name` — optional leading icon, rendered through `mdc-icon`. When omitted, no icon is rendered.
- `color` — visual treatment. One of `default` (default), `cobalt`, `gold`, `lime`, `mint`, `orange`, `pink`, `purple`, `slate`, `violet`.
- `disabled` — when `true`, the chip is non-interactive and removed from the tab order.
- `autoFocusOnMount` — when `true`, focuses the chip on first render.

### Limitations

- The chip is not a toggle: `active` and `soft-disabled` are explicitly reset on connect and should not be set. Use `mdc-filterchip` if a toggle is needed.
- The chip has a fixed size — the underlying button size is locked to 24, so chips share the same compact height regardless of label length.

## Accessibility

### Built-in features

The host renders with `role="button"` and a single tab stop. The component owns keyboard activation:

- `Enter` activates the chip on `keydown` (matches native button behaviour).
- `Space` activates the chip on `keyup` (matches native button behaviour; `keydown` is suppressed so the page does not scroll).
- Click activates the chip.

When `disabled` is `true`, click and keyboard activation are suppressed and the host is removed from the tab order.

The `label` provides the accessible name. The leading icon is decorative and is not announced.

#### Internal ARIA managed by the component

| Element | Attribute   | Value                                  |
| ------- | ----------- | -------------------------------------- |
| Host    | `role`      | `button`                               |
| Host    | `tabindex`  | `0` when enabled; `-1` when `disabled` |

### Implementation requirements

#### General

- Use `disabled` (not `aria-hidden` or visual cues alone) when an option must not be interactive, so the state is exposed to assistive technology and removed from the tab order.
- Do not rely on `color` alone to convey meaning — pair color with a label that already states the semantic.

#### Labelling

- Provide a meaningful `label` — it is the accessible name of the chip and is mandatory for screen-reader users.
- When the chip is truncated, connect an `mdc-tooltip` (via the tooltip's `triggerid` pointing at the chip's `id`) so the full label remains discoverable.
