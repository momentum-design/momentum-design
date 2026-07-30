---
title: Static Chip
summary: Usage, guidelines, and accessibility for the mdc-staticchip component — a non-interactive chip with a label and optional leading prefix (icon or avatar), used to display short metadata or status.
tier: 3
component: staticchip
---

## Overview

The static chip is a small, non-interactive element used to display a short label with an optional leading prefix (icon or slotted content such as an avatar). It is intended for displaying metadata, tags, or status, and supports a fixed set of colour variants.

### When to use

- Use `mdc-staticchip` to display a short label or status that the user cannot interact with (a tag, category, or read-only attribute).
- Use `mdc-staticchip` inside lists, cards, or summary rows where the chip is purely informational.

### When not to use

- Do not use `mdc-staticchip` when the chip should respond to user interaction such as click or selection. Use `mdc-chip`.
- Do not use `mdc-staticchip` for a chip that toggles on and off as a filter. Use `mdc-filterchip`.
- Do not use `mdc-staticchip` for an editable, removable value inside an input. Use `mdc-inputchip`.
- Do not use `mdc-staticchip` for a status that needs the reserved status color set. Use `mdc-alertchip`.
- Do not use `mdc-staticchip` when you need a smaller, status-only indicator, especially for counts or notifications. Use `mdc-badge`.

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

- Keep the label short — a maximum of 20 characters, including spaces, so the chip stays compact.
- Use sentence case for the label.

With an avatar slotted as the prefix (takes precedence over `icon-name`). Use `size="24"` on the avatar so the initials text scales appropriately for the chip height:

```html
<mdc-staticchip label="Addy Rodney">
  <mdc-avatar slot="prefix" size="24" src="addy.jpg" initials="AR"></mdc-avatar>
</mdc-staticchip>
```

### Property/Attribute details

- `label` — visible label text rendered inside the chip. Defaults to `undefined` (renders nothing if omitted).
- `color` — colour variant. One of `default`, `cobalt`, `gold`, `lime`, `mint`, `orange`, `pink`, `purple`, `slate`, `violet`. Defaults to `default`.
- `icon-name` — name of the icon rendered in the leading prefix when no `prefix` slot content is provided. Default unset.
- `prefix` (slot) — slot for leading content such as avatars or custom icons. When provided, takes precedence over `icon-name`. Use `mdc-avatar` with `size="24"` for person/entity representations.

### Limitations

- **Not interactive** — the chip cannot be focused, clicked, or activated. Use `mdc-chip` when interaction is needed.
- **Not form-associated** — it has no `name`/`value` and is not submitted with a form.
- **Single-line label** — the chip does not wrap; keep the label under 20 characters so it stays compact.

## Accessibility

### Built-in features

The component renders the label inside an `mdc-text` element and the optional icon inside an `mdc-icon` element. It does not expose any chip-specific role or state; the label is read as plain text.

### Notes

Because the component has no interactive role, ensure the surrounding context conveys what the chip represents (for example a label or heading describing the chip's purpose). When the chip carries semantic meaning that is not obvious from its label, include that meaning in the surrounding text.

## Related components

| Component | Relationship |
|---|---|
| `mdc-chip` | Interactive version of the same label chip; use when the chip must respond to click or selection. |
| `mdc-filterchip` | Selectable chip that toggles a filter on and off. |
| `mdc-inputchip` | Editable, removable chip inside an input. |
| `mdc-alertchip` | Status chip with a reserved color set for validation states. |
| `mdc-badge` | Smaller status-only indicator, especially for counts or notifications. |
