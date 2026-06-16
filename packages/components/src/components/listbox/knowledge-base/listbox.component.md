---
title: Listbox
summary: Usage, guidelines, and accessibility for the mdc-listbox component — a single- or multi-select list of mdc-option (optionally grouped by mdc-optgroup) that follows the WAI-ARIA listbox pattern.
status: draft
tier: 3
component: listbox
---

## Overview

The listbox presents a list of `mdc-option` elements (optionally grouped by `mdc-optgroup`) and lets the user pick one option (default) or multiple options (`multiple`). Clicking an option, or pressing `Enter` / `Space` while it is focused, toggles selection in multi mode and replaces the selection in single mode.

The listbox emits a `change` event whenever the selection changes, with `value` (the most recently selected option's `value`) and `selectedValues` (all currently selected `value`s) in the event detail. It is not yet a form control — wire its `value` into a form manually if form submission is needed.

### When to use

- Use `mdc-listbox` to present a list of options where the user must pick one (single select) or several (`multiple`) — for example a side-panel filter list, a settings picker, or a stand-alone option group.
- Use it when the WAI-ARIA listbox pattern (focus on selected option on entry, no looping, `aria-multiselectable` for multi) is the right semantic fit.

### When not to use

- Use `mdc-select` (with `mdc-selectlistbox` inside) for a form-control select that opens a popover — the standalone `mdc-listbox` is the visible-options-only variant.
- Use `mdc-menupopover` for application menus (commands), not for selection.
- Use `mdc-list` with `mdc-listitem` for a navigable list that does not have selection semantics.

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

### Content guidance

- Give every `mdc-option` a unique `value`; the listbox uses `value` to sync its own `value` property with the currently selected option.
- Use `mdc-optgroup` to label related options when the list is long enough that scanning would benefit from section headers.
- Keep `multiple` false unless multi-select is genuinely needed; multi-select listboxes are easy to use incorrectly (consumers expect single select by default).

### Property/Attribute details

- `name` — identifier for the listbox. Currently informational (the listbox is not yet form-associated); useful when serialising the value manually.
- `value` — the value of the currently selected option (single mode) or the first selected option (multi mode). Setting `value` programmatically updates the selected option to match.
- `multiple` — when `true`, multiple options can be selected; clicking / Enter / Space toggles each option independently. Default `false`.

### Limitations

- The listbox is not yet form-associated. Its `value` does not participate in form submission; consumers must read `value` (or `event.detail.selectedValues`) and serialise it themselves.
- Navigation does not loop — pressing the down arrow on the last option stays on the last option (per the WAI-ARIA listbox pattern).

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
- Wire the `change` event to your own state and re-render — the listbox tracks selection internally but the consumer typically owns the canonical value.
- When `multiple` is `true`, communicate the multi-select affordance in the surrounding UI (header text, helper text) so users know to pick more than one option.
