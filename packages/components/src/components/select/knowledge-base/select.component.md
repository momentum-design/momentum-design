---
title: Select
summary: Usage, guidelines, and accessibility for the mdc-select component — a form-associated dropdown that lets users pick a single value from a predefined list of options.
tier: 3
component: select
---

## Overview

The select is a form-associated dropdown control that lets the user pick a single value from a predefined list of options. It exposes the standard form field surface (label, help text, validation, required indicator, info toggletip) and renders a popover-backed listbox built from slotted `mdc-option` and `mdc-optgroup` children.

The component is form-associated and participates in native form submission, validation, and reset.

### When to use

- Use `mdc-select` when the user must pick a single value from a fixed list and typing to filter is not needed.
- Use `mdc-select` inside a form when you need native submission, validation, and reset for the selected value.
- Use `mdc-select` when options fall into labeled groups (`mdc-optgroup`), optionally separated by an `mdc-divider`.

### When not to use

- Do not use `mdc-select` when the user benefits from typing to filter a long list. Use `mdc-combobox` instead.
- Do not use `mdc-select` for a handful of options that should all be visible at once. Use `mdc-radiogroup` instead.
- Do not use `mdc-select` for free-form text entry. Use `mdc-input` instead.
- Do not use `mdc-select` for searching content rather than picking a set value. Use `mdc-searchfield` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/select/index.js"; // custom element registration
// or via React wrapper
import { Select, SelectListBox, Option, OptGroup } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-select label="Country" name="country" placeholder="Pick a country">
  <mdc-selectlistbox>
    <mdc-option value="at" label="Austria"></mdc-option>
    <mdc-option value="de" label="Germany"></mdc-option>
    <mdc-option value="ch" label="Switzerland"></mdc-option>
  </mdc-selectlistbox>
