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
- Use it inside lists or cards where the radio is part of the display, not a control.

### When not to use

- Use `mdc-radio` for any interactive radio in a form.
- Do not use `mdc-staticradio` as a replacement for `mdc-radio` — it cannot be focused, toggled, or submitted with a form.

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

### Property/Attribute details

- `checked` — when `true`, renders the inner filled circle to indicate the checked state. Default `false`.
- `disabled` — when `true`, applies the standard disabled appearance. Purely visual.
- `soft-disabled` — when `true`, applies a less prominent disabled appearance. Purely visual.
- `readonly` — when `true`, applies the read-only appearance. Purely visual.

### Limitations

- Not interactive: cannot be focused, toggled, or activated by the user.
- Not form-associated: has no `name`/`value` and is not submitted with a form. Use `mdc-radio` (inside an `mdc-radiogroup`) when form participation is needed.
- Has no group semantics — multiple `mdc-staticradio` elements do not enforce mutual exclusivity. Display the appropriate `checked` state directly on the elements.

## Accessibility

### Built-in features

The component renders the slotted label content inside its light DOM but does not expose any radio semantics — it has no role, no `aria-checked`, and is not focusable. Screen readers will read any slotted label as plain text.

### Notes

Because the component does not expose radio semantics, screen-reader users will not hear "radio, selected" / "not selected" announcements. When the checked state carries meaning, include that state in the surrounding text (e.g. write "Email: selected" instead of relying on the visual filled circle alone), or use the interactive `mdc-radio` inside an `mdc-radiogroup` instead.
