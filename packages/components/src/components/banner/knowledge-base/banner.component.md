---
title: Banner
summary: Usage, guidelines, and accessibility for the mdc-banner component — an in-page message used to communicate important information that requires user awareness or action to dismiss.
tier: 3
component: banner
---

## Overview

The banner communicates important, persistent information that a user should notice and act on — a system status, an account issue, or a recommended next step. Unlike a toast, it stays in place until the user resolves or dismisses it, so it suits messages that must not be missed while staying non-intrusive to the workflow.

### When to use

- Use `mdc-banner` for system-wide announcements or updates, such as maintenance notices or connection issues.
- Use `mdc-banner` `informational`, `warning`, `error`, or `success` for a non-blocking status message that should persist until acted on.
- Use `mdc-banner` to prompt an optional but recommended action, such as verifying an email, through the `trailing-actions` slot.

### When not to use

- Do not use `mdc-banner` for a message that must block progress until acknowledged. Use `mdc-dialog` instead.
- Do not use `mdc-banner` for brief, transient feedback that can auto-dismiss. Use `mdc-toast` instead.
- Do not use `mdc-banner` for a compact, interactive inline status marker. Use `mdc-alertchip` instead.

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

### Composition

- Set `label` for the message and `secondary-label` for supporting detail; the secondary label renders only when `label` is present.
- Non-custom variants inject their own leading icon; for the `custom` variant, provide one through the `leading-icon` slot or leave it iconless.
- Put dismiss, reset, or "Learn more" controls in the `trailing-actions` slot.
- Use `leading-text` to override the default text rendering, or the `content` slot to replace the entire layout — keep readable text inside either.

### Content guidance

- Keep `label` short and scannable; move supporting detail into `secondary-label`.
- Use `secondary-label` only when the extra line adds real information; for a single-line banner, use `label` alone.
- Front-load the copy — banners are always left-aligned and may wrap to multiple lines.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `variant` | `custom` (default, no icon) or `informational`/`warning`/`error`/`success`. The status variants set the tone and inject a matching leading icon; use `custom` with your own `leading-icon` for anything else. |
| `label` | Primary message text shown in the leading area. |
| `secondary-label` | Supporting text below the label; rendered only when `label` is set, and it promotes the label to a bold title for hierarchy. |
| `open` | Must be `true` on mount. Set to `false` to play the exit animation and dispatch `hidden` when complete. Defaults to `true`. |

### Motion

| Phase | Trigger | Effect |
| --- | --- | --- |
| Entrance | Host mounts with `open` true | Host: `slideEntrance` (`translateY(-1rem)` → `none`, opacity 0→1). Inner: `expand` (`grid-template-rows` 0fr→1fr). |
| Exit | `open` becomes `false` | Host: `slideExit` (`translateY(-1rem)`, opacity 1→0). Inner: `collapse` (`grid-template-rows` 1fr→0fr), then `hidden` event. |

Slide distance defaults to `1rem` via `--mdc-banner-slide-offset` on the host. Opacity is animated by the slide tokens on the host only; `.banner-inner` handles layout height via expand/collapse.

`data-motion-phase` is reflected on the host for debugging and tests (`entering`, `visible`, `exiting`). With `prefers-reduced-motion: reduce` or when motion tokens are disabled, state changes apply instantly.

Consumers that remove the banner from the DOM synchronously skip exit animation. Keep the host mounted, set `open="false"`, and unmount in the `hidden` handler:

```html
<mdc-banner id="banner" variant="warning" label="Connection unstable">
  <mdc-button slot="trailing-actions" aria-label="Dismiss" @click="${() => { banner.open = false; }}"></mdc-button>
</mdc-banner>
<script>
  banner.addEventListener('hidden', () => banner.remove());
</script>
```

Mounting with `open="false"` is not supported.

### Limitations

- **No built-in live region** — the banner sets no `role` or `aria-live`; add one at the host so dynamic messages are announced.
- **No built-in dismiss** — the component renders no close control; supply one through `trailing-actions` and handle removal in the host.
- **Secondary needs label** — `secondary-label` renders only alongside `label`, so a standalone secondary line is ignored.
- **Left-aligned only** — banner content is always left-aligned; center alignment is not supported.
- **No self-positioning** — the banner does not place itself; the consumer positions it below the header, panel, or modal.

## Accessibility

### Built-in features

The banner is rendered as a generic container — it does not set any landmark or live-region role on its own.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | None set by the component (default) |

### Implementation requirements

#### General

- Decide on the right live-region behavior for the surrounding context: when a banner appears dynamically and conveys important state (a warning or error), set `role="status"` / `role="alert"` (or `aria-live`) on the host so assistive technologies announce it.
- Ensure interactive controls slotted into `trailing-actions` (such as dismiss buttons) have accessible names — the banner does not label them.

#### Labeling

- The visible `label` (and `secondary-label`) act as the accessible message; make sure the wording can stand alone without surrounding visual context.
- When using the `content` slot to fully replace the layout, retain a clear text label inside the slot so the message remains accessible.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-toast` | For brief, transient feedback that auto-dismisses instead of persisting. |
| `mdc-dialog` | For a message that must block progress until acknowledged. |
| `mdc-alertchip` | For a compact, interactive inline status marker rather than a full-width bar. |
