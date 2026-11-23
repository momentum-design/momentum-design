---
name: momentum-verify-code-connect-sync
description:
  'Audit whether a component is still in sync across the three artifacts a Code Connect mapping spans: the component
  source (via custom-elements.json), its .figma.ts templates, and the Figma component set (via the Figma MCP server).
  Use when asked to verify, audit, or check Code Connect for drift, before publishing a mapping that already exists,
  after a component API change or a design change, or when Dev Mode shows a snippet that looks wrong. Do not use to
  author a new template — that is momentum-figma-code-connect.'
---

# Verifying a Code Connect mapping stays in sync

Three artifacts must agree and nothing enforces it: the component ships from `src/`, the design ships from Figma, and
the template joining them is published by hand. Any one can move without the others noticing, and the only symptom is
a snippet in Dev Mode that is quietly wrong.

[`momentum-figma-code-connect`](../momentum-figma-code-connect/SKILL.md) owns authoring and publishing, including the
iron rule about never asserting Code Connect behaviour from memory. This skill only audits.

## Gather

| Artifact  | Source of truth for        | How                                                                                         |
| --------- | -------------------------- | ------------------------------------------------------------------------------------------- |
| Component | what it **accepts**        | `yarn components build:manifest`, then read `dist/custom-elements.json`                     |
| Templates | what Dev Mode **shows**    | read `src/components/<name>/code-connect/*.figma.ts` and any shared mappings module         |
| Figma set | what the design **offers** | `get_context_for_code_connect(fileKey, nodeId)` — one call per set, coordinates from `.env` |

The manifest is a gitignored build artifact: rebuild it, or you audit a stale API. `attributes[].name` is what a Web
Components template emits and `attributes[].fieldName` is what a React one emits; `type.text` is an alias, so resolve
it in `<name>.constants.ts` to get the accepted values.

Read templates **statically**. Never execute one against a hand-built Figma stub — a stub only confirms your own
assumptions, and every name and value is already a literal in the source.

`get_code_connect_map(fileKey, nodeId)` returns the **published** snippet per variant node. It is the fastest way to
settle "does this actually work in Dev Mode", and the only way to see what is live, since publishing is manual.

If a `FIGMA_<SET>_URL` is missing from `.env`, ask for it. Never guess a node.

## Check

**Component ↔ template.** A mismatch ships a snippet that does not compile.

- every emitted prop name is in `attributes` — by `name` for Web Components, `fieldName` for React
- every mapped value is one that prop accepts
- the rendered tag and `// component=` match `tagName` / `className`
- every "X is not supported in code" note names something absent from both `attributes` and `slots`

**Template ↔ Figma set.** A mismatch shows an empty or partial snippet.

- every Figma property the template reads exists in the set
- every `getEnum` map is exhaustive over that property's variant options — compare literally, value by value
- every Figma property is either mapped or explicitly noted as unsupported
- every `findText` / `findInstance` layer name exists in the descendant tree
- the set is connected under both `Web Components` and `React`

**Component ↔ Figma set.** Findings to discuss, not defects. A set offering a subset of the component's API is normal
— Button/Selectable has no `primary`, Selectable/Icon stops at 24px. Compare across all of a component's sets
together and raise a remaining gap as a question for the designer. Do not encode the exceptions as an allowlist: a
stale entry hides a real gap behind an explanation that was true once.

## Report

One table, issues only. If there are none, say so in a line and stop — do not list what passed.

| Severity | Issue                                          | Evidence                                  |
| -------- | ---------------------------------------------- | ----------------------------------------- |
| defect   | `button-pill.webcomponent` emits `prefix-icn`  | not in `attributes` of `mdc-button`       |
| defect   | `Type` map omits `Quaternary`                  | Figma lists 7 options, the map has 6      |
| finding  | `color="promotional"` is reachable from no set | `BUTTON_COLORS` vs the four sets' `Color` |

Name any artifact you could not gather and what that left unchecked. A silently partial audit reads as a clean bill of
health.

Keep Figma URLs and node ids out of the report, out of any file you write, and out of commit messages and PR
descriptions. MCP arguments necessarily carry the node id; that is fine.
