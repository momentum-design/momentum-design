---
title: Slider
summary: Usage, guidelines, and accessibility for the mdc-slider component — a single-value or range input rendered as one or two thumbs on a track.
status: draft
tier: 3
component: slider
---

## Overview

The slider lets users pick a value, or a range of values, from a defined numeric range by dragging one or two thumbs along a track. When the step is greater than 1, the slider also renders tick marks and snaps to the nearest tick.

### When to use

- Use `mdc-slider` when the user needs to pick a numeric value from a continuous (or stepped) range, and the relative position matters (volume, brightness, zoom, etc.).
- Use `range` when the user needs to pick both ends of a numeric interval (price range, time window).

### When not to use

- Use `mdc-stepper` when only discrete numeric increments are meaningful and precise typing is important.
- Use `mdc-input type="number"` when the user needs to type an exact value.
- Use `mdc-toggle` for binary on/off choices.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/slider/index.js"; // custom element registration
// or via React wrapper
import { Slider } from '@momentum-design/components/dist/react';
```

Minimal markup examples:

```html
<!-- Single-value slider -->
<mdc-slider
  label="Volume"
  name="volume"
  min="0"
  max="100"
  step="1"
  value="40"
></mdc-slider>

<!-- Range slider with tick marks -->
<mdc-slider
  range
  label="Price range"
  name-start="min-price"
  name-end="max-price"
  min="0"
  max="100"
  step="10"
  value-start="20"
  value-end="80"
  start-aria-label="Minimum price"
  end-aria-label="Maximum price"
></mdc-slider>
```

Listen for `input` while the user drags, and for `change` once the value is committed:

- Single value: `event.detail = { value }`.
- Range: `event.detail = { valueStart, valueEnd }`.

### Property/Attribute details

- `range` — when `true`, renders two thumbs (start and end) instead of one. Default `false`.
- `min` — minimum value. Default `0`.
- `max` — maximum value. Default `100`.
- `step` — increment between values. Default `1`. When `step > 1`, tick marks are rendered and thumbs snap to ticks.
- `value` — current value when `range` is `false`.
- `value-start` / `value-end` — current start/end values when `range` is `true`. Defaults to `min` / `max` when omitted. Thumbs cannot cross — if `value-start` is dragged past `value-end` it is clamped, and vice versa.
- `name` — form field name for the single-value slider.
- `name-start` / `name-end` — form field names for the range thumbs.
- `label` — visible label rendered above the slider.
- `label-start` / `label-end` — labels rendered below the slider on the leading and trailing sides (commonly used to label the min/max ends of the range).
- `value-label` — optional textual label shown for the value in the tooltip (single-value slider). Defaults to the numeric value.
- `value-label-start` / `value-label-end` — optional textual labels for the start/end thumb tooltips (range slider).
- `leading-icon` / `trailing-icon` — icon names rendered on the leading and trailing ends (e.g. muted speaker / full-volume speaker).
- `disabled` — fully disabled; the thumbs are removed from the tab order.
- `soft-disabled` — visually disabled but focusable; user input is suppressed and the tooltip is shown on focus.
- `data-aria-label` — `aria-label` for the single thumb.
- `start-aria-label` / `end-aria-label` — `aria-label`s for the start and end thumbs in range mode.
- `data-aria-valuetext` — `aria-valuetext` for the single thumb (falls back to `value-label`, then to the numeric value).
- `start-aria-valuetext` / `end-aria-valuetext` — `aria-valuetext`s for the start and end thumbs (fall back to the matching `value-label-*`, then to the numeric value).
- `hide-tooltip` — when `true`, the value tooltip is not shown on focus or hover.

Events dispatched by the host:

- `input` — fires continuously while the user drags or steps the slider; `event.detail` contains the current `value` (single) or `{ valueStart, valueEnd }` (range).
- `change` — fires once the value is committed (mouse up / keyboard release); `event.detail` matches `input`.

## Accessibility

### Built-in features

Each thumb is a native `<input type="range">` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`, and `aria-valuetext` set from the component's properties. Native screen-reader announcements for slider value changes therefore work without extra wiring.

Keyboard interaction:

- `ArrowLeft` / `ArrowRight` (or `ArrowUp` / `ArrowDown`, `Home`, `End`, `PageUp`, `PageDown`) — adjust the focused thumb by `step` (provided by the native range input).
- `Tab` — move focus to the next thumb or out of the slider.
- In spatial navigation mode, the slider has a dedicated edit mode: focus the thumb, press `Enter` to enter edit mode, use Left/Right to adjust the value, and press `Enter` or `Escape` (or `Up`/`Down`) to leave edit mode. This prevents arrow keys from being captured for value changes while the user is navigating between focusable elements with arrows. The range slider also exposes `data-spatial-left` / `data-spatial-right` between the two thumbs so spatial navigation moves directly between them.

Soft-disabled state: `aria-disabled="true"` is set on the native inputs while `soft-disabled` is true, and pointer/keyboard interactions are suppressed (Tab still moves focus through). Disabled state: the native inputs are `disabled` and `tabindex="-1"`.

Tooltip: the value tooltip is rendered with `aria-hidden="true"` because the same value is already announced through the native `aria-valuetext`/`aria-valuenow` on the input.

#### Internal ARIA managed by the component

| Element                         | Attribute         | Value                                                          |
| ------------------------------- | ----------------- | -------------------------------------------------------------- |
| Single thumb `<input>`          | `type`            | `range`                                                        |
| Single thumb `<input>`          | `aria-valuemin`   | mirrors `min`                                                  |
| Single thumb `<input>`          | `aria-valuemax`   | mirrors `max`                                                  |
| Single thumb `<input>`          | `aria-valuenow`   | mirrors `value` (or `min` when unset)                          |
| Single thumb `<input>`          | `aria-label`      | mirrors `data-aria-label` (falls back to `label`)              |
| Single thumb `<input>`          | `aria-valuetext`  | mirrors `data-aria-valuetext` (falls back to `value-label`, then to the numeric value) |
| Single thumb `<input>`          | `tabindex`        | `0` when enabled; `-1` when `disabled`                         |
| Single thumb `<input>`          | `aria-disabled`   | `true` when `soft-disabled` is true                            |
| Start thumb `<input>` (range)   | `aria-valuenow`   | mirrors `value-start` (or `min` when unset)                    |
| Start thumb `<input>` (range)   | `aria-label`      | mirrors `start-aria-label` (falls back to `label`)             |
| Start thumb `<input>` (range)   | `aria-valuetext`  | mirrors `start-aria-valuetext` (falls back to `value-label-start`, then to the numeric value) |
| End thumb `<input>` (range)     | `aria-valuenow`   | mirrors `value-end` (or `max` when unset)                      |
| End thumb `<input>` (range)     | `aria-label`      | mirrors `end-aria-label` (falls back to `label`)               |
| End thumb `<input>` (range)     | `aria-valuetext`  | mirrors `end-aria-valuetext` (falls back to `value-label-end`, then to the numeric value) |
| Value tooltip                   | `aria-hidden`     | `true`                                                         |

### Implementation requirements

#### Labelling

- Provide a visible `label` whenever possible — it is used as the accessible name fallback for the thumb(s).
- For range sliders, set `start-aria-label` and `end-aria-label` so each thumb is individually identifiable (e.g. "Minimum price", "Maximum price"). Without these the same `label` value is used for both thumbs.
- When the numeric value alone is not meaningful (currencies, dates, named buckets), set `data-aria-valuetext` / `start-aria-valuetext` / `end-aria-valuetext` so screen readers announce a human-readable value.
