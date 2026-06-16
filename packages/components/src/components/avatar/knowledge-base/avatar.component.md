---
title: Avatar
summary: Usage, guidelines, and accessibility for the mdc-avatar component — a non-interactive avatar that displays a person or group as a photo, initials, icon, or counter.
status: draft
tier: 3
component: avatar
---

## Overview

The avatar represents a person or a group. It can be rendered as a photo, initials, icon, or counter, and is non-interactive and non-focusable by default. An optional presence indicator and a typing loading state are also supported.

### When to use

- Use `mdc-avatar` to visually represent a person or group inline within content (e.g. lists, cards, message rows).

### When not to use

- Use `mdc-avatarbutton` when the avatar must be clickable or focusable (profile menu, account switcher, etc.).

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/avatar/index.js"; // custom element registration
// or via React wrapper
import { Avatar } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-avatar initials="AB" presence="active"></mdc-avatar>
```

### Content guidance

- **Initials** are uppercased and truncated to the first two characters automatically.
- **Counter** values are clamped: negatives display as `0`, values above 99 display as `99+`.

### Property/Attribute details

When multiple display attributes are provided, the avatar picks what to render in this priority order:

1. **Photo** (`src`) — highest priority. While loading, `initials` show as an instant placeholder when provided, otherwise the icon is shown (after the icon library loads). On load error, the placeholder remains visible.
2. **Icon** (`icon-name`) — used when `src` is not provided. If both `icon-name` and `initials` are provided (without `src`), the icon wins and `initials` are ignored, which means users may briefly see nothing while the icon library loads even though initials would have rendered instantly. Defaults to `user-regular` when nothing else is available.
3. **Initials** (`initials`) — shown when neither `src` nor `icon-name` is provided. Renders instantly.
4. **Counter** (`counter`) — shown only when none of the above are provided.

Other behaviour worth knowing:

- When `is-typing` is `true`, a typing loading indicator overlays the existing content.
- The presence indicator is hidden when the avatar is rendering a counter, or when it is in the typing state.

## Accessibility

### Built-in features

The avatar is treated as decorative by default — it is hidden from assistive technologies so screen readers do not announce it when it is purely visual context.

#### Internal ARIA managed by the component

| Element        | Attribute     | Value                                                                              |
| -------------- | ------------- | ---------------------------------------------------------------------------------- |
| Host           | `aria-hidden` | `true` by default; consumers may set `aria-hidden="false"` when the avatar conveys meaning |
| Photo (`img`)  | `aria-hidden` | `true` (the host carries the accessible exposure)                                   |

### Implementation requirements

#### General

- Override `aria-hidden="false"` only when the avatar is the sole source of identity information for the user (e.g. when no name is shown next to it). Provide an `aria-label` in that case.
- Prefer pairing the avatar with adjacent visible text (name, group name) so the avatar can stay decorative and the text carries the accessible name.
