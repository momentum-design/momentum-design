---
title: Radiogroup
summary: Usage, guidelines, and accessibility for the mdc-radiogroup component — a labelled wrapper that groups radios, propagates name and required state, and exposes the group to assistive tech.
tier: 3
component: radiogroup
---

## Overview

The radiogroup is a labelled wrapper that bundles related `mdc-radio` (or `mdc-cardradio`) elements together. It renders an optional header label and helper text, propagates a shared `name` and `required` state to its radio children, and exposes the wrapped controls as a `radiogroup` to assistive technologies.

### When to use

- Use `mdc-radiogroup` whenever you render a set of `mdc-radio` (or `mdc-cardradio`) options that belong to the same question.
- Use it to surface a single label and a single helper/validation message for the whole group.

### When not to use

- Use `mdc-formfieldgroup` directly when grouping checkbox or toggle controls instead of radios.
- Use `mdc-select` or `mdc-combobox` when the user should pick one option from a long or dynamic list that does not need to be visible at once.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/radiogroup/index.js"; // custom element registration
// or via React wrapper
import { Radiogroup } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-radiogroup label="Plan" name="plan" required>
  <mdc-radio value="free" label="Free"></mdc-radio>
  <mdc-radio value="pro" label="Pro"></mdc-radio>
  <mdc-radio value="enterprise" label="Enterprise"></mdc-radio>
</mdc-radiogroup>
```

With helper/validation text:

```html
<mdc-radiogroup
  label="Notification preference"
  name="notifications"
  help-text="Pick at least one channel"
  help-text-type="error"
>
  <mdc-radio value="email" label="Email"></mdc-radio>
  <mdc-radio value="sms" label="SMS"></mdc-radio>
</mdc-radiogroup>
```

### Property/Attribute details

- `name` — name applied to each slotted radio child that does not already have one. Used to group the radios at the form-control level so they exchange selection. Default `''`.
- `required` — propagated to each slotted radio child on first render (toggled via the `required` attribute on the children).
- `label` — visible label for the group, also used as the group's `aria-label` when no `aria-label` is otherwise supplied.
- `help-text` — helper or validation text rendered below the label; also reflected as the group's `aria-description`.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon.
- `toggletip-text` — when set, renders an info-icon button next to the label that opens an `mdc-toggletip`.
- `info-icon-aria-label` — accessible name for the info-icon button. Required when `toggletip-text` is set.
- `readonly`, `soft-disabled` — visual states propagated through the wrapper. The group's individual radios own their own disabled/readonly state.

## Accessibility

### Built-in features

The host element has `role="radiogroup"` so assistive technologies announce the wrapped radios as a single group. The visible `label` is mirrored onto `aria-label` (unless the consumer supplied one explicitly), and `help-text` is mirrored onto `aria-description` so the helper/validation text is announced when the group receives focus.

On first render, the group walks its assigned radio children and applies its own `name` to any radio that does not already have one, and propagates its `required` state to each radio. This ensures that exclusive selection and required validation are scoped correctly without per-radio wiring.

#### Internal ARIA managed by the component

| Element             | Attribute          | Value                                            |
| ------------------- | ------------------ | ------------------------------------------------ |
| Radiogroup host     | `role`             | `radiogroup`                                     |
| Radiogroup host     | `aria-label`       | mirrors `label` when no `aria-label` is provided |
| Radiogroup host     | `aria-description` | mirrors `help-text`                              |
| Slotted radios      | `name`             | set to the group's `name` when missing           |
| Slotted radios      | `required`         | toggled to match the group's `required`          |

### Implementation requirements

#### Labelling

- Provide a `label` describing what the group represents. Without a `label` and without an explicit `aria-label`, the group has no accessible name.
- When `toggletip-text` is set, provide `info-icon-aria-label` for the info-icon button.
