# Combobox (`mdc-combobox`)

## Development

### Summary

The Combobox component is a text-based dropdown control that allows users to select an option from a predefined list.
Users can type text to filter the options and select their desired choice.

When the user starts typing, the filter uses a "starts with" search and displays options based on the text entered by the user.
If the user entered text that doesn't match with any of the options, then the text in the `no-result-text` attribute will be displayed.

If there is no text in the `no-result-text` attribute then nothing will be shown.

Combobox is designed to work with `mdc-option` for individual options and `mdc-optgroup` for grouping related options.
The component ensures accessibility and usability while handling various use cases, including long text truncation with tooltip support.

Every mdc-option should have a `value` attribute set to ensure proper form submission.

To set a default option, use the `selected` attribute on the `mdc-option` element.

**Note:** Make sure to add `mdc-selectlistbox` as a child of `mdc-combobox` and wrap options/optgroup in it to ensure proper accessibility functionality. Read more about it in SelectListBox documentation.

If you need to use `mdc-tooltip` with any options, make sure to place the tooltip component outside the `mdc-selectlistbox` element. Read more about it in Options documentation.

To understand more about combobox and its patterns, refer to this [WCAG example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/).

### Source

- Component folder: [`packages/components/src/components/combobox/`](../../components/src/components/combobox/)
- Built metadata references: `components/combobox/combobox.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**React** wrapper (from `@lit/react` codegen):

```javascript
import { Combobox } from '@momentum-design/components/react';
```

```jsx
<Combobox />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/work-in-progress-combobox--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-label` — Defines a string value that labels the current element. The Aria-Label attribute to be set for accessibility.

## Design

_To be filled in._
