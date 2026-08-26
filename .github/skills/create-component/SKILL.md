---
name: create-component
description:
  'Create a new Lit web component or widget in the Momentum Design components package end to end, including its API,
  accessibility, consumer-owned content, RTL and text-expansion support, styling, Storybook stories, Playwright tests,
  exports, generated integrations, and Tier 3 documentation. Use when asked to create, add, build, or scaffold a
  component under packages/components. Do not use for changes limited to an existing component, asset-only work,
  product-specific components, or generic Lit projects.'
---

# Create a Momentum component

Build production-ready components for `@momentum-design/components`. Keep this skill focused on orchestration and
quality gates; use current repository sources for implementation rules.

## Apply repository rules once

Ensure the applicable [repository](../../../AGENTS.md) and [components package](../../../packages/components/AGENTS.md)
instructions are in context. Do not reload instructions already provided in the conversation.

Run `git status --short` before proposing changes and preserve pre-existing work. Present a concrete implementation plan
and wait for explicit approval before editing component files. Complete the component-or-widget confirmation checkpoint
below before creating that plan. Re-plan and request approval again if later findings materially change the API,
accessibility model, component classification, design contract, or file scope.

## Use an optional Figma specification

Accept a node-specific Figma Design URL as optional input. Do not require Figma when the user provides no design spec.

When a Figma URL is supplied, load and follow the canonical Figma design-to-code skill completely before proposing the
component plan. Prefer an installed `/figma-design-to-code` skill; otherwise read
`skill://figma/figma-design-to-code/SKILL.md` from the Figma MCP server.

Apply only these Momentum-specific additions:

- Compare the derived design requirements with current package conventions and the chosen analogue. Include conflicts,
  repository token mappings, and proposed deviations in the component plan.
- Keep the private Figma URL and fetched design data out of committed files and knowledge-base content. Record only the
  derived implementation decisions.

## Load cross-cutting guidance progressively

Before approval, load only the cross-cutting guidance needed to classify the component and define its public,
accessibility, consumer-content, bidirectional-layout, and text-expansion contracts. Search headings or key terms before
opening a long guide, read only the matching section range, and do not revisit sources already understood.

Load additional guidance when its trigger applies:

