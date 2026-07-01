---
title: Filterchip
summary: Usage, guidelines, and accessibility for the mdc-filterchip component — a togglable chip used to apply or remove a single filter, with a built-in checkmark indicator when selected.
tier: 3
component: filterchip
---

## Overview

The filterchip is a compact, togglable chip used to represent a single filter in a list, table, or search context. Activating the chip flips its `selected` state and the component swaps its leading icon to a checkmark to indicate the active filter.

Filterchips are typically rendered in a horizontal row next to a result set; users toggle them on and off to narrow the set.

### When to use

- Use `mdc-filterchip` when each chip toggles a single filter that can be applied or removed independently.
- Use it inside a row of filters where the selected state should be visually obvious at a glance.

### When not to use

- Use `mdc-chip` when the chip triggers an action rather than a toggle.
- Use `mdc-alertchip` when the chip communicates a status (information, warning, error) rather than a togglable filter.
- Use `mdc-staticchip` when the chip is purely decorative and should not be interactive.
- Use `mdc-checkbox` or `mdc-radio` when the control should appear inside a form field group rather than as a compact filter row.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/filterchip/index.js"; // custom element registration
// or via React wrapper
import { Filterchip } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-filterchip label="In stock"></mdc-filterchip>
<mdc-filterchip label="On sale" selected></mdc-filterchip>
```

Listen for the `click` event (or `keydown`/`keyup` for keyboard activation) to react to filter toggles. The component flips `selected` automatically on activation; read the updated `selected` attribute to drive the surrounding filter state.

### Content guidance

- Keep the `label` short — we recommend up to 20 characters including spaces, matching the underlying chip.
- Phrase the label as the filter that gets applied when the chip is selected ("In stock", not "Toggle in stock"); the checkmark indicates state.
- Group related filterchips together and place the row close to the result set they affect.

### Property/Attribute details

- `selected` — when `true`, the chip is in the active state, displays the checkmark icon, and sets `aria-pressed="true"`. Default `false`.
- `label` — visible label text rendered through `mdc-text`. Used as the accessible name. Recommended max length 20 characters.
- `color` — fixed to the filterchip-specific colour token on connect; setting a different `color` has no effect after connect.
- `disabled` — when `true`, the chip is non-interactive and removed from the tab order.
- `autoFocusOnMount` — when `true`, focuses the chip on first render.

## Accessibility

### Built-in features

The host renders with `role="button"` and a single tab stop. Activating the chip flips `selected` and updates `aria-pressed` accordingly, exposing the toggle state to assistive technology.

- `Enter` activates the chip on `keydown` (matches native button behaviour).
- `Space` activates the chip on `keyup` (matches native button behaviour; `keydown` is suppressed so the page does not scroll).
- Click activates the chip.

When `disabled` is `true`, click and keyboard activation are suppressed and the host is removed from the tab order.

The `label` provides the accessible name. When `selected` is `true`, the leading icon is swapped to a checkmark; the icon itself is decorative and the selected state is communicated through `aria-pressed`.

#### Internal ARIA managed by the component

| Element | Attribute      | Value                                                  |
| ------- | -------------- | ------------------------------------------------------ |
| Host    | `role`         | `button`                                               |
| Host    | `aria-pressed` | `true` when `selected`, `false` otherwise              |
| Host    | `tabindex`     | `0` when enabled; `-1` when `disabled`                 |

### Implementation requirements

#### General

- Use `disabled` (not `aria-hidden` or visual cues alone) when a filter must not be interactive — the state is then exposed to assistive technology and removed from the tab order.
- Drive the surrounding filter state from `selected` after the user activates the chip; the component does not own the underlying filter logic.

#### Labelling

- Provide a meaningful `label` — it is the accessible name and is mandatory for screen-reader users.
- The toggle state is announced through `aria-pressed`; do not encode the selected state in the `label` itself (e.g. avoid "In stock ✓").
