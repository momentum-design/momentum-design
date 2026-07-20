---
title: ButtonLink
summary: Usage, guidelines, and accessibility for the mdc-buttonlink component — a link that looks like a button, supporting variant, color, size, and prefix/postfix icons while rendering as an anchor.
tier: 3
component: buttonlink
---

## Overview

`mdc-buttonlink` provides a navigational anchor (`<a>`) styled as a button. It exists for cases where an action navigates to a new location but should carry a button's visual weight, while keeping native link semantics intact.

### When to use

- Use `mdc-buttonlink` when the control navigates to a URL or in-app route but the design calls for a button's visual weight, such as a prominent call-to-action.
- Use `mdc-buttonlink` when you need native link affordances — `target="_blank"`, `download`, `ping`, or `rel` — while keeping the button appearance.

### When not to use

- Do not use `mdc-buttonlink` for an action that does not change the URL (submitting a form, opening a dialog, running a command). Use `mdc-button`.
- Do not use `mdc-buttonlink` for an inline or standalone text link. Use `mdc-link`.
- Do not use `mdc-buttonlink` when you need a minimal, unstyled link primitive without button styling or icon slots. Use `mdc-linksimple`.

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

- Use destination-oriented labels (for example "View documentation", "Open release notes") rather than verbs like "Click here".
- When `target="_blank"`, indicate that the link opens in a new tab in the visible label or accessible name.

### Property/Attribute details

| Option | Intent |
|---|---|
| `href` | Destination URL. Required — without it the anchor is not activatable. |
| `target="_blank"` | Opens the destination in a new tab. Pair with `rel="noopener"` and signal "opens in a new tab" in the label or `data-aria-label`. |
| `download` | Downloads the linked resource instead of navigating. Provide a filename string to suggest a name, and label the file or format so the action is clear. |
| `variant` / `color` | Same styling surface as `mdc-button` (via `ButtonComponentMixin`). Choose the emphasis the destination deserves; tertiary supports only `default`, `accent`, and `negative` colors. |
| `prefix-icon` / `postfix-icon` | Leading or trailing icon. An icon with no label makes an icon-only buttonlink — set `data-aria-label`. |
| `inline` | Flows the buttonlink inline with surrounding text rather than as a block. Use inside running copy. |
| `data-aria-label` | Accessible name mirrored onto the inner `<a>`. Required for icon-only buttonlinks. |
| `soft-disabled` | Looks disabled but stays focusable so the reason can be conveyed. Prefer over `disabled` when discoverability matters. |

**Note:** `size` follows the same rules as `mdc-button` — pill `40`/`32` (default)/`28`/`24`; icon adds `64`/`52` and `20` (tertiary only). Invalid combinations fall back to `32`.

### Limitations

- **No toggle state** — unlike `mdc-button`, an anchor has no `active`/`aria-pressed` state. Use `mdc-button` when the control must communicate on/off state.
- **`size="20"` is tertiary-only** — other variant/size combinations fall back to the default `32`.
- **`inverted` is visual only** — it changes the palette but not behavior; use it only on a surface that actually needs the inverted colors.
- **Icon-only needs `data-aria-label`** — the inner anchor has no accessible name from an icon alone; set `data-aria-label` describing the destination.

## Accessibility

### Built-in features

The buttonlink renders a real `<a>` element inside its shadow DOM, so screen readers and the browser treat it as a link: it appears in the page's link list, supports the browser's native context menu, and respects `target`, `rel`, and `download` semantics out of the box. Focus is delegated into the shadow anchor (`delegatesFocus: true`), so consumer focus styles and keyboard navigation work on the host element.

Activation works via `Enter` (the anchor's native behavior) and on click. When `disabled` is set, the component intercepts both `click` and `keydown` to prevent navigation, marks the host `aria-disabled="true"`, and gives the anchor `tabindex="-1"` so it is removed from the tab order. `soft-disabled` only sets `aria-disabled="true"`; the anchor remains focusable and activatable so the consumer can suppress the side-effect while keeping the control discoverable.

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

#### Labeling

- Text buttonlinks get their accessible name from the slotted label — keep it destination-oriented and self-describing.
- Icon-only buttonlinks (no default slot content, only `prefix-icon` or `postfix-icon`) MUST set `data-aria-label` so the inner anchor has an accessible name.
- When `target="_blank"`, surface the "opens in a new tab" hint in the label or `data-aria-label`, and add `rel="noopener"` (and `noreferrer` when appropriate) to avoid window-opener leaks.
- For downloads, prefer a label that names the file or format (for example "Download PDF report") so the action is obvious before the user activates it.

## Related components

| Component | Relationship |
|---|---|
| `mdc-button` | Triggers an action and renders a `<button>`. Use when the control does not change the URL. |
| `mdc-link` | Standard text link. Use for inline or standalone navigation that should look like a link. |
| `mdc-linksimple` | Minimal, unstyled link primitive. Use when you need link semantics without button styling or icon slots. |
| `mdc-buttonsimple` | Unstyled button primitive. Use when building a custom actionable surface rather than a navigation. |
