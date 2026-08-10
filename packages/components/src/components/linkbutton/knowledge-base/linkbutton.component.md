---
title: Linkbutton
summary: Usage, guidelines, and accessibility for the mdc-linkbutton component — a control that looks like a hyperlink but behaves as a button, used for in-page actions that should visually read as a link.
tier: 3
component: linkbutton
---

## Overview

`mdc-linkbutton` provides a control that looks like a link but performs an in-page action rather than navigating. It exists for actions that belong in running prose or alongside other links — opening a panel, copying a value, triggering a workflow — where a full button would feel too heavy for the surrounding text.

### When to use

- Use `mdc-linkbutton` for in-page actions that should visually mimic a hyperlink — for example a "Show more" toggle inside a paragraph, an undo prompt after a toast, or an action embedded in a sentence.
- Use `mdc-linkbutton` when the surrounding design treats the affordance as link-styled text but the underlying behavior is a button (no URL navigation).

### When not to use

- Do not use `mdc-linkbutton` when the affordance navigates to a URL. Use `mdc-link` — even for in-app routes, the user expectation is "go somewhere".
- Do not use `mdc-linkbutton` when the surrounding design expects a button-shaped control. Use `mdc-button`.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/linkbutton/index.js"; // custom element registration
// or via React wrapper
import { LinkButton } from '@momentum-design/components/dist/react';
```

Minimal markup example (inline action inside a sentence):

```html
<p>
  Forgot your password?
  <mdc-linkbutton inline @click=${openResetFlow}>Reset it</mdc-linkbutton>.
</p>
```

Standalone link-button with a trailing icon:

```html
<mdc-linkbutton size="14" icon-name="arrow-right-bold" @click=${showMore}>
  Show more details
</mdc-linkbutton>
```

Listen for `click` to react to user activation; `keydown` / `keyup` / `focus` / `blur` are also dispatched for fine-grained interaction handling.

### Content guidance

- Write text that describes the action the linkbutton performs ("Show more details"), not the visual mechanic ("Click here").
- Use `inline` when the linkbutton sits inside running prose so it picks up the inline-link styling; leave it unset when the linkbutton stands alone.
- Pair the trailing icon (`icon-name`) with a directional or action-confirming glyph (arrow, external pop-out) only when the icon adds meaning — gratuitous icons add visual noise without value.

### Property/Attribute details

| Option | Intent |
|---|---|
| `size="16"` (default) | Text and icon size — `12`, `14`, or `16`. Match it to the surrounding text. |
| `inline` | Applies inline-link styling for use inside body text. Leave unset for standalone. |
| `inverted` | Swaps to the inverted palette for dark backgrounds. |
| `icon-name` | Trailing decorative icon after the label. Add a directional or action glyph only when it adds meaning. |
| `disabled` | Removes the control from the tab order and prevents activation. |
| `soft-disabled` | Looks disabled but stays focusable so assistive technology can read it; suppress the action yourself. |
| `auto-focus-on-mount` | Focuses the control on first render. Use sparingly — moving focus on mount can disorient screen-reader users. |
| `data-aria-label` | Accessible name override. Use when the visible text alone does not describe the action. |

**Note:** `disabled`, `soft-disabled`, `auto-focus-on-mount`, and `data-aria-label` are inherited from the underlying button.

### Limitations

- **Link role, button behavior** — announces as `role="link"` but performs an in-page action instead of navigating, so make the outcome explicit in the label ("Show more details", not "More"). Screen-reader users get no URL to infer the result from.
- **Inline only in prose** — set `inline` only when the control sits inside running text; on a standalone control the inline underline styling looks wrong.
- **Disabled vs soft-disabled** — `disabled` removes the control from the tab order and blocks activation; use `soft-disabled` when it must stay focusable so assistive technology can announce it while you suppress the action.

## Accessibility

### Built-in features

The linkbutton exposes itself with `role="link"` (overriding the default button role) so screen readers announce it as a link, matching its visual treatment. It is focusable by keyboard and activates on `Enter` and `Space` (the standard button activation pattern); activation dispatches a `click` event that consumers handle to perform the in-page action. When `disabled` is `true`, the linkbutton is removed from the tab order and activation is suppressed.

The label is taken from the slotted children; the trailing icon (when `icon-name` is set) is rendered as a decorative `mdc-icon` and is not announced separately.

#### Internal ARIA managed by the component

| Element | Attribute       | Value                                                              |
| ------- | --------------- | ------------------------------------------------------------------ |
| Host    | `role`          | `link`                                                             |
| Host    | `aria-label`    | mirrors `data-aria-label` when set                                 |
| Host    | `tabindex`      | `-1` when `disabled`, otherwise `0`                                |

### Implementation requirements

#### Labeling

- Provide descriptive label text so the accessible name conveys the action being taken; use `data-aria-label` only when the visible text would be ambiguous on its own. Because the linkbutton announces as `role="link"` but does not navigate, make sure the label alone makes the resulting action clear ("Show more details", not "More").

## Related components

| Component | Relationship |
|---|---|
| `mdc-link` | A real navigational hyperlink. Use when the affordance changes the URL. |
| `mdc-buttonlink` | The inverse: navigates like a link but is styled as a button. |
| `mdc-button` | Standard button-shaped control for in-page actions that need no link styling. |
