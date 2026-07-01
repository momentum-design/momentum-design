---
title: Time Picker
summary: Usage, guidelines, and accessibility for the mdc-timepicker component — a form-associated control for entering or selecting a time in 12-hour or 24-hour format.
tier: 3
component: timepicker
---

## Overview

The time picker is a composite form control for selecting a time. It exposes hour, minute, and (in 12-hour mode) AM/PM segments as ARIA spinbuttons that accept arrow-key adjustments and direct digit input, plus a dropdown arrow button that opens a list of preset times at a configurable interval.

### When to use

- Use when users need to enter or pick a time of day, manually or from a preset list.
- Use inside a form when the time value should participate in form submission and validation.

### When not to use

- Do not use for date selection — use `mdc-datepicker` instead.
- Do not use when you only need a free-form text field.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/timepicker/index.js"; // custom element registration
// or via React wrapper
import { TimePicker } from '@momentum-design/components/dist/react';
```

Minimal markup example (12-hour mode with localised labels):

```html
<mdc-timepicker
  name="startTime"
  label="Start time"
  time-format="12h"
  interval="15"
  locale-hours-label="Hours"
  locale-minutes-label="Minutes"
  locale-period-label="AM or PM"
  locale-hours-placeholder="HH"
  locale-minutes-placeholder="MM"
  locale-period-placeholder="--"
  locale-am-label="AM"
  locale-pm-label="PM"
  locale-show-time-picker-label="Show time picker"
  locale-time-options-label="Time options"
  locale-spinbutton-description="Use arrow keys to adjust, type digits to set"
