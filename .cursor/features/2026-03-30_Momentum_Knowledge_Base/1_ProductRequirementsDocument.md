# PRD: Momentum Knowledge Base (phase 1 — structure and content)

**Status:** Approved  
**Date:** 2026-03-30  

---

## Problem statement

Design-system knowledge for Momentum lives across the monorepo, design tooling, and published documentation. There is no single, agreed place that aggregates that knowledge as plain, structured text for both humans and AI. That slows onboarding, makes guidance harder to discover, and blocks a future where docs and agents read from one canonical tree.

---

## Goals and success criteria

- Create `packages/knowledge` with an documented information architecture (folders, naming rules, and a root index) so a new contributor can decide where a new topic belongs without a separate design meeting.
- Add initial markdown files under that structure and begin aggregating textual information from the `momentum-design` repo and from design documentation the team captures in prose (no embedded images or Figma visuals in this phase).
- Record explicitly that **shipped code in this repository is authoritative** when guidance conflicts with other sources; KB prose should align with or defer to code.
- Keep this phase limited to **aggregation and structure**: no MCP, no change to momentum.design as the public docs destination, no new governance process required for merge.

Verification: the repository contains `packages/knowledge/` with a short README describing the tree; at least one file exists per top-level domain you define (e.g. tokens, assets, components, patterns, tools — exact names are an implementation detail); and another contributor can follow the README to add a new `.md` file in the correct place.

---

## User stories

- As a designer, I want a clear folder and file pattern for textual design guidance so I can contribute without duplicating momentum.design’s publishing pipeline.
- As an engineer, I want the KB to treat shipped code as the source of truth when something disagrees so implementation and docs do not fight each other.
- As a contributor, I want a root index and conventions so I know where tokens, components, assets, and cross-cutting patterns belong.
- As a reader (human or AI), I want stable paths and predictable headings so I can scan or retrieve content without special tooling in this phase.
- As a future maintainer, I want text-only KB files in this phase so we can add visuals, automation, or MCP later without redoing the whole tree.

---

## Out of scope / non-goals

- Building, deploying, or integrating a custom MCP server (including resources, tools, or prompts).
- Replacing, sunsetting, or fully migrating momentum.design; public site remains as-is for readers.
- Embedding images, diagrams, or Figma visuals inside KB markdown in this phase (links to external URLs are allowed if needed).
- Vector search, embeddings, automated Figma export/sync, or generated doc pipelines from Figma.
- Defining formal governance (CODEOWNERS, approval matrices, SLAs) for KB changes in this phase.

---

## Constraints and risks

- **Location:** All new KB content for this initiative lives under `packages/knowledge` in the monorepo.
- **Precedence:** When Figma, narrative docs, or the KB disagree with behavior or APIs, **shipped code wins**; designers and engineers jointly own updating KB text to match.
- **Drift:** Until the docs site consumes `packages/knowledge`, parallel editing of momentum.design and the KB can diverge; mitigations are informal until a later phase links them.
- **Text-only:** Some topics are harder without figures; authors may rely on short descriptions and links rather than embedded media.

---

## Open questions

- Final top-level folder names and whether generated machine-readable excerpts (e.g. from tokens or CEM) live under `packages/knowledge` or only human-authored markdown in phase 1.
- How Figma-informed content enters the KB under the no-embed rule (manual summary only vs. links to Figma with no preview in-repo).
- When and how `packages/documentation` (or momentum.design build) will ingest `packages/knowledge` — not required to start writing files, but affects long-term single-source-of-truth claims.
