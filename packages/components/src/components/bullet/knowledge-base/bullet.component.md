---
title: Bullet
summary: Usage, guidelines, and accessibility for mdc-bullet — a styled dot marker for unordered list items and inline content separation.
tier: 3
component: bullet
---

## Overview

Bullets are visual markers used to organize and present items in a list format, making content easier to scan and understand. `mdc-bullet` renders a styled circular dot in three sizes so consumers can match list density and visual emphasis in custom unordered lists, navigation indicators, or inline separators.

### When to use

- When building custom unordered lists where styled dots improve readability and structure beyond native list styling.
- When a compact visual marker is needed between inline text fragments or in navigation indicators.
- When list item order is not essential but each item needs distinct separation — pick `small` for compact rows, `medium` for typical body content, and `large` when the marker should stand out.

### When not to use

- When a native `<ul>`/`<li>` list is sufficient — it carries list semantics for free.
- When the dot should communicate notification or status. Use `mdc-badge` (`dot` type) instead.
- When the dot conveys a user's availability state (active, away, busy, dnd). Use `mdc-presence` instead.
- When a visible separator between sections is needed rather than a marker for an individual item. Use `mdc-divider` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/bullet/index.js"; // custom element registration
// or via React wrapper
import { Bullet } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-bullet size="medium"></mdc-bullet>
```

### Content guidance

- In Momentum Design, bullets are styled dots only — do not substitute custom icons or shapes for the default dot treatment.
- Keep the default `outline/secondary` color (`--mds-color-theme-outline-secondary-normal`). Do not override bullet color for categorization or status; use accompanying text or a semantic component when meaning must be conveyed.
- Always pair the bullet with meaningful adjacent text — the dot itself is decorative and carries no semantic meaning.

### Property/Attribute details

- **`size`**: Controls the diameter of the bullet — `small` (default, 0.25rem / 4px) for compact lists, `medium` (0.5rem / 8px) for typical body content, `large` (1rem / 16px) for emphasized layouts.
- **`--mdc-bullet-background-color`**: CSS custom property for the dot fill. Defaults to `outline/secondary`; overriding is discouraged except where design system guidance explicitly allows it.
- **`--mdc-bullet-size`**: CSS custom property for dot height; prefer the `size` attribute over manual overrides.

### Limitations

- The bullet is purely decorative with no role, label, or interactive behavior — it must never be the sole carrier of information.
- Color and size alone must not convey state or hierarchy; pair with text or an appropriate semantic component when meaning is required.

## Accessibility

### Built-in features

The bullet is purely decorative. It renders as a generic element with no role, label, or interactive behavior, so assistive technologies skip over it by default.

#### Internal ARIA managed by the component

| Element | Attribute | Value                     |
| ------- | --------- | ------------------------- |
| Host    | `role`    | None set by the component |

### Implementation requirements

#### General

- Always pair the bullet with meaningful adjacent text — never let the bullet itself carry information.
- Do not rely on bullet size or color alone to convey state or hierarchy; use accompanying text or an appropriate semantic component (e.g. `mdc-badge`, `mdc-presence`) when the dot must communicate meaning.
- If the bullet is rendered inside a list of items, prefer marking up the surrounding container with the appropriate list semantics (`<ul>`/`<li>` or `role="list"`/`role="listitem"`) so assistive technologies announce the list structure.
