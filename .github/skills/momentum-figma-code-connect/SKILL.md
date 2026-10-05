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
3. Run the [preflight](#preflight-templates-and-env) and resolve both inputs before writing anything.

Everything below is the Momentum-specific layer on top of that.

## Preflight: templates and `.env`

Two inputs can be missing independently, and both fail late and unhelpfully — an absent template is just a missing
snippet in Dev Mode, an absent `.env` entry fails `figma:validate` on an unresolved placeholder long after the work
looks done. Check both first, and **ask the user** for whatever is missing. Never guess a node URL, never reuse
another component's, and never derive one from a URL seen earlier in the conversation.

```bash
ls packages/components/src/components/<name>/code-connect/
# which placeholders the existing templates expect, if any
grep -h '^// url=' packages/components/src/components/<name>/code-connect/*.figma.ts
# -q, so the check never prints the URL into the transcript
grep -q '^FIGMA_<SET>_URL=.\+' packages/components/.env && echo set || echo missing
```

**One component can map to several Figma component sets.** `button` is one `mdc-button` but two sets, Button/Pill and
Button/Icon, each with its own node URL, its own template pair and its own `FIGMA_<SET>_URL`. Never assume a component
has exactly one set: if the name suggests variants that Figma models separately, ask which set the URL belongs to and
whether the others are wanted too.

**Templates missing or incomplete.** Ask the user to confirm the component and that both the `react` and
`webcomponent` files are wanted before generating anything — a half-connected set shows a missing snippet on
the other label. If only one of the pair exists, ask whether the other was deliberately skipped before adding it.

**`FIGMA_<SET>_URL` absent or empty.** Ask the user for the node URL as input, and say how to get one: right-click
the component or component set in Figma, _Copy link to selection_; the URL must contain a `node-id`. Then write it to
`packages/components/.env` — nowhere else. The grep above only matches non-empty values, so a stub line left over
from `.env.example` counts as missing. If the variable is already set, use it and do not ask.

**`.env` itself absent.** Copy `packages/components/.env.example` to `packages/components/.env`, then ask for the
node URL as above. `FIGMA_ACCESS_TOKEN` is a credential: never ask for it in chat or accept it in a message — tell
the user to paste it into `.env` themselves.

Treat a supplied URL as confidential: it goes in the gitignored `.env`, never into a template, a commit message, a PR
description, or a summary back to the user. Do not echo it.

If the user cannot supply the URL, say so and stop at the point it is needed. Templates can be written, but
`figma:validate`, `preview`, and `publish` are all blocked — never substitute a plausible-looking URL or a placeholder
that resolves to nothing to get past the gate.

## Output shape

Two files per **Figma component set**, both `.figma.ts`:

```
src/components/<name>/code-connect/<set>.react.figma.ts
src/components/<name>/code-connect/<set>.webcomponent.figma.ts
```

`<set>` is the component name when there is only one set (`radio.react.figma.ts`), and `<name>-<form>` when the
component is modelled as several (`button-pill.react.figma.ts`, `button-icon.react.figma.ts`). Give each set a
distinct `id` too — `button-pill` and `button-icon`, not `button` twice — because `findConnectedInstance` resolves
children by that id.

The two files in a pair carry the **same** `// url=` value and are separated only by config (`label` + `language` +
`include`). React renders `<Pascal />` and imports from `@momentum-design/components/dist/react`; Web Components
renders `<mdc-name>` and imports `@momentum-design/components/components/<name>`.

Each file needs three header comments:

| Comment         | Value                                                                                                                        |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| `// url=`       | `<FIGMA_<SET>_URL>` — the placeholder, never a literal URL                                                                   |
| `// source=`    | `https://github.com/momentum-design/momentum-design/blob/main/packages/components/src/components/<name>/<name>.component.ts` |
| `// component=` | `Radio` for React, `mdc-radio` for Web Components                                                                            |

Placeholder names are free-form: `createDocumentUrlSubstitutions` scans every `.figma.ts` for `// url=<…>` and resolves
what it finds from `.env`, so `<SET>` need not match the directory. It also means a typo in a placeholder resolves to
nothing rather than erroring — which is what `figma:validate` is for.

`source` is always the Lit component on `main`, and several sets mapping to one component all point at the same file:
`dist/` and `src/react` are gitignored build artifacts, so neither label can link to a React wrapper. A relative path
is silently discarded and produces an empty source link, which is why `figma:validate` asserts both the prefix and that
the file exists. Omitting `component` makes the publish listing show `undefined`.

## Privacy

This repository is public and the Figma file is not.

- Never write a literal Figma URL into a file, a commit message, or a PR description.
- `figma connect create` emits literal URLs. If you used it, run `yarn components figma:scrub` before staging — it
  rewrites them to placeholders and records the real value in the gitignored `.env`.
- `parse` and `preview` print the real URL. **Redact it** before pasting output anywhere.
- A new component also needs its `FIGMA_<SET>_URL` added to `.env` — one per Figma set, not one per component — or
  validation fails on the unresolved placeholder. See [preflight](#preflight-templates-and-env).

`scripts/checkFigmaSecrets.js` blocks the obvious mistakes at commit time, but it only catches real keys and tokens —
treat it as a backstop, not as permission to be careless.

## Writing the template

- **The component is the source of truth for props, not Figma.** Read `src/components/<name>/<name>.component.ts`, or
  `node_modules/@momentum-design/components/dist/custom-elements.json` after a build. Never emit an attribute that is
  not on the public API, however sensible the Figma property name sounds.
- **Interpolate every prop you map.** A declared-but-unused prop renders an empty snippet in Dev Mode and is the exact
  bug this effort exists to fix.
- **`getEnum` maps must be exhaustive** — every variant value from `get_context_for_code_connect`, no omissions.
- **Map every variant to a real value, including the component's default** — see
  [Defaults are values, not omissions](#defaults-are-values-not-omissions).
- **Guard every `findText` / `findInstance` result.** They return an `ErrorHandle`, not `null`. `tsc -p
tsconfig.figma.json` (wired into `analyze:syntax`) enforces this.
- **A boolean that gates visibility is a gate, not the content.** Never hardcode the gated copy — see
  [Booleans that gate visibility](#booleans-that-gate-visibility).
- **An INSTANCE_SWAP icon maps to a name string, not a nested render** — see
  [Instance-swap icons](#instance-swap-icons).
- **Interpolating an array into `figma.code` silently drops it.** Join to a string first.
- **`metadata.nestable`**: `true` for inline-composable primitives (icon, text, badge); `false` for containers (dialog,
  banner, accordion group).

Shared HTML helpers for the Web Components snippet live in `config/code-connect/html.ts` — use them rather than
hand-rolling attribute concatenation, and read their header comment before mixing them with
`figma.helpers.react.renderProp`, which handles separators differently.

### Defaults are values, not omissions

It is tempting to map the variant that already matches the component's default to `undefined` so the snippet stays
short — `Primary: undefined`, because `variant` defaults to `primary` anyway. Don't. That omission encodes today's
default into a published mapping, with nothing linking the two: change `DEFAULTS.VARIANT` and every `Type=Primary`
snippet in Dev Mode silently starts saying something the design never said. No test fails, no type breaks, and nobody
editing the component has a reason to open a `.figma.ts` file.

Write the value out every time, default or not:

```ts
// Correct — still says what the design says after DEFAULTS.VARIANT changes.
const variant = instance.getEnum('Type', { Primary: 'primary', Secondary: 'secondary', Tertiary: 'tertiary' });

// Wrong — correct only for as long as `primary` stays the default.
const variant = instance.getEnum('Type', { Primary: undefined, Secondary: 'secondary', Tertiary: 'tertiary' });
```

That leaves `undefined` with exactly one meaning: **this Figma value has no code equivalent.** `State=Hover` is a
rendered state with no prop behind it, so it maps to `undefined`; `Color=Default` is a value `color` accepts, so it
maps to `'default'`.

**Booleans are the exception, because HTML gives no way to write false.** A bare attribute is true by its presence,
and Lit's default converter resolves `fromAttribute` as `value !== null`, so `inverted="false"` sets the property to
`true`. Omission _is_ the false value: keep `false: undefined` in `getBoolean` maps and keep using `booleanAttribute`.

### Booleans that gate visibility

The recurring Momentum shape is a BOOLEAN property bound to the `visible` of a wrapper instance that holds the real
text layer — `Helper Text` → `.Core - Helper Text` → `Body Text`. Read the layer, and let `getBoolean` decide whether
to emit it:

```ts
// "Body Text" sits inside the `.Core - Helper Text` instance, so the lookup has to cross that boundary.
const helpTextLayer = instance.findText('Body Text', { traverseInstances: true });

const helpText = instance.getBoolean('Helper Text', {
  true: helpTextLayer.type === 'TEXT' ? helpTextLayer.textContent : undefined,
  false: undefined,
});
```

Three things make this go wrong, and all three look identical from the outside — an absent prop:

- **`findText` stops at instance boundaries.** The gated layer nearly always sits inside the wrapper instance, so it
  needs `{ traverseInstances: true }`. Without it you get an `ErrorHandle`. Read the `descendants` tree from
  `get_context_for_code_connect`: anything nested under an `INSTANCE[...]` requires the option.
- **The mapping object is not lazy.** Both branches of a `getBoolean` map are evaluated before the boolean is read, so
  inlining the call as `{ true: instance.findText('Body Text') }` defers nothing — and still yields a handle, not a
  string.
- **`preview` cannot exercise this path.** `--props` only feeds `getBoolean` / `getEnum`; it does not change the
  traversed node tree, which is always the component's default state. A layer hidden by default stays pruned, so the
  prop is missing from every preview render regardless of `--props`. This hits every tree-walking accessor, not just
  `findText`: `getInstanceSwap` returns `undefined` for a gated layer even though `getPropertyValue` still reports the
  swapped node id. Confirm with a control — run a probe twice, once with the gating boolean on and once off, and watch
  `findLayers` return an identical list while `getBoolean` tracks the flag.

That last point is the trap, and it is settled: the button's instance-swap icons are absent from every preview render
and resolve correctly in Dev Mode. An `ErrorHandle` or an `undefined` swap in `preview` is **not** evidence that the
template is wrong, and it is never grounds for hardcoding the design string. Verify in Dev Mode against a real instance
with the toggle on.

### Instance-swap icons

Momentum components take an icon as a name string (`prefix-icon="placeholder-bold"`), not as a nested component, so an
INSTANCE_SWAP icon does **not** want `executeTemplate()`. Every icon asset is named `<base>-<weight>`, and Figma splits
that across two places: the base is the swapped instance's `.name`, the weight is a variant on that same instance.
`config/code-connect/icon.ts` reassembles them — use it rather than re-deriving the convention:

```ts
const leadingIcon = iconName(instance.getInstanceSwap('Leading Icon Type'));

const prefixIcon = instance.getBoolean('Leading Icon', { true: leadingIcon, false: undefined });
```

Address the icon through its INSTANCE_SWAP property, never `findInstance`. Momentum sets routinely name both the
leading and trailing icon layers `placeholder`, which `findInstance` cannot tell apart and `path` cannot fix when both
sit at the same depth.

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
limit it to the files you just wrote ([CLI reference](https://developers.figma.com/docs/code-connect/cli-reference/)).
It takes several space-separated paths, so a component with more than one Figma set still publishes in one command per
label.

### 1. Dry run first

```bash
yarn components figma:publish:webcomponent --dry-run --file src/components/<name>/code-connect/<set>.webcomponent.figma.ts
yarn components figma:publish:react        --dry-run --file src/components/<name>/code-connect/<set>.react.figma.ts
```

`--dry-run` validates and prints a "Files that would be published" list without writing anything. Confirm the list
holds one entry per set you intended and the expected label (`Web Components` / `React`), and nothing else. The output
contains the real Figma URL — **redact it** before quoting it back to the user.

### 2. Ask for approval

Show the user the dry-run file list and the label for each config, then ask for explicit approval to publish. "Looks
good" or equivalent is required; silence is not consent. Do not publish on an assumed yes, and do not publish as a
side effect of being asked to "finish" or "wrap up" the work.

### 3. Publish

```bash
yarn components figma:publish:webcomponent --file src/components/<name>/code-connect/<set>.webcomponent.figma.ts
yarn components figma:publish:react        --file src/components/<name>/code-connect/<set>.react.figma.ts
```

Both labels must be published — a set connected for only one of them shows a missing snippet in the other.

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
- Both configs dry-run clean, listing one entry per Figma set you touched and nothing else.
- The user explicitly approved publishing, and every set is published under both `Web Components` and `React` — or the
  user declined, and that is stated back to them so the templates are not silently left unpublished.
