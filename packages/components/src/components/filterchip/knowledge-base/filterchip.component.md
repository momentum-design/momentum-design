---
title: Filterchip
summary: Usage, guidelines, and accessibility for the mdc-filterchip component — a togglable chip used to apply or remove a single filter, with a built-in checkmark indicator when selected.
tier: 3
component: filterchip
---

## Overview

The filterchip is a compact, togglable chip used to represent a single filter in a list, table, or search context. Activating the chip flips its `selected` state and the component swaps its leading icon to a checkmark to indicate the active filter.

### When to use

- Use `mdc-filterchip` when each chip toggles a single filter that can be applied or removed independently.
- Use `mdc-filterchip` inside a row or group of filters where the selected state should be obvious at a glance; filter chips are used in groups, not as a lone chip.

### When not to use

- Do not use `mdc-filterchip` for a chip that triggers an action rather than a toggle. Use `mdc-chip`.
- Do not use `mdc-filterchip` to communicate a status such as information, warning, or error. Use `mdc-alertchip`.
- Do not use `mdc-filterchip` for a purely decorative, non-interactive chip. Use `mdc-staticchip`.
- Do not use `mdc-filterchip` when the control belongs inside a form field group. Use `mdc-checkbox` or `mdc-radio`.

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

- Keep the `label` short — up to 20 characters including spaces, matching the underlying chip.
- Phrase the label as the filter that gets applied when the chip is selected ("In stock", not "Toggle in stock"); the checkmark indicates state.
- Group related filterchips together and place the row close to the result set they affect.

### Property/Attribute details

| Option | Intent |
|---|---|
| `selected` | Toggles the active state; shows the checkmark and sets `aria-pressed="true"`. Read it after activation to drive the surrounding filter. Default `false`. |
| `label` | Visible text and accessible name. Phrase it as the filter applied ("In stock"), not the toggle action. |
| `disabled` | Makes the chip non-interactive and removes it from the tab order. Use so the state reaches assistive technology. |

**Note:** `color` is fixed to the filter-chip token on connect; setting a different `color` has no effect.

### Limitations

- **Color is fixed** — the neutral filter-chip color is applied on connect and cannot be overridden. Do not set `color` expecting a custom value.
- **State lives in `selected`** — the component flips `selected` and `aria-pressed` but does not own the filter logic. Drive the result set from `selected` yourself.
- **Meant for groups** — a lone filter chip reads ambiguously; render filter chips together next to the results they affect.

## Accessibility

### Built-in features

The host renders with `role="button"` and a single tab stop. Activating the chip flips `selected` and updates `aria-pressed` accordingly, exposing the toggle state to assistive technology.

- `Enter` activates the chip on `keydown` (matches native button behavior).
- `Space` activates the chip on `keyup` (matches native button behavior; `keydown` is suppressed so the page does not scroll).
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

#### Labeling

- Provide a meaningful `label` — it is the accessible name and is mandatory for screen-reader users.
- The toggle state is announced through `aria-pressed`; do not encode the selected state in the `label` itself (for example avoid "In stock ✓").

## Related components

| Component | Relationship |
|---|---|
| `mdc-chip` | Interactive chip that triggers an action instead of toggling a filter. |
| `mdc-alertchip` | Status chip with a reserved color set. Use to convey status, not a filter. |
| `mdc-staticchip` | Non-interactive label chip. Use when the chip should not respond to input. |
| `mdc-checkbox` / `mdc-radio` | Form controls for selection inside a field group rather than a compact filter row. |
