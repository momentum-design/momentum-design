# Screen Reader

## VoiceOver: Select Component & Shadow DOM Observations

- When using the select component, VoiceOver on macOS reveals that:
  - The `combobox` role can locate its associated `listbox` even if they exist
    in different shadow roots.
  - The `listbox` role, however, cannot find its child `option` elements if
    those options are inside its own shadow root.
  - Adding `aria-owns` does not resolve this, as it does not work across shadow
    root boundaries.

### Implementation Update

To address this, the select component now considers all options provided through
the default slot and wraps them inside a `listbox`. This wrapping is performed
within the `connectedCallback` lifecycle method, ensuring that screen readers
can properly recognize the relationship between the listbox and its options.

### Form-Associated Custom Elements: Native Behavior & Event Suppression

When a custom element is form-associated, it inherits native form control
behavior. This includes automatic suppression of user interaction events when
the element is disabled. That said, you do not need to manually prevent these
events — the browser enforces this behavior automatically, just like it does for
native elements like <input disabled> or <button disabled>.

# Styling

## Focus ring: inner blue fringe

### Symptom

The focus ring shows a thin blue fringe on the inner edge of the black inner
ring. It is most visible on transparent-background elements with a large radius
(e.g. a tertiary button with a pill radius), at the curved corners. Straight,
pixel-aligned edges are clean.

### Where the ring is defined

`focusRingBoxShadow` in `src/utils/styles/index.ts` is three stacked, spread-only
`box-shadow` layers driven by the `--mdc-focus-ring-*` variables: inner (opaque
black/white), middle (opaque blue) and outer (blue at 35% alpha).
`hostFocusRingStyles()` applies it to the host or a child; calendar, slider and
option use `focusRingBoxShadow` directly. The `forced-colors` branches use
`outline` and are unaffected.

### Cause

Chromium (Skia) paints each shadow layer as its own anti-aliased (AA) draw,
clipped out of the element's border box. At an AA edge pixel the border box
covers only part of the pixel, so every layer has the same partial alpha `a`
there. They composite as `inner*a + (1-a) * (middle*a + (1-a) * outer*a)`, so
the blue layers show through below the black one (blue weight `a(1-a)`, at most
0.25). A shadow layer cannot have a hole, so the lower layers always reach the
edge pixel.

Blink's `box_painter_base.cc` (`ClipToBorderEdge`) insets the clip-out by 1 css
px when the background is opaque, so the shadows paint under the box and the
background hides the edge. With a transparent background the clip-out sits
exactly on the border-box edge and the fringe is visible. The same artifact is
reported for Tailwind's `ring-offset`
([tailwindlabs/tailwindcss#7107](https://github.com/tailwindlabs/tailwindcss/issues/7107)).

### Mitigation (applied)

Repeat the inner layer 8 times with **half** the inner spread, between the inner
and middle layers:

```css
0 0 0 var(--mdc-focus-ring-inner-width) var(--mdc-focus-ring-inner-color),
/* x8 */ 0 0 0 calc(var(--mdc-focus-ring-inner-width) / 2) var(--mdc-focus-ring-inner-color),
0 0 0 var(--mdc-focus-ring-middle-width) var(--mdc-focus-ring-middle-color),
0 0 0 var(--mdc-focus-ring-outer-width) var(--mdc-focus-ring-outer-color)
```

- Extra layers overdraw the blue that bleeds at the inner edge. Their own AA
  edge sits under the opaque top inner layer, so the ring's outer black/blue
  boundary stays pixel-identical (at 2x).
- The extra layers must be smaller than the inner width. Full-width duplicates
  shift the outer boundary (300+ pixels, up to 119 levels) and change the look.
- Overdraw reduces the leak but never removes it: the residual shrinks roughly
  like `(1/(k+1)) * (k/(k+1))^k` for `k` copies.
- Because it lives in `focusRingBoxShadow`, it applies to every user of the
  util.
- Impact is small: the shadow is only applied while an element is focused, and
  only one element has focus at a time. Unfocused elements pay nothing, so the
  cost does not scale with the number of components on the page. When focus
  moves, one element gets 8 extra spread-only shadow fills (11 layers instead of
  3) to paint. The only way to get more than one ring at once is nested
  `:focus-within` parents, which is still a handful. The paint cost was not
  measured, it is expected to be negligible.

Measured on a model of the ring (blue excess `B - R` in edge pixels, 2x; max /
mean):

| Layers added (half spread) | Dark        | Light       |
| -------------------------- | ----------- | ----------- |
| none (previous ring)       | 45 / 4.05   | 57 / 5.13   |
| +2                         | 22 / 1.38   | 26 / 1.73   |
| +4                         | 15 / 0.73   | 18 / 0.93   |
| +8 (used)                  | 8 / 0.30    | 14 / 0.37   |
| +16                        | 7 / 0.11    | 14 / 0.14   |

At 1x the trend is the same, but the half-spread variants change 10-24 pixels
outside the edge zone by at most 12 levels.

### Alternatives considered

| Option                                              | Why not                                                                                       |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| Full-width duplicates of the inner layer            | Changes the outer ring boundary.                                                              |
| Opaque `background-color`                           | Fixes it in Chrome, not in Firefox (per the Tailwind thread), and breaks transparent buttons. |
| Inset shadow or negative-offset outline for inner   | Changes inner pixels.                                                                         |
| `outline` for the middle ring                       | Untested; only one outline per element and `forced-colors` already uses it.                   |
| `::after` ring with real borders                    | Would remove the leak, but drops the 3-layer `box-shadow` approach.                           |
| Wait for a Chromium fix                             | Nothing in Blink suggests a planned change.                                                   |

### Not verified

- Real `mdc-button` in Storybook (the measurements used a model with the same
  border, radius and shadow values), Firefox, Safari and GPU-composited output.
- Pixel diffs of the existing focus-ring e2e screenshots, e.g.
  `src/stories/FocusRing/subcomponent-focusring.e2e-test.ts`.
- Numbers come from Blink's CPU rasterisation (Chromium 150), measured by
  drawing the ring into a canvas through SVG `foreignObject`.
