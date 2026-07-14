---
title: Toggletip
summary: Usage, guidelines, and accessibility for the mdc-toggletip component — a click-triggered overlay for interactive contextual content.
tier: 3
component: toggletip
---

## Overview

`mdc-toggletip` is a click-triggered overlay used to surface contextual help text or interactive content (links, buttons) next to a target element. It stays visible until the user dismisses it via the close button, an outside click, or the Escape key, and announces its content to screen readers when it appears.

### When to use

- Reveal additional information or interactive controls that the user needs time to read or interact with (e.g. an info button next to a form label).
- Group an action with a small amount of explanatory content that should remain visible after the user opens it.

### When not to use

- Use `mdc-tooltip` for short, non-interactive hints that should appear on hover or focus and disappear automatically.
- Use `mdc-popover` directly when you need full control over trigger semantics, placement defaults, or behavior beyond a click-triggered tip.
- Use `mdc-dialog` for modal flows that require explicit user acknowledgement or block the rest of the page.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/toggletip/index.js"; // custom element registration
// or via React wrapper
import { Toggletip } from '@momentum-design/components/dist/react';
```

Minimal markup example. The toggletip is a sibling of its target; connect it via `triggerid` pointing at the target's `id`:

```html
<mdc-button id="info-trigger" prefix-icon="info-circle-bold" aria-label="More info"></mdc-button>
<mdc-toggletip triggerid="info-trigger" placement="bottom" show-arrow>
  Toggletips can contain <a href="/help">links</a> or other interactive content.
</mdc-toggletip>
```

### Property/Attribute details

- `triggerid` — id of the target element that opens the toggletip when clicked. Required.
- `placement` — preferred placement relative to the trigger. One of `top`, `top-start`, `top-end`, `bottom` (default), `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`. Invalid values fall back to `bottom`.
- `visible` — boolean controlling the open state; set via `show()` / `hide()` or by the click trigger.
- `screenreader-announcer-identity` — id of an existing DOM element to which the screen reader announcement element will be appended. If omitted, the component creates a visually hidden div in the DOM.
- `close-button-aria-label` — accessible name for the built-in close button (the close button is shown by default).
- Events: `shown` (`onShown`), `hidden` (`onHidden`), `created` (`onCreated`), and `destroyed` (`onDestroyed`) fire as the toggletip is shown, hidden, added to the DOM, or removed from the DOM.

### Limitations

- The toggletip cannot self-position relative to a target it does not know about; the `triggerid` must resolve to an element in the same root (document or shadow root).

## Accessibility

### Built-in features

- Activates on click of the trigger element; pressing Escape or clicking outside closes it; the built-in close button also dismisses it.
- The overlay traps focus while open so keyboard users can Tab between any interactive controls inside.
- When the toggletip closes, focus returns to the trigger element.
- A backdrop is rendered behind the toggletip; clicking the backdrop closes it.
- When the toggletip becomes visible, its text content is announced through `mdc-screenreaderannouncer` (with a 300ms delay) so users of assistive technologies hear the contents.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-toggletip`) | `role` | `dialog` (inherits the popover default) |
| Host | `aria-modal` | Managed by the popover; set when the role is `dialog` and the overlay is interactive |
| Trigger element | `aria-expanded` | Reflects the toggletip's open/closed state |
| Trigger element | `aria-haspopup` | Set on the trigger so screen readers know a popup is connected |
| Close button | `aria-label` | The consumer-supplied `close-button-aria-label` |

### Implementation requirements

#### General

- The target element identified by `triggerid` must be focusable; provide it via a button, link, or other natively focusable control so keyboard users can open the toggletip.
- Use `screenreader-announcer-identity` when the toggletip is rendered in a context where appending a hidden announcer to the document body is undesirable (e.g. inside a portal you own).

#### Labelling

- If the trigger is icon-only, give it an accessible name via `aria-label` so users know what activating it does before the toggletip opens.
- For interactive content inside the toggletip (links, buttons), provide their own accessible names.

### Notes

- Because focus is trapped inside the toggletip while open, ensure there is always a way to leave it (Escape, the close button, or an interactive control that dismisses it).