- For every new shared-library entry, use
  [the kinds of components](../../../packages/components/knowledge-base/snowflake-components.md#the-kinds-of-components)
  to classify it as a component or widget. If shared-library fit is uncertain, continue with the
  [quick decision check](../../../packages/components/knowledge-base/snowflake-components.md#quick-decision-check) and
  expand only if the result remains unclear.
- For accessibility, start with
  [component responsibility](../../../knowledge-base/accessibility.md#what-components-handle), then load only matching
  [cross-cutting requirements](../../../knowledge-base/accessibility.md#cross-cutting-requirements). Read
  [interaction patterns](../../../knowledge-base/interaction-patterns.md) only for custom, composite, overlay,
  selection, or feedback behavior—not a native control whose behavior is already defined.
- When the contract includes visible or accessibility-only text or locale-sensitive display values, read the
  [component text ownership convention](../../../packages/components/conventions/component-text-ownership.md).
- In [internationalization](../../../knowledge-base/internationalization.md), select only the sections matching
  bidirectionality, text expansion, or directional icons in the contract. Read the exact
  [content pattern](../../../knowledge-base/content-guidelines.md#content-patterns) only when authoring consumer-side
  example copy for stories or documentation. Read
  [responsive design](../../../knowledge-base/responsive-design.md) only for breakpoint or adaptive-overlay behavior
  beyond ordinary reflow.

For a novel interactive pattern, verify current native HTML and WAI-ARIA Authoring Practices guidance. Prefer native
semantics and adapt interaction guidance to shadow DOM and established repository behavior.

## Phase 1: establish the contract

Before creating an implementation plan, confirm the classification separately:

1. Search components, stories, and knowledge-base topics for the requested purpose and neighboring patterns. Prefer an
   existing component when it already meets the need.
2. Apply the linked component-or-widget guidance to the requested purpose and search results. Propose one classification
   with a concise repository-based rationale, then ask the user whether the new entry should be a `component` or a
   `widget`.
3. Wait for the user to explicitly confirm `component` or `widget`. Do not start developing or presenting the
   implementation plan before receiving that answer.

After the classification is confirmed, continue establishing the contract:

1. Choose one primary analogue from the search results. Before approval, inspect only the files needed to compare its
   public and semantic contract. Add at most one targeted analogue when a named contract question remains unresolved.
2. Search for reusable models, mixins, utilities, styles, assets, and integration points to confirm feasibility. Defer
   their implementations, generator internals, stories, tests, and documentation until after approval unless a material
   contract decision cannot otherwise be made.
3. Resolve only material unknowns with the user. Do not infer unavailable requirements.

Define the component's:

- shared-library purpose, unprefixed scaffold name, `mdc-` tag, PascalCase class name, component-or-widget
  classification confirmed during the pre-plan checkpoint, and any explicitly requested release state. Do not use
  `Work In Progress` as a fallback category;
- content model, slots, dependencies, properties, attributes, methods, events, defaults, and state ownership;
- for composed or slotted children, the membership and state-change signals the component consumes and how they cover
  user-initiated and programmatic updates;
- native semantics, accessible name, ARIA ownership, focus, keyboard, pointer, disabled/read-only, and announcement
  behavior;
- the consumer-content contract, text expansion, RTL, responsive, forced-color, and reduced-motion behavior;
- when a Figma node is supplied, the Figma-derived contract, repository token mappings, conflicts, and proposed
  deviations;
- stories, functional and visual tests, accessibility checks, manual checks, assets, and validation commands.

Present a plan with the confirmed component-or-widget decision and rationale, files, compact public API table,
accessibility and consumer-content contracts, bidirectional layout, text expansion, stories and tests, and validation.
Identify the classification as explicitly confirmed before planning. When a node was supplied, include applicable Figma
findings, token mappings, conflicts, and proposed deviations. Propose `Tier 3` documentation through the
[knowledge-base contribution skill](../momentum-contributing-to-knowledge-base/SKILL.md) and its
[Tier 3 writing guide](../momentum-tier-3-writing-guide/SKILL.md) because one component owns the topic. State that
approving the plan also confirms that placement. Wait for explicit approval.

## Phase 2: scaffold and implement

Run the repository generator from the root in an interactive terminal:

```bash
yarn components generate:component
```

Provide the lowercase component name without `mdc-` or hyphens. Set the class name deliberately to proper PascalCase
during implementation.

Inspect the complete generator diff immediately. Confirm expected component, style, type, story, test, registration,
export, and Code Connect files were created without disturbing unrelated exports. Replace runtime, story, and test
placeholders; remove unused optional files and empty scaffolding. Keep an unresolved Code Connect stub only when no
authorized exact mapping exists, and report it at handoff.

Before implementation, inspect the relevant files from the primary analogue. Inspect a reusable implementation only when
the approved contract actually uses it.

Implement the approved contract using current analogues. Preserve these outcome gates:

- Keep the public API minimal, typed, documented, and consistent with related components. Avoid redundant state.
- Use the narrowest existing signal for changes in composed or slotted content. Prefer child component events for state
  changes and `slotchange` for membership changes. Use an observer only when the approved contract requires changes that
  available events and lifecycle hooks cannot report; document that reason, observe the narrowest target and mutation
  set, and clean up owned listeners, observers, timers, subscriptions, and asynchronous work across disconnection and
  reconnection.
- Reuse package primitives and utilities. Integrate dependencies, public exports, typed events, React event mappings,
  slots, CSS parts, CSS properties, and custom states required by the contract.
- When a Figma node was supplied, implement the approved Figma-derived contract and re-plan before making a material
  visual deviation.
- Prefer native accessibility. Implement names, roles, states, relationships, keyboard and pointer behavior, focus,
  disabled/read-only behavior, and announcements across shadow boundaries. Cover RTL, forced colors, reduced motion,
  zoom, and reflow where relevant.
- Implement the approved consumer-content contract. Inherit `dir`, use logical layout, and allow consumer-provided text
  to expand.
- Use existing Momentum assets, semantic tokens, typography, focus, and motion foundations. Do not invent design values.

## Phase 3: complete supporting artifacts

Before writing stories, read the canonical
[Storybook convention](../../../packages/components/conventions/component-storybook.md), then inspect current analogous
stories. Keep the first story `Example`, map the approved component-or-widget classification and any explicit release
state to the correct story root, and cover meaningful variants, interaction, accessibility usage, and consumer-provided
long and multiple-language content. Follow the convention's direction-coverage rules. Replace all generator placeholders
and remove metadata that the convention marks obsolete.

Before writing tests, read the testing guide's [scope](../../../packages/components/TESTING.md#scope),
[setup](../../../packages/components/TESTING.md#setup), and
[local-development](../../../packages/components/TESTING.md#local-development) sections and inspect current fixtures and
helpers. Read the [snapshot-update](../../../packages/components/TESTING.md#update-visual-regression-snapshots) section
only when snapshots are in scope. Test observable public behavior, API updates, events, interaction, focus,
accessibility semantics, cleanup, and visual states applicable to the contract. Use `componentsPage`, the
component-local `setup` pattern, automated accessibility checks, and representative LTR, RTL, and forced-color visuals.
Inspect every changed image.

For component documentation, follow the
[knowledge-base contribution skill](../momentum-contributing-to-knowledge-base/SKILL.md) and its
[Tier 3 writing guide](../momentum-tier-3-writing-guide/SKILL.md) only at this phase. Create the canonical topic at:

```text
packages/components/src/components/<component>/knowledge-base/<component>.component.md
```

Search for overlap, link to cross-cutting guidance instead of duplicating it, regenerate the index, and surface the
AI-drafted topic for required human review.

## Phase 4: validate the integration

Format changed files, then run the smallest useful checks before broadening:

```bash
yarn components analyze
yarn components build
yarn components test:e2e:skip-snapshot <component>.e2e-test.ts
yarn knowledge-base:index
yarn analyze:root
```

When approved snapshots are in scope and Docker or Podman is available, run the targeted documented update command,
rerun without update mode, and inspect the LTR, RTL, and high-contrast results.

After building:

1. Verify the component contract in `dist/custom-elements.json`.
2. Verify the generated React wrapper and typed event mappings under `src/react/<component>/index.ts`; do not commit
   untracked build output.
3. Inspect the story in a local browser using the [Storybook navigation skill](../navigating-storybook/SKILL.md) or an
   equivalent local-browser capability. Exercise themes, keyboard, focus, long content, both global directions, and
   relevant states. When a Figma node was supplied, compare the rendered states with its MCP design context and
   screenshot, and report intentional deviations without publishing the private URL.
4. Check repeated mount/unmount when the component owns external resources.
5. Run `git diff --check` and inspect the complete diff for unrelated changes, placeholders, debugging output, and
   accidental generated artifacts.

Fix failures caused by the work. Report exact commands or manual checks that could not run; never imply they passed or
suppress accessibility, type, lint, or test failures.

## Report completion

Lead with the implemented outcome. Summarize the public contract, material accessibility, consumer-content, RTL,
text-expansion, and applicable Figma-derived decisions or deviations, supporting artifacts, generated integration
checks, commands and results, and outstanding placeholders or manual validation. Include the component-or-widget
classification and rationale, and state that the user explicitly confirmed it before planning. Identify the Tier 3
document that requires human sign-off. Do not call the component complete while required work or known failures remain.
