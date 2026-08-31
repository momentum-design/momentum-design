---
title: Motion
summary: Momentum motion tokens — the duration, easing, delay, and stagger scales, the named animations built on them, and the principles for applying them.
tier: 2
websitePath: foundations/motion
---

# Motion

Motion System Strategy: "Efficient, Precise, and Responsive"

The motion language for Momentum needs to feel snappy and professional. It should guide the user's focus without distracting them. Animations should be functional — indicating state changes, hierarchy, and spatial relationships — rather than decorative.

## Principles

### 1. Orientation over ornamentation (navigation)

Value: Motion should serve as a map, not a decoration. User: “I know where I am and where I want to go.”
Animations must provide spatial context, helping users understand where they are and where they are going within the application. By moving elements along logical axes, we reduce the cognitive "jump" between different views.

### 2. Informative by intent (status)

Value: Every movement should carry a message. User: “I understand what the system is doing right now.”
In a collaboration environment, state changes happen constantly (e.g., a colleague joining a call, a file finishing an upload). Animation should act as a silent narrator, providing "just-in-time" information without requiring a pop-up or a modal.

### 3. Purposeful vitality (brand)

Value: Reflect the "Momentum" why of Wellbeing Intelligence. User: “This tool feels good to use.”
Cisco’s brand is about the flow of information and the energy of collaboration. Our animations should feel "alive" but disciplined. We avoid mechanical, linear movements in favor of natural easing that mimics real-world physics—starting with purpose and ending with grace.

## Rules of thumb

- **Enter vs Exit:** Exits are faster than entrances
- **Size relationship:** Smaller elements = faster animations
- **User-initiated:** Faster feedback
- **System-initiated:** Slower feedback to draw attention

## Token layers

Two layers ship today:

- **Core primitives** — `packages/assets/tokens/src/core/motion.json`, compiled
  under the `.mds-motion` selector as `--mds-motion-*` custom properties. The raw
  duration, easing, delay, and stagger scales.
- **Animations** — `packages/assets/tokens/src/motion/animation.json`, compiled
  under `.mds-animation` as named `--mds-transition-*` / `--mds-animation-*`
  custom properties. Each is a real, directly consumable token — reference one
  by name the same way you'd reference a duration or easing token (see
  [Animations](#animations)).

Reference the core primitives directly for custom, one-off animation; reach for
a named animation when the effect you need already exists.

## Core tokens

### Duration

How long an animation runs. Match the step to the interaction's scale.

| Token | Use for |
| --- | --- |
| `instant` | Immediate change |
| `fast` | Micro-interactions, hover states, opacity fades, small scale changes, toggles |
| `normal` | Medium transitions — modals, accordions, drawers |
| `relaxed` | Large / emphatic — full-screen modals, sidebars, page transitions |
| `slow` | Deliberate attention — onboarding, celebrations, progress completion, complex entrances |

### Easing

The acceleration curve. Choose by whether an element is arriving, leaving, or
looping.

| Token | Use for |
| --- | --- |
| `standard` | Default for most animations and state changes |
| `entrance` | Elements appearing — decelerate into view |
| `exit` | Elements disappearing — accelerate out of view |
| `linear` | Continuous loops — spinners, progress bars |

### Delay

A pause before an animation begins — mostly for sequencing.

| Token | Use for |
| --- | --- |
| `none` | Default — no delay before the animation starts |
| `short` | A brief pause before a directly-related animation follows another |
| `medium` | Sequencing a secondary effect after a primary one has had time to register |
| `long` | A deliberate pause before drawing attention to a system-initiated change |

### Stagger

The offset between items in a sequence, so lists and groups animate in cascade
rather than all at once.

| Token | Use for |
| --- | --- |
| `tight` | Dense lists — many items cascading in quick succession |
| `normal` | The default cascade offset for most grouped items |
| `relaxed` | Sparse or emphatic groups — a slower, more deliberate cascade |

Authoritative source: `packages/assets/tokens/src/core/motion.json`.

## Animations

`motion/animation.json` composes the core primitives into named, directly
consumable animations — not an internal build detail. Each one compiles to its
own custom property that a consumer can reference by name, the same way they'd
reference a duration or easing token, and comes in one of four shapes:

- **`transition`** — animates named CSS properties between states, compiled to
  its own `--mds-transition-*` custom property (e.g. `buttonBackground`
  transitions `background-color`; `checkboxDefault` transitions
  `background-color` and `border-color`).
- **`transitionCompound`** — runs several transitions in parallel under one
  `--mds-transition-*` custom property (e.g. `buttonHover` combines
  `buttonBackground` and `buttonBorder`).
- **`keyframe`** — a from/to keyframe animation, compiled to its own
  `--mds-animation-*` custom property plus a matching `@keyframes` block
  (e.g. `buttonLoadingSpin` rotates `0deg → 360deg` on an infinite loop;
  `checkboxChecked` scales `0.8 → 1`).
- **`keyframeCompound`** — several keyframes combined under one
  `--mds-animation-*` custom property (e.g. `buttonLoadingSpinPulse` =
  `buttonLoadingSpin` + `buttonLoadingPulse`).

Animations currently cover `button`, `checkbox`, overlay enter/exit
(`fadeIn` / `fadeOut`, `slideEntrance` / `slideExit`), panel height
(`expand` / `collapse` on `grid-template-rows`), and reusable text/scale
primitives (`textChange`, `growShrink`). Because each one
references core tokens rather than raw values, retuning a duration or easing at
the core layer updates every animation that uses it.

Authoritative source: `packages/assets/tokens/src/motion/animation.json`.

## Usage

- **Use tokens, not literals** — reference `--mds-motion-*`, or a named
  animation (`--mds-transition-*` / `--mds-animation-*`), rather than
  hand-writing `transition: 300ms ease` so timing stays consistent and
  centrally tunable.
- **Duration by interaction scale** — `fast` for micro-interactions, `normal`
  for medium transitions, `relaxed` for large/page-level movement, `slow` for
  moments that deserve deliberate attention.
- **Easing by direction** — `entrance` for appearing, `exit` for disappearing,
  `standard` as the default, `linear` only for continuous loops.
- **Respect reduced motion** — honor `prefers-reduced-motion`; reduce or remove
  non-essential animation for users who request it. Shipped CSS under
  `.mds-motion` and `.mds-animation` includes `@media (prefers-reduced-motion: reduce)`
  overrides (durations/delays/staggers to `0ms`; transition/animation shorthands to
  `none`). Applications can also wrap content in
  [`mdc-motionprovider`](../../../components/src/components/motionprovider/knowledge-base/motionprovider.component.md)
  to toggle token scope with `motion="full" | "reduce" | "system"`.

> **Note:** these tokens are published under `.mds-motion` and `.mds-animation`
> and are consumable directly by name (e.g. `var(--mds-animation-button-loading-spin)`),
> but are not yet widely consumed by Momentum's own component styles. Named
> animations are the intended mechanism for standardizing component motion over
> time.

## Related

- [Color](./color.md) — animations frequently transition between color tokens
  (start/end values reference the color theme).
- [Theming](./theming.md) — how token-based styling resolves per theme.
- [Elevation](./elevation.md) — the other motion-adjacent foundational tokens for
  depth.
