---
title: Number Input
summary:
  Usage, guidelines, and accessibility for the mdc-numberinput component — a
  numeric text field with increment and decrement steppers and native range and
  step validation.
tier: 3
component: numberinput
---

## Overview

The `mdc-numberinput` lets users enter and adjust a single numeric value,
pairing a numeric text field with increment and decrement steppers and native
range and step validation. It exists for bounded or precise numeric entry —
quantities, prices, durations — where users benefit from both direct typing and
small stepwise adjustments.

### When to use

- Use `mdc-numberinput` to collect a single numeric value that users may want to
  fine-tune in small increments, such as a quantity, count, or price.
- Use `mdc-numberinput` with `min` and `max` to constrain input to a valid
  range, and `step` to set the amount each stepper click or arrow-key press
  changes the value.
- Use `mdc-numberinput` `step="any"` to accept decimal values without
  step-mismatch validation. For values that must follow a fixed increment, such
  as currency, set a numeric step like `step="0.01"` instead.
- Use `mdc-numberinput` `hide-steppers` when the field should behave as a plain
  numeric input without visible spinner controls.

### When not to use

- Do not use `mdc-numberinput` for identifiers or formatted values such as phone
  numbers, PINs, or account codes. Use `mdc-input` — these values are strings
  rather than quantities, and number-field operations can alter their
  formatting.
- Do not use `mdc-numberinput` to choose from a small fixed set of numeric
  options. Use `mdc-select` or a group of `mdc-radio` controls.
- Do not use `mdc-numberinput` for coarse selection across a large range where
  an exact value is not important. Use `mdc-slider`.
- Do not use `mdc-numberinput` for time entry. Use `mdc-timepicker`.

## Guidelines

### Developer usage

Import the custom-element registration, or use the React wrapper:

```tsx
import '@momentum-design/components/dist/components/numberinput/index.js'; // custom element registration
// or via React wrapper
import { NumberInput } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-numberinput
  label="Quantity"
  min="0"
  max="10"
  step="1"
  value="1"
  increment-aria-label="Increase quantity"
  decrement-aria-label="Decrease quantity"
></mdc-numberinput>
```

### Content guidance

- Keep the `label` a short noun for the value being entered ("Quantity",
  "Price", "Guests"), not an instruction.
- Use `help-text` to state the accepted range or unit up front ("Enter a value
  between 0 and 10") rather than waiting for an error.
- Write `increment-aria-label` and `decrement-aria-label` as the action in
  context ("Increase quantity"), not the generic "Increment"/"Decrement".

### Property/Attribute details

| Option                                          | Intent                                                                                                                                                                                                                                         |
| ----------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `min` / `max`                                   | Bound the accepted range. Set both when a valid range exists so the browser can enforce and announce it; the steppers and arrow keys clamp to these bounds.                                                                                    |
| `step` (default `1`)                            | The amount each stepper click or arrow-key press changes the value, and the granularity used for step-mismatch validation.                                                                                                                     |
| `step="any"`                                    | Accepts decimal values without step-mismatch validation. The steppers and arrow keys then move by 1 and clamp, matching native spin buttons. For values that must follow a fixed increment, use a numeric `step` (for example `0.01`) instead. |
| `hide-steppers` (default `false`)               | Hides the increment/decrement steppers and renders the field as a plain numeric input (with the clear button when `trailing-button` is set).                                                                                                   |
| `increment-aria-label` / `decrement-aria-label` | Accessible names for the stepper buttons. Empty by default; set both so the buttons are announced.                                                                                                                                             |
| `value`                                         | The current numeric value; submitted with the field's `name` when inside a form.                                                                                                                                                               |

**Note:** `label`, `help-text`, `help-text-type`, `required`, `readonly`,
`disabled`, `placeholder`, `validation-message`, and `toggletip-text` are
inherited from `mdc-input`.

### Limitations

- **Typed out-of-range values aren't clamped** — typing a value beyond
  `min`/`max` keeps the value while the native validity state reports
  `rangeOverflow`/`rangeUnderflow`; only the steppers and arrow keys clamp. Read
  the field's validity to handle the invalid state.
- **Boundary steps are silent** — a stepper click or arrow-key press at
  `min`/`max` leaves the value unchanged and emits no `input`/`change`. Don't
  rely on an event to detect a no-op step.
- **`step="any"` steps by 1** — with `step="any"` the steppers and arrow keys
  add or subtract 1 rather than a fractional amount. Set a numeric `step` if you
  need fractional stepping.
- **Only numeric input is accepted** — `e`/`E`/`+` and letters are blocked, so
  scientific notation and values containing text cannot be entered. Leading
  zeros can remain while typing, but stepping may normalize the value; use
  `mdc-input` when exact string formatting must be preserved.
- **Steppers aren't in the tab order** — the increment/decrement buttons have
  `tabindex="-1"` by design and cannot receive keyboard focus. Keyboard users
  perform the equivalent adjustment from the input with `ArrowUp`/`ArrowDown`.

### Notes

- Built on `mdc-input`; it inherits the label, help text, toggletip, and
  validation surface, and renders `mdc-button` steppers with
  `mdc-icon`/`mdc-text` internally.
- The browser's native number spin buttons are hidden in favor of the custom
  steppers.

## Accessibility

### Built-in features

The field renders a native `<input type="number">`, so it exposes standard
number-field semantics and keyboard support: users type to enter a value and
press `ArrowUp`/`ArrowDown` to increment or decrement by `step`. The steppers
are kept out of the tab order so keyboard users adjust the value with the arrow
keys, and non-numeric characters are prevented on input.

#### Internal ARIA managed by the component

| Element                          | Attribute    | Value                                                                                                         |
| -------------------------------- | ------------ | ------------------------------------------------------------------------------------------------------------- |
| Increment stepper (`mdc-button`) | `aria-label` | value of `increment-aria-label`                                                                               |
| Decrement stepper (`mdc-button`) | `aria-label` | value of `decrement-aria-label`                                                                               |
| Steppers                         | `tabindex`   | `-1` — excluded from the tab order; keyboard users change the value from the input with `ArrowUp`/`ArrowDown` |

### Implementation requirements

#### General

- Provide `min`, `max`, and `step` wherever a valid range exists so the browser
  can expose the constraints and validity state to assistive technologies.
- Surface validation through `help-text` and `help-text-type` so range or step
  errors are communicated non-visually, not by color alone.

#### Labeling

- Always provide either `label` or `data-aria-label`; otherwise the field has no
  accessible name.
- Set `increment-aria-label` and `decrement-aria-label` — they are empty by
  default, leaving the stepper buttons unnamed for screen-reader users.

## Related components

| Component        | Relationship                                                                           |
| ---------------- | -------------------------------------------------------------------------------------- |
| `mdc-input`      | Base text field this component extends; use for non-numeric or formatted string input. |
| `mdc-select`     | For choosing from a small fixed set of numeric options rather than free numeric entry. |
| `mdc-slider`     | For coarse selection across a range where an exact typed value is not required.        |
| `mdc-timepicker` | For entering a time rather than a raw number.                                          |
