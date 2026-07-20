---
title: Searchfield
summary: Usage, guidelines, and accessibility for the mdc-searchfield component — a single-line search input that supports inline chip filters and keyboard navigation between chips and text.
tier: 3
component: searchfield
---

## Overview

The searchfield is a single-line text input tailored for search, with a leading search icon and a trailing clear button. Filter chips can be slotted inline, ahead of the caret: they sit in the input flow like characters, sharing the cursor, and can be focused, navigated, and removed with the keyboard.

### When to use

- Use `mdc-searchfield` whenever the user types a query to search a list, table, or other content rendered on the same page.
- Use `mdc-searchfield` with slotted chip filters (`mdc-inputchip`) when the query is refined by removable filter tokens that should appear inline with the input text.

### When not to use

- Do not use `mdc-searchfield` for a search that shows suggestions or results in a popover or listbox. Use `mdc-searchpopover` instead — pairing this component with a popover or listbox is not supported.
- Do not use `mdc-searchfield` for free-form text entry that is not a search query. Use `mdc-input` or `mdc-textarea` instead.

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

### Content guidance

- Give the field a visible label — either the default leading magnifying-glass icon or a text label. A leading icon alone satisfies the labeling requirement; use a text label when several search fields share a page.
- Keep the default search leading icon unchanged so the field is recognizable as search.
- Use `placeholder` only for hints; it disappears once the user types.
- The clear button is required for a search field — provide `clearAriaLabel` (for example "Clear search").

### Property/Attribute details

| Option | Intent |
|---|---|
| `control-type="uncontrolled"` (default) | Whether the component removes filter chips from the DOM itself (`uncontrolled`) or leaves removal to you (`controlled`). Pick `controlled` when chip rendering is state-driven. |
| `placeholder` | Hint shown while the field is empty. |
| `clearAriaLabel` | Accessible name for the required clear button. |
| `label` / `data-aria-label` | Accessible name. A leading icon alone satisfies labeling, but the field still needs an announceable name. |
| `toggletip-text` / `info-icon-aria-label` | Optional info toggletip beside the label. |
| `readonly` / `disabled` / `soft-disabled` | Interaction states inherited from `mdc-input`. |

**Note:** searchfield inherits `name`, `value`, and length constraints from `mdc-input`, but the validation/required surfaces (`help-text`, `help-text-type`, `required`, `validation-message`, `prefix-text`) are removed at connect — it is not a form-validation surface. The `leading-icon` defaults to search and `trailing-button` defaults to a clear button.

### Limitations

- **No popover results** — searchfield cannot host a suggestions or results popover/listbox; use `mdc-searchpopover` for that pattern.
- **No validation or loading state** — help-text, required, and validation surfaces are stripped at connect, and there is no loading state. Handle "no results" with an empty state (not field errors), and place a spinner in the results area while loading.
- **Chips share the caret** — slotted filter chips behave like characters in the input, and keyboard removal (`Backspace` / `Delete` / arrows) is built in. Do not add competing chip focus handling.

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

#### Labeling

- Provide a `label` (or `data-aria-label`) so the input has an accessible name. Without one, the search field has no announceable name.
- Provide a `clearAriaLabel` so the trailing clear button is announced (for example "Clear search").
- Search results that respond to the field must be rendered inline on the page; if results need to appear in a popover, use `mdc-searchpopover` instead — combining `mdc-searchfield` with `mdc-popover` or `mdc-listbox` is not supported.

## Related components

| Component | Relationship |
|---|---|
| `mdc-searchpopover` | Search with a popover/listbox of suggestions or results. |
| `mdc-input` | Free-form single-line text entry that is not a search. |
| `mdc-inputchip` | Slotted inline filter tokens shown in front of the search text. |
| `mdc-textarea` | Multi-line free-form entry. |
