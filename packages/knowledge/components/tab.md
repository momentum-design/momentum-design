# Tab (`mdc-tab`)

## Development

### Summary

`mdc-tab` is Tab component to be used within the Tabgroup.

Passing in the attribute `text` to the tab component is changing the text displayed in the tab.

Pass attribute `tabid` when using inside of `tablist` component.

The `slot="badge"` can be used to add a badge to the tab.

The `slot="chip"` can be used to add a chip to the tab.

For `icon`, the `mdc-icon` component is used to render the icon.

Note: Icons can be used in conjunction with badges or chips.
Badges and chips should not be used at the same time.

### Source

- Component folder: [`packages/components/src/components/tab/`](../../components/src/components/tab/)
- Built metadata references: `components/tab/tab.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/tab';
```

```html
<mdc-tab></mdc-tab>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Tab } from '@momentum-design/components/react';
```

```jsx
<Tab />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-tab--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `tabIndex` — This property specifies the tab order of the element.
- `role` — This property defines the ARIA role for the element. By default, it is set to 'button'. Consumers should override this role when: - The element is being used in a context where a different role is more appropriate.
- `ariaStateKey` — This property defines the ARIA state key, which will be toggled when the Button is set to `active`. The default value is 'aria-pressed', which is commonly used for toggle buttons.

## Design

_To be filled in._
