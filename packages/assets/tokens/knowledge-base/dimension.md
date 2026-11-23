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

The same step name is the same size for gap and padding.

| Token | px | Use for |
| --- | --- | --- |
| `pad-none` / `gap-none` | 0 | Flush padding, or intentionally collapsed space |
| `pad-v-2xs` / `pad-h-2xs` / `gap-2xs` | 4 | Smallest padding or sibling gap. Chips, icon clusters, compact controls |
| `pad-v-xs` / `pad-h-xs` / `gap-xs` | 8 | Compact padding. Default control v pad. Tight sibling gap, icon-to-label |
| `pad-v-sm` / `pad-h-sm` / `gap-sm` | 12 | Standard padding. Default control h pad. Lists, tabs, cards |
| `pad-v-md` / `pad-h-md` / `gap-md` | 16 | Roomy padding and wide layout gap |
| `pad-v-lg` / `pad-h-lg` / `gap-lg` | 20 | Between roomy spacing and section separation |
| `pad-v-xl` / `pad-h-xl` / `gap-xl` | 24 | Large padding, or separating blocks and sections |
| `pad-v-2xl` / `pad-h-2xl` / `gap-2xl` | 32 | Extra-large padding and the largest layout separation |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/light.json` and
`packages/assets/tokens/src/theme/stable/dark.json`.

### Border

Border tokens set stroke width. Pair them with a semantic color token that
communicates the border's state and prominence.

| Token | px | Use for |
| --- | --- | --- |
| `none` | 0 | A side or state with no border, such as an accordion, table, or grabber |
| `default` | 1 | Standard control and container outlines |
| `emphasis` | 2 | Selected states or container edges that need stronger definition |

Authoritative sources:
`packages/assets/tokens/src/theme/stable/light.json` and
`packages/assets/tokens/src/theme/stable/dark.json`.

### Radius

Choose radius by the intended silhouette and the scale of the bounded element.
Compound controls may mix radius roles so joined edges remain flat while outer
edges retain the expected shape.

Radius uses the same t-shirt words, starting one step below spacing.
`radius.2xs` is 2px, while spacing `2xs` is 4px.

| Token | px | Use for |
| --- | --- | --- |
| `none` | 0 | Flat edges and joined edges in compound controls |
| `2xs` | 2 | Barely softened corners |
| `xs` | 4 | Compact controls, chips, icons, and partial tab corners |
| `sm` | 8 | Default surfaces, inputs, dialogs, list items, and toasts |
| `md` | 12 | More prominent rounding on bounded controls |
| `lg` | 16 | Larger corner radius above `md`, short of a pill |
| `full` | 50% | Circles such as avatars, radios, slider thumbs, and presence indicators |

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
| `size.md.36` | Table headers, sidenav tabs, and avatar placeholders |

#### Large

| Token | Use for |
| --- | --- |
| `size.lg.40` | Large controls and toolbar or navigation rows |
| `size.lg.48` | Avatars, spinners, toggle tracks, and table body rows |
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
- **Common misuse:** using a fixed radius step, such as `radius.lg`, to make a
  square element circular.
  **Why it's wrong:** a fixed radius does not guarantee a circle at every
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
