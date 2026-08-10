---
title: Bullet
summary: Usage, guidelines, and accessibility for the mdc-bullet component — a small circular visual indicator used to mark or separate list-style content.
tier: 3
component: bullet
---

## Overview

The bullet marks or separates items in list-style content, giving each item a small, consistent visual anchor. It is presentational and carries no meaning of its own.

### When to use

- Use `mdc-bullet` to mark items in a custom unordered list.
- Use `mdc-bullet` as a separator dot between inline text fragments, such as metadata.

### When not to use

- Do not use `mdc-bullet` when a native `<ul>`/`<li>` marker suffices; the native list carries list semantics for free.
- Do not use `mdc-bullet` to signal a notification or status. Use `mdc-badge` instead.
- Do not use `mdc-bullet` to convey a user's availability. Use `mdc-presence` instead.
- Do not use `mdc-bullet` to separate sections of a layout. Use `mdc-divider` instead.

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

| Option | Intent |
| --- | --- |
| `size` | Bullet diameter: `small` (default, 4px) for compact rows, `medium` (8px) for typical body content, and `large` (16px) for emphasis. Match it to the surrounding density. |

### Limitations

- **No accessible name** — the bullet is decorative and skipped by screen readers, so adjacent text must carry the content.
- **No list semantics** — the bullet does not create a list; wrap items in `<ul>`/`<li>` or `role="list"`/`role="listitem"` so the structure is announced.
- **Default color only** — the bullet uses a single default color and is not intended to be recolored to signal meaning.

## Accessibility

### Built-in features

The bullet is purely decorative. It renders with no role, label, or interactive behavior, so assistive technologies skip over it.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | None set by the component |

### Implementation requirements

#### General

- Pair the bullet with meaningful adjacent text; never let the bullet itself carry information.
- When bullets mark a set of items, give the surrounding container list semantics (`<ul>`/`<li>` or `role="list"`/`role="listitem"`) so assistive technology announces the structure.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-divider` | For separating sections rather than marking individual items. |
| `mdc-marker` | For flagging content with a status or category rather than marking a list item. |
| `mdc-badge` | For notification or status indicators rather than a plain list marker. |
