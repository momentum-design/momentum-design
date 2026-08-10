---
title: Motion
summary: Momentum motion tokens — the duration, easing, delay, and stagger scales, the animation recipes built on them, and the principles for applying them.
tier: 2
---

# Motion

Motion System Strategy: "Efficient, Precise, and Responsive"

The motion language for Momentum needs to feel snappy and professional. It should guide the user's focus without distracting them. Animations should be functional — indicating state changes, hierarchy, and spatial relationships — rather than decorative.

## Principles

**1. Orientation over Ornamentation (Navigation)**

Value: Motion should serve as a map, not a decoration.  User: “I know where I am and where I want to go.”
Animations must provide spatial context, helping users understand where they are and where they are going within the application. By moving elements along logical axes, we reduce the cognitive "jump" between different views.

**2. Informative by Intent (Status)**

Value: Every movement should carry a message.  User: “I understand what the system is doing right now.”
In a collaboration environment, state changes happen constantly (e.g., a colleague joining a call, a file finishing an upload). Animation should act as a silent narrator, providing "just-in-time" information without requiring a pop-up or a modal.

**3. Purposeful Vitality (Brand)**

Value: Reflect the "Momentum" why of Wellbeing Intelligence.  User: “This tool feels good to use.”
Cisco’s brand is about the flow of information and the energy of collaboration. Our animations should feel "alive" but disciplined. We avoid mechanical, linear movements in favor of natural easing that mimics real-world physics—starting with purpose and ending with grace.

## Rules of thumb

- **Enter vs Exit:**  Exits are faster than entrances
- **Size relationship:**  Smaller elements = faster animations
- **User-initiated:**  Faster feedback 
- **System-initiated:**  Slower feedback to draw attention

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