</mdc-select>
```

Structural requirements:

- Wrap every `mdc-option` (and any `mdc-optgroup`) inside an `mdc-selectlistbox`. The `mdc-selectlistbox` carries `role="listbox"` and is required for correct screen-reader behavior.
- Give every `mdc-option` a `value` attribute — form submission and value-based selection rely on it.
- A default option can be marked with the `selected` attribute on the `mdc-option`, or by setting `value` on `mdc-select` to match an option's `value`.
- Place per-option `mdc-tooltip` siblings outside `mdc-select` and connect them via `triggerid` pointing at the option's `id`.
- Optionally add `mdc-divider` after each `mdc-optgroup` to separate groups visually.

Listen for `change` and `input` to react to a committed selection; both events fire with `{ value, label }` in their `detail`. `click`, `keydown`, and `focus` events also bubble from the host.

### Content guidance

- Write a `label` that names what the user is choosing ("Country"), not an instruction ("Select a country").
- Use `placeholder` as a short hint about the expected selection ("Pick a country"), never as a replacement for the label.
- Keep option labels short and scannable — the selected label renders inside a fixed-width trigger and truncates when it overflows.
- When a selection is invalid, write `help-text` (with `help-text-type="error"`) that says how to fix it in one or two short sentences, not just what is wrong.

### Property/Attribute details

| Option | Intent |
|---|---|
| `value` | The selected option's value, reflected to the form. Set it to preselect or drive the selection programmatically. |
| `name` | Form field name submitted with the selected value. Required for form submission. |
| `placeholder` | Hint shown when nothing is selected. With a `placeholder` and no `selected` option the select starts empty; otherwise the first valid option is selected on load. |
| `help-text` + `help-text-type` | Helper or validation text below the field; the type (`default`, `error`, `warning`, `success`, `priority`) drives the icon and error styling. |
| `required` + `validation-message` | Marks the field required and reports `validation-message` when it is submitted empty. Pair them so the error is meaningful. |
| `disabled` / `soft-disabled` / `readonly` | `disabled` removes the trigger from the tab order; `soft-disabled` looks disabled but stays focusable; `readonly` is focusable but non-interactive. All three prevent the popover from opening. |
| `placement="bottom-start"` (default) | Popover side relative to the trigger; switch to `top-start` only when space below is constrained. |
| `strategy` + `boundary` + `disable-flip` | Popover positioning controls. Reach for these only when the default clips inside a scroll container — pair `strategy="fixed"` with a `boundary`. |
| `toggletip-text` + `info-icon-aria-label` | Opt-in info button beside the label that opens an `mdc-toggletip`; provide the aria-label when set. |
| `auto-focus-on-mount` | Focuses the trigger on first render. Use sparingly — only when the select is the primary task on the view. |

**Note:** `value` and `selected` live on `mdc-option`; grouping and separators come from `mdc-optgroup` and `mdc-divider`. `popover-z-index` and `backdrop-append-to` match the shared popover surface.

### Limitations

- **Single select only** — `mdc-select` binds exactly one value. For multi-select use `mdc-listbox` with `multiple` and serialize the value yourself.
- **No type-to-filter** — typing only jumps focus via typeahead; it does not filter the list. Use `mdc-combobox` for a long, filterable list.
- **Listbox wrapper required** — options must sit inside `mdc-selectlistbox`; placing `mdc-option` directly in the select drops the listbox role and focus semantics.
- **Popover covers help text** — the open popover renders directly below the trigger and overlaps any helper or validation text until it closes.
- **Per-option tooltips slot outside** — an `mdc-tooltip` slotted inside the listbox breaks announcement and focus order. Place it as a sibling and wire `triggerid` to the option's `id`.

## Accessibility

### Built-in features

The component implements the WAI-ARIA combobox + listbox pattern. The visible trigger carries `role="combobox"` and `aria-haspopup="listbox"`, the popover hosts a slotted `mdc-selectlistbox` (with `role="listbox"`), and the trigger's `aria-controls` is wired to the listbox id. The popover traps focus while open, hides on outside click and Escape, and returns focus to the trigger on close.

Keyboard interaction:

- `ArrowDown`, `ArrowUp`, `Enter` — open the popover from the trigger (without changing the selection).
- `Space` — opens the popover (handled on `keyup` to mirror native button behavior); prevents page scroll.
- `Home` — opens the popover and focuses the first option.
- `End` — opens the popover and focuses the last option.
- Any printable character — opens the popover and focuses the next option whose label starts with the typed string (typeahead, with a 500 ms reset between keys).
- Inside the open popover: `ArrowDown` / `ArrowUp` / `Home` / `End` move focus through the options; printable characters continue typeahead; `Escape` closes the popover and returns focus to the trigger.
- `Tab` — closes the popover and moves focus out.

Form integration: the component is form-associated, exposes `name` / `value`, participates in form reset (back to the initially selected option) and form state restoration, and reports validity via the hidden native input.

Disabled states: when `disabled`, `soft-disabled`, or `readonly` becomes true while the popover is open, the popover is forced closed.

#### Internal ARIA managed by the component

| Element            | Attribute          | Value                                                                |
| ------------------ | ------------------ | -------------------------------------------------------------------- |
| Visual trigger     | `role`             | `combobox`                                                           |
| Visual trigger     | `aria-haspopup`    | `listbox`                                                            |
| Visual trigger     | `aria-controls`    | id of the slotted listbox                                            |
| Visual trigger     | `aria-expanded`    | `true` when the popover is open, otherwise `false`                   |
| Visual trigger     | `aria-required`    | mirrors `required`                                                   |
| Visual trigger     | `aria-invalid`     | `true` when `help-text-type="error"`, otherwise `false`              |
| Visual trigger     | `aria-disabled`    | mirrors `disabled` or `soft-disabled` when set                       |
| Visual trigger     | `aria-readonly`    | mirrors `readonly` when set                                          |
| Visual trigger     | `aria-label`       | mirrors `data-aria-label`                                            |
| Visual trigger     | `aria-labelledby`  | id of the label when `label` is set                                  |
| Visual trigger     | `tabindex`         | `0` when enabled; `-1` when `disabled`                               |
| Slotted listbox    | `role`             | `listbox`                                                            |
| Native hidden input| `aria-hidden`      | `true` (used only for form submission and validity reporting)        |
| Native hidden input| `tabindex`         | `-1`                                                                 |
| Option (slotted)   | `tabindex`         | `0` on the focused / selected option, `-1` on the rest               |
| Option (slotted)   | `selected`         | reflects the currently selected option                               |

### Implementation requirements

#### General

- Always wrap options in `mdc-selectlistbox`; without it the listbox role and option focus semantics are missing.
- Set a unique `value` on every `mdc-option` so the form value, programmatic `value` updates, and typeahead all work as expected.
- Place per-option `mdc-tooltip` siblings outside `mdc-select` and connect them via `triggerid` — tooltips slotted inside the listbox break announcement and focus order.
- For required selects, pair `required` with a meaningful `validation-message`.

#### Labeling

- Provide a `label` whenever possible — `role="combobox"` requires an accessible name.
- When no visible label is shown, set `data-aria-label` on the host.
- Use `help-text` with `help-text-type="error"` for validation feedback; the icon and `aria-describedby`-equivalent wiring are handled internally.

## Related components

| Component | Relationship |
|---|---|
| `mdc-combobox` | Same dropdown surface with an editable input that filters the list as the user types. |
| `mdc-selectlistbox` | Required wrapper that carries `role="listbox"` around the slotted options. |
| `mdc-option` | A single selectable value inside the listbox. |
| `mdc-optgroup` | Labeled grouping of options within the listbox. |
| `mdc-listbox` | Standalone, always-visible option list with no popover and optional multi-select. |
| `mdc-radiogroup` | Better for a few mutually exclusive options that should all stay visible. |
