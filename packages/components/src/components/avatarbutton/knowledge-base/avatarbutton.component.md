---
title: Avatar Button
summary: Usage, guidelines, and accessibility for mdc-avatarbutton — an interactive, focusable avatar wrapped in a button for profile menus, account switchers, and popover triggers.
tier: 3
component: avatarbutton
---

## Overview

An avatar button is the interactive variant of the avatar — a clickable, keyboard-focusable control that supports every avatar display mode (photo, initials, icon, counter) plus an optional presence indicator. Use it when activating the avatar should open a profile popover, menu, or other contextual surface. Use CSS parts to customize the avatar appearance inside the button.

### When to use

- When the avatar must be clickable or keyboard-focusable — for example a profile menu trigger, account switcher, or member chip that opens a details panel or popover.
- When all avatar display modes and presence indicators are needed alongside button interaction semantics.

### When not to use

- When the avatar is purely decorative or informational and should not be interactive. Use `mdc-avatar` instead.
- When a generic button with text or an icon is sufficient and no avatar artwork is required. Use `mdc-button` instead.

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

Photo avatar button with presence:

```html
<mdc-avatarbutton
  src="/profile.jpg"
  initials="AB"
  presence="active"
  aria-label="Open Jane Doe's profile"
></mdc-avatarbutton>
```

Wire a popover by placing `mdc-avatarbutton` as the trigger and connecting it to the popover component per the popover integration pattern in your product surface.

Listen for `click`, `keydown`, `keyup`, and `focus` events to react to user interaction.

### Content guidance

- **Always** provide an `aria-label` that describes what activating the button does — not just the person's name (for example `aria-label="Open profile menu"`, not `aria-label="Jane Doe"`).
- All avatar display guidance from `mdc-avatar` applies: initials are uppercased and truncated to two characters; counter values clamp at `99+`; the default icon is `user-regular` when no display input is provided.
- Counter avatars do not show presence or typing indicators — the same restrictions as `mdc-avatar` apply.

### Property/Attribute details

When multiple display attributes are provided, the avatar button picks what to render in this priority order (delegated to the inner `mdc-avatar`):

1. **`src`** (photo) — highest priority. While loading, `initials` show as an instant placeholder when provided; otherwise the default icon is shown. On load error, the placeholder remains visible.
2. **`icon-name`** — used when `src` is not provided. If both `icon-name` and `initials` are provided (without `src`), the icon wins and `initials` are ignored.
3. **`initials`** — shown when neither `src` nor `icon-name` is provided.
4. **`counter`** — shown only when none of the above are provided. Negatives display as `0`, values above 99 display as `99+`.

Other supported attributes:

- **`size`**: Avatar diameter in px — `24`, `32` (default), `48`, `64`, `72`, `88`, `124`. Invalid values fall back to `32`.
- **`presence`**: Activity status — `active`, `away`, `away-calling`, `busy`, `dnd`, `meeting`, `on-call`, `on-device`, `on-mobile`, `pause`, `pto`, `presenting`, `quiet`, `scheduled`. Hidden when a counter is rendered or while typing.
- **`is-typing`**: When `true`, overlays a typing loading indicator on top of the current content.
- **`aria-label`**: Required accessible name for the button (see Accessibility).

### Limitations

- The inner `mdc-avatar` is always `aria-hidden="true"` — the button host carries the accessible name; do not expect initials or photo alt text to be announced.
- Counter avatars suppress presence and typing indicators, matching `mdc-avatar` behavior.
- `disabled`, `active`, and `soft-disabled` are reset on connect and should not be relied on — the avatar button does not expose a disabled variant through these properties.

## Accessibility

### Built-in features

The component behaves as a button: it is keyboard-focusable, activates on Enter/Space, and exposes button semantics to assistive technologies.

- `Enter` activates the button on `keydown` (matches native button behavior).
- `Space` activates the button on `keyup` (matches native button behavior; `keydown` is suppressed so the page does not scroll).
- Click activates the button.

#### Internal ARIA managed by the component

| Element            | Attribute     | Value                                                         |
| ------------------ | ------------- | ------------------------------------------------------------- |
| Host               | `role`        | `button`                                                      |
| Host               | `aria-label`  | Reflected from the `aria-label` attribute set by the consumer |
| Overlay (`div`)    | `aria-hidden` | `true` (decorative styling layer)                             |
| Inner `mdc-avatar` | `aria-hidden` | `true` (the host carries the accessible name and button role) |

### Implementation requirements

#### General

- The clickable state to open popovers is available for all avatar display variations and must remain keyboard-accessible through the button host.
- When pairing with a popover, ensure the popover's open/close state is reflected in `aria-expanded` on the avatar button if your integration pattern requires it.

#### Labelling

- **Always** provide an `aria-label` describing the button's purpose (for example `aria-label="Open profile menu"`). Without it the button has no accessible name, since the inner avatar is hidden from assistive technologies.
- Do not use the person's name alone as the label unless activating the button navigates to or focuses that person — describe the action the button performs.
