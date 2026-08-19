---
title: Dialog
summary: Usage, guidelines, and accessibility for the mdc-dialog component — a modal overlay with a titled, optionally described surface containing custom body content and footer actions.
tier: 3
component: dialog
---

## Overview

A dialog is a modal surface that interrupts the user to display information, confirm a destructive action, or collect input. It blocks interaction with the rest of the application until it is closed.

### When to use

- Use `mdc-dialog` to confirm a destructive action (e.g. deleting an item) before it happens.
- Use `mdc-dialog` to collect a short input that should block the underlying flow until it is completed.
- Use `mdc-dialog` for messages that demand the user's attention and cannot be deferred to a banner or toast.

### When not to use

- Do not use `mdc-dialog` for a curated marketing or announcement layout with a fixed illustration-led structure. Use `mdc-announcementdialog` instead.
- Do not use `mdc-dialog` for non-modal overlays anchored to a trigger. Use `mdc-popover` or `mdc-coachmark` instead.
- Do not use `mdc-dialog` for transient, dismissable notifications that should not block interaction. Use `mdc-toast` instead.
- Do not use `mdc-dialog` for persistent in-page messages that belong in the flow. Use `mdc-banner` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/dialog/index.js"; // custom element registration
// or via React wrapper
import { Dialog } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-button id="open-dialog">Open dialog</mdc-button>

<mdc-dialog
  id="confirm-delete"
  visible
  triggerID="open-dialog"
  header-text="Delete item?"
  description-text="This action cannot be undone."
  close-button-aria-label="Close"
>
  <p slot="dialog-body">
    The selected item will be permanently removed from your account.
  </p>
  <mdc-button slot="footer-button-secondary" variant="secondary">Cancel</mdc-button>
  <mdc-button slot="footer-button-primary">Delete</mdc-button>
