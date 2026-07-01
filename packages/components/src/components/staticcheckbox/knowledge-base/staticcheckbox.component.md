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
- Use it inside lists or cards where the checkbox is part of the display, not a control.

### When not to use

- Use `mdc-checkbox` for any interactive checkbox in a form.
- Do not use `mdc-staticcheckbox` as a replacement for `mdc-checkbox` — it cannot be focused, toggled, or submitted with a form.

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

### Property/Attribute details

- `checked` — when `true`, renders the checked check mark. Default `false`.
- `indeterminate` — when `true`, renders the indeterminate (mixed) mark. Typically used for "partial selection" rollups. Default `false`. When both `checked` and `indeterminate` are set, the indeterminate mark wins.
- `disabled` — when `true`, applies the standard disabled appearance. Purely visual.
- `soft-disabled` — when `true`, applies a less prominent disabled appearance. Purely visual.
- `readonly` — when `true`, applies the read-only appearance. Purely visual.

### Limitations

- Not interactive: cannot be focused, toggled, or activated by the user.
- Not form-associated: has no `name`/`value` and is not submitted with a form. Use `mdc-checkbox` instead when form participation is needed.

## Accessibility

### Built-in features

The component renders the slotted label content inside its light DOM but does not expose any checkbox semantics — it has no role, no `aria-checked`, and is not focusable. Screen readers will read any slotted label as plain text.

### Notes

Because the component does not expose checkbox semantics, screen-reader users will not hear "checkbox, checked" / "unchecked" / "mixed" announcements. When the checked or indeterminate state carries meaning, include that state in the surrounding text or a hidden description (e.g. write "Newsletter subscription: enabled" instead of relying on the visual check mark alone), or use the interactive `mdc-checkbox` instead.
