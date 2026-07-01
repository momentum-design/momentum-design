---
title: Bullet
summary: Usage, guidelines, and accessibility for the mdc-bullet component — a small circular visual indicator used to mark or separate list-style content.
tier: 3
component: bullet
---

## Overview

The bullet is a small, non-interactive circular indicator used to mark or separate items in a list-style layout. It provides a consistent visual mark in three sizes (small, medium, large) so consumers can match the bullet to the surrounding content density.

### When to use

- Use `mdc-bullet` as a visual marker in custom unordered lists, navigation indicators, or as a separator dot between inline text fragments.
- Pick the size based on layout density and visual emphasis: `small` for compact rows, `medium` for typical body content, `large` when the marker should stand out.

### When not to use

- Use a native `<ul>`/`<li>` list when the platform's default bullet styling is sufficient — it carries list semantics for free.
- Use `mdc-badge` (`dot` type) when the indicator should communicate a notification or status rather than mark a list item.
- Use `mdc-presence` when the dot conveys a user's availability state (active, away, busy, dnd).
- Use `mdc-divider` when you need a visible separator between sections rather than a marker for an individual item.

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

### Property/Attribute details

- `size` — controls the diameter of the bullet:
  - `small` (default) — 0.25rem (4px), for compact lists.
  - `medium` — 0.5rem (8px), for typical body content.
  - `large` — 1rem (16px), for emphasised or hero layouts.

## Accessibility

### Built-in features

The bullet is purely decorative. It renders as a generic element with no role, label, or interactive behaviour, so assistive technologies skip over it by default.

#### Internal ARIA managed by the component

| Element | Attribute | Value                       |
| ------- | --------- | --------------------------- |
| Host    | `role`    | None set by the component   |

### Implementation requirements

#### General

- Always pair the bullet with meaningful adjacent text — never let the bullet itself carry information.
- Do not rely on bullet size or colour alone to convey state or hierarchy; use accompanying text or an appropriate semantic component (e.g. `mdc-badge`, `mdc-presence`) when the dot must communicate meaning.
- If the bullet is rendered inside a list of items, prefer marking up the surrounding container with the appropriate list semantics (`<ul>`/`<li>` or `role="list"`/`role="listitem"`) so assistive technologies announce the list structure.
