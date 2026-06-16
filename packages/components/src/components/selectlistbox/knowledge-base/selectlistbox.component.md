---
title: Select List Box
summary: Usage, guidelines, and accessibility for the mdc-selectlistbox component — a light-DOM wrapper that gives `mdc-option` children the correct listbox role inside `mdc-select` and `mdc-combobox`.
status: draft
tier: 3
component: selectlistbox
---

## Overview

`mdc-selectlistbox` is a light-DOM wrapper that groups `mdc-option` (and `mdc-optgroup`) children and exposes them with `role="listbox"` so screen readers announce the option list correctly. It is required as a slotted child of `mdc-select` and `mdc-combobox`.

### When to use

- Use `mdc-selectlistbox` as the direct child of `mdc-select` or `mdc-combobox`, wrapping the slotted `mdc-option` and `mdc-optgroup` elements.

### When not to use

- Do not use it outside `mdc-select` or `mdc-combobox`. For a standalone listbox UI, use the dedicated `mdc-listbox` component instead.
- Do not place `mdc-option` directly inside `mdc-select` or `mdc-combobox` without this wrapper — the listbox role and screen-reader semantics would be missing.

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

### Notes

`mdc-selectlistbox` renders into the light DOM (it does not create its own shadow root) so the slotted `mdc-option` children stay accessible to the parent `mdc-select` / `mdc-combobox` for keyboard navigation, selection, and form handling. Once the platform supports `ElementInternals.ariaOwnsElements`, this wrapper component is expected to be removed in favour of `aria-owns` wiring between the parent and the options.

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

#### Labelling

- The parent (`mdc-select` / `mdc-combobox`) supplies the accessible name; no labelling work is required on `mdc-selectlistbox` itself.
