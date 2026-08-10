---
title: Combobox
summary: Usage, guidelines, and accessibility for the mdc-combobox component — a text-based dropdown that lets users either type to filter or pick from a predefined list of options.
tier: 3
component: combobox
---

## Overview

The combobox is a text-based dropdown control that lets the user type to filter a predefined list of options, then pick one. Typing narrows the visible options based on the configured `filter` strategy.

The component is form-associated and participates in native form submission, validation, and reset.

### When to use

- Use `mdc-combobox` when the user must pick a single value from a long list and typing to filter is faster than scanning.
- Use it when a predictive "starts with" filter (or a custom filter function) genuinely helps the user — short lists rarely justify a combobox.
- Use it when the option list is fetched dynamically (set `filter="none"` and update slotted options as data arrives).

### When not to use

- Do not use `mdc-combobox` when the user should only pick from a fixed list without typing. Use `mdc-select` instead.
- Do not use `mdc-combobox` for searching content rather than picking a single value from a known set. Use `mdc-searchfield` instead.
- Do not use `mdc-combobox` when free-form text is the goal and no constrained option list applies. Use `mdc-input` instead.
- Do not use `mdc-combobox` for a handful of options that should all be visible at once. Use `mdc-radiogroup` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/combobox/index.js"; // custom element registration
// or via React wrapper
import { Combobox, SelectListBox, Option, OptGroup } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-combobox label="Country" name="country" placeholder="Start typing…">
  <mdc-selectlistbox>
    <mdc-option value="at" label="Austria"></mdc-option>
    <mdc-option value="de" label="Germany"></mdc-option>
    <mdc-option value="ch" label="Switzerland"></mdc-option>
  </mdc-selectlistbox>
