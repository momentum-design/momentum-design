---
title: Static Chip
summary: Usage, guidelines, and accessibility for mdc-staticchip — a non-interactive label chip for displaying short categories, metadata, or attributes.
tier: 3
component: staticchip
---

## Overview

Label chips show static information — such as categories or read-only attributes — in a compact 24px-tall format. `mdc-staticchip` is the non-interactive variant: a short label with an optional leading icon, used when the chip itself should not receive focus or respond to activation.

### When to use

- To display a short label, category, or read-only attribute that the user cannot interact with directly.
- Inside lists, cards, summary rows, or other layouts where the surrounding element owns the click target.

### When not to use

- When the chip should be interactive — for example to show a tooltip on hover or focus. Use `mdc-chip` instead.
- When the chip should toggle a filter on or off. Use `mdc-filterchip` instead.
- When the chip should communicate alert or validation status. Use `mdc-alertchip` instead.
- When the chip represents a removable user-entered value. Use `mdc-inputchip` instead.
- When a smaller count or notification indicator is sufficient. Use `mdc-badge` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/staticchip/index.js"; // custom element registration
// or via React wrapper
import { StaticChip } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-staticchip label="In progress" color="cobalt" icon-name="clock-bold"></mdc-staticchip>
<mdc-staticchip label="Design" color="purple"></mdc-staticchip>
```

### Content guidance

- Keep the `label` short — limit to a maximum of **20 characters** including spaces so the chip stays compact.
- Use sentence case for the label.
- Rely on surrounding UI context when the label alone does not fully explain the chip's meaning.

### Property/Attribute details

- **`label`**: Visible label text rendered inside the chip. Defaults to `undefined` (renders nothing if omitted).
- **`color`**: Color variant for categorization or emphasis — one of `default`, `cobalt`, `gold`, `lime`, `mint`, `orange`, `pink`, `purple`, `slate`, `violet`. Defaults to `default`. Use these colors to call out context or categorize content; do not use them to convey alert or validation status.
- **`icon-name`**: Name of the icon rendered before the label. When omitted, no icon is shown. Leading avatars or icons are optional.

### Limitations

- Not interactive: cannot be focused, clicked, or activated.
- Not form-associated: has no `name`/`value` and is not submitted with a form.
- Fixed at 24px height; width grows with the label. Only one size is available.
- Long labels are visually truncated with ellipsis.

## Accessibility

### Built-in features

The component renders the label inside an `mdc-text` element and the optional icon inside an `mdc-icon` element. It does not expose any chip-specific role or state; the label is read as plain text.

### Notes

Because the component has no interactive role, ensure the surrounding context conveys what the chip represents (e.g. a label or heading describing the chip's purpose). When the chip carries semantic meaning that is not obvious from its label alone, include that meaning in the surrounding text.
