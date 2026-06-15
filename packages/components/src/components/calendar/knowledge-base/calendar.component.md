---
title: Calendar
summary: Usage, guidelines, and accessibility for the mdc-calendar component — a monthly grid for selecting a single date, a week, or a date range with keyboard navigation and locale-aware formatting.
status: draft
tier: 3
component: calendar
---

## Overview

The calendar renders a month-by-month grid that lets users select a single date, an entire week, or a date range. It is keyboard-navigable, respects locale-defined week start and date formatting, and constrains selection to an optional `min`/`max` window.

### When to use

- Use `mdc-calendar` when the surface needs to display a full month grid for date selection — for example a standalone scheduler view or the calendar panel of a custom date picker.
- Use the `week` selection mode to pick an entire week (Mon–Sun, locale dependent).
- Use the `range` selection mode for booking-style flows where the user picks a start and an end date.

### When not to use

- Use `mdc-datepicker` when you need an input field paired with a popover calendar; `mdc-calendar` is the grid only, not the input/popover wrapper.
- Use `mdc-timepicker` for time-of-day selection without a calendar surface.
- Use a plain `mdc-select`, `mdc-input`, or `mdc-combobox` when the user only needs to type or pick a textual value rather than navigate dates.

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

- Always supply localized labels for the navigation and Today button (`locale-today-label`, `locale-prev-month-label`, `locale-next-month-label`) — the component does not provide built-in translations.
- Set `locale` to a BCP 47 string that matches the user's interface language so the week start day, weekday names, and month/year heading are formatted correctly.
- When using `range`, communicate the two-step flow to users (first click selects the start, second selects the end). Clicks made before the current start automatically swap the two values.

### Property/Attribute details

- `value` — selected date as an ISO string (`yyyy-mm-dd`). In `range` and `week` modes this represents the start date.
- `end-value` — end of the selected range/week as an ISO string. Only meaningful in `range` and `week` modes.
- `selection-mode` — `single` (default), `week`, or `range`. Switching mode resets the internal range-selection phase to "start".
- `locale` — BCP 47 locale string used for week start day, weekday names, month/year heading, and the `aria-label` on each day cell. Defaults to `en-US`.
- `min` / `max` — inclusive lower/upper bounds for selectable dates as ISO strings. Days outside the range render as disabled and cannot be focused via keyboard navigation; month navigation is clipped to the same window.
- `show-today-button` — when `true`, renders a "Today" button below the grid that jumps focus and selection to the current date. Disabled automatically when today falls outside `min`/`max`. Defaults to `false`.
- `locale-today-label` — visible label and accessible name for the Today button.
- `locale-prev-month-label` / `locale-next-month-label` — accessible names for the icon-only previous/next month navigation buttons.

### Limitations

- Translations are not bundled. Without the `locale-*-label` props the navigation and Today button have empty accessible names.
- Range selection always commits on the second click; there is no built-in "clear" affordance other than re-clicking to start a new range.
- The grid renders a single month at a time — multi-month or year-picker views are not part of this component.
- Day cells reflect `aria-disabled` only when `min`/`max` exclude them; consumers cannot disable individual dates via attribute today.

## Accessibility

### Built-in features

The day cells are wrapped in `role="grid"` with weekday headers marked as `role="columnheader"` and each week as `role="row"`. Day cells use `role="gridcell"` and follow the standard date-grid keyboard model:

- `ArrowLeft` / `ArrowRight` move focus by one day.
- `ArrowUp` / `ArrowDown` move focus by one week.
- `Home` / `End` jump to the start/end of the focused week (respecting the locale's week start day).
- `PageUp` / `PageDown` move focus to the same date in the previous/next month; with `Shift` they move by one year.
- `Enter` / `Space` selects the focused date.

The component manages a single roving `tabindex="0"` on the currently focused day cell (every other cell is `tabindex="-1"`), so the grid takes a single tab stop. Navigating across a month boundary updates `displayMonth`/`displayYear` automatically and restores focus on the new cell after the re-render. Disabled cells (those outside `min`/`max`) are skipped by keyboard navigation and cannot be selected.

Each cell exposes its full localized date through `aria-label` (e.g. "Monday, June 15, 2026"), and the grid's own `aria-label` is updated to `Calendar, <Month Year>` — or for week mode with a selection, `Calendar, <formatted week range>`. The current day is marked with `aria-current="date"`, selected cells (including range members) with `aria-selected="true"`, and out-of-bounds cells with `aria-disabled="true"`. Navigation buttons render as `mdc-button` with `aria-label` taken from the `locale-prev-month-label` / `locale-next-month-label` props and become `disabled` once the grid reaches the configured `min`/`max`.

#### Internal ARIA managed by the component

| Element                           | Attribute       | Value                                                                                                                  |
| --------------------------------- | --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| Grid container                    | `role`          | `grid`                                                                                                                 |
| Grid container                    | `aria-label`    | `Calendar, <Month Year>` in single/range mode; `Calendar, <formatted range>` when a week selection exists              |
| Weekday header row                | `role`          | `row`                                                                                                                  |
| Weekday cell                      | `role`          | `columnheader`                                                                                                         |
| Week row                          | `role`          | `row`                                                                                                                  |
| Day cell `<button>`               | `role`          | `gridcell`                                                                                                             |
| Day cell `<button>`               | `tabindex`      | `0` for the currently focused date; `-1` for every other cell                                                          |
| Day cell `<button>`               | `aria-label`    | Localized full date (e.g. `Monday, June 15, 2026`)                                                                     |
| Day cell `<button>`               | `aria-selected` | `true` when the cell is part of the current selection or range; `false` otherwise                                      |
| Day cell `<button>`               | `aria-disabled` | `true` when the date falls outside `min`/`max`; attribute removed otherwise                                            |
| Day cell `<button>`               | `aria-current`  | `date` when the cell represents today; attribute removed otherwise                                                     |
| Previous/next month `mdc-button`  | `aria-label`    | Mirrors `locale-prev-month-label` / `locale-next-month-label`                                                          |
| Previous/next month `mdc-button`  | `disabled`      | `true` when navigation in that direction would cross `min` / `max`                                                     |
| Today `mdc-button`                | `aria-label`    | Mirrors `locale-today-label`                                                                                           |
| Today `mdc-button`                | `disabled`      | `true` when today falls outside `min`/`max`                                                                            |

### Implementation requirements

#### General

- Always provide the localized labels (`locale-today-label`, `locale-prev-month-label`, `locale-next-month-label`) so the icon-only navigation and Today buttons have accessible names.
- Match `locale` to the surrounding UI language; the value drives weekday order, header text, and day-cell announcements.
- When using `range`, surface the current selection in the surrounding UI (for example as visible text "Start date: …, End date: …") so screen reader users get reinforcement beyond `aria-selected` on individual cells.
- If the consumer needs to disable arbitrary dates beyond `min`/`max`, that is not currently supported — narrow the range with `min`/`max` instead.

#### Labelling

- The grid is announced as `Calendar, <Month Year>` by default. If the surrounding UI already conveys the calendar's purpose (e.g. "Departure date"), wrap the calendar in an element with a more specific `aria-label`/`aria-labelledby` and rely on the grid's own label for the month/year context.
- Day cells are labelled with the localized full date — do not override these via custom DOM; the localized form is the most accessible representation.
