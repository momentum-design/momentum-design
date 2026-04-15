# AccordionButton (`mdc-accordionbutton`)

## Development

### Summary

An accordion button contains a header and body section with optional slots inside the heading which are focusable.

The header section contains:
- Prefix Icon
- Header Text

The body section contains:
- Default slot - User can place any content inside the body section.

The accordion button can be expanded or collapsed. The visibility of the body section can be controlled by `expanded` attribute. 

There are two types of variants based on that the border styling of the accordion gets reflected. 

There are two sizes of accordion, one is small and the other is large.
Small size has a padding of 1rem (16px) and large size has a padding of 1.5rem (24px) for the body section of accordion.

By default, the header text in the accordion heading is of H3 with an aria-level of '3'.
If this accordion is placed on any other level in the entire webpage, then do adjust the aria-level number based on that.

An accordion can be disabled, and when it's disabled, the header section will not be clickable.

If you do need any controls on your accordion heading, then it's advised to use `accordion` component.

If an accordion button is expanded by default, then the screen reader might loose focus when toggling the visibilty of the accordion button.

### Source

- Component folder: [`packages/components/src/components/accordionbutton/`](../../components/src/components/accordionbutton/)
- Built metadata references: `components/accordionbutton/accordionbutton.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/accordionbutton';
```

```html
<mdc-accordionbutton></mdc-accordionbutton>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { AccordionButton } from '@momentum-design/components/react';
```

```jsx
<AccordionButton />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordionbutton--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-level` — The aria level of the accordion component.

## Design

_To be filled in._
