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

- Use `mdc-linksimple` when you need a hyperlink but the content is not plain text (an icon-only link, a link wrapping a small layout), or the default sizing of `mdc-link` would interfere with the surrounding design.
- Use `mdc-linksimple` in a tight, unstyled context where the consumer's own CSS handles the typography.

### When not to use

- Do not use `mdc-linksimple` for a plain-text link that needs a defined size and an optional trailing icon. Use `mdc-link` — it wraps `mdc-linksimple` with that standard treatment.
- Do not use `mdc-linksimple` for an in-page action that does not navigate to a URL. Use `mdc-button` or `mdc-linkbutton`.

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

- The component intentionally has no `size` — let the parent context's typography apply, or wrap with `mdc-link` if a defined size is needed.

### Property/Attribute details

| Option | Intent |
|---|---|
| `href` | Destination URL. When unset, the anchor renders without `href`. |
| `target` | `_self` (default), `_blank`, `_parent`, `_top`, `_unfencedTop`. Pair `_blank` with `rel="noopener noreferrer"`. |
| `rel` | Space-separated link types (`noopener`, `noreferrer`, `nofollow`, …). |
| `download` | Downloads the resource; an empty string lets the browser name the file, a string overrides it. |
| `inline` | Applies inline-link styling. Leave unset for standalone. |
| `inverted` | Swaps to the inverted palette for dark backgrounds. |
| `disabled` | Sets `aria-disabled`, removes the anchor from the tab order, and suppresses navigation. |
| `data-aria-label` | Accessible name for the anchor. Required when the slotted content has no readable text. |

**Note:** `ping`, `hreflang`, `type`, and `referrerpolicy` are passed through to the anchor unchanged.

### Limitations

- **No size or icon** — linksimple intentionally has no `size` and no trailing icon. Use `mdc-link` when you need the standard text + icon treatment.
- **Name your non-text content** — an icon-only or image link has no accessible name unless you set `data-aria-label`.
- **Navigation only** — like `mdc-link`, it navigates to a URL. For in-page actions use `mdc-linkbutton` or `mdc-button`.

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

#### Labeling

- When the slotted content is non-textual (an icon, an image), always provide `data-aria-label` — otherwise the link has no accessible name.
- For `target="_blank"` links, supply a `data-aria-label` (for example `"Open example.com (opens in new tab)"`) when the new-tab behavior must be conveyed to screen readers.

## Related components

| Component | Relationship |
|---|---|
| `mdc-link` | Standard text + trailing-icon hyperlink built on `mdc-linksimple`. Use for plain-text links with a defined size. |
| `mdc-linkbutton` | Looks like a link but behaves as a button for in-page actions. |
| `mdc-buttonlink` | Looks like a button but navigates like a link. |
| `mdc-button` | Standard action control for in-page actions. |
