# FormfieldGroup (`mdc-formfieldgroup`)

## Development

### Summary

`mdc-formfieldgroup` component, groups the form field components together.
All passed in children will have a gap of 12px (0.75rem) each applied.

This component is specifically for creating a `checkbox` group and a `toggle` group component.
For the radiogroup use the RadioGroup component instead.

The header text and description text are displayed above the items with accessible labels.

The consumer has to provide atleast the header-text or the aria-label,
like one of them has to be passed in always, otherwise its not accessible.

The role will be set to `group`.
The aria-label will be set with the data-aria-label property.
The aria-labelledby will be set with the header id which contains the header text information.
The aria-describedby will be set with the description id which contains the description text information.

### Source

- Component folder: [`packages/components/src/components/formfieldgroup/`](../../components/src/components/formfieldgroup/)
- Built metadata references: `components/formfieldgroup/formfieldgroup.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/formfieldgroup';
```

```html
<mdc-formfieldgroup></mdc-formfieldgroup>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { FormfieldGroup } from '@momentum-design/components/react';
```

```jsx
<FormfieldGroup />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-formfieldgroup--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-label` — Defines a string value that labels the current element. The Aria-Label attribute to be set for accessibility.

## Design

_To be filled in._
