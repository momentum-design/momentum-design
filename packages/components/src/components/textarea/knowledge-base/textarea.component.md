---
title: Textarea
summary: Usage, guidelines, and accessibility for the mdc-textarea component — a form-associated multi-line text input with helper text, character limit, and optional keyboard-resizable height.
tier: 3
component: textarea
---

## Overview

The textarea is a form-associated multi-line text input. It renders a label, an optional info toggletip, the multi-line input, an optional character counter, helper or validation text, and an optional resize button that grows or shrinks the visible rows.

### When to use

- Use `mdc-textarea` when users enter free-form text that may span multiple lines (messages, comments, descriptions).
- Use `mdc-textarea` when you want consistent label, helper-text, validation, and character-count chrome around a multi-line input.

### When not to use

- Do not use `mdc-textarea` for short, single-line values. Use `mdc-input` instead.
- Do not use `mdc-textarea` for structured values such as email, time, or passwords. Use the dedicated form component (`mdc-input`, `mdc-password`, or `mdc-select`) instead.

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

### Content guidance

- Follow the same label, placeholder, and helper-text rules as `mdc-input`: keep the label short and always visible, and never put critical information in the placeholder.
- Use a character or word counter (`max-character-limit`) only when there is a real limit; it shows used/total and errors when the limit is exceeded.

### Property/Attribute details

| Option | Intent |
|---|---|
| `rows="5"` (default) / `cols` | Initial visible size of the field — set a sensible default height for the expected content. `rows` is also updated by the resize button. |
| `resizable` + `resize-button-aria-label` | Shows a keyboard/pointer resize button; always provide an aria-label that mentions Arrow Up/Down adjust the height. |
| `max-character-limit` | Soft limit that drives the counter and `limitexceeded`; independent of the native `maxlength` hard cap. |
| `label` / `required` | Visible label and required indicator. |
| `help-text` + `help-text-type` | Helper or validation message; the type (`default`, `error`, `warning`, `success`, `priority`) drives the icon and error state. Keep it in sync with `limitexceeded`. |
| `validation-message` | Custom validity text used when the field is required and empty. |
| `toggletip-text` / `info-icon-aria-label` | Info toggletip beside the label; provide the aria-label when set. |
| `disabled` / `readonly` / `soft-disabled` | Interaction states; `readonly` and `disabled` also block resizing. |
| `data-aria-label` | Accessible name for the `<textarea>` when no visible label is used. |

**Note:** native attributes (`name`, `value`, `placeholder`, `wrap`, `minlength`/`maxlength`, `autocapitalize`, `autocomplete`, `dirname`) pass through to the underlying `<textarea>`; `wrap` controls line-wrapping behavior.

### Limitations

- **Soft limit vs hard limit** — `max-character-limit` only warns and fires `limitexceeded`; it does not block typing. Use the native `maxlength` for a hard cap.
- **Keep help-text in sync** — the counter and validation do not update `help-text` for you; update `help-text` / `help-text-type` on `limitexceeded` so the visible and announced messages match.
- **Resize needs a label** — an enabled resize button with no `resize-button-aria-label` has no accessible name and hides the Arrow Up/Down affordance from assistive tech.

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

#### Labeling

- Always provide a `label` (or a slotted label) for screen readers to identify the textarea's purpose.
- When `resizable` is enabled, provide a `resize-button-aria-label` that describes the button and mentions the Arrow Up/Down shortcuts.
- When `max-character-limit` is set, also set or react to `help-text` and `help-text-type` on `limitexceeded` so the validation state and announcement match the visible counter.

### Notes

- The same `help-text` value is used as the custom validation message when the character limit is exceeded with `help-text-type="error"`, so the message users see and the message form validation reports stay consistent.
- The `change` event from the native `<textarea>` is not composed, so the component re-dispatches it. Handlers attached outside the shadow root will fire correctly.

## Related components

| Component | Relationship |
|---|---|
| `mdc-input` | Single-line version of the same field. Use for short values. |
| `mdc-password` | Masked credential input with a show/hide toggle. |
| `mdc-searchfield` | Search-styled single-line input. |
| `mdc-formfieldwrapper` | Shared label / help-text / validation surface. |
