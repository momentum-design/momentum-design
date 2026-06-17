---
title: Formfieldwrapper
summary: Internal base component that renders the label, helper/validation text, optional toggletip info icon, and required indicator shared by every form field component.
tier: 3
component: formfieldwrapper
---

## Overview

The formfieldwrapper is an internal base component that renders the label row (label, required indicator, optional info-icon toggletip) and the helper/validation row (icon + text) used by every form field. It is **not** intended to be instantiated directly by consumers — components such as `mdc-input`, `mdc-textarea`, `mdc-checkbox`, `mdc-radio`, `mdc-select`, `mdc-combobox`, `mdc-datepicker`, `mdc-formfieldgroup`, and others extend it to inherit a consistent label and helper-text contract.

This entry documents the properties, slots, and accessibility hooks that every extending component exposes to consumers. Consumers will interact with these via the concrete form-field component (e.g. set `label` on an `mdc-input`), not on `mdc-formfieldwrapper` itself.

### When to use

- Use the formfieldwrapper indirectly by extending it from a new form-field component that needs the standard label, required indicator, helper text, and toggletip layout.

### When not to use

- Do not render `mdc-formfieldwrapper` directly in application code — pick the concrete form-field component (`mdc-input`, `mdc-textarea`, `mdc-checkbox`, etc.) instead.

## Guidelines

### Developer usage

This component is internal. Extend it from a new form-field component when building one:

```ts
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';

class MyField extends FormfieldWrapper {
  // ...field-specific implementation
  static override styles = [...FormfieldWrapper.styles, ...myStyles];
}
```

The wrapper provides `renderLabel()` and `renderHelperText()` helpers; subclasses call them from their `render()` method to compose the final markup. Subclasses also inherit the `inputId` protected field, used to wire the label's `for` attribute to the native input via `id`.

### Content guidance

- Provide a meaningful `label` on every field that extends the wrapper; the label doubles as the form control's accessible name through the rendered `<label for>`.
- Use `help-text` for short helper or validation messages; pair it with `help-text-type` for visual treatment.
- Use `toggletip-text` (or the `toggletip` slot) to attach an info-icon button next to the label that opens an `mdc-toggletip` with additional context.

### Property/Attribute details

- `label` — visible label text. Rendered either as a native `<label for>` (linked to the field's `inputId`) or as a `mdc-text` heading depending on the extending subclass's `shouldRenderLabel` flag.
- `required` — when `true`, appends a `*` required indicator next to the label. Default `false`.
- `help-text` — helper or validation text rendered below the field.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon rendered next to the helper text (no icon for `default`).
- `toggletip-text` — when set, renders an info-icon button next to the label that opens an `mdc-toggletip` with this text.
- `toggletip-placement` — placement of the toggletip popover relative to the info-icon button. Default `top`.
- `toggletip-strategy` — popover positioning strategy for the toggletip. `absolute` (default) or `fixed`.
- `info-icon-aria-label` — accessible label for the info-icon button. Required when `toggletip-text` is set (the button has no visible text).
- `readonly` — when `true`, the field is non-interactive but focusable. Subclasses honour this in their own rendering.
- `disabled` — when `true`, the field is non-interactive and removed from the tab order. The info-icon button and helper-text icon are also disabled.
- `soft-disabled` — when `true`, the field is visually disabled but remains focusable so assistive technology can read it. Mainly used for fields where disabled state must still be discoverable.

Slots exposed to the consumer:

- `label` — replace the default label rendering with custom markup.
- `toggletip` — replace the default info-icon button + toggletip with custom markup.
- `help-icon` — replace the default helper-text icon (driven by `help-text-type`).
- `help-text` — replace the default helper-text rendering.

## Accessibility

### Built-in features

The wrapper renders the label as a native `<label for>` element linked to the form field's hidden native input via `inputId`. This produces a click-on-label-focuses-field behaviour for free, with no additional ARIA wiring required from the subclass.

The helper text is rendered through `mdc-text` with a stable id (`DEFAULTS.HELPER_TEXT_ID`); extending components are expected to link this id from their input element via `aria-describedby` so screen readers announce the helper text on focus.

The required indicator (`*`) is purely visual — accessible-name announcement of the required state is the responsibility of the extending component (typically via `aria-required` on the input).

The info-icon button + toggletip uses a fresh `triggerid` per render to anchor the `mdc-toggletip` to the trigger button; the toggletip opens on click or keyboard activation.

The wrapper itself does not own any role or ARIA state — the role and ARIA contract are the responsibility of the extending component (e.g. the field's input element).

#### Internal ARIA managed by the component

| Element              | Attribute       | Value                                                              |
| -------------------- | --------------- | ------------------------------------------------------------------ |
| Native label         | `for`           | the `inputId` of the field's input element                         |
| Helper-text `mdc-text` | `id`          | stable id used by the extending component for `aria-describedby`   |
| Info-icon button     | `aria-label`    | mirrors `info-icon-aria-label`                                     |
| Info-icon toggletip  | `triggerid`     | id of the info-icon button (auto-generated)                        |

### Implementation requirements

#### General

- Extending components must call `renderLabel()` and `renderHelperText()` from their own `render()` method to surface the standard label and helper-text layout.
- Extending components must wire `aria-describedby` on their input element to the helper-text id so the helper text is announced on focus.
- Extending components must set `aria-required` on their input when `required` is `true`; the wrapper only renders the visual indicator.
- Set `shouldRenderLabel` to `false` on extending components that render the label as a heading rather than a native `<label for>` (e.g. groups like `mdc-formfieldgroup` and `mdc-radiogroup`).

#### Labelling

- Always provide a `label` on the extending component — without it the field has no accessible name from the wrapper, and the extending component must supply one through `data-aria-label` or `aria-labelledby`.
- When `toggletip-text` is set, always provide `info-icon-aria-label` — the info-icon button has no visible text and otherwise has no accessible name.
