---
title: Tooltip
summary: Usage, guidelines, and accessibility for the mdc-tooltip component — a hover/focus-triggered overlay for short, non-interactive hints.
tier: 3
component: tooltip
---

## Overview

`mdc-tooltip` is a lightweight overlay that surfaces a short, non-interactive hint about a target element. It opens on hover or keyboard focus of the trigger and disappears when the pointer leaves or focus moves away. It can be configured to act as the trigger's accessible description, label, or as a purely visual hint.

### When to use

- Use `mdc-tooltip` to reveal short, text-only context for a control whose purpose isn't clear from its visual presentation — for example an icon-only `mdc-button`.
- Use `mdc-tooltip` `tooltip-type="label"` to give an otherwise unlabeled trigger its accessible name.
- Use `mdc-tooltip` `tooltip-type="description"` to add supplementary context to an already-labeled control.
- Use `mdc-tooltip` `only-show-when-trigger-overflows` to show the full text of a truncated label only when it actually overflows.

### When not to use

- Do not use `mdc-tooltip` when the content must stay visible after activation or contains interactive elements (links, buttons). Use `mdc-toggletip` instead.
- Do not use `mdc-tooltip` for richer overlay content, click-triggered surfaces, or when you need explicit control over open/close behavior. Use `mdc-popover` instead.
- Do not use `mdc-tooltip` for critical information — hover/focus content is not reliably surfaced on touch devices or by some assistive technologies. Put essential information in the page or a persistent surface.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/tooltip/index.js"; // custom element registration
// or via React wrapper
import { Tooltip } from '@momentum-design/components/dist/react';
```

Minimal markup example. The tooltip is a sibling of its target; connect it via `triggerid` pointing at the target's `id`:

```html
<mdc-button id="save-btn" prefix-icon="save-bold" aria-label="Save"></mdc-button>
<mdc-tooltip triggerid="save-btn" tooltip-type="description">
  Saves the current document
</mdc-tooltip>
```

### Content guidance

- Keep tooltip text to a short phrase or single sentence — it is scanned quickly and announced as the trigger's name or description.
- Write the content so it reads correctly for its `tooltip-type`: a `label` should name the control ("Save"), a `description` should add context ("Saves the current document").
- Do not truncate text inside a tooltip; let it wrap. The tooltip grows up to a maximum width before wrapping to additional lines.

### Property/Attribute details

| Option | Intent |
|---|---|
| `triggerid` | Id of the target element the tooltip describes. Required — without it the tooltip has nothing to attach to. |
| `tooltip-type="description"` (default) | How the tooltip exposes itself to the trigger: `description` sets `aria-describedby` (adds context to an already-labeled control), `label` sets `aria-labelledby` (names an unlabeled control), `none` sets nothing (decorative). Switching types removes the previously set attribute. |
| `only-show-when-trigger-overflows` | Opens the tooltip only when the trigger's text is truncated — use it for truncated labels so the full text appears on demand. Supported on `mdc-button` and `mdc-text` triggers. |
| `placement` | Side and alignment relative to the trigger; invalid values fall back to the default. |
| `offset` + `boundary` + `boundary-root` + `boundary-padding` + `strategy` | Floating-UI positioning controls; adjust only when the default clips or mispositions the tooltip. |

**Note:** if `id` is unset, a stable `mdc-tooltip-<uuid>` is generated and cached so the trigger's `aria-describedby`/`aria-labelledby` stay valid across re-renders. The `shown`/`hidden`/`created`/`destroyed` events fire as the tooltip opens, closes, or is added to/removed from the DOM.

### Limitations

- **No interactive content** — the tooltip must not contain focusable or interactive elements; keyboard and screen-reader users cannot reach them. Use `mdc-toggletip` when the content is interactive.
- **Overflow trigger is narrow** — `only-show-when-trigger-overflows` is implemented for `mdc-button` and `mdc-text` triggers; other triggers always open on hover/focus.
- **Not touch-friendly** — hover/focus tooltips do not appear for touch users, so never rely on them for critical information.

## Accessibility

### Built-in features

- The tooltip is shown on `mouseenter` and on keyboard focus of the trigger and closes on mouse leave or focus change. Pressing Escape while the tooltip is open also closes it.
- The component manages `aria-describedby` or `aria-labelledby` on the trigger based on `tooltip-type`, so the trigger announces the tooltip text without the assistive technology focusing the tooltip itself.
- The tooltip element itself is marked `aria-hidden="true"` so that screen readers never reach the tooltip directly; the content is conveyed through the trigger's aria relationship.
- Hover detection uses delegated `mouseover`/`mouseout` events so triggers inside shadow roots (for example wrapped in `mdc-iconprovider` or `mdc-themeprovider`) still open the tooltip correctly.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-tooltip`) | `role` | `tooltip` |
| Host | `aria-hidden` | `true` (so the tooltip itself is not reached by screen readers) |
| Trigger element (`tooltip-type="description"`) | `aria-describedby` | The tooltip's `id` |
| Trigger element (`tooltip-type="label"`) | `aria-labelledby` | The tooltip's `id` |
| Trigger element (`tooltip-type="none"`) | none | No aria relationship is set |

### Implementation requirements

#### General

- Pick `tooltip-type` based on intent: `label` when the tooltip provides the accessible name for an otherwise unlabeled trigger; `description` when it adds context to an already-labeled control; `none` when the tooltip is decorative.
- The trigger element must be focusable so keyboard users can open the tooltip.

#### Labeling

- Keep tooltip content short and meaningful — it is announced as the trigger's accessible name or description.
- If the trigger has an existing `aria-label` you don't want overridden, choose `tooltip-type="description"` (or `none`) rather than `label`.

### Notes

- Because content inside the tooltip cannot be focused, screen readers will not visit it directly. All meaningful information must be reachable as plain text — interactive controls placed inside will be ignored by assistive technology.
- Hover/focus-only triggers are typically inaccessible to touch users; ensure the same information is available through another channel for critical UI.

## Related components

| Component | Relationship |
|---|---|
| `mdc-toggletip` | Click-triggered, persistent tip for content that must stay open or be interactive. |
| `mdc-popover` | Generic overlay shell the tooltip is built on; use it directly for richer or click-triggered content. |
| `mdc-coachmark` | Persistent, onboarding-styled overlay for guiding attention to an element. |
| `mdc-button` | Common icon-only trigger that pairs a tooltip with an accessible name. |
