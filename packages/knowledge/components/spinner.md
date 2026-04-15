# Spinner (`mdc-spinner`)

## Development

### Summary

`mdc-spinner` is loading spinner which is an indeterminate progress indicator, meaning
it's best for cases where the  progress or duration of a process is variable or unknown.

Spinner Variants:
- **Standalone (Default)**: Track has a blue color.
- **Button**: To be used when placed in a button to show that the button’s action is currently in progress.
To ensure a minimum 3:1 contrast ratio, the color is changed internally to be the same color as the button’s
icon or label text.

Spinner Sizes:
- **Large (96px)**: Use when replacing entire regions or pages that are still loading
- **MidSize (48px) (Default)**: Use for most use cases.
- **Small (24px)**: Use for inline with loading text.

Customisation of the spinner size is allowed by setting the size to undefined and using the --mdc-spinner-size
CSS property.

Spinner Colors:
- **Default**: Use for most use cases.
- **Inverted**: Only to be used within inverted components, such as coachmarks.

Regarding accessibility, if an aria-label is provided, the role will be set to 'img'; if it is absent, the role
will be unset
and aria-hidden will be set to 'true' so the spinner will be ignored by screen readers.

### Source

- Component folder: [`packages/components/src/components/spinner/`](../../components/src/components/spinner/)
- Built metadata references: `components/spinner/spinner.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/spinner';
```

```html
<mdc-spinner></mdc-spinner>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Spinner } from '@momentum-design/components/react';
```

```jsx
<Spinner />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-spinner--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `aria-label` — Aria-label attribute to be set for accessibility

## Design

_To be filled in._
