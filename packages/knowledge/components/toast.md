# Toast (`mdc-toast`)

## Development

### Summary

`mdc-toast` is a lightweight, non-blocking alert used to inform users about application processes.
It supports success, warning, error, and custom messages, and is designed to be controlled externally.

**Note**: When using `slot="toast-body-normal"` and `slot="toast-body-detailed"`, it's strongly recommended to wrap the content with ``.
If not used, ensure your custom content is styled appropriately to match the design and alignment expectations of the toast component.

### Source

- Component folder: [`packages/components/src/components/toast/`](../../components/src/components/toast/)
- Built metadata references: `components/toast/toast.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/toast';
```

```html
<mdc-toast></mdc-toast>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Toast } from '@momentum-design/components/react';
```

```jsx
<Toast />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toast--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `aria-label` — Defines aria-label attribute when header is not used

## Design

_To be filled in._
