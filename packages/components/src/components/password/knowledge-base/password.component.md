---
title: Password
summary: Usage, guidelines, and accessibility for the mdc-password component — a password input with a built-in show/hide toggle.
tier: 3
component: password
---

## Overview

`mdc-password` is a form-associated password input. It renders the same label, help-text, validation, prefix, and leading-icon surface as `mdc-input`, but the input type defaults to `password` and a trailing show/hide button is always present so users can reveal or mask the entered value.

### When to use

- Use `mdc-password` whenever the user enters a credential or other secret string that should be visually masked.
- Use `mdc-password` as the password field in sign-in, sign-up, and credential-change forms inside a `form` element.

### When not to use

- Do not use `mdc-password` for regular text entry. Use `mdc-input` instead.
- Do not use `mdc-password` for multi-line secrets. Use `mdc-textarea` instead.
- Do not use `mdc-password` for one-time codes that should stay visible as the user types. Use `mdc-input` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/password/index.js";
import { Password } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<form>
  <mdc-password
    label="Password"
    name="password"
    required
    show-button-aria-label="Show password"
    hide-button-aria-label="Hide password"
  ></mdc-password>
</form>
```

The component is form-associated; placing it inside a `form` element registers its `name` / `value` pair for submission. Provide both `show-button-aria-label` and `hide-button-aria-label` so the toggle button has an accessible name in each state.

### Content guidance

- A password field is understood to be required, so you can omit the visible required indicator.
- State the password criteria in `help-text` so users know what to enter. For password creation, validate in real time (drive `help-text-type` as the user types) rather than only on submit.
- On login, do not reveal whether the username or the password was wrong — surface a single generic error above the form to reduce account enumeration.

### Property/Attribute details

| Option | Intent |
|---|---|
| `show-button-aria-label` / `hide-button-aria-label` | Accessible names for the trailing toggle in its masked and visible states. Both required. |
| `label` | Visible label and accessible name. Always provide one. |
| `help-text` + `help-text-type` | Password criteria or validation message; drive real-time feedback via the type (`default`, `error`, `warning`, `success`, `priority`). |
| `validation-message` | Custom validity text surfaced with `help-text-type="error"`. |
| `leading-icon` / `prefix-text` / `toggletip-text` | Inherited `mdc-input` surfaces for context beside the field. |
| `disabled` / `readonly` | Interaction states inherited from `mdc-input`. |
| `data-aria-label` / `data-aria-describedby` | Accessible name/description for the inner `<input>`. |

**Note:** `mdc-password` inherits the rest of the `mdc-input` API (`name`, `value`, `placeholder`, `pattern`, `minlength`/`maxlength`, `size`, `autocapitalize`, `autocomplete`, `dirname`, `list`). The trailing button is forced to the show/hide toggle on connect, replacing the standard clear button.

### Limitations

- **Toggle needs both labels** — without `show-button-aria-label` and `hide-button-aria-label` the visibility toggle has no accessible name in one state. Provide both.
- **No clear button** — the trailing slot is the show/hide toggle, so there is no built-in clear affordance like `mdc-input`.
- **Form-associated via ElementInternals** — browsers without `ElementInternals` support will not include the value in standard form submissions and require a polyfill.

### Notes

- The show/hide button uses the `mdc-button` tertiary variant; the icon updates between the bold show and hide icons based on the current visibility state.
- When the field has no value (and no leading button forced), the trailing toggle is hidden until the user starts typing.

## Accessibility

### Built-in features

- The underlying `<input>` exposes `aria-invalid="true"` when `help-text-type="error"`, `aria-describedby` linked to the help-text element when help text is rendered, and `aria-label` from `data-aria-label`.
- The form label is rendered via the shared label surface and is associated with the input element through the input id.
- The show/hide button uses the supplied `show-button-aria-label` / `hide-button-aria-label` so its purpose updates as the visibility state flips.
- `required`, `pattern`, `minlength`, `maxlength`, and custom `validation-message` values participate in native form validation; the component sets `setCustomValidity` based on the current `validation-message` and reflects the result through `ElementInternals`.
- A live screen-reader announcer (when a `max-character-limit` is configured) announces when the user crosses the character limit warning thresholds.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| inner `<input>` | type | `password` while hidden, `text` while shown |
| inner `<input>` | aria-label | mirrors `data-aria-label` |
| inner `<input>` | aria-describedby | references the help-text element when help text is present, otherwise `data-aria-describedby` |
| inner `<input>` | aria-invalid | `true` when `help-text-type="error"`, otherwise `false` |
| trailing toggle button | aria-label | mirrors `hide-button-aria-label` when shown, `show-button-aria-label` when hidden |
| inner screen-reader announcer | data-aria-live | `polite` |

### Implementation requirements

#### General

- Place `mdc-password` inside a `<form>` so the `name` / `value` participate in submission.
- Provide a `name` attribute so the value can be retrieved from `FormData`.
- Use `validation-message` together with `help-text-type="error"` to surface custom validation results.

#### Labeling

- Always set a `label` (or slot a custom one into the `label` slot) so the field has a visible accessible name.
- Always provide `show-button-aria-label` and `hide-button-aria-label`; without them the toggle has no accessible name.
- Use `data-aria-label` when the visible label alone is insufficient (for example, when the label is shared with another field).

## Related components

| Component | Relationship |
|---|---|
| `mdc-input` | Base single-line text field password extends. Use for non-secret text. |
| `mdc-textarea` | Multi-line free-form text entry. |
| `mdc-searchfield` | Search-styled single-line input. |
| `mdc-formfieldwrapper` | Shared label / help-text / validation surface. |
