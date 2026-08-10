---
title: Icons
summary: Guidance for Momentum's Custom Icon Library — icon types, naming, weights, when to use icons versus other assets, and how to consume @momentum-design/icons.
tier: 2
---

# Icons

Guidance for **product designers and developers** working with the Momentum icon library (`@momentum-design/icons`). This article explains what the library contains, how icons are named and weighted, and when an icon is the right asset choice.

## What the icon library is

`@momentum-design/icons` is a custom icon library designed and used for the Momentum Design System. The package ships optimized SVGs and converts them to other generated outputs (TypeScript modules, font files, and platform-specific formats).

The icons in this library are to supplement UI designs when communicating ideas or actions.

## Icons versus other Momentum assets

Momentum provides several different types of assets:

| Asset type | Package | Use for |
| --- | --- | --- |
| **Icons** | `@momentum-design/icons` | UI controls, status, navigation, compact affordances that inherit or carry intentional color |
| **Brand visuals** | `@momentum-design/brand-visuals` | Product photos as well as company/partner logos and wordmarks — see [`mdc-brandvisual`](../../../components/src/components/brandvisual/knowledge-base/brandvisual.component.md) |
| **Illustrations** | `@momentum-design/illustrations` | Larger narrative or empty-state artwork — see [`mdc-illustration`](../../../components/src/components/illustration/knowledge-base/illustration.component.md) |

## Icon categories

### Core icons (`src/core/`)

Our default icons. These are monochrome glyphs intended to inherit color via the application of text color tokens.

### Colored icons (`src/colored/`)

These are outlier icons, used to support legacy features or outlying snowflakes. Color tokens cannot be applied to this set of icons. **Please note: all these icons will eventually be deprecated.**

## Naming

Every icon is referenced by a **kebab-case name** that includes its weight suffix. The `name` passed to `mdc-icon` (or imported from the package) is the filename without the `.svg` extension.

Examples:

- `check-regular`
- `check-bold`
- `warning-filled`
- `color-prompts-ai-bold`

### File naming rules

- Source filenames use **kebab-case**; underscores in designer exports are converted to hyphens at build time.
- The **concept** comes first, then the **weight**: `{concept}-{weight}.svg`.
- Colored icons often prefix the concept with `color-` (for example `color-meeting-summary-regular`).

To find a valid name, browse `src/core/` and `src/colored/`, or use the generated `IconNames` type in `@momentum-design/icons/dist/types/types` for autocomplete in TypeScript projects.

## Usage

### Color

Generally, icons should follow the `--mds-text-primary-normal` color token. However, other text tokens may also be applied to icons to add differening colors. Adding color to the set should be carefully considered and very intentional. Use of color should be used to communicate further information to the user.

**Secondary; gray**
Using `--mds-text-secondary-normal` This is a less apparent color. Use this when you want an icon to be legible, but lower in visual hierarchy.

**Disabled; gray**
Using `--mds-text-primary-disabled` This is used when an element is disabled.

**Success; green**
Using `--mds-text-success-normal` indicates that something within the application has succeeded.

**Warning; yellow**
Using `--mds-text-warning-normal` indicates that there is a potential issue and the user should be informed.

**Error; red**
Using `--mds-text-error-normal` indicates that an error has occured.

**Accent; blue**
Using `--mds-text-accent-normal` This is a way to highlight a link, an interactive element, or to bring emphasis to an element. This can also be used to indicate an "on" status.

### Sizing

Icons are typically paired with typography. When that's the case, the icon's size should reflect the type size that it's being paired with.

### Weights

Our Iconography System is based on three different weights plus a filled variant. **Primarily, we use the bold weight in our UIs, but it is dependent on icon size.**.

Icons are designed on a 32px by 32px grid. When constructing icons at the standard base size (32px), we delineate three weights: light at 1px stroke width, Regular at 1.5px stroke width, and Bold at 2px stroke width. All the icons are outlined when published and will scale naturally using SVG icon format.

| Suffix | When to use |
| --- | --- |
| `-light` | Used mainly for larger icons (>32px) and is 1px in stroke weight |
| `-regular` | Used mainly for medium to large icons (>24px) and is 1.5px in stroke weight |
| `-bold` | Default UI weight; used mainly for smaller icons (<24px) and is 2px in stroke weight |
| `-filled` | Active, selected, or “on” states; components swap from `-bold` to `-filled` when active (for example tabs and buttons with an `active` state) |

Not every concept ships with every weight. Search the library or check `dist/manifest.json` after a local build rather than assuming a variant exists.

### With Momentum components (recommended)

Wrap the app (or subtree) in `mdc-iconprovider` with `icon-set="momentum-icons"`, then render `mdc-icon` with a valid `name`. The component dynamically imports the matching module from `@momentum-design/icons/dist/ts/`.

See the component topics linked above for provider configuration, sizing, accessibility modes (decorative vs informative), and error handling.

### Consuming icons

Consumption depends on output format. See [`packages/assets/icons/README.md`](../README.md) and [`CONSUMPTION.md`](../../../../CONSUMPTION.md) for SVG, font, and non-NPM options. Source SVGs live under `packages/assets/icons/src/`. The build pipeline (`md-builder`, configured in `config/momentum.json`) optimizes assets and publishes them to `dist/` for consumption.

When importing SVGs or font files directly, keep naming aligned with the published manifest so upgrades stay compatible.

### Dos and Don'ts

#### Dos

- Do use icons to establish importance. This is especially the case for the forefront of the application.
- Do double check you are using the correct weight for your icon. Refer to the weights section of this article for more.
- Do check our extensive library to see if we have exisiting icons that cover your need. If not, discuss with the Momentum Team.
- Do raise questions if you find any issues in our current library, whether it is the naming or the use of any icon we currently have.

#### Don'ts

- Don't use an icon simply "Because". Icon use should be intentional. Really think about the value of using the icon for your specific instance.
- Don't use an icon if a section of the UI is busy, consider whether using an icon adds to how busy this area looks, and if it really needed.
- Don't use an icon when a simple text label will do. Be sparing with icon usage.
- Don't reuse icons for different purposes without checking if it’s okay first, reach out to Momentum first.

## Design and content considerations

- **One icon, one meaning** — reuse established glyphs before introducing a custom metaphor; users learn the library once across products.
- **Match weight to hierarchy** — prefer `-regular` for default UI; reserve `-bold` for emphasis and `-filled` for selected/active states.
- **Accessible names live on the control, not the glyph** — for icon-only buttons, set `aria-label` on the button; leave decorative icons unlabeled. Follow [`mdc-icon` accessibility guidance](../../../components/src/components/icon/knowledge-base/icon.component.md) and general in-product copy standards in [`content-guidelines.md`](../../../../knowledge-base/content-guidelines.md).
- **Do not use emojis when an icon already carries the meaning** — see the content guidelines on emojis versus other visual elements.

## Contributing and change control

Icon **source artwork** is maintained by the Momentum Design design team. Do not modify files under `src/` directly in product contributions.

- To request a new icon or weight, submit an [issue within momentum-design](https://github.com/momentum-design/momentum-design/issues) or reach out to the Momentum Design Team directly.
- Build configuration under `config/` may be extended for additional outputs; new output types outside supported flows belong in `@momentum-design/builder`.
- When a shipped icon is missing or incorrect, raise it with the design system team rather than adding a one-off SVG in product code.
