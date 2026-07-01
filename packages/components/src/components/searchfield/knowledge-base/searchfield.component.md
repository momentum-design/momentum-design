---
title: Searchfield
summary: Usage, guidelines, and accessibility for the mdc-searchfield component — a single-line search input that supports inline chip filters and keyboard navigation between chips and text.
tier: 3
component: searchfield
---

## Overview

The searchfield is a single-line text input tailored for search. It renders a leading search icon, a trailing clear button, and an inline area in front of the text caret where chip filters can be slotted. Chips behave like single characters in the input flow: they share the cursor with the text and can be focused, navigated, and removed with the keyboard.

### When to use

- Use it whenever the user types a query to search a list, table, or other content rendered on the same page.
- Use it with slotted chip filters (`mdc-inputchip`, `mdc-chip`, `mdc-alertchip`) when the search query is refined by removable filter tokens that should appear inline with the input text.

### When not to use

- Do not use it for a search that opens a popover / listbox of suggestions or results. Use `mdc-searchpopover` instead — pairing this component with a Popover or Listbox is not supported.
- Do not use it for free-form text entry that is not a search query — use `mdc-input` (or `mdc-textarea`) directly.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/searchfield/index.js"; // custom element registration
// or via React wrapper
import { Searchfield } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-searchfield placeholder="Search messages"></mdc-searchfield>
```

With chip filters slotted in front of the input text:

```html
<mdc-searchfield placeholder="Search">
  <mdc-inputchip slot="filters" label="From: Ada"></mdc-inputchip>
  <mdc-inputchip slot="filters" label="Has: attachment"></mdc-inputchip>
</mdc-searchfield>
```

### Property/Attribute details

Inherited from `mdc-input` (and `mdc-formfieldwrapper`) — see those components for the full list; the ones most relevant to searchfield are:

- `name`, `value` — form-control identity and current text value.
- `placeholder` — placeholder text displayed when empty.
- `readonly`, `disabled`, `soft-disabled`, `autofocus` — visual / interaction states.
- `clearAriaLabel` — accessible name for the trailing clear button.
- `max-length`, `min-length` — input length constraints.
- `label`, `toggletip-text`, `info-icon-aria-label` — label, optional toggletip text, and the accessible name for the info-icon button when the toggletip is enabled.

The searchfield itself adds:

- `control-type` — `controlled` or `uncontrolled` (default). Controls how chip removal interacts with the DOM (see Notes below).
- The `leading-icon` defaults to a search icon, the `trailing-button` defaults to a clear button, and the validation/required surfaces (`help-text`, `help-text-type`, `required`, `validation-message`, `prefix-text`) are removed at connect time so they never render — searchfield is not a form-validation surface.

### Notes

- In **uncontrolled** mode (default), when a chip is removed via the UI the component removes the chip from the DOM and dispatches `chipRemove` with the removed chip in `event.detail.chip`. Consumers may listen to the event but do not need to update the DOM themselves.
- In **controlled** mode (`control-type="controlled"`), the component does NOT remove the chip from the DOM. It still dispatches `chipRemove`; consumers must remove the chip themselves (typically by updating the state that drives which chips are rendered).

## Accessibility

### Built-in features

The searchfield uses a native `<input type="search">` so screen readers announce it as a search edit field. The slotted chip filters are removed from the natural tab order (`tabindex="-1"`) and reached from the input via keyboard navigation: with the cursor at position 0, `ArrowLeft` focuses the trailing chip; `Backspace` removes the trailing chip; `Home` focuses the first chip from anywhere in the input. Once a chip is focused, `ArrowLeft` / `ArrowRight` move between chips, `Backspace` / `Delete` removes the focused chip, `Escape` clears the whole input, `Home` jumps to the first chip, `End` returns to the input with the caret at the end, and any printable character automatically returns focus to the input so the character is typed there. Removing a chip moves focus to the next chip (or back to the input if no chip remains). When the input regains focus from outside the component the chips area scrolls back to the start so the chips remain visible. `Escape` from the input clears the text and removes all chips, and the `clear` event is fired so consumers can react.

#### Internal ARIA managed by the component

| Element                          | Attribute   | Value                                                           |
| -------------------------------- | ----------- | --------------------------------------------------------------- |
| Internal `<input>` element       | `type`      | `search`                                                        |
| Internal `<input>` element       | `aria-label`| label / `data-aria-label` (inherited from input)                |
| Slotted chip filters             | `tabindex`  | `-1` (focused chip is temporarily set to `0`)                   |
| Trailing clear button            | `aria-label`| `clearAriaLabel`                                                |

### Implementation requirements

#### Labelling

- Provide a `label` (or `data-aria-label`) so the input has an accessible name. Without one, the search field has no announceable name.
- Provide a `clearAriaLabel` so the trailing clear button is announced (for example "Clear search").
- Search results that respond to the field must be rendered inline on the page; if results need to appear in a popover, use `mdc-searchpopover` instead — combining `mdc-searchfield` with `mdc-popover` or `mdc-listbox` is not supported.
