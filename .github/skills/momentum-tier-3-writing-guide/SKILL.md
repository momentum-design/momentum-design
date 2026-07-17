---
name: momentum-tier-3-writing-guide
description: 'Writing guide for the body of Tier 3 (component) topics in the Momentum Design knowledge base. Use when drafting or editing a component topic file so each section guides use rather than describes the component. Complements the momentum-contributing-to-knowledge-base workflow, which owns tier selection, frontmatter, validation, and indexing.'
---

# Tier 3 Writing Guide

This skill defines **how to write the body** of a Tier 3 (component) knowledge-base
topic so it *guides use* rather than *describes the component*.

It is the writing companion to the
[`momentum-contributing-to-knowledge-base`](../momentum-contributing-to-knowledge-base/SKILL.md)
skill, which owns the end-to-end workflow (tier selection, search, frontmatter,
validation, indexing, human review). Use this skill only once you have reached
the body-writing step for a Tier 3 topic.

## Worked example

For a complete, well-formed Tier 3 topic that applies the guidance below, use
[`alertchip.component.md`](../../../packages/components/src/components/alertchip/knowledge-base/alertchip.component.md)
as a reference: it fills every section with specific, component-scoped guidance,
uses `mdc-` tags in its examples, integrates accessibility throughout, and gives
each related component a one-line distinction.

## Source of truth for structure

The heading hierarchy — which sections exist, their order, nesting, and which
are required — is defined once in
[`body.config.json`](../../../config/knowledge-base/content/body.config.json).
**Read that file directly before drafting or editing**, and do not invent new
section or sub-section headings without first adding them to `body.config.json`
and calling that out to the user.

This skill does not restate that structure; it describes the *quality* of the
prose that fills it.

## Sections pending guidance

Some sections below do not yet have dedicated writing guidance — they carry a
_"pending team discussion"_ stub. Until those land, follow the section's
`description` in
[`body.config.json`](../../../config/knowledge-base/content/body.config.json),
which remains the authority in every case. Blank stubs have no effect on
validation, indexing, or CI; the validator reads `body.config.json`, not this
skill.

To promote a stub, replace its italic line with real guidance and keep
`body.config.json` as the authority — link to it rather than paraphrasing its
`description`. If a section needs a heading that is not yet in `body.config.json`,
add it there first and call it out to the user.

## Content-quality principles

Apply these across every section:

- **Write guidance, not description.** Keep conditions specific and actionable,
  and never restate what the component's API or the frontmatter `title` already
  makes obvious.
- **Don't duplicate generated references.** The auto-generated API table and
  Storybook already document the raw prop surface; add only the intent, defaults
  rationale, and constraints they cannot express (this is why `Property/Attribute
  details` says not to repeat the API table).
- **Integrate accessibility throughout.** Beyond the `Accessibility` section,
  weave a11y into `When not to use`, `Limitations`, and content guidance. Be
  component-specific (name the keys, roles, and focus behavior) rather than
  citing WCAG numbers.
- **Write for designers and developers.** `Developer usage` and `Limitations`
  especially should give implementers specific, conditional language, not
  general principle.
- **Adapt content guidance to system voice/tone.** For text-bearing components,
  `Guidelines → Content guidance` must reflect Momentum's documented
  voice/tone/content guidelines where they exist (for example a Tier 1
  content-guidelines topic). If none exist, use general UX-writing principles and
  say so.
- **Give images descriptive alt text.** Store screenshots and diagrams under the
  topic's asset folder (for example `knowledge-base/images/...`, per the schema's
  Iron Law) and give every image alt text that conveys the same information a
  sighted reader gets, so the guidance stays accessible.
- **No private or access-gated links.** Never link to resources that require
  special access — Figma files above all, and also internal wikis, drive
  documents, dashboards, or tickets. Readers and AI agents consuming the
  knowledge base may not have access, and such links rot silently over time. Put
  the relevant detail inline instead, or link only to a publicly reachable source
  of truth.
