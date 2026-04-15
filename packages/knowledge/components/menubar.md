# MenuBar (`mdc-menubar`)

## Development

### Summary

Menubar is a navigational menu component that provides a vertical fixed list of menu items,
with support for nested submenus and keyboard navigation. It serves as a container
for menu items and manages their interaction patterns, including:
- Keyboard navigation (Arrow keys, Home, End)
- Menu item activation (Enter/Space)
- Submenu toggling (Right/Left arrow keys)
- Focus management
- Integration with MenuPopover for nested menus

A menubar will contain a set of menu items and their associated popovers.
Each menu item can have a popover for nested menus.

The component automatically handles ARIA attributes and follows WAI-ARIA menu design patterns.
It works in conjunction with `mdc-menuitem` and `mdc-menupopover` to create accessible menu structures.

**Note:** A menubar contains three types of menu items, including menuitem, menuitemradio and menuitemcheckbox. These menu items may optionally be nested in one or more group containers. Groups or items may optionally by separated with separator elements.

`mdc-menubar` contains a group that wraps all its chilren passed within the default slot. This has been added to ensure the right accessibility behavior while using screen readers.

### Source

- Component folder: [`packages/components/src/components/menubar/`](../../components/src/components/menubar/)
- Built metadata references: `components/menubar/menubar.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/menubar';
```

```html
<mdc-menubar></mdc-menubar>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { MenuBar } from '@momentum-design/components/react';
```

```jsx
<MenuBar />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/internal-menubar--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
