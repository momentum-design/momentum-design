# Knowledge Base

## Overview

The **Knowledge Base** will become the authoritative home for Momentum Design System content: the one place product, design, engineering teams, or even AI can go to understand what the system is, how it works, what to use, and how to use it correctly. Today, our guidance lives across Figma, our Storybook, and Vidcast; this project will consolidate that material into a structured, searchable, and maintainable experience so **design documentation, guidelines, and patterns stay aligned with coded tokens, components, and assets**.

This **will become our single source of truth** for all Momentum Design System information. 

## Problem
Currently information for the Momentum Design System is in a variety of places and very difficult to obtain. Information in Figma is hard to search for and find, particularly by non-designers. Information in Storybook or on the website is difficult for designers to update if necessary. Connected information, or related information might be found in multiple places and be out of date with each other.

## Background
The Momentum Design Team has historically kept all design system related guidance within its Figma projects. Once we began work on the Web UI Toolkit, we also started keeping developer documentation on our website and Storybook. 

**User Research Findings**
Designer User Research was performed at the end of 2025 finding that design system information was particularly difficult for designers to find. Developers using our system are completely unaware of design guidelines and documentation, relying solely on the website. 

[Link to user research.](https://www.figma.com/design/IqaWb8V5D9ekZlFWpObJOD/2025-2026-Momentum-Research?node-id=90-398&t=xSclmonSgD6oH6BX-11). Speak to Claire Kim or Shannon Kha for more information or to ask for a recording.

**Beginning work**
Trip Carroll has put together a small amount of work on this knowledge base. A branch with the work can be found here: [knowledge-base-project branch](https://github.com/tricarro/momentum-design/tree/knowledge-base-project). This work can be used as a starting place or discarded as project owners see fit. 

## Goals
1. **Architectural proposal** — End-to-end design for the knowledge base (information architecture, repo layout, authoring and review workflow) that addresses the problems in this brief.
2. **Markdown as the canonical source** — A single, structured knowledge base that is the authoritative place for Momentum Design System information and is both human- and machine-readable.
3. **External consumption model** — Clear plan for how public surfaces (e.g. website, Storybook) **consume** the same markdown so guidance stays in sync; implementation and wiring can land in follow-on work (see Non-Goals).
4. **MCP-ready architecture** — The design explicitly supports the Momentum MCP server as a consumer (stable paths, chunking, or metadata as needed).
5. **Access and security posture** — Proposal covers what is public vs internal-only and how to maintain that boundary over time.

## Non-Goals
1. Linking knowledge base to our website/Storybook. This should be done eventually, but it is not necessarily part of this work.

## Users
Any designer, engineer, product manager, or user of Momentum (including AI tools).  

## Requirements
- **Canonical markdown** — All substantive design-system guidance ultimately lives in this knowledge base; other surfaces derive from or deep-link to it rather than duplicating truth.
- **Human- and AI-legible** — Content is structured (consistent headings, predictable hierarchy, and conventions suitable for search, docs tooling, and MCP retrieval).
- **Architectural deliverable** — The proposal must spell out integration touchpoints: website and Storybook (consumption pattern), MCP consumption, and **public vs internal** content handling at a minimum.

## Success Metrics

## Open Questions
Should images be included in this knowledge base? All Momentum's design documentation contains images. Should we build this in a way where those images can continue to be used? 

## Stakeholders
**Owners**
Supriya Minnasandram, Software Engineer
Morgan Bathe, Lead Product Designer

**Keep in the loop**
Trip Carroll, Momentum Lead




