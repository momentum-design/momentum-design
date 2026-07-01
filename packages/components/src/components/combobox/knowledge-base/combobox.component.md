---
title: Combobox
summary: Usage, guidelines, and accessibility for the mdc-combobox component — a text-based dropdown that lets users either type to filter or pick from a predefined list of options.
tier: 3
component: combobox
---

## Overview

The combobox is a text-based dropdown control that lets the user type to filter a predefined list of options, then pick one. Typing narrows the visible options based on the configured `filter` strategy; clicking the trigger button or pressing arrow keys opens the dropdown without filtering.

The component is form-associated and participates in native form submission, validation, and reset.

It is designed to be used with `mdc-option` (individual options) and `mdc-optgroup` (grouped options) placed inside an `mdc-selectlistbox` slotted child — `mdc-selectlistbox` owns the `role="listbox"` and is required for correct screen-reader behaviour.

When the consumer needs to drive the value externally (e.g. server-side filtering), set `control-type="controlled"` on a wrapping `mdc-controltypeprovider` (or use `filter="none"`): the combobox will emit `input` and `change` events but will not mutate its own `value` — the parent component is expected to update `value` to reflect the selection.

### When to use

- Use `mdc-combobox` when the user must pick a single value from a long list and typing to filter is faster than scanning.
- Use it when a predictive "starts with" filter (or a custom filter function) genuinely helps the user — short lists rarely justify a combobox.
- Use it when the option list is fetched dynamically (set `filter="none"` and update slotted options as data arrives).

### When not to use

- Use `mdc-select` when the user should only pick from a fixed list without typing.
- Use `mdc-searchfield` when the user is searching for content rather than picking a single value from a known set.
- Use `mdc-input` when free-form text is the goal and no constrained option list applies.
- Use `mdc-radiogroup` when there are only a handful of options and they should all be visible at once.

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

- Slot every `mdc-option` (and `mdc-optgroup`) inside `mdc-selectlistbox`. `mdc-selectlistbox` owns the `role="listbox"` and is required for correct screen-reader behaviour; placing `mdc-option` directly inside the combobox breaks listbox semantics.
- Give every `mdc-option` a unique `value` — form submission, programmatic `value` updates, and "starts with" filtering all depend on it.
- Place per-option `mdc-tooltip` siblings **outside** `mdc-selectlistbox` and link them via `triggerid` pointing at the option's `id`. Tooltips slotted inside the listbox break announcement and focus order.

Filtering modes:

- Default (`filter="match-starts-with"`) — options whose label starts with the typed text are shown.
- Custom function (`filter={(option, inputValue) => boolean}`) — full control over the match logic, useful for multi-token or fuzzy matching.
- External (`filter="none"`) — the combobox does not filter; update the slotted options as data arrives (e.g. from an API).

### Content guidance

- Provide a `label` describing what the user is selecting; reach for `data-aria-label` only when a visible label is not possible.
- Set `placeholder` to a short hint about the expected input ("Start typing a country…"), not as a replacement for the label.
- Set `no-result-text` to a short message shown when filtering excludes every option ("No matches"). When omitted, the dropdown closes silently on empty results.
- Set `invalid-custom-value-text` to a short validation message used when the user types a value that does not match any option, leaves the field, and has never committed a value (e.g. "Pick a value from the list").

### Property/Attribute details

- `value` — the value of the selected option. Setting this attribute updates the visible selection without firing `change`.
- `name` — form field name submitted with the form.
- `placeholder` — placeholder text shown when no value is selected.
- `placement` — popover placement relative to the input. `bottom-start` (default) or `top-start`.
- `filter` — filter strategy: `match-starts-with` (default), `none` (no filtering), or a custom `(option, inputValue) => boolean` function. Only string values are reflected as the `filter` attribute.
- `no-result-text` — text shown inside the dropdown when no options match the filter; omit to hide the dropdown silently.
- `invalid-custom-value-text` — error message used when the user enters a value that does not match any option and the field has no previously committed value.
- `boundary` — clipping ancestor used by the popover (`clippingAncestors` by default, or any CSS selector). Used together with `strategy` to keep the popover visible inside scrollable parents.
- `strategy` — popover positioning strategy. `absolute` (default) or `fixed`. Use `fixed` together with a non-default `boundary` to avoid clipping inside scroll containers.
- `popover-z-index` — z-index override for the popover.
- `backdrop-append-to` — id of the element the popover backdrop is appended to (defaults to the combobox's parent).
- `label` — visible label rendered above the field. Used as the accessible name when set.
- `data-aria-label` — accessible name fallback when no visual label is rendered.
- `help-text` — helper or validation text below the field.
- `help-text-type` — `default`, `error`, `warning`, `success`, or `priority`. Drives the helper icon and error styling.
- `toggletip-text` / `toggletip-placement` / `toggletip-strategy` / `info-icon-aria-label` — opt-in info icon button next to the label that opens an `mdc-toggletip`.
- `required` — when `true`, the form is invalid unless a value is selected.
- `validation-message` — custom validation message reported through `setCustomValidity` when the combobox is required but empty.
- `disabled` — fully disabled; the host is removed from the tab order and the popover cannot open.
- `readonly` — non-interactive but focusable; the popover cannot open and typing is suppressed, but the current value is still submitted.
- `control-type` — when set to `controlled` (via `mdc-controltypeprovider`), the combobox emits `input` / `change` but does not update its own `value`; the parent must drive `value` in response.
- `autoFocusOnMount` — when `true`, focuses the visible combobox input on first render.

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

Blur behaviour: on blur, the combobox commits the currently highlighted option if any, otherwise the typed text if it exactly matches an option label, otherwise reverts to the last committed value, otherwise (if `invalid-custom-value-text` is set) shows the error message.

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

#### Labelling

- Provide a `label` (or `data-aria-label`) — `role="combobox"` requires an accessible name.
- Use `help-text` with `help-text-type="error"` for validation feedback; the icon and `aria-describedby` association are wired automatically.
- Pair `no-result-text` and `invalid-custom-value-text` thoughtfully: the first describes "nothing matches your filter", the second describes "what you typed is not a valid option". Pick wording that helps the user recover.
