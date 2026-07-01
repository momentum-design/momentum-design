---
title: Banner
summary: Usage, guidelines, and accessibility for the mdc-banner component — an in-page message used to communicate important information that requires user awareness or action to dismiss.
tier: 3
component: banner
---

## Overview

The banner is an in-page message used to communicate important information to users. It supports several message variants with appropriate icons and styling, and can be customised through label, secondary label, leading icon, and trailing action slots. Banners are designed to be noticeable yet non-intrusive — visible enough to inform without interrupting the user's workflow.

### When to use

- Use `mdc-banner` to surface important contextual information at the top of a page, section, or panel — for example service status, validation summaries, or persistent notices that should remain visible until the user acts on them.

### When not to use

- Use `mdc-toast` for short, transient feedback that should auto-dismiss and not occupy layout space.
- Use `mdc-announcementdialog` or `mdc-dialog` when the message must block the rest of the UI until the user responds.
- Use `mdc-alertchip` for a compact, interactive inline status indicator rather than a full-width message bar.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/banner/index.js"; // custom element registration
// or via React wrapper
import { Banner } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-banner
  variant="warning"
  label="Connection unstable"
  secondary-label="We will retry automatically in the background."
>
  <mdc-button slot="trailing-actions" variant="tertiary">Dismiss</mdc-button>
</mdc-banner>
```

### Content guidance

- Keep `label` short and action-oriented; use `secondary-label` for the supporting detail.
- `secondary-label` is only rendered when `label` is also provided.
- Provide dismiss or follow-up controls through the `trailing-actions` slot rather than inventing custom layouts.

### Property/Attribute details

- `variant` — selects the message tone and the auto-injected leading icon. Supported values: `custom` (default, no icon), `informational`, `warning`, `error`, `success`. When `variant="custom"`, supply your own icon via the `leading-icon` slot, otherwise no icon is shown.
- `label` — primary message text shown in the leading area.
- `secondary-label` — supporting text rendered below `label`. Ignored when no `label` is provided.

The component also exposes slots for full layout control:

- `content` — completely replaces the default layout (leading icon, text, trailing actions).
- `leading-icon` — overrides the default variant-based icon.
- `leading-text` — overrides the label/secondary-label text rendering.
- `trailing-actions` — slot for action controls such as dismiss or "Learn more" buttons.

## Accessibility

### Built-in features

The banner is rendered as a generic container — it does not set any landmark or live-region role on its own.

#### Internal ARIA managed by the component

| Element | Attribute | Value                                  |
| ------- | --------- | -------------------------------------- |
| Host    | `role`    | None set by the component (default)    |

### Implementation requirements

#### General

- Decide on the right live-region behaviour for the surrounding context: when a banner appears dynamically and conveys important state (e.g. a warning or error), wrap or set `role="status"` / `role="alert"` (or `aria-live`) on the host so assistive technologies announce it.
- Ensure interactive controls slotted into `trailing-actions` (e.g. dismiss buttons) have accessible names — the banner does not label them.

#### Labelling

- The visible `label` (and `secondary-label`) act as the accessible message. Make sure the wording can stand alone without surrounding visual context.
- When using the `content` slot to fully replace the layout, retain a clear text label inside the slot so the message remains accessible.
