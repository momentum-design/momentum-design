---
title: Avatar Button
summary: Usage, guidelines, and accessibility for the mdc-avatarbutton component — an interactive, focusable avatar wrapped in a button.
tier: 3
component: avatarbutton
---

## Overview

The avatar button makes an identity marker actionable, so selecting a person or account can trigger something such as opening a profile menu or account switcher. It offers the same representations as `mdc-avatar` in a focusable, clickable control.

### When to use

- Use `mdc-avatarbutton` when clicking an avatar performs an action, such as opening a profile menu or account switcher.
- Use `mdc-avatarbutton` when the avatar must be keyboard-focusable and operable as a button.
- Use `mdc-avatarbutton` `counter` to roll up a truncated user list — 2 or more additional users or entities — into a single actionable marker.

### When not to use

- Do not use `mdc-avatarbutton` `counter` to represent 1 or fewer users or entities; show that person's avatar directly instead.
- Do not use `mdc-avatarbutton` when the avatar is purely decorative or informational. Use `mdc-avatar` instead.
- Do not use `mdc-avatarbutton` to navigate to another page or route. Use `mdc-link` instead.

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

### Composition

- The avatar visual is an internal `mdc-avatar`; configure it through the button's own `src`, `icon-name`, `initials`, `counter`, `presence`, `size`, and `is-typing` attributes rather than nesting an avatar yourself.
- Use the exported CSS parts (`content`, `photo`, `presence`, `loading-wrapper`, `loader`) to style the inner avatar.

### Content guidance

- Keep `initials` to a person's initials; the avatar uppercases them and shows only the first two characters.
- Use `counter` for the number of additional or total users; values range from 2 to 99; display values over 99 as `99+`.

### Property/Attribute details

The avatar button renders the same representations as `mdc-avatar` and follows the same precedence (`src` → `icon-name` → `initials` → `counter`).

| Option | Intent |
| --- | --- |
| `src` | Photo URL; the highest-priority representation. While it loads, `initials` (or the default icon) show as a placeholder, and the placeholder stays on load error. |
| `icon-name` | Icon representation used when no `src` is set (default `user-regular`). Use it for roles or entities rather than a person's photo. |
| `initials` | Text representation used when no `src` or `icon-name` is set; renders instantly. |
| `counter` | Group representation shown only when no other content is set; renders as the number or `99+`. |
| `size` | Pixel size from the fixed set (`24`, `32`, `48`, `64`, `72`, `88`, `124`; default `32`). Invalid values fall back to `32`. |
| `presence` | Overlays an `mdc-presence` indicator for the person's status; hidden for a `counter` avatar and while `is-typing`. |
| `is-typing` | Shows a typing indicator over the content; use it in messaging contexts to signal active composition. |

### Limitations

- **Accessible name required** — the inner avatar is hidden, so without an `aria-label` the button has no accessible name.
- **Icon wins over initials** — when both `icon-name` and `initials` are set (no `src`), the icon renders and initials are ignored; users may see nothing until the icon library loads.
- **Fixed size set** — only `24`, `32`, `48`, `64`, `72`, `88`, and `124` are supported; invalid values fall back to `32`.
- **Counter has no status** — a `counter` avatar button shows no presence indicator or typing state.

## Accessibility

### Built-in features

The component exposes button semantics: it is keyboard-focusable, activates on `Enter` and `Space`, and reports `role="button"` to assistive technologies. The inner avatar and the decorative overlay are `aria-hidden`, so the button's own accessible name is the only thing announced.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | `button` |
| Host | `aria-label` | Reflected from the consumer-set `aria-label` |
| Overlay (`div`) | `aria-hidden` | `true` (decorative styling layer) |
| Inner `mdc-avatar` | `aria-hidden` | `true` (the host carries the name and role) |

### Implementation requirements

#### Labeling

- Always provide an `aria-label` describing the button's action (e.g. `aria-label="Open profile menu"`); without it the button has no accessible name because the inner avatar is hidden.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-avatar` | The non-interactive avatar this button wraps; use it when no action is needed. |
| `mdc-presence` | The status indicator shown when `presence` is set. |
| `mdc-buttonsimple` | The minimal button primitive this component is built on. |
