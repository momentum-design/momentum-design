---
title: Inputchip
summary: Usage, guidelines, and accessibility for the mdc-inputchip component — an interactive chip representing a tokenized input value with a leading prefix, a label, and a close button.
tier: 3
component: inputchip
---

## Overview

The inputchip represents a single tokenized value: a short label with an optional leading prefix (icon name or arbitrary slotted content such as an avatar) and a close button that fires a `remove` event when activated. It is used in patterns where multiple values are collected into a list of chips (recipients, tags, filters), typically paired with an `mdc-input` field.

The chip supports an `error` visual state for invalid values, a `disabled` state that also disables the close button, and a `prefix` slot that takes precedence over `icon-name` when both are provided.

### When to use

- Use `mdc-inputchip` to represent individual values inside a multi-value input pattern — token-style inputs for recipients, tags, or filters, typically paired with a text field.
- Use `mdc-inputchip` when the consumer needs full control over removal — the chip emits `remove` and the consumer decides what to do with that signal.

### When not to use

- Do not use `mdc-inputchip` for a chip that toggles a selected/unselected filter state. Use `mdc-filterchip`.
- Do not use `mdc-inputchip` for a static, non-removable display chip. Use `mdc-chip` or `mdc-staticchip`.
- Do not use `mdc-inputchip` to convey a status such as error or warning on its own. Use `mdc-alertchip`.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/inputchip/index.js"; // custom element registration
// or via React wrapper
import { InputChip } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-inputchip
  label="alex@example.com"
  icon-name="email-bold"
  clear-aria-label="Remove alex@example.com"
></mdc-inputchip>
```

With an avatar slotted as the prefix (takes precedence over `icon-name`):

```html
<mdc-inputchip label="Alex Kim" clear-aria-label="Remove Alex Kim">
  <mdc-avatar slot="prefix" initials="AK" size="24"></mdc-avatar>
</mdc-inputchip>
```

Listen for the `remove` event to react to the close button being clicked.

### Content guidance

- Keep the `label` short — a maximum of 20 characters (including spaces). Longer values are visually truncated.
- An input chip cannot be edited in place; to change a value, remove the chip and add a new one.
- Use `icon-name` for simple iconographic prefixes; use the `prefix` slot for richer content such as avatars or presence indicators (slot content always wins over `icon-name`).
- Set `error="true"` when the represented value fails validation, and pair the chip with surrounding helper text that explains the failure.

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` | Visible text and the value the chip represents. Default `''`. Aim for ≤20 characters; longer values are truncated. |
| `icon-name` | Leading prefix icon when no `prefix` slot content is provided. Use for simple iconographic prefixes. |
| `error` | Switches the chip to its error treatment for invalid values. Pair with helper text explaining the failure. Default `false`. |
| `disabled` | Dims the chip and disables the close button so the value cannot be removed by interaction. |
| `clear-aria-label` | Accessible name for the close button. Required — the close button has no visible text. |

**Note:** the `prefix` slot (for richer content such as an avatar) takes precedence over `icon-name` when both are provided.

### Limitations

- **Values aren't editable** — an input chip cannot be edited in place. To change a value, remove the chip and add a new one.
- **Not form-associated** — the chip does not submit a value of its own. The owning input pattern must track which values are represented and serialize them when the form submits.
- **Long labels truncate** — values beyond 20 characters are visually truncated; keep the value short or expose the full value elsewhere.

## Accessibility

### Built-in features

The close button is rendered as a tertiary `mdc-button` with its own `aria-label` (sourced from `clear-aria-label`), so screen readers announce the remove action. Activating the button (click, Enter, or Space) dispatches a composed, bubbling `remove` event the consumer listens for. When `disabled` is `true`, the close button is also disabled, so the chip cannot be removed by keyboard or pointer.

The label and prefix icon are presentational — the consumer chooses how to expose the chip's meaning through `clear-aria-label` (which typically includes the value, for example `"Remove alex@example.com"`).

#### Internal ARIA managed by the component

| Element        | Attribute     | Value                              |
| -------------- | ------------- | ---------------------------------- |
| Close button   | `aria-label`  | mirrors `clear-aria-label`         |
| Close button   | `disabled`    | reflects `disabled`                |

### Implementation requirements

#### Labeling

- Always set `clear-aria-label` to a value that identifies which chip will be removed (for example `"Remove alex@example.com"`); the close button otherwise has no accessible name.
- When using slotted prefix content such as an avatar, do not rely on the avatar's accessible name to identify the chip — the `clear-aria-label` is the only name announced for the remove action.

## Related components

| Component | Relationship |
|---|---|
| `mdc-input` | The text field an input chip is typically paired with to collect new values. |
| `mdc-filterchip` | Toggles a selected/unselected filter state instead of representing a removable value. |
| `mdc-chip` | Static, non-removable interactive chip for tags or actions. |
| `mdc-staticchip` | Non-interactive label chip for read-only values. |
| `mdc-avatar` | Slotted as `prefix` content to identify the value a chip represents. |
