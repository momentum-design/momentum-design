---
title: Motion Provider
summary: Usage and guidelines for mdc-motionprovider — the wrapper that scopes Momentum motion and animation tokens and controls token-based motion for a subtree.
tier: 3
component: motionprovider
---

## Overview

The motion provider applies `mds-motion` and `mds-animation` scope classes to its host so `--mds-motion-*`, `--mds-transition-*`, and `--mds-animation-*` cascade into descendant components. Use it to turn token-based motion on or off from one attribute instead of managing scope classes on `<body>` yourself.

### When to use

- Use `mdc-motionprovider` near the application root when you want a single control for token-based motion.
- Use `motion="system"` so the subtree follows the OS `prefers-reduced-motion` setting.
- Use `motion="reduce"` when your app settings disable animation.

### When not to use

- Do not use `mdc-motionprovider` to gate JavaScript-driven or hardcoded CSS animation — only motion that consumes Momentum motion/animation tokens is affected.
- Do not use `mdc-motionprovider` for theme tokens — use `mdc-themeprovider`.
- Do not nest multiple motion providers with different modes — v1 assumes one global motion preference per app.

## Guidelines

### Developer usage

```tsx
import "@momentum-design/components/dist/components/motionprovider/index.js";
import '@momentum-design/tokens/dist/css/motion/complete.css';
import '@momentum-design/tokens/dist/css/motion/animation.css';
```

```html
<mdc-motionprovider motion="system">
  <mdc-themeprovider themeclass="mds-theme-stable-darkWebex">
    <!-- app -->
  </mdc-themeprovider>
</mdc-motionprovider>
```

When using the provider, remove `mds-motion` and `mds-animation` from `<body>`. Leaving them on `<body>` bypasses provider gating because token variables remain defined globally.

### Property/Attribute details

| Option | Intent |
| --- | --- |
| `motion="full"` | Apply motion scope classes (default). |
| `motion="reduce"` | Remove motion scope classes; token-based transitions do not run. |
| `motion="system"` | Apply classes when `prefers-reduced-motion: no-preference`; remove them when OS requests reduced motion. Updates at runtime when the OS setting changes. |

Invalid values are ignored; the previous valid value is kept.

### Limitations

- Token-based motion only — components with hardcoded `transition:` / `@keyframes` or JS-driven animation (Lottie, typewriter, backdrop timing) are unaffected.
- No Lit context in v1 — read and write the `motion` attribute from app code.
- OS reduced motion also applies via token CSS `@media (prefers-reduced-motion: reduce)` even when scope classes are present (legacy `<body>` setups).

## Accessibility

The provider is non-visual and adds no roles or focusable elements. Pair `motion="system"` with app settings that map to `reduce` when users disable animation in your product.

## Related components

| Component | Relationship |
| --- | --- |
| `mdc-themeprovider` | Sibling provider for theme classes; wrap inside or outside based on app structure — motion provider is commonly the outer wrapper. |
| `mdc-responsivesettingsprovider` | Parallel provider for responsive layout signals, not motion. |

See [Motion](../../../../../assets/tokens/knowledge-base/motion.md) for token details.
