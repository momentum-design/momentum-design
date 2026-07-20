---
title: Presence
summary: Usage, guidelines, and accessibility for the mdc-presence component — a small status indicator that represents the availability or activity state of a user or entity.
tier: 3
component: presence
---

## Overview

The presence communicates a user or entity's current availability or activity — such as active, away, busy, or on a call — as a compact status indicator. It exists to sit on an avatar so status reads at a glance.

### When to use

- Use `mdc-presence` on an `mdc-avatar` to show the represented user or entity's current availability or activity.
- Use `mdc-presence` `type` to convey a specific state, such as `active`, `away`, `busy`, `dnd`, `meeting`, or `on-call`.

### When not to use

- Do not use `mdc-presence` as a standalone indicator detached from an avatar. Set the `presence` attribute on `mdc-avatar` instead.
- Do not use `mdc-presence` for counts or generic dots. Use `mdc-badge` instead.
- Do not use `mdc-presence` for arbitrary icons at custom sizes. Use `mdc-icon` instead.

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

In most cases, set the `presence` attribute on `mdc-avatar` instead of placing `mdc-presence` yourself — the avatar renders and sizes the indicator automatically.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `type` | The status to show — one of 14 states (default `active`). Choose the state that matches the user's real availability; an unrecognized value falls back to `active`. |
| `size` | Pixel size from the avatar set (`24`, `32`, `48`, `64`, `72`, `88`, `124`; default `32`). Match it to the avatar it accompanies; icons never render below 14px. |

### Limitations

- **No accessible name** — the indicator is presentational and exposes no text; the surrounding `mdc-avatar` or nearby copy must convey the status to assistive technology.
- **Minimum icon size** — icons never render smaller than 14px, so sizes `24`, `32`, and `48` all show a 14px icon.
- **Fixed size set** — only the avatar size set is supported; arbitrary sizes are not.
- **Unknown type reverts** — an unrecognized `type` silently falls back to `active`.

## Accessibility

### Built-in features

The indicator is presentational: it renders a status icon with a type-specific background color and owns no accessible name. Meaning is conveyed by the surrounding avatar or adjacent text.

### Implementation requirements

#### Labeling

- Convey the status through the surrounding `mdc-avatar` (typically its `aria-label`) or nearby visible text; `mdc-presence` does not announce the state on its own.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-avatar` | Renders and sizes this indicator when its `presence` attribute is set. |
| `mdc-avatarbutton` | The interactive avatar that also overlays this indicator. |
| `mdc-badge` | For counts or generic dots rather than availability status. |
