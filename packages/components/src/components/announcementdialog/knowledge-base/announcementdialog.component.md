---
title: Announcement Dialog
summary: Usage, guidelines, and accessibility for the mdc-announcementdialog component — a modal dialog used to display announcements with an illustration, content, and footer actions.
status: draft
tier: 3
component: announcementdialog
---

## Overview

The announcement dialog is a modal dialog used to display announcements. Consumers provide an illustration, content, and footer actions through slots. It is available in four sizes — `medium`, `large`, `xlarge`, and `fullscreen` — and may also receive custom styling/sizing. The dialog interrupts the user and blocks interaction with the rest of the application until it is closed.

### When to use

- Use `mdc-announcementdialog` to highlight a one-off announcement, onboarding moment, or feature reveal that benefits from a prominent illustration alongside the message and primary action.

### When not to use

- Use `mdc-dialog` for a generic modal that does not need an illustration-led layout.
- Use `mdc-toast` for non-blocking, transient feedback that should not interrupt the user.
- Use `mdc-banner` for persistent in-page messaging that should sit within the flow rather than blocking it.

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
- Prefer the `footer-link`, `footer-button-secondary`, and `footer-button-primary` slots over the generic `footer` slot so footer layout stays consistent.

### Property/Attribute details

- `size` — `medium` (656px), `large` (992px), `xlarge` (90% width), or `fullscreen` (100% width). When the responsive settings context has `forceFullscreenDialog` enabled, the effective size is always `fullscreen` regardless of the prop.

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
| Host           | `aria-labelledby` | Set to `triggerID` when provided and no labelling attribute is already set           |
| Close button   | `aria-label`    | Reflected from the `close-button-aria-label` attribute                                 |

### Implementation requirements

#### Labelling

- The dialog **must** have either an `aria-label` or `aria-labelledby` attribute so screen readers announce a name when it opens.
- Use `aria-labelledby` to reference the `id` of the element that labels the dialog when there is no visible title.
