---
title: Presence
summary: Usage, guidelines, and accessibility for the mdc-presence component — a small status badge that visually represents the availability or activity state of a user or entity.
status: draft
tier: 3
component: presence
---

## Overview

The presence is a small status badge that visually represents the availability or activity state of a user or entity (for example: active, away, busy, do-not-disturb, on a call, presenting). It is sized to be paired with an avatar so the status renders as a corner indicator on top of the avatar artwork.

### When to use

- Use `mdc-presence` next to or on top of an `mdc-avatar` to indicate the represented user/entity's current availability or activity.
- Use it whenever the application has a meaningful status signal to communicate alongside an avatar (online, in a meeting, away, etc.).

### When not to use

- Do not use it as a standalone status indicator divorced from an avatar — pair it with `mdc-avatar` so the icon size matches the avatar size.
- Use `mdc-badge` for counts, dots, or non-status decorations.
- Use `mdc-icon` if you need an arbitrary icon at custom sizes outside the supported avatar size set.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/presence/index.js"; // custom element registration
// or via React wrapper
import { Presence } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-presence type="active" size="32"></mdc-presence>
```

### Property/Attribute details

- `type` — the presence state: `active`, `away`, `away-calling`, `busy`, `dnd`, `meeting`, `on-call`, `on-device`, `on-mobile`, `pause`, `pto`, `presenting`, `quiet`, `scheduled`. If an unknown value is supplied the component falls back to `active`. Default `active`.
- `size` — overall size of the presence badge in pixels: `24`, `32`, `48`, `64`, `72`, `88`, `124`. Default `32`. Presence icons have a minimum rendered size of 14px, so sizes `24`, `32`, and `48` all render the icon at 14px.

## Accessibility

### Built-in features

The badge is rendered with a presentational icon and an icon-specific background colour driven by the `type`. The component does not own an accessible name — labelling is the consumer's responsibility (typically via the `aria-label` on the surrounding `mdc-avatar`).
