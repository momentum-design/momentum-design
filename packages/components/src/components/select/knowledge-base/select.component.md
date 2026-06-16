---
title: Select
summary: Usage, guidelines, and accessibility for the mdc-select component — a form-associated dropdown that lets users pick a single value from a predefined list of options.
status: draft
tier: 3
component: select
---

## Overview

The select is a form-associated dropdown control that lets the user pick a single value from a predefined list of options. It exposes the standard form field surface (label, help text, validation, required indicator, info toggletip) and renders a popover-backed listbox built from slotted `mdc-option` and `mdc-optgroup` children.

The component is form-associated and participates in native form submission, validation, and reset.

### When to use

- Use `mdc-select` when the user must pick a single value from a fixed list and typing-to-filter is not required.
- Use it inside a form when you want native form submission and validation for the selected value.
- Use it when options are grouped (`mdc-optgroup`) and an optional `mdc-divider` is needed between groups.

### When not to use

- Use `mdc-combobox` when the user benefits from typing to filter the list.
- Use `mdc-radiogroup` when there are only a handful of options and they should all be visible at once.
- Use `mdc-input` when free-form text is the goal.
- Use `mdc-searchfield` when the user is searching content rather than picking a single value.

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

- Wrap every `mdc-option` (and any `mdc-optgroup`) inside an `mdc-selectlistbox`. The `mdc-selectlistbox` carries `role="listbox"` and is required for correct screen-reader behaviour.
- Give every `mdc-option` a `value` attribute — form submission and value-based selection rely on it.
- A default option can be marked with the `selected` attribute on the `mdc-option`, or by setting `value` on `mdc-select` to match an option's `value`.
- Place per-option `mdc-tooltip` siblings outside `mdc-select` and connect them via `triggerid` pointing at the option's `id`.
- Optionally add `mdc-divider` after each `mdc-optgroup` to separate groups visually.

Listen for `change` and `input` to react to a committed selection; both events fire with `{ value, label }` in their `detail`. `click`, `keydown`, and `focus` events also bubble from the host.

### Content guidance

- Provide a visible `label` describing what the user is selecting; reach for `data-aria-label` only when a visible label is not possible.
- Use `placeholder` as a short hint about the expected selection ("Pick a country"), not as a replacement for the label.
- Keep option labels short — they are rendered inside a fixed-width trigger control.

### Property/Attribute details

- `value` — value of the currently selected option. Setting this attribute updates the visible selection and the form value.
- `name` — form field name submitted with the form.
- `placeholder` — placeholder text shown when no value is selected. When a `placeholder` is set and no option carries `selected`, the select starts with no selection; otherwise the first valid option becomes the initial selection.
- `placement` — popover placement relative to the trigger. `bottom-start` (default) or `top-start`.
- `boundary` — clipping ancestor used by the popover (`clippingAncestors` by default, or any CSS selector). Pair with `strategy="fixed"` to avoid clipping inside scrollable parents.
- `strategy` — popover positioning strategy. `absolute` (default) or `fixed`.
- `popover-z-index` — z-index override for the popover (defaults to `1000`).
- `disable-flip` — when `true`, the dropdown does not flip its position when it hits the boundary. Defaults to `false`.
- `backdrop-append-to` — id of the element the popover backdrop is appended to (defaults to the select's parent).
- `label` — visible label rendered above the field; used as the accessible name when set.
- `data-aria-label` — accessible name fallback when no visible label is rendered.
- `help-text` — helper or validation text below the field.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon and error styling.
- `toggletip-text` / `toggletip-placement` / `toggletip-strategy` / `info-icon-aria-label` — opt-in info icon button next to the label that opens an `mdc-toggletip`.
- `required` — when `true`, the form is invalid unless a value is selected.
- `validation-message` — custom validation message reported through `setCustomValidity` when the select is required but empty.
- `disabled` — fully disabled; the host is removed from the tab order and the popover cannot open.
- `soft-disabled` — visually disabled but focusable; the popover cannot open.
- `readonly` — non-interactive but focusable; the popover cannot open.
- `auto-focus-on-mount` — when `true`, focuses the select trigger on first render.

Events dispatched by the host:

- `change` — committed selection (bubbles, composed); `event.detail = { value, label }`.
- `input` — fires alongside `change` whenever the selection changes; `event.detail = { value, label }`.
- `click`, `keydown`, `focus` — standard DOM events forwarded from the visual trigger.

## Accessibility

### Built-in features

The component implements the WAI-ARIA combobox + listbox pattern. The visible trigger carries `role="combobox"` and `aria-haspopup="listbox"`, the popover hosts a slotted `mdc-selectlistbox` (with `role="listbox"`), and the trigger's `aria-controls` is wired to the listbox id. The popover traps focus while open, hides on outside click and Escape, and returns focus to the trigger on close.

Keyboard interaction:

- `ArrowDown`, `ArrowUp`, `Enter` — open the popover from the trigger (without changing the selection).
- `Space` — opens the popover (handled on `keyup` to mirror native button behaviour); prevents page scroll.
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

#### Labelling

- Provide a `label` whenever possible — `role="combobox"` requires an accessible name.
- When no visible label is shown, set `data-aria-label` on the host.
- Use `help-text` with `help-text-type="error"` for validation feedback; the icon and `aria-describedby`-equivalent wiring are handled internally.
