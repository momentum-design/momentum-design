---
title: Menuitemcheckbox
summary: Usage, guidelines, and accessibility for the mdc-menuitemcheckbox component — a checkable menu item with checkbox, checkmark, or toggle indicators.
tier: 3
component: menuitemcheckbox
---

## Overview

`mdc-menuitemcheckbox` is a checkable menu item for toggling an independent on/off setting from inside a `mdc-menupopover`, `mdc-menubar`, or `mdc-menusection`. Several options in the same menu can be turned on or off at once, each without affecting the others.

### When to use

- Use `mdc-menuitemcheckbox` for menu entries that toggle an independent on/off setting.
- Use `mdc-menuitemcheckbox` when several items in the same menu can be checked at the same time.

### When not to use

- Do not use `mdc-menuitemcheckbox` when only one item in a group may be selected. Use `mdc-menuitemradio` instead.
- Do not use `mdc-menuitemcheckbox` for actions that do not have a checked state. Use `mdc-menuitem` instead.
- Do not use `mdc-checkbox` directly inside a menu. Use `mdc-menuitemcheckbox` instead so the item gets the correct role and keyboard behavior.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/menuitemcheckbox/index.js";
import { MenuItemCheckbox } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-menupopover triggerid="view-trigger">
  <mdc-menuitemcheckbox
    label="Show sidebar"
    name="view"
    value="sidebar"
    indicator="checkbox"
    checked
  ></mdc-menuitemcheckbox>
  <mdc-menuitemcheckbox
    label="Show notifications"
    indicator="toggle"
  ></mdc-menuitemcheckbox>
</mdc-menupopover>
```

The component should not contain its own focusable descendants — interaction must happen on the menu item itself.

### Content guidance

- Write the `label` as the setting the item toggles, phrased so its checked meaning is clear ("Show sidebar", "Mute notifications") rather than a bare noun.
- Keep labels parallel across a checkable group so the set reads as one list of options.
- Reserve `secondary-label`/`tertiary-label` for genuine supporting detail; do not restate the checked state in text — the indicator already shows it.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | The on/off state, reflected to `aria-checked`. Toggles on click in uncontrolled mode; set it explicitly for controlled state. |
| `indicator="checkbox"` (default) | How the state is shown: `checkbox` (leading box) for a standard multi-select list; `toggle` (trailing switch) when leading icons would clash with a box; `checkmark` (trailing tick, shown only when checked) for a lighter treatment; `none` only when you supply your own accessible indicator. |
| `control-type="uncontrolled"` (default) | `uncontrolled` lets the component flip `checked` on click; `controlled` leaves `checked` to you — react to `change` and update state yourself. |
| `name` / `value` | Identify the item when a group selection is reported. |
| `disabled` / `soft-disabled` | `disabled` blocks interaction and removes the item from tab order; `soft-disabled` keeps it focusable so users can see why it is unavailable. |
| `label` + `secondary-label` / `tertiary-label` + `side-header-text` / `subline-text` | Leading/trailing text; each may also be slotted directly for custom markup. |
| `arrow-position` / `arrow-direction` | Optional edge arrow; rarely needed on a checkable item since it does not open a submenu. |

**Note:** the `checkbox` indicator is always leading; `toggle` and `checkmark` are always trailing — these positions are fixed. The component emits `change` (even in controlled mode), `click`, and `focus`.

### Limitations

- **Indicator positions are fixed** — `checkbox` is leading; `toggle` and `checkmark` are trailing. You cannot move them; choose the indicator that fits the layout.
- **Avoid in a busy menu** — a checkbox indicator competes with per-item leading icons or badges. Use `indicator="toggle"` or a plain `mdc-menuitem` with a checkmark when items already carry icons.
- **`indicator="none"` hides the state** — with no indicator the checked state is invisible; supply your own accessible indicator and keep `aria-checked` meaningful.
- **No nested focusables** — interaction happens on the item itself; do not slot focusable controls inside it.
- **Controlled mode won't self-update** — with `control-type="controlled"` the item does not flip `checked` on click; update state from the `change` event.

## Accessibility

### Built-in features

- Sets `role="menuitemcheckbox"` on the host and keeps `aria-checked` in sync with the `checked` property.
- `Enter` and `Space` toggle the checked state (in `uncontrolled` mode) and dispatch a bubbling `change` event.
- Calling `.click()` programmatically is a no-op while `disabled` or `soft-disabled`.
- When `disabled`/`soft-disabled`, `aria-disabled` is set and slotted controls are disabled in sync.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menuitemcheckbox` |
| host | aria-checked | mirrors `checked` (`'true'` / `'false'`) |
| host | aria-disabled | `true` when `disabled` or `soft-disabled` |
| host | tabindex | `-1` when `disabled`; parent menu manages the active tab stop otherwise |

### Implementation requirements

#### General

- Place `mdc-menuitemcheckbox` inside an `mdc-menupopover`, `mdc-menubar`, or `mdc-menusection` so the surrounding menu manages roving tabindex and keyboard navigation.
- Do not place focusable elements inside the item; render any visuals via the static checkbox/toggle/checkmark indicators or non-interactive content.

#### Labeling

- Provide an accessible name via `label`, slotted text in `leading-text-primary-label`, or `aria-label`.
- When using `indicator="none"`, ensure the alternative visual is reflected for assistive technology (for example via `aria-label` updates).

## Related components

| Component | Relationship |
|---|---|
| `mdc-menuitemradio` | Single-select counterpart for mutually exclusive options in a group. |
| `mdc-menuitem` | Plain action item with no checked state. |
| `mdc-menusection` | Labeled grouping that bounds a set of checkable items. |
| `mdc-menupopover` | Floating menu surface that hosts checkable items and manages focus. |
| `mdc-checkbox` | Standalone form checkbox for use outside menus. |
