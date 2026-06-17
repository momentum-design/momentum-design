---
title: Optgroup
summary: Usage, guidelines, and accessibility for the mdc-optgroup component — a labelled grouping of mdc-option elements inside a listbox.
status: draft
tier: 3
component: optgroup
---

## Overview

`mdc-optgroup` groups a set of `mdc-option` elements under a shared label inside a listbox (typically the `mdc-selectlistbox` rendered by `mdc-select`). It exposes the grouping to assistive technology via `role="group"` and an associated label.

### When to use

- Use `mdc-optgroup` to organise related options inside an `mdc-selectlistbox` or `mdc-listbox` (for example, grouping countries by continent).
- Use it to disable a whole set of options at once via the `disabled` attribute.

### When not to use

- Do not use `mdc-optgroup` for grouping menu items — use `mdc-menusection` inside `mdc-menupopover` or `mdc-menubar`.
- Do not nest `mdc-optgroup` inside another `mdc-optgroup`.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/optgroup/index.js";
import { Optgroup } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-select label="Country">
  <mdc-optgroup label="Europe">
    <mdc-option value="de" label="Germany"></mdc-option>
    <mdc-option value="fr" label="France"></mdc-option>
  </mdc-optgroup>
  <mdc-optgroup label="Asia" disabled>
    <mdc-option value="jp" label="Japan"></mdc-option>
  </mdc-optgroup>
</mdc-select>
```

### Property/Attribute details

- `label` — visible heading rendered above the options. When set, the heading is also referenced as the group's accessible name via `aria-labelledby`.
- `data-aria-label` — fallback accessible name applied to the inner group element when no `label` is provided.
- `disabled` — boolean. When toggled, the component applies or removes the `disabled` attribute on every slotted `mdc-option` child.

## Accessibility

### Built-in features

- Wraps slotted options in a `role="group"` container.
- When `label` is set, the heading text is referenced by `aria-labelledby` so screen readers announce the group label.
- When `label` is not set, the value of `data-aria-label` is used as `aria-label` on the group container.
- Cascades `disabled` to every slotted `mdc-option`, so disabling the group disables all of its options.
- The inner `<slot>` is marked `role="presentation"` so the visual grouping wrapper does not introduce additional semantics between the group and its options.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| inner group wrapper | role | `group` |
| inner group wrapper | aria-labelledby | references the internal header text id when `label` is set |
| inner group wrapper | aria-label | mirrors `data-aria-label` when `label` is not set |
| inner slot | role | `presentation` |
| each slotted `mdc-option` | disabled | reflects the optgroup's `disabled` state |

### Implementation requirements

#### General

- Place `mdc-optgroup` inside an `mdc-selectlistbox` (within `mdc-select`) or another listbox-style container.
- Only place `mdc-option` elements in the default slot.

#### Labelling

- Provide a `label` whenever the grouping is visible in the UI; this also supplies the accessible group name automatically.
- When the group has no visible label, supply `data-aria-label` so assistive technology can still announce the group.
