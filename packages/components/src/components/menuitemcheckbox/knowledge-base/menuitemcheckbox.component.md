---
title: Menuitemcheckbox
summary: Usage, guidelines, and accessibility for the mdc-menuitemcheckbox component — a checkable menu item with checkbox, checkmark, or toggle indicators.
tier: 3
component: menuitemcheckbox
---

## Overview

`mdc-menuitemcheckbox` is a checkable menu item used inside a `mdc-menupopover`, `mdc-menubar`, or `mdc-menusection`. Its checked state can be toggled independently of other items in the same group and is reflected to assistive technology through `aria-checked`. Visual feedback is provided by a checkbox (leading), toggle (trailing), checkmark (trailing), or no indicator at all.

### When to use

- Use `mdc-menuitemcheckbox` for menu entries that toggle an independent on/off setting.
- Use it when several items in the same menu can be checked at the same time.

### When not to use

- Use `mdc-menuitemradio` when only one item in a group may be selected.
- Use `mdc-menuitem` for actions that do not have a checked state.
- Do not use `mdc-checkbox` directly inside a menu; the dedicated `mdc-menuitemcheckbox` provides the correct role and keyboard behaviour.

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

### Property/Attribute details

- `checked` — boolean. Defaults to `false`. Toggled on click unless `control-type="controlled"`. Reflected to `aria-checked`.
- `indicator` — `'checkbox' | 'checkmark' | 'toggle' | 'none'`. Defaults to `'checkbox'`.
  - `checkbox` renders an `mdc-staticcheckbox` on the leading side.
  - `toggle` renders a compact `mdc-statictoggle` on the trailing side.
  - `checkmark` renders a checkmark icon on the trailing side, visible only when `checked` is `true`.
  - `none` renders no indicator; consumers are responsible for surfacing the state in another accessible way.
- `control-type` — `'controlled' | 'uncontrolled'` (from the shared control-type provider). In `controlled` mode the component does not flip `checked` on click; consumers are expected to react to the `change` event and update `checked` themselves.
- `name`, `value` — identify the item when it is part of a group selection.
- `disabled`, `soft-disabled` — disable the item. `disabled` blocks interaction and removes the item from tab order; `soft-disabled` keeps it focusable but does not trigger the toggle.
- `label`, `secondary-label`, `tertiary-label`, `side-header-text`, `subline-text` — text rendered in the leading/trailing slots; each may also be slotted directly.
- `arrow-position`, `arrow-direction` — optional arrow icon on the leading or trailing edge.
- Events: `change` (after click toggles state, even in controlled mode), `click`, `focus`.

### Notes

- The checkbox indicator is always positioned on the leading side; toggle and checkmark indicators are always trailing — these positions are fixed by the component.
- Choose `indicator="none"` only when you provide a custom visual indicator yourself and have ensured that indicator is accessible.

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

#### Labelling

- Provide an accessible name via `label`, slotted text in `leading-text-primary-label`, or `aria-label`.
- When using `indicator="none"`, ensure the alternative visual is reflected for assistive technology (for example via `aria-label` updates).
