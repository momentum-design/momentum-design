---
title: Popover
summary: Usage, guidelines, and accessibility for the mdc-popover component — a generic, floating overlay anchored to a trigger element with configurable trigger, placement, focus trap, and dismiss behavior.
tier: 3
component: popover
---

## Overview

The popover is a generic overlay that can be anchored to any actionable element on the page (identified by its `id`) and used to host tooltips, dropdowns, menus, or any other contextual content. It automatically positions itself based on available space, can resize to fit the viewport, and uses [Floating UI](https://floating-ui.com/) to keep its position correct as the page scrolls or resizes.

### When to use

- Use `mdc-popover` to render contextual UI floating next to a trigger element — additional information, action menus, or interactive panels.
- Use `mdc-popover` when you need fine control over trigger events (click, hover, focus, manual), placement, offset, arrow, focus trap, or backdrop behavior.

### When not to use

- Do not use `mdc-popover` for short, non-interactive descriptive text shown on hover/focus. Use `mdc-tooltip` instead.
- Do not use `mdc-popover` for short text shown on click that does not need focus trapping. Use `mdc-toggletip` instead.
- Do not use `mdc-popover` for modal flows that interrupt the user, center in the viewport, and own header/footer chrome. Use `mdc-dialog` instead.
- Do not use `mdc-popover` when a higher-level widget already composes it for the use case. Use `mdc-menupopover`, `mdc-coachmark`, or `mdc-searchpopover` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/popover/index.js"; // custom element registration
// or via React wrapper
import { Popover } from '@momentum-design/components/dist/react';
```

Minimal markup example — the popover is a sibling of the trigger and connects to it via `triggerid`:

```html
<mdc-button id="popover-trigger">Open popover</mdc-button>

<mdc-popover triggerid="popover-trigger" placement="bottom-start" show-arrow>
  Popover content
</mdc-popover>
```

Interactive popover with focus trap, Escape-to-close, and focus restored to the trigger:

```html
<mdc-button id="settings-trigger">Settings</mdc-button>

<mdc-popover
  triggerid="settings-trigger"
  interactive
  focus-trap
  hide-on-escape
  hide-on-outside-click
  focus-back-to-trigger
  close-button
  close-button-aria-label="Close settings"
  aria-label="Settings"
>
  <!-- interactive content -->
</mdc-popover>
```

Listen for `shown`/`hidden` to react to visibility changes, and for `created`/`destroyed` to react when the popover is added to or removed from the DOM.

### Property/Attribute details

| Option | Intent |
|---|---|
| `triggerid` | Id of the element that owns the popover. Required — without it the popover never opens. |
| `trigger="click"` (default) | Space-separated events that open it: `click`, `mouseenter`, `focusin`, or `manual`. `mouseenter` is auto-expanded so keyboard focus (non-interactive) or click (interactive) also opens it. |
| `interactive` | Marks the content as interactive: keeps the popover open while the pointer is inside, and is required before `focus-trap` works. |
| `focus-trap` + `element-index-to-receive-focus` | Traps keyboard focus inside an `interactive` popover; the index picks which focusable child receives focus on open (default: first). |
| `placement="bottom"` (default) | Side and alignment relative to the trigger; auto-flips unless `disable-flip` is set, and mirrors in RTL. |
| `offset` | Gap from the trigger (default `4`). Accepts a number, `{ mainAxis, crossAxis, alignmentAxis }`, or a function. |
| `strategy` + `boundary` + `boundary-root` + `boundary-padding` + `inline` + `animation-frame` | Floating-UI positioning controls. Reach for these only when the default clips or mispositions — e.g. `strategy="fixed"` inside a scroll container, `inline` against multi-line inline triggers. |
| `color="tonal"` (default) | `tonal` matches the trigger surface (menus); `contrast` stands out from the page (tips, coachmarks). |
| `show-arrow` | Renders a directional arrow pointing at the trigger; use it when the spatial link to the trigger matters. |
| `size` | Constrains max-height to the available space and scrolls overflowing content. Enable for long content in tight viewports. |
| `close-button` + `close-button-aria-label` | Renders a built-in close button; the aria-label is required when it is shown. |
| `visible` | Opens or closes the popover programmatically (pair with `trigger="manual"`). |
| `hide-on-escape` / `hide-on-outside-click` / `hide-on-blur` | Opt-in dismiss behaviors — none are on by default. `propagate-event-on-escape` lets Escape bubble after closing. |
| `focus-back-to-trigger` | Returns focus to the trigger after closing; set it for interactive popovers. |
| `backdrop` + `is-backdrop-invisible` + `prevent-scroll` | Adds a page backdrop (dimmed when not invisible) and can suppress background scroll while open. |
| `delay` | `"openMs,closeMs"` open/close delay; invalid values coerce to `"0,0"`. |
| `role="dialog"` (default) | ARIA role for the host; `dialog`/`alertdialog` also add `aria-modal="true"`. |
| `disable-aria-expanded` | Stops the popover writing `aria-expanded`/`aria-haspopup` on the trigger — set it on all but one popover that share a trigger. |
| `keep-connected-tooltip-open` | Keeps a tooltip wired to the same trigger visible while this popover is open, instead of closing it. |
| `append-to` / `z-index` / `stack-group-name` | Escape clipping ancestors (`append-to`) and control stacking; a depth manager computes `z-index` and groups by `stack-group-name` when unset. |

**Note:** `aria-labelledby`/`aria-describedby` name and describe the popover; for interactive popovers with neither set, it falls back to the trigger's accessible name. `show()`/`hide()` are public methods, and `shown`/`hidden`/`created`/`destroyed` events bubble and are composed.

### Limitations

- **React `append-to` unmount** — when React mounts/unmounts the popover and it moves itself elsewhere, React loses the moved node and throws `NotFoundError`. Wrap the popover in a real element (not a `React.Fragment`) so React manages the wrapper.
- **No focusable content on hover** — a hover-triggered popover must not contain a close button or other focusable content; keyboard and screen-reader users cannot reach it. Use a `click`/`manual` trigger (or `mdc-toggletip`) when the content is interactive.
- **Nested depth is capped** — popovers nest at most three levels, and the third level must not be persistent. `Escape` closes only the topmost level.
- **Opens only with a trigger** — without a matching `triggerid` the popover never opens; there is no standalone mode.

## Accessibility

### Built-in features

The popover renders as a `role="dialog"` overlay by default and adds `aria-modal="true"` automatically when the role is `dialog` or `alertdialog`. When `interactive` and `focus-trap` are both `true`, keyboard focus is trapped inside the popover while it is visible; on opening, focus is moved to the first focusable element (or to the index in `element-index-to-receive-focus`). When `hide-on-escape` is `true`, pressing `Escape` while focus is inside the popover (or anywhere on the page) closes it; the Escape keydown is `stopPropagation`ed unless `propagate-event-on-escape` is set. When `focus-back-to-trigger` is `true`, closing the popover returns focus to the trigger element. When `prevent-scroll` is `true`, scrolling outside the popover is suppressed while it is open.

The popover writes `aria-expanded` and `aria-haspopup` on the trigger element whenever it opens or closes, so assistive technologies announce the trigger's expanded state without extra wiring (set `disable-aria-expanded` to opt out when multiple popovers share a trigger). When the popover is `interactive` and no `aria-label`/`aria-labelledby` is supplied, the trigger's accessible name (`aria-label` or text content) is mirrored onto the popover so it is named for screen readers.

The built-in close button is rendered as an `mdc-button` with its own `aria-label` (`close-button-aria-label`).

Hover triggering uses delegated `mouseover`/`mouseout` listeners on `document` so the popover continues to work when the trigger lives inside a shadow root (`mdc-iconprovider`, `mdc-themeprovider`, etc.) — the spec'd `mouseenter`/`mouseleave` events do not cross shadow boundaries.

#### Internal ARIA managed by the component

| Element           | Attribute        | Value                                                                                                                       |
| ----------------- | ---------------- | --------------------------------------------------------------------------------------------------------------------------- |
| Popover host      | `role`           | mirrors `role` (default `dialog`); set to `null` if `role=""`                                                               |
| Popover host      | `aria-modal`     | `true` when `role` is `dialog` or `alertdialog`; removed otherwise                                                          |
| Popover host      | `aria-label`     | for interactive popovers, falls back to the trigger's `aria-label`/text content when none is provided                       |
| Popover host      | `aria-labelledby`| falls back to the trigger element's `id` for interactive popovers when no `aria-label` and no explicit value is provided    |
| Popover host      | `aria-describedby`| mirrors `aria-describedby`                                                                                                 |
| Trigger element   | `aria-expanded`  | `true` while visible, `false` while hidden; not written when `disable-aria-expanded` is `true`                              |
| Trigger element   | `aria-haspopup`  | mirrors trigger's existing `aria-haspopup` if set, otherwise the popover's `role` (or `dialog`); skipped when `disable-aria-expanded` is `true` |
| Built-in close button | `aria-label` | mirrors `close-button-aria-label`                                                                                           |

### Implementation requirements

#### General

- Set a unique `id` on the trigger element and the same value on the popover's `triggerid` attribute; otherwise the popover never opens.
- For `interactive` popovers that must keep keyboard focus inside, also set `focus-trap` — `interactive` alone does not enable the trap.
- For popovers that should close on Escape, set `hide-on-escape` (the popover does not close on Escape by default).
- When multiple popovers are wired to the same trigger, set `disable-aria-expanded` on all but one so the trigger's `aria-expanded`/`aria-haspopup` state remains coherent.

#### Labeling

- For interactive popovers, provide `aria-label` or `aria-labelledby` describing what the popover contains. If neither is supplied, the popover falls back to the trigger's accessible name.
- When `close-button` is `true`, provide `close-button-aria-label` so the close button has an accessible name.

## Related components

| Component | Relationship |
|---|---|
| `mdc-tooltip` | Hover/focus hint built on the popover shell; non-interactive text only. |
| `mdc-toggletip` | Click-triggered, persistent tip built on the popover; supports interactive content. |
| `mdc-coachmark` | Onboarding bubble built on the popover with contrast color, arrow, and close button. |
| `mdc-menupopover` | Menu surface built on the popover for command lists. |
| `mdc-searchpopover` | Search-and-results surface built on the popover. |
| `mdc-dialog` | Modal, centered surface that interrupts the user instead of anchoring to a trigger. |
