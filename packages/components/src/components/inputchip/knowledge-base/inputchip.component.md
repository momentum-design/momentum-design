---
title: Inputchip
summary: Usage, guidelines, and accessibility for the mdc-inputchip component — an interactive chip representing a tokenised input value with a leading prefix, a label, and a close button.
tier: 3
component: inputchip
---

## Overview

The inputchip represents a single tokenised value: a short label with an optional leading prefix (icon name or arbitrary slotted content such as an avatar) and a close button that fires a `remove` event when activated. It is used in patterns where multiple values are collected into a list of chips (recipients, filters, tags).

The chip supports an `error` visual state for invalid values, a `disabled` state that also disables the close button, and a `prefix` slot that takes precedence over `icon-name` when both are provided.

### When to use

- Use `mdc-inputchip` to represent individual values inside a multi-value input pattern: token-style inputs for recipients, tags, filters, or any list of removable items.
- Use it when the consumer needs full control over chip removal — the chip emits `remove` and the consumer decides what to do with that signal.

### When not to use

- Use `mdc-filterchip` for chips that toggle a selected/unselected state to filter a list, rather than representing a removable input value.
- Use `mdc-chip` for static, non-removable display chips.

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

- Keep the `label` short — we recommend a maximum length of 20 characters (including spaces). Longer values are visually truncated.
- Use `icon-name` for simple iconographic prefixes; use the `prefix` slot for richer content such as avatars or presence indicators (slot content always wins over `icon-name`).
- Set `error="true"` when the represented value fails validation; pair the chip with surrounding helper text that explains the failure.

### Property/Attribute details

- `label` — the visible text. Default `''`. Aim for ≤20 characters.
- `icon-name` — name of the icon rendered in the leading prefix when no `prefix` slot content is provided. Default unset.
- `error` — when `true`, switches the chip to its error visual treatment. Default `false`.
- `disabled` — when `true`, dims the chip and disables the close button so the value cannot be removed by user interaction.
- `clear-aria-label` — accessible name for the close button. Required (the close button has no visible text).

### Limitations

- The chip is not form-associated — it does not submit a value of its own. The owning input pattern is responsible for tracking which values are currently represented as chips and serialising them when the form submits.

## Accessibility

### Built-in features

The close button is rendered as a tertiary `mdc-button` with its own `aria-label` (sourced from `clear-aria-label`), so screen readers announce the remove action. Activating the button (click, Enter, or Space) dispatches a composed, bubbling `remove` event the consumer listens for. When `disabled` is `true`, the close button is also disabled, so the chip cannot be removed by keyboard or pointer.

The label and prefix icon are presentational — the consumer chooses how to expose the chip's meaning through `clear-aria-label` (which typically includes the value, e.g. `"Remove alex@example.com"`).

#### Internal ARIA managed by the component

| Element        | Attribute     | Value                              |
| -------------- | ------------- | ---------------------------------- |
| Close button   | `aria-label`  | mirrors `clear-aria-label`         |
| Close button   | `disabled`    | reflects `disabled`                |

### Implementation requirements

#### Labelling

- Always set `clear-aria-label` to a value that identifies which chip will be removed (e.g. `"Remove alex@example.com"`); the close button otherwise has no accessible name.
- When using slotted prefix content such as an avatar, do not rely on the avatar's accessible name to identify the chip — the `clear-aria-label` is the only name announced for the remove action.
