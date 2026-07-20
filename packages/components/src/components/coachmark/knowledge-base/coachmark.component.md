---
title: Coachmark
summary: Usage, guidelines, and accessibility for the mdc-coachmark component — a contextual onboarding overlay that highlights a UI element with an arrow-anchored bubble to explain its purpose.
tier: 3
component: coachmark
---

## Overview

A coachmark is a contextual guidance overlay used to highlight a specific UI element and explain its purpose. It is typically shown as part of onboarding, feature discovery, or step-by-step walkthroughs.

It renders as a high-contrast bubble anchored to a trigger element with a visible arrow and a close button. Unlike a tooltip, the coachmark stays open until the user dismisses it (or the consumer toggles it programmatically), making it suitable for explanatory copy rather than a quick hover hint.

### When to use

- Use `mdc-coachmark` to introduce a new or complex feature when users land on a screen for the first time.
- Use `mdc-coachmark` to draw attention to a UI element that might otherwise be overlooked (a secondary action, a settings entry point).
- Use `mdc-coachmark` to provide step-by-step guidance in an onboarding flow or guided tour.

### When not to use

- Do not use `mdc-coachmark` for a short, hover-triggered hint about a control that needs no close affordance. Use `mdc-tooltip` instead.
- Do not use `mdc-coachmark` when a small piece of contextual help should appear on click and dismiss on outside interaction without a persistent step-flow. Use `mdc-toggletip` instead.
- Do not use `mdc-coachmark` when a generic dismissible overlay is needed and the onboarding-styled contrast bubble, arrow, and close-button defaults are not wanted. Use `mdc-popover` instead.
- Do not use `mdc-coachmark` when the message is modal, must block the rest of the UI, or is not anchored to a specific element. Use `mdc-dialog` or `mdc-announcementdialog` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/coachmark/index.js"; // custom element registration
// or via React wrapper
import { Coachmark } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-button id="filters-trigger">Filters</mdc-button>

<mdc-coachmark triggerid="filters-trigger" placement="bottom" visible>
  <p>Filter results to find what you need faster.</p>
