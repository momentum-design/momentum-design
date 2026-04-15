# Card (`mdc-card`)

## Development

### Summary

The card component allows users to organize information in a structured and tangible
format that is visually appealing. `mdc-card` is a static component that supports
the following features:
- Image
- Header
   - Icon
   - Title
   - Subtitle
- Body

The card can either be vertically or horizontally oriented. The vertical card has a min-width of 20rem and the horizontal card has a min-width of 40rem.

There are 2 variants for the card that represent the border styling - 'border' and 'ghost'.

To make this card interactive, use the following slots:
- `icon-button`: This slot supports action icon buttons in the header section (maximum of 3 buttons).
- `footer-link`: This slot is for passing `mdc-link` component within the footer section.
- `footer-button-primary`: This slot is for passing primary variant of `mdc-button` component within the footer section.
- `footer-button-secondary`: This slot is for passing secondary variant of `mdc-button` component
within the footer section.

Interactive card additionally supports 'promotional' variant that represents the border styling - 'promotional'.

### Source

- Component folder: [`packages/components/src/components/card/`](../../components/src/components/card/)
- Built metadata references: `components/card/card.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/card';
```

```html
<mdc-card></mdc-card>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Card } from '@momentum-design/components/react';
```

```jsx
<Card />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-card--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
