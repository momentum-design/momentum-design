# Option (`mdc-option`)

## Development

### Summary

Option component, which is used within Selectlistbox within Select component.

The label and secondary label of the option can be set using the `label` and `secondaryLabel` properties respectively.
The `label` is the primary text displayed in the option, while the `secondaryLabel` is the secondary text displayed below the primary label.

The `selected` property is used to indicate whether the option is selected or not.
When the `selected` property is set to true, a checkmark icon will be displayed
on the right side of the option to indicate that it is selected.

The `prefixIcon` property can be used to display an icon on the left side of the option label.

**Note**: If an option contains a long text, it is recommended to create a tooltip for the option that displays the full text on hover.
Consumers need to add a unique ID to this option and use that ID in the tooltip's `triggerID` attribute. We are not creating the tooltip automatically, consumers need to add `` element manually and associate it with the option using the `triggerID` attribute.

### Source

- Component folder: [`packages/components/src/components/option/`](../../components/src/components/option/)
- Built metadata references: `components/option/option.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/option';
```

```html
<mdc-option></mdc-option>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Option } from '@momentum-design/components/react';
```

```jsx
<Option />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-select-option--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `aria-label` — Any additional description can be provided here for screen readers.
- `tabIndex` — This property specifies the tab order of the element.

## Design

_To be filled in._
