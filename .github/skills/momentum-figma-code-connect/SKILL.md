---
name: momentum-figma-code-connect
description:
  'Create, update, and publish Figma Code Connect template files for a component in packages/components, using the Figma
  MCP server to read the component definition. Use when asked to connect a component to Figma, write or fix a
  .figma.ts template, refresh a mapping after a component API or design change, publish or unpublish a mapping, or when
  Dev Mode shows a wrong, empty, or missing snippet. Do not use for Figma design-to-code work, or for packages other
  than components.'
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

## Publishing

Publishing writes to the shared Figma file and is immediately visible to every designer and developer in Dev Mode.
There is no CI job and no staging step, so treat it as a production deploy.

### Scope the publish to this component

`publish` has no `--node`; left alone it publishes **every** file matched by the config's `include` glob, which would
republish unrelated components from whatever state the working tree happens to be in. Pass `-f, --file <file...>` to
limit it to the two files you just wrote ([CLI reference](https://developers.figma.com/docs/code-connect/cli-reference/)).

### 1. Dry run first

```bash
yarn components figma:publish:webcomponent --dry-run --file src/components/<name>/code-connect/<name>.webcomponent.figma.ts
yarn components figma:publish:react        --dry-run --file src/components/<name>/code-connect/<name>.react.figma.ts
```

`--dry-run` validates and prints a "Files that would be published" list without writing anything. Confirm the list
contains only this component and the expected label (`Web Components` / `React`). The output contains the real Figma
URL — **redact it** before quoting it back to the user.

### 2. Ask for approval

Show the user the dry-run file list and the label for each config, then ask for explicit approval to publish. "Looks
good" or equivalent is required; silence is not consent. Do not publish on an assumed yes, and do not publish as a
side effect of being asked to "finish" or "wrap up" the work.

### 3. Publish

```bash
yarn components figma:publish:webcomponent --file src/components/<name>/code-connect/<name>.webcomponent.figma.ts
yarn components figma:publish:react        --file src/components/<name>/code-connect/<name>.react.figma.ts
```

Both labels must be published — a component connected for only one of them shows a missing snippet in the other.

Never pass `--force`. It overwrites Code Connect mappings authored in the Figma UI, which the repo has no record of and
cannot restore.

### 4. Verify, and how to roll back

Read the published list in the output and confirm it matches the dry run. If a bad mapping ships, unpublish that one
node rather than running a bare `figma connect unpublish` — without `--node` it unpublishes **everything** in the
config ([quickstart](https://developers.figma.com/docs/code-connect/quickstart-guide/#unpublish-code-connect-files)):

```bash
yarn components figma connect unpublish --node <NODE_URL> --label "Web Components"
```

The node URL is confidential; take it from `.env`, keep it out of the chat transcript, and never record the command
with a literal URL in a commit message or PR description.

## Definition of done

- `yarn components figma:validate` exits 0.
- `yarn components analyze:syntax` exits 0.
- `figma connect preview <file> --unique` renders the expected snippet. **Read the output** — it exits 0 even when it
  fails to reach Figma, so the exit code alone proves nothing.
- No literal Figma URL anywhere in the diff.
- Both configs dry-run clean and scoped to this component only.
- The user explicitly approved publishing, and both `Web Components` and `React` are published — or the user declined,
  and that is stated back to them so the templates are not silently left unpublished.
