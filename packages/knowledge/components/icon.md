# Icon (`mdc-icon`)

## Development

### Summary

Icon component that dynamically displays SVG icons based on a valid name.

This component must be mounted within an `IconProvider` component.

The `IconProvider` defines the source URL from which icons are consumed.
The `Icon` component accepts a `name` attribute, which corresponds to
the file name of the icon to be loaded from the specified URL.

Once fetched, the icon will be rendered. If the fetching process is unsuccessful,
no icon will be displayed.

The `size` attribute allows for dynamic sizing of the icon based on the provided
`length-unit` attribute. This unit can either come from the `IconProvider`
or can be overridden for each individual icon. For example:
if `size = 1` and `length-unit = 'em'`, the dimensions of the icon will be
`width: 1em; height: 1em`.

Regarding accessibility, there are three types of icons: decorative, informative and informative standalone.

### Decorative Icons
- Decorative icons do not convey any essential information to the content of a page.
- They should be hidden from screen readers (SR) to prevent confusion for users.
- For decorative icons, an `aria-label` is not required, and the `role` will be set to null.

### Informative Icons
- Informative icons convey important information that is not adequately represented
  by surrounding text or components.
- They provide valuable context and must be announced by assistive technologies.
- For informative icons, an `aria-label` is required, and the `role` will be set to "img" automatically.
- If an `aria-label` is provided, the role will be set to 'img'; if it is absent,
  the role will be unset.

### Informative Standalone Icons
- If an icon is informative (as mentioned above) and does not belong to a button (=standalone), it must
have a Tooltip that describes what it means.
- For informative standalone icons, an `aria-label` & `tabindex="0"` is required,
and the `role` will be set to "img" automatically.
- **Only use this when a Icon is standalone and is not part of a button or other interactive elements.**

### Source

- Component folder: [`packages/components/src/components/icon/`](../../components/src/components/icon/)
- Built metadata references: `components/icon/icon.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/icon';
```

```html
<mdc-icon></mdc-icon>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Icon } from '@momentum-design/components/react';
```

```jsx
<Icon />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-icon--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `aria-label` — Aria-label attribute to be set for accessibility
- `aria-labelledby` — Aria-labelledby attribute to be set for accessibility

## Design

_To be filled in._
