---
title: ButtonLink
summary: Usage, guidelines, and accessibility for the mdc-buttonlink component — a link that looks like a button, supporting variant, color, size, and prefix/postfix icons while rendering as an anchor.
tier: 3
component: buttonlink
---

## Overview

The buttonlink renders a navigational anchor (`<a>`) styled as a button. It is the right choice when the visual treatment should match a button but the action is navigation — the underlying element carries link semantics, so right-click, middle-click, and "open in new tab" all work as users expect.

### When to use

- Use `mdc-buttonlink` when the control navigates to a different URL or in-app route but the design calls for a button's visual weight (primary call-to-action, prominent toolbar entry, etc.).
- Use it when you want native browser link affordances such as `target="_blank"`, `download`, `ping`, or `rel` while keeping the button appearance.

### When not to use

- Use `mdc-button` when the control performs an action (submitting a form, opening a dialog, running a command) and does not change the URL.
- Use `mdc-link` when the control is a textual inline or standalone link and does not need to look like a button.
- Use `mdc-linksimple` when you need a minimal, unstyled link primitive without button styling or icon slots.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/buttonlink/index.js"; // custom element registration
// or via React wrapper
import { ButtonLink } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-buttonlink href="/docs" variant="primary" size="32">View documentation</mdc-buttonlink>

<mdc-buttonlink
  href="https://example.com/report.pdf"
  download
  variant="secondary"
  prefix-icon="download-bold"
  size="32"
>
  Download report
</mdc-buttonlink>

<mdc-buttonlink
  href="https://example.com"
  target="_blank"
  rel="noopener"
  variant="tertiary"
  prefix-icon="pop-out-bold"
  size="32"
  data-aria-label="Open example.com in a new tab"
></mdc-buttonlink>
```

### Content guidance

- Use destination-oriented labels (e.g. "View documentation", "Open release notes") rather than verbs like "Click here".
- For icon-only buttonlinks, set `data-aria-label` to describe the destination — the icon alone is not announced.
- When `target="_blank"`, indicate that the link opens in a new tab in the visible label or accessible name, and include `rel="noopener"` (or `noreferrer`) for safety.

### Property/Attribute details

- `href` — destination URL. Required for the link to be activatable.
- `target` — anchor target window: `_self` (default), `_blank`, `_parent`, `_top`, or `_unfencedTop`.
- `rel` — space-separated relationship tokens (e.g. `noopener`, `noreferrer`); pair with `target="_blank"`.
- `download` — when set, instructs the browser to download the linked resource. An empty string lets the browser pick the filename; any other string is used as the suggested filename.
- `ping` — space-separated list of URLs notified when the link is followed.
- `hreflang` — language hint for the linked resource.
- `type` — MIME type hint for the linked resource.
- `referrerpolicy` — controls the Referer header sent when following the link.
- `variant` — visual style applied through `ButtonComponentMixin`.
  - `primary` (default) — solid background.
  - `secondary` — transparent background with border.
  - `tertiary` — text/icon only, no background or border.
- `color` — semantic color. `default` (default), `positive`, `negative`, `accent`, `promotional`. Tertiary buttonlinks only support `default`, `accent`, and `negative`; other values fall back to `default`.
- `size` — pixel-derived sizing matched against the inferred button type:
  - Pill / pill-with-icon: `40`, `32` (default), `28`, `24`.
  - Icon: `64`, `52`, `40`, `32` (default), `28`, `24`. `20` is only valid when `variant="tertiary"`.
  - Invalid combinations fall back to the default (`32`).
- `prefix-icon` / `postfix-icon` — icon name rendered before/after the slotted label. Supplying an icon without a default slot label produces an icon-only buttonlink.
- `inline` — when `true`, the buttonlink flows inline with surrounding text rather than as a standalone block. Defaults to `false`.
- `inverted` — flips the color scheme for use on dark/inverted surfaces.
- `disabled` — disables navigation. Sets `aria-disabled="true"`, makes the anchor unfocusable (`tabindex="-1"`), and suppresses click/keydown navigation.
- `soft-disabled` — appears disabled but stays focusable and activatable. Sets `aria-disabled="true"` without changing `tabindex`; consumers must suppress side-effects themselves.
- `data-aria-label` — accessible name applied to the underlying `<a>` element via `aria-label`. Required for icon-only buttonlinks.

### Limitations

- Unlike `mdc-button`, the buttonlink does not expose `active`/`aria-pressed` semantics — anchors do not have a toggled state. Use `mdc-button` when the control must communicate an on/off state.
- `size="20"` is only honoured for tertiary icon buttonlinks; other variant/size combinations fall back to the default size.
- `inverted` is purely visual; pair it with a surface that actually requires the inverted palette.

## Accessibility

### Built-in features

The buttonlink renders a real `<a>` element inside its shadow DOM, so screen readers and the browser treat it as a link: it appears in the page's link list, supports the browser's native context menu, and respects `target`, `rel`, and `download` semantics out of the box. Focus is delegated into the shadow anchor (`delegatesFocus: true`), so consumer focus styles and keyboard navigation work on the host element.

Activation works via `Enter` (the anchor's native behaviour) and on click. When `disabled` is set, the component intercepts both `click` and `keydown` to prevent navigation, marks the host `aria-disabled="true"`, and gives the anchor `tabindex="-1"` so it is removed from the tab order. `soft-disabled` only sets `aria-disabled="true"`; the anchor remains focusable and activatable so the consumer can suppress the side-effect while keeping the control discoverable.

The accessible name on the inner anchor is taken from the host's `data-aria-label` attribute and mirrored onto the anchor's `aria-label`.

#### Internal ARIA managed by the component

| Element        | Attribute       | Value                                                                                              |
| -------------- | --------------- | -------------------------------------------------------------------------------------------------- |
| Host           | `aria-disabled` | `true` while `disabled` or `soft-disabled`; removed otherwise                                      |
| Shadow `<a>`   | `href`          | Mirrors the `href` property                                                                        |
| Shadow `<a>`   | `target`        | Mirrors the `target` property (default `_self`)                                                    |
| Shadow `<a>`   | `rel`           | Mirrors the `rel` property when set                                                                |
| Shadow `<a>`   | `download`      | Mirrors the `download` property when set                                                           |
| Shadow `<a>`   | `aria-label`    | Mirrors `data-aria-label` from the host                                                            |
| Shadow `<a>`   | `tabindex`      | `0` when enabled; `-1` while `disabled`                                                            |

### Implementation requirements

#### Labelling

- Text buttonlinks get their accessible name from the slotted label — keep it destination-oriented and self-describing.
- Icon-only buttonlinks (no default slot content, only `prefix-icon` or `postfix-icon`) MUST set `data-aria-label` so the inner anchor has an accessible name.
- When `target="_blank"`, surface the "opens in a new tab" hint in the label or `data-aria-label`, and add `rel="noopener"` (and `noreferrer` when appropriate) to avoid window-opener leaks.
- For downloads, prefer a label that names the file or format (e.g. "Download PDF report") so the action is obvious before the user activates it.
