---
title: Formfieldgroup
summary: Usage, guidelines, and accessibility for the mdc-formfieldgroup component — a labelled container grouping checkbox/toggle form fields with shared header, helper text, and group semantics.
status: draft
tier: 3
component: formfieldgroup
---

## Overview

The formfieldgroup groups several related form fields under a single shared label, helper text, and group role. It is intended for checkbox groups and toggle groups; each child is rendered with a 12px (0.75rem) gap between siblings.

The group is announced to screen readers as a single semantic unit via `role="group"`, with the header text and helper text wired as the accessible name and description.

### When to use

- Use `mdc-formfieldgroup` to wrap a set of related `mdc-checkbox` controls so they share a single label and helper text.
- Use it to wrap a set of related `mdc-toggle` controls in the same way.

### When not to use

- Use `mdc-radiogroup` for radio buttons — radios require the `radiogroup` role and arrow-key navigation, which `mdc-formfieldgroup` does not provide.
- Use `mdc-formfieldwrapper` for a single labelled form field rather than a group.

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

- Provide a meaningful `label` (or `data-aria-label`) — without it the group has no accessible name and assistive technology will not announce the grouping.
- Use `help-text` for short instructions or constraints that apply to the whole group ("Select at least one channel"); per-field validation belongs on the child fields.
- Keep the number of children small enough to scan in one visual block; for long lists, prefer a different control such as a `mdc-select` with multi-select.

### Property/Attribute details

- `label` — visible header text rendered above the group. Used as the accessible name when no `aria-label` is provided.
- `data-aria-label` — accessible name fallback when no visible label is rendered.
- `help-text` — helper or validation text rendered above the children. Wired as `aria-description` on the group.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon.
- `required` — when `true`, appends a required indicator (`*`) to the label. The group does not enforce required state on its own; the consumer must validate the children.
- `toggletip-text` / `toggletip-placement` / `toggletip-strategy` / `info-icon-aria-label` — opt-in info icon button next to the label that opens an `mdc-toggletip`.

### Limitations

- The group does not manage form submission, validation, or selection state for its children — each child is responsible for its own value and validity. The group only provides the visible header, helper text, and ARIA grouping.
- The group does not enforce the type of its children; placing radios inside will not produce a `radiogroup`. Use `mdc-radiogroup` for radio buttons.

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

#### Labelling

- Always provide a `label` (or `data-aria-label`) — without it the group has no accessible name.
- Use `help-text` for constraints that apply to the whole group; per-field error messages belong on each child's own `help-text`.
