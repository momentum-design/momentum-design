---
title: Datepicker
summary: Usage, guidelines, and accessibility for the mdc-datepicker component — a form control for entering or picking a date, range, or week with locale-aware formatting.
tier: 3
component: datepicker
---

## Overview

The datepicker lets users provide a date by typing it into month, day, and year fields or by picking it from a calendar, keeping the value valid and formatted for the user's locale. It exists to collect a specific date — or a range or week — in forms without leaving formatting to the user.

### When to use

- Use `mdc-datepicker` `input` when users usually know the exact date and typing it digit-by-digit is fastest, such as a date of birth or an expiry date.
- Use `mdc-datepicker` `default` when picking visually from a calendar is the primary interaction, such as choosing a week or a stay range.
- Use `mdc-datepicker` when the date must be locale-aware (field order, separators) and submitted as part of a form.

### When not to use

- Do not use `mdc-datepicker` for free-form text that is not a date. Use `mdc-input` instead.
- Do not use `mdc-datepicker` when the calendar must stay visible without a trigger. Use `mdc-calendar` directly instead.
- Do not use `mdc-datepicker` for time-of-day entry. Use `mdc-timepicker` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/datepicker/index.js"; // custom element registration
// or via React wrapper
import { Datepicker } from '@momentum-design/components/dist/react';
```

Minimal markup example (input variant, single date):

```html
<mdc-datepicker
  label="Date of birth"
  name="dob"
  variant="input"
  locale="en-US"
  help-text="MM/DD/YYYY"
  locale-month-label="Month"
  locale-day-label="Day"
  locale-year-label="Year"
  locale-calendar-label="Open calendar"
></mdc-datepicker>
```

Default variant (range selection in a calendar):

```html
<mdc-datepicker
  label="Stay"
  name="stay"
  variant="default"
  selection-mode="range"
  locale="en-US"
  locale-calendar-label="Choose a date range"
></mdc-datepicker>
```

Listen for `change` to react to a committed date and `input` for interim updates; both carry `{ value, endValue }` in `event.detail`.

### Composition

- The date grid is an embedded `mdc-calendar` inside an `mdc-popover`; configure it through the datepicker's own attributes (`selection-mode`, `min`, `max`, `locale`, `placement`) rather than composing those children yourself.
- Use the `label`, `help-text`, `help-icon`, and `toggletip` slots (shared with the other form fields) to supply the label, helper text, and optional info toggletip.

### Content guidance

- Write the `label` to name the date being collected ("Date of birth", "Start date"), not the format.
- Put the expected format in visible `help-text` ("MM/DD/YYYY"); do not hide format hints behind the info toggletip.
- On error, replace the helper text with a short message that says how to fix the problem, not just what is wrong.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `variant` | Choose `input` (default) for digit-by-digit spinbutton entry; choose `default` for a select-style trigger where the calendar is the main interaction. |
| `value` / `end-value` | The selected date(s) as ISO `YYYY-MM-DD`. For range and week selections `value` is the start and `end-value` the end; both submit together as `name` and `name-end`. |
| `selection-mode` | `single` (default), `range`, or `week`. The `default` variant promotes `single` to `range`. Choose to match how many dates the field collects. |
| `locale` | BCP 47 string (default `en-US`) driving field order, separators, placeholders, and the calendar's weekday/month names. Set it to the user's expected formatting. |
| `min` / `max` | ISO bounds for the selectable window; typed values outside the range are rejected and calendar cells outside it are disabled. |
| `append-to` | Portals the popover to the given element id; set it when the datepicker sits inside an `overflow: hidden` container so the calendar is not clipped. |

### Limitations

- **Locale labels required** — the spinbuttons and calendar button have no built-in translated names; unset `locale-*` labels leave them unnamed. Provide each one the variant uses.
- **Out-of-range input is dropped** — dates typed outside `min`/`max` are silently rejected without committing. Surface the allowed range in helper text.
- **No individual date disabling** — only a continuous `min`/`max` window is supported; scattered blackout dates cannot be disabled. Narrow the range instead.
- **Value is ISO only** — `value`/`end-value` are always `YYYY-MM-DD` regardless of `locale`; convert for any custom display.

## Accessibility

### Built-in features

- Form-associated: the value (and `end-value` for range/week selections) participates in native form submission, reset, and state restoration via `ElementInternals`.
- In the `input` variant, each field is a `role="spinbutton"` input with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, and `aria-description`; `ArrowUp`/`ArrowDown` change the value, `ArrowLeft`/`ArrowRight` move between fields, and typing digits auto-advances to the next field.
- In the `default` variant, the trigger is a `role="combobox"` with `aria-haspopup="dialog"` and `aria-expanded`; `Enter`, `Space`, or `ArrowDown` open the calendar popover.
- The popover traps focus, closes on `Escape` and outside click, and returns focus to the trigger (or calendar button) on close.
- When `disabled`, all fields and the trigger leave the tab order; when `readonly`, focus is preserved, typing is suppressed, the popover cannot open, and the value still submits.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Spinbutton (each field) | `role` | `spinbutton` |
| Spinbutton (each field) | `aria-valuemin` / `aria-valuemax` / `aria-valuenow` | field bounds and current value |
| Calendar toggle (input) | `aria-haspopup` / `aria-expanded` | `dialog` / open state |
| Combobox trigger (default) | `role` / `aria-haspopup` / `aria-expanded` | `combobox` / `dialog` / open state |
| Native hidden input | `aria-hidden` | `true` |

### Implementation requirements

#### General

- Set `locale` to match the user's expected formatting; it drives field order, separators, placeholders, and the calendar's weekday/month names.
- Set `min`/`max` when only part of the range is valid; the fields clamp typed input and the calendar disables out-of-range cells.
- Set `append-to` when the datepicker is inside an `overflow: hidden` element so the calendar popover can escape the clip region.

#### Labeling

- Provide a `label` (or `data-aria-label`); without it the spinbuttons and trigger have no accessible name.
- Provide every `locale-*` label the variant uses — there is no built-in fallback for these accessible names.
- Use `help-text` with the error type for validation feedback; the icon and `aria-describedby` association are wired automatically.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-calendar` | The month grid the datepicker embeds; use it directly when the calendar must always be visible. |
| `mdc-timepicker` | The sibling control for entering a time of day. |
| `mdc-input` | For free-form text that is not a structured date. |
| `mdc-select` | For choosing from a small fixed list rather than a date. |
