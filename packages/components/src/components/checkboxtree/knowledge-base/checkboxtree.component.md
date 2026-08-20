---
title: Checkbox Tree
summary:
  Usage, guidelines, and accessibility for the mdc-checkboxtree component — a recursive checkbox group with hierarchical
  selection and mixed parent states.
tier: 3
component: checkboxtree
---

## Overview

The checkbox tree lets people select related options at different levels while parent choices summarize and control
their descendants. It supports hierarchical choice sets that would be difficult to understand as one flat group.

### When to use

- Use `mdc-checkboxtree` when options belong to categories and people need to select any number of categories or
  individual descendants.
- Use `mdc-checkboxtree` when a parent choice must select or clear every available option in its branch.
- Use `mdc-checkboxtree` when mixed parent states help people understand that only part of a category is selected.

### When not to use

- Do not use a checkbox tree for a flat list of unrelated options. Use `mdc-formfieldgroup` with direct `mdc-checkbox`
  children instead.
- Do not use a checkbox tree when exactly one option can be selected. Use `mdc-radiogroup` with `mdc-radio` children
  instead.
- Do not use a checkbox tree when branches must collapse or expand. Use an application-specific tree view that
  implements the complete disclosure and keyboard contract instead.
- Do not use a deeply nested checkbox tree when the hierarchy can be split into smaller steps or filtered lists.
  Shallower choices are easier to scan and use on small screens.

## Guidelines

### Developer usage

Import and use the component through its React wrapper or directly as a custom element:

```tsx
import '@momentum-design/components/dist/components/checkboxtree/index.js';
// or via React wrapper
import { CheckboxTree } from '@momentum-design/components/dist/react';
```

Place a nested `mdc-checkboxtree` immediately after the `mdc-checkbox` that owns the branch:

```html
<mdc-checkboxtree label="Select your Avengers team" help-text="Select all that apply." required>
  <mdc-checkbox label="Avengers"></mdc-checkbox>
  <mdc-checkboxtree>
    <mdc-checkbox label="Iron Man"></mdc-checkbox>
    <mdc-checkbox label="Captain America"></mdc-checkbox>
  </mdc-checkboxtree>

  <mdc-checkbox label="Guardians of the Galaxy"></mdc-checkbox>
  <mdc-checkboxtree>
    <mdc-checkbox label="Peter Quill"></mdc-checkbox>
  </mdc-checkboxtree>
</mdc-checkboxtree>
```

Listen for the bubbling `change` event from the affected `mdc-checkbox`. Read `event.target.checked` and
`event.target.indeterminate` for its resulting state.

### Composition

- Place only direct `mdc-checkbox` and `mdc-checkboxtree` elements in each tree's default slot.
- Associate descendants by placing one nested tree immediately after its parent checkbox. Whitespace and comments are
  allowed; another element between the checkbox and tree breaks the association.
- Repeat the same checkbox-then-tree sequence at each level. Every nested tree adds one logical indentation step and can
  contain more nested trees.
- Put the visible `label`, helper text, required indicator, validation state, and optional information toggletip on the
  outermost tree. Nested trees are structural and do not render separate headers.
- Aim for no more than three levels of nesting so labels and controls remain usable on small screens. The component does
  not enforce a maximum depth.

### Content guidance

- Write the group label as a short instruction that describes the full choice set, such as “Select your Avengers team”.
- Write checkbox labels as distinct noun phrases in sentence case. Do not add ending punctuation unless a label is a
  full sentence.
- Keep helper text brief and explain a requirement or consequence instead of repeating the group label.
- State errors with the action needed to continue, such as “Select at least one team member.”

### Property/Attribute details

| Option                      | Intent                                                                                                                                                 |
| --------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `label`                     | Names the complete choice set and is announced when focus enters the checkbox collection. Set it on the outer tree.                                    |
| `help-text`                 | Adds supplementary instructions or the current validation message to the outer group's accessible description.                                         |
| `help-text-type="error"`    | Marks the outer group invalid and presents the helper text as an error. Use it only while the group has a validation problem.                          |
| `--mdc-checkboxtree-indent` | Changes the logical indentation added at every nested level. Keep the default unless the surrounding layout requires a coordinated spacing adjustment. |

### Limitations

- **Branches stay visible** — the component does not collapse or expand branches, and `ArrowLeft` and `ArrowRight` do
  not change the hierarchy. Use a complete tree-view implementation when disclosure is required.
