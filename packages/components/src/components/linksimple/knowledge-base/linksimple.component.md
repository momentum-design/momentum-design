---
title: Linksimple
summary: Usage, guidelines, and accessibility for the mdc-linksimple component — a lightweight, unstyled-by-default hyperlink with no built-in size or icon, suitable for custom child content.
tier: 3
component: linksimple
---

## Overview

The linksimple is a minimal hyperlink: it renders an `<a>`, forwards the standard anchor attributes, and lets the slotted children supply whatever content the consumer needs (text, an icon, a mix of inline elements). It does not impose a default size or a built-in trailing icon — those are the job of `mdc-link`.

Use linksimple when the visual treatment of `mdc-link` does not fit (icon-only navigation, custom layouts inside the link, embedding in a tight design) but the link's accessibility and interaction contract is still needed.

### When to use

- Use `mdc-linksimple` when you need a hyperlink but the slotted content is not plain text (an icon-only link, a link wrapping a small layout) or the default sizing of `mdc-link` would interfere with the surrounding design.
- Use it when the link should sit unstyled in a tight context and the consumer's own CSS will handle the typography.

### When not to use

- Use `mdc-link` when the link is plain text with a clearly defined size and an optional trailing icon — `mdc-link` already wraps `mdc-linksimple` with the standard text + icon treatment.
- Use `mdc-button` or `mdc-linkbutton` for in-page actions that do not navigate to a URL.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/linksimple/index.js"; // custom element registration
```

Minimal markup example (icon-only link):

```html
<mdc-linksimple href="/profile" data-aria-label="Open profile">
  <mdc-icon name="user-bold" size="1.25" length-unit="rem"></mdc-icon>
</mdc-linksimple>
```

Plain-text link with no default size applied:

```html
<mdc-linksimple href="https://example.com" target="_blank" rel="noopener noreferrer">
  example.com
</mdc-linksimple>
```

Listen for `click`, `keydown`, `focus`, and `blur` to react to user interaction.

### Content guidance

- When the slotted content is non-textual (an icon, an image), always provide `data-aria-label` so the link has an accessible name.
- The component intentionally has no `size` — let the parent context's typography apply, or wrap with `mdc-link` if a defined size is needed.

### Property/Attribute details

- `href` — the URL the link points to. When unset, the rendered anchor has no `href`.
- `target` — `_self` (default), `_blank`, `_parent`, `_top`, or `_unfencedTop`.
- `rel` — space-separated link types (`noopener`, `noreferrer`, `nofollow`, etc.).
- `download` — when set, the browser downloads the resource. Empty string lets the browser pick the filename; a string overrides it.
- `ping` — space-separated list of URLs notified when the link is followed.
- `hreflang`, `type`, `referrerpolicy` — standard anchor attributes passed through.
- `inline` — when `true`, applies inline-link styling. Default `false`.
- `inverted` — when `true`, swaps the colour palette for dark backgrounds. Default `false`.
- `disabled` — when `true`, sets `aria-disabled="true"` on the host, removes the anchor from the tab order, and suppresses navigation on click or keyboard activation.
- `data-aria-label` — accessible name applied to the rendered anchor. Required when the slotted content does not include readable text.

## Accessibility

### Built-in features

The component renders a native `<a>` element, so it inherits the platform's link semantics: announced as a link by screen readers, focusable by keyboard, and activated by `Enter`. When `disabled` is `true`, the host sets `aria-disabled="true"`, sets `tabindex="-1"` on the anchor, and suppresses click and keydown propagation so activation does not navigate.

The anchor's accessible name comes from the slotted text by default; `data-aria-label`, when set, overrides it.

#### Internal ARIA managed by the component

| Element       | Attribute        | Value                                                       |
| ------------- | ---------------- | ----------------------------------------------------------- |
| Host          | `aria-disabled`  | `true` when `disabled`, otherwise removed                   |
| Anchor `<a>`  | `aria-label`     | mirrors `data-aria-label`                                   |
| Anchor `<a>`  | `tabindex`       | `-1` when `disabled`, otherwise `0`                         |
| Anchor `<a>`  | `href`, `target`, `rel`, `download`, `ping`, `hreflang`, `type`, `referrerpolicy` | reflect the matching host attributes |

### Implementation requirements

#### Labelling

- When the slotted content is non-textual (an icon, an image), always provide `data-aria-label` — otherwise the link has no accessible name.
- For `target="_blank"` links, supply a `data-aria-label` (e.g. `"Open example.com (opens in new tab)"`) when the new-tab behaviour must be conveyed to screen readers.
