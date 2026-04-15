# ScreenreaderAnnouncer (`mdc-screenreaderannouncer`)

## Development

### Summary

`mdc-screenreaderannouncer` can be used to announce messages with the screen reader.

To make an announcement set `announcement` attribute on the `mdc-screenreaderannouncer` element.

**Internal logic**

When the screenreader announcer is connected to the DOM, if the `identity` attribute is not
provided, it is set to `mdc-screenreaderannouncer-identity` and a `` element with this id is created
in the DOM. If the `identity` attribute is provided, the identity element is used and no new element
is created in the DOM.

When the `announcement` attribute is set, the screenreader announcer will create a `` element with
`aria-live` attribute set to the value of `data-aria-live` attribute and append it to the `identity` element.
After delay of `delay` milliseconds, a  element with the announcement text is appended to the `` element.

The announcement `` element is removed from the DOM after `timeout` milliseconds.

When the screen announcer component is disconnected from the DOM, all the timeouts are cleared and
all the announcement elements added are removed from the DOM and timeouts cleared.

**Note**
1. The default delay of 150 miliseconds is used as we dynamically generate the
aria-live region in the DOM and add the announcement text to it.
3. If no `identity` is provided, all the screen reader components will create and use only one
`` element with id `mdc-screenreaderannouncer-identity` in the DOM.

Reference: https://patrickhlauke.github.io/aria/tests/live-regions/

### Source

- Component folder: [`packages/components/src/components/screenreaderannouncer/`](../../components/src/components/screenreaderannouncer/)
- Built metadata references: `components/screenreaderannouncer/screenreaderannouncer.component.js` (from Custom Elements Manifest)

### Install and global setup

Install the library:

```bash
npm install @momentum-design/components
```

Load fonts and token CSS, set typography class, and use **ThemeProvider** / **IconProvider** where needed. Follow the full checklist in [Consumption.mdx](../../components/src/docs/Consumption.mdx) (imports, HTML example, webpack/TS notes).

### Import this component

**Web component** (registers the custom element):

```javascript
import '@momentum-design/components/components/screenreaderannouncer';
```

```html
<mdc-screenreaderannouncer></mdc-screenreaderannouncer>
```

**React** wrapper (from `@lit/react` codegen):

```javascript
import { ScreenreaderAnnouncer } from '@momentum-design/components/react';
```

```jsx
<ScreenreaderAnnouncer />
```

### Styling and common attributes

- Host `class` / `style`, CSS custom properties, `::part(...)`, and slotted content patterns: [Styling.mdx](../../components/src/docs/Styling.mdx)
- Shared attribute `auto-focus-on-mount`: [Attributes.mdx](../../components/src/docs/Attributes.mdx)

### API details

Full properties, attributes, slots, CSS parts, and events are listed in the Custom Elements Manifest. Use **Storybook** on [momentum.design](https://momentum.design/storybook-static/index.html) (same content as [momentum.design/en/components](https://momentum.design/en/components)) for interactive docs.


## Accessibility

Project Storybook enables the **Accessibility** addon with axe rules for **WCAG 2.x / 2.2 AA** and **best-practice** (see [`preview.jsx`](../../components/config/storybook/preview.jsx), `parameters.a11y`). Run checks from the [Docs](https://momentum.design/storybook-static/index.html?path=/docs/components-screenreaderannouncer--docs) or Canvas view.

- **Focus:** shared attribute `auto-focus-on-mount` is documented in [Attributes.mdx](../../components/src/docs/Attributes.mdx) (use instead of native `autofocus`; same caveats as MDN describes for autofocus).

Manifest / API fields that often relate to accessibility:

- `data-aria-live` — Aria live value for announcement.

## Design

_To be filled in._
