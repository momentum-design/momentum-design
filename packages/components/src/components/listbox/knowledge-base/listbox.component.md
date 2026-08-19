---
title: Listbox
summary: Usage, guidelines, and accessibility for the mdc-listbox component — a single- or multi-select list of mdc-option (optionally grouped by mdc-optgroup) that follows the WAI-ARIA listbox pattern.
tier: 3
component: listbox
---

## Overview

The listbox presents a list of `mdc-option` elements (optionally grouped by `mdc-optgroup`) and lets the user pick one option (default) or multiple options (`multiple`).

The listbox emits a `change` event whenever the selection changes, with `value` (the most recently selected option's `value`) and `selectedValues` (all currently selected `value`s) in the event detail. It is not yet a form control — wire its `value` into a form manually if form submission is needed.

### When to use

- Use `mdc-listbox` to present a list of options where the user must pick one (single select) or several (`multiple`) — for example a side-panel filter list, a settings picker, or a stand-alone option group.
- Use it when the WAI-ARIA listbox pattern (focus on selected option on entry, no looping, `aria-multiselectable` for multi) is the right semantic fit.

### When not to use

- Do not use `mdc-listbox` for a form-control select that opens a popover. Use `mdc-select` (with `mdc-selectlistbox`) instead.
- Do not use `mdc-listbox` for application menus or commands. Use `mdc-menupopover` instead.
- Do not use `mdc-listbox` for a navigable list without selection semantics. Use `mdc-list` with `mdc-listitem` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/listbox/index.js"; // custom element registration
// or via React wrapper
import { ListBox, Option, Optgroup } from '@momentum-design/components/dist/react';
```

Minimal markup example (single select):

```html
<mdc-listbox name="theme" value="light" @change=${onChange}>
  <mdc-option value="light" label="Light"></mdc-option>
  <mdc-option value="dark" label="Dark"></mdc-option>
  <mdc-option value="system" label="System"></mdc-option>
</mdc-listbox>
```

Multi-select listbox with grouped options:

```html
<mdc-listbox name="cuisines" multiple @change=${onChange}>
  <mdc-optgroup label="European">
    <mdc-option value="italian" label="Italian"></mdc-option>
    <mdc-option value="french" label="French"></mdc-option>
  </mdc-optgroup>
  <mdc-optgroup label="Asian">
    <mdc-option value="japanese" label="Japanese"></mdc-option>
    <mdc-option value="thai" label="Thai"></mdc-option>
  </mdc-optgroup>
</mdc-listbox>
```

Listen for `change` to react to selection updates. `event.detail.value` is the last-selected option's value; `event.detail.selectedValues` is the full array (useful in multi mode).

### Property/Attribute details

| Option | Intent |
|---|---|
| `value` | The selected option's value (single mode) or the first selected value (multi mode). Set it to preselect; the matching option updates to selected. |
| `multiple` | Allows more than one option to be selected, each toggled independently by click/Enter/Space. Leave it off for the common single-select case. |
| `name` | Informational identifier only — the listbox is not yet form-associated, so it matters only when you serialize the value yourself. |

### Limitations

- **Not form-associated** — the listbox does not participate in form submission; read `value` (or `event.detail.selectedValues`) and serialize it yourself.
- **Focus doesn't loop** — arrowing past the last option stays on the last option, per the WAI-ARIA listbox pattern; there is no wraparound.

## Accessibility

### Built-in features

The host exposes itself with `role="listbox"` and sets `aria-multiselectable="true"` when `multiple` is `true`. Options manage their own `role="option"` and `aria-selected` state.

Keyboard navigation follows the WAI-ARIA listbox pattern: arrow keys move focus between options (no wrap), `Home` / `End` jump to the first / last option, and `Enter` / `Space` activates the focused option (replacing selection in single mode, toggling in multi mode). The first time the listbox receives focus, the focus lands on the first currently-selected option (or the first option if none is selected) so screen-reader users start at a meaningful position.

Whenever the selection changes — by click, keyboard, or programmatic `value` update — a composed, bubbling `change` event is dispatched with both `value` and `selectedValues` so consumers can sync their own state.

#### Internal ARIA managed by the component

| Element        | Attribute               | Value                                                      |
| -------------- | ----------------------- | ---------------------------------------------------------- |
| Host           | `role`                  | `listbox`                                                  |
| Host           | `aria-multiselectable`  | `true` when `multiple`, otherwise removed                  |
| Each option    | `tabindex`              | `0` for the currently focused option, `-1` for the rest    |
| Each option    | `aria-selected`         | reflects the option's `selected` attribute                 |

### Implementation requirements

#### General

- Place options in the default slot (optionally wrapped in `mdc-optgroup`); only `mdc-option:not([disabled])` participates in keyboard navigation and selection.
- Give every `mdc-option` a unique `value`; the listbox syncs its own `value` to the selected option through it.
- Wire the `change` event to your own state and re-render — the listbox tracks selection internally but the consumer typically owns the canonical value.
- When `multiple` is `true`, communicate the multi-select affordance in the surrounding UI (header text, helper text) so users know to pick more than one option.

#### Labeling

- Give the listbox an accessible name with `aria-label`, or `aria-labelledby` pointing at a visible heading, so screen readers announce what the list is for.

## Related components

| Component | Relationship |
|---|---|
| `mdc-select` | Form-associated dropdown that opens a popover and wraps options in `mdc-selectlistbox`. |
| `mdc-combobox` | Editable, filterable dropdown variant of the select surface. |
| `mdc-selectlistbox` | The `role="listbox"` wrapper used inside select/combobox, not standalone. |
| `mdc-option` | The selectable entries inside the listbox. |
| `mdc-optgroup` | Labeled grouping of options within the listbox. |
| `mdc-menupopover` | Menu of commands rather than a selection list. |
