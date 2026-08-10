---
title: Calendar
summary: Usage, guidelines, and accessibility for the mdc-calendar component — a month grid for selecting a single date, a week, or a date range.
tier: 3
component: calendar
---

## Overview

The calendar presents a month grid so users can choose a date, a week, or a date range directly from a visible layout. It exists as the selection surface that date pickers and scheduler views build on. For most form fields, prefer `mdc-datepicker`, which wraps this grid with an input and popover.

### When to use

- Use `mdc-calendar` when a full month grid should be visible for date selection, such as a standalone scheduler or the panel inside a custom date picker.
- Use `mdc-calendar` `week` to select a whole locale-defined week at once.
- Use `mdc-calendar` `range` for start-and-end date flows such as bookings.

### When not to use

- Do not use `mdc-calendar` when you need a compact field with a popover calendar. Use `mdc-datepicker` instead.
- Do not use `mdc-calendar` for time-of-day selection. Use `mdc-timepicker` instead.
- Do not use `mdc-calendar` when a typed or textual value is enough. Use `mdc-input` or `mdc-select` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/calendar/index.js"; // custom element registration
// or via React wrapper
import { Calendar } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<!-- Single date selection -->
<mdc-calendar
  selection-mode="single"
  value="2026-06-15"
  min="2026-01-01"
  max="2026-12-31"
  locale="en-US"
  show-today-button
  locale-today-label="Today"
  locale-prev-month-label="Previous month"
  locale-next-month-label="Next month"
></mdc-calendar>

<!-- Date range selection -->
<mdc-calendar
  selection-mode="range"
  value="2026-06-10"
  end-value="2026-06-14"
></mdc-calendar>
```

Listen for `date-selected` to receive the picked value(s) and `month-changed` to react to grid navigation.

### Content guidance

- Give the Today button a short, translated label via `locale-today-label` ("Today"); it renders as visible button text.
- Set `locale` to match the surrounding UI language so the weekday names and the month/year heading read correctly.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `selection-mode` | `single` (default), `week`, or `range`. Choose to match whether the grid collects one date, a whole week, or a start-and-end pair. |
| `value` / `end-value` | The selection as ISO `yyyy-mm-dd`; in `week` and `range` modes `value` is the start and `end-value` the end. |
| `locale` | BCP 47 string (default `en-US`) driving the week start day, weekday names, month/year heading, and each cell's accessible date. Set it to the UI language. |
| `min` / `max` | Inclusive ISO bounds; days outside the window are disabled and month navigation is clipped to the same window. |
| `show-today-button` | Renders a Today button below the grid that jumps focus and selection to the current date. Use it when quickly returning to today is common. |

### Limitations

- **Single month only** — the grid shows one month at a time; multi-month and year-picker views are not part of this component.
- **Continuous range only** — individual dates cannot be disabled; only a `min`/`max` window constrains selection.
- **No clear affordance** — a range commits on the second click with no built-in clear; re-click a day to start a new range.
- **Locale labels required** — without the `locale-*-label` props the icon-only navigation and Today buttons have empty accessible names.

## Accessibility

### Built-in features

The day cells sit in a `role="grid"` with weekday headers as `role="columnheader"`, each week as `role="row"`, and each day as a `role="gridcell"` button. The grid follows the standard date-grid keyboard model:

- `ArrowLeft` / `ArrowRight` move focus by one day; `ArrowUp` / `ArrowDown` by one week.
- `Home` / `End` jump to the start/end of the focused week (respecting the locale's week start day).
- `PageUp` / `PageDown` move to the same date in the previous/next month; with `Shift` they move by one year.
- `Enter` / `Space` selects the focused date.

A single roving `tabindex="0"` sits on the focused cell (all others are `-1`), so the grid takes one tab stop. Navigating across a month boundary updates the displayed month and restores focus after the re-render. Disabled cells (outside `min`/`max`) are skipped and cannot be selected.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Grid container | `role` | `grid` |
| Grid container | `aria-label` | `Calendar, <Month Year>`, or `Calendar, <formatted range>` for a week selection |
| Day cell | `role` | `gridcell` |
| Day cell | `aria-label` | Localized full date (e.g. `Monday, June 15, 2026`) |
| Day cell | `aria-selected` | `true` when part of the current selection/range |
| Day cell | `aria-disabled` | `true` when outside `min`/`max` |
| Day cell | `aria-current` | `date` for today |
| Nav / Today `mdc-button` | `aria-label` | Mirrors the matching `locale-*-label` |

### Implementation requirements

#### General

- Match `locale` to the surrounding UI language; it drives weekday order, heading text, and day-cell announcements.
- If arbitrary dates must be unavailable beyond a continuous window, narrow it with `min`/`max` — per-date disabling is not supported.

#### Labeling

- Provide `locale-today-label`, `locale-prev-month-label`, and `locale-next-month-label` so the icon-only navigation and Today buttons have accessible names.
- When the surrounding UI already conveys the calendar's purpose (e.g. "Departure date"), wrap the calendar in an element with a specific `aria-label` and let the grid's own label supply the month/year context.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-datepicker` | Wraps this grid with an input and popover; the usual choice for form fields. |
| `mdc-timepicker` | The sibling control for selecting a time of day. |
| `mdc-input` | For typed or free-form values that do not need a date grid. |
| `mdc-select` | For choosing from a small fixed list rather than a date. |
