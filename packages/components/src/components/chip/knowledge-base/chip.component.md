---
title: Chip
summary: Usage, guidelines, and accessibility for the mdc-chip component — a small interactive button-shaped element representing compact info, an attribute, or a quick action with optional icon and label.
tier: 3
component: chip
---

## Overview

The chip is a compact, interactive surface that renders an optional leading icon and a short label. It behaves like a button and represents a tag, attribute, or quick action in a limited space.

### When to use

- Use `mdc-chip` to represent an attribute, tag, or quick action that fits in a single short word or phrase.
- Use `mdc-chip` inside a horizontal row or wrap of chips when several short actions or attributes share the same visual weight.
- Use `mdc-chip` with a connected `mdc-tooltip` when a short label needs a brief supporting explanation on hover or focus.

### When not to use

- Do not use `mdc-chip` for an action that needs more visual weight, more text, or icon-only treatment. Use `mdc-button`.
- Do not use `mdc-chip` for an applied filter that toggles on and off. Use `mdc-filterchip`.
- Do not use `mdc-chip` to communicate a status such as error or warning. Use `mdc-alertchip`.
- Do not use `mdc-chip` for a purely decorative, non-interactive label. Use `mdc-staticchip`.
- Do not pair `mdc-chip` with an `mdc-popover` for expanded content. Use a supportive `mdc-tooltip` — a chip is meant to label or itemize information concisely, not host a popover.

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

- Keep the `label` short — up to 20 characters including spaces. Lean on the surrounding UI for context rather than expanding the label.
- Use `icon-name` only when the icon clarifies the chip; an icon-only chip is not supported (a label is required for the accessible name).
- Pick a `color` token that matches the chip's meaning in your surface; do not rely on color alone to convey meaning.
- When a label needs more context, connect a supportive `mdc-tooltip` rather than expanding the label.

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` | Visible text and accessible name (rendered via `mdc-text`). Keep to ~20 characters; required for an accessible name. |
| `icon-name` | Optional decorative leading icon. Use only when it clarifies meaning; there is no icon-only mode. |
| `color="default"` (default) | Semantic color token (`cobalt`, `gold`, `lime`, `mint`, `orange`, `pink`, `purple`, `slate`, `violet`). Use to categorize content; never as the only signal of meaning. |
| `disabled` | Makes the chip non-interactive and removes it from the tab order. Use instead of `aria-hidden` so the state reaches assistive technology. |

### Limitations

- **Not a toggle** — `active` and `soft-disabled` are reset on connect and must not be set. Use `mdc-filterchip` when you need a selectable, toggling chip.
- **Fixed 24px height** — the underlying button size is locked to `24`, so chips share the same compact height regardless of label length. Trim long labels rather than expecting the chip to grow or wrap.
- **No icon-only mode** — a chip with only `icon-name` has no accessible name. Always provide `label`.

## Accessibility

### Built-in features

The host renders with `role="button"` and a single tab stop. The component owns keyboard activation:

- `Enter` activates the chip on `keydown` (matches native button behavior).
- `Space` activates the chip on `keyup` (matches native button behavior; `keydown` is suppressed so the page does not scroll).
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

- Use `disabled` (not `aria-hidden` or visual cues alone) when a chip must not be interactive, so the state is exposed to assistive technology and removed from the tab order.
- Do not rely on `color` alone to convey meaning — pair color with a label that already states the semantic.

#### Labeling

- Provide a meaningful `label` — it is the accessible name of the chip and is mandatory for screen-reader users.
- When the label is truncated, connect an `mdc-tooltip` (via the tooltip's `triggerid` pointing at the chip's `id`) so the full label remains discoverable.

## Related components

| Component | Relationship |
|---|---|
| `mdc-staticchip` | Non-interactive version of the same label chip. Use when the chip should not be focusable or clickable. |
| `mdc-filterchip` | Selectable chip that toggles a filter and shows a checkmark. Use for filtering rather than triggering an action. |
| `mdc-alertchip` | Status chip with a reserved color set. Use to convey error/success/warning, not a generic tag or action. |
| `mdc-inputchip` | Removable chip representing a user-entered value. Use inside token-style inputs. |
| `mdc-button` | Standard action control. Use when the action needs more weight, more text, or an icon-only form. |
