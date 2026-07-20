---
title: Screenreaderannouncer
summary: Usage, guidelines, and accessibility for the mdc-screenreaderannouncer component — a non-visual helper pushing messages into a shared aria-live region for assistive tech announcements.
tier: 3
component: screenreaderannouncer
---

## Overview

The screen reader announcer is a non-visual helper that pushes text into a shared aria-live region so screen readers announce it. It owns the live-region container, debouncing, and clean-up, so a consumer only sets an `announcement` (or calls `announce()`) when a message should be read out.

### When to use

- Use `mdc-screenreaderannouncer` to surface a status change that has no visible counterpart — for example "5 new messages", "Saved", or "Failed to load".
- Use `mdc-screenreaderannouncer` when a visible status exists but sits outside the reading order or is too brief to be caught, and you need to guarantee the announcement.

### When not to use

- Do not use `mdc-screenreaderannouncer` for content already inside a visible live region or announced by a focus change. Rely on that existing announcement instead.
- Do not use `mdc-screenreaderannouncer` as a toast or logging surface. Use `mdc-toast` for a visible transient message instead.

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

Imperative usage — call the public `announce()` method for ad-hoc announcements with per-call overrides:

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

| Option | Intent |
| --- | --- |
| `announcement` | String that triggers an announcement when set to a non-empty value; the component clears it back to empty afterward. Default `''`. |
| `identity` | Id of the light-DOM element announcement containers append to. When empty, the component creates a visually hidden `<div>` with id `mdc-screenreaderannouncer-identity`. Supply your own only if the element exists and is visually hidden. Default `''`. |
| `data-aria-live` | `polite` (default) or `assertive`. Sets the `aria-live` value on created announcement containers. |
| `delay` | Milliseconds between appending the live-region container and inserting the text, so the region exists before its contents change. Default `150`. |
| `timeout` | Milliseconds after which the announcement container is removed. Default `20000`. |
| `debounce-time` | Milliseconds to wait after the latest `announcement` change before announcing, coalescing rapid updates. Default `500`. |

`announce(options)` is a public method; `options.announcement` is required, and `delay`, `timeout`, and `ariaLive` optionally override the instance properties for that call.

### Limitations

- **First instance sets aria-live** — for a shared `identity`, the first announcer fixes the live-region politeness; later `data-aria-live` changes do not update already-created containers.
- **Delay has a floor** — lowering `delay` below the default risks assistive technologies missing the announcement, because the live region is created dynamically.
- **Custom identity is your responsibility** — when you set your own `identity`, you must provide the element and keep it visually hidden.
- **No visible output** — the component renders nothing, so a status that sighted users also need still requires its own visible UI.

## Accessibility

### Built-in features

The component renders nothing visible. On connect it ensures a visually hidden live-region element exists at `identity` (creating one with `aria-live` from `data-aria-live` if needed); on disconnect it removes that element when no other instance still uses the same identity. Each announcement appends a fresh `<div aria-live="…">` to the identity element and inserts a `<p>` with the text after the configured `delay`, so the live region is observed before its contents change. Pending timeouts and announcement nodes are cleared on disconnect.

#### Internal ARIA managed by the component

| Element                                | Attribute   | Value                                                                            |
| -------------------------------------- | ----------- | -------------------------------------------------------------------------------- |
| Identity element (created when missing)| `id`        | value of `identity` (defaults to `mdc-screenreaderannouncer-identity`)           |
| Identity element (created when missing)| `class`     | `mdc-screenreaderannouncer__visually-hidden` (visually hidden CSS)               |
| Per-announcement container             | `aria-live` | per-call override or `data-aria-live` (`polite` by default)                      |

### Notes

- The default `delay` of 150 ms exists because the live region itself is created dynamically. Lowering it can cause assistive technologies to miss the announcement.
- If several instances share the same `identity`, the `aria-live` value is effectively determined by the first instance that creates an announcement for that identity. Changing `data-aria-live` on later instances does not retroactively update already-created live-region containers.
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

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-toast` | For a visible transient message, where the announcer is invisible and screen-reader only. |
| `mdc-banner` | For a persistent visible message that also needs to be seen, not only heard. |
