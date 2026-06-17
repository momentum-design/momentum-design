---
title: Checkbox
summary: Usage, guidelines, and accessibility for the mdc-checkbox component — a form control that lets users select one or multiple options, toggle a feature on/off, or indicate agreement.
tier: 3
component: checkbox
---

## Overview

The checkbox is a form control that represents a binary choice ("checked"/"unchecked") or, when used in a group, allows multiple selections from a list. It wraps a native `<input type="checkbox">` and renders a custom visual through `mdc-staticcheckbox`, while preserving full form participation (value, name, validation, reset).

A checkbox can also be in an `indeterminate` (mixed) state — typically used when a parent checkbox summarises a nested group whose children are not all in the same state.

### When to use

- Use `mdc-checkbox` when the user can select **any number** of options from a list (zero, one, or many).
- Use a single `mdc-checkbox` for a binary choice that does not need to take effect immediately (e.g. agreeing to terms before submitting a form).
- Use it inside `mdc-formfieldgroup` when several checkboxes belong to the same labelled group.

### When not to use

- Use `mdc-radio` (or `mdc-radiogroup`) when **only one** option in a set can be selected.
- Use `mdc-toggle` for a binary on/off setting that takes effect immediately.
- Use `mdc-cardcheckbox` when each option needs the visual weight of a card surface (image, title, supporting copy).
- Use `mdc-staticcheckbox` when the visual is purely decorative and not user-interactive (e.g. inside a list item that owns the click target).

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/checkbox/index.js"; // custom element registration
// or via React wrapper
import { Checkbox } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-checkbox
  label="Send me product updates"
  name="newsletter"
  value="weekly"
></mdc-checkbox>
```

Listen for the `change` event to react to toggles; the new state is on `event.target.checked`.

### Content guidance

- Provide a `label` that clearly describes what the checkbox controls. If the visual label cannot be set (e.g. compact tables), supply `data-aria-label` instead.
- Use `help-text` to explain consequences, requirements, or validation errors — not to repeat the label.
- When several checkboxes belong together, group them with `mdc-formfieldgroup` and give the group a label so assistive technologies announce the set.

### Property/Attribute details

- `checked` — selection state. Defaults to `false`. Reflected to the host.
- `indeterminate` — mixed state. Defaults to `false`. Reflected to the host. Setting `checked` clears `indeterminate`.
- `name` — form field name submitted with the form.
- `value` — form field value. When the checkbox is checked and no `value` is set, the form receives `"on"` (matches native `<input type="checkbox">`).
- `label` — visible label rendered through `mdc-text`. Used as the accessible name.
- `data-aria-label` — accessible name fallback when no visual label is rendered.
- `help-text` — helper or validation message shown below the label.
- `help-text-type` — `default` (helper) or `error` (validation). When set to `error`, the validation icon is shown next to the help text.
- `toggletip-text` / `toggletip-placement` / `toggletip-strategy` / `info-icon-aria-label` — opt-in info icon button next to the label that opens an `mdc-toggletip` with extra context.
- `required` — when `true`, an asterisk is appended to the label and the form is invalid unless the checkbox is checked.
- `validation-message` — custom message reported through `setCustomValidity` when the checkbox is required but not checked.
- `disabled` — fully disabled; the host is removed from the tab order and the form value is not submitted.
- `soft-disabled` — visually disabled but still focusable; suppresses `Space` activation while keeping the control discoverable by assistive technology.
- `readonly` — non-interactive but focusable; the current value is still submitted with the form.
- `autoFocusOnMount` — when `true`, focuses the internal input element on first render.

### Limitations

- The form value is always either the `value` attribute (defaulting to `"on"`) when checked or `null` when unchecked. The `indeterminate` state is not submitted — choose a deterministic value before submission if it matters.
- `indeterminate` is visual-only and is cleared automatically when the user toggles the checkbox.

## Accessibility

### Built-in features

The component renders a native `<input type="checkbox">` inside the shadow root, so the platform owns the role, focus ring, and form association. The visual `mdc-staticcheckbox` is decorative — state is conveyed via `aria-checked` on the native input (`true`, `false`, or `mixed` when `indeterminate` is set).

Keyboard interaction follows the native checkbox pattern:

- `Space` toggles the checked state and dispatches a `change` event.
- `Enter` submits the surrounding form (default browser behaviour).
- `Tab` / `Shift+Tab` moves focus to/from the checkbox.

When `disabled` is `true`, the input is removed from the tab order and the form value is not submitted. When `soft-disabled` is `true`, the input remains focusable but `Space` is suppressed, so assistive technologies can still discover the option. When `readonly` is `true`, toggling is suppressed but the current value is still submitted.

The `label` (or `data-aria-label`) provides the accessible name. `help-text` is linked via `aria-describedby` so it is announced after the name.

#### Internal ARIA managed by the component

| Element       | Attribute          | Value                                                                  |
| ------------- | ------------------ | ---------------------------------------------------------------------- |
| Native input  | `type`             | `checkbox`                                                             |
| Native input  | `aria-checked`     | `true` / `false` / `mixed` (when `indeterminate`)                      |
| Native input  | `aria-label`       | mirrors `data-aria-label`                                              |
| Native input  | `aria-describedby` | id of the help text element when `help-text` is set                    |
| Native input  | `tabindex`         | `0` when enabled; `-1` when `disabled`                                 |
| Host          | `:state(checked)`  | added when `checked` is `true`, for CSS targeting via `:state(checked)`|

### Implementation requirements

#### General

- Group related checkboxes inside `mdc-formfieldgroup` (or a container with `role="group"` and a label) so assistive technologies announce the option set.
- Use `disabled` (not `aria-hidden` or visual cues alone) when an option must not be selectable; the state is then exposed to assistive technology and removed from the tab order.
- Reach for `soft-disabled` instead of `disabled` only when the option must remain discoverable by assistive technology (e.g. so a screen-reader user can still hear why it is unavailable).

#### Labelling

- Provide a meaningful `label` — it is the default accessible name.
- When a visible label is not appropriate, set `data-aria-label` so the control still has an accessible name.
- Use `help-text` with `help-text-type="error"` to communicate validation errors; the error icon and `aria-describedby` association are wired automatically.
