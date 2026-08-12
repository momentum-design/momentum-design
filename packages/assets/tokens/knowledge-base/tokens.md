---
title: Design tokens
summary: Overview of the Momentum token system — the tier model, naming and --mds-* compilation, authoring format, governance, and links to every token topic.
tier: 2
---

# Design tokens

Momentum ships design decisions as **tokens** — named values for colour, type,
depth, motion, and more. A component never references a raw value; it consumes a
compiled `--mds-*` CSS custom property whose value the system resolves. That
indirection is what keeps products consistent, lets a single build render across
themes, and holds the line on accessibility.

This page is the orientation map for the token system: the tier model, how
tokens are named and compiled, how they are authored, who owns them, and where to
go for each category. It does not restate the categories themselves — each has its
own topic, linked below.

## The tier model

Momentum tokens fall into a small number of tiers. The rule of thumb: **consume
the semantic tier; never reach past it to a primitive.**

| Tier | What it is | Consume directly? |
| --- | --- | --- |
| **Primitive** | The raw scales — the base palette (`color.core.*`, `color.decorative.*`) and the core value files (`core/*`). | No — referenced by semantic tokens |
| **Semantic (theme)** | Intent-based colour that resolves per theme (`color.theme.*` → `--mds-color-theme-*`). The only tier that flips between themes. | **Yes** |
| **Foundational categories** | Single core scales that are not a primitive/semantic split — `elevation`, `typography`, `effect`, and `motion`. Motion adds a named-animation layer on top of its core scale. | **Yes** |

There is **no component-token tier.** Component-specific application (which token a
button uses in which state) lives in component code, not in a token file.

For the semantic colour catalogue see [Color](./color.md); for how semantic
tokens resolve across themes see [Theming](./theming.md).

## Naming and compilation

Semantic colour tokens follow a structured name:

```text
color.theme.<usage>.<variant>.<state>
```

where *usage* is where the colour applies, *variant* is the treatment
(prominence, sentiment, action, or accent), and *state* is the interaction state.
[Color](./color.md#how-a-theme-token-is-named) breaks this down in full.

At build time every token compiles to a `--mds-*` CSS custom property under a
scope class, and consumers reference the property rather than any raw value:

| Category | Selector | Custom property example |
| --- | --- | --- |
| Semantic colour (per theme) | `.mds-theme-*` | `--mds-color-theme-text-primary-normal` |
| Core primitives | `.mds-core` | `--mds-color-core-blue-70` |
| Effect (e.g. blur) | `.mds-effect` | `--mds-effect-*` |
| Elevation | `.mds-elevation` | `--mds-elevation-3` |
| Typography | `.mds-typography` | `--mds-font-apps-body-midsize-medium-font-size` |
| Motion primitives | `.mds-motion` | `--mds-motion-*` |
| Named animations | `.mds-animation` | `--mds-transition-*` / `--mds-animation-*` |

Semantic colour is the only category emitted **per theme** (a `--mds-theme-*`
class per mode/accent); the others are emitted once. See [Theming](./theming.md)
for how the theme classes are applied at runtime.

## Authoring format

Tokens are authored in **Style Dictionary + Tokens Studio JSON** (`value`/`type`)
under `packages/assets/tokens/src/**` — `core/*` (primitives and the foundational
scales), `theme/*` (semantic per-mode values), `motion/*` (named animations),
plus `aaos/*` and `additionaltheme/*` for the automotive namespace and brand
accents. Composite tokens carry their shape in the `type` (for example an
`elevation` is a `boxShadow` with `x/y/blur/spread/color`; a `motion.easing` is a
`cubic-bezier`). This pipeline is **not** DTCG 2025.10 — there are no
resolver/set/mode files. The source JSON is the single source of truth for names
and values; the docs describe intent and link back to it.

## Token topics

Each category has its own topic. Start here and follow the link for names,
values, and usage:

| Topic | Covers |
| --- | --- |
| [Color](./color.md) | The semantic colour model — usage groups, prominence/sentiment, states, and where each colour belongs. |
| [Theming](./theming.md) | How semantic tokens resolve across light, dark, high-contrast, AAOS, and brand accents, and how a theme is applied. |
| [Glass](./glass.md) | The glass aesthetic — material, blur, and overlay tokens for layered, translucent surfaces. |
| [Elevation](./elevation.md) | The four-step drop-shadow scale that conveys surface depth on the z-axis. |
| [Motion](./motion.md) | Duration, easing, delay, and stagger scales, plus the named animations built on them. |
| [Typography](./typography.md) | The type scale, weights, and composed `font.apps.*` styles, and how to consume them. |

## Quick reference — "I need a token for…"

Intent-first entry points into the topics above:

| I need… | Reach for | Topic |
| --- | --- | --- |
| Primary body text colour | `color.theme.text.primary.normal` | [Color](./color.md) |
| A page / card surface | `color.theme.background.solid.primary.normal` | [Color](./color.md) |
| A keyboard focus ring | `color.theme.focus.default.*` | [Color](./color.md) |
| A floating-surface shadow | `elevation.3` | [Elevation](./elevation.md) |
| A translucent, blurred panel | `background.glass.*` + `blur200` | [Glass](./glass.md) |
| A hover transition | `motion.duration.fast` + `motion.easing.standard` | [Motion](./motion.md) |
| Default UI text style | `body-midsize-medium` (`mdc-text`) | [Typography](./typography.md) |

## Governance

The token package is **owned and maintained by the Momentum Design Designers**.
Consumers do not edit `packages/assets/tokens/src/**` directly — request a new or
changed token through the design team, following the
[package contribution guide](../CONTRIBUTING.md) and the
[root contributing guide](../../../../CONTRIBUTING.md). The package's `config/`
drives which build outputs are generated; the shipped output formats (CSS, SCSS,
JSON, minimal JSON, iOS Swift, Android XML) are fixed and the engineering team is
not currently taking requests for additional formats. When a token changes, its
knowledge-base topic is updated in the same change, following the
[contributing-to-knowledge-base skill](../../../../.github/skills/momentum-contributing-to-knowledge-base/SKILL.md).

## Machine-readable reference

Do not hand-maintain a parallel list of tokens. The tokens build already emits
machine-readable output (JSON and minimal JSON), and the knowledge base ships a
generated [`index.packages.json`](../../../../knowledge-base/index.packages.json)
covering every Tier 2 topic. Point AI tools and scripts at those generated
artifacts rather than duplicating token names or values here.

## Related

- [Color](./color.md), [Theming](./theming.md), [Glass](./glass.md),
  [Elevation](./elevation.md), [Motion](./motion.md),
  [Typography](./typography.md) — the individual token topics.
- [Content guidelines](../../../../knowledge-base/content-guidelines.md) — voice
  and in-product copy standards (distinct from token usage).
- [`themeprovider`](../../../components/src/components/themeprovider/knowledge-base/themeprovider.component.md)
  component (Tier 3) — applies a theme at runtime.
