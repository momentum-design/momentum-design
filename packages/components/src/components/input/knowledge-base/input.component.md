---
title: Input
summary: Usage, guidelines, and accessibility for the mdc-input component — a single-line text input with label, helper/validation text, optional leading icon, prefix text, and clear button.
status: draft
tier: 3
component: input
---

## Overview

The input is a single-line text field with a label, optional helper or validation text, and an optional trailing clear button. It supports a leading icon, a static prefix text, character counting, and full HTML form integration (the host is form-associated and submits its `value` under `name`).

The label, required indicator, and helper text rendering follow the standard form-field layout; an optional info-icon toggletip can be attached next to the label for additional context.

### When to use

- Use `mdc-input` for any short, free-form text entry: names, search terms, single-line addresses, codes, or any value that fits on one line.
- Use it when the field needs label, helper/validation text, and form integration without writing the wiring by hand.

### When not to use

- Use `mdc-textarea` for multi-line input.
- Use `mdc-password` for password entry that needs show/hide toggling.
- Use `mdc-searchfield` for search-specific input with built-in search styling.
- Use `mdc-select` or `mdc-combobox` when the value must be chosen from a fixed list.

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

- Provide a meaningful `label` on every input; without it the field has no accessible name unless a `data-aria-label` is supplied.
- Use `placeholder` for example values or format hints (e.g. `"name@example.com"`); never use it as a substitute for the label.
- Use `help-text` for short instructions or validation messages; pair with `help-text-type` (`default`, `error`, `warning`, `success`, `priority`) so the leading icon matches the message.
- When `prefix-text` is set, also set `data-aria-label` on the input — the prefix is rendered `aria-hidden="true"` so screen readers do not announce it.

### Property/Attribute details

- `placeholder` — text shown when the value is empty. Default `''`.
- `prefix-text` — short static text rendered before the input (max 10 characters; longer values trigger a validation message and the prefix is not rendered). Default unset.
- `leading-icon` — name of an icon rendered before the input (`mdc-icon` name from the configured icon set). Default unset.
- `trailing-button` — when `true`, shows a clear button at the trailing edge once the value is non-empty. Default `false`.
- `clear-aria-label` — accessible name for the trailing clear button. Required when `trailing-button` is `true`.
- `maxlength` / `minlength` — native `maxlength` / `minlength` validation passed through to the underlying `<input>`.
- `pattern` — regex the value must match for native form validation.
- `list` — id of a `<datalist>` providing autocomplete suggestions.
- `size` — native `size` attribute (CSS character width). Default unset.
- `autocapitalize` — `off` (default), `on`, `sentences`, `words`, `characters`, `none`.
- `autocomplete` — standard HTML `autocomplete` token. Default `off`.
- `dirname` — submits the text directionality alongside the value.
- `data-aria-label` — accessible name applied to the underlying `<input>`. Required when no visible label is rendered (e.g. when `prefix-text` is set or when the field is used without a label).
- `data-aria-describedby` — id of an element that describes the input. Used as the input's `aria-describedby` when no helper text is rendered; when helper text is rendered, the helper text's id wins.

Properties inherited from the form-field wrapper:

- `label` — visible label text. Rendered as a `<label for>` linked to the input.
- `required` — when `true`, appends a `*` required indicator and sets `required` on the underlying `<input>`.
- `help-text` — helper or validation text rendered below the input.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon and the input's `aria-invalid` (`true` only for `error`).
- `toggletip-text` — when set, renders an info-icon button next to the label that opens an `mdc-toggletip`.
- `toggletip-placement`, `toggletip-strategy` — placement / positioning strategy for the toggletip popover.
- `info-icon-aria-label` — accessible name for the info-icon button. Required when `toggletip-text` is set.
- `readonly` — when `true`, the input is non-interactive but focusable.
- `disabled` — when `true`, the input is non-interactive and removed from the tab order.
- `soft-disabled` — when `true`, the input looks disabled but remains focusable so assistive technology can read it.
- `name`, `value`, `validation-message` — standard form-control hooks; the host participates in form submission and validation through ElementInternals.
- `max-character-limit` — when set, renders a character counter and dispatches `limitexceeded` when the value crosses or returns under the limit.
- `auto-focus-on-mount` — when `true`, the underlying `<input>` is focused after first render.

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

#### Labelling

- Always provide either `label` or `data-aria-label`; otherwise the input has no accessible name.
- When `prefix-text` is set, provide `data-aria-label` so the announced name includes the prefix's meaning (e.g. `data-aria-label="Amount in US dollars"`).
- When `trailing-button` is `true`, provide `clear-aria-label` so the clear button has an accessible name.
- When `toggletip-text` is set, provide `info-icon-aria-label` for the info-icon button.
