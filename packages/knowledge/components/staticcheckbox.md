# StaticCheckbox (`mdc-staticcheckbox`)

## Development

### Summary

This is a decorative component that is styled to look as a checkbox.

It has 5 properties - checked, indeterminate, disabled, readonly and soft-disabled.

We are using the same styling that has been created for the `mdc-checkbox` component.

### Source

- Component folder: [`packages/components/src/components/staticcheckbox/`](../../components/src/components/staticcheckbox/)
- Built metadata references: `components/staticcheckbox/staticcheckbox.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/staticcheckbox';
```

```html
<mdc-staticcheckbox></mdc-staticcheckbox>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { StaticCheckbox } from '@momentum-design/components/react';
```

```jsx
<StaticCheckbox />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-staticcheckbox--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
