---
title: Toggle
summary: Usage, guidelines, and accessibility for the mdc-toggle component — a form-associated switch for binary on/off settings.
tier: 3
component: toggle
---

## Overview

`mdc-toggle` is an interactive switch control used to flip between two mutually exclusive states, such as on/off or active/inactive. Changes take effect immediately and the component participates in HTML forms via the platform's element internals API.

### When to use

- Binary settings where the change applies immediately (e.g. enabling a feature, switching a preference on or off).
- Inside settings panels, preference dialogs, or forms where users need to flip a single option.
- As a member of a group of related options grouped together via `mdc-formfieldgroup`.

### When not to use

- Use `mdc-checkbox` for options that require an explicit submit step before they take effect, or for selecting multiple items from a list.
- Use `mdc-radio` (with `mdc-radiogroup`) when a user must choose one of several mutually exclusive options.
- Use `mdc-button` for one-off actions that don't represent a persistent state.

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

### Property/Attribute details

- `checked` — boolean reflecting the current state of the toggle. Defaults to `false`. Set this to bind the toggle to your application state.
- `size` — `default` (1.5rem height, default) or `compact` (1rem height) for space-constrained layouts. Invalid sizes fall back to `default`.
- `name` — name submitted with the surrounding `<form>`.
- `value` — value submitted when the toggle is checked. If omitted, the literal `isActive` is used as the form value when `checked` is `true`.
- `required` — when `true` and the toggle is not checked, the component reports the toggle as invalid; if `validation-message` is also set, that string is used as the custom validity message.
- `validation-message` — overrides the default browser validation message when the toggle is invalid.
- `disabled` / `soft-disabled` / `readonly` — `disabled` removes the toggle from the tab order and prevents interaction; `soft-disabled` keeps it focusable while preventing state changes; `readonly` prevents state changes but allows focus.
- `label` — visible label rendered next to the toggle and linked via `for`/`id`.
- `help-text` — helper text rendered beneath the toggle.
- `toggletip-text` — when set, renders an info button beside the label that opens an `mdc-toggletip`; `info-icon-aria-label`, `toggletip-placement`, and `toggletip-strategy` configure that toggletip.
- `auto-focus-on-mount` — when `true`, the underlying input is focused automatically when the component is mounted.
- `data-aria-label` — used as the input's `aria-label` when there is no visible label.
- `control-type` — set to `controlled` to opt out of the component flipping `checked` on click; the consumer is then responsible for updating the property.
- The `change` event (`onChange` in React) fires when the toggle state changes and re-dispatches the underlying input event. The `focus` event (`onFocus`) fires when the input receives focus.
- Resetting the parent form sets `checked` back to `false`; the toggle's form state is restored from a non-empty restoration value as `checked === true`.

### Limitations

- Toggles are intended for immediate-effect settings, so they do not expose a `helpTextType` and do not render validation icons; only the plain helper text and the underlying form-control validity API are used.

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

#### Labelling

- Prefer the `label` attribute (or a slotted `label` element) so users see a visible label alongside the toggle.
- When no visible label is possible, set `data-aria-label` on the host so the underlying input has an accessible name.
- When supplying additional context via `toggletip-text`, also set `info-icon-aria-label` so the info button has an accessible name.

### Notes

- The keyboard navigation mode is provided by the surrounding spatial-navigation context; when that mode is not `DEFAULT`, Enter will not request form submission.
