---
title: Animated Background
summary: Usage, animation API, and accessibility for mdc-animatedbackground — a decorative uplift gradient background that animates in response to programmatic layout cues.
tier: 3
component: animatedbackground
---

## Overview

`mdc-animatedbackground` renders a full-viewport decorative gradient behind application content. The visual is driven by WebGL 2 shaders (primary path) with a DOM/SVG fallback when WebGL is unavailable or when the user prefers reduced motion.

Unlike static brand backgrounds, this component **animates** — the host application calls methods such as `expand()` or `collapse()` when layout state changes (for example, a navigation panel opening or closing), and the gradient pans smoothly to a matching pose.

The component does **not** autoplay on mount. You choose an `initial-pose` for the resting frame, then invoke animation methods explicitly when your app state changes.

### When to use

- Use `mdc-animatedbackground` as a behind-content layer inside a positioned container when the product needs the **uplift animated gradient** treatment.
- Use it when sidebar or panel state (expanded, collapsed, disabled) should stay visually in sync with a coordinated background animation driven by your layout code.

### When not to use

- Do not use `mdc-animatedbackground` for **static** brand backgrounds — use `mdc-brandvisual` instead.
- Do not use it for Lottie or illustration motion — use `mdc-animation` or `mdc-illustration`.
- Do not use it as a loading or progress indicator — use `mdc-spinner` or `mdc-progressbar`.
- Do not wire it directly to pointer, keyboard, or focus events — all triggers are **programmatic** from the host application.

## Guidelines

### Developer usage

The host element fills its container (`position: absolute; inset: 0`) and does not affect pointer interaction on foreground UI (`pointer-events: none`). The **parent** must define the area the background should cover.

```html
<div style="position: relative; width: 100%; height: 100vh; overflow: hidden;">
  <mdc-animatedbackground initial-pose="collapsed"></mdc-animatedbackground>

  <!-- Foreground UI sits above the background -->
  <main style="position: relative; z-index: 1;">
    …
  </main>
</div>
```

Use a themed ancestor (for example `mdc-themeprovider` or `html.mds-theme-stable-darkWebex`) so uplift color tokens resolve at runtime.

Import and register the component:

```tsx
import '@momentum-design/components/dist/components/animatedbackground/index.js';
// or via React wrapper
import { Animatedbackground } from '@momentum-design/components/dist/react';
```

Typical integration pattern:

1. Mount the component once as a persistent background layer.
2. Set `initial-pose` to match the user's expected resting state (`collapsed` is the default).
3. Call animation methods when your layout state machine transitions.
4. Optionally listen for `gradientsettle` before revealing dependent UI.

```tsx
import { useEffect, useRef } from 'react';
import { Animatedbackground } from '@momentum-design/components/dist/react';

function AppShell({ navExpanded }: { navExpanded: boolean }) {
  const backgroundRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = backgroundRef.current as HTMLElement & { expand: () => void; collapse: () => void };
    if (!el) return;
    navExpanded ? el.expand() : el.collapse();
  }, [navExpanded]);

  return (
    <div style={{ position: 'relative', width: '100%', height: '100vh' }}>
      <Animatedbackground ref={backgroundRef} initial-pose="collapsed" />
      {/* foreground */}
    </div>
  );
}
```

Lit / vanilla example:

```js
const background = document.querySelector('mdc-animatedbackground');

background.addEventListener('gradientsettle', (event) => {
  console.log('Settled at pose:', event.detail.pose);
});

// On first load for returning users — skip wake, start collapsed:
background.setPose('collapsed', { animate: false });

// On first visit — run wake sequence after shell is ready:
background.wakeUp();
```

Open **Work In Progress → animatedbackground** in Storybook:

| Story | Purpose |
| --- | --- |
| **Interactive Demo** | Primary playground — use the **Wake up**, **Expand**, **Collapse**, and **Disable** buttons to trigger animations. Starts at the `hidden` pose so Wake up shows the full sequence. |
| **Example** | Static reference frame at the default `collapsed` pose. |
| **Dom Fallback** | Preview with the DOM/SVG renderer (Storybook reduced-motion patch). |
| **Reduced Motion** | Interactive demo where animations snap instantly. |

Use the **Actions** panel to inspect `gradientsettle` events fired by **Interactive Demo**.

### Property/Attribute details

| Option | Default | Description |
| --- | --- | --- |
| `initial-pose` | `collapsed` | Pose rendered on mount before any programmatic animation. One of: `hidden`, `wake`, `collapsed`, `expanded`, `disabled`. |

Changing `initial-pose` after mount snaps the component to that pose. Programmatic animations do not write back to this attribute.

Animation is **pose interpolation**: the component translates a design-space offset through named poses. Colors and ellipse geometry are fixed; motion tokens control duration and easing.

Named poses:

| Pose | Typical use |
| --- | --- |
| `hidden` | Off-screen resting state before a wake sequence |
| `wake` | Transitional frame during the wake rise |
| `collapsed` | Default resting state (navigation collapsed) |
| `expanded` | Navigation or panel expanded |
| `disabled` | Navigation or background disabled / off-canvas |

