# MenuItemRadio (`mdc-menuitemradio`)

## Development

### Summary

A menuitemradio component is a checkable menuitem that is used in a menu.
A menuitemradio should be checked only one at a time. 

There should be no focusable descendants inside this menuitemradio component.

The `checked` menuitemradio attribute is used to indicate that the menuitemradio is checked or not.

Menu item radio has `name` and `value` attribute that can be used to identify the menu item when it is selected.

If you want more than one item in a group to be checked, consider using menuitemcheckbox component.

The `indicator` attribute is used to differentiate between radio, checkmark and none.
By default, the `indicator` is set to radio.

The checkbox will always be positioned on the leading side of the menuitem label and
the checkmark will always be positioned on the trailing side.

The radio will have the possible states of `true` or `false`.
If the indicator is set to checkmark and if the `checked` attribute is set to `true`,
then the checkmark will be displayed. if not, then no indicator will be displayed.

The third options for the `indicator` is none, which will not display any indicator at all.
It is intended to be used for customised menu items where the indicator is implemented differently.
For example, you can use a custom icon or a different visual element to indicate the state of the menu item.
Make sure the new indicator is accessible.

### Source

- Component folder: [`packages/components/src/components/menuitemradio/`](../../components/src/components/menuitemradio/)
- Built metadata references: `components/menuitemradio/menuitemradio.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/menuitemradio';
```

```html
<mdc-menuitemradio></mdc-menuitemradio>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { MenuItemRadio } from '@momentum-design/components/react';
```

```jsx
<MenuItemRadio />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menuitemradio--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `tabIndex` — This property specifies the tab order of the element.

## Design

_To be filled in._
