---
title: Toast
summary: Usage, guidelines, and accessibility for the mdc-toast component — a lightweight, non-blocking alert used to inform users about application processes.
tier: 3
component: toast
---

## Overview

The toast tells users that something happened in the app — a save, a background result, or a recoverable error — without interrupting what they are doing. It is the lowest-priority notification surface, so it informs rather than demands a response.

### When to use

- Use `mdc-toast` to confirm the result of a background or asynchronous process, such as a save, upload, or recoverable error.
- Use `mdc-toast` `success`, `warning`, or `error` to signal the severity of that result with a matching built-in icon.
- Use `mdc-toast` with footer buttons for a transient, optional action tied to the notification, such as "Undo" or "Retry".

### When not to use

- Do not use `mdc-toast` for persistent, in-flow messaging tied to a region of the page. Use `mdc-banner` instead.
- Do not use `mdc-toast` for a message that must be acknowledged before continuing. Use `mdc-dialog` or `mdc-announcementdialog` instead.
- Do not use `mdc-toast` for a status shown inline with content rather than a floating surface. Use `mdc-alertchip` instead.

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

The component does not auto-hide: listen for the `close` event to remove the toast from the DOM when the user dismisses it. The event bubbles and is composed, so listeners on ancestor elements (including across shadow DOM) receive it, and its detail includes the toast's `id`.

### Composition

- Put the main message in the `toast-body-normal` slot; add optional expandable detail in `toast-body-detailed`, revealed by the show more/less toggle.
- For the `custom` variant, supply your own leading media (an icon or `mdc-avatar`) via the `content-prefix` slot; the `success`, `warning`, and `error` variants render their own colored icon instead.
- Add actions through the `footer-button-primary` and `footer-button-secondary` slots (one `mdc-button` each), or replace the whole footer with the generic `footer` slot.

### Content guidance

- Keep `header-text` to a short, scannable title and let the body carry the detail.
- Keep the message to about three lines; move anything longer into `toast-body-detailed` behind a show-more toggle.
- Set `show-more-text` and `show-less-text` as a parallel pair ("Show more" / "Show less") whenever detailed content is present.
- Write footer button labels as concrete actions ("Undo", "Retry") rather than generic ones ("OK").

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `variant` | `custom` (default) or `success`/`warning`/`error`. The status variants render a matching colored icon; `custom` shows only what you slot into `content-prefix`. |
| `header-text` | Optional bold title at the top of the toast. |
| `header-tag-name` | Heading tag for the title (default `h2`); set it to fit the page's document outline. |
| `aria-label` | Accessible name for the toast when no `header-text` is provided. |
| `close-button-aria-label` | Accessible name for the built-in close button. |
| `show-more-text` / `show-less-text` | Labels for the detail toggle; both are required for the toggle to appear alongside detailed content. |

### Limitations

- **Lifecycle is external** — the toast has no built-in auto-dismiss, timing, positioning, or stacking; the host app shows it, places it (typically top-right), and removes it.
- **No built-in live region** — the component declares no `role` or `aria-live`; wrap it in a live region at the host so screen readers announce it.
- **Overflow measured once** — whether the header needs the show more/less toggle is checked on first update and is not re-evaluated if `header-text` changes later.
- **One button per footer slot** — `footer-button-primary` and `footer-button-secondary` each keep a single `mdc-button`; extra instances are removed.

## Accessibility

### Built-in features

The close button is a tertiary `mdc-button` named by `close-button-aria-label`, and the show more/less toggle for detailed content is keyboard-operable through `mdc-button`. When the detailed body is expanded, the host receives `data-expanded="true"` so styles and tests can react to the state.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-toast`) | `aria-label` | The consumer-supplied `aria-label`, used when no `header-text` is provided |
| Close button | `aria-label` | The consumer-supplied `close-button-aria-label` |
| Header text element | tag | The value of `header-tag-name` (default `h2`), so the toast contributes to the document outline |

### Implementation requirements

#### General

- Render the toast inside a host-owned live region (`role="alert"`, `role="status"`, or an `aria-live` container) so screen readers announce it when it appears; the component declares none itself.
- Follow WCAG 2.2 timing guidance: auto-dismiss (typically after 4–10 seconds) only when the same information is available elsewhere, such as a notification center; otherwise keep the toast until the user dismisses it manually.
- Auto-dismiss toasts that carry an action or unrecoverable information; keep them persistent so the action is not lost.

#### Labeling

- Always supply either `header-text` or `aria-label` so the toast has an accessible name.
- Provide `close-button-aria-label` so assistive technology users can identify the close action.
- For the `custom` variant, make any icon in the `content-prefix` slot decorative, or give it its own accessible name.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-banner` | For persistent, in-flow messaging tied to a page region. |
| `mdc-dialog` | For modal interruptions that require acknowledgement. |
| `mdc-alertchip` | For a status shown inline with content rather than a floating surface. |
