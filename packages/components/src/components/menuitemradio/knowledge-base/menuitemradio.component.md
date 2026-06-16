---
title: Menuitemradio
summary: Usage, guidelines, and accessibility for the mdc-menuitemradio component — a single-select menu item with radio, checkmark, or no indicator.
status: draft
tier: 3
component: menuitemradio
---

## Overview

`mdc-menuitemradio` is a checkable menu item used for single-selection within a group of related items. When checked, the component automatically un-checks every other `mdc-menuitemradio` that shares the same `name` inside the closest `mdc-menusection` or `mdc-menupopover`.

### When to use

- Use `mdc-menuitemradio` for mutually exclusive options inside a menu (only one item in the group may be selected at a time).
- Group related items by giving them the same `name` and placing them inside the same `mdc-menusection` or `mdc-menupopover`.

### When not to use

- Use `mdc-menuitemcheckbox` when more than one item in the group can be checked simultaneously.
- Use `mdc-menuitem` for actions that do not have a selected state.

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

### Property/Attribute details

- `checked` — boolean, default `false`. Reflected to `aria-checked`. Clicking an unchecked radio sets `checked` to `true` and clears `checked` on the other radios in the group (unless `control-type="controlled"`, in which case the consumer is responsible for updating state).
- `indicator` — `'radio' | 'checkmark' | 'none'`. Defaults to `'radio'`.
  - `radio` renders an `mdc-staticradio` on the leading side.
  - `checkmark` renders a checkmark icon on the trailing side, visible only when `checked` is `true`.
  - `none` renders no indicator; consumers must surface the state in another accessible way.
- `control-type` — `'controlled' | 'uncontrolled'`. In controlled mode the component does not mutate `checked` or sibling state on click; it still emits a bubbling `change` event.
- `name`, `value` — `name` identifies the radio group; `value` is the value associated with this entry.
- `disabled`, `soft-disabled` — disable interaction. Clicks and key activations on disabled or soft-disabled radios do not change selection.
- `label`, `secondary-label`, `tertiary-label`, `side-header-text`, `subline-text` — text rendered in the leading/trailing slots.
- `arrow-position`, `arrow-direction` — optional arrow icon on the leading or trailing edge.
- Events: `change` (after a click selects a new value), `click`, `focus`.

### Notes

- The radio indicator is always positioned on the leading side; the checkmark indicator is always trailing — these positions are fixed by the component.
- Group membership is determined by `name` plus the closest `mdc-menusection` or `mdc-menupopover` ancestor; radios in different sections never affect each other even when their `name` matches.

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

#### Labelling

- Provide an accessible name via `label`, slotted text in `leading-text-primary-label`, or `aria-label`.
- When grouping radios inside `mdc-menusection`, give the section a `header-text` so the group has a visible heading; the section forwards it to `aria-label` automatically.
