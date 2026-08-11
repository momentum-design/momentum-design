---
title: Accessibility
summary: Cross-cutting accessibility contract for products built with Momentum — the WCAG 2.2 AA baseline, what components handle for you, and what every consumer must supply.
tier: 1
---

**Primary audience:** Product design and engineering.

## Purpose and scope

This is the design-system-wide accessibility contract. It sets the baseline every product built with Momentum is expected to meet, explains the division of responsibility between the components and the teams that use them, and points to the canonical source for anything owned at a narrower tier.

It covers:

- The POUR principles and the range of people we build for
- The conformance target and what it means in practice
- The shared responsibility model — component versus consumer
- Cross-cutting requirements: keyboard, focus, semantics, contrast, motion, media, cognitive load, targets, zoom, and honoring user preferences
- Building blocks Momentum ships to help you meet the bar

It does **not** restate:

- Per-component accessibility behavior — that lives in each component's Tier 3 topic under its **Accessibility** section.
- Writing for accessibility (plain language, alt text intent, inclusive terms) — that lives in [content guidelines](./content-guidelines.md).
- Color contrast values and theme behavior — those are owned by the Tier 2 token guidelines for [color](../packages/assets/tokens/knowledge-base/color.md) and [theming](../packages/assets/tokens/knowledge-base/theming.md).

## Principles

Accessibility is not something we bolt on at the end — inaccessible products are broken products, and accessible design is everyone's responsibility, from UX and content through engineering to support. Momentum's approach rests on the four WCAG principles (**POUR**):

- **Perceivable** — information and UI are available to at least one of a person's senses; nothing depends on a single mode of perception.
- **Operable** — every interaction and navigation works through a variety of inputs, not just a mouse.
- **Understandable** — content and behavior are clear and predictable.
- **Robust** — the UI exposes itself correctly to assistive technologies.

### Who we build for

Design for the full range of human ability rather than a single "typical" user. Keep these lenses in mind, and remember each also helps people without a permanent disability (bright sunlight, a noisy room, a broken arm, an aging eye):

- **Vision** — blind users (screen reader, Braille), low-vision users (magnification, high contrast, large text, 400% zoom), and color-blind users.
- **Hearing** — Deaf and hard-of-hearing users who rely on captions and transcripts.
- **Mobility** — users who navigate by keyboard, switch, or voice rather than a pointer.
- **Cognitive** — users affected by memory, attention, reading, or sensitivity to motion and flashing content.

This topic is the practical contract for building to them.

## Conformance target

