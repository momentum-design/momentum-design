---
name: momentum-figma-code-connect
description:
  'Create or update Figma Code Connect template files for a component in packages/components, using the Figma MCP server
  to read the component definition. Use when asked to connect a component to Figma, write or fix a .figma.ts template,
  refresh a mapping after a component API or design change, or when Dev Mode shows a wrong, empty, or missing snippet.
  Do not use for publishing, for Figma design-to-code work, or for packages other than components.'
---

# Figma Code Connect for Momentum components

Code Connect makes Dev Mode show a real Momentum snippet instead of generated CSS. This skill covers only what is
specific to this repository; the API itself is Figma's.

## Before anything else

1. Ensure the [components package AGENTS.md](../../../packages/components/AGENTS.md) is in context and obey its **iron
   rule**: never assert Code Connect behaviour from memory. Read the relevant page on
   <https://developers.figma.com/docs/code-connect/> and cite it. Most widely known Code Connect material describes the
   removed parser format.
2. Load the canonical Figma skill completely. Prefer an installed `/figma-code-connect`; otherwise read
   `skill://figma/figma-code-connect/SKILL.md` from the Figma MCP server. It owns the template API, the accessor
   choices, and the hard rules about `executeTemplate`, `getInstanceSwap`, and `getSlot`.
3. Ask the user for the node URL. Never guess one, never reuse another component's, and never derive one from a URL
   seen earlier in the conversation.

Everything below is the Momentum-specific layer on top of that.

## Output shape

Two files per component, both `.figma.ts`:

```
src/components/<name>/code-connect/<name>.react.figma.ts
src/components/<name>/code-connect/<name>.webcomponent.figma.ts
```

They carry the **same** `// url=` value and are separated only by config (`label` + `language` + `include`). React
renders `<Pascal />` and imports from `@momentum-design/components/dist/react`; Web Components renders `<mdc-name>` and
imports `@momentum-design/components/components/<name>`.

Each file needs three header comments:

| Comment         | Value                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `// url=`       | `<FIGMA_<NAME>_URL>` — the placeholder, never a literal URL                                                                  |
| `// source=`    | `https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/<name>/<name>.component.ts` |
| `// component=` | `Radio` for React, `mdc-radio` for Web Components                                                                            |

`source` is always the Lit component on `main`: `dist/` and `src/react` are gitignored build artifacts, so neither label
can link to a React wrapper. A relative path is silently discarded and produces an empty source link, which is why
`figma:validate` asserts both the prefix and that the file exists. Omitting `component` makes the publish listing show
`undefined`.

## Privacy

This repository is public and the Figma file is not.

- Never write a literal Figma URL into a file, a commit message, or a PR description.
- `figma connect create` emits literal URLs. If you used it, run `yarn components figma:scrub` before staging — it
  rewrites them to placeholders and records the real value in the gitignored `.env`.
- `parse` and `preview` print the real URL. **Redact it** before pasting output anywhere.
- A new component also needs its `FIGMA_<NAME>_URL` added to `.env`, or validation fails on the unresolved placeholder.

`scripts/checkFigmaSecrets.js` blocks the obvious mistakes at commit time, but it only catches real keys and tokens —
treat it as a backstop, not as permission to be careless.

## Writing the template

- **The component is the source of truth for props, not Figma.** Read `src/components/<name>/<name>.component.ts`, or
  `node_modules/@momentum-design/components/dist/custom-elements.json` after a build. Never emit an attribute that is
  not on the public API, however sensible the Figma property name sounds.
- **Interpolate every prop you map.** A declared-but-unused prop renders an empty snippet in Dev Mode and is the exact
  bug this effort exists to fix.
- **`getEnum` maps must be exhaustive** — every variant value from `get_context_for_code_connect`, no omissions.
- **Guard every `findText` / `findInstance` result.** They return an `ErrorHandle`, not `null`. `tsc -p
tsconfig.figma.json` (wired into `analyze:syntax`) enforces this.
- **Copy inside a visibility-bound layer is unreachable.** If a text layer's visibility is bound to a boolean property,
  its content cannot be read even when that boolean is forced on. Mirror the design string as a literal and comment why,
  rather than leaving a bare `TODO`.
- **Interpolating an array into `figma.code` silently drops it.** Join to a string first.
- **`metadata.nestable`**: `true` for inline-composable primitives (icon, text, badge); `false` for containers (dialog,
  banner, accordion group).

Shared HTML helpers for the Web Components snippet live in `config/code-connect/html.ts` — use them rather than
hand-rolling attribute concatenation, and read their header comment before mixing them with
`figma.helpers.react.renderProp`, which handles separators differently.

## Updating an existing template

Updating is not "re-run the generator". A stale template is worse than none, because Dev Mode presents it as current.

1. Diff the component's public API against what the template maps. Props added since it was written are missing;
   removed props are now invalid.
2. Re-fetch the Figma property definitions and re-check **every** `getEnum` map for variants added on the design side.
3. Run `figma connect preview <file> --unique` and compare against what is published today — the published snippet can
   be **ahead of** the repo, because publishing is manual. A difference is not automatically a bug in the template.
4. If the component was renamed or moved, fix `// source=` too; nothing else will catch a 404 link except
   `figma:validate`.

## Definition of done

- `yarn components figma:validate` exits 0.
- `yarn components analyze:syntax` exits 0.
- `figma connect preview <file> --unique` renders the expected snippet. **Read the output** — it exits 0 even when it
  fails to reach Figma, so the exit code alone proves nothing.
- No literal Figma URL anywhere in the diff.
- **Do not publish.** `figma connect publish` is a human action, run locally, outside an agent session.
