---
title: Inputchip
summary: Usage, guidelines, and accessibility for mdc-inputchip — a chip representing a tokenized user input value with an optional prefix, label, and removable close button.
tier: 3
component: inputchip
---

## Overview

Input chips represent user-entered values — such as tags, email addresses, or other small tokens — inside a multi-value input pattern. `mdc-inputchip` shows a short label with an optional leading prefix (icon or slotted content such as an avatar) and a close button that fires a `remove` event when activated.

### When to use

- To represent individual values inside a multi-value input pattern: recipients, tags, filters, or any list of removable items the user has entered.
- When input chips should be paired with a text field so users can add new values while existing ones appear as chips.
- When the consumer needs full control over chip removal — the chip emits `remove` and the consumer decides how to update state.

### When not to use

- When the chip should toggle a selected/unselected filter state. Use `mdc-filterchip` instead.
- When the chip is a static, non-removable label. Use `mdc-staticchip` or `mdc-chip` instead.
- When the chip should communicate system alert status. Use `mdc-alertchip` instead.
- As a standalone input without an accompanying text field when users still need to enter new values.

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

- Keep the `label` short — limit to a maximum of **20 characters** including spaces. Longer values are visually truncated.
- Use `icon-name` for simple iconographic prefixes; use the `prefix` slot for richer content such as avatars or presence indicators (slot content always wins over `icon-name`).
- Pair input chips with a text field when users need to enter values that become chips — for example adding tags to a post or recipients to an email field.
- Set `error="true"` when the represented value fails validation — incorrect format, invalid data, duplication, or exceeding character limits. Pair the chip with surrounding helper text that explains the failure.

### Property/Attribute details

- **`label`**: The visible text. Default `''`. Aim for ≤20 characters.
- **`icon-name`**: Name of the icon rendered in the leading prefix when no `prefix` slot content is provided. Default unset.
- **`error`**: When `true`, switches the chip to its error visual treatment (background red). Default `false`. Input chips use default gray for the normal state and red only for invalid or error states.
- **`disabled`**: When `true`, dims the chip and disables the close button so the value cannot be removed by user interaction.
- **`clear-aria-label`**: Accessible name for the close button. Required (the close button has no visible text).

### Limitations

- The chip is not form-associated — it does not submit a value of its own. The owning input pattern is responsible for tracking which values are currently represented as chips and serializing them when the form submits.
- Labels cannot be edited inline; users must remove the incorrect chip and add a new one to correct a value.
- Fixed at 24px height; width grows with the label. Only one size is available.

## Accessibility

### Built-in features

The close button is rendered as a tertiary `mdc-button` with its own `aria-label` (sourced from `clear-aria-label`), so screen readers announce the remove action. Activating the button (click, Enter, or Space) dispatches a composed, bubbling `remove` event the consumer listens for. When `disabled` is `true`, the close button is also disabled, so the chip cannot be removed by keyboard or pointer.

The label and prefix icon are presentational — the consumer chooses how to expose the chip's meaning through `clear-aria-label` (which typically includes the value, e.g. `"Remove alex@example.com"`).

#### Internal ARIA managed by the component

| Element      | Attribute    | Value                      |
| ------------ | ------------ | -------------------------- |
| Close button | `aria-label` | mirrors `clear-aria-label` |
| Close button | `disabled`   | reflects `disabled`        |

### Implementation requirements

#### General

- Pair input chips with helper text or field-level error messaging when `error` is `true`, so users understand why a value failed validation.

#### Labelling

- Always set `clear-aria-label` to a value that identifies which chip will be removed (e.g. `"Remove alex@example.com"`); the close button otherwise has no accessible name.
- When using slotted prefix content such as an avatar, do not rely on the avatar's accessible name to identify the chip — the `clear-aria-label` is the only name announced for the remove action.
