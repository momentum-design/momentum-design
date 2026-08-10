---
title: Static Checkbox
summary: Usage, guidelines, and accessibility for the mdc-staticcheckbox component — a decorative, non-interactive checkbox for read-only or summary views.
tier: 3
component: staticcheckbox
---

## Overview

The static checkbox is a decorative, non-interactive checkbox used to display checkbox states in read-only contexts (summary views, confirmation screens, historical form data). It supports checked, indeterminate, disabled, soft-disabled, and read-only visual states but does not handle user interaction or participate in forms.

### When to use

- Use `mdc-staticcheckbox` to render the visual shape of a checkbox in read-only UIs such as summary screens, confirmation screens, or historical form data.
- Use `mdc-staticcheckbox` inside lists, cards, or tables where the checkbox is part of the display, not a control.

### When not to use

- Do not use `mdc-staticcheckbox` for an interactive checkbox in a form. Use `mdc-checkbox` instead.
- Do not use `mdc-staticcheckbox` where the user must focus, toggle, or submit the value. Use `mdc-checkbox` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/staticcheckbox/index.js"; // custom element registration
// or via React wrapper
import { StaticCheckbox } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-staticcheckbox checked>Newsletter subscription</mdc-staticcheckbox>
<mdc-staticcheckbox indeterminate>Partial selection</mdc-staticcheckbox>
<mdc-staticcheckbox disabled>Unavailable option</mdc-staticcheckbox>
```

### Content guidance

- The static checkbox carries no label of its own — convey each item's meaning through the content around it, such as the list-item label when it sits in a list or listbox, or the column header when it sits in a table. It shows only the visual checked or indeterminate state, so don't rely on the check mark alone.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Renders the check mark for the selected state. |
| `indeterminate` | Renders the mixed mark for "partial selection" rollups; wins when both `checked` and `indeterminate` are set. |
| `disabled` / `soft-disabled` / `readonly` | Purely visual state styles; none change interaction (the control is never interactive). |

### Limitations

- **Not interactive** — cannot be focused, toggled, or activated by the user; wire any interaction on the parent element.
- **Not form-associated** — has no `name`/`value` and is not submitted with a form. Use `mdc-checkbox` when form participation is needed.

## Accessibility

### Built-in features

The component renders the slotted label content inside its light DOM but does not expose any checkbox semantics — it has no role, no `aria-checked`, and is not focusable. Screen readers will read any slotted label as plain text.

### Implementation requirements

#### Labeling

- The static checkbox has no accessible name or state of its own. When the checked or indeterminate state carries meaning, convey it through the interactive parent's accessible name or adjacent text, or use `mdc-checkbox`.

### Notes

Because the component does not expose checkbox semantics, screen-reader users will not hear "checkbox, checked" / "unchecked" / "mixed" announcements. When the checked or indeterminate state carries meaning, expose it through the interactive `mdc-checkbox`, or describe it in the surrounding content — do not rely on the check mark alone.

## Related components

| Component | Relationship |
|---|---|
| `mdc-checkbox` | Interactive, form-associated checkbox. |
| `mdc-formfieldgroup` | Labeled group for the interactive `mdc-checkbox` controls this decorative variant mirrors. |
| `mdc-staticradio` | Decorative radio counterpart. |
| `mdc-statictoggle` | Decorative toggle counterpart. |
