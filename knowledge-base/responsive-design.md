---
title: Responsive design
summary: How to build adaptive UIs with Momentum — the consumer-owned breakpoint model, the shared responsive context provider, and the reflow and zoom bar every layout must clear.
tier: 1
---

**Primary audience:** Product design and engineering.

## Purpose and scope

Momentum is deliberately unopinionated about page layout: it ships components, not a grid or a fixed set of breakpoints. This topic explains the responsive model that does exist — a shared context that lets components adapt — and the layout responsibilities that stay with you.

It covers:

- Where responsibility for responsiveness sits
- The shared responsive context (`mdc-responsivesettingsprovider`)
- Adapting overlays and dialogs to small screens
- The reflow, zoom, and text-spacing bar every layout must meet

It does **not** define spacing scales or breakpoint pixel values — Momentum does not ship those as tokens, and you should not hard-code invented ones.

## The model: components adapt, you decide when

Momentum does **not** detect screen size for you, and it does **not** prescribe breakpoints. Instead:

- **You own breakpoint detection.** Decide device class from whatever signal fits your app — CSS media queries, container queries, or device detection — and choose the breakpoint values that suit your product.
- **Components can read a shared signal, when you opt in.** For the narrow set of cases that need it (see [Shared responsive context](#shared-responsive-context) below), a shared context lets components adapt without each one re-implementing breakpoint logic. Most layouts don't need this at all — `rem`-based sizing already covers the common case.
- **You own page layout.** Grid, columns, and spacing are yours to build with standard CSS. Use flexible, relative units so the result reflows and zooms cleanly (see below).

This keeps the system framework-agnostic and lets one set of components serve products with very different layout needs.

## Shared responsive context

`mdc-responsivesettingsprovider` supplies a shared responsive-settings context to every descendant that consumes it. Wrap a subtree — typically near the app root — and update its attributes from **your** breakpoint logic. Descendants then adapt without each one re-detecting screen size. Consumer should add it only when for example:

- They want to render "mobile" like UI on a big screen.
- They want to render some smaller part of the app differently.

Most of the app should not use it at all. The rem based design should handle most of the responsive use cases.

```html
<mdc-responsivesettingsprovider
  media="mobile"
  popover-positioning="centered"
  force-fullscreen-dialog
>
  <!-- app content -->
</mdc-responsivesettingsprovider>
```

- **`media`** — the current device class (for example `mobile`); defaults to `unknown`, so components keep their default behavior until you set it.
- **`popover-positioning`** — how popovers position themselves, for example anchored near the trigger or centered on small viewports.
- **`force-fullscreen-dialog`** — when set, descendant dialogs render fullscreen, which suits small screens.

CSS can also target the provider's attributes (for example `mdc-some-component[media="mobile"] { … }`) when you need finer styling. See the [`responsivesettingsprovider` topic](../packages/components/src/components/responsivesettingsprovider/knowledge-base/responsivesettingsprovider.component.md) for the full attribute reference.

**Most of an app should not use this provider at all.** Momentum's `rem`-based sizing already handles the majority of responsive needs without it. Reach for `mdc-responsivesettingsprovider` only for the narrower cases it exists for — for example, intentionally rendering a "mobile"-style presentation on a large screen, or making one specific, smaller part of the app respond differently from the rest — not as a default wrapper for general responsive behavior. It is not a general-purpose media-query helper — components that don't consume the context are unaffected, and it does not carry theme tokens (use `mdc-themeprovider`) or icon configuration (use `mdc-iconprovider`).

## Adapting overlays to small screens

Layered surfaces are where "desktop-first" layouts most often break on mobile:

- **Popovers and menus** — switch to centered positioning on small screens via the provider so they don't overflow a narrow viewport.
- **Dialogs** — prefer fullscreen on small screens so the task has room and controls stay reachable; drive this with `force-fullscreen-dialog`.
- **Touch targets** — small screens are usually touch. Choose component sizes that keep targets at least 24×24 CSS px (see [accessibility](./accessibility.md#target-size-and-pointer)).

The shared interaction rules for these surfaces — how they open, dismiss, and return focus — are in [interaction patterns](./interaction-patterns.md#overlays-and-dismissal).

## The reflow and zoom bar

Responsiveness is also an accessibility requirement, not only a device concern. Every layout must clear this bar:

- **Reflow to 320 CSS px** without loss of content or two-dimensional scrolling (WCAG 1.4.10). Build single-column fallbacks; avoid fixed widths that force horizontal scrolling.
- **Zoom to 400%** and **resize text to 200%** without clipping or overlap (WCAG 1.4.4). Use relative units (`rem`, `em`, `%`, `ch`) for type and containers.
- **Text-spacing overrides** — line height, letter, word, and paragraph spacing can be increased without breaking layout (WCAG 1.4.12). Avoid fixed-height text containers and clipped overflow on text.
- **Reserve space for async content** so it doesn't shift the layout when it loads; pair with the loading patterns in [interaction patterns](./interaction-patterns.md#loading).

## Related topics

- [Accessibility](./accessibility.md) — the reflow, zoom, and target-size requirements in full.
- [Interaction patterns](./interaction-patterns.md) — how overlays and states behave as layouts adapt.
- [`responsivesettingsprovider`](../packages/components/src/components/responsivesettingsprovider/knowledge-base/responsivesettingsprovider.component.md) — the provider's attribute reference.
