---
title: Toggle
summary: Usage, guidelines, and accessibility for the mdc-toggle component — a form-associated switch for binary on/off settings.
tier: 3
component: toggle
---

## Overview

`mdc-toggle` is an interactive switch control used to flip between two mutually exclusive states, such as on/off or active/inactive. Changes take effect immediately and the component participates in HTML forms via the platform's element internals API.

### When to use

- Use `mdc-toggle` for a binary setting that applies immediately (enabling a feature, switching a preference on or off).
- Use `mdc-toggle` in settings panels, preference dialogs, or forms where users flip a single option.
- Use `mdc-toggle` inside `mdc-formfieldgroup` when several related on/off settings belong together.

### When not to use

- Do not use `mdc-toggle` for options that require an explicit submit step, or for selecting multiple items from a list. Use `mdc-checkbox` instead.
- Do not use `mdc-toggle` when the user must choose one of several mutually exclusive options. Use `mdc-radio` (with `mdc-radiogroup`) instead.
- Do not use `mdc-toggle` for a one-off action that does not represent a persistent state. Use `mdc-button` instead.
- Do not use `mdc-toggle` for a purely decorative, non-interactive switch. Use `mdc-statictoggle` instead.
- Do not nest a child `mdc-toggle` inside a parent toggle's content. Use `mdc-checkbox` or `mdc-radio` for on/off child content instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/toggle/index.js"; // custom element registration
// or via React wrapper
import { Toggle } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-toggle
  name="notifications"
  label="Enable notifications"
  help-text="You can change this at any time"
></mdc-toggle>
```

### Content guidance

- Labels are optional on a toggle. When you use a `label`, keep it clear and concise and about the toggle's status or impact — not a substitute for body text describing the setting. If no visible label fits, supply `data-aria-label` instead.
- Put any fuller explanation in body text above the toggle, or in `help-text` (one line, with no validation styling); keep the label about the on/off state.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Current on/off state; bind it to your application state. |
| `size` | `default` (1.5rem) or `compact` (1rem) for space-constrained layouts. |
| `name` / `value` | Form submission key and the value submitted when checked (defaults to `isActive`). |
| `required` + `validation-message` | Requires the toggle to be on for validity; `validation-message` overrides the browser message. |
| `label` / `data-aria-label` | Optional visible label indicating status/impact, or the accessible name when no visible label is shown. |
| `help-text` | Plain helper text beneath the toggle (no validation icon — see Limitations). |
| `toggletip-text` + `info-icon-aria-label` | Info toggletip beside the label; provide the aria-label when set. |
| `control-type` | Set to `controlled` to manage `checked` yourself; the component then does not flip it on click. |
| `disabled` / `soft-disabled` / `readonly` | `disabled` removes the control from the tab order; `soft-disabled` looks disabled but stays focusable so assistive tech can still reach it; `readonly` blocks changes but stays focusable. |

**Note:** `auto-focus-on-mount` focuses the control after first render. The `change` event fires on state change (re-dispatched from the inner input); `focus` fires when the input receives focus. Resetting the form sets `checked` back to `false`.

### Limitations

- **No validation styling** — toggles do not expose `help-text-type` or render validation icons; only plain helper text and the form-control validity API are available.
- **No nested toggles** — a parent toggle's child content must not contain another toggle (it is ambiguous whether the parent selects all or merely enables all). Use `mdc-checkbox` or `mdc-radio` for on/off children.
- **Immediate effect** — changes apply instantly, with no deferred/submit semantics; use `mdc-checkbox` when a change must wait for form submission.

## Accessibility

### Built-in features

- The internal control is a native checkbox input with `role="switch"`, ensuring assistive technologies announce it as a switch with an on/off state.
- The host element delegates focus to the input via shadow root focus delegation, so focus styling and tab order behave naturally.
- Pressing Space toggles the state (suppressed while `readonly` or `soft-disabled`). Pressing Enter submits the surrounding form when the keyboard navigation mode is `DEFAULT`.
- The component is form-associated: it participates in form submission, reset, autofill restoration, and validity reporting via `ElementInternals`.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Input (`type="checkbox"`) | `role` | `switch` |
| Input | `aria-checked` | Mirrors the current `checked` state (`true`/`false`) |
| Input | `aria-label` | Value of `data-aria-label` when set |
| Input | `aria-describedby` | The id of the help text element when `help-text` is provided |
| Input | `tabindex` | `-1` when `disabled`, otherwise `0` |
| Label | `for` | Matches the input's auto-generated `id` |

### Implementation requirements

#### Labeling

- Prefer the `label` attribute (or a slotted `label` element) so users see a visible label alongside the toggle.
- When no visible label is possible, set `data-aria-label` on the host so the underlying input has an accessible name.
- When supplying additional context via `toggletip-text`, also set `info-icon-aria-label` so the info button has an accessible name.

### Notes

- The keyboard navigation mode is provided by the surrounding spatial-navigation context; when that mode is not `DEFAULT`, Enter will not request form submission.

## Related components

| Component | Relationship |
|---|---|
| `mdc-statictoggle` | Decorative, non-interactive toggle for read-only display. |
| `mdc-checkbox` | Deferred multi-select, or on/off child content within a toggle group. |
| `mdc-radio` / `mdc-radiogroup` | One choice from several mutually exclusive options. |
| `mdc-formfieldgroup` | Groups related toggles under a shared label. |
| `mdc-button` | One-off action that is not a persistent state. |
