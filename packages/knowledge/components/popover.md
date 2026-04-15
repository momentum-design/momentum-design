# Popover (`mdc-popover`)

## Development

### Summary

Popover is genric overlay which can be trigered by any actinable element.

It can be used for tooltips, dropdowns, menus or any showing any other contextual content.

The popover automatically positions itself based on available space and
supports dynamic height adjustments with scrollable content when needed.
It uses [Floating UI](https://floating-ui.com/) for maintaining the position of the popover.

## Limitations

### On trigger for multiple popovers

A component (button, etc.) can trigger more than one popover, but only one of them should change the
aria-expanded and aria-haspopup attributes on the trigger.

To prevent unexpected attribute changes on the trigger `disable-aria-expanded` attribute must be set on all linked
Popoers except one.

### React Popover with append-to attribute

React mounts the popover based on the virtual DOM, but when the append-to attribute is set, the popover removes itself
and mounts to the specified element. React will not know about the move and will not know about the
newly created mdc-popoverportal element either. This throws a `NotFoundError` error when the Popover is directly
added/removed by React, for example:

```tsx
const SomeComponent = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
     {isOpen && ...}
   );
}
```
As a workaround Popover need to wrap with any other element/component, for example:
```tsx
const SomeComponent = () => {
   const [isOpen, setIsOpen] = useState(false);
   return (
     {isOpen && 
       ...
     }
   );
}
```
Note the wrapper  around the Popover component (React.Fragment does not work).

### Source

- Component folder: [`packages/components/src/components/popover/`](../../components/src/components/popover/)
- Built metadata references: `components/popover/popover.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/popover';
```

```html
<mdc-popover></mdc-popover>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Popover } from '@momentum-design/components/react';
```

```jsx
<Popover />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-popover--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `role` — Role of the popover
- `aria-labelledby` — aria-labelledby for an interactive popover only, defaults to the trigger component id. Used in nested cases where the triggerComponent isn't the actual button.
- `aria-describedby` — aria-describedby of the popover.

## Design

_To be filled in._
