---
title: Typewriter
summary: Usage, guidelines, and accessibility for the mdc-typewriter component — an animated text component that progressively reveals its content.
tier: 3
component: typewriter
---

## Overview

The typewriter reveals text one character at a time to give content a live, in-progress feel — most useful for streamed or assistant-generated output. It renders through `mdc-text`, so it shares the same typography, and it can keep growing after first render as new content arrives.

### When to use

- Use `mdc-typewriter` to stream model or assistant output so text appears progressively rather than all at once.
- Use `mdc-typewriter` to append content after first render, building a chat-style transcript over time.
- Use `mdc-typewriter` to animate the arrival of a short status or notification message that should draw attention.

### When not to use

- Do not use `mdc-typewriter` for content that should appear immediately. Use `mdc-text` instead.
- Do not use `mdc-typewriter` for long, dense content where the animation slows comprehension. Use `mdc-text` instead.
- Do not use `mdc-typewriter` when you need a titled container or chrome around the message. Use `mdc-toast` or `mdc-banner` instead.

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

### Content guidance

- Keep streamed messages short and scannable; the reveal animation adds time on top of the reader's own reading time.
- Write copy that reads correctly at every intermediate frame — avoid leading punctuation or markup that looks broken mid-reveal.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `type` | Text style forwarded to the internal `mdc-text`. Default `body-large-regular`. |
| `tagname` | HTML tag for the internal text element. Default `p`; accepts any tag `mdc-text` supports. |
| `speed` | Reveal pace in milliseconds per character: presets `very-slow` (240), `slow` (120), `normal` (60, default), `fast` (20), `very-fast` (1), or a numeric string clamped to a 10ms minimum. |
| `max-queue-size` | Maximum chunks that can be queued via the imperative methods before the oldest are dropped. Default effectively unlimited. |

Imperative methods:

- `addTextChunk(text, speed?, instant?)` — append a chunk, optionally overriding `speed` for it or rendering it instantly.
- `addInstantTextChunk(text)` — append a chunk that appears immediately without animation.
- `clearQueue()` — drop any chunks still waiting to be typed.

Events:

- `typing-complete` (`onTypingComplete`) — fires when all queued content has been typed. Detail: `{ finalContent: string }`.
- `change` (`onChange`) — fires when the slotted content changes. Detail: `{ content: string, isTyping: boolean }`.

### Limitations

- **Runs in background tabs** — the animation keeps typing even when its tab is not visible; pause it yourself if that matters.
- **Speed locks during a queue** — a `speed` change mid-queue is ignored until the queue drains and applies to later chunks only.
- **Text only** — the component animates text and provides no container or chrome; wrap it in a surface if you need one.

## Accessibility

### Built-in features

- The component renders an `aria-live="polite"` region around the animated text so screen readers receive one announcement when content settles, rather than one per character.
- `aria-busy` is set on the container while typing is in progress and cleared when the animation completes, letting assistive technologies know when the content is stable.
- The internal `mdc-text` exposes the full target text via `aria-label`, so assistive technology receives the complete message instead of the partial characters on screen.

#### Internal ARIA managed by the component

| Element | Attribute | Value |
| --- | --- | --- |
| Container (`[part="container"]`) | `aria-live` | `polite` |
| Container | `aria-busy` | `true` while typing, `false` once `typing-complete` fires |
| Internal `mdc-text` | `aria-label` | The full target text (so AT reads the whole message, not the per-character animation) |

### Implementation requirements

#### General

- When the typewriter sits inside a larger live region or replaces existing content, check that surrounding `aria-live` settings don't cause double announcements.
- If the animated message is essential to understanding the UI, also expose it in a non-animated form (such as the underlying transcript text) for users who disable animations.

### Notes

- Because the visible text is animated, on-screen text and the announced text can briefly differ; the `aria-label` on the internal text element is the source of truth for assistive technology.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-text` | The static typography primitive the typewriter renders through and the right choice when no animation is needed. |
| `mdc-toast` | For a transient message that needs its own surface and chrome. |
| `mdc-banner` | For a persistent in-page message that needs a container. |
