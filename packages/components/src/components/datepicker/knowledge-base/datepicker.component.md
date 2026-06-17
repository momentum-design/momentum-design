---
title: Datepicker
summary: Usage, guidelines, and accessibility for the mdc-datepicker component — a date input offering manual entry or a calendar popover for single, range, or week selection with locale support.
tier: 3
component: datepicker
---

## Overview

The datepicker lets users pick a date either by typing it directly into month/day/year spinbutton fields or by opening an `mdc-calendar` inside a popover. It supports BCP 47 locale strings to drive field order, separators, placeholders, and localised accessible labels.

The component is form-associated and participates in native form submission, validation, and reset. When a range or week is selected, both the start (`value`) and end (`end-value`) dates are submitted together using the configured `name`.

### When to use

- Use `mdc-datepicker` with `variant="input"` when the user typically knows the date and entering it digit-by-digit is fastest.
- Use `mdc-datepicker` with `variant="default"` when picking from a calendar (range or week) is the primary interaction.
- Use it when the value needs to be locale-aware (field order, separator, formatting) and accessible to spinbutton-aware screen readers.

### When not to use

- Use `mdc-input` when free-form text is the goal and date semantics are not required.
- Use `mdc-calendar` directly when the calendar should always be visible (e.g. embedded in a sidebar) without a popover trigger.

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

Listen for `change` to react to a committed date and `input` to react to interim updates. Both events carry `{ value, endValue }` in `event.detail`.

The `input` variant offers spinbutton fields (`role="spinbutton"`) with `ArrowUp`/`ArrowDown` to increment/decrement, `ArrowLeft`/`ArrowRight` to jump between fields, and digit typing with auto-advance to the next field when a complete value is entered. Pressing the calendar icon button opens the popover so the user can pick the date visually.

The `default` variant renders a select-style trigger (`role="combobox"`, `aria-haspopup="dialog"`) that opens the calendar popover on click, `Enter`, `Space`, or `ArrowDown`.

### Content guidance

- Provide a `label` describing what date is being collected; reach for `data-aria-label` only when a visible label is not possible.
- Always set every `locale-*` label property the variant uses — the spinbutton fields and calendar toggle button rely on them for their accessible names; there is no fallback prose.
- Use `selection-mode` deliberately: `single` for one date (input variant default), `range` for two dates, `week` for a full week range derived from the locale.
- Set `min` / `max` (ISO `YYYY-MM-DD`) to constrain the selectable dates; out-of-range values entered in spinbuttons are silently rejected without committing.

### Property/Attribute details

- `variant` — `input` (default) renders spinbutton fields; `default` renders a select-style trigger.
- `value` — selected date as an ISO `YYYY-MM-DD` string. For range/week selections, this is the start date.
- `end-value` — end date as an ISO `YYYY-MM-DD` string for range/week selections. When set together with `value` and `name`, both are submitted as `name` and `name-end`.
- `selection-mode` — `single` (default), `range`, or `week`. The default variant promotes `single` to `range` (single dates inside the calendar are still allowed).
- `locale` — BCP 47 locale string (e.g. `en-US`, `de-DE`). Drives field order, separator, placeholders, and weekday/month names in the calendar. Default `en-US`.
- `min` / `max` — ISO date strings bounding the selectable range. Values outside the range are rejected.
- `placement` — preferred popover placement around the trigger. Default `bottom-start`.
- `strategy` — popover positioning strategy. `absolute` (default) or `fixed`.
- `disable-flip` — when `true`, the popover does not flip to the opposite side when the preferred placement does not fit. Default `false`.
- `append-to` — id of the element the popover is appended to.
- `backdrop-append-to` — id of the element the popover backdrop is appended to.
- `locale-month-label` / `locale-day-label` / `locale-year-label` — accessible labels for the month/day/year spinbutton inputs (input variant). Required for screen-reader users.
- `locale-calendar-label` — accessible label for the calendar toggle button (input variant) and the combobox trigger (default variant).
- `locale-spinbutton-description` — `aria-description` applied to every spinbutton input. Use it to explain the increment/decrement behaviour ("Use up and down arrows to change").
- `locale-today-label` — label for the "today" button inside the calendar.
- `locale-prev-month-label` / `locale-next-month-label` — accessible labels for the calendar's month-navigation arrows.
- `label` — visible label rendered above the field.
- `data-aria-label` — accessible name fallback when no visible label is rendered.
- `help-text` — helper or validation text below the field.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon.
- `toggletip-text` / `toggletip-placement` / `toggletip-strategy` / `info-icon-aria-label` — opt-in info icon button next to the label that opens an `mdc-toggletip`.
- `required` — when `true`, the form is invalid unless a value is selected.
- `disabled` — fully disabled; the field is removed from the tab order and the popover cannot open.
- `readonly` — non-interactive but focusable; typing is suppressed and the popover cannot open. The current value is still submitted.

