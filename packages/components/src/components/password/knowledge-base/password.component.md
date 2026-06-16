---
title: Password
summary: Usage, guidelines, and accessibility for the mdc-password component — a password input with a built-in show/hide toggle.
status: draft
tier: 3
component: password
---

## Overview

`mdc-password` is a form-associated password input. It renders the same label, help-text, validation, prefix, and leading-icon surface as `mdc-input`, but the input type defaults to `password` and a trailing show/hide button is always present so users can reveal or mask the entered value.

### When to use

- Use `mdc-password` whenever the user needs to enter a credential or other secret string that should be visually masked.
- Use it as the password field in sign-in, sign-up, and credential-change forms inside a `form` element.

### When not to use

- Do not use `mdc-password` for regular text — use `mdc-input` instead.
- Do not use it for multi-line secrets — use `mdc-textarea`.
- Do not use it for one-time codes that should be visible as the user types — use `mdc-input`.

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

### Property/Attribute details

- `show-button-aria-label` — accessible label applied to the trailing toggle when the password is currently masked. Required for accessibility.
- `hide-button-aria-label` — accessible label applied to the trailing toggle when the password is currently visible. Required for accessibility.
- The trailing toggle is rendered automatically when the field has a value (or when explicitly forced). The component overrides the `trailing-button` flag from `mdc-input` to `true` on connect; the standard clear button is replaced with the show/hide button.
- The visibility state is internal; toggling the button flips the rendered `input` between `type="password"` and `type="text"` without exposing a property.
- All `mdc-input` attributes are available:
  - `label`, `required`, `name`, `value`, `placeholder`, `pattern`, `minlength`, `maxlength`, `size`, `autocapitalize`, `autocomplete`, `dirname`, `list`.
  - `help-text`, `validation-message`, `help-text-type` (`'default' | 'error' | 'warning' | 'success' | 'priority'`).
  - `disabled`, `readonly`.
  - `leading-icon`, `prefix-text`, `toggletip-text`.
  - `data-aria-label`, `data-aria-describedby` — used for the inner `<input>` accessible name and description respectively.
- Slots (inherited): `label`, `toggletip`, `help-icon`, `help-text`, `input`, `input-leading-icon`, `input-prefix-text`, `trailing-button` (overriding the built-in toggle).
- Events: `input`, `change`, `focus`, `blur`.

### Limitations

- The component is form-associated through its host element. Older browsers without `ElementInternals` support will not include the value in standard form submissions and require a polyfill.

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

#### Labelling

- Always set a `label` (or slot a custom one into the `label` slot) so the field has a visible accessible name.
- Always provide `show-button-aria-label` and `hide-button-aria-label`; without them the toggle has no accessible name.
- Use `data-aria-label` when the visible label alone is insufficient (for example, when the label is shared with another field).
