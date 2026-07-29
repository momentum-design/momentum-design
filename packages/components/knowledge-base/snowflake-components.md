---
title: Snowflake Components
summary: When it is acceptable to build a one-off "snowflake" component versus reusing a Momentum design system component or a recipe.
tier: 2
---

# Snowflake Components

A practical guideline for **product designers and product managers** working
with the Momentum Design System. It explains what a "snowflake" component is
and, more importantly, when it is acceptable to create one and when it is not.

The vocabulary below comes from Brad Frost's
[Design System Components, Recipes, and Snowflakes](https://bradfrost.com/blog/post/design-system-components-recipes-and-snowflakes/).
Read it once for the full context; this page adapts the idea to Momentum.

## The three kinds of components

Before deciding to build something new, place it in one of these buckets:

- **Design system component** — Shared, content- and context-agnostic
  building blocks built for maximum reuse (for example `Button`, `Card`,
  `Select`, `Menu`). These live in the Momentum component library and are
  owned by the design system team.
- **Recipe** — A specific, reusable composition of design system components
  that is consistent across a product but too product-specific for the design
  system (for example a `ContactCard` assembled from `Card`, `Text`, `Avatar`,
  and `Button`). Recipes reuse Momentum components; they do not restyle them.
- **Snowflake** — A genuine one-off component that is needed to build a single
  experience and is not reused anywhere else (Brad Frost's example: a `Seat`
  component that only exists for a "select your seat" flow).

**Default to reuse.** Always try to solve a need with an existing Momentum
component first, then a recipe (composition of Momentum components), and only
then consider a snowflake.

## What a snowflake is — and is not

A snowflake is a **new, single-purpose** piece of UI. It is *not* an excuse to
re-create, restyle, or fork something the design system already provides.
Changing the color, size, spacing, or interaction of an existing Momentum
component and shipping it as "our own version" is not a snowflake — it is an
inconsistency.

## When it is fine to create a snowflake

Creating a snowflake is acceptable when **all** of the following are true:

- **It is genuinely unique.** The UI solves a problem that no existing
  Momentum component or recipe addresses, and you do not expect it to be
  reused in other flows or products.
- **It composes Momentum components and tokens.** It is built *from* design
  system primitives (components, design tokens, typography, spacing, color,
  icons) rather than inventing new visual styles. A snowflake can be a novel
  arrangement of standard parts.
- **It does not duplicate an existing component.** There is no Momentum
  component (or reasonable variant/recipe) that already covers the need.
- **It stays out of the shared library.** It lives with the product/feature
  code, clearly marked as product-specific, and is not published as a
  reusable design system component.
- **It is consistent with Momentum's look and feel.** It respects the design
  language so it feels native to the product, even though it is one-off.

If a need is truly one-of-a-kind — like a bespoke visualization, an
onboarding illustration flow, or a niche interaction that exists on exactly
one screen — a snowflake is the right, pragmatic choice.

## When it is NOT fine to create a snowflake

Do **not** create a snowflake when any of the following apply:

- **It causes inconsistency in the product.** This is the most important rule:
  never build a snowflake that makes the *same* thing look or behave
  differently in different places (for example a custom button, input, modal,
  or menu that diverges from the Momentum equivalent). Two versions of the
  "same" component erode trust, accessibility, and the shared visual language.
- **A Momentum component already covers it.** If an existing component — or a
  small, valid variant of it — can do the job, use it. Re-implementing it as a
  snowflake is duplication.
- **It restyles or forks a design system component.** Overriding a Momentum
  component's colors, spacing, states, or behavior to make a "special" version
  is not a snowflake; it is a fork that will drift out of sync with the design
  system.
- **It will be reused.** If the pattern is (or will be) needed in more than one
  place, it is a **recipe** — or a candidate for the design system — not a
  snowflake. Building repeated UI as one-offs guarantees inconsistency.
- **It bypasses design tokens or accessibility.** If making it "work" requires
  hard-coded colors/sizes, off-system typography, or dropping the
  accessibility guarantees Momentum provides, stop and revisit the approach.
- **It exists only to skip the design system process.** Speed is not a
  justification for a divergent one-off. Raise the gap with the design system
  team instead.

## Quick decision check

Ask, in order:

1. **Does a Momentum component already solve this?** → Use it. Not a snowflake.
2. **Can I compose Momentum components/recipes to solve this?** → Build a
   recipe. Not a snowflake.
3. **Will this be reused elsewhere?** → Make it a recipe or propose a design
   system component. Not a snowflake.
4. **Is it truly one-off, built from Momentum primitives, and consistent with
   the design language?** → A snowflake is acceptable.

If you cannot answer "yes" to step 4 with a clear conscience, it is not a
snowflake — it is an inconsistency waiting to happen.

## Snowflakes can graduate

Components can move between levels. A snowflake that unexpectedly gets reused
should be promoted to a recipe, and a recipe that becomes broadly useful can be
proposed for the design system. Move patterns **down** into shared layers
deliberately — do not let product-specific one-offs quietly accumulate or
pollute the shared library. When you notice a snowflake being copied, treat it
as a signal to standardize, not to fork again.

## When in doubt, talk to the design system team

If you are unsure whether something should be a Momentum component, a recipe,
or a snowflake — especially if it looks similar to something that already
exists — raise it with the design system team before building. Early
conversations prevent divergent, inconsistent components from shipping.
