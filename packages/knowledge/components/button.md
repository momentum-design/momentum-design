# Button (`mdc-button`)

## Development

### Summary

`mdc-button` is a component that can be configured in various ways to suit different use cases.

Button Variants:
- **Primary**: Solid background color.
- **Secondary**: Transparent background with a solid border.
- **Tertiary**: No background or border, appears as plain text but retains all button functionalities.

Button Colors:
- **Positive**: Green color.
- **Negative**: Red color.
- **Accent**: Blue color.
- **Promotional**: Purple color.
- **Default**: White color.

Button Sizes (in REM units):
- **Pill button**: 40, 32, 28, 24.
- **Icon button**: 64, 52, 40, 32, 28, 24.
- **Tertiary icon button**: 20.

Button Types:
- **Pill button**: A button that contains text value. Commonly used for call to action, tags, or filters.
- **Pill button with icons**: A button containing an icon either on the left or right side of the button.
- **Icon button**: A button represented by just an icon without any text.
The type of button is inferred based on the presence of slot and/or prefix and postfix icons/slots.

### Source

- Component folder: [`packages/components/src/components/button/`](../../components/src/components/button/)
- Built metadata references: `components/button/button.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/button';
```

```html
<mdc-button></mdc-button>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Button } from '@momentum-design/components/react';
```

```jsx
<Button />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-button--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `role` — This property defines the ARIA role for the element. By default, it is set to 'button'. Consumers should override this role when: - The element is being used in a context where a different role is more appropriate.
- `tabIndex` — This property specifies the tab order of the element.
- `ariaStateKey` — This property defines the ARIA state key, which will be toggled when the Button is set to `active`. The default value is 'aria-pressed', which is commonly used for toggle buttons.

## Design

_To be filled in._
