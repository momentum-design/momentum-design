# Skeleton (`mdc-skeleton`)

## Development

### Summary

`mdc-skeleton` is a component that shows a grey placeholder area.
It provides visual feedback to users that content is being loaded.

**Skeleton Variants:**
- **rectangular**: Default variant with 0.25rem border radius
- **rounded**: Has 0.5rem border radius
- **circular**: Has 50% border radius for circular shapes
- **button**: Optimized for button placeholders with 1.25rem border radius

**Sizing Behavior:**
1. If wrapping content, takes dimensions of wrapped content
2. Otherwise grows to fill parent container

### Source

- Component folder: [`packages/components/src/components/skeleton/`](../../components/src/components/skeleton/)
- Built metadata references: `components/skeleton/skeleton.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/skeleton';
```

```html
<mdc-skeleton></mdc-skeleton>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Skeleton } from '@momentum-design/components/react';
```

```jsx
<Skeleton />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-skeleton--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
