---
title: Static Radio
summary: Usage, guidelines, and accessibility for the mdc-staticradio component — a decorative, non-interactive radio button for read-only or summary views.
tier: 3
component: staticradio
---

## Overview

The static radio is a decorative, non-interactive radio button used to display radio states in read-only contexts (summary views, confirmation screens, historical form data). It supports checked, disabled, soft-disabled, and read-only visual states but does not handle user interaction or participate in forms.

### When to use

- Use `mdc-staticradio` to render the visual shape of a radio button in read-only UIs such as summary screens, confirmation screens, or historical form data.
- Use `mdc-staticradio` inside lists, cards, or tables where the radio is part of the display, not a control.

### When not to use

- Do not use `mdc-staticradio` for an interactive radio in a form. Use `mdc-radio` (inside `mdc-radiogroup`) instead.
- Do not use `mdc-staticradio` where the user must focus, toggle, or submit the value. Use `mdc-radio` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/staticradio/index.js"; // custom element registration
// or via React wrapper
import { StaticRadio } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-staticradio checked>Email</mdc-staticradio>
<mdc-staticradio>SMS</mdc-staticradio>
<mdc-staticradio disabled>Pager</mdc-staticradio>
```

### Content guidance

- The static radio carries no label of its own — convey each item's meaning through the content around it, such as the list-item label when it sits in a list or listbox, or the column header when it sits in a table. It shows only the visual selected state, so don't rely on the filled circle alone.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | Renders the filled inner circle for the selected state. |
| `disabled` / `soft-disabled` / `readonly` | Purely visual state styles; none change interaction (the control is never interactive). |

### Limitations

- **Not interactive** — cannot be focused, toggled, or activated by the user; wire any interaction on the parent element.
- **Not form-associated** — has no `name`/`value` and is not submitted with a form. Use `mdc-radio` (inside `mdc-radiogroup`) when form participation is needed.
- **No group semantics** — multiple `mdc-staticradio` elements do not enforce mutual exclusivity; set the correct `checked` state on each directly.

## Accessibility

### Built-in features

The component renders the slotted label content inside its light DOM but does not expose any radio semantics — it has no role, no `aria-checked`, and is not focusable. Screen readers will read any slotted label as plain text.

### Implementation requirements

#### Labeling

- The static radio has no accessible name or state of its own. When the checked state carries meaning, convey it through the interactive parent's accessible name or adjacent text, or use `mdc-radio` inside `mdc-radiogroup`.

### Notes

Because the component does not expose radio semantics, screen-reader users will not hear "radio, selected" / "not selected" announcements. When the checked state carries meaning, expose it through the interactive `mdc-radio` inside an `mdc-radiogroup`, or describe it in the surrounding content — do not rely on the filled circle alone.

## Related components

| Component | Relationship |
|---|---|
| `mdc-radio` | Interactive, form-associated radio for real selection. |
| `mdc-radiogroup` | Groups interactive radios with a label and validation. |
| `mdc-staticcheckbox` | Decorative checkbox counterpart. |
| `mdc-statictoggle` | Decorative toggle counterpart. |
