# Progressspinner (`mdc-progressspinner`)

## Development

### Summary

`mdc-progressspinner` is a customizable, circular progress indicator component.
It visually represents the current completion state of a process, such as loading,
syncing, uploading, or any ongoing task that has a measurable percentage.

The spinner is built using SVG with two concentric `` elements:
- The `progress` arc represents the portion of work completed.
- The `track` arc represents the remaining part.

A visual gap is maintained between the progress and track arcs to clearly
distinguish the two segments. The component smoothly animates arc length
and respects accessibility best practices with ARIA attributes.

The component supports different states:
- **Default**: Circular spinner shows the progress.
- **Success**: Displays a checkmark icon when progress reaches 100%.
- **Error**: Displays an error icon when in an error state.

### Source

- Component folder: [`packages/components/src/components/progressspinner/`](../../components/src/components/progressspinner/)
- Built metadata references: `components/progressspinner/progressspinner.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/progressspinner';
```

```html
<mdc-progressspinner></mdc-progressspinner>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Progressspinner } from '@momentum-design/components/react';
```

```jsx
<Progressspinner />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-progressspinner--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-label` — Defines a string value that labels the current element. The Aria-Label attribute to be set for accessibility.

## Design

_To be filled in._
