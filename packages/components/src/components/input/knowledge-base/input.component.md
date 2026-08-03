---
title: Input
summary: Usage, guidelines, and accessibility for the mdc-input component — a single-line text input with label, helper/validation text, optional leading icon, prefix text, and clear button.
tier: 3
component: input
---

## Overview

The input is a single-line text field with a label, optional helper or validation text, and an optional trailing clear button. It supports a leading icon, a static prefix text, character counting, and full HTML form integration (the host is form-associated and submits its `value` under `name`).

The label, required indicator, and helper text rendering follow the standard form-field layout; an optional info-icon toggletip can be attached next to the label for additional context.

### When to use

- Use `mdc-input` for any short, free-form text entry: names, search terms, single-line addresses, codes, or any value that fits on one line.
- Use `mdc-input` when the field needs a label, helper/validation text, and form integration without wiring it by hand.

### When not to use

- Do not use `mdc-input` for multi-line entry such as messages or comments. Use `mdc-textarea` instead.
- Do not use `mdc-input` for masked credentials that need a show/hide toggle. Use `mdc-password` instead.
- Do not use `mdc-input` for search that filters page content. Use `mdc-searchfield` instead.
- Do not use `mdc-input` when the value must be chosen from a fixed set. Use `mdc-select` or `mdc-combobox` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/input/index.js"; // custom element registration
// or via React wrapper
import { Input } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-input
  name="username"
  label="Username"
  placeholder="Enter your username"
  required
></mdc-input>
```

Input with leading icon, prefix text, clear button, and helper text:

```html
<mdc-input
  name="amount"
  label="Amount"
  leading-icon="dollar-bold"
  prefix-text="USD"
  trailing-button
  clear-aria-label="Clear amount"
  help-text="Enter a value between 1 and 1000"
  help-text-type="default"
></mdc-input>
```

Listen for `input`/`change` to read the value as the user types and on blur; listen for `clear` to react when the trailing clear button empties the field; listen for `limitexceeded` to react when the character counter crosses the configured `max-character-limit`.

### Content guidance

- Provide a meaningful, always-visible `label`; keep it short and don't let it wrap. Truncate only in tight viewports, and pair the truncated label with a toggletip for the full text. Without a label the field has no accessible name unless `data-aria-label` is supplied.
- Use `placeholder` only for example values or format hints (`name@example.com`); it disappears on typing, so never put critical formatting or requirements there — put those in `help-text`.
- Use `help-text` for critical instructions or validation messages, paired with `help-text-type` so the leading icon matches. Reserve the info-icon toggletip for non-critical context.
- Mark required fields with `required`; if most fields in a form are required, indicate the few optional ones instead.
- Reserve the 52px minimum width for short values such as numbers; otherwise let the field span its container.

### Property/Attribute details

| Option | Intent |
|---|---|
| `label` / `required` | Visible label and required indicator. Always label the field; `required` also sets the native `required` attribute and drives `aria-invalid` semantics. |
| `placeholder` | Example or format hint shown while empty. Never use for critical info — it vanishes on input. |
| `help-text` + `help-text-type` | Persistent helper or validation message; the type (`default`, `error`, `warning`, `success`, `priority`) sets the icon and error state. Prefer it over the info toggletip for critical info. |
| `leading-icon` | Decorative icon before the value to hint the field's purpose (search, email, phone). |
| `prefix-text` | Short static prefix (≤10 chars) such as `USD` or `https://`. Requires `data-aria-label` since it renders `aria-hidden`. |
| `trailing-button` + `clear-aria-label` | Optional clear button shown once the value is non-empty; the aria-label is required when enabled. |
| `toggletip-text` + `info-icon-aria-label` | Info-icon toggletip beside the label for non-critical context; provide the aria-label when set. |
| `max-character-limit` | Renders a character counter and fires `limitexceeded`; use for soft limits with a live announcement. |
| `readonly` / `disabled` / `soft-disabled` | `readonly` stays focusable and readable; `disabled` leaves the tab order; `soft-disabled` looks disabled but stays focusable for assistive tech. |
| `data-aria-label` / `data-aria-describedby` | Accessible name/description for the `<input>` when no visible label or helper text is rendered. |

**Note:** standard native attributes (`name`, `value`, `pattern`, `minlength`/`maxlength`, `size`, `list`, `autocapitalize`, `autocomplete`, `dirname`) pass through to the underlying `<input>`.

### Limitations

- **One line only** — the input never wraps; overly long values scroll horizontally and appear cut off. Use `mdc-textarea` for multi-line content.
- **Placeholder isn't a label** — placeholder text disappears on input and is not an accessible name; always supply `label` or `data-aria-label`.
- **Prefix is not announced** — `prefix-text` renders `aria-hidden`, so set `data-aria-label` or its meaning is lost to screen readers.
- **Prefix length capped** — a `prefix-text` beyond 10 characters is rejected with a validation message and not rendered; keep prefixes short.

## Accessibility

### Built-in features

The wrapper renders the label as a native `<label for>` element linked to the underlying `<input>` by `id`, so clicking the label focuses the input with no extra wiring. When helper text is rendered, the input's `aria-describedby` points at the helper-text id so the message is announced when the input receives focus. When `help-text-type="error"`, `aria-invalid="true"` is set on the input. The `required` flag drives the native `required` attribute on the input (the visual `*` is decorative). The trailing clear button is rendered as an `mdc-button` with its own `aria-label` (`clear-aria-label`). Prefix text is rendered with `aria-hidden="true"` to avoid double announcement — the consumer must supply `data-aria-label` so the input still has an accessible name. Pressing `Enter` in the field submits the surrounding form via `form.requestSubmit()`.

The character-limit announcer is rendered as an `mdc-screenreaderannouncer` with `data-aria-live="polite"`, so warnings are announced without stealing focus.

#### Internal ARIA managed by the component

| Element       | Attribute         | Value                                                                                     |
| ------------- | ----------------- | ----------------------------------------------------------------------------------------- |
| Native label  | `for`             | the `id` of the underlying `<input>`                                                      |
| `<input>`     | `aria-label`      | mirrors `data-aria-label`                                                                 |
| `<input>`     | `aria-describedby`| helper-text id when `help-text` is set, otherwise mirrors `data-aria-describedby`         |
| `<input>`     | `aria-invalid`    | `true` when `help-text-type="error"`, otherwise `false`                                   |
| `<input>`     | `required`        | reflects `required`                                                                       |
| Prefix text   | `aria-hidden`     | `true`                                                                                    |
| Clear button  | `aria-label`      | mirrors `clear-aria-label`                                                                |
| Helper text   | `id`              | stable id used by the input's `aria-describedby`                                          |

### Implementation requirements

#### Labeling

- Always provide either `label` or `data-aria-label`; otherwise the input has no accessible name.
- When `prefix-text` is set, provide `data-aria-label` so the announced name includes the prefix's meaning (for example `data-aria-label="Amount in US dollars"`).
- When `trailing-button` is `true`, provide `clear-aria-label` so the clear button has an accessible name.
- When `toggletip-text` is set, provide `info-icon-aria-label` for the info-icon button.

## Related components

| Component | Relationship |
|---|---|
| `mdc-textarea` | Multi-line version of the same field. Use for long, free-form entry. |
| `mdc-password` | Input with a built-in show/hide toggle for masked credentials. |
| `mdc-searchfield` | Search-styled single-line input with a clear button and inline chip filters. |
| `mdc-select` / `mdc-combobox` | Choose a value from a fixed set instead of typing free text. |
| `mdc-formfieldwrapper` | Shared label / help-text / validation surface `mdc-input` builds on. |
