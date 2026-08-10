---
title: Static Toggle
summary: Usage, guidelines, and accessibility for the mdc-statictoggle component — a decorative non-interactive toggle switch used to display on/off state visually.
tier: 3
component: statictoggle
---

## Overview

The static toggle is a decorative, non-interactive toggle switch used to display on/off state in read-only contexts (summary views, confirmation screens, historical form data). It supports on/off, disabled, soft-disabled, and read-only visual states but does not handle user interaction or participate in forms.

### When to use

- Use `mdc-statictoggle` to render the visual shape of a toggle in read-only UIs such as summary screens, confirmation screens, or historical form data.
- Use `mdc-statictoggle` inside lists, cards, or tables where the toggle is part of the display, not a control.

### When not to use

- Do not use `mdc-statictoggle` for an interactive toggle in a form. Use `mdc-toggle` instead.
- Do not use `mdc-statictoggle` where the user must focus, toggle, or submit the value. Use `mdc-toggle` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/statictoggle/index.js"; // custom element registration
// or via React wrapper
import { StaticToggle } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-statictoggle checked size="default"></mdc-statictoggle>
```

### Content guidance

- The static toggle carries no label of its own — convey each item's meaning through the content around it, such as the list-item label when it sits in a list or listbox, or the column header when it sits in a table. It shows only the visual on/off state, so don't rely on the switch position alone.

### Property/Attribute details

| Option | Intent |
|---|---|
| `checked` | `true` renders the "on" state with the check icon; `false` renders the "off" state. |
| `size` | `default` (1.5rem-tall switch) or `compact` (1rem-tall switch with a smaller icon). |
| `disabled` / `soft-disabled` / `readonly` | Purely visual state styles; none change interaction (the control is never interactive). |

### Limitations

- **Not interactive** — cannot be focused, toggled, or activated by the user; wire any interaction on the parent element.
- **Not form-associated** — has no `name`/`value` and is not submitted with a form. Use `mdc-toggle` when form participation is needed.

## Accessibility

### Built-in features

The component renders only the visual switch and does not expose any toggle semantics — it has no role, no `aria-checked`, and is not focusable. Assistive technologies ignore it unless an interactive parent supplies the semantics.

### Implementation requirements

#### Labeling

- The static toggle has no accessible name or state of its own. When the on/off state carries meaning, convey it through the interactive parent's accessible name or adjacent text, or use `mdc-toggle`.

### Notes

Because the component does not expose toggle semantics, screen-reader users will not hear "switch, on" / "off" announcements. When the on/off state carries meaning, expose it through an interactive parent that sets `role="switch"` and `aria-checked`, or describe it in the surrounding content — do not rely on the switch position alone.

## Related components

| Component | Relationship |
|---|---|
| `mdc-toggle` | Interactive, form-associated switch. |
| `mdc-formfieldgroup` | Labeled group for the interactive `mdc-toggle` controls this decorative variant mirrors. |
| `mdc-staticcheckbox` | Decorative checkbox counterpart. |
| `mdc-staticradio` | Decorative radio counterpart. |
