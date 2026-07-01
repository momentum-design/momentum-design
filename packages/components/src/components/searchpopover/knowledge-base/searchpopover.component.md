---
title: Searchpopover
summary: Usage, guidelines, and accessibility for the mdc-searchpopover component — a searchfield wired to a popover so results or suggestions can appear below with combobox semantics.
tier: 3
component: searchpopover
---

## Overview

The searchpopover is a widget built on top of `mdc-searchfield` that adds a connected `mdc-popover` below the input. The input is exposed as a combobox that owns the popover, so assistive technologies can announce when the popover is open and which content it controls. It is intended for searches whose results are individually actionable (for example navigating to a different URL).

### When to use

- Use it when search results or suggestions appear in a popover anchored to the input and each result performs its own action.
- Use it together with chip filters (`mdc-inputchip`, `mdc-chip`, `mdc-alertchip`) when the search query is refined by removable tokens.

### When not to use

- Do not use it when search results render inline on the page — use `mdc-searchfield` instead.
- Do not use it when the popover is a list of options being filtered down by the input — use `mdc-combobox` instead.

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

### Property/Attribute details

Inherits everything from `mdc-searchfield` (and through it from `mdc-input` / `mdc-formfieldwrapper`), notably `name`, `value`, `placeholder`, `readonly`, `disabled`, `soft-disabled`, `clearAriaLabel`, `label`, `data-aria-label`, `max-length`, `min-length`, `control-type` (controlled / uncontrolled chip removal), and the inline chip-filter behaviour.

The searchpopover adds:

- `display-popover` — when `true`, the popover is visible. Default `false`. Consumers drive this from their own state (for example based on whether results are available).
- `placement` — popover placement relative to the input. `top-start` or `bottom-start`. Default `bottom-start`.
- `popover-z-index` — z-index for the popover. Override when the popover must sit above other stacking contexts. Default `1000` (applied by the popover).
- `popover-aria-label` — accessible name applied to the popover (for example "Search results"). Required for an announceable popover.

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

#### Labelling

- Provide a `label` (or `data-aria-label`) so the input/combobox has an accessible name.
- Provide `popover-aria-label` so the popover has an announceable name (for example "Search results" or "Suggestions").
- Provide `clearAriaLabel` so the trailing clear button is announced (for example "Clear search").
