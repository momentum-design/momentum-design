---
name: navigating-storybook
description: "Navigate and inspect Momentum Design components in Storybook using Chrome DevTools MCP. Use for viewing rendered stories, testing interactions, and debugging memory leaks in the browser. Applies to packages/components only."
---

# Navigating Storybook with Chrome DevTools MCP

This skill describes how to use the Chrome DevTools MCP tools to navigate, inspect, and interact with the Momentum Design System's Storybook instance for the components package.

## Prerequisites

- The Storybook dev server must be running. Start it with:
  ```bash
  yarn components dev
  ```
- It runs on `http://localhost:6006/` by default.
- The Chrome DevTools MCP tools must be available (`mcp_io_github_chr_*`).

## Story ID Convention

Stories follow a deterministic URL pattern, so you can navigate directly without querying the index.

### URL Pattern

```
http://localhost:6006/iframe.html?id={story-id}&viewMode=story
```

### Story ID Format

```
{title-path}--{export-name}
```

Where:

- **`title-path`**: The `title` field from the story's `meta` object, lowercased, with `/` replaced by `-`.
- **`export-name`**: The exported story constant name, converted to kebab-case.

### Examples

| `meta.title`                              | Export name      | Story ID                                               |
| ----------------------------------------- | ---------------- | ------------------------------------------------------ |
| `'Components/textarea'`                   | `Example`        | `components-textarea--example`                         |
| `'Components/button'`                     | `Primary`        | `components-button--primary`                           |
| `'Components/card/card'`                  | `Default`        | `components-card-card--default`                        |
| `'Components/accordion/accordion'`        | `AccordionGroup` | `components-accordion-accordion--accordion-group`      |
| `'Components/sidenavigation/navmenuitem'` | `WithSubMenu`    | `components-sidenavigation-navmenuitem--with-sub-menu` |

### Deriving the Story ID from Source

1. Open the component's `*.stories.ts` file (located at `packages/components/src/components/{component-name}/{component-name}.stories.ts`).
2. Read the `title` field from the `meta` object.
3. Read the exported story names (e.g., `export const Example`, `export const AllVariants`).
4. Apply the conversion:
   - Title: lowercase, replace `/` with `-`
   - Export name: convert PascalCase/camelCase to kebab-case (e.g., `AllVariants` → `all-variants`, `TextareaInsideForm` → `textarea-inside-form`)

## Navigating to a Story

Use `mcp_io_github_chr_navigate_page` with the computed URL:

```
http://localhost:6006/iframe.html?id=components-textarea--example
```

The iframe URL loads only the story content (no Storybook chrome), which is ideal for inspecting components.

## Fallback: Querying the Story Index

If you cannot determine the story ID from the source (e.g., dynamically generated stories), fetch the index:

1. Navigate to `http://localhost:6006/index.json`
2. Parse the JSON to find matching story IDs:
   ```javascript
   () => {
     const json = JSON.parse(document.body.innerText);
     const keys = Object.keys(json.entries || {});
     return keys.filter((k) => k.includes("textarea"));
   };
   ```
3. Use the returned ID in the iframe URL.

## Inspecting Components on the Page

### Take a Snapshot (preferred for structure)

Use `mcp_io_github_chr_take_snapshot` to get the accessibility tree — this shows all interactive elements with unique IDs (`uid`) you can use for further interactions.

### Evaluate JavaScript

Use `mcp_io_github_chr_evaluate_script` to inspect DOM state:

```javascript
() => {
  const component = document.querySelector("mdc-textarea");
  return {
    tagName: component?.tagName,
    shadowChildren: component?.shadowRoot?.children.length,
    attributes: Array.from(component?.attributes || []).map((a) => `${a.name}=${a.value}`),
  };
};
```

### Take a Screenshot (for visual verification)

Use `mcp_io_github_chr_take_screenshot` when you need to verify visual rendering.

## Memory & Performance Debugging

### Heap Snapshots

Use `mcp_io_github_chr_take_memory_snapshot` to capture heap state for memory leak analysis:

```
filePath: "scratch/heap-before.heapsnapshot"
```

### Mount/Unmount Leak Test Pattern

```javascript
async () => {
  const container = document.createElement("div");
  document.body.appendChild(container);

  // Mount components
  for (let i = 0; i < 50; i++) {
    const el = document.createElement("mdc-textarea");
    el.setAttribute("label", `Test ${i}`);
    container.appendChild(el);
  }
  await new Promise((r) => setTimeout(r, 500));

  // Unmount
  container.remove();
  await new Promise((r) => setTimeout(r, 500));

  // Check for leaked nodes
  return document.querySelectorAll('body > div[id^="mdc-el-"]').length;
};
```

## Common Workflows

### Verify a Component Renders Correctly

1. Derive the story ID from `*.stories.ts`
2. Navigate: `mcp_io_github_chr_navigate_page` → iframe URL
3. Snapshot: `mcp_io_github_chr_take_snapshot`
4. Optionally screenshot: `mcp_io_github_chr_take_screenshot`

### Test Component Interaction

1. Navigate to the story
2. Take a snapshot to get element UIDs
3. Use `mcp_io_github_chr_click`, `mcp_io_github_chr_fill`, or `mcp_io_github_chr_type_text` with the UID
4. Take another snapshot to verify state change

### Debug a Memory Leak

1. Navigate to the story
2. Take a baseline heap snapshot
3. Run mount/unmount cycles via `mcp_io_github_chr_evaluate_script`
4. Take a post-test heap snapshot
5. Compare leaked node counts via script evaluation
