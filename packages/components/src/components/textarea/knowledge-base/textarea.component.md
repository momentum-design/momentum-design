---
title: Textarea
summary: Usage, guidelines, and accessibility for the mdc-textarea component — a form-associated multi-line text input with helper text, character limit, and optional keyboard-resizable height.
tier: 3
component: textarea
---

## Overview

The textarea is a form-associated multi-line text input. It renders a label, an optional info toggletip, the multi-line input, an optional character counter, helper or validation text, and an optional resize button that grows or shrinks the visible rows.

### When to use

- Use when users need to enter free-form text that may span multiple lines (messages, comments, descriptions).
- Use when you want consistent label, helper-text, validation, and character-count chrome around a multi-line input.

### When not to use

- Do not use for short, single-line inputs — use `mdc-input` instead.
- Do not use for structured values (email, time, password); use the dedicated form components.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/textarea/index.js"; // custom element registration
// or via React wrapper
import { Textarea } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-textarea
  name="bio"
  label="Bio"
  help-text="Tell us about yourself"
  rows="4"
  max-character-limit="200"
></mdc-textarea>
```

Handle the character limit being exceeded by listening for `limitexceeded` and updating `help-text` and `help-text-type` so the validation message and screen-reader announcement stay in sync:

```js
textarea.addEventListener('limitexceeded', (e) => {
  const { currentCharacterCount, maxCharacterLimit } = e.detail;
  textarea.helpTextType = currentCharacterCount > maxCharacterLimit ? 'error' : 'default';
  textarea.helpText = currentCharacterCount > maxCharacterLimit
    ? `You exceeded the limit by ${currentCharacterCount - maxCharacterLimit} characters`
    : '';
});
```

### Property/Attribute details

- `name` (string, default `''`) — form submission key. Required for form participation.
- `value` (string, default `''`) — current value. The initial value can also be supplied as text content inside the element; on connect, text content is trimmed and assigned to `value` if `value` is empty.
- `placeholder` (string) — placeholder rendered when empty.
- `rows` (number, default `5`) — visible row count of the underlying `<textarea>`. Updated by the resize button when `resizable` is enabled.
- `cols` (number) — visible column count.
- `wrap` (`'soft' | 'hard'`, default `'soft'`) — line-wrapping behaviour passed through to the native `<textarea>`.
- `autocapitalize` (string, default `'off'`) — passes through to the native `<textarea>`.
- `autocomplete` (string, default `'off'`) — passes through to the native `<textarea>`.
- `dirname` (string) — name used to submit the input's directionality alongside the value.
- `maxlength` / `minlength` (number) — hard character limits enforced by the native `<textarea>`.
- `max-character-limit` (number) — soft limit that drives the character counter and the `limitexceeded` event. Independent from `maxlength`.
- `required` (boolean, default `false`) — marks the field as required and renders the required indicator.
- `disabled` (boolean) / `readonly` (boolean, default `false`) / `soft-disabled` (boolean, default `false`) — control interactivity. `readonly` and `disabled` block resize input as well.
- `label` (string) — visible label rendered above the field.
- `data-aria-label` (string) — overrides the `aria-label` on the underlying `<textarea>` when no visible label is appropriate.
- `help-text` (string) — text rendered beneath the field. Also used as the validation message when `help-text-type` is `'error'` and the character limit is exceeded.
- `help-text-type` (`'default' | 'error' | 'warning' | 'success' | 'priority'`, default `'default'`) — controls the helper icon and validation styling.
- `validation-message` (string) — custom validation message used by `setCustomValidity` when the field is required and empty.
- `toggletip-text` (string), `toggletip-placement`, `toggletip-strategy`, `info-icon-aria-label` — configure the info icon and toggletip rendered next to the label.
- `resizable` (boolean, default `false`) — shows the resize button. When `false`, the button is hidden.
- `resize-button-aria-label` (string, default `''`) — accessible name for the resize button. Always provide one that conveys what the button does and that Arrow Up / Arrow Down adjust the height.
- `auto-focus-on-mount` (boolean) — when set, focuses the textarea immediately after first render.

The component dispatches:

- `input` — fires on every keystroke.
- `change` — fires on blur after a value change. Re-dispatched from inside the shadow DOM so it bubbles out.
- `focus` / `blur` — native DOM events with React equivalents.
- `limitexceeded` — fires once when the character count crosses or returns under the configured `max-character-limit`. Detail: `{ currentCharacterCount, maxCharacterLimit, value }`.

Slots:

- `label` — overrides the label rendering.
- `toggletip` — overrides the toggletip info icon button.
- `help-icon` — overrides the helper/validation icon.
- `help-text` — overrides the helper/validation text element.

## Accessibility

### Built-in features

- The component is form-associated (`ElementInternals`) — it participates in the surrounding `<form>`, supports `formResetCallback` and `formStateRestoreCallback`, and exposes `checkValidity()` / `reportValidity()` mirroring the underlying `<textarea>`.
- The underlying `<textarea>` is linked to the label via `for`/`id` (`mdc-el-<uuid>`) so the label reads correctly to assistive technologies.
- `aria-describedby` is set to the helper text element id whenever `help-text` is present.
- `aria-invalid` is reflected on the `<textarea>` whenever `help-text-type` is `'error'`.
- The required indicator (`*`) is rendered next to the label when `required` is set.
- Character-limit announcements are pushed through an internal `mdc-screenreaderannouncer` (`aria-live="polite"`, 500 ms delay) keyed to the textarea `id` whenever the value crosses the soft limit.
- The resize button supports keyboard resizing: Arrow Up decreases the visible rows (minimum 1), Arrow Down increases them. While `readonly`, resize input is ignored. Pointer-based resizing is also supported via pointer capture.
- When `disabled` or `readonly`, the resize button is also disabled.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| `<textarea>` | `id` | `mdc-el-<uuid>` (linked to the label) |
| `<textarea>` | `aria-label` | value of `data-aria-label` (when no visible label is used) |
| `<textarea>` | `aria-describedby` | helper-text id, set when `help-text` is present |
| `<textarea>` | `aria-invalid` | `true` when `help-text-type` is `'error'`, `false` otherwise |
| Resize `mdc-button` | `aria-label` | value of `resize-button-aria-label` |
| `mdc-screenreaderannouncer` | `data-aria-live` | `polite` |

### Implementation requirements

#### Labelling

- Always provide a `label` (or a slotted label) for screen readers to identify the textarea's purpose.
- When `resizable` is enabled, provide a `resize-button-aria-label` that describes the button and mentions the Arrow Up/Down shortcuts.
- When `max-character-limit` is set, also set or react to `help-text` and `help-text-type` on `limitexceeded` so the validation state and announcement match the visible counter.

### Notes

- The same `help-text` value is used as the custom validation message when the character limit is exceeded with `help-text-type="error"`, so the message users see and the message form validation reports stay consistent.
- The `change` event from the native `<textarea>` is not composed, so the component re-dispatches it. Handlers attached outside the shadow root will fire correctly.
