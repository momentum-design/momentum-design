# @momentum-design/storybook-addon-docs

A Storybook 9 addon that replaces the auto-generated **Docs** tab with a tabbed, knowledge-base-driven page. The top-level `##` headings of a component's curated markdown become the tabs; the frontmatter `title` and `summary` render as the page header.

## Install

```bash
yarn add -D @momentum-design/storybook-addon-docs
```

## Register

```js
// .storybook/main.js
export default {
  addons: [
    '@storybook/addon-docs',
    '@momentum-design/storybook-addon-docs',
  ],
};
```

## Wire up markdown discovery

Discovery happens in the consumer's Vite context. Eagerly glob your component knowledge-base files and hand the map to `setupDocs`:

```js
// .storybook/preview.js
import { setupDocs } from '@momentum-design/storybook-addon-docs';

const markdown = import.meta.glob(
  '../src/components/*/knowledge-base/*.component.md',
  { query: '?raw', import: 'default', eager: true },
);

setupDocs({ markdown });
```

By default the addon derives the lookup key from both the file path (the component directory name) and the story `meta.title` (the second segment of `Components/<name>/...`). Override either with `keyFromPath` / `keyFromMeta` if your structure differs.

## Per-story override

A story can supply markdown directly via `parameters.docs.markdown`, which always wins over auto-discovery:

```ts
import md from './my-component.component.md?raw';

export default {
  title: 'Components/MyComponent',
  parameters: { docs: { markdown: md } },
};
```

## Markdown shape

```markdown
---
title: Accordion
summary: Usage, guidelines, and accessibility for the mdc-accordion component.
---

## Overview
…

## Guidelines
…

## Accessibility
…
```

- Frontmatter `title` → H1, `summary` → subtitle.
- Each `## ` heading becomes a tab.
- Content beneath each `##` (including `###`, lists, code blocks, links) renders inside the tab panel.
