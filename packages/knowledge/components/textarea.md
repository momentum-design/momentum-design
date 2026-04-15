# Textarea (`mdc-textarea`)

## Development

### Summary

mdc-textarea component, which is used to get the multi-line text input from the user.
It contains:
- label: It is the title of the textarea field.
- required: A boolean attribute depicting that the textarea field is required.
- Textarea: It is the multi-line text input field.
- helper-text: It is the text that provides additional information about the textarea field.
- max-character-limit: It is the text that shows the character count of the textarea field.
- Error, Warning, Success, Priority Help Text type: It is the text that provides additional information
  about the textarea field based on the validation state.
- limitexceeded: It is the event that is dispatched when the character limit exceeds or restored.
  This event exposes 3 properties:
  - currentCharacterCount - the current number of characters in the textarea field,
  - maxCharacterLimit - the maximum number of characters allowed in the textarea field,
  - value - the current value of the textarea field,

**Note**: Consumers must set the help-text-type with 'error' and
help-text attribute with the error message using limitexceeded event.
The same help-text value will be used for the validation message to be displayed.

### Source

- Component folder: [`packages/components/src/components/textarea/`](../../components/src/components/textarea/)
- Built metadata references: `components/textarea/textarea.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/textarea';
```

```html
<mdc-textarea></mdc-textarea>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Textarea } from '@momentum-design/components/react';
```

```jsx
<Textarea />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-textarea--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-label` — Defines a string value that labels the current element. The Aria-Label attribute to be set for accessibility.

## Design

_To be filled in._
