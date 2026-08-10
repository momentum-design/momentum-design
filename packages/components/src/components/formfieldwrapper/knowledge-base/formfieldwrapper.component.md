---
title: Formfieldwrapper
summary: Usage, guidelines, and accessibility for the mdc-formfieldwrapper component — the internal base that renders the shared label, helper/validation text, and toggletip for every form field.
tier: 3
component: formfieldwrapper
---

## Overview

The formfieldwrapper is an internal base component that renders the label row (label, required indicator, optional info-icon toggletip) and the helper/validation row (icon + text) used by every form field. It is **not** intended to be instantiated directly by consumers — components such as `mdc-input`, `mdc-textarea`, `mdc-checkbox`, `mdc-radio`, `mdc-select`, `mdc-combobox`, `mdc-datepicker`, `mdc-formfieldgroup`, and others extend it to inherit a consistent label and helper-text contract.

This entry documents the properties, slots, and accessibility hooks that every extending component exposes to consumers. Consumers will interact with these via the concrete form-field component (e.g. set `label` on an `mdc-input`), not on `mdc-formfieldwrapper` itself.

### When to use

- Use `mdc-formfieldwrapper` indirectly, by extending it from a new form-field component that needs the standard label, required indicator, helper text, and toggletip layout.

### When not to use

- Do not render `mdc-formfieldwrapper` directly in application code. Use the concrete form-field component (`mdc-input`, `mdc-textarea`, `mdc-checkbox`, and so on) instead.

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

These are the surfaces every extending field exposes to consumers; set them on the concrete field (for example `mdc-input`), not on `mdc-formfieldwrapper`.

| Option | Intent |
|---|---|
| `label` | Visible label and accessible name. Rendered as a native `<label for>` or as an `mdc-text` heading depending on the subclass's `shouldRenderLabel` flag. Always provide one. |
| `required` | Appends a `*` indicator next to the label. Visual only — the extending component must set `aria-required` on its input. |
| `help-text` + `help-text-type` | Helper or validation text below the field; the type (`default`, `error`, `warning`, `success`, `priority`) drives the helper icon (no icon for `default`). |
| `toggletip-text` + `info-icon-aria-label` | Info-icon button beside the label that opens an `mdc-toggletip`. Provide the aria-label whenever `toggletip-text` is set — the button has no visible text. |
| `toggletip-placement` / `toggletip-strategy` | Placement (default `top`) and positioning strategy (`absolute` default, or `fixed`) of the toggletip popover. |
| `readonly` / `disabled` / `soft-disabled` | `readonly` stays focusable; `disabled` leaves the tab order and disables the info/helper icons; `soft-disabled` looks disabled but stays focusable so assistive tech can read it. |

**Note:** the consumer-facing slots override each piece of the default layout — `label`, `toggletip` (info-icon button + toggletip), `help-icon` (driven by `help-text-type`), and `help-text`.

### Limitations

- **Internal base only** — `mdc-formfieldwrapper` is not meant to be rendered directly; extend it from a concrete field (`mdc-input`, `mdc-textarea`, and so on) instead.
- **No role or ARIA state** — the wrapper owns no role and no input; the extending component must wire `aria-describedby` to the helper-text id and set roles/ARIA on its own control.
- **Required is visual only** — the `*` indicator is decorative. Set `aria-required` on the input, or the required state is not announced.
- **Label wiring is the subclass's job** — the native `<label for>` links to the subclass's `inputId`; a subclass that renders the label as a heading (`shouldRenderLabel="false"`, as with groups) must supply the accessible name itself.

## Accessibility

### Built-in features

The wrapper renders the label as a native `<label for>` element linked to the form field's hidden native input via `inputId`. This produces a click-on-label-focuses-field behavior for free, with no additional ARIA wiring required from the subclass.

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

#### Labeling

- Always provide a `label` on the extending component — without it the field has no accessible name from the wrapper, and the extending component must supply one through `data-aria-label` or `aria-labelledby`.
- When `toggletip-text` is set, always provide `info-icon-aria-label` — the info-icon button has no visible text and otherwise has no accessible name.

## Related components

| Component | Relationship |
|---|---|
| `mdc-input` / `mdc-textarea` / `mdc-password` / `mdc-searchfield` | Text fields that extend the wrapper for their label, helper-text, and validation surface. |
| `mdc-select` / `mdc-combobox` / `mdc-datepicker` | Choice and date fields that extend the wrapper. |
| `mdc-checkbox` / `mdc-radio` / `mdc-toggle` | Selection controls that extend the wrapper's label and helper-text contract. |
| `mdc-formfieldgroup` | Groups related fields; renders the label as a heading (`shouldRenderLabel="false"`) rather than a native `<label for>`. |
| `mdc-toggletip` | Popover opened by the wrapper's info-icon button when `toggletip-text` is set. |
