---
title: Toggletip
summary: Usage, guidelines, and accessibility for the mdc-toggletip component — a click-triggered overlay for interactive contextual content.
tier: 3
component: toggletip
---

## Overview

`mdc-toggletip` is a click-triggered overlay used to surface contextual help text or interactive content (links, buttons) next to a target element. Unlike a hover tooltip, it persists after it opens, so it can hold content that users need to read at their own pace or interact with directly.

### When to use

- Use `mdc-toggletip` to reveal information or interactive controls (links, buttons) the user needs time to read or act on — for example an info button beside a form label.
- Use `mdc-toggletip` to pair an action with a small amount of explanatory content that should stay visible after the user opens it.

### When not to use

- Do not use `mdc-toggletip` for short, non-interactive hints that should appear on hover or focus and disappear automatically. Use `mdc-tooltip` instead.
- Do not use `mdc-toggletip` when you need full control over trigger semantics, placement defaults, or behavior beyond a click-triggered tip. Use `mdc-popover` instead.
- Do not use `mdc-toggletip` for modal flows that require explicit acknowledgement or block the rest of the page. Use `mdc-dialog` instead.

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

### Content guidance

- Keep the content brief and scannable; a toggletip is a small tip, not a page for long-form content.
- Label any interactive controls inside the toggletip clearly so their action is obvious once the tip is open.
- A close button is optional for text-only toggletips (they can still be dismissed by outside click or Escape), but include one whenever the content is interactive so the dismiss path is unambiguous.

### Property/Attribute details

| Option | Intent |
|---|---|
| `triggerid` | Id of the element that opens the toggletip when clicked. Required — without it the toggletip has nothing to anchor to or open from. |
| `placement="bottom"` (default) | Side and alignment relative to the trigger; invalid values fall back to `bottom`. |
| `visible` | Controls the open state programmatically (via `show()`/`hide()`); the click trigger toggles it otherwise. |
| `close-button-aria-label` | Accessible name for the built-in close button, which is shown by default. Provide it whenever the close button is present. |
| `screenreader-announcer-identity` | Id of an existing element to host the screen-reader announcement node. Set it when appending a hidden announcer to the document body is undesirable (e.g. inside a portal you own); otherwise the component creates one. |

**Note:** the `shown`/`hidden`/`created`/`destroyed` events fire as the toggletip is shown, hidden, added to the DOM, or removed from it.

### Limitations

- **Trigger must be reachable** — `triggerid` must resolve to an element in the same root (document or shadow root); the toggletip cannot anchor to a target it cannot find.
- **Traps focus while open** — focus is held inside the toggletip until it is dismissed, so always leave a way out (Escape, the close button, or a control that closes it).
- **Overlay swallows the next click** — an invisible overlay sits behind an open toggletip; a click outside closes the toggletip but does not activate the element under the pointer, so the user must click again.

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

#### Labeling

- If the trigger is icon-only, give it an accessible name via `aria-label` so users know what activating it does before the toggletip opens.
- For interactive content inside the toggletip (links, buttons), provide their own accessible names.

### Notes

- Because focus is trapped inside the toggletip while open, ensure there is always a way to leave it (Escape, the close button, or an interactive control that dismisses it).

## Related components

| Component | Relationship |
|---|---|
| `mdc-tooltip` | Hover/focus hint for short, non-interactive text that dismisses automatically. |
| `mdc-popover` | Generic overlay shell the toggletip is built on; use it directly for full control over trigger and behavior. |
| `mdc-dialog` | Modal surface for flows that must block the page and be explicitly acknowledged. |
| `mdc-button` | Common trigger (often an info icon) that opens the toggletip on click. |
