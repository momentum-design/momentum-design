---
title: Formfieldgroup
summary: Usage, guidelines, and accessibility for the mdc-formfieldgroup component — a labeled container grouping checkbox/toggle form fields with shared header, helper text, and group semantics.
tier: 3
component: formfieldgroup
---

## Overview

The formfieldgroup groups several related form fields under a single shared label, helper text, and group role. It is intended for checkbox groups and toggle groups; each child is rendered with a 12px (0.75rem) gap between siblings.

The group is announced to screen readers as a single semantic unit via `role="group"`, with the header text and helper text wired as the accessible name and description.

### When to use

- Use `mdc-formfieldgroup` to wrap a set of related `mdc-checkbox` controls so they share a single label and helper text.
- Use `mdc-formfieldgroup` to wrap a set of related `mdc-toggle` controls in the same way.

### When not to use

- Do not use `mdc-formfieldgroup` for radio buttons. Use `mdc-radiogroup` instead — radios need the `radiogroup` role and arrow-key navigation this group does not provide.
- Do not use `mdc-formfieldgroup` for a single labeled field. Use `mdc-formfieldwrapper` instead.
- Do not use `mdc-formfieldgroup` for a long list of options that should not all be visible at once. Use `mdc-select` with multi-select instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/formfieldgroup/index.js"; // custom element registration
// or via React wrapper
import { Formfieldgroup } from '@momentum-design/components/dist/react';
```

Minimal markup example (checkbox group):

```html
<mdc-formfieldgroup
  label="Notification preferences"
  help-text="Choose how you want to be notified."
>
  <mdc-checkbox name="prefs" value="email" label="Email"></mdc-checkbox>
  <mdc-checkbox name="prefs" value="sms" label="SMS"></mdc-checkbox>
  <mdc-checkbox name="prefs" value="push" label="Push"></mdc-checkbox>
</mdc-formfieldgroup>
```

Each child checkbox/toggle continues to manage its own form value through its own `name`/`value` attributes — the group is purely a semantic and visual container.

### Content guidance

- Provide a meaningful `label` (the group header, or `data-aria-label`) stating the grouping category or what the set is about — without it the group has no accessible name and assistive technology will not announce the grouping. Keep it short (it truncates with a tooltip when it overflows) and use headers sparingly.
- Use `help-text` as an optional group description for short instructions or constraints that apply to the whole group ("Select at least one channel"); use it sparingly, and keep it to one line (it wraps to two). Per-field validation belongs on the child fields, and group-level validation reads below the group header.

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` / `data-aria-label` | Visible group header (the accessible name), or the fallback name when no visible label is rendered. |
| `help-text` + `help-text-type` | Group-level helper or validation text above the children (wired as `aria-description`); the type (`default`, `error`, `warning`, `success`, `priority`) drives the icon. |
| `required` | Appends a required indicator (`*`) to the label. Visual only — the group does not enforce that a child is selected; validate the children yourself. |
| `toggletip-text` + `info-icon-aria-label` | Info toggletip beside the group label; provide the aria-label when set. |

### Limitations

- **No group-level state** — the group does not manage submission, validation, or selection for its children; each child owns its own value and validity. It provides only the header, helper text, and ARIA grouping.
- **Not for radios** — placing radios inside does not produce a `radiogroup`. Use `mdc-radiogroup` for radio buttons.
- **Required is visual only** — `required` renders the indicator but does not enforce a minimum selection; validate the combined child state in the consumer.

## Accessibility

### Built-in features

The host renders with `role="group"`. The header text (`label`) is wired as the accessible name via `aria-label`, and the helper text (`help-text`) is wired as the accessible description via `aria-description`. When the consumer provides `aria-label` directly, the component does not overwrite it.

Children are rendered in the default slot in DOM order and announced to screen readers in that order.

#### Internal ARIA managed by the component

| Element | Attribute          | Value                                                                       |
| ------- | ------------------ | --------------------------------------------------------------------------- |
| Host    | `role`             | `group`                                                                     |
| Host    | `aria-label`       | mirrors `label` when no explicit `aria-label` is set                        |
| Host    | `aria-description` | mirrors `help-text` when no explicit `aria-description` is set              |

### Implementation requirements

#### General

- Place only checkbox or toggle children in the default slot; radio buttons need `mdc-radiogroup` instead.
- Validate the children's combined state from the consumer when `required` is `true` — the group does not enforce that at least one child is selected.
- A checkbox group has no parent checkbox; place any indeterminate "select all" rollup in a separate `mdc-checkbox` outside the group.

#### Labeling

- Always provide a `label` (or `data-aria-label`) — without it the group has no accessible name.
- Use `help-text` for constraints that apply to the whole group; per-field error messages belong on each child's own `help-text`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-checkbox` | Grouped here to form a labeled checkbox group. |
| `mdc-toggle` | Grouped here to form a labeled toggle group. |
| `mdc-radiogroup` | Equivalent grouping for radio buttons, with the `radiogroup` role and arrow-key navigation. |
| `mdc-formfieldwrapper` | Single labeled field instead of a group; the base component this extends. |
