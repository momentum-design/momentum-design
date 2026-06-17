---
title: Screenreaderannouncer
summary: Usage, guidelines, and accessibility for the mdc-screenreaderannouncer component — a non-visual helper pushing messages into a shared aria-live region for assistive tech announcements.
tier: 3
component: screenreaderannouncer
---

## Overview

The screenreaderannouncer is a non-visual helper component that pushes text into a shared aria-live region in the light DOM so that screen readers announce it. It manages the live-region container, debouncing, and clean-up so consumers only need to set an `announcement` (or call the public `announce()` method) when they want a message read out.

### When to use

- Use it to surface a status update that has no visible UI counterpart — for example, "5 new messages", "Saved", or "Failed to load" — so screen-reader users hear the change.
- Use it when a visible status message exists but is rendered outside the natural reading order or only briefly, and you want to guarantee assistive-technology announcement.

### When not to use

- Do not use it for content that is already in a visible, ARIA-live container, or for content that the screen reader will naturally announce because of focus changes.
- Do not use it as a logging or toast surface — it is not a UI component and renders nothing visible.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/screenreaderannouncer/index.js"; // custom element registration
// or via React wrapper
import { Screenreaderannouncer } from '@momentum-design/components/dist/react';
```

Declarative usage — set the `announcement` attribute whenever you want a message read out:

```html
<mdc-screenreaderannouncer
  announcement="Saved"
  data-aria-live="polite"
></mdc-screenreaderannouncer>
```

Imperative usage — call the public `announce()` method to make ad-hoc announcements with per-call overrides:

```ts
const announcer = document.querySelector('mdc-screenreaderannouncer');
announcer.announce({
  announcement: 'File uploaded',
  ariaLive: 'assertive',
  delay: 0,
  timeout: 5000,
});
```

### Property/Attribute details

- `announcement` — string that triggers an announcement when set to a non-empty value. After being announced the component clears the attribute back to an empty string. Default `''`.
- `identity` — id of the element in the light DOM that announcement containers are appended to. When empty, the component sets it to `mdc-screenreaderannouncer-identity` and creates a visually hidden `<div>` with that id; consumers can supply their own id and ensure the matching element exists in the DOM and is visually hidden. Default `''`.
- `data-aria-live` — `polite` or `assertive`. Sets the `aria-live` value used when creating announcement containers. Default `polite`.
- `delay` — milliseconds to wait between appending the live-region container and inserting the announcement text inside it. The live region needs to exist before its contents change for assistive technologies to react. Default `150`.
- `timeout` — milliseconds after which the announcement container is removed from the DOM. Default `20000`.
- `debounce-time` — milliseconds the component waits after the most recent change to `announcement` before triggering the announcement; coalesces rapid updates. Default `500`.
- `announce(options)` — public method. `options.announcement` is required; `delay`, `timeout`, and `ariaLive` are optional and override the corresponding instance properties for that call.

## Accessibility

### Built-in features

The component renders nothing visible. On connect it ensures a visually hidden live-region element exists at `identity` (creating one with `aria-live` set from `data-aria-live` if needed) and on disconnect it removes the live-region element if no other instance is still using the same identity. Each announcement is performed by appending a fresh `<div aria-live="…">` to the identity element, then inserting a `<p>` with the announcement text after the configured `delay` so the live region is observed by assistive technologies before the text changes. Pending timeouts and announcement nodes are cleared on disconnect.

#### Internal ARIA managed by the component

| Element                                | Attribute   | Value                                                                            |
| -------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| Identity element (created when missing)| `id`        | value of `identity` (defaults to `mdc-screenreaderannouncer-identity`)           |
| Identity element (created when missing)| `class`     | `mdc-screenreaderannouncer__visually-hidden` (visually hidden CSS)               |
| Per-announcement container             | `aria-live` | per-call override or `data-aria-live` (`polite` by default)                      |

### Notes

- The default `delay` of 150 ms exists because the live region itself is created dynamically. Lowering it can cause assistive technologies to miss the announcement.
- If several `mdc-screenreaderannouncer` instances share the same `identity`, the `aria-live` value is effectively determined by the first instance that creates an announcement for that identity. Changing `data-aria-live` on later instances does not retroactively update already-created live-region containers.
- When no `identity` is provided, all instances share a single `mdc-screenreaderannouncer-identity` element appended to `document.body` (or to the closest `aria-modal="true"` ancestor's shadow root when inside a modal dialog).
- When a custom `identity` is provided, the consumer is responsible for ensuring the element exists in the DOM and is visually hidden, for example:

```css
#your-custom-announcer-id {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
```
