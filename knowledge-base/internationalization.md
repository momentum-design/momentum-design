---
title: Internationalization
summary: Building Momentum UIs that work across languages and locales — bidirectional and RTL layout, text expansion, locale-aware formatting, and directional iconography.
tier: 1
---

**Primary audience:** Product design and engineering.

## Purpose and scope

Momentum products are used in many languages and locales. This topic covers the **structural and layout** side of internationalization — the decisions that let the same UI serve left-to-right and right-to-left languages, expand for longer translations, and present locale-appropriate data.

It covers:

- Bidirectional and right-to-left (RTL) layout
- Number direction and technical text in RTL
- Designing for text expansion
- Locale-aware formatting of dates, numbers, and time
- Directional iconography
- Avoiding hard-coded, untranslatable content

It does **not** restate the **writing** side of localization — active voice, avoiding idioms and unnecessary abbreviations, and writing for non-native speakers — which is owned by [content guidelines](./content-guidelines.md#localization). Read both when building for a global audience.

## Bidirectionality and RTL

Roughly a fifth of the world reads right to left. Design for direction from the start; retrofitting is expensive.

- **Drive direction from `dir`.** Set `dir="rtl"` (or `ltr`) on a container and let layout follow, rather than hard-coding sides.
- **Use logical CSS properties.** Prefer `margin-inline-start` over `margin-left`, `inset-inline-end` over `right`, and `text-align: start` over `left`. Logical properties flip automatically with `dir`.
- **Mirror layout, not everything.** Reading order, navigation, progress, and alignment mirror in RTL. Content that is not directional — logos, most media, playback timelines, and numbers within a phrase — does not.
- **Distinguish navigational from literal-direction controls.** Mirror controls that move through content in reading order (a back button points *right* in RTL). Do **not** mirror a control that refers to a fixed physical or on-screen direction (a control that explicitly means "to the right" always points right).
- **Position, don't flip, imagery.** Photographs, illustrations, and artwork are not mirrored, but their *placement* mirrors (an image anchored top-left moves to top-right).
- **Test overlays in RTL.** Popover anchoring, menu alignment, and drawer side all depend on direction; verify them with the [interaction patterns](./interaction-patterns.md#overlays-and-dismissal) in mind.
- **Modern frameworks handle much of LTR→RTL automatically** (logical properties, `dir` inheritance) — but treat that as a starting point, not a guarantee. Icons, imagery, numbers, and complex layouts routinely need manual correction.
- **Involve a native speaker** of each RTL language you support to validate that the result reads naturally — mirroring alone does not make an interface correct.

## Numbers and direction

- **Keep numbers themselves LTR.** Phone numbers, alphanumeric codes (e.g. `A58B265`), and technical identifiers read left-to-right and stay identical in RTL.
- **Reverse order, not digits.** For sequences that convey progress or a counting direction, mirror the *order* of the items to match reading direction — never flip the digits within a number.
- **Never display URLs or other technical text in RTL** — keep them LTR, and do not mirror slashes (`/`, `//`).

## Design for text expansion

Translated strings are frequently longer than English — commonly 20–30% longer in German or Russian, and much longer for short labels.

- **Never fix a control's width to its English label.** Let buttons, tabs, chips, and menu items grow, wrap, or truncate gracefully with an accessible full value.
- **Give labels room to wrap** rather than clipping; reserve vertical space.
- **Give RTL scripts room to breathe.** Some RTL-compatible typefaces render visually smaller than their Latin equivalents; verify legibility at your accessible minimum size and consider a slightly larger type size for RTL locales.
- **Avoid text baked into images** — it can't be translated or resized. Use real text over the top instead (see [content guidelines](./content-guidelines.md#localization)).
- Expansion interacts with the reflow and zoom bar in [responsive design](./responsive-design.md#the-reflow-and-zoom-bar) — a layout that reflows and zooms cleanly usually absorbs expansion too.

## Locale-aware formatting

Do not assemble dates, times, numbers, or currency by hand. Format them for the user's locale (for example with the platform's `Intl` APIs) so separators, ordering, numerals, and calendars are correct.

- **Dates and times** — order (D/M/Y vs M/D/Y), 12- vs 24-hour, and month names are locale-specific. For the house **format conventions** (which format to show in which space), follow [content guidelines](./content-guidelines.md#formats); for the **locale mapping**, rely on locale-aware formatting rather than manual strings.
- **Numbers and currency** — decimal and grouping separators differ by locale; currency symbol and placement vary.
- **Collation and search** — sort and compare using locale-aware collation, not raw code-point order.
- **Time zones** — store in a neutral reference (such as UTC) and present in the user's zone.
- **Calendar systems** — many locales use the Gregorian calendar, but others use the Hijri, Persian, or Hebrew calendars. Select the calendar for the target locale rather than assuming Gregorian, and let locale-aware formatting drive it.
- **Week start and working week** — the first day of the week and the working week vary (for example, a Sunday–Thursday working week with a Friday–Saturday weekend). Do not hard-code Monday (or Sunday) as the week start.

## Directional iconography

Icons fall into three buckets in RTL: **mirror**, **keep as-is**, or **redraw**. Use `mdc-iconprovider` to configure the icon set, and follow the [icon guidelines](../packages/assets/icons/knowledge-base/icons.md) for which icons are directional.

**Mirror in RTL:**

- **Directional and navigational icons** — arrows, chevrons, back/forward, and progress indicators point the other way so flow matches reading order.
- **Forward-motion icons** (for example a bicycle or speaker) reorient so their forward direction points left.
- **Reading and text-direction icons** — books, journals, and paper flip to indicate the direction text is read.

**Do not mirror:**

- **Bi-directional icons and universal signs** — checkmarks, brand marks, and logos.
- **Circular-motion icons** — refresh, sync, loading.
- **Time icons** and icons already understood as non-directional.
- **Media and playback controls, and volume sliders** — these follow universal hardware conventions and stay LTR.
- **Real-world objects** — unless they indicate direction or right-handedness.

**Right-handedness:** most of the world is right-handed, so tool icons (a search magnifier, pen, pencil, or mug) should read as grippable by the right hand — except when mixed with icons that explicitly point in a direction.

**Redraw rather than flip when:**

- **An icon contains text** — keep the text legible (LTR if needed); consider a localized glyph using an appropriate Arabic or Hebrew character.
- **A slash or disabled overlay is present** — the slash does not flip, but the icon beneath it may, which means redrawing the composite.
- **A badge or mini-icon modifies meaning** — badges stay on the right (top or bottom); confirm the flip still preserves both meaning and visual balance.

## Avoid untranslatable content

- **No concatenated sentences.** Building a sentence from fragments and variables breaks grammar, gender, and pluralization in other languages. Use complete, parameterized strings.
- **No layout-dependent phrasing.** Don't write copy that relies on a UI element's position (see [content guidelines](./content-guidelines.md#localization)).
- **Externalize all user-facing strings** so they can be translated; never hard-code display text in component markup.

## Related topics

- [Content guidelines](./content-guidelines.md) — writing and copy localization.
- [Responsive design](./responsive-design.md) — reflow and zoom, which text expansion depends on.
- [Icon guidelines](../packages/assets/icons/knowledge-base/icons.md) — directional icons and icon configuration.
- [Accessibility](./accessibility.md) — language-of-page and readability expectations.
