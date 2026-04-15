# SideNavigation (`mdc-sidenavigation`)

## Development

### Summary

The `mdc-sidenavigation` component provides a vertically stacked navigation experience,
typically used in layouts with persistent or collapsible sidebars.

## Features:
- Supports four layout variants: `fixed-collapsed`, `fixed-expanded`, `flexible`, and `hidden`
- Toggleable expand/collapse behavior
- Displays brand logo and customer name
- Serves as a context provider for descendant components - `mdc-menubar` and `mdc-navmenuitem`

### Usage:
In a sidenavigation, navmenuitems can be used in the following ways:

1. **Simple navmenuitem** – No submenu or interaction beyond selection.

2. **NavMenuItem with submenu**:
   - Provide an `id` on the `mdc-navmenuitem`
   - Set the `triggerId` on the corresponding `mdc-menupopover` to match the navmenuitem's `id`
   - Set `parent-nav-tooltip-text` with appropriate text that will display when a child menu item
     inside the nested menupopover is active, conveying which submenu item is currently selected

3. **Actionable navmenuitem (no submenu)**:
   - Performs an action such as navigation or alert trigger
   - Set `disable-aria-current="true"` to maintain visual active state without navigation behavior

### Recommendations:
- Use `mdc-text` for section headers
- Use `mdc-divider` with the attribute `variant="gradient"` for section dividers
- For the brand logo, use an informative icon. Refer to `Momentum Informative Icons`

#### Accessibility Notes:
- Always provide meaningful `aria-label` attributes for both `mdc-navmenuitem` and `mdc-menubar`
to ensure screen reader support
- Set `grabber-btn-aria-label` to provide accessible labels for the expand/collapse grabber button

### Source

- Component folder: [`packages/components/src/components/sidenavigation/`](../../components/src/components/sidenavigation/)
- Built metadata references: `components/sidenavigation/sidenavigation.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/sidenavigation';
```

```html
<mdc-sidenavigation></mdc-sidenavigation>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { SideNavigation } from '@momentum-design/components/react';
```

```jsx
<SideNavigation />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-sidenavigation-sidenavigation--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
