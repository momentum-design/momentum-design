---
title: Slider
summary: Usage, guidelines, and accessibility for the mdc-slider component — a single-value or range input rendered as one or two thumbs on a track.
tier: 3
component: slider
---

## Overview

The slider lets users choose a value, or a range of values, from a defined numeric scale where the relative position matters more than an exact figure. It suits settings that are adjusted by feel, such as volume or brightness, and scrubbing along a timeline.

### When to use

- Use `mdc-slider` for choosing a numeric value from a range where relative position matters more than an exact figure — volume, brightness, zoom, or scrubbing a timeline.
- Use `mdc-slider` `range` for selecting both ends of an interval, such as a price range or time window.
- Use `mdc-slider` with `step` greater than 1 for choosing from a limited set of discrete, evenly spaced values shown as tick marks the thumb snaps to.

### When not to use

- Do not use `mdc-slider` when the user must enter a precise value. Use a number `mdc-input` instead.
- Do not use `mdc-slider` for a binary on/off choice. Use `mdc-toggle` instead.
- Do not use `mdc-slider` for picking one option from a short, named list. Use `mdc-select` or `mdc-radiogroup` instead.

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

Listen for `input` while the user drags and for `change` once the value is committed. For a single-value slider `event.detail` is `{ value }`; for a range slider it is `{ valueStart, valueEnd }`.

### Content guidance

- Give every slider a `label` that names what is being adjusted, such as "Volume" or "Price range".
- Use `label-start` and `label-end` to caption the low and high ends of the track when the scale needs context — a unit hint or a "Min" / "Max" pair.
- Set `value-label` (or `value-label-start` / `value-label-end`) when the raw number is not self-explanatory, so the tooltip shows "$20", "2:30", or a named value instead of a bare figure.
- Keep tooltip and end-label copy short; it sits in tight space beside the thumb.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `range` | Switches from one thumb to two. Use it when the user selects an interval rather than a single point. |
| `min` / `max` | Bounds of the scale (default `0`–`100`). Set them to the real domain so thumb position reflects meaning. |
| `step` | Increment between values (default `1`). Set greater than `1` to expose tick marks and snap to discrete values. |
| `value` / `value-start` / `value-end` | Current position(s). Use `value` in single mode and `value-start` / `value-end` in `range` mode. |
| `leading-icon` / `trailing-icon` | Icons anchoring the low and high ends (muted vs full-volume speaker). Use them when an icon reads faster than an end label. |
| `value-label` / `value-label-start` / `value-label-end` | Human-readable tooltip text shown in place of the raw number. Use for currency, time, or named values. |
| `hide-tooltip` | Suppresses the value tooltip on focus and hover. Use when the current value is already shown elsewhere. |
| `disabled` vs `soft-disabled` | `disabled` removes the thumb from the tab order; `soft-disabled` keeps it focusable (with tooltip on focus) but blocks input. Use `soft-disabled` when users still need to read the value. |
| `name` / `name-start` / `name-end` | Form field name(s) submitted with the value(s). |
| `data-aria-label` / `start-aria-label` / `end-aria-label` | Accessible name(s) for the thumb(s) when the visible `label` is absent or each thumb needs its own name. |
| `data-aria-valuetext` / `start-aria-valuetext` / `end-aria-valuetext` | Spoken value text for when the number alone is not meaningful. |

### Limitations

- **No built-in number input** — the component renders only the track, labels, and tooltip; pair it with a number `mdc-input` when users also need to type an exact value.
- **Thumbs cannot cross** — in `range` mode the start value is clamped to the end value and vice versa, so the interval can collapse to zero but never invert.
- **Ticks need step over 1** — tick marks and snapping appear only when `step` is greater than 1; a continuous slider shows no ticks.
- **Horizontal only** — the track has no vertical orientation; lay the control out horizontally or choose another pattern.
- **Tooltip is decorative** — the value tooltip is `aria-hidden`, so assistive technology relies on `aria-valuenow` and `aria-valuetext`; set the `*-aria-valuetext` attributes when the number needs context.

## Accessibility

### Built-in features

Each thumb is a native `<input type="range">` with `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-label`, and `aria-valuetext` set from the component's properties, so screen-reader announcements for value changes work without extra wiring.

Keyboard interaction:

- `ArrowLeft` / `ArrowRight` (or `ArrowUp` / `ArrowDown`, `Home`, `End`, `PageUp`, `PageDown`) adjust the focused thumb by `step`, provided by the native range input.
- `Tab` moves focus to the next thumb or out of the slider.
- In spatial-navigation mode the slider has a dedicated edit mode: focus the thumb, press `Enter` to enter edit mode, use Left/Right to adjust the value, and press `Enter` or `Escape` (or Up/Down) to leave it. This keeps arrow keys from being captured for value changes while the user navigates between focusable elements. In `range` mode, `data-spatial-left` / `data-spatial-right` link the two thumbs so spatial navigation moves directly between them.

The `soft-disabled` state sets `aria-disabled="true"` on the native inputs and suppresses pointer and keyboard input while leaving them in the tab order; `disabled` sets the native `disabled` attribute and `tabindex="-1"`. The value tooltip is rendered `aria-hidden="true"` because the same value is already announced through `aria-valuetext` / `aria-valuenow`.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Single thumb `<input>` | `type` | `range` |
| Single thumb `<input>` | `aria-valuemin` | mirrors `min` |
| Single thumb `<input>` | `aria-valuemax` | mirrors `max` |
| Single thumb `<input>` | `aria-valuenow` | mirrors `value` (or `min` when unset) |
| Single thumb `<input>` | `aria-label` | mirrors `data-aria-label` (falls back to `label`) |
| Single thumb `<input>` | `aria-valuetext` | mirrors `data-aria-valuetext` (falls back to `value-label`, then the numeric value) |
| Single thumb `<input>` | `tabindex` | `0` when enabled; `-1` when `disabled` |
| Single thumb `<input>` | `aria-disabled` | `true` when `soft-disabled` is true |
| Start thumb `<input>` (range) | `aria-valuenow` | mirrors `value-start` (or `min` when unset) |
| Start thumb `<input>` (range) | `aria-label` | mirrors `start-aria-label` (falls back to `label`) |
| Start thumb `<input>` (range) | `aria-valuetext` | mirrors `start-aria-valuetext` (falls back to `value-label-start`, then the numeric value) |
| End thumb `<input>` (range) | `aria-valuenow` | mirrors `value-end` (or `max` when unset) |
| End thumb `<input>` (range) | `aria-label` | mirrors `end-aria-label` (falls back to `label`) |
| End thumb `<input>` (range) | `aria-valuetext` | mirrors `end-aria-valuetext` (falls back to `value-label-end`, then the numeric value) |
| Value tooltip | `aria-hidden` | `true` |

### Implementation requirements

#### Labeling

- Provide a visible `label` whenever possible — it is used as the accessible name fallback for the thumb(s).
- For range sliders, set `start-aria-label` and `end-aria-label` so each thumb is individually identifiable ("Minimum price", "Maximum price"); without them the single `label` names both thumbs.
- When the numeric value alone is not meaningful (currencies, dates, named buckets), set `data-aria-valuetext` / `start-aria-valuetext` / `end-aria-valuetext` so screen readers announce a human-readable value.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-input` | For entering a precise numeric value by typing instead of dragging. |
| `mdc-toggle` | For a binary on/off choice rather than a value along a scale. |
| `mdc-radiogroup` | For selecting one option from a short, named set. |
