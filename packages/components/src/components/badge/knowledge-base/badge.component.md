---
title: Badge
summary: Usage, guidelines, and accessibility for the mdc-badge component — a small non-interactive indicator used to display a dot, icon, counter, or status (success, warning, error).
status: draft
tier: 3
component: badge
---

## Overview

The badge is a small, non-interactive indicator used to surface a notification, status, or count. It supports six types — `dot`, `icon`, `counter`, `success`, `warning`, and `error` — and can be layered on top of other UI (for example a button) with an optional outline overlay.

### When to use

- Use `mdc-badge` to show an unread/notification dot, a numeric counter, or a status indicator next to or on top of another element.

### When not to use

- Use `mdc-alertchip` when the indicator must be interactive (focusable, clickable) and behave as a button.
- Use `mdc-staticchip` or `mdc-text` when the status needs richer label content rather than a single icon, dot, or count.
- Use `mdc-presence` when you specifically need to indicate a user's activity/availability state (e.g. active, away, busy, dnd) rather than a generic notification, count, or status.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/badge/index.js"; // custom element registration
// or via React wrapper
import { Badge } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-badge type="counter" counter="5" aria-label="5 unread messages"></mdc-badge>
```

### Property/Attribute details

- `type` — selects the badge shape and content:
  - `dot` (default) — a small notification dot.
  - `icon` — renders the icon named by `icon-name`.
  - `counter` — renders the numeric `counter` value as text.
  - `success` — renders a check-circle icon with success styling.
  - `warning` — renders a warning icon with warning styling.
  - `error` — renders an error icon with error styling.
- `variant` — `primary` (default) or `secondary`; controls the badge foreground/background colors.
- `counter` — numeric value rendered when `type="counter"`. Non-numeric values render as empty.
- `max-counter` — `9`, `99`, or `999` (default `99`). When `counter` exceeds this value, the badge renders `<maxCounter>+`. Values above the hard ceiling of 999 always render as `999+`.
- `overlay` — when `true`, adds a thin outline so the badge reads clearly when stacked on top of another element (e.g. a button). Defaults to `false`.
- `icon-name` — required when `type="icon"`; ignored for the preset variants which use their own icons.
- `aria-label` — accessible name for the badge; see Accessibility.

## Accessibility

### Built-in features

The badge is decorative by default and is not exposed to assistive technologies unless the consumer provides an `aria-label`.

#### Internal ARIA managed by the component

| Element | Attribute    | Value                                                                                  |
| ------- | ------------ | -------------------------------------------------------------------------------------- |
| Host    | `role`       | `img` when `aria-label` is set; otherwise no role is applied                           |
| Host    | `aria-label` | Reflected from the `aria-label` attribute set by the consumer                          |

### Implementation requirements

#### Labelling

- When the badge carries meaning (counter value, status), provide an `aria-label` describing it (e.g. `aria-label="5 unread"`, `aria-label="Error"`). The component then exposes itself as a labelled `img`.
- Leave `aria-label` unset when the badge is purely decorative or its meaning is already conveyed by adjacent text — the component stays out of the accessibility tree.
