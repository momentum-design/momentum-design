---
title: Menuitemradio
summary: Usage, guidelines, and accessibility for the mdc-menuitemradio component — a single-select menu item with radio, checkmark, or no indicator.
tier: 3
component: menuitemradio
---

## Overview

`mdc-menuitemradio` is a checkable menu item for choosing one option from a mutually exclusive group inside a menu. Selecting one item clears the others in the same group.

### When to use

- Use `mdc-menuitemradio` for mutually exclusive options inside a menu (only one item in the group may be selected at a time).
- Group related items by giving them the same `name` and placing them inside the same `mdc-menusection` or `mdc-menupopover`.

### When not to use

- Do not use `mdc-menuitemradio` when more than one item in the group can be checked at once. Use `mdc-menuitemcheckbox` instead.
- Do not use `mdc-menuitemradio` for actions that have no selected state. Use `mdc-menuitem` instead.
- Do not use `mdc-menuitemradio` for an ordinary single-select list where a checkmark reads clearly. Use `mdc-menuitem` with a selection indicator instead, and reserve radios for menus that mix single-select and multi-select groups.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/menuitemradio/index.js";
import { MenuItemRadio } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-menusection header-text="View density">
  <mdc-menuitemradio label="Compact" name="density" value="compact" checked></mdc-menuitemradio>
  <mdc-menuitemradio label="Default" name="density" value="default"></mdc-menuitemradio>
  <mdc-menuitemradio label="Comfortable" name="density" value="comfortable"></mdc-menuitemradio>
</mdc-menusection>
```

All members of the same radio group must share the same `name` value and live inside the same `mdc-menusection` or `mdc-menupopover`. The component should not contain its own focusable descendants.

### Content guidance

- Write each `label` as one option in the set, phrased in parallel so the group reads as a single choice ("Compact", "Default", "Comfortable").
- Give the enclosing `mdc-menusection` a `header-text` that names what the group selects, so the options have a visible heading.
- Do not restate the selected state in text; the indicator already shows it.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | The selected state, reflected to `aria-checked`. In uncontrolled mode, selecting one radio clears the others in the group; set it explicitly for controlled state. |
| `indicator="radio"` (default) | How selection is shown: `radio` (leading dot) for an explicit radio group; `checkmark` (trailing tick, shown only when checked) for a lighter single-select treatment; `none` only when you supply your own accessible indicator. |
| `control-type="uncontrolled"` (default) | `uncontrolled` updates `checked` and clears siblings on click; `controlled` leaves all state to you — react to `change` and update it yourself. |
| `name` / `value` | `name` scopes the radio group; `value` is the value reported for this entry. |
| `disabled` / `soft-disabled` | `disabled` blocks interaction and removes the item from tab order; `soft-disabled` keeps it focusable so users can see why it is unavailable. |
| `label` + `secondary-label` / `tertiary-label` + `side-header-text` / `subline-text` | Leading/trailing text; each may also be slotted directly for custom markup. |
| `arrow-position` / `arrow-direction` | Optional edge arrow; rarely needed on a radio item since it does not open a submenu. |

**Note:** the `radio` indicator is always leading; the `checkmark` is always trailing — these positions are fixed. The component emits `change`, `click`, and `focus`.

### Limitations

- **Can't unselect by re-clicking** — clicking an already-checked radio is ignored; provide a separate reset action if users need to clear the choice.
- **Group scope is name + ancestor** — single-selection only applies among radios that share a `name` inside the same `mdc-menusection`/`mdc-menupopover`; the same `name` in another section is a separate group.
- **Indicator positions are fixed** — `radio` is leading and `checkmark` trailing; choose the indicator that fits rather than repositioning it.
- **`indicator="none"` hides the state** — supply your own accessible indicator and keep `aria-checked` meaningful.
- **Controlled mode won't self-update** — with `control-type="controlled"` the component changes neither `checked` nor sibling state on click; drive selection from the `change` event.

## Accessibility

### Built-in features

- Sets `role="menuitemradio"` on the host and keeps `aria-checked` in sync with the `checked` property.
- `Enter` and `Space` activate the radio (selecting it when not already checked) and dispatch a bubbling `change` event.
- When a radio becomes checked, other radios in the same group within the same section/popover have their `checked` attribute removed automatically.
- Clicks on a radio that is already checked are ignored — selection is single-direction.
- `aria-disabled` reflects the disabled or soft-disabled state; slotted controls have their `disabled` attribute mirrored from the host.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `menuitemradio` |
| host | aria-checked | mirrors `checked` (`'true'` / `'false'`) |
| host | aria-disabled | `true` when `disabled` or `soft-disabled` |
| host | tabindex | `-1` when `disabled`; parent menu manages the active tab stop otherwise |

### Implementation requirements

#### General

- Place `mdc-menuitemradio` inside an `mdc-menupopover`, `mdc-menubar`, or `mdc-menusection` so the surrounding menu manages roving tabindex and keyboard navigation.
- Group related radios by sharing the same `name` and keeping them inside the same `mdc-menusection` or `mdc-menupopover`.
- Do not nest focusable elements inside the item.

#### Labeling

- Provide an accessible name via `label`, slotted text in `leading-text-primary-label`, or `aria-label`.
- When grouping radios inside `mdc-menusection`, give the section a `header-text` so the group has a visible heading; the section forwards it to `aria-label` automatically.

## Related components

| Component | Relationship |
|---|---|
| `mdc-menuitemcheckbox` | Multi-select counterpart for independent on/off items in a menu. |
| `mdc-menuitem` | Plain action item, or a single-select item with a checkmark indicator. |
| `mdc-menusection` | Labeled grouping that scopes a radio group's single-selection rule. |
| `mdc-menupopover` | Floating menu surface that hosts radio items and manages focus. |
| `mdc-radio` / `mdc-radiogroup` | Standalone form radios for use outside menus. |
