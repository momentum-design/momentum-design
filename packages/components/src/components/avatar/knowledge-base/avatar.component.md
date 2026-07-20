---
title: Avatar
summary: Usage, guidelines, and accessibility for the mdc-avatar component — a non-interactive avatar that represents a person or group as a photo, initials, icon, or counter.
tier: 3
component: avatar
---

## Overview

The avatar represents a person or group so users can quickly recognize who or what an item belongs to. It exists as a compact identity marker and is decorative by default, letting nearby text carry the accessible name.

### When to use

- Use `mdc-avatar` with a `src` photo, or `initials` when no photo is available, to represent a single person.
- Use `mdc-avatar` `icon-name` to represent a role, entity, or system identity that a photo would not convey.
- Use `mdc-avatar` `counter` to roll up a truncated user list — 2 or more additional users or entities — into a single marker.

### When not to use

- Do not use `mdc-avatar` `counter` to represent 1 or fewer users or entities; show that person's avatar directly instead.
- Do not use `mdc-avatar` when the avatar must be clickable or focusable. Use `mdc-avatarbutton` instead.
- Do not use `mdc-avatar` to show a status signal on its own. Use `mdc-presence`, paired with the avatar, instead.
- Do not use `mdc-avatar` as a generic image. Use `mdc-icon` or a plain image for non-identity graphics instead.

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

- Keep `initials` to a person's initials; the avatar uppercases them and shows only the first two characters.
- Use `counter` for the number of additional or total users; values above 99 display as `99+` and negatives as `0`.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `src` | Photo URL; the highest-priority representation. While it loads, `initials` (or the default icon) show as a placeholder, and the placeholder stays on load error. |
| `icon-name` | Icon representation used when no `src` is set (default `user-regular`). Use it for roles or entities rather than a person's photo. |
| `initials` | Text representation used when no `src` or `icon-name` is set; renders instantly. |
| `counter` | Group representation shown only when no other content is set; renders as the number or `99+`. |
| `size` | Pixel size from the fixed set (`24`, `32`, `48`, `64`, `72`, `88`, `124`; default `32`). Match it to the surrounding layout density. |
| `presence` | Overlays an `mdc-presence` indicator for the person's status; hidden for a `counter` avatar and while `is-typing`. |
| `is-typing` | Shows a typing indicator over the content; use it in messaging contexts to signal active composition. |

### Limitations

- **Decorative by default** — the host is `aria-hidden="true"`, so screen readers skip it unless you expose it. Pair it with visible text, or set `aria-hidden="false"` with an `aria-label`.
- **Icon wins over initials** — when both `icon-name` and `initials` are set (no `src`), the icon renders and initials are ignored; users may see nothing until the icon library loads.
- **Fixed size set** — only `24`, `32`, `48`, `64`, `72`, `88`, and `124` are supported; arbitrary sizes are not.
- **Counter has no status** — a `counter` avatar never shows a presence indicator or typing state.

## Accessibility

### Built-in features

The avatar is decorative by default: the host carries `aria-hidden="true"` and the photo is `aria-hidden`, so assistive technologies skip it when it is purely visual context.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `aria-hidden` | `true` by default; consumers may set `false` when the avatar conveys meaning |
| Photo (`img`) | `aria-hidden` | `true` (the host carries any accessible exposure) |

### Implementation requirements

#### General

- Pair the avatar with adjacent visible text (name, group name) so it can stay decorative and the text carries the accessible name.

#### Labeling

- Set `aria-hidden="false"` and provide an `aria-label` only when the avatar is the sole source of identity (no name is shown next to it).

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-avatarbutton` | The interactive, focusable version for when the avatar must trigger an action. |
| `mdc-presence` | The status indicator the avatar overlays when `presence` is set. |
| `mdc-icon` | For non-identity graphics rather than a person or group. |
