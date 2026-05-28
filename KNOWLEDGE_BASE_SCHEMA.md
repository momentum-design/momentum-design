# Knowledge Base Schema

The Momentum Design knowledge base follows a single, repeatable pattern:
**every level that owns knowledge has a `knowledge-base/` folder containing
flat markdown files.**

There is no cross-cutting bucket. There are no nested topic subfolders, except
for image asset folders used by a topic. If a guideline belongs to the design
system as a whole, it lives at the repo root.
If it belongs to a package, it lives in that package. If it belongs to a
component, it lives in that component.

This file is the contract for knowledge-base tiers and principles. Update this
file only when tiers or principles change.

## Principles

1. **One pattern everywhere.** `knowledge-base/<topic>.md` at every level
   that owns a topic. No alternative naming (`*.guidelines.md` etc.) and no
   nested topic folders inside `knowledge-base/`, except image asset folders
   (for example `knowledge-base/images/...`).
2. **Co-located with ownership.** The guideline lives at the level that owns
   the subject. Design-system-wide topics live at the repo root.
   Package-wide topics live in the package. Component-specific topics live
   in the component.
3. **No duplication.** Each topic has exactly one canonical location. Other
   levels link to it; they do not copy it.
4. **Empty-but-named is allowed.** A placeholder `.md` file with no body is
   a valid declaration that a guideline is planned. Do not delete
   placeholders to "clean up".

## Tiers

### Tier 1 — Design system (repo root)

High-level guidelines that describe the design system as a whole live at:

```
knowledge-base/<topic>.md
```

### Tier 2 — Package

Guidelines that are related to a single package's domain live in that package's
`knowledge-base/` folder:

```
packages/<package>/knowledge-base/<topic>.md
```

### Tier 3 — Component

Every component has its own `knowledge-base/` folder co-located with its
source:

```
packages/components/src/components/<component>/knowledge-base/<topic>.md
```

Components may add additional
topic files (`accessibility.md`, `anatomy.md`, `usage.md`, …) as needed.
Topic markdown files stay flat inside `knowledge-base/`, while image assets
may be placed in nested folders (for example `knowledge-base/images/...`).

## Adding / updating a guideline

1. Decide the **tier** by asking "what owns this knowledge?"
   - The design system as a whole → Tier 1 (repo root).
   - A single package → Tier 2 (that package).
   - A single component → Tier 3 (that component).
2. Create or update `knowledge-base/<topic>.md` at the chosen level. Do not
   create topic subfolders inside `knowledge-base/`. Image assets may be
   stored in nested folders (for example `knowledge-base/images/...`).

## Non-goals

- This schema does not define the **content** or **format** of guidelines —
  only their location and naming.
- This schema does not replace package-level `AGENTS.md` files, which
  describe engineering conventions rather than design guidelines.
