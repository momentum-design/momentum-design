---
title: Timepicker
summary: Usage, guidelines, and accessibility for the mdc-timepicker component — a form control for entering or selecting a time in 12-hour or 24-hour format.
tier: 3
component: timepicker
---

## Overview

The time picker lets users set a time of day by typing it into hour, minute, and period fields or by choosing from preset intervals, keeping the value valid and consistently formatted. It exists to collect a time in forms without leaving formatting to the user.

### When to use

- Use `mdc-timepicker` when users need to enter or pick a time of day, either by typing or from a preset list, such as scheduling a meeting or setting availability.
- Use `mdc-timepicker` `12h` or `24h` to match the user's expected time format.
- Use `mdc-timepicker` inside a form when the time should participate in submission and validation.

### When not to use

- Do not use `mdc-timepicker` for date selection. Use `mdc-datepicker` instead.
- Do not use `mdc-timepicker` for free-form text entry. Use `mdc-input` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/timepicker/index.js"; // custom element registration
// or via React wrapper
import { TimePicker } from '@momentum-design/components/dist/react';
```

Minimal markup example (12-hour mode with localized labels):

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

Listen for `change` to react to a committed time and `input` for interim updates; both carry `{ value }` in `event.detail`.

### Composition

- The preset list is rendered internally as `mdc-option`s inside an `mdc-selectlistbox` in an `mdc-popover`; configure it with `interval`, `min`, `max`, and `option-label-formatter` rather than composing those children yourself.
- Use the `label`, `help-text`, `help-icon`, and `toggletip` slots (shared with the other form fields) to supply the label, helper text, and optional info toggletip.

### Content guidance

- Write the `label` to name the time being collected ("Start time"), not the format.
- Put the expected format in visible `help-text`; do not hide it behind the info toggletip.
- On error, replace the helper text with a short message that says how to fix the problem, not just what is wrong.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `time-format` | `12h` (default) adds an AM/PM field and clamps hours to 1–12; `24h` hides the period and clamps hours to 0–23. Match the user's expected format. |
| `interval` | Minutes between dropdown options (default `30`, clamped to 1–60). Use a coarser interval for quick scheduling, finer when precise times matter. |
| `min` / `max` | 24-hour `HH:MM` bounds; dropdown options outside the window are filtered out. |
| `prefix-icon` | Optional icon shown before the fields to signal the field's purpose (e.g. a clock). |
| `option-label-formatter` | A `(defaultLabel, value24) => string` callback (property only) to customize each dropdown option's label. |
| `append-to` | Portals the popover to the given element id; set it when the timepicker sits inside a scrollable or `overflow: hidden` container. |

### Limitations

- **Locale labels required** — the fields, dropdown button, and options have no built-in translations; unset `locale-*` labels leave them unnamed. Provide each one.
- **24-hour value contract** — `value` is always 24-hour `HH:MM` regardless of `time-format`; convert it for any custom display.
- **Custom times not listed** — times off the `interval` are valid via the fields but never appear in the dropdown list.
- **Interval bounds** — `interval` is clamped to 1–60 minutes; larger or sub-minute steps are not supported.

## Accessibility

### Built-in features

- Form-associated: the value participates in native form submission, reset, and state restoration via `ElementInternals`.
- Each editable segment is a `role="spinbutton"` input with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-description`; the period segment uses `aria-valuetext` to read the AM/PM label.
- Inside the fields, `ArrowUp`/`ArrowDown` change the value, `ArrowLeft`/`ArrowRight` move between fields, and typing digits auto-advances; on the period field, typing the first letter of the AM/PM label sets it.
- The dropdown button exposes `aria-haspopup` and `aria-expanded`; the popover traps focus, closes on `Escape` and outside click, and returns focus to the button.
- A hidden native input carries the form value with `aria-hidden="true"`; when `disabled` or `readonly`, the fields leave the tab order and the popover cannot open.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Hours / Minutes input | `role` | `spinbutton` |
| Hours / Minutes input | `aria-valuemin` / `aria-valuemax` / `aria-valuenow` | field bounds and current value |
| Period input (12-hour) | `aria-valuetext` | localized AM/PM label |
| Dropdown trigger `mdc-button` | `aria-haspopup` / `aria-expanded` | `true` / open state |
| Listbox `mdc-selectlistbox` | `aria-label` | value of `locale-time-options-label` |
| Selected option | `aria-selected` | `true` for the option matching the current value |
| Native hidden input | `aria-hidden` | `true` |

### Implementation requirements

#### General

- Set `time-format` to the user's expected format; it also determines whether the AM/PM field is shown.
- Set `append-to` when the timepicker is inside a scrollable or `overflow: hidden` element so the dropdown popover is not clipped.

#### Labeling

- Provide a `label` (or `data-aria-label`); without it the fields and dropdown have no accessible name.
- Provide and translate every `locale-*` string — the fields, dropdown button, and options have no built-in fallback names.
- Use `help-text` with the error type for validation feedback; the icon and `aria-describedby` association are wired automatically.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-datepicker` | The sibling control for entering a date; pair the two for date-and-time flows. |
| `mdc-select` | The pattern the preset dropdown follows; use it for non-time fixed lists. |
| `mdc-input` | For free-form text that is not a structured time. |
