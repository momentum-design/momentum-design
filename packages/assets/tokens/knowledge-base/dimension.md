---
title: Dimension
summary: Momentum dimension tokens for spacing, border width, corner radius, and fixed size, including the stable and fluid density contracts.
tier: 2
---

# Dimension

Dimension tokens create a shared spatial system for Momentum products. A core
scale supplies primitive measurements, while spacing, border, radius, and size
tokens give those measurements a role that designers and developers can apply
consistently.

Use the role-based tokens in components and product layouts. Treat the core
`dimension.*` scale as the foundation for those roles, not as a menu of values
to apply directly.

## Token layers

### Core dimensions

The `dimension.*` tokens form the primitive scale. Most numeric step names
describe their pixel-equivalent size at the default root font size, while the
source uses relative units where appropriate. `dimension.full` is the
percentage-based primitive for circles and fully rounded shapes.

Semantic tokens reference this scale. Do not select a core step because its
current value happens to fit a design; select the spacing, border, radius, or
size token that describes the element's role.

Authoritative source:
`packages/assets/tokens/src/core/dimension.json`.

## Semantic uses

Semantic dimensions are grouped by purpose:

- `spacing.*` controls padding and gaps.
- `border.*` controls stroke width.
- `radius.*` controls corner shape.
- `size.*` controls fixed dimensions and minimum dimensions.

The stable and fluid source sets currently resolve to the same core dimensions.
They remain separate contracts so Momentum can adjust density without changing
the token names used by components. Apply `.mds-theme-stable` or
`.mds-theme-fluid` alongside the product's color theme class. See
[Theming](./theming.md) for the general rule that consumers reference stable
semantic keys while a selected theme supplies their values.

### Spacing

Use padding tokens inside a control or bounded surface. Use gap tokens between
siblings, groups, or sections.

| Token | Use for |
| --- | --- |
| `pad-none` | Flush controls that need no internal padding |
| `pad-block` | Default vertical padding inside controls |
| `pad-inline` | Default horizontal padding inside controls |
| `gap-none` | Intentionally collapsed space between elements |
| `gap-tight` | Closely related items in compact layouts |
| `gap` | Default sibling gaps and compact surface padding |
| `gap-wide` | Roomier sibling gaps and default surface padding |
| `gap-loose` | Separating blocks or sections |
| `gap-ultraloose` | The largest layout separation in the scale |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/spacing.json` and
`packages/assets/tokens/src/theme/fluid/spacing.json`.

### Border

Border tokens set stroke width. Pair them with a semantic color token that
communicates the border's state and prominence.

| Token | Use for |
| --- | --- |
| `default` | Standard control and container outlines |
| `emphasis` | Selected states or container edges that need stronger definition |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/border.json` and
`packages/assets/tokens/src/theme/fluid/border.json`.

### Radius

Choose radius by the intended silhouette and the scale of the bounded element.
Compound controls may mix radius roles so joined edges remain flat while outer
edges retain the expected shape.

| Token | Use for |
| --- | --- |
| `none` | Flat edges and joined edges in compound controls |
| `subtle` | Barely softened corners on small square elements |
| `small` | Compact controls, chips, icons, and partial tab corners |
| `medium` | Default surfaces, inputs, dialogs, list items, and toasts |
| `large` | More prominent rounding on bounded controls |
| `pill` | Capsule-shaped controls and navigation items |
| `full` | Circles such as avatars, radios, slider thumbs, and presence indicators |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/radius.json` and
`packages/assets/tokens/src/theme/fluid/radius.json`.

### Size

Size tokens describe fixed dimensions and minimum dimensions. Their path
combines a broad size band (`sm`, `md`, `lg`, or `xl`) with a numeric step so
consumers can compare nearby options without losing the token's role.

#### Small

| Token | Use for |
| --- | --- |
| `size.sm.4` | Micro indicators and navigation notches |
| `size.sm.8` | The smallest icon or glyph slots |
| `size.sm.12` | Compact icon slots, badges, and navigation icons |

#### Medium

| Token | Use for |
| --- | --- |
| `size.md.16` | Standard icon slots, small avatars, badges, and radios |
| `size.md.20` | Compact inline rows, chip icons, and time-picker elements |
| `size.md.24` | Compact controls such as chips |
| `size.md.28` | Controls between compact and standard height |
| `size.md.32` | Default-height inputs, selects, tabs, and comboboxes |

#### Large

| Token | Use for |
| --- | --- |
| `size.lg.40` | Large controls and toolbar or navigation rows |
| `size.lg.52` | Wide-control minimum dimensions |
| `size.lg.64` | Application chrome, search fields, and large avatars |

#### Extra large

| Token | Use for |
| --- | --- |
| `size.xl.72` | Large avatars |
| `size.xl.88` | Extra-large avatars |
| `size.xl.100` | Content minimum heights such as text areas |
| `size.xl.124` | Maximum avatar and hero dimensions |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/size.json` and
`packages/assets/tokens/src/theme/fluid/size.json`.

## Usage

Import the spacing, border, radius, or size outputs needed from
`@momentum-design/tokens`, then apply the stable or fluid density class at the
scope where the semantic dimensions should resolve. Use the compiled custom
properties from those outputs rather than copying their resolved values into
component styles.

Dimension roles are available for component code to consume, but repository
search currently finds no component implementations using their compiled custom
properties. Until components adopt them, use the tables above as the intended
contract and verify implementation support before assuming a component responds
to a density-class change.

### Common misuses

- **Common misuse:** using a `dimension.*` primitive directly because its
  current value looks right.
  **Why it's wrong:** the primitive communicates a measurement, not a role.
  **Use instead:** the matching `spacing.*`, `border.*`, `radius.*`, or `size.*`
  token.
- **Common misuse:** using a spacing token for a control's fixed height.
  **Why it's wrong:** spacing describes a relationship around or between
  elements.
  **Use instead:** the appropriate `size.*` token.
- **Common misuse:** using a size token to separate siblings.
  **Why it's wrong:** a fixed dimension does not describe layout rhythm.
  **Use instead:** a `spacing.gap*` token.
- **Common misuse:** using `radius.pill` to make a square element circular.
  **Why it's wrong:** a fixed pill radius does not guarantee a circle at every
  size.
  **Use instead:** `radius.full`.
- **Common misuse:** using a radius or spacing step as a stroke width.
  **Why it's wrong:** the value may match today, but it bypasses the border
  contract.
  **Use instead:** `border.default` or `border.emphasis`.
- **Common misuse:** adding a one-off CSS length between existing steps.
  **Why it's wrong:** arbitrary values weaken shared rhythm and make density
  changes harder.
  **Use instead:** the nearest role-based token, or propose a token when no
  existing role represents the need.

## Related

- [Theming](./theming.md) — how semantic token keys receive values from an
  applied theme.
- [Typography](./typography.md) — type sizes and line heights, which have their
  own scale and should not use dimension tokens.
- [Elevation](./elevation.md) — the fixed depth scale for surfaces that sit
  above other content.
