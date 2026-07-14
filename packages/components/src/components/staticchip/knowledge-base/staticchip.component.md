---
title: Static Chip
summary: Usage, guidelines, and accessibility for the mdc-staticchip component — a non-interactive chip with a label and optional leading icon, used to display short metadata or status.
tier: 3
component: staticchip
---

## Overview

The static chip is a small, non-interactive element used to display a short label with an optional leading icon. It is intended for displaying metadata, tags, or status, and supports a fixed set of colour variants.

### When to use

- Use `mdc-staticchip` to display a short label or status that the user cannot interact with (e.g. a tag, category, or read-only attribute).
- Use it inside lists, cards, or summary rows where the chip is purely informational.

### When not to use

- Use `mdc-chip` when the chip should respond to user interaction (click, selection).
- Use `mdc-filterchip` for chips that toggle on/off as filters.
- Use `mdc-inputchip` for editable, removable chips inside an input.
- Use `mdc-badge` when you need a smaller, status-only indicator (especially for counts or notifications).

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
<mdc-staticchip label="Done" color="mint"></mdc-staticchip>
```

### Content guidance

- Keep the label short. Limit to a maximum of 20 characters, including spaces, so the chip stays compact.
- Use sentence case for the label.

### Property/Attribute details

- `label` — visible label text rendered inside the chip. Defaults to `undefined` (renders nothing if omitted).
- `color` — colour variant. One of `default`, `cobalt`, `gold`, `lime`, `mint`, `orange`, `pink`, `purple`, `slate`, `violet`. Defaults to `default`.
- `icon-name` — name of the icon rendered before the label. When omitted, no icon is shown.

### Limitations

- Not interactive: cannot be focused, clicked, or activated.
- Not form-associated: has no `name`/`value` and is not submitted with a form.

## Accessibility

### Built-in features

The component renders the label inside an `mdc-text` element and the optional icon inside an `mdc-icon` element. It does not expose any chip-specific role or state; the label is read as plain text.

### Notes

Because the component has no interactive role, ensure the surrounding context conveys what the chip represents (e.g. a label or heading describing the chip's purpose). When the chip carries semantic meaning that is not obvious from its label, include that meaning in the surrounding text.