</mdc-combobox>
```

Listen for `change` to react to a committed selection and `input` to react to every keystroke or filter change.

Structural requirements:

- Slot every `mdc-option` (and `mdc-optgroup`) inside `mdc-selectlistbox`. `mdc-selectlistbox` owns the `role="listbox"` and is required for correct screen-reader behavior; placing `mdc-option` directly inside the combobox breaks listbox semantics.
- Give every `mdc-option` a unique `value` — form submission, programmatic `value` updates, and "starts with" filtering all depend on it.
- Place per-option `mdc-tooltip` siblings **outside** `mdc-selectlistbox` and link them via `triggerid` pointing at the option's `id`. Tooltips slotted inside the listbox break announcement and focus order.

Filtering modes:

- Default (`filter="match-starts-with"`) — options whose label starts with the typed text are shown.
- Custom function (`filter={(option, inputValue) => boolean}`) — full control over the match logic, useful for multi-token or fuzzy matching.
- External (`filter="none"`) — the combobox does not filter; update the slotted options as data arrives (e.g. from an API).

Controlled value:

- When the consumer needs to drive the value externally (e.g. server-side filtering), set `control-type="controlled"` on a wrapping `mdc-controltypeprovider` (or use `filter="none"`). The combobox then emits `input` and `change` but does not mutate its own `value` — the parent is expected to update `value` to reflect the selection.

### Content guidance

- Write a `label` that names what the user is choosing ("Country"), not an instruction.
- Set `placeholder` to a short hint about the expected input ("Start typing a country…"), never as a replacement for the label.
- Set `no-result-text` to a short message shown when the filter excludes every option ("No matches"). When omitted, the dropdown closes silently on empty results.
- Set `invalid-custom-value-text` to a short recovery message for when the user commits a value that matches no option ("Pick a value from the list").

### Property/Attribute details

| Option | Intent |
|---|---|
| `value` | The selected option's value. Setting it updates the visible selection without firing `change`. |
| `name` | Form field name submitted with the selected value. |
| `placeholder` | Hint shown when no value is selected. |
| `filter="match-starts-with"` (default) | How typed text narrows the list: the default shows options whose label starts with the input; `none` disables filtering (drive options externally); a `(option, inputValue) => boolean` function gives full control for fuzzy or multi-token matching. |
| `no-result-text` | Message shown inside the dropdown when nothing matches; omit to close the dropdown silently instead. |
| `invalid-custom-value-text` | Error shown when the user commits a value that matches no option. Set it when a typed-but-invalid value should be flagged rather than silently reverted. |
| `help-text` + `help-text-type` | Helper or validation text below the field; the type (`default`, `error`, `warning`, `success`, `priority`) drives the icon and error styling. |
| `required` + `validation-message` | Marks the field required and reports `validation-message` when submitted empty. |
| `disabled` / `readonly` | `disabled` removes the input from the tab order and blocks the dropdown; `readonly` stays focusable and still submits, but the dropdown cannot open and typing is suppressed. |
| `control-type="controlled"` | Via `mdc-controltypeprovider`, the combobox emits `input`/`change` but does not mutate its own `value`; the parent drives `value`. Use for server-side or externally managed filtering. |
| `placement="bottom-start"` (default) | Popover side relative to the input; switch to `top-start` when space below is constrained. |
| `strategy` + `boundary` | Popover positioning controls; pair `strategy="fixed"` with a `boundary` to avoid clipping inside scroll containers. |
| `toggletip-text` + `info-icon-aria-label` | Opt-in info button beside the label that opens an `mdc-toggletip`; provide the aria-label when set. |
| `auto-focus-on-mount` | Focuses the input on first render. Use sparingly — only when the combobox is the primary task on the view. |

**Note:** `value`/`selected` live on `mdc-option`; grouping comes from `mdc-optgroup`. `popover-z-index` and `backdrop-append-to` match the shared popover surface.

### Limitations

- **No free-form custom values** — a typed value that matches no option is not kept as-is: on blur the combobox commits a highlighted or exactly-matching option, otherwise reverts to the last value or shows `invalid-custom-value-text`. There is no "allow custom value" mode.
- **Single select only** — the combobox binds one value and has no multi-select. Use `mdc-listbox` with `multiple` when several values are needed.
- **Listbox wrapper required** — options must sit inside `mdc-selectlistbox`; placing `mdc-option` directly in the combobox drops the listbox role and focus semantics.
- **External filtering is manual** — with `filter="none"` or controlled mode the combobox does no filtering; you must add, remove, or update slotted options as data arrives.
- **Popover covers help text** — the open dropdown renders directly below the input and overlaps any helper or validation text until it closes.

## Accessibility

### Built-in features

The component implements the [WAI-ARIA combobox autocomplete-list pattern](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/). The visible input has `role="combobox"`, the slotted `mdc-selectlistbox` provides `role="listbox"`, and the combobox wires `aria-controls`, `aria-expanded`, `aria-haspopup`, and `aria-activedescendant`-style focus highlighting (via `data-focused` on the option) between them.

Keyboard interaction:

- `ArrowDown` / `ArrowUp` opens the dropdown (if closed) and moves the visual highlight to the next/previous enabled option (wraps at the ends).
- `Enter` selects the highlighted option, closes the dropdown, and dispatches `change`. In spatial navigation mode, `Enter` first opens the dropdown.
- `Escape` clears the highlighted option. If no options are visible (and no `no-result-text`), it also clears the typed input.
- `Tab` closes the dropdown and moves focus to the next focusable element.
- `Home` / `End` clear the highlighted option (the native input then handles caret movement).
- Typing filters the visible options according to `filter`, opens the dropdown if closed, and dispatches `input`.

Blur behavior: on blur, the combobox commits the currently highlighted option if any, otherwise the typed text if it exactly matches an option label, otherwise reverts to the last committed value, otherwise (if `invalid-custom-value-text` is set) shows the error message.

When `disabled` is `true`, the input is removed from the tab order and the dropdown cannot open. When `readonly` is `true`, the input remains focusable, the dropdown cannot open, and the form value is still submitted.

The `label` (or `data-aria-label`) provides the accessible name. `help-text` is linked via `aria-describedby`.

#### Internal ARIA managed by the component

| Element                | Attribute              | Value                                                                                  |
| ---------------------- | ---------------------- | -------------------------------------------------------------------------------------- |
| Visible input          | `role`                 | `combobox`                                                                             |
| Visible input          | `aria-haspopup`        | `listbox`                                                                              |
| Visible input          | `aria-autocomplete`    | `list`                                                                                 |
| Visible input          | `aria-expanded`        | `true` when the dropdown is open, otherwise `false`                                    |
| Visible input          | `aria-controls`        | id of the slotted listbox                                                              |
| Visible input          | `aria-invalid`         | `true` when `help-text-type="error"`, otherwise `false`                                |
| Visible input          | `aria-required`        | mirrors `required`                                                                     |
| Visible input          | `aria-readonly`        | mirrors `readonly`                                                                     |
| Visible input          | `aria-disabled`        | mirrors `disabled`                                                                     |
| Visible input          | `aria-label`           | mirrors `data-aria-label`                                                              |
| Visible input          | `aria-labelledby`      | id of the label when `label` is set                                                    |
| Visible input          | `aria-describedby`     | id of the help text when `help-text` is set                                            |
| Visible input          | `tabindex`             | `0` when enabled; `-1` when `disabled`                                                 |
| Trigger button         | `aria-expanded`        | mirrors the dropdown open state                                                        |
| Trigger button         | `aria-label`           | mirrors `data-aria-label`                                                              |
| Trigger button         | `tabindex`             | `-1` (not in the tab order; the input is the single tab stop)                          |
| Slotted listbox        | `id`                   | generated id linked from the input's `aria-controls`                                   |
| Slotted listbox        | `aria-label`           | mirrors `label` or `data-aria-label`                                                   |
| Focused option         | `data-focused`         | present while the option is the visual active descendant                               |
| Focused option         | `aria-selected`        | `true` while highlighted, `false` otherwise                                            |
| Native hidden input    | `aria-hidden`          | `true` (only used to participate in form submission)                                   |

### Implementation requirements

#### General

- Wrap options in `mdc-selectlistbox`. Without it, the listbox role and option focus semantics are missing.
- Place per-option `mdc-tooltip` siblings outside `mdc-selectlistbox` and link them via `triggerid` so they do not break listbox navigation.
- Set a unique `value` on every `mdc-option`; form submission and value-based selection rely on it.
- When filtering is driven externally (API, server), set `filter="none"` and update slotted options as data arrives — the combobox will not filter on its own.
- When using `control-type="controlled"`, listen to `input` and `change` and drive the `value` attribute from the parent; the combobox will not mutate its own value.

#### Labeling

- Provide a `label` (or `data-aria-label`) — `role="combobox"` requires an accessible name.
- Use `help-text` with `help-text-type="error"` for validation feedback; the icon and `aria-describedby` association are wired automatically.
- Pair `no-result-text` and `invalid-custom-value-text` thoughtfully: the first describes "nothing matches your filter", the second describes "what you typed is not a valid option". Pick wording that helps the user recover.

## Related components

| Component | Relationship |
|---|---|
| `mdc-select` | Same dropdown surface without the editable input — pick from a fixed list, no typing. |
| `mdc-selectlistbox` | Required wrapper carrying `role="listbox"` around the slotted options. |
| `mdc-option` | A single selectable value inside the listbox. |
| `mdc-optgroup` | Labeled grouping of options within the listbox. |
| `mdc-searchfield` | For searching content rather than choosing one value from a known set. |
| `mdc-controltypeprovider` | Wraps the combobox to enable `control-type="controlled"` for externally driven values. |
