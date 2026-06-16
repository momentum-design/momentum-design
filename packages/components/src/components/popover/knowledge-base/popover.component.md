---
title: Popover
summary: Usage, guidelines, and accessibility for the mdc-popover component — a generic, floating overlay anchored to a trigger element with configurable trigger, placement, focus trap, and dismiss behaviour.
status: draft
tier: 3
component: popover
---

## Overview

The popover is a generic overlay that can be anchored to any actionable element on the page (identified by its `id`) and used to host tooltips, dropdowns, menus, or any other contextual content. It automatically positions itself based on available space, can resize to fit the viewport, and uses [Floating UI](https://floating-ui.com/) to keep its position correct as the page scrolls or resizes.

### When to use

- Use `mdc-popover` to render contextual UI floating next to a trigger element — additional information, action menus, or interactive panels.
- Use it when you need fine control over trigger events (click, hover, focus, manual), placement, offset, arrow, focus trap, or backdrop behaviour.

### When not to use

- Use `mdc-tooltip` for short, non-interactive descriptive text shown on hover/focus.
- Use `mdc-toggletip` for short text shown on click that does not need focus trapping.
- Use `mdc-dialog` for modal flows that interrupt the user, render in the centre of the viewport, and own their own header/footer chrome.
- Use `mdc-menupopover` / `mdc-coachmark` / `mdc-searchpopover` when one of those higher-level widgets already composes a popover for the use case.

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

- `triggerid` — id of the element that owns the popover. Required; without it the popover never opens.
- `trigger` — space-separated list of events that open the popover: `click`, `mouseenter`, `focusin`, or `manual`. When `mouseenter` is set on an interactive popover it is rewritten to `mouseenter click` (so the popover can be re-opened after closing with Escape); on a non-interactive popover it is rewritten to `mouseenter focusin` so keyboard focus also opens it. Default `click`.
- `placement` — `top` / `top-start` / `top-end` / `bottom` / `bottom-start` / `bottom-end` / `left` / `left-start` / `left-end` / `right` / `right-start` / `right-end`. In RTL layouts, `left`/`right` placements are flipped automatically. Default `bottom`.
- `color` — `tonal` or `contrast`. Default `tonal`.
- `visible` — opens or closes the popover programmatically. Default `false`.
- `offset` — distance in pixels from the trigger on the placement's main axis. Accepts a number (reflected as an attribute), an object (`{ mainAxis, crossAxis, alignmentAxis }`), or a function for full control. Default `4`.
- `strategy` — `absolute` (positioned relative to the nearest positioned ancestor) or `fixed` (positioned relative to the viewport — use when a scrollable container clips the popover). Default `absolute`.
- `boundary` — `clippingAncestors` or any CSS selector; describes what overflow is checked against. Default `clippingAncestors`.
- `boundary-root` — `viewport` or `document`; the root boundary used for overflow detection. Default `viewport`.
- `boundary-padding` — virtual padding in pixels around the boundary. Default unset.
- `disable-flip` — when `true`, prevents the popover from flipping placement to stay in view. Default `false`.
- `size` — when `true`, constrains the popover's max-height to the available space and adds a vertical scrollbar to the content when needed. Default `false`.
- `inline` — when `true`, uses Floating UI's `inline` middleware so that the popover positions correctly against multi-line inline trigger elements (e.g. hyperlinks, range selections). Default `false`.
- `animation-frame` — when `true`, repositions on every animation frame. Default `false`.
- `show-arrow` — renders a directional arrow that points at the trigger. Default `false`.
- `close-button` — renders a built-in close button in the corner of the popover. Default `false`.
- `close-button-aria-label` — accessible name for the built-in close button. Required when `close-button` is `true`.
- `interactive` — when `true`, marks the popover as containing interactive content. Required for `focus-trap`, and changes hover behaviour so the popover does not close while the pointer is over it.
- `focus-trap` — when `true` and `interactive` is `true`, traps keyboard focus inside the popover while it is visible.
- `element-index-to-receive-focus` — zero-based index of the focusable child that should receive focus when the popover opens with `focus-trap` enabled. Default `null` (the first focusable element).
- `prevent-scroll` — when `true`, prevents scrolling outside the popover while it is visible. Default `false`.
- `backdrop` — when `true`, renders a backdrop covering the rest of the page (the trigger remains visible above the backdrop). Default `false`.
- `backdrop-append-to` — id of the element the backdrop will be appended to. Default unset.
- `is-backdrop-invisible` — when `false`, the backdrop is dimmed instead of invisible. Default `true`.
- `delay` — `"openMs,closeMs"` open/close delay string (e.g. `"200,300"`). Invalid values are coerced to `"0,0"`. Default `"0,0"`.
- `hide-on-escape` — when `true`, the Escape key closes the popover. Default `false`.
- `propagate-event-on-escape` — when `true` and `hide-on-escape` is `true`, the Escape keydown event bubbles up after closing the popover. Default `false`.
- `hide-on-blur` — when `true`, the popover closes when focus leaves it. Default `false`.
- `hide-on-outside-click` — when `true`, a click outside the popover (including on the backdrop) closes it. Default `false`.
- `focus-back-to-trigger` — when `true`, focus returns to the trigger element after the popover closes. Default `false`.
- `append-to` — id of an element the popover should be physically moved to in the DOM (used to escape clipping ancestors). The original DOM location is occupied by an internal `mdc-popoverportal` element so removal stays consistent. Default unset.
- `z-index` — explicit z-index. When not set, an internal depth manager computes a z-index so stacked popovers layer correctly. Default computed.
- `stack-group-name` — popovers sharing the same name are stacked as a group by the depth manager. Default `''`.
- `role` — ARIA role applied to the popover host. Default `dialog`. When set to `dialog` or `alertdialog`, the host also gets `aria-modal="true"`; for any other role the `aria-modal` attribute is removed.
- `aria-labelledby` — id pointing to the element that names the popover. For interactive popovers, defaults to the trigger element when no `aria-label` is provided.
- `aria-describedby` — id pointing to descriptive text for the popover.
- `disable-aria-expanded` — when `true`, the popover does not write `aria-expanded` or `aria-haspopup` on the trigger element. Use this when multiple popovers share the same trigger so they do not fight over the trigger's ARIA state. Default `false`.
- `keep-connected-tooltip-open` — when `true`, a tooltip wired to the same trigger remains visible while this popover is open. When `false`, the tooltip is closed and re-enabled after the popover closes. Default `false`.

The `shown`, `hidden`, `created`, and `destroyed` events bubble and are composed. `show()` and `hide()` are public methods that respect the configured open/close delay.

### Limitations

- React with `append-to`: when React directly mounts/unmounts the popover and the popover moves itself to a different element, React loses track of the moved DOM node and throws a `NotFoundError`. Wrap the popover in another element (e.g. a `<div>`) so React can manage the wrapper instead. A `React.Fragment` is not sufficient.

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

#### Labelling

- For interactive popovers, provide `aria-label` or `aria-labelledby` describing what the popover contains. If neither is supplied, the popover falls back to the trigger's accessible name.
- When `close-button` is `true`, provide `close-button-aria-label` so the close button has an accessible name.
