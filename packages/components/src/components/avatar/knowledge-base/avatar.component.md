---
title: Avatar
summary: Usage, guidelines, and accessibility for the mdc-avatar component — a non-interactive avatar that displays a person or group as a photo, initials, icon, or counter.
tier: 3
component: avatar
---

## Overview

An avatar visually represents a user, profile, or identity. `mdc-avatar` is the non-interactive variant: it renders as a photo, initials, icon, or counter and is omitted from tab order. An optional presence indicator and typing state can overlay the artwork when the representing user status or in-progress message composition.

### When to use

- When a person or group needs a visual identity inline within content — for example in lists, cards, message rows, or participant strips.

### When not to use

- When the avatar must be clickable or focusable (profile menu, account switcher, etc.). Use `mdc-avatarbutton` instead.
- When a standalone status badge is needed without avatar artwork. Use `mdc-presence` instead.

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

1. **`src`** (photo) — highest priority. While loading, `initials` show as an instant placeholder when provided; otherwise the default icon is shown. On load error, the placeholder remains visible.
2. **`icon-name`** — used when `src` is not provided. If both `icon-name` and `initials` are provided (without `src`), the icon wins and `initials` are ignored, which means users may briefly see nothing while the icon library loads even though initials would have rendered instantly.
3. **`initials`** — shown when neither `src` nor `icon-name` is provided. Renders instantly.
4. **`counter`** — shown only when none of the above are provided.

Other supported attributes:

- **`size`**: Avatar diameter in px — `24` (2X-Small), `32` (X-Small, default), `48` (Small), `64` (Midsize), `72` (Large), `88` (X-Large), `124` (2X-Large). Invalid values fall back to `32`. Match size to surrounding content density — smaller sizes for compact rows, larger sizes when the avatar is a focal identity marker.
- **`presence`**: Activity status passed through to the nested `mdc-presence` badge. Accepts `active`, `away`, `away-calling`, `busy`, `dnd`, `meeting`, `on-call`, `on-device`, `on-mobile`, `pause`, `pto`, `presenting`, `quiet`, `scheduled`. Hidden when a counter is rendered or while typing.
- **`is-typing`**: When `true`, overlays a three-dot typing loading indicator on top of the current content. Hidden when the avatar is in counter mode.

### Limitations

- When `is-typing` is `true`, a typing loading indicator overlays the existing content.
- The presence indicator is hidden when the avatar is rendering a counter, or when it is in the typing state.

## Accessibility

### Built-in features

The avatar is treated as decorative by default — it is hidden from assistive technologies so screen readers do not announce it when it is purely visual context.

#### Internal ARIA managed by the component

| Element       | Attribute     | Value                                                                                        |
| ------------- | ------------- | -------------------------------------------------------------------------------------------- |
| Host          | `aria-hidden` | `true` by default; consumers may set `aria-hidden="false"` when the avatar conveys meaning   |
| Photo (`img`) | `aria-hidden` | `true` (the host carries the accessible exposure when overridden)                            |

### Implementation requirements

#### General

- Override `aria-hidden="false"` only when the avatar is the sole source of identity information for the user (e.g. when no name is shown next to it). Provide an `aria-label` in that case.
- Prefer pairing the avatar with adjacent visible text (name, group name) so the avatar can stay decorative and the text carries the accessible name.
