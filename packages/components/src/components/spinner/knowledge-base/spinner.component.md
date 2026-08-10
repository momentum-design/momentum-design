---
title: Spinner
summary: Usage, guidelines, and accessibility for the mdc-spinner component — an indeterminate loading indicator for processes with unknown or variable duration.
tier: 3
component: spinner
---

## Overview

The spinner tells users that work is underway when its duration or progress cannot be measured, so a wait feels intentional rather than broken. It represents indeterminate activity, with a variant for in-button loading and an inverted treatment for dark surfaces.

### When to use

- Use `mdc-spinner` to signal that something is happening when you cannot show concrete progress.
- Use `mdc-spinner` `button` inside an `mdc-button` to show that the button's action is in progress.

### When not to use

- Do not use `mdc-spinner` when you can show concrete, measurable progress. Use `mdc-progressbar` instead.
- Do not use `mdc-spinner` when a placeholder that mirrors the loading content's layout is clearer. Use `mdc-skeleton` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/spinner/index.js"; // custom element registration
// or via React wrapper
import { Spinner } from '@momentum-design/components/dist/react';
```

Minimal markup examples:

```html
<!-- Decorative spinner ignored by screen readers -->
<mdc-spinner size="midsize"></mdc-spinner>

<!-- Spinner with an accessible name announced as an image -->
<mdc-spinner size="large" aria-label="Loading dashboard"></mdc-spinner>

<!-- Inverted spinner for use inside coachmarks and other inverted surfaces -->
<mdc-spinner inverted></mdc-spinner>

<!-- Button-variant spinner inside a button -->
<mdc-button>
  <mdc-spinner variant="button" size="small"></mdc-spinner>
  Saving…
</mdc-button>
```

Leave `size` unset and set `--mdc-spinner-size` for a custom diameter, mainly when nesting the spinner inside another component.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `size` | `small` (24px, inline with loading text), `midsize` (28px, default, most cases), or `large` (96px, full region or page). Leave unset to size with `--mdc-spinner-size`. |
| `variant` | `standalone` (default) or `button`. Use `button` inside a button, and match the indicator color to the button's icon/label so it keeps a 3:1 contrast ratio. |
| `inverted` | When `true`, uses the inverted color set for inverted surfaces such as coachmarks. |
| `aria-label` | Accessible name. When set, the spinner is exposed as `role="img"`; when omitted, it is decorative and hidden from screen readers. |

### Limitations

- **No accessible name by default** — without `aria-label` the spinner is `aria-hidden`; add one when the loading state itself must be announced.
- **Indeterminate only** — the spinner exposes no `aria-valuenow`; use `mdc-progressbar` or `mdc-progressspinner` when progress is known.
- **Button contrast is manual** — the `button` variant does not auto-match color; set the indicator color to the button's text or icon color for a 3:1 ratio.
- **Custom size is opt-in** — sizes are fixed unless you leave `size` unset and use `--mdc-spinner-size`.

## Accessibility

### Built-in features

Accessibility behavior is driven entirely by `aria-label`. When it is set, the host is exposed as `role="img"` with the provided name and `aria-hidden="false"`, so screen readers announce it as a labeled image. When it is omitted, the host has no role and `aria-hidden="true"`, so screen readers ignore the spinner and the surrounding context carries the loading message.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | `img` when `aria-label` is set; otherwise unset |
| Host | `aria-hidden` | `false` when `aria-label` is set; otherwise `true` |

### Implementation requirements

#### Labeling

- Provide `aria-label` when the spinner is the only indication of the loading state; omit it when nearby text (or a labeled parent, such as a `soft-disabled` button) already announces the wait.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-progressbar` | Determinate linear progress when the percentage is known. |
| `mdc-progressspinner` | Determinate circular progress when the percentage is known. |
| `mdc-skeleton` | Placeholder loading that mirrors the content's layout. |
