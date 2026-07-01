---
name: momentum-contributing-to-knowledge-base
description: 'Add a new topic to, or update an existing topic in, the Momentum Design knowledge base. Use whenever a user asks to capture, document, save, or revise knowledge-base content at any tier (design system, package, or component). Enforces tier selection, deduplication, frontmatter, and index regeneration.'
---

# Contributing to the Knowledge Base

This skill is the step-by-step workflow for **adding new** or **updating existing**
topic files in the Momentum Design knowledge base.

It does **not** restate structural rules, tiers, frontmatter fields,
allowed topic names, or body heading conventions. Those are defined once in
the [Knowledge Base Schema](../../../config/knowledge-base/SCHEMA.md) and
the config files it references
([`frontmatter.config.json`](../../../config/knowledge-base/content/frontmatter.config.json),
[`body.config.json`](../../../config/knowledge-base/content/body.config.json),
[`topic-constraints.config.json`](../../../config/knowledge-base/topic-constraints.config.json)).
Always consult the schema and its sibling config files before and during the
steps below.

## When to use this skill

- A user asks to capture, document, save, or persist a piece of knowledge
  (a Q&A, a pattern, an architectural note, a component guideline).
- A user asks to edit, revise, expand, or correct an existing topic file.
- An agent has produced a repeatable answer and the user has confirmed it
  should be saved.

If the request is purely structural (tiers, frontmatter contract, file
layout), redirect to the
[Knowledge Base Schema](../../../config/knowledge-base/SCHEMA.md) — this
skill is not the place to change rules.

## Workflow

1. **Decide the tier.** Apply the tier-selection guidance in the
   [Structure section of the schema](../../../config/knowledge-base/SCHEMA.md#structure).

   - Design system as a whole → Tier 1.
   - One package → Tier 2.
   - One component → Tier 3.

2. **Confirm the tier with the user.** Present the chosen tier and the
   reasoning behind it, and ask the user whether they agree or want a
   different tier. Do **not** proceed to Step 3 until the user has
   explicitly confirmed the tier. If the user picks a different tier,
   revise the selection and re-confirm before continuing.

3. **Search before writing.** The index is sharded by tier — see the
   [Index section of the schema](../../../config/knowledge-base/SCHEMA.md#index)
   for the full lookup order. Read **only** the shard that matches the
   tier you chose in Step 1:

   - Tier 3 (component) → [`knowledge-base/index.components.json`](../../../knowledge-base/index.components.json), filter by `component`/`owner`.
   - Tier 2 (package) → [`knowledge-base/index.packages.json`](../../../knowledge-base/index.packages.json), filter by `owner`.
   - Tier 1 (design system) → [`knowledge-base/index.root.json`](../../../knowledge-base/index.root.json).

   If the narrowest shard has no canonical entry, escalate outward
   (component → packages → root). If a canonical topic already exists at
   another tier, **link to it instead of duplicating**
   (see [Rule 3 of the schema](../../../config/knowledge-base/SCHEMA.md#rules)).
   Only create a new file when no overlap is found.

4. **Create or update `knowledge-base/<topic>.md`** at the chosen level.

   - For Tier 3 (component) topics, the file name **must** appear in
     [`topic-constraints.config.json`](../../../config/knowledge-base/topic-constraints.config.json).
     Do not invent new Tier 3 topic names; if a new one is genuinely
     needed, update the config file first and call it out in the PR.
   - Do not create topic subfolders inside `knowledge-base/`. Image
     assets may live in nested asset folders (for example
     `knowledge-base/images/...`) — see the
     [Iron Law in the schema](../../../config/knowledge-base/SCHEMA.md#knowledge-base-schema).

5. **Add or update the required frontmatter.** The required fields, value
   constraints, and tier-specific overrides are defined in
   [`frontmatter.config.json`](../../../config/knowledge-base/content/frontmatter.config.json).
   Read that file directly to produce a valid frontmatter block; do not
   guess.

   - AI-drafted content must still be signed off by a human reviewer
     before merge (see [Rule 5 of the schema](../../../config/knowledge-base/SCHEMA.md#rules)).

6. **Structure the body (Tier 3 topics only).** For component-level topics,
   the body must follow the heading hierarchy defined in
   [`body.config.json`](../../../config/knowledge-base/content/body.config.json).
   Read that file directly before drafting or editing content.
   Do not invent new section or sub-section headings without first adding them to `body.config.json` and calling that out to the user.

7. **Validate the knowledge-base.** Run:

   ```bash
   yarn knowledge-base:validate
   ```

   Fix any errors before proceeding. Validation checks frontmatter fields,
   body structure, and topic-constraint adherence.

8. **Regenerate the index.** Run:

   ```bash
   yarn knowledge-base:index
   ```

   Commit every updated
   [`knowledge-base/index.*.json`](../../../knowledge-base/) shard
   alongside your topic file. The generator also runs in `--check` mode in
   pre-commit and CI; a stale or invalid shard will fail the build.

9. **Route through a human reviewer.** AI-drafted knowledge-base content
   must be confirmed by a human before merge
   (see [Rule 5 of the schema](../../../config/knowledge-base/SCHEMA.md#rules)).
   Surface the diff explicitly so the reviewer can verify both content
   accuracy and tier placement.

## Updating an existing topic

The workflow above applies. Additional notes:

- Do not move a topic between tiers without first checking that no other
  document links to its old path. Update inbound links in the same change.
- If an update would introduce duplication with another tier's canonical
  topic, **delete the duplicate content and link to the canonical instead**
  (Rule 3). Do not leave both copies.
