# @momentum-design/storybook-addon-component-inspector

A Storybook toolbar addon that renders an interactive overlay to highlight the
**slots** and **CSS shadow parts** of a Momentum Design (`mdc-*`) component.

## Usage

Register the addon in your Storybook `main` configuration:

```js
// .storybook/main.js
export default {
  addons: ['@momentum-design/storybook-addon-component-inspector'],
};
```

Provide the raw custom-elements manifest through the `componentInspector`
parameter (usually in `preview`) so the inspector can resolve each component's
slots and shadow parts:

```js
// .storybook/preview.js
import customElements from '@momentum-design/components/dist/custom-elements.json';

export default {
  parameters: {
    componentInspector: { customElements },
  },
};
```

## How it works

The addon adds a toolbar toggle button. While the inspector is **on** and
nothing is selected yet, a small on-screen help panel shows which keys to use
(the "parts" key is shown as `⌘`, `⊞ Win` or `Meta` depending on your OS):

- Hold `Shift` to reveal the **slot** overlay.
- Hold `Meta` (⌘ on macOS, ⊞ on Windows) to reveal the **shadow-part** overlay.
- `Shift + click` / `Meta + click` any `mdc-*` element to inspect it.

Each region is drawn on a transparent, full-viewport `<canvas>` (pointer events
pass through, so the story stays interactive). A colour-coded legend is rendered
in the Storybook manager using Storybook's own UI toolkit (`storybook/theming`)
and anchored over the selected component; the preview decorator only streams the
legend data over the Storybook channel. Turning the toggle off tears the
overlay, listeners and observers down completely.

The keyboard shortcut `I` also toggles the inspector.
