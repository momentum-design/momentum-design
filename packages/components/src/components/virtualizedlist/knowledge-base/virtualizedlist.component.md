---
title: Virtualizedlist
summary: Usage, guidelines, and accessibility for the mdc-virtualizedlist component — a windowed list that renders only the visible items.
tier: 3
component: virtualizedlist
---

## Overview

`mdc-virtualizedlist` renders only the items currently visible in the scroll viewport, using TanStack Virtual under the hood. It adds keyboard navigation, focus management, scroll anchoring, and accessibility wiring on top of the virtualization primitives so very large lists stay performant while remaining usable for keyboard and assistive technology users.

### When to use

- Use `mdc-virtualizedlist` for long or unbounded lists (chats, search results, logs) where mounting every item would be expensive.
- Use `mdc-virtualizedlist` with `observe-size-changes` when items change size dynamically and need accurate measurement.
- Use `mdc-virtualizedlist` with `revert-list` for bottom-anchored streams (such as chat transcripts) that should follow new content until the user scrolls away.

### When not to use

- Do not use `mdc-virtualizedlist` when the data set is small enough to render in full. Use `mdc-list` instead to avoid the added complexity.
- Do not use `mdc-virtualizedlist` for selecting a value from a set of options. Use `mdc-listbox` or `mdc-select` instead.

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

### Property/Attribute details

| Option | Intent |
|---|---|
| `virtualizerProps` (required) | Object passed to TanStack's virtualizer. At minimum set `count` (total items), `estimateSize(index)` (estimated pixel size), and `getItemKey(index)` (stable unique key). Other TanStack options (`paddingStart`, `paddingEnd`, `gap`, `rangeExtractor`, `isItemNavigable`) are forwarded directly. |
| `loop="false"` (default) | Whether Up/Down arrow navigation wraps at the ends. Set `true` for menu-like lists where wrapping helps. |
| `scroll-anchoring` | Keeps the user-anchored item in view as the dataset grows; otherwise the current scroll position is preserved. Use for lists that grow while the user reads. |
| `observe-size-changes` | Re-measures items whose rendered size changes via a `ResizeObserver`. Use for chat bubbles with images, expandable rows, and other dynamic content. |
| `revert-list` | Aligns items to the bottom and anchors to the bottom until the user scrolls away. Use for bottom-anchored streams such as chat transcripts. |
| `at-bottom-threshold` | Pixel tolerance for deciding whether the user is at the bottom (relevant to scroll anchoring and `revert-list`). |
| `initial-focus` | Index of the item focused when the list first renders. Set it when the most useful starting item is not the first. |
| `data-aria-label` | Accessible name applied to the inner list container (see Accessibility). Always set it. |

The imperative `scrollToIndex(index, options?)` method scrolls to a given item using TanStack's scrolling options. Two events drive rendering: `scroll` (`onScroll`) re-fires the internal scroll position, and `virtualitemschange` (`onVirtualItemsChange`) fires whenever the visible window changes, with the `virtualizer` instance and `virtualItems` array in its detail.

### Limitations

- **Vertical only** — `orientation="horizontal"` is reset back to `vertical`; there is no horizontal virtualized list.
- **No edge padding on items** — CSS padding or margin on the top/bottom of the list or the first/last item breaks the virtualization math; use `paddingStart`/`paddingEnd` and `gap` on `virtualizerProps` instead.
- **Consumer renders the rows** — the component windows the data but does not render items; subscribe to `virtualitemschange` and render the visible `mdc-listitem` elements yourself.
- **Updates are prop-driven** — the list re-renders only on `virtualizerProps` changes, on size changes when `observe-size-changes` is on, or on an explicit `virtualizer.measure()` call.

## Accessibility

### Built-in features

- The inner scroll container is wrapped by an element with `role="list"` and `aria-label` taken from `data-aria-label`, so assistive technologies expose the data set as a list with a name.
- Each rendered item is assigned `aria-setsize` matching the total number of items in the dataset, so screen readers can report the size of the virtual list even though only a window is in the DOM.
- Keyboard navigation: Up/Down arrow keys move focus between items (with optional wrap via `loop`), Home jumps to the first item, End scrolls to and focuses the last item.
- Roving tabindex: only the focused item has `tabindex="0"`; the rest are `-1` so Tab moves out of the list rather than visiting every item.
- Items just outside the visible window (the selected item plus its immediate neighbors) are kept in the DOM as "hidden" entries so focus can move smoothly while scrolling.
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
- Place an `mdc-listheader` in the `list-header` slot when the list needs a header that scrolls with the content.

#### Labeling

- Set `data-aria-label` so the list has an accessible name. Without it, assistive technologies will announce an unnamed list role.

### Notes

- Because items outside the viewport are not in the DOM, screen-reader features that rely on traversing siblings (such as listing all rows) will only encounter the rendered window plus the focus-preserving neighbors. `aria-setsize` is used to communicate the true size.

## Related components

| Component | Relationship |
|---|---|
| `mdc-list` | Non-virtualized container for small data sets. |
| `mdc-listitem` | The row rendered inside the virtualized window. |
| `mdc-listheader` | Header for the `list-header` slot. |
| `mdc-listbox` / `mdc-select` | Use these for selecting a value from a set of options. |
