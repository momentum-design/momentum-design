# ListItem (`mdc-listitem`)

## Development

### Summary

mdc-listitem component is used to display a label with different types of controls.
There can be three types of controls, a radio button, a checkbox on the
leading side and a toggle on the trailing side.
The list item can contain an avatar on the leading side and a badge on the trailing side.
Additionally, the list item can contain a side header and a subline text.

The leading and trailing slots can be used to display controls and text. 

Based on the leading/trailing slot, the position of the controls and text can be adjusted. 

Please use mdc-list as a parent element even when there is only listitem for a11y purpose.

**Note**: If a listitem contains a long text, it is recommended to create a tooltip for the listitem that displays the full text on hover.
Consumers need to add a unique ID to this listitem and use that ID in the tooltip's `triggerID` attribute. We are not creating the tooltip automatically, consumers need to add `` element manually and associate it with the listitem using the `triggerID` attribute.

### Source

- Component folder: [`packages/components/src/components/listitem/`](../../components/src/components/listitem/)
- Built metadata references: `components/listitem/listitem.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/listitem';
```

```html
<mdc-listitem></mdc-listitem>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { ListItem } from '@momentum-design/components/react';
```

```jsx
<ListItem />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-listitem--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `tabIndex` — This property specifies the tab order of the element.

## Design

_To be filled in._