## Accessibility

### Built-in features

In the `input` variant, each of the three fields renders as a `role="spinbutton"` input with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`, and `aria-description`. The field order is derived from the configured `locale`. Keyboard interaction:

- `ArrowUp` / `ArrowDown` increment/decrement the current field within its valid range (wrapping at the ends).
- `ArrowLeft` / `ArrowRight` move focus to the previous/next field.
- Typing digits fills the current field; after the maximum number of digits (or an unambiguous single digit that cannot fit a second), focus auto-advances to the next field.
- `Tab` moves focus to the calendar toggle button, then out of the component.
- `Escape` closes the calendar popover when it is open.

The calendar toggle button exposes `aria-expanded` and `aria-haspopup="dialog"` and opens the popover.

In the `default` variant, the trigger renders with `role="combobox"`, `aria-haspopup="dialog"`, and `aria-expanded` reflecting the popover state. `Enter`, `Space`, and `ArrowDown` open the popover; the calendar receives focus on the currently focused day cell.

The popover wraps the calendar with focus trap, escape-to-close, and outside-click-to-close enabled. On close, focus returns to the trigger (or the calendar toggle button in the input variant).

When `disabled` is `true`, all inputs and the trigger are removed from the tab order. When `readonly` is `true`, focus is preserved, typing is suppressed, the popover cannot open, and the form value is still submitted.

The `label` (or `data-aria-label`) provides the accessible name for the field. `help-text` is linked via `aria-describedby`.

#### Internal ARIA managed by the component

| Element                  | Attribute          | Value                                                                                  |
| ------------------------ | ------------------ | -------------------------------------------------------------------------------------- |
| Spinbutton (each field)  | `role`             | `spinbutton`                                                                           |
| Spinbutton (each field)  | `aria-label`       | mirrors the matching `locale-{month\|day\|year}-label`                                 |
| Spinbutton (each field)  | `aria-valuemin`    | minimum for the field (e.g. `1` for month, computed for day from current month/year)   |
| Spinbutton (each field)  | `aria-valuemax`    | maximum for the field (e.g. `12` for month, `28`–`31` for day)                         |
| Spinbutton (each field)  | `aria-valuenow`    | current numeric value of the field, omitted when empty                                 |
| Spinbutton (each field)  | `aria-description` | mirrors `locale-spinbutton-description`                                                |
| Spinbutton (each field)  | `tabindex`         | `0` when enabled; `-1` when `disabled`                                                 |
| Calendar toggle (input)  | `aria-label`       | mirrors `locale-calendar-label`                                                        |
| Calendar toggle (input)  | `aria-expanded`    | `true` when the popover is open, otherwise `false`                                     |
| Calendar toggle (input)  | `aria-haspopup`    | `dialog`                                                                               |
| Combobox trigger (default) | `role`           | `combobox`                                                                             |
| Combobox trigger (default) | `aria-haspopup` | `dialog`                                                                               |
| Combobox trigger (default) | `aria-expanded` | `true` when the popover is open, otherwise `false`                                     |
| Combobox trigger (default) | `aria-label`    | mirrors `locale-calendar-label`                                                        |
| Combobox trigger (default) | `tabindex`      | `0` when enabled; `-1` when `disabled`                                                 |
| Native hidden input      | `aria-hidden`      | `true` (only used to participate in form submission)                                   |

### Implementation requirements

#### General

- Provide a `locale` matching the user's expected formatting; this drives field order, separator, placeholders, and weekday/month names.
- Set `min` and `max` when only a subset of dates is valid — the spinbutton fields clamp typed input and the calendar disables out-of-range cells.
- When using the popover, set `append-to` if the datepicker is rendered inside an element with `overflow: hidden` so the calendar can escape the clip region.
- For range or week selection, listen for `change` and read both `event.detail.value` (start) and `event.detail.endDate` (end) — or, when reading attributes back, both `value` and `end-value`.

#### Labelling

- Provide a `label` (or `data-aria-label`); without it, the spinbuttons and trigger have no accessible name.
- Provide every `locale-*` label the variant uses — there is no English fallback for these.
- Use `help-text` with `help-text-type="error"` for validation feedback; the icon and `aria-describedby` association are wired automatically.
