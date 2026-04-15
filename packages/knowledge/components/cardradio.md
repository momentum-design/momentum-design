# CardRadio (`mdc-cardradio`)

## Development

### Summary

cardradio component extends `mdc-card` and supports radio selection interaction addtionally.

While using this component within a form or group of cards, make sure cards are in a role = "radio-group".
This card would have events for selected and unselected (similar to radio)

**Note**: This is a single selection card i.e. interacting anywhere on the card would toggle the checked state.
Make sure to pass only non-interactable elements within the slots.

Make sure to pass the `card-title` mandatorily for this card.

### Source

- Component folder: [`packages/components/src/components/cardradio/`](../../components/src/components/cardradio/)
- Built metadata references: `components/cardradio/cardradio.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/cardradio';
```

```html
<mdc-cardradio></mdc-cardradio>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { CardRadio } from '@momentum-design/components/react';
```

```jsx
<CardRadio />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-card-cardradio--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `tabIndex` — This property specifies the tab order of the element.

## Design

_To be filled in._
