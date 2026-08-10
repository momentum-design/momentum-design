---
name: momentum-tier-2-token-writing-guide
description: 'Write or revise a Tier 2 token guideline in the assets/tokens package knowledge base. Use when the contributing-to-knowledge-base workflow selects Tier 2 for a topic under packages/assets/tokens/. Adapts the design-system token-documentation method to Momentum: shipped tokens as source of truth, the Momentum tier model, and what to link out to rather than restate.'
---

# Tier 2 token writing guide

The token-specific companion to the
[`momentum-contributing-to-knowledge-base`](../momentum-contributing-to-knowledge-base/SKILL.md)
workflow. That skill owns tier selection, dedup, frontmatter, validation, and
indexing; this guide only adds how to shape a **tokens-package** Tier 2 topic.

It does **not** restate structural rules, frontmatter fields, or voice — those
live in the [Knowledge Base Schema](../../../config/knowledge-base/SCHEMA.md),
[`frontmatter.config.json`](../../../config/knowledge-base/content/frontmatter.config.json),
and [`content-guidelines.md`](../../../knowledge-base/content-guidelines.md).
Link to them instead of duplicating (schema Rule 3).

## Context

Token documentation has a chronic failure mode: it stops at the value. A
reference that says `color.theme.text.primary.normal → #000000` tells a consumer
the resolved colour but not what it means, when to reach for it, which surfaces
it belongs on, or what breaks if it is misused. When docs stop at the value,
consumers pick tokens by visual proximity instead of intent, and the system
drifts. The goal here is to make the **semantic contract** legible: what a token
means and where it belongs, not just what it resolves to.

## Boundaries and when this guide applies

- Applies when the chosen tier is **2** **and** the topic lives under
  `packages/assets/tokens/knowledge-base/`.
- Tier 2 means "one package," not "tokens." A Tier 2 topic in another package
  (e.g. `packages/components/knowledge-base/`) does **not** use this guide.
- This guide **documents existing, shipped tokens**. It does not create tokens,
  redesign the architecture, or validate token file structure — that is the
  tokens build and `analyze` scripts' job.

## Sources (auto-pull before asking)

- **Style Dictionary source is canonical.** Read the token tree under
  `packages/assets/tokens/src/**` (`core/*`, `theme/*`, `motion/*`, `aaos/*`,
  `additionaltheme/*`) and resolve references before writing. Document the
  **shipped** values, never values from Figma or design guidance that lead or
  diverge from code.
- **Compiled output is what consumers use.** Tokens emit `--mds-*` custom
  properties under `.mds-*` selectors — `.mds-core`, `.mds-effect`,
  `.mds-elevation`, `.mds-typography`, `.mds-motion`, `.mds-animation`, and the
  per-theme `.mds-theme-*` selectors (`--mds-color-theme-*`).
- **Figma MCP** may be used to cross-reference design intent, but on any
  conflict the shipped token wins. Do **not** record design↔code drift in the
  doc; that is a reconciliation for the design/product side.
- **Existing docs**: update in place rather than rewriting.

## Step 1: Gather the token set

Confirm (skip what the source already answers):

- The tokens to document — a category (e.g. color, elevation, motion), a tier,
  or a cross-cutting contract (e.g. theming).
- The source files that back them, and the resolved values.
- Any existing intent notes to incorporate.
- Audience: Momentum token docs serve **both** designers and developers — include
  the source path, the `--mds-*` custom property, and the value.

If documenting the whole category set, start with the semantic tier — primitives
largely document themselves.

## Step 2: Document by tier

### Primitive tokens (`core/*`, `color.core.*`)

