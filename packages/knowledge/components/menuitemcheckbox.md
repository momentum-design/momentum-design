# MenuItemCheckbox (`mdc-menuitemcheckbox`)

## Development

### Summary

A menuitemcheckbox component is a checkable menuitem.
There should be no focusable descendants inside this menuitemcheckbox component.

The `checked` attribute indicates whether the menuitemcheckbox is checked or not.

Menu item checkbox has `name` and `value` attribute that can be used to identify the menu item when it is selected.

The `indicator` attribute is used to differentiate between checkbox, checkmark, toggle and none.
By default, the `indicator` is set to checkbox.

The checkbox will always be positioned on the leading side of the menuitem label and
the toggle and checkmark will always be positioned on the trailing side.

The checkbox will have the possible states of `true` or `false`.
If the indicator is set to checkmark and if the `checked` attribute is set to `true`,
then the checkmark will be displayed. if not, then no indicator will be displayed.

The forth options for the `indicator` is none, which will not display any indicator at all.
It is intended to be used for customised menu items where the indicator is implemented differently.
For example, you can use a custom icon or a different visual element to indicate the state of the menu item.
Make sure the new indicator is accessible.

If you want only one item in a group to be checked, consider using menuitemradio component.

### Source

- Component folder: [`packages/components/src/components/menuitemcheckbox/`](../../components/src/components/menuitemcheckbox/)
- Built metadata references: `components/menuitemcheckbox/menuitemcheckbox.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/menuitemcheckbox';
```

```html
<mdc-menuitemcheckbox></mdc-menuitemcheckbox>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { MenuItemCheckbox } from '@momentum-design/components/react';
```

```jsx
<MenuItemCheckbox />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menuitemcheckbox--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `tabIndex` — This property specifies the tab order of the element.

## Design

_To be filled in._
