---
name: contributing-to-knowledge-base
description: "Add a new topic to, or update an existing topic in, the Momentum Design knowledge base. Use whenever a user asks to capture, document, save, or revise knowledge-base content at any tier (design system, package, or component). Enforces tier selection, deduplication, frontmatter, and index regeneration."
---

# Contributing to the Knowledge Base

This skill is the step-by-step workflow for **adding new** or **updating existing**
topic files in the Momentum Design knowledge base.

It does **not** restate structural rules, tiers, frontmatter fields, or
allowed topic names. Those are defined once in the
[Knowledge Base Schema](../../../config/knowledge-base/SCHEMA.md) and the
config files it references. Always consult the schema before and during the
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

2. **Search before writing.** Read
   [`knowledge-base/index.json`](../../../knowledge-base/index.json) and
   filter by `tier`, `owner`, `component`, or title/summary keywords to
   find any existing canonical topic. If one already exists at another
   tier, **link to it instead of duplicating**
   (see [Rule 3 of the schema](../../../config/knowledge-base/SCHEMA.md#rules)).
   Only create a new file when no overlap is found.

3. **Create or update `knowledge-base/<topic>.md`** at the chosen level.
   - For Tier 3 (component) topics, the file name **must** appear in
     [`topic-constraints.config.json`](../../../config/knowledge-base/topic-constraints.config.json).
     Do not invent new Tier 3 topic names; if a new one is genuinely
     needed, update the config file first and call it out in the PR.
   - Do not create topic subfolders inside `knowledge-base/`. Image
     assets may live in nested asset folders (for example
     `knowledge-base/images/...`) — see the
     [Iron Law in the schema](../../../config/knowledge-base/SCHEMA.md#knowledge-base-schema).

4. **Add or update the required frontmatter.** The required fields, value
   constraints, and tier-specific overrides are defined in
   [`frontmatter.config.json`](../../../config/knowledge-base/frontmatter.config.json).
   Read that file directly to produce a valid frontmatter block; do not
   guess.
   - When an AI agent drafts the content, set `status: draft` (or
     `planned` for a placeholder) so the human reviewer signs it off
     before promotion to `stable`
     (see [Rule 5 of the schema](../../../config/knowledge-base/SCHEMA.md#rules)).

5. **Regenerate the index.** Run:

   ```bash
   yarn knowledge-base:index
   ```

   Commit the updated [`knowledge-base/index.json`](../../../knowledge-base/index.json)
   alongside your topic file. The generator also runs in `--check` mode in
   pre-commit and CI; a stale or invalid index will fail the build.

6. **Route through a human reviewer.** AI-drafted knowledge-base content
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
- Updating only the body of a `status: planned` placeholder typically
  warrants flipping `status` to `draft` (AI-authored) or `stable`
  (human-authored or human-reviewed).

## What this skill deliberately does not cover

- Tier definitions, frontmatter contract, allowed Tier 3 topic names,
  index schema, and structural rules — all owned by the
  [schema](../../../config/knowledge-base/SCHEMA.md) and its sibling
  config files.
- Prose style, heading conventions, or depth of topic files — explicitly a
  non-goal of the schema.