- **Use US English spelling.** Write all topic content in US English (for
  example "behavior", "organize", "color" — not "behaviour", "organise",
  "colour"). The canonical home for spelling, voice, and tone is the Tier 1
  content-guidelines topic; apply the rule inline here until that topic lands,
  then defer to it.

Do not introduce headings that are not in `body.config.json` (for example a
"Quick reference" card). Cross-references to other components belong in the
optional `Related components` section — distinguish each related component in
one sentence rather than restating its guidelines.

## Where each kind of content belongs

Most rework comes from putting the right content in the wrong section — usually
`Overview` and `Content guidance` absorbing material that belongs elsewhere. Before
validating, check each sentence against this routing table and move anything that
matches a different row.

| Content type | Correct home |
|---|---|
| Why the component exists / the user problem it solves | `Overview` |
| What it looks like (anatomy, parts, layout) | Usually omit; at most a short clause in `Overview` |
| Keyboard, focus, and pointer mechanics | `Accessibility → Built-in features` |
| A "choose this when…" decision | `When to use` |
| A "choose something else when…" decision (with alternative) | `When not to use` |
| How to give it an accessible name (`aria-label`, `aria-labelledby`, slotted label) | `Accessibility → Implementation requirements → Labeling` |
| Slot / parent–child / required-children composition | `Guidelines → Composition` |
| Prop values, defaults, and combinations | `Guidelines → Property/Attribute details` |
| Grouping / role requirements the consumer must satisfy | `Accessibility → Implementation requirements → General` |
| Visible copy: label, body, helper, empty-state wording | `Guidelines → Content guidance` |
| Factual implementation constraints and non-goals | `Guidelines → Limitations` |

## Frontmatter

### `summary`

One sentence, ≤200 characters (enforced by the frontmatter schema), in a fixed
shape:

"Usage, guidelines, and accessibility for the `mdc-<component>` component — <a
short, defining description of what the component is>."

Lead with "Usage, guidelines, and accessibility for the `mdc-<component>`
component —"; after the em-dash, describe what the component *is* (its form and
defining behavior) in a clause or two, not why to use it. Keep it factual and
component-specific.

## Section-by-section guidance

The heading levels below mirror the nesting in
[`body.config.json`](../../../config/knowledge-base/content/body.config.json)
(offset by one, since these sit under this section): a config level-2 section is
an `###` here, a level-3 sub-section is `####`, and a level-4 sub-section is
`#####`.

### `Overview`

One to three sentences (the validator allows a maximum of three). What does this
component do and what user need does it serve? Write this as the answer to "why
does this component exist" not "what does it look like."

Keep it to purpose. Do not include:

- **Anatomy** — the parts it is composed of ("image, header, body, footer") or its
  layout. That is description, not purpose.
- **Interaction mechanics** — keyboard, pointer, or focus behavior (`Enter`,
  `Space`, arrow keys, "dispatches a `click`"). These live in
  `Accessibility → Built-in features`.
- **Directives** — "Use it when…" / "Use this for…". Those belong in `When to use`.

A reliable template: "The `mdc-<component>` <does X> so <user benefit or when it
applies>." One or two sentences in that shape is usually enough.

Do not add a level-1 `#` heading anywhere in the body — the frontmatter `title`
is the implicit H1 — and do not restate that `title` verbatim here.

Example (Card button):

- **Avoid** (anatomy + mechanics + directive): "The card button looks like a card
  (image, header, body) but acts as one large button. Clicking, pressing `Enter`,
  or pressing `Space` dispatches a `click` event. Use it when the whole tile
  should be a single target."
- **Prefer** (purpose): "The card button gives a whole card the behavior of a
  single button, letting an entire content tile act as one activation target. It
  exists for cases where the whole surface represents one action rather than a
  container of separate controls."

#### `When to use`

