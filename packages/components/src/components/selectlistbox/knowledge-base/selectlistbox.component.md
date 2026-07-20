---
title: Select List Box
summary: Usage, guidelines, and accessibility for the mdc-selectlistbox component — a light-DOM wrapper that gives `mdc-option` children the correct listbox role inside `mdc-select` and `mdc-combobox`.
tier: 3
component: selectlistbox
---

## Overview

`mdc-selectlistbox` is a light-DOM wrapper that groups `mdc-option` (and `mdc-optgroup`) children and exposes them with `role="listbox"` so screen readers announce the option list correctly. It is required as a slotted child of `mdc-select` and `mdc-combobox`, which own the selection, keyboard, and focus behavior around it.

### When to use

- Use `mdc-selectlistbox` as the direct child of `mdc-select` or `mdc-combobox`, wrapping the slotted `mdc-option` and `mdc-optgroup` elements.

### When not to use

- Do not use `mdc-selectlistbox` outside `mdc-select` or `mdc-combobox`. Use `mdc-listbox` for a standalone, always-visible option list instead.
- Do not use `mdc-selectlistbox` to group menu commands or generic rows. Use `mdc-menupopover` (menus) or `mdc-list` (rows) instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/selectlistbox/index.js"; // custom element registration
// or via React wrapper
import { SelectListBox, Option } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-select label="Country">
  <mdc-selectlistbox>
    <mdc-option value="at" label="Austria"></mdc-option>
    <mdc-option value="de" label="Germany"></mdc-option>
  </mdc-selectlistbox>
</mdc-select>
```

### Limitations

- **Wrapper only** — it adds `role="listbox"` and nothing else; selection, keyboard navigation, and focus are owned by the parent `mdc-select`/`mdc-combobox`, not here.
- **Not standalone** — outside a select or combobox it has no behavior of its own. Use `mdc-listbox` for a standalone list.

### Notes

`mdc-selectlistbox` renders into the light DOM (it does not create its own shadow root) so the slotted `mdc-option` children stay accessible to the parent `mdc-select` / `mdc-combobox` for keyboard navigation, selection, and form handling. Once the platform supports `ElementInternals.ariaOwnsElements`, this wrapper component is expected to be removed in favor of `aria-owns` wiring between the parent and the options.

## Accessibility

### Built-in features

On `connectedCallback` the host sets `role="listbox"` on itself. The parent `mdc-select` or `mdc-combobox` is responsible for wiring `aria-controls`, `aria-expanded`, and focus management between its trigger and the listbox.

#### Internal ARIA managed by the component

| Element | Attribute | Value     |
| ------- | --------- | --------- |
| Host    | `role`    | `listbox` |

### Implementation requirements

#### General

- Always use `mdc-selectlistbox` as the direct child of `mdc-select` or `mdc-combobox`.
- Place every `mdc-option` (and `mdc-optgroup`) inside this wrapper.

#### Labeling

- The parent (`mdc-select` / `mdc-combobox`) supplies the accessible name; no labeling work is required on `mdc-selectlistbox` itself.

## Related components

| Component | Relationship |
|---|---|
| `mdc-select` | Parent that renders this wrapper in its popover and owns selection and keyboard behavior. |
| `mdc-combobox` | Parent that renders this wrapper for its filterable dropdown. |
| `mdc-listbox` | Standalone, always-visible listbox for use outside a select or combobox. |
| `mdc-option` | The selectable entries this wrapper contains. |
| `mdc-optgroup` | Labeled grouping of options placed inside this wrapper. |
