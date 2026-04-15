# Divider (`mdc-divider`)

## Development

### Summary

`mdc-divider` is a component that provides a line to separate and organize content.
It can also include a button or text positioned centrally, allowing users to interact with the layout.

**Divider Orientation:**
- **Horizontal**: A thin, horizontal line.
- **Vertical**: A thin, vertical line.

**Divider Variants:**
- **solid**: Solid line.
- **gradient**: Gradient Line.

**Divider Types:**
- The type of divider is inferred based on the kind of slot present.
 - **Primary**: A simple horizontal or vertical divider.
 - **Text**: A horizontal divider with a text label in the center.
 - **Grabber Button**: A horizontal or vertical divider with a styled button in the center.

**Accessibility:**
- When the slot is replaced by an `mdc-button`:
  - `aria-label` should be passed to the `mdc-button`.
  - `aria-expanded` should be passed to the `mdc-button`.

**Notes:**
- If the slot is replaced by an invalid tag name or contains multiple elements,
  the divider defaults to the **Primary** type.
- To override the styles of the divider, use the provided CSS custom properties.

### Source

- Component folder: [`packages/components/src/components/divider/`](../../components/src/components/divider/)
- Built metadata references: `components/divider/divider.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/divider';
```

```html
<mdc-divider></mdc-divider>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Divider } from '@momentum-design/components/react';
```

```jsx
<Divider />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-decorator-divider--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
