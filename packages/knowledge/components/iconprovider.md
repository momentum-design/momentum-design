# IconProvider (`mdc-iconprovider`)

## Development

### Summary

IconProvider component, which allows to be consumed from sub components
(see `providerUtils.consume` for how to consume)

Attribute `iconSet` can be set to either `momentum-icons` or `custom-icons`.
If `momentum-icons` is selected, the icons will be fetched from the
Momentum Design System icon set per a dynamic JS Import (no need to provide a URL).
This requires the consumer to have the `@momentum-design/icons` package installed and the
build tooling needs to support dynamic imports.

If `custom-icons` is selected, the icons will be fetched from the provided URL.
This requires the consumer to provide a URL from which the icons will be fetched and
the consumer needs to make sure to bundle the icons in the application.

If `cacheStrategy` is provided (only works with iconSet = `custom-icons`), the
IconProvider will cache the icons in the selected cache (either web-api-cache or in-memory-cache),
to avoid fetching the same icon multiple times over the network.
This is useful when the same icon is used multiple times in the application.
To consider:
- The `in-memory-cache` is not persisted and will be lost when the
IconProvider is removed from the DOM.
- The `web-api-cache` is persisted, but only works in https environments
(https://developer.mozilla.org/en-US/docs/Web/API/Cache).

### Source

- Component folder: [`packages/components/src/components/iconprovider/`](../../components/src/components/iconprovider/)
- Built metadata references: `components/iconprovider/iconprovider.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/iconprovider';
```

```html
<mdc-iconprovider></mdc-iconprovider>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { IconProvider } from '@momentum-design/components/react';
```

```jsx
<IconProvider />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-iconprovider--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Use the Storybook **Docs** and **Accessibility** addon on the Example story for roles, keyboard support, labeling, and color-contrast results.

## Design

_To be filled in._
