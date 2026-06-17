---
title: Spinner
summary: Usage, guidelines, and accessibility for the mdc-spinner component — an indeterminate loading indicator for processes with unknown or variable duration.
status: draft
tier: 3
component: spinner
---

## Overview

The spinner is an indeterminate progress indicator, best suited for cases where the duration or progress of an operation is variable or unknown. It is rendered as a rotating circular arc and supports multiple sizes, two colour variants, and a button-friendly variant for in-button loading states.

### When to use

- Use `mdc-spinner` to signal that something is happening but you cannot communicate concrete progress.
- Use the `button` variant inside `mdc-button` to indicate that the button's action is in progress.
- Use the small size inline with loading text, the midsize for most cases, and the large size for full-region or full-page loading.

### When not to use

- Use `mdc-progressbar` when you can show concrete, measurable progress.
- Use `mdc-skeleton` when you want a placeholder that matches the layout of the content being loaded.

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

### Property/Attribute details

- `size` — visual size. One of `small` (24 px, use inline with text), `midsize` (48 px, default), `large` (96 px, use when replacing entire regions/pages), or `undefined`. When set to `undefined`, use the `--mdc-spinner-size` CSS custom property to set a custom size.
- `variant` — `standalone` (default; blue track) or `button` (to be used inside a button; matches the button icon/label colour to keep at least a 3:1 contrast ratio).
- `inverted` — when `true`, uses the inverted colour set. Intended for inverted surfaces such as coachmarks. Default `false`.
- `aria-label` — accessible name for the spinner. When set, the host becomes `role="img"` and `aria-hidden="false"`; when omitted, the host has no role and `aria-hidden="true"`.

## Accessibility

### Built-in features

Accessibility behaviour is driven entirely by `aria-label`:

- When `aria-label` is set, the host is exposed as `role="img"` with the provided name and `aria-hidden="false"` — screen readers announce it as a labelled image.
- When `aria-label` is omitted, the host has no role and `aria-hidden="true"` — screen readers ignore the spinner entirely.

#### Internal ARIA managed by the component

| Element | Attribute     | Value                                                |
| ------- | ------------- | ---------------------------------------------------- |
| Host    | `role`        | `img` when `aria-label` is set; otherwise unset      |
| Host    | `aria-hidden` | `false` when `aria-label` is set; otherwise `true`   |

### Notes

The spinner is indeterminate — it does not expose `aria-valuenow`/`aria-valuetext`. If progress is known, use `mdc-progressbar` instead so screen readers can announce the current value.
