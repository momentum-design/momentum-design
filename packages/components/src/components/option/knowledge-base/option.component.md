---
title: Option
summary: Usage, guidelines, and accessibility for the mdc-option component — a selectable option inside a listbox, typically used within mdc-select.
tier: 3
component: option
---

## Overview

`mdc-option` is a selectable entry rendered inside a listbox (`mdc-selectlistbox` / `mdc-listbox`), typically as a child of `mdc-select`. It supports a primary and secondary label, an optional prefix icon, and renders a checkmark on the trailing side when selected. The component participates in form submission through its associated form-control behavior.

### When to use

- Use `mdc-option` for each selectable value inside an `mdc-select`, `mdc-selectlistbox`, or `mdc-listbox`.
- Group related options together with `mdc-optgroup`.

### When not to use

- Do not use `mdc-option` inside menus. Use `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` inside `mdc-menupopover`/`mdc-menubar` instead.
- Do not use `mdc-option` as a standalone list row. Use `mdc-listitem` for generic lists instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/option/index.js";
import { Option } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-select label="Country">
  <mdc-option value="de" label="Germany" prefix-icon="flag-de-regular"></mdc-option>
  <mdc-option value="fr" label="France" prefix-icon="flag-fr-regular" selected></mdc-option>
</mdc-select>
```

If the option label can be long enough to truncate, connect an `mdc-tooltip` via its `triggerid` to the option's `id` so the full text is exposed on hover and focus — the component does not create the tooltip automatically.

### Content guidance

- Write short, scannable `label`s in sentence case and keep parallel phrasing across options in the same list.
- Use `secondary-label` for a brief qualifier (a country code, a short description), not a second full sentence.
- Do not encode selection in the label ("Germany ✓"); the trailing checkmark and `aria-selected` convey selected state.

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` / `secondary-label` | Primary and secondary text on the leading side. Slot into `leading-text-primary-label` / `leading-text-secondary-label` when you need richer content. |
| `value` | The value submitted by the surrounding form-associated `mdc-select`. Give every option a unique one. |
| `selected` | Marks the option chosen; mirrors to `aria-selected` and renders the trailing checkmark. Usually driven by the parent rather than set directly. |
| `prefix-icon` | Leading `mdc-icon` name for quick recognition; keep it meaningful, not decorative. |
| `disabled` / `soft-disabled` | `disabled` removes the option from the tab order and blocks interaction; `soft-disabled` looks disabled but stays focusable so assistive tech can still reach it. |
| `aria-label` | Announced-name override — use it to disambiguate options that share a visible label. |

**Note:** `tertiary-label`, `side-header-text`, `subline-text`, and `name` are inherited but unused; the component clears them on connect.

### Limitations

- **Extra text not rendered** — only `label`, `secondary-label`, and `prefix-icon` display; `tertiary-label`, `side-header-text`, and `subline-text` are intentionally cleared. Put all option meaning in the primary and secondary labels.
- **No automatic tooltip** — a long label does not create its own tooltip. Connect an `mdc-tooltip` via `triggerid` to the option's `id` when the full text must stay reachable.
- **Listbox context required** — an option manages its role and selected state but relies on a parent listbox for roving focus and selection. Place it inside `mdc-selectlistbox` or `mdc-listbox`.

## Accessibility

### Built-in features

- Sets `role="option"` on the host and keeps `aria-selected` in sync with the `selected` property.
- Sets `aria-disabled` based on the `disabled` property; while disabled, the option is removed from the tab order and click/key events are stopped.
- `Enter` (on `keydown`) and `Space` (on `keyup`) trigger a click on the option, matching native option behavior.
- Renders a trailing checkmark icon as a visual indicator when `selected` is `true`; assistive technology relies on `aria-selected` for state, not the icon.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| host | role | `option` |
| host | aria-selected | mirrors `selected` (`'true'` / `'false'`) |
| host | aria-disabled | mirrors `disabled` (`'true'` / `'false'`) |
| host | tabindex | `-1` when `disabled`; otherwise managed by the parent listbox roving tabindex |

### Implementation requirements

#### General

- Place `mdc-option` inside an `mdc-selectlistbox` (within `mdc-select`) or another listbox-style container that manages roving tabindex, the listbox role, and selection.
- Provide a `value` so the surrounding form-associated `mdc-select` can submit the selected value.

#### Labeling

- Provide an accessible name via `label`, slotted text in `leading-text-primary-label`, or `aria-label`.
- When several options share the same visible label, set `aria-label` (or include disambiguating `secondary-label` text) so screen readers can distinguish them.

## Related components

| Component | Relationship |
|---|---|
| `mdc-optgroup` | Labeled grouping of options within a listbox. |
| `mdc-selectlistbox` | Required `role="listbox"` wrapper for options inside select/combobox. |
| `mdc-listbox` | Standalone listbox that contains options directly. |
| `mdc-select` / `mdc-combobox` | Dropdown controls whose choices are `mdc-option` elements. |
| `mdc-menuitem` | The equivalent selectable row for menus rather than option lists. |
| `mdc-listitem` | Generic list row without option selection semantics. |