Lightweight. Establish the scale and its source; state that primitives are
referenced by semantic tokens, not used directly in components. List values or
reference the source file — do not explain when to use one step vs another (that
is the semantic tier's job).

### Semantic tokens (`theme/*` → `--mds-color-theme-*`)

Where most effort belongs. Per token or group document:

- **Intent** — one sentence on what it communicates, not what it looks like.
- **Resolved value(s)** — by theme, from the source JSON.
- **References** — the primitive it points at.
- **Use on / Do not use on** — appropriate surfaces and specific misuse.
- **Used by** — components that consume it by default (grep `--mds-*` usage).

### Foundational categories (`elevation`, `typography`, `effect`, `motion`)

Single core scales rather than a primitive/semantic split. Document each with the
table convention below. `motion` additionally has an animation-recipe layer
(`.mds-animation`) that references the core motion primitives — document the
recipe types, not raw values.

### Component tokens

**Momentum has no component-token tier.** Component-specific application lives in
component code. Describe it as "applied in component code," and do not invent a
token tier.

### Table column convention

| Token | Custom property | Value | Use for |
| --- | --- | --- | --- |

`Token` = source path; `Custom property` = compiled `--mds-*` name; `Value` =
resolved value; `Use for` = role-based intent (not a restatement of the value).

## Step 3: Document the theming contract (if applicable)

If the category resolves across themes, do not re-explain the mechanism — it is
documented once in
[Theming](../../../packages/assets/tokens/knowledge-base/theming.md). Link to it,
and only state what is category-specific (e.g. "elevation is theme-independent").

## Step 4: Add a misuse reference

Close a catalog with 5–10 common misuses:

- **Common misuse:** using [wrong token] to achieve [outcome]
- **Why it's wrong:** [what the wrong token communicates that conflicts]
- **Use instead:** [correct token]

## Step 4b: Token governance

Consumers eventually ask "who owns tokens and how do I request one?" Capture that
**once** — in the tokens package `AGENTS.md` or a Tier 2 index — covering owner,
request process, change cadence, and who updates docs. Link to it from topics;
do not repeat it per file (Rule 3).

## Step 5: Token format note

Momentum tokens are authored in **Style Dictionary + Tokens Studio JSON**
(`value`/`type`), not DTCG 2025.10 resolvers. Where a token uses a composite
type, document its shape (e.g. `elevation` = `boxShadow` with x/y/blur/spread/
color; `motion.easing` = `cubic-bezier`). Skip DTCG resolver/set/mode
documentation — it does not apply to this pipeline.

## Step 5b: Machine-readable reference

Do **not** hand-maintain a parallel JSON. The tokens build already emits
machine-readable output (`WEB_JSON`, `MD_JSON_MINIMAL`), and the KB ships a
generated [`index.packages.json`](../../../knowledge-base/index.packages.json).
Point AI/tools at those generated artifacts rather than duplicating them.

## Step 6: Format for the knowledge base

- One file per topic under `packages/assets/tokens/knowledge-base/`; no
  subfolders (asset image folders excepted — see the schema).
- Choose the shape:
  - **Catalog** (a token category): Intro (1–3 sentences) → `## Principles` →
    token anatomy/layers → scale/group tables → `## Usage` (+ misuse) →
    `## Related`.
  - **Concept** (a cross-cutting contract, e.g. theming): a prose contract with
    its own headings; catalog tables will not apply.
- End with `## Related` linking sibling token topics and the theming contract.
- After adding or renaming a topic, validate and regenerate the index
  (`yarn knowledge-base:validate`, then `yarn knowledge-base:index`); commit the
  updated `index.packages.json` shard — steps 7–8 of the contributing skill.

## Step 6b: Quick reference by function

Optionally add a one-page, intent-first lookup using the **real** Momentum
tokens — e.g. "I need a colour for primary text → `color.theme.text.primary.normal`",
"a floating-surface shadow → `elevation.3`", "a hover transition →
`motion.duration.fast` + `motion.easing.standard`". Organise by what the consumer
is trying to do, not by token category.

## Where each kind of content belongs

Move any sentence that matches a different row before validating.

| Content type | Correct home |
|---|---|
| What the category is / the problem it solves | Intro |
| How to think about / choose within the category | `Principles` |
| Naming shape and `--mds-*` compilation | Token anatomy / layers |
| A token's value and role | The scale/group table |
| How semantic tokens resolve per theme | Link to `theming.md` — do not restate |
| Voice, tone, in-product copy rules | Link to `content-guidelines.md` |
| Which components consume the token | `Used by` line (grep `--mds-*` usage) |
| Design-vs-code differences | Omit — route to the design/product side |

## Frontmatter

`tier: 2`, plus `title` and `summary` (≤ 200 chars). No `component` field. Full
contract:
[`frontmatter.config.json`](../../../config/knowledge-base/content/frontmatter.config.json).

## Gotchas

- Every fenced code block needs a language (markdownlint MD040 — use `text` when
  there is no better fit).
- Cross-check every value against the source JSON before publishing.
- Regenerate the index after adding/renaming; commit the shard.

## Quality checks

- Every semantic token has an intent, not just a value and name.
- Use-on and do-not-use-on are both present.
- Values match the shipped source JSON, not Figma.
- Theming behavior links to `theming.md` rather than restating it.
- `Used by` reflects real consumption (or says so plainly when none exists).
- The misuse reference exists and is specific.
- No design/code drift notes; no product-specific (app-level) guidance.
