---
title: Linkbutton
summary: Usage, guidelines, and accessibility for the mdc-linkbutton component — a control that looks like a hyperlink but behaves as a button, used for in-page actions that should visually read as a link.
status: draft
tier: 3
component: linkbutton
---

## Overview

The linkbutton renders as a link visually but behaves as a button: activating it fires a `click` event rather than navigating to a URL. Use it for in-page actions (open a panel, copy a value, trigger a workflow) that should sit in body text or alongside other links without standing out as a button.

The slotted children supply the label; an optional trailing icon can be added via `icon-name`. Three text sizes are supported, plus inline / standalone display and an inverted colour scheme for dark backgrounds.

### When to use

- Use `mdc-linkbutton` for in-page actions that should visually mimic a hyperlink — for example a "Show more" toggle inside a paragraph, an undo prompt after a toast, or an action embedded in a sentence.
- Use it when the surrounding design treats the affordance as link-styled text but the underlying behaviour is a button (no URL navigation).

### When not to use

- Use `mdc-link` when the affordance actually navigates to a URL — even if the URL is in-app, the user expectation is "go somewhere".
- Use `mdc-button` when the surrounding design expects a button-shaped control.

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

- Write text that describes the action the linkbutton performs (`"Show more details"`), not the visual mechanic (`"Click here"`).
- Use `inline` when the linkbutton sits inside running prose so it picks up the inline-link styling; leave it unset when the linkbutton stands alone.
- Pair the trailing icon (`icon-name`) with a directional or action-confirming glyph (arrow, external pop-out) only when the icon adds meaning — gratuitous icons add visual noise without value.

### Property/Attribute details

- `size` — text and icon size: `12` (`0.75rem`), `14` (`0.875rem`), or `16` (`1rem`, default).
- `inline` — when `true`, applies inline-link styling suitable for body text. Default `false`.
- `inverted` — when `true`, swaps the colour palette for dark backgrounds. Default `false`.
- `icon-name` — name of an icon rendered after the label (`mdc-icon` name from the configured icon set). Default unset.

Properties inherited from the underlying button:

- `disabled` — when `true`, removes the linkbutton from the tab order and prevents activation.
- `soft-disabled` — when `true`, the linkbutton looks disabled but remains focusable so assistive technology can read it; consumers must still suppress action handling.
- `auto-focus-on-mount` — when `true`, focuses the linkbutton on first render.
- `data-aria-label` — accessible name override; use when the visible text alone does not describe the action.

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

#### Labelling

- Provide descriptive label text so the accessible name conveys the action being taken; use `data-aria-label` only when the visible text would be ambiguous on its own.

### Notes

- Because the linkbutton announces as `role="link"` but does not navigate to a URL, the destination announced to screen readers is implicit. Make sure the label text alone makes the resulting action clear (e.g. `"Show more details"`, not `"More"`).
