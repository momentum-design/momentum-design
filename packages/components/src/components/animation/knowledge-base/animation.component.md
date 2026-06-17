---
title: Animation
summary: Usage, guidelines, and accessibility for the mdc-animation component — a wrapper around the Lottie animation library for rendering decorative or labelled animations.
status: draft
tier: 3
component: animation
---

## Overview

The animation component is a wrapper around the Lottie animation library. It fetches the animation data dynamically based on the provided name (or a `src` URL) and renders it. It is a display-only component with no interactive functionality and is treated as a decorative image by default.

### When to use

- Use `mdc-animation` to play short, looping or one-shot Lottie animations inline within UI — for example illustrations, loading indicators, or success/empty-state visuals.

### When not to use

- Use `mdc-icon` for a static glyph that does not need motion.
- Use `mdc-illustration` for a non-animated illustration asset.
- Use `mdc-progressspinner` or `mdc-progressbar` when the animation needs to communicate determinate or indeterminate progress with proper progress semantics.
- Use `mdc-spinner` when you only need a lightweight, generic loading indicator without a dedicated Lottie asset.

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

### Property/Attribute details

- `name` — name of a bundled animation; resolved through the shipped animation manifest.
- `src` — URL pointing to a Lottie JSON file. When set, it takes precedence over `name`.
- `loop` — `"true"` (infinite, default), `"false"` (no loop), or a numeric string for a fixed loop count.
- `autoplay` — starts the animation automatically when loaded (default `true`).

## Accessibility

### Built-in features

The internal animation container is rendered with `aria-hidden="true"` so the underlying SVG/Lottie nodes are not exposed to assistive technologies.

#### Internal ARIA managed by the component

- When neither `aria-label` nor `aria-labelledby` is provided, the host has no role and is treated as a decorative image (skipped by assistive technologies).
- When `aria-label` or `aria-labelledby` is set, the host receives `role="img"` so screen readers announce it as a labelled image.

### Implementation requirements

#### Labelling

- If the animation conveys meaning (e.g. a success state), provide an `aria-label` or `aria-labelledby` describing the meaning, not the motion.
- Leave both labelling attributes unset when the animation is purely decorative; the component will keep it out of the accessibility tree.