</mdc-coachmark>
```

Set `visible` to show the coachmark and clear it to hide it. Listen for `shown`, `hidden`, `created`, and `destroyed` to drive your walkthrough state machine.

React-only quirk: when a coachmark uses `append-to`, the component moves itself out of the React-managed DOM. Wrap the coachmark in a non-Fragment element (e.g. a `<div>`) when conditionally rendering it, otherwise React may throw `NotFoundError` on unmount.

### Content guidance

- Keep the body short — coachmarks are scanned, not read; a single sentence explaining the highlighted element is usually enough.
- Always anchor a coachmark to the element it is describing via `triggerid`; an unanchored coachmark is confusing for sighted and screen-reader users alike.
- If the coachmark is part of a sequence, provide the user a clear way to advance (a primary button inside the slot) and a way to dismiss the whole sequence.

### Property/Attribute details

The coachmark exposes the same overlay surface as `mdc-popover` with onboarding-appropriate defaults.

| Option | Intent |
|---|---|
| `triggerid` | Id of the element the coachmark is anchored to. Required — an unanchored coachmark has no element to explain. |
| `trigger="manual"` (default) | Events that open the coachmark: `manual` (drive it via `visible`), `click`, `mouseenter`, `focusin`, or a space-separated combination. Onboarding flows normally stay `manual`. |
| `visible` | Shows or hides the coachmark imperatively; pair it with `trigger="manual"` to drive a walkthrough step by step. |
| `placement` | Side and alignment around the trigger (`top`/`bottom`/`left`/`right` plus `*-start`/`*-end`); auto-flips when there is not enough room. |
| `show-arrow` (default `true`) | Renders the anchor arrow that links the bubble to its trigger. Left on by default so the spatial relationship stays clear. |
| `close-button` (default `true`) | Renders a close button inside the bubble; keep it so every coachmark has an explicit dismiss affordance. |
| `disable-aria-expanded` (default `true`) | Keeps the trigger's `aria-expanded`/`aria-haspopup` untouched — leave it on so coachmarks do not fight other overlays for the trigger's ARIA state. |
| `offset` + `strategy` + `boundary` | Fine-grained positioning, identical to `mdc-popover`; adjust only when the default clips or mispositions the bubble. |
| `role="dialog"` (default) + `aria-label` / `aria-labelledby` | ARIA role and accessible name for the surface; the default `dialog` role requires a name. |

### Limitations

- **Fixed appearance** — color is always `contrast` and the arrow is always visible, so coachmarks stay recognizable across the product.
- **No trigger ARIA by default** — the trigger does not toggle `aria-expanded`/`aria-haspopup`. When overlays share a trigger, leave `disable-aria-expanded` on every coachmark and let one other overlay own that state.
- **Sequences are consumer-owned** — the component does not track "step 2 of 5"; the consumer coordinates ordering, advancing, and skipping.

## Accessibility

### Built-in features

The coachmark renders with `role="dialog"` and is positioned with [Floating UI](https://floating-ui.com/) relative to the trigger. While visible:

- The close button is focusable and dismisses the coachmark on activation.
- `Escape` closes the coachmark when `hide-on-escape` is enabled (inherited default from popover).
- Outside click closes the coachmark when `hide-on-outside-click` is enabled (inherited default from popover).
- An optional `focus-trap` can be enabled to keep keyboard focus inside the coachmark while open; when disabled, focus stays where the user left it.
- The `shown`, `hidden`, `created`, and `destroyed` events allow the consumer to drive a walkthrough or restore focus after dismissal.

The bubble is high-contrast and arrow-anchored to the trigger, making the spatial relationship explicit for sighted users; screen-reader users get the role and accessible name announcement when the coachmark opens.

#### Internal ARIA managed by the component

| Element        | Attribute          | Value                                                              |
| -------------- | ------------------ | ------------------------------------------------------------------ |
| Host (overlay) | `role`             | `dialog` (default; override via `role`)                            |
| Host (overlay) | `aria-modal`       | `true` when the focus trap is active                               |
| Host (overlay) | `aria-labelledby`  | id of the labeling element, when `aria-labelledby` is set         |
| Host (overlay) | `aria-label`       | mirrors `aria-label` when set                                      |
| Trigger        | `aria-expanded`    | not set (suppressed by `disable-aria-expanded`)                    |
| Trigger        | `aria-haspopup`    | not set (suppressed by `disable-aria-expanded`)                    |

### Implementation requirements

#### General

- Anchor every coachmark to a specific trigger via `triggerid` and place the coachmark close to the element it describes.
- Coordinate sequences from the consumer side: show one coachmark at a time, restore focus to a sensible element after dismissal, and provide a way to skip the whole flow.
- If multiple popovers share the same trigger, keep `disable-aria-expanded` enabled on every coachmark and let exactly one overlay drive `aria-expanded` / `aria-haspopup` on the trigger.

#### Labeling

- Provide an `aria-label` or `aria-labelledby` so the coachmark announces a meaningful name when it opens; the default `role="dialog"` requires it.
- If the coachmark's title is rendered inside its content, use `aria-labelledby` pointing at that element rather than repeating the text in `aria-label`.

## Related components

| Component | Relationship |
|---|---|
| `mdc-popover` | Generic overlay shell the coachmark is built on, with different defaults. |
| `mdc-tooltip` | Hover/focus hint for a control that needs no persistent bubble or close affordance. |
| `mdc-toggletip` | Click-triggered tip for one-off contextual help without an onboarding step-flow. |
| `mdc-dialog` | Modal surface for messages that must block the UI and are not anchored to an element. |
| `mdc-announcementdialog` | Modal, illustration-led surface for one-off announcements and feature reveals. |
