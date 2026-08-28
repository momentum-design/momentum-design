---
title: Color
summary: How Momentum color tokens are structured (usage, prominence, state), how they resolve across themes, and where each semantic color belongs.
tier: 2
websitePath: foundations/color
---

# Color

Color in Momentum is delivered as **tokens**, not raw values. A component never
references a hex code or a primitive swatch directly — it references a
**semantic theme token** whose value is resolved per theme. This is what lets a
single build render correctly in light, dark, and high-contrast modes and stay
accessible.

This topic explains how the color system is organized so you can find the right
token by its name. For how those tokens change between modes, see
[Theming](./theming.md). For the glass aesthetic and its material/blur/overlay
tokens, see [Glass](./glass.md).

## Principles

- **Vibrant** — color expresses energy and synergy through uplifting shades and
  dynamic gradients.
- **Consistent** — the system produces a uniform visual appearance across
  diverse products and platforms.
- **Accessible** — pairings target an adequate contrast ratio and adhere to WCAG
  wherever feasible. Any custom foreground/background pairing must be verified.

## The token tiers

Color tokens exist at two source levels. Consume the **theme** tier; never reach
past it to a primitive.

| Tier | Namespace | Example | Consume directly? |
| --- | --- | --- | --- |
| **Primitive** | `color.core.*`, `color.decorative.*` | `color.core.blue.70` | No — internal palette |
| **Semantic (theme)** | `color.theme.*` | `color.theme.text.primary.normal` | **Yes** |

Primitives are the raw palette. Semantic theme tokens map *intent* onto those
primitives and are the only tier that flips between themes. If you hardcode a
primitive (or a hex value) in a component, theming and contrast break.

At build time each semantic token is compiled to a CSS custom property that
components consume — `color.theme.text.primary.normal` becomes
`var(--mds-color-theme-text-primary-normal)`. Those custom properties are what a
theme swaps at runtime (see [Theming](./theming.md)).

## How a theme token is named

```text
color.theme.<usage>.<variant>.<state>
```

- **usage** — *where* the color is applied (text, background, button, outline…).
- **variant** — *which* treatment: prominence (`primary`/`secondary`/
  `tertiary`), sentiment (`error`/`success`/`warning`/`accent`), an action
  (`join`/`cancel`), or a named accent (`cobalt`, `purple`…).
- **state** — the interaction state: `normal` (rest), `hover`, `pressed`,
  `active` (selected/on), `disabled`. Focus rings are their own usage group.

Example: `color.theme.button.primary.hover`.

Some tokens nest a variant deeper (`button.secondary.active.hover`) or omit the
state when a color is stateless (`text.highlight`).

## Primitives (reference, don't consume)

The palette theme tokens draw from:

- **`color.core`** — the base UI palette: `white-alpha`, `black-alpha`, `gray`,
  `blue`, `green`, `red`, `yellow`, `orange`. Alpha families are transparent
  (they let background tone through); solid families are opaque. Each family runs
  a numeric ramp (e.g. `blue.10` … `blue.100`); higher numbers are more
  saturated/darker.
- **`color.decorative`** — expressive accents used for people, labels, and
  avatars: `gold`, `olive`, `lime`, `mint`, `cyan`, `cobalt`, `slate`, `violet`,
  `purple`, `pink`.
- **`color.partner`** — brand colors for third-party file types (`pdf`, `word`,
  `powerpoint`, `excel`, `keynote`…). Theme-invariant.
- **`color.highcontrast`**, **`color.gradient`**, **`color.mobile`**,
  **`color.ai`** — specialized palettes for high-contrast modes, gradients,
  native mobile, and AI surfaces.

Authoritative source: `packages/assets/tokens/src/core/value.json`.

## Usage groups

There are 16 theme usage groups. Each entry below gives the group's intent,
its main variants, and representative light/dark values (shown as the primitive
they reference). The complete, authoritative token set per mode lives in
`packages/assets/tokens/src/theme/stable/` (`light.json`, `dark.json`,
`highcontrast/hc_light.json`, `highcontrast/hc_dark.json`).

### text — `color.theme.text.*`

Foreground color for type and inline icons.

| Token | Light | Dark |
| --- | --- | --- |
| `text.primary.normal` | `core.black-alpha.95` | `core.white-alpha.95` |
| `text.secondary.normal` | `core.black-alpha.70` | `core.white-alpha.70` |
| `text.primary.disabled` | `core.black-alpha.40` | `core.white-alpha.40` |
| `text.error.{normal,hover,active}` | `core.red.{70,90,90}` | `core.red.{40,20,20}` |
| `text.success` / `text.warning` / `text.accent` | `green` / `yellow` / `blue` `.70→.90` | `.40→.20` |
| `text.highlight` | `core.blue.20` | `core.blue.80` |
| `text.team.<accent>.*` | `decorative.<accent>.70→90` | `.40→.20` |

