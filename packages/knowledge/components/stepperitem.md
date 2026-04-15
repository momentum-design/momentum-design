# StepperItem (`mdc-stepperitem`)

## Development

### Summary

stepperitem component is used to represent a single step in a stepper component. It is used within a `mdc-stepper` component to indicate the current step in a process.
It can have different statuses such as `completed`, `current`, `incomplete`, `error-current`, and `error-incomplete`.
The component supports various visual styles and can be customized with labels, help text, and step numbers.

This is an uncontrolled component, meaning it does not manage its own state. Instead, it relies on the consumer's to manage the state of each step.
Make sure to set `aria-current="step"` on the current stepper item. It is applicable only when status is `current` or `error-current`. This ensures accessibility for the stepper component. Only one stepper item should have this attribute at a time.

Additionally, make use of `aria-label` to provide a descriptive detail about the stepper item, especially for screen readers. If this aria-label is not set, it would read out only the label text and doesn't provide enough context for the user.

### Source

- Component folder: [`packages/components/src/components/stepperitem/`](../../components/src/components/stepperitem/)
- Built metadata references: `components/stepperitem/stepperitem.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/stepperitem';
```

```html
<mdc-stepperitem></mdc-stepperitem>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { StepperItem } from '@momentum-design/components/react';
```

```jsx
<StepperItem />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-stepper-stepperitem--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `tabIndex` — This property specifies the tab order of the element.

## Design

_To be filled in._
