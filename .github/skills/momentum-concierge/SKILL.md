---
name: momentum-concierge
description: Retrieve and apply canonical Momentum Design knowledge-base guidance for component selection, assets and tokens, accessibility reviews, content guidance, and design-system questions. Use whenever a user asks a relevant Momentum Design question.
---

# Momentum Concierge

Use this skill to answer questions from the Momentum Design knowledge base. It retrieves documented guidance; it does not create Momentum policy.

## Source of truth

Repository Markdown is authoritative. Do not use retired Figma documentation as a source of truth.

Retrieve the public knowledge base from <https://github.com/momentum-design/momentum-design> first so answers use the latest guidance published on `main`.

- Read remote files from `https://raw.githubusercontent.com/momentum-design/momentum-design/main/<path>`, replacing `<path>` with the index entry's canonical `path`.
- Remote retrieval is internal. Cite canonical repository paths as plain inline code, such as `knowledge-base/accessibility.md`, rather than linking users to GitHub Markdown files or raw-content URLs.
- Do not claim the fetched content is immutable or guarantee that an intermediary has not cached it. Include the remote commit SHA or retrieval date when the available capability exposes that information and traceability is useful.

If remote retrieval fails, look for a local checkout of `momentum-design/momentum-design`:

1. Check the active workspace and its parent and sibling directories.
2. Check common repository roots that are accessible on the user's device, including `~/Github`, `~/GitHub`, `~/Projects`, and `~/src`.
3. Prefer a directory named `momentum-design`. Verify its Git remote points to `momentum-design/momentum-design` before using it.

Use the first verified local checkout found. Resolve each index and topic path from its repository root without pulling, switching branches, or otherwise modifying it. Do not recursively search the user's entire home directory. State that local fallback content was used and that its freshness could not be verified.

If neither remote retrieval nor a verified local checkout is available, report a retrieval failure.

- `knowledge-base/index.components.json` indexes component-specific topics.
- `knowledge-base/index.packages.json` indexes package and asset topics.
- `knowledge-base/index.root.json` indexes design-system-wide topics.
- Each index entry's `path` identifies the canonical topic file.

## Retrieval workflow

1. Classify the request:
   - A named component or component behavior → start with the component index.
   - An asset, token, or package question → start with the package index.
   - A cross-cutting topic such as content or accessibility → start with the root index.
2. Read only the selected index and find the most relevant topic. Use exact `component` or `owner` fields when they are present; otherwise match the canonical topic's title or ID.
3. If the index misses, escalate only as needed:
   - component → package → root
   - package → root
4. Read the canonical topic file at the matching entry's `path`.
5. Answer from that file. Do not treat an index summary as the full source when the topic is available.

## Response contract

- Cite the canonical repository path for every documented Momentum claim as plain inline code, never as a GitHub URL.
- State the recommendation first, then the relevant rationale or constraints.
- Label advice that is not documented in the knowledge base as **General recommendation**.
- When no canonical topic exists, say which index or topic paths were searched and do not imply that a general recommendation is Momentum policy.
- Surface conflicting or incomplete documentation rather than silently resolving it.

## Coverage gaps

Treat any of these as a gap:

- No canonical guidance is found after the required lookup.
- The canonical guidance does not answer the user's task.
- Relevant topics conflict or appear stale.
- The knowledge base cannot be retrieved.

## Report a gap with a GitHub issue

For a coverage gap, prepare a sanitized issue for `momentum-design/momentum-design`. Choose the title format that matches the gap:

```text
missing:           [KB gap: missing] <concise sanitized topic>
unclear:           [KB gap: unclear] <concise sanitized topic>
stale:             [KB gap: stale] <concise sanitized topic>
conflicting:       [KB gap: conflicting] <concise sanitized topic>
retrieval failure: [KB gap: retrieval failure] <concise sanitized topic>
```

Use this body:

```markdown
## Gap type

`<missing | unclear | stale | conflicting | retrieval failure>`

## Need

<sanitized user goal>

## Searched

<canonical paths or indexes>

## Expected

<guidance that would have helped>

## Context

<optional; include only user-approved context, otherwise omit this section>
```

Do not include raw prompts, source code, customer information, credentials, tokens, or other sensitive data in the title or body.

Before creating the issue:

1. Show the exact title and body, followed by:

   ````markdown
   No canonical Momentum guidance was found. To submit this gap, reply with exactly:

   ```text
   share feedback
   ```
   ````

   Preserve the fenced `text` block so the approval phrase is visually distinct.

2. Treat only an explicit `share feedback` reply for that exact draft as approval. Any change to the title or body requires new approval.
3. After approval, use an available authenticated GitHub issue-creation capability to create one issue in `momentum-design/momentum-design` with the exact approved title and body.
4. Return the created issue URL. If GitHub access is unavailable or creation fails, retain the draft and provide a `Submit it manually` link using:

   `https://github.com/momentum-design/momentum-design/issues/new?title=<encoded-title>&body=<encoded-body>`

   Percent-encode the exact approved title and body separately as UTF-8 query parameter values. Do not interpolate unencoded draft content into the URL. Opening the link must pre-populate both GitHub issue fields without submitting the issue.

Do not create the issue without approval. Do not create it in another repository or modify repositories, pull requests, labels, milestones, projects, or existing issues. Do not expose or store GitHub credentials or tokens.

## Examples

- “Use Momentum guidance to choose a component for a destructive confirmation.”
- “Review this form against Momentum accessibility guidance.”
- “What does Momentum recommend for icon-only button labels?”
- “Find the Momentum guidance for product UI copy.”
