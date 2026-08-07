---
title: Motion
summary: Momentum motion tokens — the duration, easing, delay, and stagger scales, the animation recipes built on them, and the principles for applying them.
tier: 2
---

# Motion

Momentum's motion language is **functional, not decorative**. Animation should
feel snappy and professional, and guide the user's focus without distracting
them — communicating state changes, hierarchy, and spatial relationships rather
than ornamenting the interface.

Motion is delivered as tokens so that timing and easing stay consistent across
components instead of each surface hand-tuning its own transitions.

## Principles

- **Orientation over ornamentation** — motion should act as a map, not a
  flourish. Moving elements along logical axes gives spatial context and reduces
  the cognitive "jump" between views, so the user always knows where they are and
  where they are going.
- **Informative by intent** — every movement should carry a message about what
  the system is doing. Use motion as a quiet narrator that surfaces just-in-time
  status (something loading, arriving, completing) instead of reaching for a
  pop-up or modal.
- **Purposeful vitality** — animation should feel alive but disciplined. Favor
  natural easing that mimics real-world physics — starting with purpose and
  ending with grace — over mechanical, linear movement.

## Rules of thumb

- **Exits are faster than entrances** — let things leave quickly; let them
  arrive with a little more presence.
- **Smaller elements animate faster** — scale duration to the size and weight of
  what is moving.
- **User-initiated vs. system-initiated** — respond to direct user action with
  fast feedback; slow system-initiated changes down slightly so they draw the
  eye.

## Token layers

Two layers ship today:

- **Core primitives** — `packages/assets/tokens/src/core/motion.json`, compiled
  under the `.mds-motion` selector as `--mds-motion-*` custom properties. The raw
  duration, easing, delay, and stagger scales.
- **Animation recipes** — `packages/assets/tokens/src/motion/animation.json`,
  compiled under `.mds-animation`. Named, reusable transitions and keyframes that
  reference the core primitives (see [Animation recipes](#animation-recipes)).

Reference the core primitives directly for custom, one-off animation; reach for
an animation recipe when a pattern is shared across components.

## Core tokens

### Duration

How long an animation runs. Match the step to the interaction's scale.

| Token | Custom property | Value | Use for |
| --- | --- | --- | --- |
| `motion.duration.instant` | `--mds-motion-duration-instant` | 100ms | Immediate change |
| `motion.duration.fast` | `--mds-motion-duration-fast` | 200ms | Micro-interactions, hover states, opacity fades, small scale changes, toggles |
| `motion.duration.normal` | `--mds-motion-duration-normal` | 300ms | Medium transitions — modals, accordions, drawers |
| `motion.duration.relaxed` | `--mds-motion-duration-relaxed` | 450ms | Large / emphatic — full-screen modals, sidebars, page transitions |
| `motion.duration.slow` | `--mds-motion-duration-slow` | 600ms | Deliberate attention — onboarding, celebrations, progress completion, complex entrances |

### Easing

The acceleration curve. Choose by whether an element is arriving, leaving, or
looping.

| Token | Custom property | Value | Use for |
| --- | --- | --- | --- |
| `motion.easing.standard` | `--mds-motion-easing-standard` | `cubic-bezier(0.44, 0, 0, 1)` | Default for most animations and state changes |
| `motion.easing.entrance` | `--mds-motion-easing-entrance` | `cubic-bezier(0, 0, 0.2, 1)` | Elements appearing — decelerate into view |
| `motion.easing.exit` | `--mds-motion-easing-exit` | `cubic-bezier(0.5, 0, 1, 1)` | Elements disappearing — accelerate out of view |
| `motion.easing.linear` | `--mds-motion-easing-linear` | `cubic-bezier(0, 0, 1, 1)` | Continuous loops — spinners, progress bars |

### Delay

A pause before an animation begins — mostly for sequencing.

| Token | Custom property | Value |
| --- | --- | --- |
| `motion.delay.none` | `--mds-motion-delay-none` | 0ms |
| `motion.delay.short` | `--mds-motion-delay-short` | 200ms |
| `motion.delay.medium` | `--mds-motion-delay-medium` | 400ms |
| `motion.delay.long` | `--mds-motion-delay-long` | 600ms |

### Stagger

The offset between items in a sequence, so lists and groups animate in cascade
rather than all at once.

| Token | Custom property | Value |
| --- | --- | --- |
| `motion.stagger.tight` | `--mds-motion-stagger-tight` | 30ms |
| `motion.stagger.normal` | `--mds-motion-stagger-normal` | 60ms |
| `motion.stagger.relaxed` | `--mds-motion-stagger-relaxed` | 100ms |

Authoritative source: `packages/assets/tokens/src/core/motion.json`.

## Animation recipes

`motion/animation.json` composes the core primitives into named recipes. Each
recipe references core `duration`, `easing`, and `delay` tokens (never raw
values) and comes in one of four shapes:

- **`transition`** — animates named CSS properties between states
  (e.g. `buttonBackground` transitions `background-color`; `checkboxDefault`
  transitions `background-color` and `border-color`).
- **`transitionCompound`** — runs several transitions in parallel
  (e.g. `buttonHover` = `buttonBackground` + `buttonBorder`).
- **`keyframe`** — a from/to keyframe animation
  (e.g. `buttonLoadingSpin` rotates `0deg → 360deg` on an infinite loop;
  `checkboxChecked` scales `0.8 → 1`).
- **`keyframeCompound`** — several keyframes in parallel
  (e.g. `buttonLoadingSpinPulse` = `buttonLoadingSpin` + `buttonLoadingPulse`).

Recipes are currently scoped to `button` and `checkbox`. Because they reference
core tokens, retuning a duration or easing at the core layer updates every recipe
that uses it.

Authoritative source: `packages/assets/tokens/src/motion/animation.json`.

## Usage

- **Use tokens, not literals** — reference `--mds-motion-*` (or a recipe) rather
  than hand-writing `transition: 300ms ease` so timing stays consistent and
  centrally tunable.
- **Duration by interaction scale** — `fast` for micro-interactions, `normal`
  for medium transitions, `relaxed` for large/page-level movement, `slow` for
  moments that deserve deliberate attention.
- **Easing by direction** — `entrance` for appearing, `exit` for disappearing,
  `standard` as the default, `linear` only for continuous loops.
- **Respect reduced motion** — honor `prefers-reduced-motion`; reduce or remove
  non-essential animation for users who request it.

> **Note:** these tokens are published under `.mds-motion` and `.mds-animation`
> but are not yet widely consumed by component styles. The animation recipes are
> the intended mechanism for standardizing component motion over time.

## Related

- [Color](./color.md) — animations frequently transition between color tokens
  (start/end values reference the color theme).
- [Theming](./theming.md) — how token-based styling resolves per theme.
- [Elevation](./elevation.md) — the other motion-adjacent foundational tokens for
  depth.
