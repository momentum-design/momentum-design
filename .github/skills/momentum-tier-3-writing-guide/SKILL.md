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
  weave a11y into `When not to use`, `Edge cases`, and content guidance. Be
  component-specific (name the keys, roles, and focus behavior) rather than
  citing WCAG numbers.
- **Write for designers and developers.** `Developer usage` and `Edge cases`
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

Do not add a level-1 `#` heading anywhere in the body — the frontmatter `title`
is the implicit H1 — and do not restate that `title` verbatim here.

#### `When to use`

Write as specific conditions, not general descriptions. Each condition should be
concrete enough that a designer could read it and make a decision.

Cover the primary use case first, then secondary use cases. Three to five
conditions is usually the right scope — more than that and the guidelines are
covering for an unclear component contract.

Format:
"Use [component name] when [specific condition]."

Examples (Button):

- Use a primary button for the single most important action in a context. There
  should be at most one primary button in any given view.
- Use a secondary button for an action that is available but not the expected
  next step. Secondary buttons often appear alongside primary buttons to give
  users an alternative.
- Use a ghost button when the action is available but should not visually
  compete with other actions or content on the page.

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

#### `Content guidance`

If the component displays text that product teams write (button labels, error messages, empty state copy, tooltip content): include brief content guidelines covering the appropriate tone, length, and framing.

These are particularly important for:
- Buttons: action-oriented labels, verb-led, specific
- Error messages: cause and resolution, not just notification
- Empty states: context-appropriate next action, not generic "no data found"
- Tooltips: supplementary, not required reading

If content guidelines are not relevant to this component, skip this section.

#### `Property/Attribute details`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Edge cases`

Edge cases are the situations the happy path documentation does not cover. They
are the most important section for preventing real-world mistakes and the most
commonly omitted.

Document (only those that genuinely apply):

- What happens when the label text is very long?
- What happens in a right-to-left layout?
- What happens when the component is used on a non-white or non-standard
  background?
- What happens when multiple instances appear in close proximity?
- What happens when the action is destructive and irreversible?

Not every component has every type of edge case. Only document the edge cases
that are real for this component — do not produce a generic list.

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

##### `Labelling`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

#### `Notes`

_Writing guidance is pending team discussion. Until it lands, follow the
section `description` in [`body.config.json`](../../../config/knowledge-base/content/body.config.json)._

### `Related components`

Cross-references to components that are commonly confused with this one, or commonly used alongside it. For each:
- Component name
- One sentence distinguishing it from this component, or describing how they work together

## Self-check before validating

Before running validation, confirm:

- `Overview` is one to three sentences, adds no `#` H1, and does not restate the
  frontmatter `title`.
- `When to use` and `When not to use` follow the parallel format: condition
  first ("When …"), recommendation second ("use …" / "use … instead"), and each
  condition is specific enough to decide from.
- Every `When not to use` entry names an alternative.
- Edge cases are real for this component, not generic.
- Accessibility appears in context, not only in its own section.
- Content guidance matches system voice/tone where it exists.
- Content is written in US English spelling.
- Nothing restates what the API, the auto-generated table, or the frontmatter
  `title` already conveys.
- No heading appears that is not defined in `body.config.json`.
- No links point to Figma or other private/access-gated resources.

Once the body passes this self-check, return to the
[`momentum-contributing-to-knowledge-base`](../momentum-contributing-to-knowledge-base/SKILL.md)
workflow to validate, regenerate the index, and route through a human reviewer.
