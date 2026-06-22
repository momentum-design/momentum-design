---
title: Tooltip
summary: Usage, guidelines, and accessibility for the mdc-tooltip component — a hover/focus-triggered overlay for short, non-interactive hints.
tier: 3
component: tooltip
---

## Overview

A tooltip is a hover- and focus-triggered popover that surfaces short, non-interactive context about a target element. It can act as the trigger's accessible description, label, or as a purely visual hint.

### When to use

- To reveal short, text-only context for a control whose purpose isn't fully clear from its visual presentation (e.g. icon-only buttons).
- To provide an accessible name or description for a trigger that has no visible label.
- To show the full text of a truncated label.

### When not to use

- When the content must stay open after activation or includes interactive elements (links, buttons). Use `mdc-toggletip` instead.
- For richer overlay content, click-triggered surfaces, or when you need explicit control over open/close behavior. Use `mdc-popover` instead.
- When critical information needs to be displayed.

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

- While there is no set maximum number of lines or characters for a tooltip, try to keep content brief.
- Do not truncate text inside a tooltip.

### Property/Attribute details

- `triggerid` — id of the target element the tooltip is attached to. Required.
- `tooltip-type` — controls how the tooltip exposes itself to the trigger for assistive technologies. One of:
  - `description` (default) — sets `aria-describedby` on the trigger, pointing at the tooltip's id.
  - `label` — sets `aria-labelledby` on the trigger, pointing at the tooltip's id.
  - `none` — does not set any aria attribute on the trigger.
  Switching between types automatically removes the previously-set attribute on the trigger.
- `only-show-when-trigger-overflows` — when `true`, the tooltip only opens if the trigger element's content is overflowing on the x-axis. Supported on `mdc-button` and `mdc-text` triggers.
- `placement` — preferred placement relative to the trigger. One of `top`, `top-start`, `top-end`, `bottom`, `bottom-start`, `bottom-end`, `left`, `left-start`, `left-end`, `right`, `right-start`, `right-end`. Invalid values fall back to the component default.
- `offset`, `boundary`, `boundary-root`, `boundary-padding`, `strategy` — positioning controls forwarded to the underlying Floating UI computation.
- `id` — if not set, a stable `mdc-tooltip-<uuid>` id is generated and cached so the trigger's `aria-describedby` / `aria-labelledby` remain valid across re-renders.
- Events: `shown` (`onShown`), `hidden` (`onHidden`), `created` (`onCreated`), and `destroyed` (`onDestroyed`) fire as the tooltip opens, closes, or is added/removed from the DOM.

### Limitations

- The tooltip must not contain focusable or interactive content; if you need that, use `mdc-toggletip` instead.
- `only-show-when-trigger-overflows` is implemented for `mdc-button` and `mdc-text` triggers; other trigger types always open on hover/focus.

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

#### Labelling

- Keep tooltip content short and meaningful — it is announced as the trigger's accessible name or description.
- If the trigger has an existing `aria-label` you don't want overridden, choose `tooltip-type="description"` (or `none`) rather than `label`.

### Notes

- Because content inside the tooltip cannot be focused, screen readers will not visit it directly. All meaningful information must be reachable as plain text — interactive controls placed inside will be ignored by assistive technology.
- Hover/focus-only triggers are typically inaccessible to touch users; ensure the same information is available through another channel for critical UI.
