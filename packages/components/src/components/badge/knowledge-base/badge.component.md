---
title: Badge
summary: Usage, guidelines, and accessibility for the mdc-badge component — a small non-interactive indicator used to display a dot, icon, counter, or status (success, warning, error).
tier: 3
component: badge
---

## Overview

The badge surfaces a small piece of status at a glance — new or unread activity, a count of items needing attention, or a success, warning, or error state — without taking up much space or interrupting the layout. It is decorative and temporary, typically cleared once the user acts on what it flags.

### When to use

- Use `mdc-badge` `dot` to signal new or unread activity when no specific count is needed.
- Use `mdc-badge` `counter` to show the number of new or unread items, such as notifications or messages.
- Use `mdc-badge` `success`, `warning`, or `error` to flag the state of an item or task.
- Use `mdc-badge` `icon` for a compact meaning marker inside list items, such as an at-mention or draft indicator.

### When not to use

- Do not use `mdc-badge` for an indicator that must be focusable or clickable. Use `mdc-alertchip` instead.
- Do not use `mdc-badge` for a permanent category or type label, or a status that needs richer text. Use `mdc-staticchip` instead.
- Do not use `mdc-badge` to represent a person's availability or activity. Use `mdc-presence` instead.

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

### Content guidance

- Keep counters to whole numbers; the badge shows at most three digits and renders "999+" beyond that.
- Set `max-counter` (`9`, `99`, or `999`) to the largest count worth showing precisely; larger values collapse to a `<max>+` form.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `type` | Selects what the badge shows: `dot` (default, unread activity), `counter` (a number), `icon` (a named `icon-name`), or `success`/`warning`/`error` (preset status icon). |
| `variant` | `primary` (default) or `secondary`; sets the foreground/background color pairing. Use `secondary` on surfaces where the primary accent reads too heavy. |
| `counter` | The number shown when `type="counter"`. Non-numeric values render nothing. |
| `max-counter` | `9`, `99`, or `999` (default `99`). Caps the displayed count; higher values render as `<max>+` and never exceed "999+". |
| `overlay` | Adds a thin outline so the badge stays legible when layered on another element, such as a button. |
| `icon-name` | The icon shown when `type="icon"`; ignored by the preset status types, which supply their own icons. |
| `visible` | When `false`, plays the exit fade-out and dispatches `hidden` when complete. Defaults to `true`. |

### Motion

Token-based motion runs when `mds-animation` scope classes are present (via `mdc-motionprovider` or app-level setup).

| Phase | When | Effect |
| --- | --- | --- |
| Entrance | First time the badge has displayable content in a mount cycle | `fadeIn` + `growShrink` (opacity 0→1, scale 0.8→1) |
| Update | Displayable content changes while visible | `growShrink` pulse (scale 1→0.8→1) |
| Exit | Content clears or `visible` becomes `false` | `fadeOut` (opacity 1→0), then `hidden` event |

`data-motion-phase` is reflected on the host for debugging and tests (`entering`, `visible`, `updating`, `exiting`, `hidden`). With `prefers-reduced-motion: reduce` or when motion tokens are disabled, state changes apply instantly.

Consumers that remove the badge from the DOM synchronously skip exit animation. Keep the host mounted and set `visible="false"` (or clear counter content) until the `hidden` event fires — `mdc-navmenuitem` does this when `badge-type` is removed.

### Limitations

- **Decorative by default** — without an `aria-label` the badge is hidden from assistive technology; add one when it carries meaning.
- **Counter caps at 999+** — the counter shows at most three digits, so exact counts above the cap are not conveyed.
- **Compact bounds** — the badge is sized to a small (16px) box and is not meant to hold long text; use `mdc-staticchip` for label-length content.
- **No built-in positioning** — the badge does not anchor itself to a host element; the consumer places and overlays it.

## Accessibility

### Built-in features

The badge is decorative by default and is not exposed to assistive technology unless the consumer provides an `aria-label`. When an `aria-label` is set, the host takes `role="img"` so the label is announced as a single image.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | `img` when `aria-label` is set; otherwise no role is applied |
| Host | `aria-label` | Reflected from the `aria-label` attribute set by the consumer |

### Implementation requirements

#### Labeling

- When the badge carries meaning (a counter value or status), provide an `aria-label` describing it ("5 unread", "Error"); the component then exposes itself as a labeled `img`.
- Write `aria-label` copy as the meaning the badge conveys, not its appearance — "5 unread messages", not "red dot".
- Leave `aria-label` unset when the badge is purely decorative or its meaning is already conveyed by adjacent text, so it stays out of the accessibility tree.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-alertchip` | For an interactive, focusable status indicator that behaves as a button. |
| `mdc-staticchip` | For a permanent category or type label, or status that needs richer text. |
| `mdc-presence` | For a person's availability or activity state on an avatar. |
| `mdc-icon` | For a standalone meaning icon that is not a status or notification marker. |