- **Adjacency defines ownership** — a nested tree belongs only to the checkbox immediately before it. Keep those
  elements as direct siblings and use another nested tree for every additional level.
- **Parent state is derived** — programmatic leaf changes recalculate their ancestors, while parent checked and mixed
  states are derived from descendants. Update descendant checkboxes when applying a branch selection programmatically.
- **Immutable choices stay unchanged** — parent activation skips disabled, read-only, and soft-disabled descendants, so
  the parent can remain mixed. Set immutable descendant state explicitly when the branch must resolve to one state.
- **Depth is not constrained** — recursive composition accepts any depth, although more than three levels can become
  difficult to scan or fit on small screens. Split deeper structures into smaller flows.
- **The tree is not submitted** — each `mdc-checkbox` remains its own form control and the tree has no aggregate form
  value. Set checkbox `name` and `value` attributes and perform group validation in the consuming form.
- **`required` is presentational** — the outer tree displays the required indicator but does not require one descendant
  automatically. Validate the selection in the consuming form and expose the result with `help-text-type="error"`.

## Accessibility

### Built-in features

The checkbox collection uses one roving tab stop. `Tab` enters at the current item and then leaves the collection,
`ArrowUp` and `ArrowDown` move through enabled checkboxes without wrapping, `Home` and `End` move to the first and last
enabled checkbox, and `Space` uses the focused checkbox's built-in toggle behavior. `ArrowLeft` and `ArrowRight` do
nothing because branches cannot collapse or expand. An optional information button remains a separate tab stop.

The outer tree exposes a labeled and described group. Nested trees stay out of the accessibility tree as separate
groups, preventing repeated announcements while every `mdc-checkbox` keeps its built-in checkbox role, accessible name,
and `aria-checked` value. Parent checkboxes expose `mixed` when their descendants do not share one state.

Disabled checkboxes are skipped during arrow navigation. Read-only and soft-disabled checkboxes remain focusable so
their state can still be discovered, but they cannot be changed.

#### Internal ARIA managed by the component

| Element                       | Attribute          | Value                                                                             |
| ----------------------------- | ------------------ | --------------------------------------------------------------------------------- |
| Outermost host                | `role`             | `group`                                                                           |
| Outermost host                | `aria-label`       | Mirrors the visible `label` unless the consumer supplies an explicit `aria-label` |
| Outermost host                | `aria-description` | Mirrors `help-text` when provided                                                 |
| Outermost host                | `aria-invalid`     | `true` while `help-text-type="error"`; otherwise omitted                          |
| Nested hosts                  | Group attributes   | Removed so nested structure does not create redundant group announcements         |
| Child checkbox input          | `aria-checked`     | `true`, `false`, or `mixed`, managed by `mdc-checkbox`                            |
| Child checkbox host and input | `tabindex`         | One enabled checkbox uses `0`; the remaining tree checkboxes use `-1`             |

### Implementation requirements

#### General

- Preserve the direct checkbox-then-tree sibling structure so selection propagation, mixed states, logical indentation,
  and keyboard order all describe the same hierarchy.
- Do not add `role="tree"` or `role="treeitem"`. This widget intentionally exposes native checkboxes inside a labeled
  group and does not implement expand or collapse behavior.
- Supply distinct `name` and `value` attributes when descendant selections must be submitted with a form.
- Keep the logical reading order meaningful without indentation; assistive technologies encounter checkboxes in DOM
  order.

#### Labeling

- Set a visible `label` on every outer checkbox tree. It names the group when assistive technology enters the checkbox
  collection.
- Give every child checkbox a concise, unique `label`; the indentation alone does not provide an accessible name.
- Use `help-text` for supplementary instructions and replace it with a direct, actionable error while
  `help-text-type="error"` is active.
- Set `info-icon-aria-label` whenever `toggletip-text` adds an information button to the group label.

## Related components

| Component                      | Relationship                                                                                                |
| ------------------------------ | ----------------------------------------------------------------------------------------------------------- |
| `mdc-checkbox`                 | Provides every interactive choice and the checked, unchecked, and mixed states managed by the tree.         |
| `mdc-formfieldgroup`           | Groups a flat set of checkboxes under one label without hierarchical state propagation or arrow navigation. |
| `mdc-radiogroup` / `mdc-radio` | Represents a group where exactly one option can be selected.                                                |
| `mdc-staticcheckbox`           | Displays a non-interactive checkbox state when selection is not available.                                  |
