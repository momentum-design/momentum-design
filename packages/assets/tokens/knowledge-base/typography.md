---
title: Typography
summary: Typography token scale, type styles, and usage guidance for products built with @momentum-design/tokens — body, heading, and headline styles.
tier: 2
websitePath: foundations/typography
---

# Typography

These are the guidelines for **designers and developers** using the Momentum typography tokens from `@momentum-design/tokens`. These tokens define the type scale, weights, line heights, and composed type styles used across Momentum products.

For in-product copy standards (voice, tone, punctuation, capitalization), see [Content guidelines](../../../../knowledge-base/content-guidelines.md). For font file delivery and `@font-face` setup, see [`@momentum-design/fonts`](../../fonts/README.md).

## Overview

Momentum typography is built on a **16px base** (`font.size.base` / `font.lineheight.base`). Primitive tokens define size, weight, line height, and family; **composed type styles** (`font.apps.*`) bundle those primitives into ready-to-use styles for body, heading, and headline text.

In web apps, composed styles surface as CSS custom properties prefixed with `--mds-font-apps-` (for example `--mds-font-apps-body-midsize-regular-font-size`). In the component library, the same styles map to `mdc-text` `type` values (for example `body-midsize-regular`).

## Type Properties

### Font Family: Inter

CiscoSansTT was created in 2010 and widely adopted for all internal and external communications, as well as by many tools and apps. The font files have remained largely untouched, except for fixes to critical bugs and language file updates. Audits performed in 2023 highlighted the many issues with the current font files, such as alignment and rendering issues, file sizes, missing glyphs and poorly executed language support.

Because of the issues with utilizing Cisco Sans in software products, Inter was evaluated and adopted as Momentum's font. Inter is a font family carefully crafted and designed for computer screens in 2016 by Rasmus Andersson and available through Common Licence.

Inter features a tall x-height to aid in readability of mixed-case and lower-case text. Inter is offered as both traditional constant font files (one per style, e.g. Bold Italic, Medium, etc.) as well as a Variable Font.

The font files include "hinted" versions that have additional data in them for assisting ClearType, the text rasterizer used by Microsoft Windows.

The primary stack is:

```text
Momentum, Inter, Arial, Helvetica Neue, Helvetica, sans-serif
```

`Momentum` is the Momentum-branded variant; `Inter` is the fallback web font distributed via `@momentum-design/fonts`. Always load the fonts package in web projects — tokens define the stack but do not embed font files.

### Scale

A typographic scale is an ordered set of character sizes linked to each other by a common ratio. Choosing font sizes from a type scale creates consistency, harmony, and contrast in a text layout.
The Momentum Core Type Scale uses the Major Third scale multiplier (1.25) with a base of 16px, rounded to the base grid value of 4.

### Size

The type scale can be applied to a pre-defined range of sizes. Within each group of type styles, there can be four sizes:

- Small
- Midsize
- Large
- Extra large

### Role

Momentum groups type styles by role. These roles describe the purpose, or how the style should be used. The Momentum type scale organizes styles into three roles:

- Body | Body styles are used for longer passages of text in your app. Use typefaces intended for body styles, which are readable at smaller sizes and can be comfortably read in longer passages.
- Heading | Headings are smaller than headline styles, and should be used for medium-emphasis text that remains relatively short. For example, consider using heading styles to divide secondary passages of text or secondary regions of content.
- Headline | Headlines are best-suited for short, high-emphasis text on smaller screens. These styles can be good for marking primary passages of text or important regions of content.

#### Body

Body styles carry most UI copy: labels, descriptions, list items, helper text, and inline content.

| Style | Size | Line height | Typical use |
| --- | --- | --- | --- |
| `body-small-*` | 12px | 16px | Captions, metadata, compact UI |
| `body-midsize-*` | 14px | 20px | Default UI text (most common) |
| `body-large-*` | 16px | 24px | Emphasized body copy, spacious layouts |

Each body size supports **regular** (400), **medium** (500), and **bold** (700). Regular and medium also have **underline** variants for inline links and emphasized text where underline is part of the type style itself.

**Default:** `body-midsize-medium` is the system default for general UI text.

#### Heading

Heading styles structure content within a page or panel. They are visually distinct from body text but sit below headline scale.

| Style | Size | Line height | Typical use |
| --- | --- | --- | --- |
| `heading-small-*` | 20px | 28px | Section labels, card titles |
| `heading-midsize-*` | 24px | 32px | Page sections, dialog titles |
| `heading-large-*` | 32px | 40px | Primary page headings |
| `heading-xlarge-*` | 40px | 52px | Hero sections, prominent titles |

