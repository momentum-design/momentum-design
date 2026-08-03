---
title: Radiogroup
summary: Usage, guidelines, and accessibility for the mdc-radiogroup component — a labeled wrapper that groups radios, propagates name and required state, and exposes the group to assistive tech.
tier: 3
component: radiogroup
---

## Overview

The radiogroup is a labeled wrapper that bundles related `mdc-radio` (or `mdc-cardradio`) elements together. It renders an optional header label and helper text, propagates a shared `name` and `required` state to its radio children, and exposes the wrapped controls as a `radiogroup` to assistive technologies.

### When to use

- Use `mdc-radiogroup` whenever you render a set of `mdc-radio` (or `mdc-cardradio`) options that belong to the same question.
- Use `mdc-radiogroup` to surface a single label and a single helper/validation message for the whole group.

### When not to use

- Do not use `mdc-radiogroup` to group checkbox or toggle controls. Use `mdc-formfieldgroup` instead.
- Do not use `mdc-radiogroup` for a single choice from a long or dynamic list that need not be visible at once. Use `mdc-select` or `mdc-combobox` instead.

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

### Content guidance

- Always give the group a `label` (the group header) stating the grouping category or what the choice is about — it is required for accessibility and is the group's accessible name. Keep it short; it truncates with a tooltip for the full text when it overflows. Use headers sparingly and only when they add context.
- Use `help-text` as an optional group description to add context or instruct what to do below; use it sparingly, and keep it to one line (it wraps to two).

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` | Visible group header and the group's `aria-label`. Required — the group has no accessible name without it. |
| `name` | Applied to each slotted radio that lacks one, grouping them for exclusive selection. |
| `required` | Propagated to each radio child; at least one must be selected for the group to be valid. |
| `help-text` + `help-text-type` | Group-level helper or validation message below the label (also `aria-description`); the type (`default`, `error`, `warning`, `success`, `priority`) drives the icon. Group validation shows here, not on individual radios. |
| `toggletip-text` + `info-icon-aria-label` | Info toggletip beside the group label; provide the aria-label when set. |
| `readonly` / `soft-disabled` | Visual states propagated through the wrapper; individual radios own their own `disabled`/`readonly`. |

### Limitations

- **Group-level messaging only** — helper text and validation render at the group level; individual radios show no inline message.
- **Propagation is first-render** — the group applies its `name` and `required` to children on first render, so radios added later may need their own `name`.

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

#### General

- Pre-select a default radio when a common or recommended choice exists, so the group is not submitted empty.

#### Labeling

- Provide a `label` describing what the group represents. Without a `label` and without an explicit `aria-label`, the group has no accessible name.
- When `toggletip-text` is set, provide `info-icon-aria-label` for the info-icon button.

## Related components

| Component | Relationship |
|---|---|
| `mdc-radio` | The radio options this group wraps and coordinates. |
| `mdc-cardradio` | Card-surface radio option that can be grouped here. |
| `mdc-formfieldgroup` | Group wrapper for checkbox or toggle controls instead of radios. |
| `mdc-select` / `mdc-combobox` | Single choice from a long or on-demand list. |
