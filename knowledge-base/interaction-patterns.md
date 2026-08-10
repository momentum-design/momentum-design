---
title: Interaction patterns
summary: The shared interaction model for Momentum — keyboard and focus behavior, overlay and dismissal rules, selection, and how to compose loading, empty, and error states.
tier: 1
---

**Primary audience:** Product design and engineering.

## Purpose and scope

Momentum components share a consistent interaction model so that a control learned in one place behaves the same everywhere. This topic captures that cross-cutting model — the behaviors that recur across many components — so individual component topics can focus on what is specific to them.

It covers:

- The keyboard and focus model shared across controls
- How overlays open, dismiss, and return focus
- Selection and activation conventions
- Composing loading, empty, and error states

It does **not** restate per-component key bindings or props (see each component's Tier 3 topic), accessibility conformance detail (see [accessibility](./accessibility.md)), or the copy inside these states (see [content guidelines](./content-guidelines.md)).

## Keyboard and focus model

Consistency here is what makes the system predictable. Follow the same conventions whether you use a component or compose your own.

### Activation

- **Enter** and **Space** activate buttons and button-like controls.
- **Enter** follows links.
- Toggle controls (`mdc-toggle`, `mdc-checkbox`, `mdc-radio`) change state on **Space**; radios move selection with arrow keys within their group.

### Moving within a composite

Composite widgets — menus, lists, tablists, comboboxes, sliders, steppers — are a **single tab stop** with arrow keys moving between their items, not one tab stop per child. This keeps the tab sequence short and matches assistive-technology expectations.

- **Arrow keys** move between items in the natural axis of the widget.
- **Home / End** jump to the first / last item where applicable.
- **Type-ahead** selects by first characters in listbox-style widgets.

When you build a custom region that needs directional navigation, use `mdc-spatialnavigationprovider` rather than making every element a tab stop.

### Focus visibility and order

Focus must always be visible and follow the reading order. The full rules — visible indicator, logical order, not obscured by sticky layers — live in [accessibility](./accessibility.md#focus). Order your DOM to match the visual layout rather than repairing it with `tabindex`.

## Overlays and dismissal

Momentum has a family of layered surfaces: `mdc-popover`, `mdc-dialog`, `mdc-menupopover`, `mdc-tooltip`, `mdc-toggletip`, `mdc-coachmark`, and toasts. They share one dismissal model — apply it to any custom overlay too.

### Opening

- Open from an explicit trigger. The trigger and the surface are associated so assistive technology understands the relationship.
- Move focus deliberately: into the surface for modal dialogs; leave it on the trigger for non-modal transient surfaces like tooltips.

### Dismissing

- **Escape** closes the topmost dismissible surface.
- **Click or tap outside** closes light-dismiss surfaces (popovers, menus).
- On close, **return focus** to the element that opened the surface unless the user has intentionally moved on.

### Modality

- **Modal** (dialogs) trap focus and make the rest of the page inert until resolved. Reserve modality for content that genuinely requires resolution.
- **Non-modal** (popovers, menus, tooltips) let the user keep working and dismiss on outside interaction.
- Content shown on hover or focus must be dismissible, hoverable, and persistent (WCAG 1.4.13) — Momentum's tooltip and popover handle this; preserve it in custom work.

### Choosing a surface

| Need | Use |
| --- | --- |
| A short, non-interactive hint on hover/focus | `mdc-tooltip` |
| A small burst of interactive or dismissible info from a trigger | `mdc-toggletip` |
| A rich, anchored panel of content or controls | `mdc-popover` |
| A list of actions or options from a trigger | `mdc-menupopover` |
| A focused task that must be resolved before continuing | `mdc-dialog` |
| A transient, self-dismissing confirmation | `mdc-toast` |
| Guided, first-run education anchored to UI | `mdc-coachmark` |

When two options seem to fit, pick the least interruptive one. Escalate to modality only when the task truly blocks progress.

## Selection and input

- **Single selection** — radios, single-select listboxes, tabs. Selecting one item clears the previous.
- **Multiple selection** — checkboxes, multi-select listboxes, filter chips.
- **Immediate vs deferred** — decide whether a choice applies instantly or on an explicit **Apply/Save**. Be consistent within a flow, and make deferred changes obviously pending.
- **Disabled vs read-only** — disabled removes the control from interaction and the tab order; read-only conveys a value that can't be edited but can be focused and read. Prefer read-only when the user still needs to perceive the value.

## Feedback: loading, empty, and error

These three states are where consistency most often breaks down. Treat them as part of the design, not an afterthought.

### Loading

- Show progress that matches the wait: `mdc-skeleton` for content that is about to appear, `mdc-spinner` / `mdc-progressspinner` for indeterminate waits, `mdc-progressbar` for known-duration or step progress.
- Preserve layout so content does not jump when it arrives (see [responsive design](./responsive-design.md)).
- Keep the trigger's context: disable the submit control while its action is in flight rather than letting it be pressed twice.

### Empty

- An empty state is an opportunity, not a dead end. Explain what will appear here and offer the action that fills it.
- Follow the empty-state voice in [content guidelines](./content-guidelines.md) — descriptive header, avoid "No…", and reframe positively.

### Error

- State what happened and what to do next, in text — never color alone.
- Put field-level errors next to their field, associated programmatically; put flow-level errors where the user's attention is.
- For asynchronous failures, offer a retry path and preserve the user's input.
- Error copy follows the crisis-moment tone in [content guidelines](./content-guidelines.md): positive, direct, understanding, no exclamation points.

## Related topics

- [Accessibility](./accessibility.md) — the conformance baseline behind these behaviors.
- [Responsive design](./responsive-design.md) — how interaction adapts across device classes.
- [Content guidelines](./content-guidelines.md) — the words inside these states and surfaces.
- Component Tier 3 topics — the authoritative key bindings and props for each control.
