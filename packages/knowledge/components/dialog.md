# Dialog (`mdc-dialog`)

## Development

### Summary

Dialog component is a modal dialog that can be used to display information or prompt the user for input.
It can be used to create custom dialogs where content for the body and footer actions is provided by the consumer.
The dialog is available in 5 sizes: small, medium, large, xlarge and fullscreen. It may also receive custom styling/sizing.
The dialog interrupts the user and will block interaction with the rest of the application until it is closed.

The dialog can be controlled solely through the `visible` property, no trigger element is required.
If a `triggerId` is provided, the dialog will manage focus with that element, otherwise it will
remember the previously focused element before the dialog was opened.

The dialog is a controlled component, meaning it does not have its own state management for visibility.
Use the `visible` property to control the visibility of the dialog.
Use the `onClose` event to handle the close action of the dialog (fired when Close button is clicked
or Escape is pressed).

Dialog component have 2 variants: default and promotional.

**Accessibility notes for consuming (have to be explicitly set when you consume the component)**

- The dialog should have an aria-label or aria-labelledby attribute to provide a label for screen readers.
- Use aria-labelledby to reference the ID of the element that labels the dialog when there is no visible title.

**Note: Programmatic show/hide requires the ? prefix on the visible attribute**
- Use `?visible=true/false` as an attribute instead of `visible=true/false`
- Reference docs for more info: https://lit.dev/docs/templates/expressions/#boolean-attribute-expressions

### Source

- Component folder: [`packages/components/src/components/dialog/`](../../components/src/components/dialog/)
- Built metadata references: `components/dialog/dialog.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/dialog';
```

```html
<mdc-dialog></mdc-dialog>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Dialog } from '@momentum-design/components/react';
```

```jsx
<Dialog />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-dialog--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `aria-label` — Defines a string value for the aria-label attribute when header is not used
- `aria-labelledby` — Defines a string value for the aria-labelledby attribute that refers to the element labeling the dialog for accessibility
- `aria-describedby` — Defines a string value for the aria-describedby attribute that refers to the element describing the dialog for accessibility
- `aria-description` — Defines a string value for the aria-description attribute that refers to the element describing the dialog for accessibility
- `role` — Role of the dialog

## Design

_To be filled in._
