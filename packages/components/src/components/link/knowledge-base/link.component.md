---
title: Link
summary: Usage, guidelines, and accessibility for the mdc-link component — a navigational hyperlink for in-app routing, external sites, or email/phone handlers, with optional trailing icon.
tier: 3
component: link
---

## Overview

`mdc-link` provides a navigational hyperlink that reads as link text within surrounding content. It exists for taking users to another page, view, or resource — including external destinations and downloads — with inline or standalone styling to fit the context.

### When to use

- Use `mdc-link` to navigate: routing within the app, opening an external URL, jumping to an element on the same page, or launching an email (`mailto:`) or phone (`tel:`) handler.
- Use `mdc-link` when the user expectation is "go somewhere" — the destination is a URL — rather than "perform an action".

### When not to use

- Do not use `mdc-link` for an in-page action that changes data, state, or how content is displayed without changing the URL. Use `mdc-button`, or `mdc-linkbutton` when the affordance must read as link-styled text.
- Do not use `mdc-link` when you need non-text child content such as an icon-only link, or no default sizing. Use `mdc-linksimple`.

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

- Write link text that describes the destination ("View invoice #1234"), not the mechanic ("Click here"); the text is the screen-reader-announced name.
- Use `inline` only when the link sits inside running prose; leave it unset for standalone links (a card action, a navigation item). Use inline links sparingly — too many clutter the text and obscure the next step.
- For external or new-tab destinations, add a trailing pop-out icon (`icon-name="pop-out-bold"` or similar) and set `rel="noopener noreferrer"` with `target="_blank"`.
- Match `size` to the text the link sits with, and use `inverted` only on inverted surfaces such as `mdc-coachmark`.

### Property/Attribute details

| Option | Intent |
|---|---|
| `href` | Destination URL. When unset, the anchor renders without `href` and acts as a placeholder. |
| `size="large"` (default) | Text and trailing-icon size — `small`, `midsize`, or `large`. Match it to the surrounding text size. |
| `icon-name` | Trailing decorative icon after the text. Use a pop-out for external links or a download glyph; omit otherwise. |
| `inline` | Applies inline styling (underlined in flow) for links inside prose. Leave unset for standalone links. |
| `inverted` | Swaps to the inverted palette for dark surfaces such as coachmarks. |
| `target` | `_self` (default), `_blank`, `_parent`, `_top`, `_unfencedTop`. Pair `_blank` with `rel="noopener noreferrer"`. |
| `rel` | Space-separated link types (`noopener`, `noreferrer`, `nofollow`, …). |
| `download` | Downloads the resource; an empty string lets the browser name the file, a string overrides it. |
| `disabled` | Sets `aria-disabled`, removes the link from the tab order, and suppresses navigation. |
| `data-aria-label` | Accessible name for the anchor. Use when the visible text alone does not describe the destination. |

**Note:** `ping`, `hreflang`, `type`, and `referrerpolicy` are passed through to the anchor unchanged.

### Limitations

- **Navigation only** — the link is for URL destinations, not actions. Do not wire it to state changes such as save or delete; use `mdc-linkbutton` or `mdc-button`.
- **Placeholder without `href`** — with no `href` the anchor has no destination yet still reads as a link. Set `href`, or choose a button for actions.
- **Text child only** — `mdc-link` applies the standard text + trailing-icon treatment. For icon-only or custom child layouts, use `mdc-linksimple`.

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

#### Labeling

- Provide descriptive link text so the link's accessible name conveys where it leads; supply `data-aria-label` only when the visible text would be ambiguous out of context.
- For `target="_blank"` links, the icon affordance is visual — the consumer can supply a `data-aria-label` such as `"Open example.com (opens in new tab)"` if the new-tab behavior must be conveyed to screen readers.

## Related components

| Component | Relationship |
|---|---|
| `mdc-linksimple` | Minimal hyperlink `mdc-link` builds on. Use for icon-only or custom child content with no default size. |
| `mdc-linkbutton` | Looks like a link but behaves as a button. Use for in-page actions styled as links. |
| `mdc-buttonlink` | Looks like a button but navigates like a link. Use for navigation that needs button prominence. |
| `mdc-button` | Standard action control for in-page actions that need no link styling. |
| `mdc-coachmark` | Inverted surface where `inverted` links are appropriate. |
