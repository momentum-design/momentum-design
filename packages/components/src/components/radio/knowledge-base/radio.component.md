---
title: Radio
summary: Usage, guidelines, and accessibility for the mdc-radio component — a single, form-associated radio button with label, optional helper text, custom indicator slot, and keyboard navigation.
tier: 3
component: radio
---

## Overview

The radio is a single, form-associated radio button that lets the user pick exactly one option from a set of mutually exclusive choices. Radios that share a `name` attribute are grouped together — selecting one unchecks the others — and arrow-key navigation moves focus and selection between members of the group.

### When to use

- Use `mdc-radio` (typically inside `mdc-radiogroup`) when the user must pick exactly one option from a short, mutually exclusive list.
- Use `mdc-radio` in forms, surveys, and settings where every option should be visible at once.
- Use a standalone `mdc-radio` for per-row selection in tables or cards, where the surrounding context supplies the meaning.

### When not to use

- Do not use `mdc-radio` when the user can select more than one option. Use `mdc-checkbox` instead.
- Do not use `mdc-radio` for a long or on-demand list of options. Use `mdc-select` or `mdc-combobox` instead.
- Do not use `mdc-radio` when each option needs a larger card surface. Use `mdc-cardradio` instead.
- Do not use `mdc-radio` for a binary on/off setting that applies immediately. Use `mdc-toggle` instead.
- Do not use `mdc-radio` for a purely decorative, non-interactive selected dot. Use `mdc-staticradio` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/radio/index.js"; // custom element registration
// or via React wrapper
import { Radio } from '@momentum-design/components/dist/react';
```

Minimal group — wrap radios in `mdc-radiogroup` so they share the same `name` and so the group is announced as a `radiogroup` to assistive technologies:

```html
<mdc-radiogroup label="Notification preference" name="notifications">
  <mdc-radio value="email" label="Email" checked></mdc-radio>
  <mdc-radio value="sms" label="SMS"></mdc-radio>
  <mdc-radio value="push" label="Push notification"></mdc-radio>
</mdc-radiogroup>
```

Standalone radios that share a `name` attribute behave as a group even without `mdc-radiogroup`:

```html
<mdc-radio name="plan" value="free" label="Free"></mdc-radio>
<mdc-radio name="plan" value="pro" label="Pro" checked></mdc-radio>
```

Listen for `change`/`input` to react when the selected option changes; the host emits both events in the same order as the native radio input.

### Content guidance

- Write a clear, concise `label` that is explicit about what selecting the option does; the label always trails the radio input. If a visible label cannot be shown (for example one radio per table row), supply `data-aria-label` instead.
- Keep radio labels short — fewer than four words and never truncated; move extra detail into `help-text` rather than lengthening the label.
- Use `help-text` (one line, around 90 characters) when the choice is complex and needs more explanation, and reserve the info-icon toggletip for non-critical context. If several options would each run past two lines, use a hyperlink or info button to reduce what shows at once.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Marks this radio as the selected option in its group; the component unchecks the others automatically. Pre-select a sensible default where one exists. |
| `name` | Groups radios — those sharing a `name` form one radiogroup with exclusive selection and arrow-key navigation. Required for group behavior. |
| `value` | Value submitted under `name` when this radio is the checked one (defaults to `'on'`). |
| `label` / `data-aria-label` | Visible label beside the radio, or the accessible name when no visible label is shown (for example table rows). |
| `required` | At least one radio in the group must be checked for validity. No red asterisk is rendered on radios. |
| `disabled` / `soft-disabled` / `readonly` | `disabled` removes the control from the tab order; `soft-disabled` looks disabled but stays focusable so assistive tech can still reach it; `readonly` blocks changes but stays focusable. |
| `validation-message` | Custom validity shown in a native tooltip on submit; for an inline group message, use `mdc-radiogroup` `help-text`. |

**Note:** `name`, `value`, and `validation-message` participate in form submission via ElementInternals (`formResetCallback` unchecks the group; `formStateRestoreCallback` rechecks the matching value). A custom indicator can be slotted into `indicator`. Events: `input`, `change`, `focus`.

### Limitations

- **No required asterisk** — a `required` radio renders no visible indicator, even though native validation still applies; convey "required" in the group label or `help-text`.
- **No inline validation message** — a single radio does not render a visible validation message; wrap the group in `mdc-radiogroup` and use its `help-text`.
- **Group needs a shared name** — without a shared `name` (or an `mdc-radiogroup`), exclusive selection and arrow-key navigation do not work.

## Accessibility

### Built-in features

The host element has `role="radio"` and `aria-checked` is kept in sync with the `checked` property. The component manages roving tab focus within the group automatically: if any radio in the group is checked, only the checked one is tabbable (`tabindex="0"`) and the rest are removed from the tab sequence (`tabindex="-1"`); if no radio is checked, the first non-disabled radio in the group is tabbable. When spatial navigation is active, every radio in the group is tabbable.

Keyboard interaction inside a group: `Arrow Down`/`Arrow Right` moves focus and selection to the next enabled radio; `Arrow Up`/`Arrow Left` moves focus and selection to the previous enabled radio (both wrap around the ends). `Space` selects the focused radio. `Enter` submits the surrounding form via `form.requestSubmit()`. When spatial navigation is active, arrow keys are left to the spatial navigation context and only `Enter` activates the focused radio.

A custom indicator slotted into `indicator` is supported: when content is slotted into the indicator slot, the focus ring is shifted from the default static radio to the entire host element so keyboard focus stays visible.

#### Internal ARIA managed by the component

| Element        | Attribute      | Value                                                                                                            |
| -------------- | -------------- | ---------------------------------------------------------------------------------------------------------------- |
| Radio host     | `role`         | `radio`                                                                                                          |
| Radio host     | `aria-checked` | mirrors `checked` (`"true"` / `"false"`)                                                                         |
| Radio host     | `aria-label`   | mirrors `label` (or `data-aria-label` when no label)                                                             |
| Radio host     | `tabindex`     | `0` for the checked radio (or the first enabled radio when none is checked); `-1` for the others; `0` for all in spatial-navigation mode |
| Native label   | `for`          | the `id` of the radio host                                                                                       |

### Implementation requirements

#### General

- Group related radios with the same `name` attribute, or wrap them in `mdc-radiogroup`. Without a shared `name`, exclusive selection and arrow-key navigation do not work.
- To show a validation message for an invalid group, wrap the radios in `mdc-radiogroup` and set its `help-text` — the radio itself does not render a visible validation message.
- Pre-select a sensible default radio in a group when a common or recommended choice exists — it speeds up the task and avoids empty-submission errors. Skip the default only when there is no obvious answer (for example table-row selections).

#### Labeling

- Provide a `label` on every radio describing the option. When no visible label is present, set `data-aria-label`.
- Provide a label on the surrounding `mdc-radiogroup` describing what the group represents.

## Related components

| Component | Relationship |
|---|---|
| `mdc-radiogroup` | Labeled wrapper that groups radios and carries the group label, `name`, and validation. |
| `mdc-staticradio` | Decorative, non-interactive radio for read-only display. |
| `mdc-checkbox` | Select any number of options instead of exactly one. |
| `mdc-cardradio` | Radio rendered as a larger card surface. |
| `mdc-toggle` | Binary on/off control that applies immediately. |
| `mdc-select` / `mdc-combobox` | Pick one option from a long or on-demand list. |
