---
title: Radio
summary: Usage, guidelines, and accessibility for the mdc-radio component — a single, form-associated radio button with label, optional helper text, custom indicator slot, and keyboard navigation.
tier: 3
component: radio
---

## Overview

The radio is a single, form-associated radio button that lets the user pick exactly one option from a set of mutually exclusive choices. Radios that share a `name` attribute are grouped together — selecting one unchecks the others — and arrow-key navigation moves focus and selection between members of the group.

### When to use

- Use `mdc-radio` (typically inside `mdc-radiogroup`) when the user must pick exactly one option from a short, mutually exclusive list.
- Use it in forms, surveys, and settings where every option needs to be visible at once.

### When not to use

- Use `mdc-checkbox` when the user can pick zero, one, or more options.
- Use `mdc-select` or `mdc-combobox` when the list of options is long or should be revealed on demand.
- Use `mdc-cardradio` when each option should render as a larger, card-shaped surface.
- Use `mdc-toggle` for an on/off binary control.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/radio/index.js"; // custom element registration
// or via React wrapper
import { Radio } from '@momentum-design/components/dist/react';
```

Minimal group — wrap radios in `mdc-radiogroup` so they share the same `name` and so the group is announced as a `radiogroup` to assistive technologies:

```html
<mdc-radiogroup label="Notification preference" name="notifications">
  <mdc-radio value="email" label="Email" checked></mdc-radio>
  <mdc-radio value="sms" label="SMS"></mdc-radio>
  <mdc-radio value="push" label="Push notification"></mdc-radio>
</mdc-radiogroup>
```

Standalone radios that share a `name` attribute behave as a group even without `mdc-radiogroup`:

```html
<mdc-radio name="plan" value="free" label="Free"></mdc-radio>
<mdc-radio name="plan" value="pro" label="Pro" checked></mdc-radio>
```

Listen for `change`/`input` to react when the selected option changes; the host emits both events in the same order as the native radio input.

### Property/Attribute details

- `checked` — whether this radio is the selected option in its group. Only one radio per group (`name`) can be checked at a time; the component unchecks the others automatically on selection. Default `false`.
- `name` — groups radios together. Radios with the same `name` form one radiogroup; navigation and exclusive selection are scoped to the group. Required for group behaviour.
- `value` — value submitted under `name` when this radio is the checked one in the group. If checked and no `value` is set, the form value is `'on'`.
- `label` — visible label text rendered next to the radio.
- `required` — when `true`, at least one radio in the group must be checked for the form to be considered valid. Note: no red asterisk is rendered next to a required radio.
- `disabled` — when `true`, the radio is non-interactive and removed from the tab order.
- `readonly` — when `true`, the radio is non-interactive but remains focusable (Space and Enter are suppressed).
- `soft-disabled` — when `true`, the radio looks disabled but remains focusable so assistive technology can read it.
- `data-aria-label` — accessible name. Falls back to the `label` property; only required when no visible label is present.
- `auto-focus-on-mount` — when `true`, the radio is focused after first render.
- `validation-message` — custom validation message used by native form validation. When set and the radio is required-but-unchecked, the message is shown in a native tooltip on submit (radios do not render a visible validation message themselves — for that, wrap the group in `mdc-radiogroup` and use its `help-text`).
- `name`, `value`, `validation-message` participate in form submission through ElementInternals; `formResetCallback` unchecks every radio in the group, and `formStateRestoreCallback` rechecks the radio whose `value` matches the restored state.

Events:

- `input` (React: `onInput`) — fires when the selection changes (before `change`).
- `change` (React: `onChange`) — fires when the selection changes (after `input`).
- `focus` (React: `onFocus`) — fires when the radio receives focus.

## Accessibility

### Built-in features

The host element has `role="radio"` and `aria-checked` is kept in sync with the `checked` property. The component manages roving tab focus within the group automatically: if any radio in the group is checked, only the checked one is tabbable (`tabindex="0"`) and the rest are removed from the tab sequence (`tabindex="-1"`); if no radio is checked, the first non-disabled radio in the group is tabbable. When spatial navigation is active, every radio in the group is tabbable.

Keyboard interaction inside a group: `Arrow Down`/`Arrow Right` moves focus and selection to the next enabled radio; `Arrow Up`/`Arrow Left` moves focus and selection to the previous enabled radio (both wrap around the ends). `Space` selects the focused radio. `Enter` submits the surrounding form via `form.requestSubmit()`. When spatial navigation is active, arrow keys are left to the spatial navigation context and only `Enter` activates the focused radio.

A custom indicator slotted into `indicator` is supported: when content is slotted into the indicator slot, the focus ring is shifted from the default static radio to the entire host element so keyboard focus stays visible.

#### Internal ARIA managed by the component

| Element        | Attribute      | Value                                                                                                            |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Radio host     | `role`         | `radio`                                                                                                          |
| Radio host     | `aria-checked` | mirrors `checked` (`"true"` / `"false"`)                                                                         |
| Radio host     | `aria-label`   | mirrors `label` (or `data-aria-label` when no label)                                                             |
| Radio host     | `tabindex`     | `0` for the checked radio (or the first enabled radio when none is checked); `-1` for the others; `0` for all in spatial-navigation mode |
| Native label   | `for`          | the `id` of the radio host                                                                                       |

### Implementation requirements

#### General

- Group related radios with the same `name` attribute, or wrap them in `mdc-radiogroup`. Without a shared `name`, exclusive selection and arrow-key navigation do not work.
- To show a validation message for an invalid group, wrap the radios in `mdc-radiogroup` and set its `help-text` — the radio itself does not render a visible validation message.

#### Labelling

- Provide a `label` on every radio describing the option. When no visible label is present, set `data-aria-label`.
- Provide a label on the surrounding `mdc-radiogroup` describing what the group represents.

### Notes

- `required` does not render the standard red-asterisk required indicator on radios, even though the native required validation still applies.
- The `validation-message` set on a radio appears in a native browser tooltip when the radio is invalid on submit; it is not rendered inline by the component.
