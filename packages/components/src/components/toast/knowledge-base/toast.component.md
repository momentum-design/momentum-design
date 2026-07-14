---
title: Toast
summary: Usage, guidelines, and accessibility for the mdc-toast component — a lightweight, non-blocking alert used to inform users about application processes.
tier: 3
component: toast
---

## Overview

`mdc-toast` is a lightweight, non-blocking alert used to inform users about application processes. It supports `success`, `warning`, `error`, and `custom` variants, can optionally collapse/expand a detailed body, and is designed to be controlled externally (the host application decides when to show, hide, or auto-dismiss it).

### When to use

- Surface short status messages about background or asynchronous processes (success confirmations, recoverable errors, warnings).
- Provide a place to expose primary/secondary actions tied to a transient notification (e.g. "Undo", "Retry").
- Show detailed information that the user can optionally expand via a show more/show less toggle.

### When not to use

- Use `mdc-banner` for persistent, in-flow messaging tied to a region of the page.
- Use `mdc-announcementdialog` or `mdc-dialog` for modal interruptions that require acknowledgement.
- Use `mdc-alertchip` for status indicators inline with content rather than a floating notification surface.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/toast/index.js"; // custom element registration
// or via React wrapper
import { Toast } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-toast
  variant="success"
  header-text="File uploaded"
  close-button-aria-label="Close notification"
>
  <mdc-text slot="toast-body-normal" tagname="span">Your file is ready to share.</mdc-text>
</mdc-toast>
```

Listen for the `close` event on the host application to remove the toast from the DOM when the user dismisses it; the component itself does not auto-hide.

### Content guidance

- When populating `toast-body-normal` or `toast-body-detailed`, wrap the content in `<mdc-text tagname="span">` so typography aligns with the toast's design.
- Keep `header-text` concise; it renders with the typography of a bold body-large heading.
- Provide `show-more-text` and `show-less-text` together with detailed body content so users can expand and collapse it.

### Property/Attribute details

- `variant` — one of `custom` (default), `success`, `warning`, `error`. Non-custom variants render a built-in prefix icon. With `custom`, supply your own icon via the `content-prefix` slot; otherwise no icon will be shown.
- `header-text` — string title rendered at the top of the toast.
- `header-tag-name` — HTML tag used for the header text element (default `h2`); set this to align with the surrounding document outline.
- `aria-label` — fallback label used when `header-text` is not provided.
- `close-button-aria-label` — accessible name for the built-in close button.
- `show-more-text` / `show-less-text` — labels for the toggle button that reveals or hides the detailed body. Both must be set together with detailed content for the toggle to render.
- The `close` event (`onClose` in React) is dispatched when the user activates the close button via mouse or keyboard. The event detail includes the toast's `id`.
- Footer slots `footer-button-primary` and `footer-button-secondary` are filtered to a single `mdc-button` each; additional instances are removed. Custom footer markup can be passed via the generic `footer` slot.

### Limitations

- The component does not implement auto-dismiss timing or stacking; lifecycle and positioning are owned by the consuming application.
- Whether the header text needs the show more/less toggle is measured once on first update; later changes to `header-text` will not re-evaluate overflow.
- Automatic truncation is only applied to the header, and is not applied to the body slots.

## Accessibility

### Built-in features

The close button is a tertiary `mdc-button` whose accessible name is taken from `close-button-aria-label`. The expand/collapse toggle for detailed content is also keyboard accessible via `mdc-button`. When the detailed body is expanded, the host element receives a `data-expanded="true"` attribute so styles and tests can react to the state.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-toast`) | `aria-label` | The consumer-supplied `aria-label`, used when no `header-text` is provided |
| Close button | `aria-label` | The consumer-supplied `close-button-aria-label` |
| Header text element | tag | The value of `header-tag-name` (default `h2`) so the toast contributes to the document outline |

### Implementation requirements

#### General

- Always supply either a `header-text` or an `aria-label` so the toast has an accessible name.
- Provide `close-button-aria-label` so users of assistive technologies can identify the close action.
- Decide on the live-region semantics at the host level: render the toast inside an element with the appropriate `role="alert"`, `role="status"`, or `aria-live` region so screen readers announce it when it appears. The component itself does not declare a live region.

#### Labelling

- Use `header-text` for short, human-readable titles; the heading level is controlled by `header-tag-name`.
- When the header is omitted, set `aria-label` to describe the toast's purpose.
- For the `custom` variant, any icon placed in the `content-prefix` slot should either be decorative (visually only) or be given its own accessible name via `aria-label`.

### Notes

- The `close` event bubbles and is composed, so listeners on ancestor elements (including across shadow DOM) will receive it.
