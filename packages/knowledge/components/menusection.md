# MenuSection (`mdc-menusection`)

## Development

### Summary

`mdc-menusection` is a container element used to group a set of menu items.

This component supports a mix of `menuitem`, `menuitemcheckbox`, and `menuitemradio` components.

- If multiple `menuitemradio` components are slotted into the section, the group enforces a single-selection rule:
  only one radio item can be selected at a time.
- If `menuitemcheckbox` components are included, their checked state can be toggled independently.

### Source

- Component folder: [`packages/components/src/components/menusection/`](../../components/src/components/menusection/)
- Built metadata references: `components/menusection/menusection.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/menusection';
```

```html
<mdc-menusection></mdc-menusection>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { MenuSection } from '@momentum-design/components/react';
```

```jsx
<MenuSection />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-menupopover-menusection--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `aria-label` — The aria-label for the section. This is used for accessibility purposes to describe the section. If not provided, it defaults to the `headerText`.

## Design

_To be filled in._
