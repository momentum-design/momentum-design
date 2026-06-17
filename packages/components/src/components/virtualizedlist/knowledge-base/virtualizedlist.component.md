---
title: Virtualizedlist
summary: Usage, guidelines, and accessibility for the mdc-virtualizedlist component — a windowed list that renders only the visible items.
tier: 3
component: virtualizedlist
---

## Overview

`mdc-virtualizedlist` renders only the items currently visible in the scroll viewport, using TanStack Virtual under the hood. It adds keyboard navigation, focus management, scroll anchoring, and accessibility wiring on top of the virtualization primitives so very large lists stay performant while remaining usable for keyboard and assistive technology users.

### When to use

- Render long or unbounded lists (chats, search results, logs) where mounting every item would be expensive.
- Lists whose items change size dynamically and need accurate measurement (with `observe-size-changes`).
- Bottom-anchored streams (e.g. chat transcripts) that should follow new content until the user scrolls away.

### When not to use

- Use `mdc-list` when the data set is small enough to render in full — virtualization adds complexity that isn't needed.
- Use `mdc-listbox` or `mdc-select` for selecting a single value from a list of options.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/virtualizedlist/index.js"; // custom element registration
// or via React wrapper
import { Virtualizedlist } from '@momentum-design/components/dist/react';
```

The list keeps rendering framework-agnostic. The consumer subscribes to `virtualitemschange` and renders the visible window of `mdc-listitem` elements. Each rendered item must carry `data-index` so the component can resolve it back to a position in the dataset:

```html
<mdc-virtualizedlist id="messages" data-aria-label="Messages"></mdc-virtualizedlist>
```

```ts
const list = document.getElementById('messages');

list.virtualizerProps = {
  count: items.length,
  estimateSize: () => 48,
  getItemKey: (index) => items[index].id,
};

list.addEventListener('virtualitemschange', (event) => {
  const { virtualItems } = event.detail;
  // Render only virtualItems; each rendered <mdc-listitem> must set data-index={virtualItem.index}
});
```

### Content guidance

- Place a `mdc-listheader` in the `list-header` slot when you need a header that scrolls with the list.

### Property/Attribute details

- `virtualizerProps` — required object passed to TanStack's virtualizer. At minimum:
  - `count` — total number of items in the dataset.
  - `estimateSize(index)` — function returning the estimated pixel size of each item.
  - `getItemKey(index)` — function returning a stable unique key for each item.
  Other TanStack options (such as `paddingStart`, `paddingEnd`, `gap`, `rangeExtractor`, `isItemNavigable`) are forwarded directly.
- `loop` — `"true"` or `"false"` (default `"false"`). When `"true"`, Up/Down arrow navigation wraps at the ends of the list.
- `scroll-anchoring` — when `true`, the list keeps the user-anchored item in view as the dataset grows; otherwise it preserves the current scroll position.
- `observe-size-changes` — when `true`, the list uses a `ResizeObserver` to re-measure items whose rendered size changes (use for chat bubbles with images, expandable rows, etc.).
- `revert-list` — when `true`, items align to the bottom of the scroll container and the list anchors to the bottom until the user scrolls away.
- `at-bottom-threshold` — pixel tolerance used when deciding whether the user is at the bottom of the list (relevant for scroll anchoring).
- `initial-focus` — index of the item that should receive focus when the list is first rendered.
- `data-aria-label` — accessible name applied to the inner list container via `aria-label`.
- Imperative method `scrollToIndex(index, options?)` scrolls to the item at the given index using TanStack's scrolling options.
- Events:
  - `scroll` (`onScroll`) — re-fired from the internal scroll container so consumers can react to scroll position changes.
  - `virtualitemschange` (`onVirtualItemsChange`) — fires whenever the set of visible virtual items changes. Detail includes the `virtualizer` instance and the `virtualItems` array.

### Limitations

- Orientation is always vertical; setting `orientation="horizontal"` is reset back to `vertical` by the component.
- Do not apply CSS padding or margin to the top/bottom of the list or to the first/last item — it breaks the virtualization math and may produce unnecessary scrollbars. Use `paddingStart` / `paddingEnd` (and `gap` for spacing between items) on `virtualizerProps` instead.
- The component does not render list items itself; the consumer must subscribe to `virtualitemschange` and render the visible window.
- List updates only react to changes in `virtualizerProps`, to size changes when `observe-size-changes` is enabled, or to explicit calls to `virtualizer.measure()`.

## Accessibility

### Built-in features

- The inner scroll container is wrapped by an element with `role="list"` and `aria-label` taken from `data-aria-label`, so assistive technologies expose the data set as a list with a name.
- Each rendered item is assigned `aria-setsize` matching the total number of items in the dataset, so screen readers can report the size of the virtual list even though only a window is in the DOM.
- Keyboard navigation: Up/Down arrow keys move focus between items (with optional wrap via `loop`), Home jumps to the first item, End scrolls to and focuses the last item.
- Roving tabindex: only the focused item has `tabindex="0"`; the rest are `-1` so Tab moves out of the list rather than visiting every item.
- Items just outside the visible window (the selected item plus its immediate neighbours) are kept in the DOM as "hidden" entries so focus can move smoothly while scrolling.
- Scroll anchoring keeps the focused item visible as the dataset grows or items resize, and `revert-list` keeps the latest item in view in bottom-anchored streams until the user scrolls up.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host (`mdc-virtualizedlist`) | `role` | unset (the inner container exposes the list role) |
| Inner container (`[part="container"]`) | `role` | `list` |
| Inner container | `aria-label` | The value of `data-aria-label` |
| Inner slot | `role` | `presentation` |
| Each rendered `mdc-listitem` | `aria-setsize` | The total `count` from `virtualizerProps` |
| Focused item | `tabindex` | `0` |
| Other items | `tabindex` | `-1` |

### Implementation requirements

#### General

- Set `data-index` on every rendered item to its position in the dataset; the component relies on this attribute to map between DOM nodes and the virtualized list.
- Provide stable `getItemKey` values; changing the key as content changes will cause scroll position and selection to shift unexpectedly.
- For dynamic item sizes, enable `observe-size-changes` so size measurements stay accurate after content updates.

#### Labelling

- Set `data-aria-label` so the list has an accessible name. Without it, assistive technologies will announce an unnamed list role.

### Notes

- Because items outside the viewport are not in the DOM, screen-reader features that rely on traversing siblings (such as listing all rows) will only encounter the rendered window plus the focus-preserving neighbours. `aria-setsize` is used to communicate the true size.
