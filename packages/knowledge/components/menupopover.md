# MenuPopover (`mdc-menupopover`)

## Development

### Summary

A popover menu component that displays a list of menu items in a floating container.
It's designed to work in conjunction with `mdc-menubar` and `mdc-menuitem` to create
accessible, nested menu structures with the following features:
- Appears adjacent to the triggering menu item
- Supports keyboard navigation (arrow keys, Home, End)
- Manages focus trapping when open
- Closes on Escape key or outside click
- Supports both mouse and keyboard interactions
- Automatically handles ARIA attributes for accessibility

The component extends `mdc-popover` and adds menu-specific behaviors and styling.
When nested within another `mdc-menupopover`, it automatically adjusts its behavior
to work as a submenu (right-aligned, shows on hover).

The orientation of the menu popover is always set to `vertical`.

Submenu opens when:
- Clicked on a menu item with a submenu
- Enter or Space key pressed on a menu item with a submenu

Menu closes completely (with all sub menus) when:
- A menu item is clicked that does not have a submenu
- Enter key pressed on a menu item (not a submenu trigger), menu item radio or menu item checkbox
- Click outside the menu popover (on the backdrop)

Close submenus when:
- Esc key pressed, only the current submenu closed
- Arrow Left key pressed, only the current submenu closed
- Open another submenu with Click, Enter or Space key,
  closes recursively all submenus until the selected item's submenu

Menu does not close when:
- Space key pressed on a menu item radio or menu item checkbox

### Source

- Component folder: [`packages/components/src/components/menupopover/`](../../components/src/components/menupopover/)
- Built metadata references: `components/menupopover/menupopover.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/menupopover';
```

```html
<mdc-menupopover></mdc-menupopover>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { MenuPopover } from '@momentum-design/components/react';
```

```jsx
<MenuPopover />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menupopover--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `role` — Role of the popover
- `aria-labelledby` — aria-labelledby for an interactive popover only, defaults to the trigger component id. Used in nested cases where the triggerComponent isn't the actual button.
- `aria-describedby` — aria-describedby of the popover.

## Design

_To be filled in._