Each heading size supports **regular**, **medium**, and **bold**. Heading styles do not include underline variants — use a link component or body underline styles for interactive text.

#### Headline

Headline styles are the largest type in the system, reserved for high-impact display text.

| Style | Size | Line height | Weight | Typical use |
| --- | --- | --- | --- | --- |
| `headline-small-light` | 52px | 64px | 300 | Display text, marketing headers |
| `headline-small-regular` | 52px | 64px | 400 | Display text with stronger presence |

Use headline styles sparingly. Most product UI should stay within body and heading scales.

### Weight

Font weight is an important typographic variable that can add emphasis and differentiate content hierarchy. Font weight and size pairings must be carefully balanced. A bold weight will always have more emphasis than a lighter weight font of the same size. However, a lighter weight font can rank hierarchically higher than a bold font if the lighter weight type size is significantly larger than the bold one.

**Light** - Used only for large text, such as headlines or headers on large screens.
**Regular** - Used mainly for body text.
**Medium** - To add emphasis, used for headings and titles.
**Bold** - Used to add emphasis in headings. Also used to indicate an unread state.

## Token structure

Typography tokens are defined in [`src/core/typography.json`](../src/core/typography.json).

| Token group | Purpose | Example |
| --- | --- | --- |
| `font.family.*` | Font stack | `font.family.primary` |
| `font.size.*` | Size scale | `font.size.body.midsize` → 14px |
| `font.lineheight.*` | Line-height scale | `font.lineheight.body.midsize` → 20px |
| `font.weight.*` | Weight scale | `light` 300, `regular` 400, `medium` 500, `bold` 700 |
| `font.text-transform.*` | Text casing | `none`, `uppercase`, `lowercase`, `titlecase` |
| `font.decoration.*` | Text decoration | `none`, `underline` |

## Best practices

**Make it scannable**
Keep related text aligned and closer together to create visual groupings.

**Create visual hierarchy**
When designing with type, we can use a combination of font size, weight, color, and space to ensure a strong hierarchy and scannability of a page. By understanding the fundamentals, you’ll be able to better apply type to the UI.

**Color**
Color can be used to add contrast and reinforce the hierarchy between text. For example, one way to distinguish between a title and a subtitle is to apply a primary color to the title, and a secondary color to the subtitle. Using a lighter color for secondary information provides contrast between the text and helps reinforce hierarchy even when the text is the same size and weight.

**Spacing**
Grouping related information together can help users navigate the UI. One way to do this is to use space to create relationships between elements on a page. Ambiguous spacing can cause confusion and make it hard to understand the content.

### Do

- Use **body-midsize-** styles as the default for labels, descriptions, and most interactive UI text.
- Use **heading-** styles to establish visual hierarchy within a view.
- Use **headline-** styles only for display/marketing contexts where large type is intentional.
- Use **medium** weight to draw moderate attention; use **bold** for strong emphasis or primary labels.
- Use **underline** body variants only when underline is part of the defined type style (not as a substitute for a link component).
- Match icon sizes to the surrounding type scale.

### Do not

- Do not hard-code `font-size`, `font-weight`, or `line-height` values — use tokens or `mdc-text`.
- Do not use headline styles for standard product UI chrome (navigation, settings, forms).
- Do not use **bold** as the only way to indicate interactivity — pair with color, underline, or a link/button component.
- Do not assume the HTML tag sets the visual size — it does not.
- Do not create one-off type styles outside the token scale ("snowflake" typography). See [Snowflake components](../../../components/knowledge-base/snowflake-components.md).

## Consumption

### Web (CSS custom properties)

1. Load font files from `@momentum-design/fonts`.
2. Import the typography token stylesheet:

   ```javascript
   import '@momentum-design/tokens/dist/css/typography/complete.css';
   ```

3. Apply the root scope class:

   ```html
   <body class="mds-typography">
   ```

4. Reference token variables in CSS:

   ```css
   .my-label {
     font-size: var(--mds-font-apps-body-midsize-medium-font-size);
     font-weight: var(--mds-font-apps-body-midsize-medium-font-weight);
     line-height: var(--mds-font-apps-body-midsize-medium-line-height);
   }
   ```

Set `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale` on the root/body to match Figma rendering.

### Momentum components

Prefer `mdc-text` with a `type` value rather than applying token variables directly. Components such as `mdc-link`, `mdc-tooltip`, and `mdc-toast` already consume typography tokens internally.

Wrap content in `mdc-themeprovider` so font-family tokens resolve correctly.
