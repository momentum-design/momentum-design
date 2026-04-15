# Slider (`mdc-slider`)

## Development

### Summary

Slider component is used to select a value or range of values from within a defined range.
It provides a visual representation of the current value(s) and allows users to adjust the value(s) by dragging the thumb(s) along the track.
It can be used as a single slider or a range slider. This is set by the boolean attribute `range`
If the step value is more than 1, tick marks are shown to represent the steps between the min and max values. The slider thumb will snap to the nearest tick mark.

### Source

- Component folder: [`packages/components/src/components/slider/`](../../components/src/components/slider/)
- Built metadata references: `components/slider/slider.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/slider';
```

```html
<mdc-slider></mdc-slider>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Slider } from '@momentum-design/components/react';
```

```jsx
<Slider />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-slider--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-label` — Aria label for the slider's handle displayed when range is false.
- `data-aria-valuetext` — Aria value text for the slider's value displayed when range is false.

## Design

_To be filled in._