Prominence: `primary` for high-emphasis body/headings, `secondary` for
supporting text. Use sentiment variants (`error`, `success`, `warning`) only for
matching status messaging, never for generic emphasis.

**Used by:** `text`, `button`, `input`, `listitem`, `dialog`, `toast`,
`tooltip`, and more — the most broadly consumed group (45 components).

### background — `color.theme.background.*`

Surface fills, from transparent interaction layers to opaque canvases.

| Variant | Intent | Example (light → dark) |
| --- | --- | --- |
| `primary.{ghost,hover,active,disabled}` | Transparent hit-state layer over any surface | `black-alpha.0/7/11` → `white-alpha.0/7/11` |
| `solid.{primary,secondary,tertiary,quaternary}` | Opaque page/card surfaces | `white-alpha.100` / `gray.5/10` → `black-alpha.100` / `gray.95/90` |
| `secondary.{normal,hover,active,subtle}` | Translucent filled surfaces | `black-alpha.11/20/30/7` → `white-alpha.*` |
| `alert.{default,success,warning,error,theme,purple,orange}` | Banner/notification backgrounds | `*.10` → `*.90` |
| `accent` | Brand-tinted surface | `blue.60` |

`solid.*` are your opaque canvases; `primary.*` are the transparent layers you
stack for hover/press feedback. `glass.*` lives in [Glass](./glass.md).

`gradient.uplift.*` — individual stop colors for the uplift animated background
(`mdc-animatedbackground`): semantic layers `ambient`, `midtone`, and
`expressive`, plus `base` for the canvas clear. Each stop resolves to a single
color (not a `linear-gradient` string). Do not confuse with
`gradient.primary` / `gradient.secondary` (two-stop page chrome). Stable light
theme currently duplicates dark uplift aliases as placeholders — remap to
light-appropriate core references in a follow-up.

**Used by:** `dialog`, `popover`, `banner`, `toast`, `listitem`, `input`,
`chip`, and more (31 components).

### groupedbackground — `color.theme.groupedbackground.*`

Layered "grouped" surfaces (primary → quaternary) for nested containers, à la
inset/grouped lists. Light uses `gray.5`/`white`; dark steps through
`black-alpha.100` → `gray.80`.

**Used by:** no component currently consumes this group; it backs
grouped/inset container surfaces.

### button — `color.theme.button.*`

Fills for actionable controls, by prominence and by action.

| Variant | States | Example (light) |
| --- | --- | --- |
| `primary` | normal/hover/pressed/disabled | `black-alpha.95/80/70/20` (dark: `white-alpha.*`) |
| `secondary` + `secondary.active` | normal/hover/pressed/disabled | `black-alpha.0/7/20/0` |
| `join` | normal/hover/pressed | `green.60/70/80` |
| `cancel` | normal/hover/pressed | `red.60/70/80` |
| `accent` | normal/hover/pressed | `blue.60/70/80` |
| `glass.primary` | normal/hover/pressed | see [Glass](./glass.md) |

`join`/`cancel` are semantic actions (accept/decline a call), not generic
success/error — use them only for those flows.

**Used by:** `button`, `tab`, `menupopover`, `navmenuitem`.

### outline — `color.theme.outline.*`

Borders, dividers, and separators. 16 variants including `primary`, `secondary`,
`theme` (brand-tinted), `input`, `button`, `join`, `cancel`, `promotion`,
`warning`, `high-contrast`, `gradient`, `glass`, and `ai`. Choose the variant
that matches the bordered element (e.g. `outline.input.*` for fields,
`outline.button.*` for button borders).

**Used by:** `input`, `button`, `card`, `dialog`, `checkbox`, `tab`, `divider`,
and more (36 components).

### control — `color.theme.control.*`

Interactive control fills (checkboxes, radios, toggles, sliders).

- `control.active.*` — the "on"/selected state, brand blue (`blue.40→60`
  through hover/pressed).
- `control.inactive.*` — the neutral "off" track.
- `control.indicator.inactive.normal` — `gray.50` (theme-invariant).

**Used by:** `checkbox`, `radio`, `toggle`, `slider`, `statictoggle`,
`stepperitem`, `progressbar`, `progressspinner`, `spinner`, `staticcheckbox`,
`staticradio` (11 components).

### overlay — `color.theme.overlay.*`

Scrims that dim content behind modals and menus (`overlay.meetings`,
`overlay.button`).

**Used by:** `divider`, `slider`.

### indicator — `color.theme.indicator.*`

Status/presence dots. Each maps to a sentiment: `stable` (green), `attention`
(red), `caution` (yellow/orange), `secure` (blue), plus `locked` and `unstable`.
Use the indicator that matches the state being communicated.

**Used by:** `presence`, `progressbar`.

### inverted — `color.theme.inverted.*`

