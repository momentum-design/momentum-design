---
title: Typewriter
summary: Usage, guidelines, and accessibility for the mdc-typewriter component — an animated text component that progressively reveals its content.
tier: 3
component: typewriter
---

## Overview

`mdc-typewriter` progressively reveals its text content character-by-character to produce a typewriter effect. It renders through `mdc-text`, so it inherits the same typography options, and exposes both a static markup mode (slotted text) and an imperative API for appending text chunks at runtime.

### When to use

- Stream model or assistant output where text should appear progressively rather than all at once.
- Animate the arrival of short notifications or status messages to draw user attention.
- Build chat-style transcripts where additional content can be appended after the initial render.

### When not to use

- Use `mdc-text` directly when content should appear immediately and never animate.
- Use `mdc-toast`, `mdc-banner`, or another notification surface when you need a container and chrome — the typewriter only animates text.
- Avoid for long, dense content where the animation would slow down comprehension.

## Guidelines

### Developer usage

Import and use the component via its React wrapper or directly as a custom element:

```tsx
import "@momentum-design/components/dist/components/typewriter/index.js"; // custom element registration
// or via React wrapper
import { Typewriter } from '@momentum-design/components/dist/react';
```

Minimal markup example:

```html
<mdc-typewriter type="body-large-regular" tagname="p" speed="normal">
  Hello, world!
</mdc-typewriter>
```

Append additional text imperatively after the initial render:

```ts
const tw = document.querySelector('mdc-typewriter');
tw.addTextChunk(' How are you today?');           // animated chunk
tw.addInstantTextChunk(' [system note]');         // appears instantly
```

### Property/Attribute details

- `type` — text style forwarded to the internal `mdc-text` component. Defaults to `body-large-regular`.
- `tagname` — HTML tag used for the internal text element. Defaults to `p`. Accepts any tag supported by `mdc-text`.
- `speed` — milliseconds per character; either a numeric string (e.g. `"100"`) or one of the presets:
  - `very-slow` — 240ms per character
  - `slow` — 120ms per character
  - `normal` — 60ms per character (default)
  - `fast` — 20ms per character
  - `very-fast` — 1ms per character
  Numeric speeds are clamped to a minimum of 10ms per character.
- `max-queue-size` — maximum number of chunks that can be queued via `addTextChunk` / `addInstantTextChunk`. When exceeded, the oldest queued chunks are dropped. Defaults to effectively unlimited.
- Imperative methods:
  - `addTextChunk(text, speed?, instant?)` — append a chunk, optionally overriding `speed` for that chunk, or rendering it instantly.
  - `addInstantTextChunk(text)` — append a chunk that appears immediately without animation.
  - `clearQueue()` — drop any chunks waiting to be typed.
- Events:
  - `typing-complete` (`onTypingComplete`) — fires when the typewriter finishes typing all queued content. Detail: `{ finalContent: string }`.
  - `change` (`onChange`) — fires when the slotted content changes. Detail: `{ content: string, isTyping: boolean }`.

### Limitations

- The animation continues even when the containing tab is in the background.
- Speed updates while the typewriter is in the middle of processing queued chunks are ignored until the queue empties; the new speed applies to subsequent animations only.

## Accessibility

### Built-in features

- The component renders an `aria-live="polite"` region around the animated text so screen readers receive an announcement when content settles, rather than per character.
- `aria-busy` is set on the container while typing is in progress and cleared when the animation completes, letting assistive technologies know when the content is stable.
- The internal `mdc-text` element exposes the full target text via `aria-label`, so users of assistive technologies receive the complete message instead of the partial characters drawn on screen.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Container (`[part="container"]`) | `aria-live` | `polite` |
| Container | `aria-busy` | `true` while typing, `false` once `typing-complete` fires |
| Internal `mdc-text` | `aria-label` | The full target text (so AT reads the whole message, not the per-character animation) |

### Implementation requirements

#### General

- When the typewriter is part of a larger live region or replaces existing content, ensure surrounding `aria-live` settings don't cause double announcements.
- If the animated message is critical for understanding the UI, also expose it in a non-animated form (such as the underlying text in a transcript) so users who disable animations still receive it.

### Notes

- Because the visible text is animated, on-screen text and the announced text can briefly differ; the `aria-label` on the internal text element is the source of truth for assistive technology.