</mdc-dialog>
```

The dialog renders nothing in the DOM until `visible` becomes `true`. Listen to `close` to detect the user pressing the close button or `Escape` (the consumer must set `visible="false"` in response). Listen to `shown`, `hidden`, `created`, and `destroyed` to drive surrounding state.

Provide a `triggerID` pointing at the element that opens the dialog so the component can return focus there on close and toggle `aria-expanded` / `aria-haspopup` on it. Without `triggerID`, the dialog returns focus to whichever element was active when it opened.

Available slots:

- `header-prefix` — content rendered before the `header-text` (e.g. an icon).
- `dialog-body` — the main body content.
- `footer-link` — slot for an `mdc-link` in the footer.
- `footer-button-secondary` — slot for the secondary `mdc-button` in the footer.
- `footer-button-primary` — slot for the primary `mdc-button` in the footer.
- `footer` — fully custom footer content; prefer the named footer slots when possible.

When multiple dialogs are open at once, the component uses an internal depth manager to compute z-index so that the most recently opened dialog stacks on top. Pressing `Escape` closes only the top-most dialog.

### Content guidance

- Keep `header-text` short and action-oriented — it doubles as the accessible name when no explicit `aria-label` is provided.
- Use `description-text` for one or two sentences of context; longer content belongs in the body slot.
- Use `close-button-aria-label` to describe what closing the dialog does (e.g. "Close delete confirmation"); a generic "Close" is acceptable when the header already conveys context.
- Give the dialog at least one action. The confirming or destructive action is the primary (`footer-button-primary`), the cancel or back action is the secondary (`footer-button-secondary`), and a tertiary action can sit in `footer-link`.
- For a step flow, label the forward action as the primary ("Next") and the back action as the secondary ("Back"). For a save flow, keep a "Cancel" secondary even though the close button is redundant.
- For a destructive confirmation, write an unambiguous primary label ("Delete") rather than "OK", and use the button's negative styling so the consequence is clear.
- An informational dialog can ship with a single "Dismiss" action.

### Property/Attribute details

| Option | Intent |
|---|---|
| `visible` | Drives the dialog's visibility. Required — the component never toggles this itself; set it from consumer state. |
| `triggerID` | Id of the element that opened the dialog. Set it so focus returns there on close and the trigger's `aria-expanded`/`aria-haspopup="dialog"` stay accurate. |
| `size="small"` (default) | `small`, `medium`, `large`, `xlarge`, or `fullscreen`; size to the content. Forced to `fullscreen` when the responsive settings provider has `forceFullscreenDialog` enabled. |
| `variant="default"` | `default` for standard modals; `promotional` for a heavier, marketing-style treatment with matching footer button colors. |
| `header-text` + `description-text` | Title and one- or two-sentence context rendered in the header; `header-text` doubles as the accessible name. Put longer content in the `dialog-body` slot. |
| `header-tag-name` / `description-tag-name` | HTML tag used to render the header/description (`h1`–`h6`, `p`, …); default `header-tag-name="h2"`. Adjust to fit the page's heading outline. |
| `close-button-aria-label` | Accessible name for the built-in close button, which has no visible text. Always provide it. |
| `role="dialog"` (default) | Override to `alertdialog` for urgent confirmations that need the assertive role. |
| `focus-trap` (default `true`) | Keeps focus inside the dialog while open; leave it on — a modal dialog should trap focus except in rare cases. |
| `hide-backdrop` | Removes the backdrop; leave it off so the dialog reads as modal and blocks the page. |
| `aria-label` / `aria-labelledby` / `aria-describedby` / `aria-description` | Explicit labeling/description, wired automatically from `header-text`/`description-text`/`triggerID` when omitted. Use `aria-labelledby` when the title lives in the body slot. |
| `disable-aria-haspopup` | Suppresses `aria-haspopup="dialog"` on the trigger; set it only when the trigger already exposes a different `aria-haspopup`. |
| `stack-group-name` / `z-index` | Coordinate stacking when multiple dialogs can open at once; a depth manager computes `z-index` when unset. |

### Limitations

- **Not form-associated** — the dialog does not participate in native form submission. Render an `mdc-button` with `type="submit"` whose `form` attribute points at a `<form>` outside the dialog (or in the body slot).
- **Escape closes the top dialog only** — when several dialogs are open, `Escape` is consumed by the top-most one and does not bubble to surrounding handlers.
- **Dismissal is consumer-controlled** — because `visible` is external, closing on outside click or Escape only fires `close`; the consumer must react. Withhold that response for critical confirmations that need an explicit choice.

## Accessibility

### Built-in features

The dialog renders with `role="dialog"` and `aria-modal="true"`. While visible:

- A focus trap keeps keyboard focus inside the dialog (`focus-trap` is `true` by default).
- `Escape` closes the dialog by firing the `close` event (the consumer is expected to set `visible="false"`).
- The close button is focusable and also fires `close` on activation.
- Page scrolling is prevented while the dialog is open (`preventScroll`).
- A backdrop is rendered behind the dialog (unless `hide-backdrop` is `true`) and prevents interaction with the rest of the page.
- On close, focus returns to the element identified by `triggerID`, or to the element that was focused when the dialog opened.
- The trigger element receives `aria-expanded="true"` while the dialog is open and `aria-expanded="false"` when closed. Unless `disable-aria-haspopup` is `true`, the trigger also receives `aria-haspopup="dialog"`.

`header-text` is automatically wired as the dialog's `aria-label` when no `aria-label`/`aria-labelledby` is provided. `description-text` is wired as `aria-description` when no `aria-describedby`/`aria-description` is provided. When neither header nor description text is provided but `triggerID` is set, `aria-labelledby` and `aria-describedby` fall back to the trigger's id.

#### Internal ARIA managed by the component

| Element        | Attribute          | Value                                                                       |
| -------------- | ------------------ | --------------------------------------------------------------------------- |
| Host (dialog)  | `role`             | `dialog` (default; override via `role`)                                     |
| Host (dialog)  | `aria-modal`       | `true`                                                                      |
| Host (dialog)  | `aria-label`       | set from `header-text` when no `aria-label`/`aria-labelledby` provided      |
| Host (dialog)  | `aria-labelledby`  | set from `triggerID` when no header text and no explicit labeling provided |
| Host (dialog)  | `aria-description` | set from `description-text` when no `aria-describedby` provided             |
| Host (dialog)  | `aria-describedby` | set from `triggerID` when no description text provided                      |
| Close button   | `aria-label`       | mirrors `close-button-aria-label`                                           |
| Trigger        | `aria-expanded`    | `true` while the dialog is visible, `false` after close                     |
| Trigger        | `aria-haspopup`    | `dialog` (suppressed when `disable-aria-haspopup` is `true`)                |

### Implementation requirements

#### General

- Drive `visible` from consumer state; the dialog does not manage it. Listen for `close` and set `visible` to `false` to dismiss.
- Provide `triggerID` so focus returns to the opener element and the trigger's `aria-expanded` is updated.
- When multiple dialogs may open at once, set `stack-group-name` to coordinate stacking and avoid duplicate top-most dialogs.
- When the dialog hosts a form, place the `<form>` outside the dialog (or inside the body slot) and connect submit buttons via the `form` attribute.

#### Labeling

- Provide `header-text` whenever possible — it doubles as the accessible name.
- If the title is rendered inside the body slot instead of `header-text`, set `aria-labelledby` pointing at that element.
- Always set `close-button-aria-label` — the close button has no visible text and otherwise has no accessible name.

## Related components

| Component | Relationship |
|---|---|
| `mdc-announcementdialog` | Modal dialog with a fixed illustration-led layout for announcements and reveals. |
| `mdc-popover` | Non-modal overlay anchored to a trigger, for content that should not block the page. |
| `mdc-coachmark` | Non-modal, anchored onboarding overlay for guiding attention to an element. |
| `mdc-toast` | Transient, non-blocking notification for low-priority feedback. |
| `mdc-banner` | Persistent in-page message that sits within the flow rather than interrupting it. |
| `mdc-button` | Renders the footer primary/secondary actions inside the dialog. |
