# ToggleTip (`mdc-toggletip`)

## Development

### Summary

A toggletip is triggered by clicking a trigger element.

It can contain interactive content and can be closed by
clicking outside the toggletip or pressing the escape key.

It can have optional close button to close the toggletip.

Toggletip component uses `mdc-screenreaderannouncer` internally to
announce the toggletip text content with screen readers when the toggletip is shown.

`screenreader-announcer-identity` attribute can be used to provide ID of an element
in DOM to which announcement elements are added. If not set, a visually hidden
div element is created in DOM to which announcement elements are added.

Please refer to the `mdc-screenreaderannouncer` component for more details.

### Source

- Component folder: [`packages/components/src/components/toggletip/`](../../components/src/components/toggletip/)
- Built metadata references: `components/toggletip/toggletip.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/toggletip';
```

```html
<mdc-toggletip></mdc-toggletip>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { ToggleTip } from '@momentum-design/components/react';
```

```jsx
<ToggleTip />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-toggletip--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `role` — Role of the popover
- `aria-labelledby` — aria-labelledby for an interactive popover only, defaults to the trigger component id. Used in nested cases where the triggerComponent isn't the actual button.
- `aria-describedby` — aria-describedby of the popover.

## Design

_To be filled in._
