---
title: Animation
summary: Usage, guidelines, and accessibility for the mdc-animation component — a wrapper around the Lottie animation library for rendering decorative or labeled animations.
tier: 3
component: animation
---

## Overview

The animation component plays a Lottie animation inline in the UI. It is display-only and decorative by default, used to add motion to illustrations, loading states, and success or empty-state moments.

### When to use

- Use `mdc-animation` to play a short looping or one-shot Lottie animation inline — an illustration, loading visual, or success/empty-state moment.
- Use `mdc-animation` for expressive motion that a static asset cannot convey.

### When not to use

- Do not use `mdc-animation` for a static glyph. Use `mdc-icon` instead.
- Do not use `mdc-animation` for a non-animated illustration. Use `mdc-illustration` instead.
- Do not use `mdc-animation` to communicate task progress. Use `mdc-progressbar` or `mdc-progressspinner` instead.
- Do not use `mdc-animation` for a generic loading indicator that needs no bespoke Lottie asset. Use `mdc-spinner` instead.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/animation/index.js"; // custom element registration
// or via React wrapper
import { Animation } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-animation name="success" loop="false"></mdc-animation>
```

Listen for the `load`, `complete`, and `error` events to react to the animation lifecycle.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `name` | Name of a bundled animation, resolved through the shipped animation manifest. |
| `src` | URL of a Lottie JSON file. When set, it takes precedence over `name`. |
| `loop` | `true` (infinite, default), `false` (no loop), or a numeric string for a fixed loop count. |
| `autoplay` | Starts the animation automatically once loaded. Default `true`. |
| `aria-label` / `aria-labelledby` | Accessible name when the animation carries meaning; setting either gives the host `role="img"`. Leave both unset for decorative use. |

### Limitations

- **Reduced motion not handled** — the component does not honor `prefers-reduced-motion`; gate `autoplay` or swap in a static asset yourself for motion-sensitive users.
- **Loop and autoplay re-create the instance** — Lottie exposes no live API for these, so changing `loop` or `autoplay` rebuilds the animation from cached data.
- **Source required** — without a valid `name` (present in the manifest) or `src`, the component fires `error` and renders nothing.
- **Decorative by default** — the animation is hidden from assistive technology unless you give it an accessible name.

## Accessibility

### Built-in features

The internal animation container is rendered with `aria-hidden="true"` so the underlying Lottie/SVG nodes are not exposed to assistive technologies.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | `img` when `aria-label` or `aria-labelledby` is set, otherwise none (decorative) |
| Animation container | `aria-hidden` | `true` |

### Implementation requirements

#### Labeling

- If the animation conveys meaning (for example a success state), provide an `aria-label` or `aria-labelledby` that describes the meaning, not the motion.
- Leave both labeling attributes unset when the animation is purely decorative; the component keeps it out of the accessibility tree.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-icon` | For a static, single-glyph mark with no motion. |
| `mdc-illustration` | For a non-animated illustrative graphic. |
| `mdc-progressspinner` | For indeterminate progress with proper progress semantics. |
| `mdc-spinner` | For a lightweight generic loading indicator without a bespoke Lottie asset. |