></mdc-timepicker>
```

### Property/Attribute details

- `name` (string) — form submission key.
- `value` (string) — current time in 24-hour `HH:MM` format. Values outside `00:00`–`23:59` are rejected; out-of-format strings clear the internal state.
- `time-format` (`'12h' | '24h'`, default `'12h'`) — `'12h'` renders a third AM/PM spinbutton and clamps hours to 1–12; `'24h'` clamps hours to 0–23 and hides the period segment.
- `interval` (number, default `30`) — minutes between dropdown options. Clamped to the range 1–60.
- `min` (string) / `max` (string) — minimum and maximum allowed 24-hour `HH:MM`. Dropdown options outside this range are filtered out.
- `placement` (string, default `'bottom-start'`) — popover placement.
- `strategy` (`'absolute' | 'fixed'`, default `'absolute'`) — popover positioning strategy.
- `disable-flip` (boolean, default `false`) — when `true`, the popover does not flip to fit the viewport.
- `append-to` (string) — `id` of the element the popover is portalled to. Useful when the time picker is inside a scrollable container.
- `backdrop-append-to` (string) — `id` of the element the popover backdrop is appended to. Defaults to the parent.
- `prefix-icon` (string) — name of the icon rendered before the spinbuttons.
- `option-label-formatter` (function, property only) — `(defaultLabel, value24) => string` callback that customises the label for each dropdown option.
- `disabled` / `soft-disabled` / `readonly` (boolean) — disable interaction. When any is true, the popover is forced closed.
- `required` (boolean, default `false`) — renders the required indicator.
- `label`, `help-text`, `help-text-type`, `validation-message`, `toggletip-text`, `toggletip-placement`, `toggletip-strategy`, `info-icon-aria-label` — label, helper, validation, and toggletip configuration shared with other form fields.
- `data-aria-label` (string) — accessible label override.

Localisation properties — **consumers must provide a translated string for each**:

- `locale-hours-label`, `locale-minutes-label`, `locale-period-label` — accessible labels for each spinbutton.
- `locale-hours-placeholder`, `locale-minutes-placeholder`, `locale-period-placeholder` — placeholder text for each spinbutton.
- `locale-am-label`, `locale-pm-label` — labels for the AM and PM periods. The first character (lowercased) is also used to set the period when the user types it on the period spinbutton.
- `locale-show-time-picker-label` — accessible label for the dropdown trigger button.
- `locale-time-options-label` — accessible label for the dropdown listbox.
- `locale-spinbutton-description` — `aria-description` text added to every spinbutton with the interaction hint.

The component dispatches:

- `input` and `change` — bubbling `CustomEvent` with `detail: { value }` fired when the committed value changes (via spinbutton edit or dropdown selection).
- `focus` / `blur` — native DOM events with React equivalents.

Keyboard behaviour:

- Inside hours/minutes spinbuttons: Arrow Up / Down wrap-increment/decrement the value; Arrow Right moves to the next segment (hours → minutes → period in 12-hour); Arrow Left moves back; typing digits builds the value with auto-advance — two digits commit immediately, a single first digit that already exceeds the maximum first digit also commits, and otherwise a 1 s timeout auto-pads and commits with a single leading digit.
- Inside the period spinbutton: Arrow Up / Down toggle AM↔PM; Arrow Left moves back to minutes; typing the first character of `locale-am-label` or `locale-pm-label` sets the period directly.
- Anywhere in the input: Escape closes the popover if open and returns focus to the dropdown trigger.
- Inside the popover listbox: Arrow Down / Up move focus through options with wrap-around; Enter selects the focused option; Escape closes the popover and returns focus to the trigger.

Slots: `label`, `toggletip`, `help-icon`, `help-text` — for overriding the label, toggletip, helper icon, and helper text rendering.

## Accessibility

### Built-in features

- The component is form-associated and participates in form submission, reset (`formResetCallback`), and state restoration (`formStateRestoreCallback`).
- Each editable segment is an `<input role="spinbutton">` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-label` set from the `locale-*-label` properties.
- The period spinbutton uses `aria-valuetext` to read the AM/PM label.
- Every spinbutton exposes `aria-description` from `locale-spinbutton-description` so screen reader users hear the interaction hint.
- The dropdown trigger button advertises the popover via `aria-haspopup="true"` and `aria-expanded` mirroring the open state. The popover's own `aria-expanded` management is disabled so the trigger button is the only source of truth.
- A hidden native `<input>` carries the form value with `tabindex="-1"` and `aria-hidden="true"` so the assistive tree only surfaces the spinbuttons.
- The popover is connected to the input via `triggerid` and uses `focus-trap`, `focus-back-to-trigger`, `hide-on-escape`, and `hide-on-outside-click` so keyboard users cannot lose focus into the page while the dropdown is open.
- Focus returns to the dropdown trigger after the user picks an option or dismisses the popover.
- The selected option is announced via `aria-selected="true"` on the matching `mdc-option`.
- Spinbutton inputs receive `tabindex="-1"` when the field is disabled, removing them from the tab order.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Hours `<input>` | `role` | `spinbutton` |
| Hours `<input>` | `aria-label` | value of `locale-hours-label` |
| Hours `<input>` | `aria-valuemin` | `1` (12-hour) or `0` (24-hour) |
| Hours `<input>` | `aria-valuemax` | `12` (12-hour) or `23` (24-hour) |
| Hours `<input>` | `aria-valuenow` | current integer hour, or empty when unset |
| Hours `<input>` | `aria-description` | value of `locale-spinbutton-description` |
| Minutes `<input>` | `role` | `spinbutton` |
| Minutes `<input>` | `aria-label` | value of `locale-minutes-label` |
| Minutes `<input>` | `aria-valuemin` / `aria-valuemax` | `0` / `59` |
| Minutes `<input>` | `aria-valuenow` | current integer minutes, or empty when unset |
| Period `<input>` (12-hour only) | `role` | `spinbutton` |
| Period `<input>` (12-hour only) | `aria-label` | value of `locale-period-label` |
| Period `<input>` (12-hour only) | `aria-valuetext` | localised AM/PM label |
| Dropdown trigger `mdc-button` | `aria-label` | value of `locale-show-time-picker-label` |
| Dropdown trigger `mdc-button` | `aria-haspopup` | `true` |
| Dropdown trigger `mdc-button` | `aria-expanded` | `true` when popover is open, `false` otherwise |
| Listbox `mdc-selectlistbox` | `aria-label` | value of `locale-time-options-label` |
| Each option | `aria-selected` | `true` for the option matching the current value, `false` otherwise |
| Hidden native `<input>` | `aria-hidden` | `true` |
| Hidden native `<input>` | `tabindex` | `-1` |
| Hidden native `<input>` | `aria-disabled` | `true` when `disabled` or `soft-disabled` |

### Implementation requirements

#### Labelling

- All `locale-*` strings must be provided and translated. Without them the spinbuttons have empty `aria-label`s and screen readers cannot describe what is being edited.
- Provide a `label` (or a slotted label) to give the field a visible name.

### Notes

- The value contract is always 24-hour `HH:MM` regardless of `time-format`. Display formatting is internal.
- The popover uses `disable-aria-expanded` so the only `aria-expanded` source is the dropdown trigger button — do not also rely on the popover's own ARIA state.