**Momentum targets [WCAG 2.2 Level AA](https://www.w3.org/TR/WCAG22/).** Level AA includes every Level A criterion. Treat AA as the minimum bar for shipping, not an aspiration.

Using Momentum components does not, on its own, make a product accessible. Components remove whole classes of defects, but accessibility is a property of the finished experience — the composition, content, and context you build around them. A page assembled entirely from accessible components can still fail AA through poor focus order, missing labels, or insufficient contrast in custom surfaces.

## Shared responsibility

Every component topic splits its accessibility contract into two halves. Read them the same way here.

### What components handle

Momentum designs, engineers, and tests its components against WCAG 2.2 A and AA, so they manage their own internal accessibility and you don't re-implement it each time:

- **Semantics and ARIA** — roles, states, and properties on their internal DOM (for example a button reflecting pressed state, an expandable surface managing `aria-expanded`). Do not override component-managed ARIA unless the component documents an attribute for it.
- **Keyboard interaction** — the expected key model for the control (activation, arrow navigation within composite widgets, dismissal).
- **Focus management** — moving focus into and out of overlays, and restoring it on close.
- **State reflection** — disabled controls are removed from the tab order and expose the correct disabled semantics rather than only looking grayed out.

### What you must supply

The component cannot know your content or context. You are responsible for:

- **Accessible names** — every interactive element needs a name. Prefer a visible label; use `aria-label` or `aria-labelledby` when the control is icon-only or its visible text is insufficient. See each component's **Labeling** guidance.
- **Correct composition and order** — DOM order that matches the visual and reading order, correct heading hierarchy, and grouping of related controls.
- **Meaningful content** — link text that describes its destination, alt text that conveys intent, and error messages that say what happened and what to do next (see [content guidelines](./content-guidelines.md)).
- **Sufficient contrast in your own surfaces** — anything you style outside the components, using the semantic [color tokens](../packages/assets/tokens/knowledge-base/color.md).
- **Testing the assembled experience** — components pass in isolation; your screen is what users actually meet.

## Cross-cutting requirements

### Keyboard

Everything operable with a pointer must be operable with a keyboard, in a logical order, with no traps (WCAG 2.1.1 Keyboard, 2.1.2 No Keyboard Trap).

- Do not attach behavior to hover or pointer events without an equivalent keyboard path.
- Preserve a sensible tab order by ordering the DOM correctly; avoid positive `tabindex` values.
- If you build a composite widget from primitives, implement the expected arrow-key model yourself — a single tab stop with roving `tabindex` moving focus between items (see [Interaction patterns](./interaction-patterns.md#moving-within-a-composite)). This "focusgroup" pattern is unrelated to `mdc-spatialnavigationprovider`: that provider is a single, app-root context for a different input modality — directional (D-pad) navigation from a TV remote or game controller — not a per-widget or per-grid arrow-key helper.

### Focus

- **Visible focus** — never remove focus outlines without an equivalent, sufficient replacement (WCAG 2.4.7 Focus Visible).
- **Focus order** — the order must preserve meaning and operability (WCAG 2.4.3).
- **Not obscured** — a focused element must not be hidden behind sticky headers, toolbars, or overlays (WCAG 2.4.11 Focus Not Obscured).
- **Trapping and return** — modal surfaces must trap focus while open and return it to the trigger on close. Momentum's overlay components manage this; when you build a custom overlay, use `mdc-focustrap`.

### Semantics and status

- Use the element that carries the right role; do not paint a `div` to look like a control it isn't.
- Custom controls must expose name, role, and value to assistive technology (WCAG 4.1.2 Name, Role, Value).
- Announce important, non-focus-stealing status changes through a live region (WCAG 4.1.3 Status Messages). Momentum ships `mdc-screenreaderannouncer` for polite and assertive announcements — reach for it instead of moving focus to make a message heard.

### Contrast

- Text meets a **4.5:1** contrast ratio (3:1 for large text) — WCAG 1.4.3.
- Non-text UI (control boundaries, focus indicators, meaningful icons and graphics) meets **3:1** — WCAG 1.4.11.
- Do not encode meaning in color alone; pair it with text, icon, or shape (WCAG 1.4.1 Use of Color). Momentum's semantic color tokens are designed to meet contrast within supported themes — verify any custom pairing you introduce. Token detail is owned by the [color](../packages/assets/tokens/knowledge-base/color.md) guidelines.

### Motion

- Respect the user's reduced-motion preference for non-essential animation (WCAG 2.3.3 Animation from Interactions). Prefer motion driven by Momentum's [motion tokens](../packages/assets/tokens/knowledge-base/motion.md), which are designed with this in mind.
- Never use content that flashes more than three times per second (WCAG 2.3.1).
- Auto-updating, moving, or auto-playing content longer than five seconds needs a pause, stop, or hide control (WCAG 2.2.2 Pause, Stop, Hide).

### Media alternatives

- Provide **captions** for audio that carries meaning — both pre-recorded and live (WCAG 1.2.2 Captions, 1.2.4 Captions (Live)).
- Provide a **transcript** for audio-only content, and **audio description** or a media alternative for meaningful video (WCAG 1.2.1, 1.2.3, 1.2.5).
- Never convey information by sound alone; pair every audio cue with a visible one.

### Cognitive load

- Keep task-critical information visible; do not depend on the user holding it in working memory across steps.
- Avoid auto-playing animation or video, and give a way to pause, stop, or hide anything that moves (see [Motion](#motion), WCAG 2.2.2).
- Present tasks in a clear, linear order and keep language plain — see [content guidelines](./content-guidelines.md) for readability and vocabulary.

### Target size and pointer

- Interactive targets are at least **24×24 CSS px**, or have sufficient spacing (WCAG 2.5.8 Target Size (Minimum)). Choose component sizes accordingly, especially for icon-only and touch contexts.
- Provide single-pointer alternatives to path-based and multipoint gestures (WCAG 2.5.1 Pointer Gestures).
- Provide a simple tap or click alternative to any dragging movement (WCAG 2.5.7 Dragging Movements).
- Where a control has a visible text label, its accessible name must contain that text (WCAG 2.5.3 Label in Name).

### Reflow and zoom

- Content reflows to a **320 CSS px** width without loss of information or two-dimensional scrolling (WCAG 1.4.10 Reflow).
- Text can be resized to **200%** and spacing overridden (line height, letter, word, paragraph spacing) without clipping or overlap (WCAG 1.4.4, 1.4.12). Build with relative units and flexible layout; see [responsive design](./responsive-design.md).

### Honoring user preferences

Respect system-level settings rather than overriding them — many people depend on them to use their device at all:

- **Reduced motion** — reduce or remove non-essential animation (see [Motion](#motion)).
- **High contrast / forced colors** — do not break layout or drop content when the OS forces a high-contrast palette.
- **Increased text size and zoom** — support OS text scaling and browser zoom without clipping (see [Reflow and zoom](#reflow-and-zoom)).
- **Captions and other assistive settings** — honor the platform preference wherever it applies.

### Forms

- Every field has a programmatically associated label and any needed instructions (WCAG 3.3.2). Momentum's form-field components wire label, description, and error associations — use them rather than free-floating inputs.
- Identify errors in text, not color alone, and offer a correction where you can (WCAG 3.3.1, 3.3.3).
- Do not force users to re-enter information they already provided in the same process (WCAG 3.3.7 Redundant Entry).
- Do not rely on a cognitive test (like transcribing a code) as the only authentication step (WCAG 3.3.8 Accessible Authentication).

### Consistency and help

- Keep repeated components (navigation, help) in a consistent order and place across pages (WCAG 3.2.3, 3.2.6).
- Do not trigger a change of context on focus or input alone (WCAG 3.2.1, 3.2.2).

## Testing baseline

Automated tooling catches roughly a third of issues. Treat these manual checks as non-negotiable before shipping a flow:

- [ ] **Keyboard-only pass** — reach and operate every control; focus is always visible and never trapped or lost.
- [ ] **Screen-reader spot-check** — names, roles, states, and status messages are announced; reading order matches the visual order.
- [ ] **Zoom and reflow** — usable at 400% zoom / 320px width and at 200% text size.
- [ ] **Contrast** — text and non-text UI meet their ratios in every supported theme.
- [ ] **Media** — meaningful audio and video carry captions and a transcript.
- [ ] **User preferences** — usable with reduced motion, high-contrast / forced colors, and increased text size.

## Related topics

- [Content guidelines](./content-guidelines.md) — writing for accessibility and inclusion.
- [Interaction patterns](./interaction-patterns.md) — the shared keyboard, focus, and overlay model.
- [Responsive design](./responsive-design.md) — reflow, zoom, and adapting to device class.
- Color and theming tokens — [color](../packages/assets/tokens/knowledge-base/color.md), [theming](../packages/assets/tokens/knowledge-base/theming.md).
- Each component's Tier 3 topic — the authoritative accessibility contract for that component.
