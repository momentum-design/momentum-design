---
title: Spatial Navigation Provider
summary: Usage, guidelines, and accessibility for the mdc-spatialnavigationprovider component — an application-root context provider that moves focus on a 2D plane in response to arrow, Enter, and Escape keys.
status: draft
tier: 3
component: spatialnavigationprovider
---

## Overview

The spatial navigation provider implements [spatial navigation](https://en.wikipedia.org/wiki/Spatial_navigation): it lets users move focus between elements on a 2D plane using arrow keys, Enter, and Escape, the way TV remotes and game controllers do. It listens to keyboard events at the document level, computes the next focus target from element positions, and dispatches cancellable events around every navigation step.

Only one instance is supported per application, placed at the root.

### When to use

- Use `mdc-spatialnavigationprovider` for TV, set-top-box, console, or kiosk apps where the primary input is a remote or directional pad.
- Use it when consumers should be able to override or intercept focus movement via data attributes or DOM events.

### When not to use

- Do not use it in a typical pointer-and-keyboard web app where browser-native focus order is sufficient.
- Do not nest providers — only one instance per application is supported.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/spatialnavigationprovider/index.js"; // custom element registration
// or via React wrapper
import { SpatialNavigationProvider } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-spatialnavigationprovider>
  <!-- application root -->
  <main>
    <mdc-button data-spatial-go-back>Back</mdc-button>
    <mdc-button>Play</mdc-button>
    <mdc-button>Pause</mdc-button>
  </main>
</mdc-spatialnavigationprovider>
```

### Property/Attribute details

- `navigationKeyMapping` — key mapping for the six spatial navigation actions. Defaults are: `up: "ArrowUp"`, `down: "ArrowDown"`, `left: "ArrowLeft"`, `right: "ArrowRight"`, `enter: "Enter"`, `escape: "Escape"`. Override to support remotes that emit different key names (e.g. `"GoBack"`).
- `distanceCalculationWeights` — weights for the [W3C "find the shortest distance" algorithm](https://www.w3.org/TR/css-nav-1/#find-the-shortest-distance) used when no override attribute is present. Tune for your UI layout.

Control data attributes (set on focusable descendants):

| Attribute                    | Value                        | Description                                                                                                                        |
| ---------------------------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------- |
| `data-spatial-left`          | empty / id / selector        | Prevent native navigation in the Left direction, focus the target if focusable, otherwise limit the search to that subtree.        |
| `data-spatial-up`            | empty / id / selector        | Same as above for the Up direction.                                                                                                |
| `data-spatial-right`         | empty / id / selector        | Same as above for the Right direction.                                                                                             |
| `data-spatial-down`          | empty / id / selector        | Same as above for the Down direction.                                                                                              |
| `data-spatial-go-back`       | n/a                          | First focusable element with this attribute is clicked on Back/Escape.                                                             |
| `data-spatial-focusable`     | n/a                          | Treat the element as focusable even when it normally is not (e.g. `tabindex="-1"`).                                                |
| `data-spatial-exclude`       | n/a                          | Exclude the focusable element (and its subtree) from navigation.                                                                   |
| `data-spatial-noscroll`      | n/a                          | Prevent automatic scrolling for the active element inside a scrollable area even if it does not fit in view.                       |
| `data-spatial-scroll-parent` | n/a                          | When the focusable item is not a direct child of the scrollable area, mark the scrollable ancestor with this attribute.            |

Events dispatched by the provider (all cancellable unless noted):

- `navbeforeprocess` — dispatched on the currently focused element before any spatial navigation action is processed. Call `preventDefault()` to stop the provider from handling the key (use this when a component handles its own navigation, e.g. List, Combobox).
- `navbeforefocus` — dispatched on the currently focused element before focus moves. Call `preventDefault()` to cancel the focus change. Mirrors the [CSS Spatial Navigation `navbeforefocus`](https://www.w3.org/TR/css-nav-1/#event-type-navbeforefocus) event.
- `navback` — dispatched on the provider when a back action is triggered. `event.detail` contains the `goBackElement` (if any). Cancel to suppress the click on the go-back element.
- `navnotarget` — dispatched on the provider when there is no focus target in the requested direction within the current focus area.

Public methods:

- `isNavigationKey(key)` / `isDirectionKey(key)` — true if `key` matches one of the configured navigation / direction keys.
- `pressEnter()` — triggers `.click()` on the currently focused element; returns `true` if a click was triggered.
- `goBack()` — dispatches `navback`; if a `data-spatial-go-back` element exists (and the event is not prevented), clicks it. Otherwise calls `history.back()` provided history was pushed since the provider was initialized. Returns `true` if back was handled.

### Notes

**How focus is computed.** On each keydown, the provider:

1. Handles `keydown` in the capture phase. If the active element has a matching `data-spatial-{direction}` attribute, the provider runs its own handler immediately. If the active element is inside a scrollable parent and is not fully visible in the requested direction (and has no `data-spatial-noscroll`), navigation is suppressed and the parent scrolls by half its size.
2. Lets the component's own `keydown` handler run (bubble phase) — for example a list moving focus internally.
3. Runs the provider's bubble-phase `keydown`:
   - Dispatches `navbeforeprocess`. If prevented, stop.
   - For arrow keys, evaluates `data-spatial-{direction}` (id first, CSS selector fallback). If the target is focusable, focus moves there; otherwise the search is constrained to that subtree.
   - Otherwise, finds the nearest focus area (scrollable container or active focus trap), collects focusable elements in that area, and computes distances using the W3C shortest-distance algorithm. The closest candidate wins.
   - Dispatches `navbeforefocus` on the current element. If prevented, no focus change. Otherwise focus moves.
   - If no candidate exists, dispatches `navnotarget`.

`data-spatial-focusable` and `data-spatial-exclude` extend or trim the focusable set respectively.

**Enter and Escape actions.**

- `Enter` triggers `.click()` on the focused element. Prevent with `navbeforeprocess` to handle Enter yourself.
- `Escape` (or the configured `escape` key) dispatches `navback`. If not prevented and a `data-spatial-go-back` element exists, it is clicked. Otherwise the provider calls `history.back()` if history has been pushed since initialization.

**Form inputs and text fields.** Native inputs often submit on Enter. In spatial navigation contexts, prefer toggling/activating controls and provide a dedicated submit button. On TV-like platforms without a physical keyboard, focusing a text input should open the virtual keyboard; users close it (Escape) to resume spatial navigation. Letter-key mappings (e.g. `w`/`a`/`s`/`d`) collide with typing in text inputs and should be edited via the virtual keyboard.

**Helper mixins for complex components.**

- `KeyToActionMixin` — maps key events to action names; provides `getActionForKeyEvent` and `getKeyboardNavMode` (returns spatial vs default mode).
- `KeyDownHandledMixin` — call `keyDownEventHandled()` whenever your component handled a keydown internally so the provider's bubble handler can skip it.

**Debugging.**

- The Storybook toolbar exposes a "Spatial navigation" mode that maps to the default key set.
- With spatial navigation enabled, holding `Shift` + a navigation key renders a visual debugger overlay: a star marks the chosen next element, `#{n}` shows candidate order by distance, and `D: {distance}` shows the computed distance.

### Limitations

- Only one provider instance is supported per application.
- The distance-based algorithm cannot guarantee that every element is reachable in all four directions. Isolated elements should be linked explicitly with `data-spatial-{direction}` attributes; favour stable layouts, dedicated list/menu components, and avoid heavy overlap or nested focusable elements.
- Responsive layouts with shifting positions can make navigation unpredictable, which is especially visible when resizing Storybook stories.

## Accessibility

### Built-in features

The component provides focus management only — it does not render any UI or expose ARIA semantics of its own. Focus moves with `.focus()` on the chosen target, so the target's own roles, names, and states drive what screen readers announce.

### Notes

Because the provider listens to `keydown` at the document level in the capture phase, components or pages that rely on default browser behaviour for arrow keys, Enter, or Escape should opt out via `navbeforeprocess` (`event.preventDefault()`) to keep their own handlers in control.
