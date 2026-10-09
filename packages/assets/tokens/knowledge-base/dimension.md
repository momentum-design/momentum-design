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

Use theme tokens in components and product layouts. Do not pick a core
`dimension.*` step just because the number looks right.

## Token layers

### Core dimensions

The `dimension.*` tokens form the primitive scale. Most numeric step names
describe their pixel-equivalent size at the default root font size, while the
source uses relative units where appropriate. `dimension.full` is the
percentage-based primitive for circles and fully rounded shapes.

Theme tokens reference this scale. Select a spacing, border, radius, or
size theme token. Do not use the core step directly.

Authoritative source:
`packages/assets/tokens/src/core/dimension.json`.

## Theme tokens

Theme dimensions are grouped by purpose:

- `spacing.theme.*` controls padding and gaps.
- `border.theme.*` controls stroke width.
- `radius.theme.*` controls corner shape.
- `size.theme.*` controls fixed dimensions and minimum dimensions.

These tokens ship in the same complete theme CSS as color (`light-stable`,
`dark-stable`, and high-contrast). Apply the product's existing theme class.
No extra `.mds-spacing` or `.mds-border` class is required. See
[Theming](./theming.md).

### Spacing

Use padding tokens inside a control or bounded surface. Use gap tokens between
siblings, groups, or sections.

| Token | Use for |
| --- | --- |
| `pad-none` | Flush controls that need no internal padding |
| `pad-v-xs` | Compact vertical padding. Default control v pad |
| `pad-v-sm` | Standard vertical padding |
| `pad-v-md` | Roomy vertical padding |
| `pad-v-lg` | Large vertical padding |
| `pad-v-xl` | Extra-large vertical padding |
| `pad-h-xs` | Compact horizontal padding |
| `pad-h-sm` | Standard horizontal padding. Default control h pad |
| `pad-h-md` | Roomy horizontal padding |
| `pad-h-lg` | Large horizontal padding |
| `pad-h-xl` | Extra-large horizontal padding |
| `gap-none` | Intentionally collapsed space between elements |
| `gap-ultra-tight` | Ultra-tight sibling gap |
| `gap-tight` | Tight sibling gap. Icon-to-label, most control internals |
| `gap-wide` | Wide layout gap. Roomy stacks |
| `gap-loose` | Separating blocks or sections |
| `gap-ultraloose` | The largest layout separation in the scale |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/light.json` and
`packages/assets/tokens/src/theme/stable/dark.json`.

### Border

Border tokens set stroke width. Pair them with a semantic color token that
communicates the border's state and prominence.

| Token | Use for |
| --- | --- |
| `default` | Standard control and container outlines |
| `emphasis` | Selected states or container edges that need stronger definition |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/light.json` and
`packages/assets/tokens/src/theme/stable/dark.json`.

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
`packages/assets/tokens/src/theme/stable/light.json` and
`packages/assets/tokens/src/theme/stable/dark.json`.

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
`packages/assets/tokens/src/theme/stable/light.json` and
`packages/assets/tokens/src/theme/stable/dark.json`.

## Usage

Import the theme complete CSS from `@momentum-design/tokens` and apply the
same theme class already used for color. Use the compiled custom properties
rather than copying resolved values into component styles.

### Common misuses

- **Common misuse:** using a `dimension.*` primitive directly because its
  current value looks right.
  **Why it's wrong:** the primitive communicates a measurement, not a role.
  **Use instead:** the matching theme spacing, border, radius, or size token.
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
  **Use instead:** the nearest theme token, or propose a token when no
  existing theme token represents the need.

## Related

- [Theming](./theming.md) — how semantic token keys receive values from an
  applied theme.
- [Typography](./typography.md) — type sizes and line heights, which have their
  own scale and should not use dimension tokens.
- [Elevation](./elevation.md) — the fixed depth scale for surfaces that sit
  above other content.
