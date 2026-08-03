---
title: Announcement Dialog
summary: Usage, guidelines, and accessibility for the mdc-announcementdialog component — a modal dialog used to display announcements with an illustration, content, and footer actions.
tier: 3
component: announcementdialog
---

## Overview

The announcement dialog is a modal dialog used to display announcements. Consumers provide an illustration, content, and footer actions through slots. It is available in four sizes — `medium`, `large`, `xlarge`, and `fullscreen` — and may also receive custom styling/sizing. The dialog interrupts the user and blocks interaction with the rest of the application until it is closed.

### When to use

- Use `mdc-announcementdialog` to highlight a one-off announcement, onboarding moment, or feature reveal that benefits from a prominent illustration alongside the message and primary action.
- Use `mdc-announcementdialog` when the message deserves a full-attention, illustration-led moment rather than a plain confirmation or input surface.

### When not to use

- Do not use `mdc-announcementdialog` for a generic modal that does not need an illustration-led layout. Use `mdc-dialog` instead.
- Do not use `mdc-announcementdialog` for confirming or blocking an action. Use `mdc-dialog` (or `alertdialog` role) instead.
- Do not use `mdc-announcementdialog` for non-blocking, transient feedback. Use `mdc-toast` instead.
- Do not use `mdc-announcementdialog` for persistent in-page messaging that should sit within the flow. Use `mdc-banner` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/announcementdialog/index.js"; // custom element registration
// or via React wrapper
import { AnnouncementDialog } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-announcementdialog
  visible
  size="medium"
  illustration="threetwozero-success"
  header-text="You're all set"
  aria-label="You're all set"
>
  <span slot="description-container">Your workspace is ready to use.</span>
  <mdc-button slot="footer-button-primary">Get started</mdc-button>
</mdc-announcementdialog>
```

The dialog is a controlled component — toggle the `visible` property to show or hide it, and handle the `close` event (fired when the Close button is clicked or Escape is pressed) to update your state. The `close` event does not hide the dialog on its own.

If a `triggerId` is provided, the dialog manages focus return to that element; otherwise it remembers the previously focused element before opening.

### Content guidance

- Choose an illustration that matches the dialog size — the illustration filename encodes its pixel size (e.g. `threetwozero` = 320px).
- Keep the header short and benefit-led, and the description to one or two sentences; the layout is meant to be scanned, not read at length.
- Prefer the `footer-link`, `footer-button-secondary`, and `footer-button-primary` slots over the generic `footer` slot so footer layout stays consistent, and lead with a single clear primary action.

### Property/Attribute details

The announcement dialog extends `mdc-dialog`, so it inherits `visible`, `triggerID`, `close-button-aria-label`, `aria-label`/`aria-labelledby`, and the footer slots. It adds an illustration and a narrower set of sizes.

| Option | Intent |
|---|---|
| `illustration` | Name of the illustration shown alongside the message. Pick one whose encoded pixel size matches `size` (e.g. `threetwozero` = 320px). Override the whole area with the `illustration-container` slot for custom artwork. |
| `size="medium"` (default) | `medium` (656px), `large` (992px), `xlarge` (90% width), or `fullscreen` (100% width) — note there is no `small`. Forced to `fullscreen` when the responsive settings context has `forceFullscreenDialog` enabled. |
| `visible` | Drives visibility (inherited). Required — the component never toggles it; set it from consumer state and react to `close`. |
| `header-text` | Title rendered in the content section; doubles as the accessible name when no `aria-label`/`aria-labelledby` is set. |

### Limitations

- **Fixed variant** — the `promotional`/`default` variant is forced to `default`; the announcement styling is not configurable via `variant`.
- **No small size** — the smallest option is `medium`; use `mdc-dialog` when a `small` surface is needed.
- **Illustration size is manual** — the illustration does not scale to `size` automatically; pick a filename whose encoded pixel size matches the chosen size.
- **Dismissal is consumer-controlled** — `close` fires on the close button or Escape but does not hide the dialog; the consumer must set `visible="false"` in response.

## Accessibility

### Built-in features

- Renders as a modal dialog and traps focus inside the dialog while it is open.
- Closes when the user presses Escape (fires the `close` event).
- Prevents the underlying page from scrolling while the dialog is visible.
- Returns focus to the previously focused element when the dialog closes; when `triggerId` is set, focus is returned to that element instead.

#### Internal ARIA managed by the component

| Element        | Attribute       | Value                                                                                  |
| -------------- | --------------- | -------------------------------------------------------------------------------------- |
| Host           | `role`          | `dialog` (default) or `alertdialog` when set by the consumer                           |
| Host           | `aria-modal`    | `true` while the dialog is visible                                                     |
| Host           | `aria-label`    | Mirrored from `header-text` when neither `aria-label` nor `aria-labelledby` is set     |
| Host           | `aria-labelledby` | Set to `triggerID` when provided and no labeling attribute is already set           |
| Close button   | `aria-label`    | Reflected from the `close-button-aria-label` attribute                                 |

### Implementation requirements

#### Labeling

- The dialog **must** have either an `aria-label` or `aria-labelledby` attribute so screen readers announce a name when it opens.
- Use `aria-labelledby` to reference the `id` of the element that labels the dialog when there is no visible title.

## Related components

| Component | Relationship |
|---|---|
| `mdc-dialog` | Base modal dialog it extends; use it directly for generic confirmations, input, or non-illustration layouts. |
| `mdc-coachmark` | Non-modal, anchored onboarding overlay for guiding attention to a specific element. |
| `mdc-toast` | Transient, non-blocking notification for low-priority feedback. |
| `mdc-banner` | Persistent in-page message that sits within the flow rather than interrupting it. |
| `mdc-illustration` | Renders the artwork shown in the announcement dialog. |
| `mdc-button` | Renders the footer primary/secondary actions inside the dialog. |
