---
title: Searchpopover
summary: Usage, guidelines, and accessibility for the mdc-searchpopover component — a searchfield wired to a popover so results or suggestions can appear below with combobox semantics.
tier: 3
component: searchpopover
---

## Overview

The searchpopover is a widget built on top of `mdc-searchfield` that adds a connected `mdc-popover` below the input. The input is exposed as a combobox that owns the popover, so assistive technologies can announce when the popover is open and which content it controls. It is intended for searches whose results are individually actionable (for example navigating to a different URL).

### When to use

- Use `mdc-searchpopover` when search results or suggestions appear in a popover anchored to the input and each result performs its own action.
- Use `mdc-searchpopover` with slotted chip filters (`mdc-inputchip`) when the search query is refined by removable tokens.

### When not to use

- Do not use `mdc-searchpopover` when search results render inline on the page. Use `mdc-searchfield` instead.
- Do not use `mdc-searchpopover` when the popover is a list of options being filtered down to a selection. Use `mdc-combobox` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/searchpopover/index.js"; // custom element registration
// or via React wrapper
import { Searchpopover } from '@momentum-design/components/dist/react';
```

Minimal markup example — toggle `display-popover` from your own state when there are results to show:

```html
<mdc-searchpopover
  placeholder="Search"
  display-popover
  popover-aria-label="Search results"
>
  <mdc-list>
    <mdc-listitem label="Result 1"></mdc-listitem>
    <mdc-listitem label="Result 2"></mdc-listitem>
  </mdc-list>
</mdc-searchpopover>
```

With chip filters slotted in front of the input text:

```html
<mdc-searchpopover placeholder="Search" popover-aria-label="Suggestions">
  <mdc-inputchip slot="filters" label="From: Ada"></mdc-inputchip>
  <!-- result content in the default slot -->
</mdc-searchpopover>
```

### Content guidance

- Keep result and suggestion labels short and scannable; bold the characters that match the query so users can spot the match.
- Show the popover only when there is something to display — drive `display-popover` from whether results exist, and hide it when the query is empty.
- Give "no results" its own empty-state message inside the popover rather than leaving it blank.

### Property/Attribute details

| Option | Intent |
|---|---|
| `display-popover` | Whether the popover is visible. Drive it from your own state (for example when results are available); it is not toggled automatically. Default `false`. |
| `popover-aria-label` | Accessible name for the popover dialog (for example "Search results"). Required for an announceable popover. |
| `placement` | Popover placement relative to the input: `bottom-start` (default) or `top-start`. |
| `popover-z-index` | Override the popover z-index (default `1000`) when it must sit above other stacking contexts. |

**Note:** searchpopover inherits everything from `mdc-searchfield` (and through it `mdc-input` / `mdc-formfieldwrapper`), notably `name`, `value`, `placeholder`, `readonly`, `disabled`, `soft-disabled`, `clearAriaLabel`, `label`, `data-aria-label`, length constraints, `control-type` (controlled / uncontrolled chip removal), and the inline chip-filter behavior.

### Limitations

- **Popover visibility is yours** — `display-popover` is not toggled automatically; drive it from your own state or the results never appear.
- **Popover needs a name** — without `popover-aria-label` the dialog has no accessible name; always provide one.
- **Not a validation surface** — like `mdc-searchfield`, it inherits no help-text or validation surface; present "no results" as empty-state content inside the popover, not as field errors.

### Notes

- In **uncontrolled** mode (default), removing a chip via the UI removes it from the DOM and dispatches `chipRemove` with the removed chip in `event.detail.chip`. Consumers may listen but do not need to update the DOM themselves.
- In **controlled** mode (`control-type="controlled"`), the chip is NOT removed from the DOM — only the `chipRemove` event is fired, and consumers must remove the chip themselves.
- When the popover hides, focus is returned to the input only if focus is currently inside the searchpopover; if focus moved elsewhere it is left alone.
- The popover ships with `hide-on-outside-click` and `hide-on-escape`; it does not manage `aria-expanded` itself because the input owns that attribute (see Internal ARIA).

## Accessibility

### Built-in features

The internal `<input>` is given `role="combobox"` and is wired to the popover via `aria-controls`, `aria-owns`, and `aria-haspopup="dialog"`. `aria-expanded` reflects the `display-popover` state so assistive technologies announce when results are available. The input's `aria-label` mirrors `data-aria-label`, and `aria-describedby` mirrors `data-aria-describedby` (or the helper-text id when helper text is present). The popover is exposed as a dialog with `aria-label` set from `popover-aria-label`. Chip filters behave exactly as in `mdc-searchfield` — they are removed from the natural tab order and navigated via arrow keys / Home / End / Backspace, and the search input continues to scroll the chips into view as focus moves between them. When the popover closes, focus returns to the input as long as focus was inside the component.

#### Internal ARIA managed by the component

| Element                          | Attribute        | Value                                                                       |
| -------------------------------- | ---------------- | --------------------------------------------------------------------------- |
| Internal `<input>` element       | `role`           | `combobox`                                                                  |
| Internal `<input>` element       | `aria-expanded`  | `true` / `false` mirroring `display-popover`                                |
| Internal `<input>` element       | `aria-controls`  | id of the internal popover                                                  |
| Internal `<input>` element       | `aria-owns`      | id of the internal popover                                                  |
| Internal `<input>` element       | `aria-haspopup`  | `dialog`                                                                    |
| Internal `<input>` element       | `aria-label`     | mirrors `data-aria-label`                                                   |
| Internal `<input>` element       | `aria-describedby` | helper-text id when present, otherwise mirrors `data-aria-describedby`    |
| Internal `<input>` element       | `aria-invalid`   | `true` when `helpTextType` is `error`                                       |
| Internal popover                 | `aria-label`     | `popover-aria-label`                                                        |
| Slotted chip filters             | `tabindex`       | `-1` (focused chip is temporarily set to `0`)                               |

### Implementation requirements

#### Labeling

- Provide a `label` (or `data-aria-label`) so the input/combobox has an accessible name.
- Provide `popover-aria-label` so the popover has an announceable name (for example "Search results" or "Suggestions").
- Provide `clearAriaLabel` so the trailing clear button is announced (for example "Clear search").

## Related components

| Component | Relationship |
|---|---|
| `mdc-searchfield` | Same search input without a popover; use when results render inline on the page. |
| `mdc-combobox` | Filter a fixed list of options down to a single selection. |
| `mdc-popover` | The popover surface searchpopover wires to the input as a dialog. |
| `mdc-inputchip` | Slotted inline filter tokens shown in front of the search text. |
| `mdc-list` / `mdc-listitem` | Typical result or suggestion content placed inside the popover. |
