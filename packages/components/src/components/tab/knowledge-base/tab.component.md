---
title: Tab
summary: Usage, guidelines, and accessibility for the mdc-tab component — an individual tab control used inside mdc-tablist.
status: draft
tier: 3
component: tab
---

## Overview

The tab is the individual control rendered inside an `mdc-tablist`. It displays an optional icon, a text label, and optional postfix content (badge or chip), and reflects its active state to assistive technologies.

### When to use

- Use inside an `mdc-tablist` to represent one panel of content the user can switch to.
- Use to provide a compact, single-line label for content panels related to one another.

### When not to use

- Do not use tabs to navigate between unrelated pages — use a navigation pattern.
- Do not use a tab outside of an `mdc-tablist` if the tabs pattern semantics are needed; the list owns roving focus and selection wiring.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/tab/index.js"; // custom element registration
// or via React wrapper
import { Tab } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-tablist data-aria-label="Account sections">
  <mdc-tab tab-id="overview" text="Overview" icon-name="info-circle-regular" active></mdc-tab>
  <mdc-tab tab-id="activity" text="Activity" icon-name="activity-regular">
    <mdc-badge slot="postfix" type="dot"></mdc-badge>
  </mdc-tab>
</mdc-tablist>
```

### Property/Attribute details

- `tab-id` (string) — unique identifier used by `mdc-tablist` to track selection. Required and must be unique within the list; the parent list reports an error otherwise.
- `text` (string) — label rendered inside the tab. When omitted, the tab renders only the icon and the consumer must supply an `aria-label`.
- `icon-name` (string) — name of the regular icon to render in the prefix area. The component automatically renders the matching `-filled` icon and swaps to it when the tab becomes active.
- `variant` (`'glass' | 'line' | 'pill'`, default `'pill'`) — controls the background and indicator styling. Unknown values fall back to `'pill'`.
- `size` (`32 | 28`, default `32`) — `32` is 2rem; `28` is the compact 1.75rem variant. Unknown values fall back to `32`.
- `active` (boolean, default `false`) — toggles the visual active state. The component automatically reflects this to `aria-selected` on the host (see Accessibility).
- `disabled` (boolean) — when set, removes the tab from the tab order and marks it as `aria-disabled`. `mdc-tablist` skips disabled tabs during roving-tabindex navigation.
- `soft-disabled` (boolean) — visually disabled but still focusable and clickable, with `aria-disabled="true"`. Consumers must ensure the tab does not perform any action while soft-disabled.

The component dispatches:

- `click` / `keydown` / `keyup` / `focus` — native DOM events with React equivalents.
- `activechange` — bubbling `CustomEvent` with `detail: { tabId, active }` fired when the active state changes. When the tab is used inside `mdc-tablist`, the list listens for this internally and consumers should listen for the list's `change` event instead.

Slots:

- `prefix` — content before the text; defaults to the icon rendered from `icon-name`.
- `postfix` — content after the text, typically `mdc-badge` or `mdc-chip`. Do not use a badge and a chip in the same tab.

## Accessibility

### Built-in features

- The host element exposes `role="tab"`.
- The active state is mirrored to `aria-selected` on the host (the `ariaStateKey` is set to `aria-selected`, so `active="true"` writes `aria-selected="true"`, `false` writes `aria-selected="false"`, and `undefined` removes the attribute).
- Enter activates the tab; Space activates on key-up. The host also listens for blur to clear the visual `pressed` state if the key is released outside the element.
- The native form `type` attribute is cleared on connect so the tab does not submit forms when nested inside one.
- When `disabled` is set, the tab is removed from the tab order, marked `aria-disabled="true"`, and the parent list skips it during arrow-key navigation.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Host element | `role` | `tab` |
| Host element | `aria-selected` | `true` when `active`, `false` when not active, removed when `active` is `undefined` |
| Host element | `aria-disabled` | `true` when `disabled` or `soft-disabled` |
| Host element | `aria-pressed` | not used (overridden to `aria-selected`) |

### Implementation requirements

#### General

- Wire each tab to its panel by setting `aria-controls` on the tab pointing at the panel element's `id`.
- The corresponding content panel element must have `role="tabpanel"` and `aria-labelledby` referencing the tab's `id`.
- If a tab opens a popup menu, set `aria-haspopup` on it to either `menu` or `true`.

#### Labelling

- When `text` is omitted, provide an `aria-label` on the tab so screen reader users hear a meaningful name.

### Notes

- When the tab lives inside `mdc-tablist`, listen to the list's `change` event for selection changes rather than the tab's `activechange` event to avoid duplicate handlers.