The mirror of the active theme — light colors in light mode, dark colors in dark
mode — for surfaces that must contrast against the current theme (tooltips,
coachmarks). Provides its own `text`, `background`, `button`, `outline`, and
`control` sub-sets. See [Theming](./theming.md#inverted-and-common) for the
concept.

**Used by:** `tooltip`, `coachmark`, `toggletip`, `popover`, `button`, `badge`,
`input`, `link`, and more (17 components).

### common — `color.theme.common.*`

Colors that stay the **same across all themes** (e.g. media touchbar, partner
file colors, fixed overlays). Only a few components use common colors; reach for
them only when a color must not flip with the theme. See
[Theming](./theming.md#inverted-and-common).

**Used by:** `avatar`, `avatarbutton`, `badge`, `button`, `dialog`,
`datepicker`, `popover`, `inputchip`, `statictoggle`, `timepicker`
(10 components).

### avatar — `color.theme.avatar.*`

Avatar backgrounds: `default`, `ghost`, interaction states (`hover`, `pressed`),
a `glass` variant, and the named-accent set (`cobalt`, `cyan`, `gold`, `lime`,
`mint`, `orange`, `pink`, `purple`, `slate`, `violet`, `yellow`) used to color
people consistently. Named accents are theme-invariant (`decorative.<name>.70`).

**Used by:** `avatar`, `avatarbutton`.

### illustrations — `color.theme.illustrations.*`

Multi-stop palettes for spot illustrations and empty/onboarding/success/error
states. Mostly theme-invariant decorative pairs.

**Used by:** no component currently consumes this group; illustration colors are
applied in product-level artwork.

### gradientdivider — `color.theme.gradientdivider.*`

Gradient separators that fade at both ends. Variants: `default`, `success`,
`warning`, `error`, `announce`, `orange`, `purple`, and `vertical`. Light uses
`black-alpha`; dark uses `white-alpha`.

**Used by:** `divider`.

### globaltint — `color.theme.globaltint.*`

App-wide tint (`normal`, `selected`) — brand blue.

**Used by:** no component currently consumes this group.

### scrollbar — `color.theme.scrollbar.*`

Scrollbar `button` (thumb), `arrow`, and `background`. Light `black-alpha`, dark
`white-alpha`.

**Used by:** `themeprovider` (global scrollbar styling).

### focus — `color.theme.focus.*`

The focus ring (`focus.default.0/1/2` — the layered ring stops). Never restyle
focus with another token; use this group so keyboard focus stays consistent and
visible.

**Used by:** `calendar`, `radio` directly; most components inherit the focus
ring from shared styling (`utils/styles`).

## Prominence and sentiment

Two cross-cutting descriptors appear as variants across groups:

- **Prominence** (visual hierarchy): `primary` (most prominent — high-emphasis
  fills, text, icons), `secondary` (supporting), `tertiary` (least prominent,
  mostly backgrounds).
- **Sentiment** (situation/context): `error`, `success`, `warning`, `accent`,
  `promotion`. Use these only to convey their meaning, never for decoration.

Named accents (`cobalt`, `cyan`, `gold`, `lime`, `mint`…) are the expressive set
used to distinguish people, labels, and avatars.

## Interaction states

Most interactive tokens expose the same state ramp:

- `normal` — resting state.
- `hover` — pointer over the target.
- `pressed` — active press.
- `active` — selected / "on".
- `disabled` — non-interactive.

Do not simulate a state by swapping to a different variant's `normal`; use the
matching state token so behavior stays consistent across components and themes.

## Misuse — do not

- **Don't** hardcode hex values or reference `color.core.*` / `color.decorative.*`
  directly in a component. Always go through `color.theme.*`.
- **Don't** use a sentiment token (`error`, `success`, `warning`) for emphasis
  that isn't that sentiment.
- **Don't** repurpose `button.join`/`button.cancel` outside accept/decline
  flows.
- **Don't** restyle focus with anything other than `color.theme.focus.*`.
- **Don't** pick a color by its resolved light-mode value — pick it by intent, so
  it resolves correctly in dark and high-contrast modes.

## Quick lookup — "I need a color for…"

| I need… | Reach for |
| --- | --- |
| Body / heading text | `text.primary.normal`, `text.secondary.normal` |
| An error / success message | `text.error.*`, `background.alert.error.*` |
| A primary button fill | `button.primary.*` |
| A field border | `outline.input.*` |
| A checkbox/toggle "on" state | `control.active.*` |
| A page / card surface | `background.solid.primary.normal` |
| A hover layer over a surface | `background.primary.hover` |
| A presence/status dot | `indicator.*` |
| An avatar background | `avatar.<accent>` |
| A modal scrim | `overlay.*` |
| A keyboard focus ring | `focus.default.*` |
| A glass/translucent panel | see [Glass](./glass.md) |

## Related

- [Theming](./theming.md) — how these tokens resolve across light, dark, and
  high-contrast modes; inverted vs. common.
- [Glass](./glass.md) — the glass aesthetic: material, blur, and overlay tokens.
- `themeprovider` component (Tier 3) — how a theme is applied at runtime.
