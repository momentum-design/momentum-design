---
title: Demo Widget
summary: A fixture markdown used to exercise the docs addon. Three sections, each with sub-headings, lists, and code samples.
status: draft
component: demo
---

## Overview

The **demo widget** is a contrived example used only to verify that the addon
parses, splits, and renders markdown the way we expect.

### When to use

- You're testing the addon.
- You're not testing the addon, but want to see what good docs look like.

### When not to use

- In production. Ever.

## Guidelines

Some plain content with a code sample.

```ts
import { setupDocs } from '@momentum-design/storybook-addon-docs';

setupDocs({
  markdown: import.meta.glob('../src/components/*/knowledge-base/*.component.md', {
    query: '?raw',
    import: 'default',
    eager: true,
  }),
});
```

### Limitations

1. Markdown only.
2. No nested H2 → H2 tabs.
3. Frontmatter is shallow YAML.

## Accessibility

Tabs use `role="tab"` and `aria-selected`. Keyboard navigation between tabs is
not yet implemented in v1.
