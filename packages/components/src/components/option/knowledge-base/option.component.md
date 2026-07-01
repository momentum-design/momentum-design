---
title: Option
summary: Usage, guidelines, and accessibility for the mdc-option component — a selectable option inside a listbox, typically used within mdc-select.
tier: 3
component: option
---

## Overview

`mdc-option` is a selectable entry rendered inside a listbox (`mdc-selectlistbox` / `mdc-listbox`), typically as a child of `mdc-select`. It supports a primary and secondary label, an optional prefix icon, and renders a checkmark on the trailing side when selected. The component participates in form submission through its associated form-control behaviour.

### When to use

- Use `mdc-option` for each selectable value inside an `mdc-select`, `mdc-selectlistbox`, or `mdc-listbox`.
- Group related options together with `mdc-optgroup`.

### When not to use

- Do not use `mdc-option` inside menus — use `mdc-menuitem`, `mdc-menuitemcheckbox`, or `mdc-menuitemradio` inside `mdc-menupopover`/`mdc-menubar`.
- Do not use it as a stand-alone list row; use `mdc-listitem` for generic lists.

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

### Property/Attribute details

- `label`, `secondary-label` — primary and secondary text rendered on the leading side. May be replaced by slotting text into `leading-text-primary-label` / `leading-text-secondary-label`.
- `value` — the submitted form value for the option.
- `selected` — boolean, default `false`. Mirrors to `aria-selected` and renders the trailing checkmark icon. Selecting/unselecting also dispatches `selected` / `unselected` lifecycle events.
- `prefix-icon` — icon name shown on the leading side. The icon is rendered via the leading-controls slot using `mdc-icon`.
- `aria-label` — accessible name override. Useful when extra context (for example, a country code) should be announced even though it is not in the visible label.
- `disabled` — boolean. When set, `aria-disabled="true"` is reflected and the option is removed from tab order.
- `soft-disabled` — boolean. Appears disabled but remains focusable.
- `active` — visual-only flag for hover/active styling.
- `tertiary-label`, `side-header-text`, `subline-text`, `name` — not used by `mdc-option`; the component explicitly clears `name`, `sideHeaderText`, and `sublineText` when connected.
- Events: `click`, `keydown`, `keyup`, `focus`.

### Notes

- Only `label`, `secondary-label`, and `prefix-icon` are rendered; tertiary text, side header text, and subline text are intentionally not displayed for options.

## Accessibility

### Built-in features

- Sets `role="option"` on the host and keeps `aria-selected` in sync with the `selected` property.
- Sets `aria-disabled` based on the `disabled` property; while disabled, the option is removed from the tab order and click/key events are stopped.
- `Enter` (on `keydown`) and `Space` (on `keyup`) trigger a click on the option, matching native option behaviour.
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

#### Labelling

- Provide an accessible name via `label`, slotted text in `leading-text-primary-label`, or `aria-label`.
- When several options share the same visible label, set `aria-label` (or include disambiguating `secondary-label` text) so screen readers can distinguish them.
