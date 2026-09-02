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
- Use a single `mdc-checkbox` for a binary choice that does not need to take effect immediately (for example agreeing to terms before submitting a form).
- Use `mdc-checkbox` inside `mdc-formfieldgroup` when several checkboxes belong to the same labeled group.
- Use `mdc-checkbox` with a leading visual when an avatar or icon helps users distinguish otherwise similar options.

### When not to use

- Do not use `mdc-checkbox` when only one option in a set can be selected. Use `mdc-radio` (or `mdc-radiogroup`) instead.
- Do not use `mdc-checkbox` for a binary setting that takes effect immediately. Use `mdc-toggle` instead.
- Do not use `mdc-checkbox` when each option needs the visual weight of a card surface. Use `mdc-cardcheckbox` instead.
- Do not use `mdc-checkbox` for a purely decorative, non-interactive checkmark. Use `mdc-staticcheckbox` instead.

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

### Composition

Place a noninteractive avatar or icon in the `leading-visual` slot when imagery helps identify an option. The slot renders between the checkbox control and the existing label and help-text container while leaving the label and help-text structure unchanged.

```html
<mdc-checkbox label="Alex Example" help-text="example.com">
  <mdc-avatar slot="leading-visual" size="32" aria-hidden="true"></mdc-avatar>
</mdc-checkbox>
```

Keep links, buttons, and other interactive elements out of `leading-visual`. Place independent actions outside `mdc-checkbox`.

### Content guidance

- Write a clear, concise `label` that is explicit about what happens when the checkbox is selected; the label always trails the checkbox input. If a visible label cannot be shown (for example compact tables), supply `data-aria-label` instead.
- Keep labels to roughly 4–8 words and never truncate them; when an option needs more context, move it into `help-text` rather than lengthening the label.
- `help-text` is optional (as are the info button and toggletip) and should be 1–2 short sentences. It sits under the field and explains consequences or requirements rather than repeating the label; a validation message (`help-text-type="error"`) replaces it while shown.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Selection state, reflected to the host. |
| `indeterminate` | Mixed state for a parent that summarizes a nested checklist; setting `checked` clears it. Not an ordinary state. |
| `name` / `value` | Form key and value; a checked checkbox with no `value` submits `"on"` (matches native `<input type="checkbox">`). |
| `label` / `data-aria-label` | Visible label (the accessible name), or the fallback name when no visible label is rendered. |
| `help-text` + `help-text-type` | Helper or validation message below the label; `error` shows the validation icon (only `default` and `error` are supported). |
| `toggletip-text` + `info-icon-aria-label` | Info toggletip beside the label; provide the aria-label when set. |
| `required` + `validation-message` | Appends an asterisk and requires the box to be checked; `validation-message` is reported via `setCustomValidity`. |
| `disabled` / `soft-disabled` / `readonly` | `disabled` removes the control from the tab order; `soft-disabled` looks disabled but stays focusable so assistive tech can still reach it; `readonly` blocks changes but stays focusable. |

**Note:** `autoFocusOnMount` focuses the internal input on first render.

### Limitations

- **Indeterminate isn't submitted** — the form value is the `value` (default `"on"`) when checked or `null` when unchecked; `indeterminate` has no submitted value, so resolve it before submission if it matters.
- **Indeterminate is visual-only** — it is cleared automatically when the user toggles the checkbox, and is meant for parent rollups rather than an ordinary state.
- **No inline group validation** — a single checkbox shows only its own error state. Use `mdc-formfieldgroup` for a flat group or [`mdc-checkboxtree`](../../checkboxtree/knowledge-base/checkboxtree.component.md) for a hierarchical group with shared validation text.
- **Leading visuals stay decorative** — `leading-visual` toggles the checkbox but does not add an accessible name. Hide redundant visuals from assistive technology and place interactive controls outside the checkbox.

## Accessibility

### Built-in features

The component renders a native `<input type="checkbox">` inside the shadow root, so the platform owns the role, focus ring, and form association. The visual `mdc-staticcheckbox` is decorative — state is conveyed via `aria-checked` on the native input (`true`, `false`, or `mixed` when `indeterminate` is set).

Keyboard interaction follows the native checkbox pattern:

- `Space` toggles the checked state and dispatches a `change` event.
- `Enter` submits the surrounding form (default browser behavior).
- `Tab` / `Shift+Tab` moves focus to/from the checkbox.

Clicking the label or leading visual toggles the checkbox.

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
- Use [`mdc-checkboxtree`](../../checkboxtree/knowledge-base/checkboxtree.component.md) when checkboxes form a hierarchy that needs parent selection, mixed-state rollups, and arrow-key navigation.
- Use `disabled` (not `aria-hidden` or visual cues alone) when an option must not be selectable; the state is then exposed to assistive technology and removed from the tab order.
- Reach for `soft-disabled` instead of `disabled` only when the option must remain discoverable by assistive technology (e.g. so a screen-reader user can still hear why it is unavailable).

#### Labeling

- Provide a meaningful `label` — it is the default accessible name.
- Keep `leading-visual` decorative; use `aria-hidden="true"` when the adjacent label already identifies the option.
- When a visible label is not appropriate, set `data-aria-label` so the control still has an accessible name.
- Use `help-text` with `help-text-type="error"` to communicate validation errors; the error icon and `aria-describedby` association are wired automatically.

## Related components

| Component | Relationship |
|---|---|
| `mdc-staticcheckbox` | Decorative, non-interactive checkbox for read-only display. |
| `mdc-radio` / `mdc-radiogroup` | Exactly one choice from a set instead of any number. |
| `mdc-toggle` | Immediate binary on/off setting. |
| `mdc-cardcheckbox` | Checkbox rendered as a card surface. |
| `mdc-formfieldgroup` | Groups related checkboxes under a shared label with group validation. |
| `mdc-checkboxtree` | Composes checkboxes recursively with parent selection, mixed-state rollups, and roving keyboard focus. |
