---
title: Filterchip
summary: Usage, guidelines, and accessibility for mdc-filterchip — a togglable chip for applying or removing a single filter, with a checkmark indicator when selected.
tier: 3
component: filterchip
---

## Overview

Filter chips let users refine content based on specific criteria — commonly beside lists, tables, or search results in e-commerce, dashboards, and data interfaces. `mdc-filterchip` is a compact, togglable chip: activating it flips the `selected` state, swaps the leading icon to a checkmark, and applies an active background with a 2px border.

### When to use

- When each chip toggles a single filter that can be applied or removed independently.
- In a **group** of filter chips placed close to the result set they affect — filter chips are always used in a group, not as a single isolated chip.
- On e-commerce, dashboard, or search surfaces where users narrow a list or table with quick filters.

### When not to use

- When the chip triggers a one-off action rather than a toggle. Use `mdc-chip` instead.
- When the chip communicates alert or validation status. Use `mdc-alertchip` instead.
- When the chip is purely informational with no toggle behavior. Use `mdc-staticchip` instead.
- When the control should appear inside a form field group. Use `mdc-checkbox` or `mdc-radio` instead.
- When representing a removable user-entered value. Use `mdc-inputchip` instead.

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

- Keep the `label` short — limit to a maximum of **20 characters** including spaces.
- Phrase the label as the filter that gets applied when selected ("In stock", not "Toggle in stock"); the checkmark indicates state.
- Group related filterchips together and place the row close to the result set they affect.

### Property/Attribute details

- **`selected`**: When `true`, the chip is in the active state, displays the checkmark icon, shows the press/active background color with a 2px border, and sets `aria-pressed="true"`. Default `false`. Clicking a selected chip deselects it — the checkmark disappears and the chip returns to its normal neutral state.
- **`label`**: Visible label text rendered through `mdc-text`. Used as the accessible name. Recommended max length 20 characters.
- **`color`**: Fixed to the filterchip-specific neutral color token on connect; setting a different `color` has no effect after connect. Do not apply the multi-color palette used by label chips.
- **`disabled`**: When `true`, the chip is non-interactive and removed from the tab order.
- **`autoFocusOnMount`**: When `true`, focuses the chip on first render.

### Limitations

- Fixed at 24px height; width grows with the label. Only one size is available.
- Intended for use in groups — avoid rendering a lone filter chip without surrounding filter context.

## Accessibility

### Built-in features

The host renders with `role="button"` and a single tab stop. Activating the chip flips `selected` and updates `aria-pressed` accordingly, exposing the toggle state to assistive technology.

- `Enter` activates the chip on `keydown` (matches native button behavior).
- `Space` activates the chip on `keyup` (matches native button behavior; `keydown` is suppressed so the page does not scroll).
- Click activates the chip.

When `disabled` is `true`, click and keyboard activation are suppressed and the host is removed from the tab order.

The `label` provides the accessible name. When `selected` is `true`, the leading icon is swapped to a checkmark; the icon itself is decorative and the selected state is communicated through `aria-pressed`.

#### Internal ARIA managed by the component

| Element | Attribute      | Value                                  |
| ------- | -------------- | -------------------------------------- |
| Host    | `role`         | `button`                               |
| Host    | `aria-pressed` | `true` when `selected`, `false` otherwise |
| Host    | `tabindex`     | `0` when enabled; `-1` when `disabled` |

### Implementation requirements

#### General

- Use `disabled` (not `aria-hidden` or visual cues alone) when a filter must not be interactive — the state is then exposed to assistive technology and removed from the tab order.
- Drive the surrounding filter state from `selected` after the user activates the chip; the component does not own the underlying filter logic.

#### Labelling

- Provide a meaningful `label` — it is the accessible name and is mandatory for screen-reader users.
- The toggle state is announced through `aria-pressed`; do not encode the selected state in the `label` itself (e.g. avoid "In stock ✓").
