# Input (`mdc-input`)

## Development

### Summary

mdc-input is a component that allows users to input text.
 It contains:
- label field - describe the input field.
- input field - contains the value
- help text or validation message - displayed below the input field.
- trailing button - it displays a clear the input field.
- prefix text - displayed before the input field.
- leading icon - displayed before the input field.
- clear-aria-label - aria label for the trailing button.
- all the attributes of the input field.

### Source

- Component folder: [`packages/components/src/components/input/`](../../components/src/components/input/)
- Built metadata references: `components/input/input.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/input';
```

```html
<mdc-input></mdc-input>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Input } from '@momentum-design/components/react';
```

```jsx
<Input />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-input--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-label` — Defines a string value that labels the current element. The Aria-Label attribute to be set for accessibility.

## Design

_To be filled in._