Public methods:

| Method | Behavior |
| --- | --- |
| `wakeUp()` | Sequence: snap to `hidden` → animate to `wake` (sustained / entrance easing) → animate to `collapsed` (extended / standard easing). Fires `gradientsettle` with `collapsed` when complete. |
| `expand()` | Animate to `expanded` (extended / standard). |
| `collapse()` | Animate to `collapsed` (extended / standard). |
| `disable()` | Animate to `disabled` (extended / standard). |
| `setPose(name, { animate })` | Snap (`animate: false`) or animate (`animate: true`, default) to any named pose. |
| `nudge(dx, dy)` | Instant offset from the current named pose anchor. Cancels in-flight transitions. Does not fire `gradientsettle`. |

Starting a new animation cancels any in-flight transition; the current interpolated position becomes the next `from` value.

Custom events:

| Event | Detail | React prop |
| --- | --- | --- |
| `gradientsettle` | `{ pose: PoseName }` | `onGradientsettle` |

Fires once when a transition **chain** completes. For `wakeUp()`, this is after the final `collapsed` leg — not after intermediate `wake`.

```js
background.addEventListener('gradientsettle', (event) => {
  if (event.detail.pose === 'expanded') {
    // safe to reveal panel content
  }
});
```

Motion token mapping:

| Animation | Duration token | Easing token |
| --- | --- | --- |
| Wake rise (`hidden` → `wake`) | `--mds-motion-duration-sustained` (1200ms) | `--mds-motion-easing-entrance` |
| All other moves | `--mds-motion-duration-extended` (2400ms) | `--mds-motion-easing-standard` |

Tokens are read from the themed ancestor at runtime. The render loop runs **only during active transitions** — at rest there is no continuous animation frame.

When `prefers-reduced-motion: reduce` is active:

- The DOM/SVG fallback renderer is selected.
- All durations collapse to an instant snap.
- `wakeUp()` jumps directly to `collapsed` and fires one `gradientsettle`.

Render modes are selected automatically on mount and when the reduced-motion preference changes.

| Condition | Renderer |
| --- | --- |
| WebGL 2 available **and** `prefers-reduced-motion: no-preference` | WebGL canvas (primary) |
| WebGL init/link fails **or** reduced motion active | DOM/SVG fallback |

Fallback is **silent** — no error UI is shown. Both paths share the same pose animation controller and produce perceptually similar output (not pixel-identical).

**WebGL path:** Fullscreen triangle shader with three blurred elliptical gradient layers, grain overlay, 1280×720 design stage with cover scaling, DPR capped at 2.

**DOM path:** SVG ellipses with CSS blur filters, grain overlay, same stage scaling via `ResizeObserver`.

Stop colors are read at runtime from CSS custom properties on the component host (inherited from the active theme):

```text
--mds-color-theme-background-gradient-uplift-base
--mds-color-theme-background-gradient-uplift-ambient-0 … -3
--mds-color-theme-background-gradient-uplift-midtone-0 … -2
--mds-color-theme-background-gradient-uplift-expressive-0 … -2
```

These map to `color.theme.background.gradient.uplift.*` in the stable dark theme. See `packages/assets/tokens/knowledge-base/color.md` for the uplift group and its relationship to `gradient.primary`.

Animation timing reads motion tokens:

```text
--mds-motion-duration-sustained
--mds-motion-duration-extended
--mds-motion-easing-entrance
--mds-motion-easing-standard
```

If tokens are missing, the component falls back to black stops and hardcoded motion defaults matching the POC values.

### Limitations

- **No autoplay** — `wakeUp()` is never called automatically; the host must invoke it.
- **Dark theme only** — authoritative uplift tokens ship in stable dark; light theme stops are placeholders.
- **Pose animation only** — gradient stop colors do not animate over time; only the pose offset translates.
- **Decorative** — not exposed to assistive technology; do not use it to communicate application state.

## Accessibility

### Built-in features

The animated background is **purely decorative**. Internal render layers (`canvas`, DOM stage) use `aria-hidden="true"`. The host is not focusable and uses `pointer-events: none` so foreground UI remains fully interactive.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host | `role` | None set by the component |
| Render layers | `aria-hidden` | `true` |
| Host | `pointer-events` | `none` |

### Implementation requirements

#### Labeling

- **Do not** rely on the background to communicate state to assistive technology. Drive accessible labels, announcements, and navigation state from foreground UI.
- **Do not** add `aria-label` or `role="img"` unless product guidance explicitly requires it for a non-decorative use (not expected in v1).

- **Respect reduced motion** — the component honors `prefers-reduced-motion: reduce` automatically; no consumer configuration is required.
- **Provide container dimensions** — the component fills its parent; it does not infer viewport size on its own.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-brandvisual` | Static brand background artwork from the brand-visuals library. |
| `mdc-animation` | Lottie-based decorative or labeled motion. |
| `mdc-themeprovider` | Provides the theme class context required for uplift color tokens to resolve. |
