---
title: Avatar Button
summary: Usage, guidelines, and accessibility for the mdc-avatarbutton component — an interactive, focusable avatar wrapped in a button.
tier: 3
component: avatarbutton
---

## Overview

The avatar button is an interactive, clickable version of the avatar. It wraps the avatar in a button so it becomes focusable and actionable, while still supporting all avatar display modes (photo, initials, icon, counter) and the presence indicator. Use CSS parts to customise the avatar appearance inside the button.

### When to use

- Use `mdc-avatarbutton` when the avatar must be clickable or keyboard-focusable — for example a profile menu trigger, account switcher, or a member chip that opens a details panel.

### When not to use

- Use `mdc-avatar` when the avatar is purely decorative or informational and should not be interactive.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/avatarbutton/index.js"; // custom element registration
// or via React wrapper
import { AvatarButton } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-avatarbutton initials="AB" aria-label="Open profile menu"></mdc-avatarbutton>
```

### Property/Attribute details

When multiple display attributes are provided, the avatar button picks what to render in this priority order:

1. **Photo** (`src`) — highest priority. While loading, `initials` show as an instant placeholder when provided, otherwise the icon is shown (after the icon library loads). On load error, the placeholder remains visible.
2. **Icon** (`icon-name`) — used when `src` is not provided. If both `icon-name` and `initials` are provided (without `src`), the icon wins and `initials` are ignored. Defaults to `user-regular` when nothing else is available.
3. **Initials** (`initials`) — shown when neither `src` nor `icon-name` is provided. Uppercased and truncated to the first two characters.
4. **Counter** (`counter`) — shown only when none of the above are provided. Negatives display as `0`, values above 99 display as `99+`.

Other supported attributes:

- `size` — avatar size in px: `24`, `32` (default), `48`, `64`, `72`, `88`, `124`. Invalid values fall back to the default.
- `presence` — activity status (`active`, `away`, `away-calling`, `busy`, `dnd`, `meeting`, `on-call`, `on-device`, `on-mobile`, `pause`, `pto`, `presenting`, `quiet`, `scheduled`). Hidden when a counter is rendered or while typing.
- `is-typing` — when `true`, overlays a typing loading indicator on top of the current content.
- `aria-label` — required accessible name for the button (see Accessibility).

## Accessibility

### Built-in features

The component behaves as a button: it is keyboard-focusable, activates on Enter/Space, and exposes button semantics to assistive technologies.

#### Internal ARIA managed by the component

| Element            | Attribute     | Value                                                          |
| ------------------ | ------------- | -------------------------------------------------------------- |
| Host               | `role`        | `button`                                                       |
| Host               | `aria-label`  | Reflected from the `aria-label` attribute set by the consumer  |
| Overlay (`div`)    | `aria-hidden` | `true` (decorative styling layer)                              |
| Inner `mdc-avatar` | `aria-hidden` | `true` (the host carries the accessible name and button role)  |

### Implementation requirements

#### Labelling

- **Always** provide an `aria-label` describing the button's purpose (e.g. `aria-label="Open profile menu"`). Without it the button has no accessible name, since the inner avatar is hidden from assistive technologies.
