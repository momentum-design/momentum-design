---
title: Dialog
summary: Usage, guidelines, and accessibility for the mdc-dialog component — a modal overlay with a titled, optionally described surface containing custom body content and footer actions.
tier: 3
component: dialog
---

## Overview

A dialog is a modal surface that interrupts the user to display information, confirm a destructive action, or collect input. It blocks interaction with the rest of the application until it is closed.

The dialog is a controlled component: the consumer drives visibility through the `visible` property and listens to the `close` event to react to the user dismissing the dialog. Visibility is not toggled internally.

Five sizes are available: `small` (432px), `medium` (656px), `large` (992px), `xlarge` (90% viewport), and `fullscreen` (100% viewport). Two visual variants are available: `default` and `promotional`. When the surrounding `mdc-responsivesettingsprovider` has `forceFullscreenDialog` enabled, every dialog is rendered as `fullscreen` regardless of its `size`.

### When to use

- Use `mdc-dialog` to confirm a destructive action (e.g. deleting an item) before it happens.
- Use it to collect a short input that should block the underlying flow until completed.
- Use it for messages that demand the user's attention and cannot be deferred to a banner or toast.

### When not to use

- Use `mdc-announcementdialog` when the surface is a curated marketing/announcement layout with a fixed structure.
- Use `mdc-popover` or `mdc-coachmark` for non-modal overlays anchored to a trigger.
- Use `mdc-toast` for transient, dismissable notifications that should not block interaction.
- Use `mdc-banner` for persistent in-page messages.

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
- Pair primary and secondary footer buttons clearly: the destructive or confirming action is the primary, the cancel/back action is the secondary.

### Property/Attribute details

- `visible` — controls the dialog's visibility. Default `false`. The component does not manage this internally.
- `triggerID` — id of the element that opened the dialog. Focus returns here on close, and `aria-expanded` / `aria-haspopup="dialog"` are managed on it while the dialog is open.
- `size` — `small` (default), `medium`, `large`, `xlarge`, or `fullscreen`. Overridden to `fullscreen` when the responsive settings provider has `forceFullscreenDialog` enabled.
- `variant` — `default` or `promotional`. Drives the visual treatment and the footer button colours.
- `header-text` — title rendered inside the header section. Used as the accessible name when `aria-label`/`aria-labelledby` are not set.
- `description-text` — descriptive text rendered below the header.
- `header-tag-name` / `description-tag-name` — HTML tag (`h1`–`h6`, `p`, etc.) used to render the header/description text. Default `header-tag-name="h2"`.
- `close-button-aria-label` — accessible label for the built-in close button. Provide a meaningful value; the close button has no visible text.
- `aria-label` — accessible name for the dialog when `header-text` is not used (or when a different name is needed).
- `aria-labelledby` — id of an element that labels the dialog. Use this when the title is rendered inside the body slot rather than via `header-text`.
- `aria-describedby` / `aria-description` — accessible description, set automatically from `description-text` and `triggerID` when not provided.
- `role` — defaults to `dialog`. Override (e.g. to `alertdialog`) when a different role better describes the surface.
- `disable-aria-haspopup` — when `true`, suppresses setting `aria-haspopup="dialog"` on the trigger. Default `false`. Set to `true` when the trigger already exposes a different `aria-haspopup`.
- `focus-trap` — when `true` (default), focus is restricted to elements inside the dialog while it is open. Disable only in very rare cases — a modal dialog should normally trap focus.
- `hide-backdrop` — when `true`, no backdrop is rendered. Default `false`.
- `stack-group-name` — when set, the dialog joins the named depth-manager group; only one dialog per group is rendered on top at a time.
- `z-index` — explicit z-index override. When not set, the depth manager computes it based on the number of stacked overlays.

### Limitations

- The dialog is not form-associated and does not participate in native form submission. To submit a form from within a dialog, render an `mdc-button` with `type="submit"` whose `form` attribute points at a `<form>` rendered outside the dialog (or inside the body slot).
- `Escape` closes only the top-most dialog in the depth manager. If multiple dialogs are visible at once, `Escape` is consumed by the top dialog and does not bubble to surrounding handlers.

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
| Host (dialog)  | `aria-labelledby`  | set from `triggerID` when no header text and no explicit labelling provided |
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

#### Labelling

- Provide `header-text` whenever possible — it doubles as the accessible name.
- If the title is rendered inside the body slot instead of `header-text`, set `aria-labelledby` pointing at that element.
- Always set `close-button-aria-label` — the close button has no visible text and otherwise has no accessible name.
