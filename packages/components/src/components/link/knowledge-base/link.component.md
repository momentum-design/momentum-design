---
title: Link
summary: Usage, guidelines, and accessibility for the mdc-link component — a navigational hyperlink for in-app routing, external sites, or email/phone handlers, with optional trailing icon.
status: draft
tier: 3
component: link
---

## Overview

The link renders a navigational hyperlink. The slotted children supply the link text; setting `icon-name` adds a trailing icon (commonly used for "opens external site" or "download" affordances). Three sizes are available (`small`, `midsize`, `large`), and the link supports inline / standalone display and an inverted colour scheme for dark backgrounds.

Like a native `<a>`, the link supports `href`, `target`, `rel`, `download`, `ping`, `hreflang`, `type`, and `referrerpolicy`. When `disabled`, navigation is suppressed and the link is removed from the tab order.

### When to use

- Use `mdc-link` for navigation: routing within the application, opening an external URL, launching an email client (`mailto:`), or a phone dialler (`tel:`).
- Use it when the destination is a URL — that is, when the user expectation is "go somewhere", not "perform an action".

### When not to use

- Use `mdc-button` (or `mdc-linkbutton` when a link's visual treatment is required) for in-page actions that do not change the URL.
- Use `mdc-linksimple` when no default size, no trailing icon, or a custom child layout (e.g. an icon as the entire content) is required.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/link/index.js"; // custom element registration
// or via React wrapper
import { Link } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-link href="/dashboard">Open dashboard</mdc-link>
```

External link with trailing icon and a new-tab target:

```html
<mdc-link
  href="https://example.com"
  target="_blank"
  rel="noopener noreferrer"
  icon-name="pop-out-bold"
  size="midsize"
>
  Open example.com
</mdc-link>
```

Inline link inside body text, on an inverted (dark) background:

```html
<p>
  Read the
  <mdc-link href="/changelog" inline inverted>full changelog</mdc-link>
  for details.
</p>
```

Listen for `click`, `keydown`, `focus`, and `blur` to react to user interaction (these are forwarded from the underlying anchor element).

### Content guidance

- Write link text that describes the destination (`"View invoice #1234"`), not the mechanic (`"Click here"`); the link text is the screen-reader-announced name.
- When the target is external or opens in a new tab, add the trailing icon (`icon-name="pop-out-bold"` or similar) so sighted users see the affordance, and include `rel="noopener noreferrer"` with `target="_blank"`.
- Use `inline` when the link sits inside running prose; leave it unset when the link stands alone (a card action, a navigation item) so the standalone styling applies.

### Property/Attribute details

- `href` — the URL the link points to. When unset, the rendered `<a>` has no `href` (acts as a placeholder).
- `target` — `_self` (default), `_blank`, `_parent`, `_top`, or `_unfencedTop`.
- `rel` — space-separated link types (`noopener`, `noreferrer`, `nofollow`, etc.). Pair with `target="_blank"`.
- `download` — when set, the browser downloads the resource. Empty string lets the browser pick the filename; a string overrides it.
- `ping` — space-separated list of URLs notified when the link is followed.
- `hreflang`, `type`, `referrerpolicy` — standard anchor attributes passed through.
- `size` — `small` (`0.75rem`), `midsize` (`0.875rem`), or `large` (`1rem`, default). Also drives the trailing icon's size.
- `icon-name` — name of an icon rendered after the link text (`mdc-icon` name from the configured icon set). Default unset.
- `inline` — when `true`, the link uses inline styling suitable for flow inside body text. Default `false`.
- `inverted` — when `true`, swaps the colour palette for use on dark backgrounds. Default `false`.
- `disabled` — when `true`, sets `aria-disabled="true"` on the anchor, removes it from the tab order, and suppresses navigation on click or keyboard activation.
- `data-aria-label` — accessible name applied to the rendered anchor. Use when the visible text alone does not describe the destination.

## Accessibility

### Built-in features

The link renders a native `<a>` element, so it inherits the platform's link semantics: announced as a link by screen readers, focusable by keyboard, activated with `Enter`, and routed through the browser's navigation flow. When `disabled` is `true`, the host sets `aria-disabled="true"` on itself, sets `tabindex="-1"` on the anchor (removing it from the tab order), and the click / keydown handler calls `preventDefault()` so activation does not navigate.

The anchor's accessible name comes from the slotted text content by default; when `data-aria-label` is set it overrides the slot text. The trailing icon (when `icon-name` is set) is rendered as a decorative `mdc-icon` so it does not add extra announcements.

#### Internal ARIA managed by the component

| Element       | Attribute        | Value                                                       |
| ------------- | ---------------- | ----------------------------------------------------------- |
| Host          | `aria-disabled`  | `true` when `disabled`, otherwise removed                   |
| Anchor `<a>`  | `aria-label`     | mirrors `data-aria-label`                                   |
| Anchor `<a>`  | `tabindex`       | `-1` when `disabled`, otherwise `0`                         |
| Anchor `<a>`  | `href`, `target`, `rel`, `download`, `ping`, `hreflang`, `type`, `referrerpolicy` | reflect the matching host attributes |

### Implementation requirements

#### Labelling

- Provide descriptive link text so the link's accessible name conveys where it leads; supply `data-aria-label` only when the visible text would be ambiguous out of context.
- For `target="_blank"` links, the icon affordance is visual — the consumer can supply a `data-aria-label` such as `"Open example.com (opens in new tab)"` if the new-tab behaviour must be conveyed to screen readers.
