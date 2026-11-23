# @momentum-design/storybook-addon-component-inspector

A Storybook addon that renders an interactive overlay to highlight the
**slots** and **CSS shadow parts** of a web component. It works with any custom
elements — Momentum Design (`mdc-*`) components by default, but any prefix (or
any HTML element) can be targeted via the `prefix` parameter.

## Usage

Register the addon in your Storybook `main` configuration:

```js
// .storybook/main.js
export default {
  addons: ["@momentum-design/storybook-addon-component-inspector"],
};
```

Provide the raw custom-elements manifest through the `componentInspector`
parameter (usually in `preview`) so the inspector can resolve each component's
slots and shadow parts:

```js
// .storybook/preview.js
import customElements from "@momentum-design/components/dist/custom-elements.json";

export default {
  parameters: {
    componentInspector: {
      customElements,
      // Optional: only elements whose tag starts with this prefix are
      // selectable (matched case-insensitively). Omit to allow selecting
      // any HTML element.
      prefix: "mdc-",
      // Optional: CSS selector of a container element. When set and a
      // matching element exists in the story, hovering can only select
      // elements inside that container.
      contentContainer: ".styory-component-container",
    },
  },
};
```

### Parameters

| Name               | Type   | Description                                                                                                          |
| ------------------ | ------ | --------------------------------------------------------------------------------------------------------------------- |
| `customElements`   | object | The raw custom-elements manifest used to resolve each component's slots and shadow parts.                             |
| `prefix`           | string | Tag-name prefix of the components to inspect (e.g. `"mdc-"`). When omitted, any HTML element is selectable.           |
| `contentContainer` | string | CSS selector of a container element. When set and a matching element exists in the story, hovering is restricted to elements inside it. |

## How it works

The addon adds a toolbar dropdown with three options:

- **Off** — the inspector is disabled.
- **Slot inspector** — hovering any targeted element outlines its slots.
- **CSS part inspector** — hovering any targeted element outlines its shadow parts.

While either inspector mode is selected, no modifier key is required: simply
**hover** any targeted element in the story to see its slots or shadow parts
outlined directly in the preview. Each slot / part is colour-coded from a
built-in palette (a solid border colour with a lighter fill shade), so the
overlay is framework-agnostic and works for any web component.

A floating legend is anchored next to the currently hovered element, showing
its tag name plus the list of slots or parts with their matching colours. When
nothing is hovered, the legend shows a short hint instead.

Each region is drawn on a transparent, full-viewport `<canvas>` (pointer events
pass through, so the story stays interactive). The preview decorator only
streams the legend data over the Storybook channel; the floating legend is
rendered in the Storybook manager using Storybook's own UI toolkit
(`storybook/theming`) and anchored over the hovered component. Switching the
dropdown back to "Off" tears the overlay, listeners and observers down
completely.

The keyboard shortcut `I` cycles through Off → Slot inspector → CSS part
inspector → Off.
