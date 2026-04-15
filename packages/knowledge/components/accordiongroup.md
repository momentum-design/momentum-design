# AccordionGroup (`mdc-accordiongroup`)

## Development

### Summary

An accordion group is a vertically stacked set of interactive headings that each contain a header and body content.
Each heading of the accordion acts as a control that enable users to expand or hide their associated body sections of content.
Accordions are commonly used to reduce the need to scroll when presenting multiple sections of content on a single page.

- Default Slot: The accordion group component only accepts, `accordion` and `accordionbutton` components as the children, rest are ignored.

There are three types of variants:
- Stacked - Each accordion will have a gap of 1.5rem (24px).
- Borderless - Each accordion will not have any border and the group will also not have any border.
- Contained - Each accordion will have no gap in between them and the border of the entire accordiongroup will be continuous.

There are two types of sizes:
- Small: Small size has a padding of 1rem (16px) for both heading and body sections.
- Large: Large size has a padding of 1.5rem (24px) for both heading and body sections.

The variant and size will be applied to all accordions inside this accordion group.
To show/expand more than one accordion at any given time, then set `allow-multiple` to `true`. By default, it's `false`.

If you don't need any controls on your accordion heading, then it's advised to use `accordionbutton` component.

If the first accordion of the accordion group is expanded by default, then the screen reader might loose focus when toggling the visibilty of the first accordion.

### Source

- Component folder: [`packages/components/src/components/accordiongroup/`](../../components/src/components/accordiongroup/)
- Built metadata references: `components/accordiongroup/accordiongroup.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/accordiongroup';
```

```html
<mdc-accordiongroup></mdc-accordiongroup>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { AccordionGroup } from '@momentum-design/components/react';
```

```jsx
<AccordionGroup />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-accordion-accordiongroup--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
