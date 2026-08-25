---
title: Momentum Concierge
summary: Portable agent instructions for answering Momentum Design questions from canonical knowledge-base guidance, including retrieval, response, and feedback rules.
tier: 1
websitePath: skills/momentum-concierge
---

# Momentum Concierge

Momentum Concierge is a portable agent skill for answering design-system questions using canonical guidance from the Momentum Design knowledge base.

It helps designers, engineers, and product teams find documented guidance for components, assets, tokens, accessibility, content, interaction patterns, internationalization, and responsive behavior.

The skill retrieves existing Momentum guidance; it does not create or infer new Momentum policy.

## Compatibility

Momentum Concierge is designed to be tool-agnostic. Its [`skill.md`](skill.md) file uses portable Markdown and common `name` and `description` frontmatter fields, with no host-specific configuration.

Automatic discovery and activation depend on the AI tool. Tools that support agent skills can use the `knowledge-base/skills/momentum-concierge` directory directly or install it in their documented skills location. Other tools can use the prompt fallback below.

## Required capabilities

For the complete workflow, the AI tool needs:

- HTTP access to retrieve the current public knowledge base.
- Local file access for fallback retrieval when the public knowledge base is unavailable.
- Optional authenticated GitHub issue creation for submitting approved knowledge-base gaps.

The core guidance lookup works without GitHub issue creation. If HTTP access fails, the skill can use a verified local checkout while warning that its freshness could not be confirmed. If neither source is available, it reports a retrieval failure instead of inventing Momentum guidance.

## What it does

- Answers questions about named Momentum components and their behavior.
- Helps teams choose components using documented usage guidance.
- Retrieves guidance for assets, packages, design tokens, and themes.
- Applies cross-cutting accessibility, content, interaction, internationalization, and responsive-design guidance.
- Distinguishes documented Momentum guidance from general recommendations.
- Identifies missing, unclear, stale, or conflicting knowledge-base coverage.
- Prepares approval-gated GitHub issue drafts for knowledge-base gaps.

## Source of truth

Repository Markdown in `momentum-design/momentum-design` is authoritative. Retired Figma documentation is not used as a source of truth.

The skill retrieves the public knowledge base from the repository's published `main` branch first so answers use the latest published guidance. A verified local checkout is used only when remote retrieval fails, and the skill discloses that the local content's freshness could not be confirmed. It never pulls or otherwise modifies the user's checkout.

## Knowledge retrieval

Momentum Concierge uses generated knowledge-base indexes to locate the smallest relevant source:

1. Component questions begin with the component index.
2. Asset, token, and package questions begin with the package index.
3. Cross-cutting design-system questions begin with the root index.
4. The matching canonical topic is read before the answer is produced.

If an index does not contain the requested topic, the skill expands the search only to the next relevant tier.

## Share feedback

Help us improve Momentum Concierge by [creating an issue](https://github.com/momentum-design/momentum-design/issues/new) in the Momentum Design repository. Use issues to alert us to missing guidance, unclear expectations, stale information, conflicting documentation, or problems with the skill itself.

When canonical guidance is missing or incomplete, Momentum Concierge can also prepare a sanitized issue draft for you.

- It never submits an issue without the user's explicit approval.
- It does not include raw prompts, source code, customer information, credentials, tokens, or other sensitive data.
- Any change to a proposed issue requires fresh approval.
- If authenticated issue creation is unavailable, it provides a prefilled manual submission link.

## Files

- [`skill.md`](skill.md) contains the skill metadata, retrieval workflow, response contract, and feedback process.
- `README.md` contains the overview, capabilities, and usage examples.

## Prompt fallback

For AI tools that do not support agent skills, attach or provide [`skill.md`](skill.md), then use:

```text
Follow the attached Momentum Concierge instructions to answer this Momentum Design question. Use documented Momentum guidance only, distinguish any general recommendation, and identify coverage gaps instead of inventing policy.

Question: <your Momentum Design question>
```

## Example prompts

```text
Use Momentum Concierge to explain when to use an accordion.
```

```text
What does Momentum recommend for icon-only button labels?
```

```text
Review this form against Momentum accessibility guidance.
```

```text
Does Momentum provide a breadcrumb component?
```