Write as specific conditions, not general descriptions. Each condition should be
concrete enough that a designer could read it and make a decision.

Cover the primary use case first, then secondary use cases. Three to five
conditions is usually the right scope — more than that and the guidelines are
covering for an unclear component contract.

Each bullet must be a genuine *use decision* — a reason to choose this component
(or a specific variant) over the alternatives. Do not list implementation
requirements (for example, wrapping the group in `role="group"`) or configuration
steps (for example, setting `name`/`value` to submit in a form); those belong in
`Accessibility → Implementation requirements` and `Property/Attribute details`
respectively.

Format:

Lead every bullet with the component tag, then — when the recommendation is
specific to a variant or attribute — the token it applies to, then the condition:

"Use `mdc-<tag>` [`<variant value or attribute>`] for [condition]."

- The tag (`mdc-<tag>`) leads every bullet.
- Include the second code span only when the bullet recommends a *specific*
  variant or attribute. Show an enum as its value (`primary`) and a boolean
  attribute as its name (`inverted`). Describe a usage shape that has no single
  prop in prose rather than a code span (for example "an icon-only
  `mdc-button`").
- One recommendation per bullet; add at most one follow-up sentence for a
  constraint or a concrete example.

Examples (Button):

- Use `mdc-button` to trigger an action — submitting a form, opening a dialog, or
  running a command.
- Use `mdc-button` `primary` for the single most important or expected action in a
  view. There should be at most one primary button in any context; when a dialog
  offers "Save" and "Cancel", only "Save" is primary.
- Use `mdc-button` `secondary` for actions that are available but not the expected
  next step. More than one secondary button can appear together.
- Use `mdc-button` `tertiary` for low-emphasis actions that should not compete for
  attention; unlike secondary, it has no resting outline, so its footprint appears
  only on hover or interaction.
- Use an icon-only `mdc-button` for compact targets such as toolbars or table-row
  controls where space is constrained and the icon's meaning is unambiguous.
- Use `mdc-button` with `inverted` when placing a button on a dark or inverted
  surface so the color scheme keeps the required contrast.

#### `When not to use`

As important as the above, and often more valuable. Each entry should name a
specific misuse and point to an alternative.

Format:
"Do not use [component name] for [misuse condition]. Use [alternative] instead."

Examples (Button):

- Do not use a button for navigation to another page. Use a link. Buttons
  trigger actions; links navigate. Using a button for navigation misrepresents
  the interaction to screen readers and keyboard users.
- Do not use more than one primary button in the same context. If two actions
  feel equally important, reconsider the information hierarchy.
- Do not use a button when no action occurs. If the element is decorative or
  informational, it is not a button.

### `Guidelines`

_Writing guidance is pending team discussion. Until it lands, follow this
section's `description` — and its sub-sections' `description`s — in
[`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Developer usage`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Composition`

Structural rules for how the component's pieces fit together: which slots to use
and what to place in them, required or expected child components, and any ordering
or nesting constraints. This is the home for slot and parent–child guidance that
would otherwise leak into `Content guidance` (which is words only) or `Developer
usage` (which is integration and a minimal example).

Use this section for container and compound components (for example a card with
header/body/footer slots, or a list that expects specific item children). Skip it
for leaf components with no meaningful composition.

Keep it to structure, not the visible copy (→ `Content guidance`), the
accessible-name mechanism (→ `Labeling`), or the raw property reference (→
`Property/Attribute details`).

#### `Content guidance`

Guidance for the *visible copy* a product team writes into the component — button
labels, error messages, empty-state copy, tooltip content — covering tone,
length, framing, and casing.

This section is about the **words**, not accessibility labeling mechanics. How a
consumer supplies an accessible name — `aria-label`, `aria-labelledby`, a slotted
label element, or naming an icon-only control — belongs in
`Accessibility → Implementation requirements → Labeling`, not here. Visible label
text still lives here even when it doubles as the accessible name; it is the
programmatic naming *mechanism* that moves to Labeling.

Keep out of this section (move each to its home in the routing table above):

- Accessible-name mechanics (`aria-label`, `aria-labelledby`, slotted label) →
  `Labeling`.
- Slot and composition mechanics (which slot to use, required children, parent–child
  rules) → `Composition`.
- Property values, defaults, and combinations → `Property/Attribute details`.
- Keyboard, focus, or pointer behavior → `Accessibility → Built-in features`.

If removing those leaves nothing author-written, omit the section entirely.

Content guidance is particularly important for:

- Buttons: action-oriented labels, verb-led, specific
- Error messages: cause and resolution, not just notification
- Empty states: context-appropriate next action, not generic "no data found"
- Tooltips: supplementary, not required reading

If the component displays no author-written text, skip this section.

Keep every bullet component-specific. Do not add a generic pointer or link to the
system content-guidelines (for example a "Follow the design system content
guidelines" bullet) — it adds no component-specific value and duplicates the Tier 1
source. Reflect the relevant voice/tone rules inline instead, and treat the Tier 1
content-guidelines topic as the canonical source rather than restating or linking
it here.

#### `Property/Attribute details`

For each variant or major configuration option: one sentence on what it is for and
one sentence on when to use it. Do not repeat information already in the component
API — this section should add intent context, not restate prop values.

Only document variants that require usage judgment. If a variant is
self-explanatory (`size` on a component that comes in `sm`, `md`, and `lg`), skip
it or document it briefly. Spend the space on variants where misuse is plausible.

Format:

Present the options as a two-column table — `Option` and `Intent` — one row per
variant or configuration option. Put the option in `Option` as a code span
(`variant="borderless"`) and mark the default with "(default)"; put the
what-it-is-for and when-to-use sentences in `Intent`. Add a `**Note:**` line under
the table only for cross-component clarifications (for example, which values belong
to a parent component).

| Option | Intent |
|---|---|
| `variant="default"` (default) | Bordered, rounded container. Use when the accordion is a distinct object on the page. |
| `size="large"` | 24px padding. Use when the accordion is a primary content block or touch targets need more space. |
| `toggle-position="leading"` | Chevron at the start. Use only when layout or RTL patterns require it; trailing is the default users expect. |
| `disabled` | Prevents toggle; hides the body even if `expanded` is set. |

**Note:** `stacked`, `contained`, and group `borderless` are `mdc-accordiongroup` variants, not `mdc-accordionbutton` props.

#### `Limitations`

A limitation is a factual, implementation-level constraint on what the component
can or will do — something a developer needs to know before integrating that the
auto-generated API table and Storybook cannot express. In other words, what the
code itself will not do for you, by design or by current constraint.

Per the content-quality principles above, each limitation should be specific,
actionable, and non-duplicative of the generated reference: state the constraint
and the workaround or intended alternative. This is one of the most valuable
sections for preventing real-world mistakes, and one of the most commonly
omitted.

Document (only those that genuinely apply):

- What input or content will the component silently not handle?
- Which prop/attribute combinations are invalid, ignored, or mutually exclusive?
- What is an intentional non-goal — behavior the component deliberately does not
  implement — and what should you use instead?
- Where does responsibility shift to the consumer because the component will not
  do it?
- What known behavior may surprise consumers or require a workaround today?
- What user-facing or visual edge cases fall outside the happy path — for example
  very long labels, right-to-left layouts, non-standard or transparent
  backgrounds, adjacent instances, or destructive and irreversible actions?

Use those prompts only to find limitations — never as the wording of an entry.

Format:

Write a bullet list. Lead every bullet with a bold **1–5 word mini-assertion**
that states the specific limitation, then an em-dash, the constraint, and the
workaround or alternative:

"**<mini-assertion>** — <the specific constraint>. <workaround or alternative>."

The mini-assertion is a specific claim about this component ("Long titles don't
truncate"), not a generic category ("Visual edge case"). Keep it sentence case.

Rules:

- One limitation per bullet, and always end with the workaround, alternative, or
  consumer action.
- Do not restate the auto-generated API table; add only what it cannot express.

Examples:

- **Header text won't toggle** — only the dedicated toggle button expands or
  collapses the panel; clicking the header text does not, by design. Use
  `mdc-accordionbutton` to make the whole header toggle.
- **`disabled` hides the body** — the body stays hidden even when `expanded` is
  `true`. Remove `disabled` to expose it.
- **Initial `expanded` moves focus** — setting `expanded` on first render can move
  screen-reader focus unexpectedly. Prefer starting collapsed.

Not every component has every kind of limitation. Only document what is real for
this component — do not produce a generic list.

#### `Notes`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

### `Accessibility`

_See the "Integrate accessibility throughout" principle above. Section-specific
guidance is pending team discussion; until it lands, follow this section's
`description` — and its sub-sections' `description`s — in
[`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Built-in features`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

##### `Internal ARIA managed by the component`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Implementation requirements`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

##### `General`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

##### `Labeling`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Notes`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

### `Related components`

Cross-reference the components most often confused with this one or used alongside
it. Distinguish each in one line rather than restating its guidelines, and only
list real components in the library.

Format:

Present the references as a two-column table — `Component` and `Relationship` — one
row per component. Put the component tag in `Component` as a code span
(`mdc-accordiongroup`); in `Relationship`, say in one line how it differs from or
works with this component.

| Component | Relationship |
|---|---|
| `mdc-accordion` | Same visual family, extending `mdc-accordionbutton` with a separate toggle button. Use when the header needs interactive controls beside the title. |
| `mdc-accordiongroup` | Wrapper for multiple accordion items. Owns group layout (`stacked`, `borderless`, `contained`) and `allow-multiple`. |

## Self-check before validating

Run these as gates — a file that fails any item is not done; fix it and re-check
before moving on. They are grouped by the sections that most often regress.

**Overview**

- One to three sentences, adds no `#` H1, and does not restate the frontmatter
  `title`.
- Contains no anatomy, no interaction mechanics (`Enter`, `Space`, arrow keys,
  `click`, `keydown`), and no "Use it…"/"Use this…" directive.

**When to use / When not to use**

- `When to use` leads every bullet with the component tag (`mdc-...`), adding the
  specific variant value or attribute only when the recommendation is
  variant/attribute-specific.
- Every `When to use` bullet is a genuine use decision — not an implementation
  requirement (for example `role="group"`) or a configuration step (for example
  `name`/`value`).
- `When not to use` states each misuse and names an alternative. Every condition is
  specific enough to decide from.

**Content guidance**

- Covers visible copy only. Contains no `aria-*` or accessible-name mechanics (→
  `Labeling`), no slot/composition mechanics (→ `Composition`), and no prop
  configuration (→ `Property/Attribute details`).
- Bullets are component-specific with no generic content-guidelines pointer or link,
  and match system voice/tone where it exists. If nothing author-written remains,
  the section is omitted.

**Property/Attribute details & Related components**

- Both are formatted as tables, and nothing restates the auto-generated API table.

**Limitations**

- Real for this component (not generic); each leads with a bold 1–5 word
  mini-assertion and ends with a workaround or alternative.

**Whole file**

- Accessibility appears in context (in `When not to use`, `Limitations`, content
  guidance), not only in its own section.
- The `summary` frontmatter follows the fixed shape.
- Content is written in US English spelling.
- Nothing restates what the API, the auto-generated table, or the frontmatter
  `title` already conveys.
- No heading appears that is not defined in `body.config.json`.
- No links point to Figma or other private/access-gated resources.

Once the body passes this self-check, return to the
[`momentum-contributing-to-knowledge-base`](../momentum-contributing-to-knowledge-base/SKILL.md)
workflow to validate, regenerate the index, and route through a human reviewer.
