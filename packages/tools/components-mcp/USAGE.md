# @momentum-design/components-mcp - Usage Guide

## Purpose

`@momentum-design/components-mcp` is a Model Context Protocol server that helps
AI agents answer Momentum Design implementation questions from public Momentum
Design source files.

The server can be used to:

- Discover Momentum Design components and their custom element tags.
- Read component knowledge-base documentation.
- Inspect component APIs, including properties, attributes, values, defaults,
  slots, events, CSS parts, and accessibility rules.
- Generate usage examples for Web Component, Angular, and React.
- Validate component usage against documented API and accessibility rules.
- Find public Momentum Design icons, illustrations, animations, and brand
  visuals.
- Look up color tokens, CSS variables, and resolved color values.
- Suggest migration paths from Momentum UI usage to Momentum Design usage.

## Current Coverage

The generated registry currently covers:

- 96 Momentum Design components.
- 5,178 public Momentum Design assets.
- 2,020 Momentum Design color token entries.
- Component documentation from `knowledge-base/*.component.md` files.
- Component source metadata from public component implementation files.
- Storybook metadata where available.
- Public asset source files from icons, illustrations, animations, and brand
  visuals.
- Public token source files from `packages/assets/tokens/src`.

The registry is generated from files in this monorepo. It does not require
private documentation, private package names, local machine paths, or private
authentication tokens.

## Framework Support

The server supports three usage targets.

### Web Component

Use this when the user wants framework-neutral custom element markup:

```html
<mdc-button variant="primary" size="32">Save</mdc-button>
```

The generated result focuses on Momentum custom elements such as
`mdc-button`, `mdc-input`, `mdc-dialog`, and other `mdc-*` tags.

### Angular

Use this when the user is building an Angular template with Momentum custom
elements:

```html
<mdc-button variant="primary" size="32">Save</mdc-button>
```

The generated result uses Angular-friendly template syntax where needed,
including property binding, event binding, and custom-element markup.

### React

Use this when the user is using Momentum React wrappers:

```tsx
import { Button } from '@momentum-design/components/dist/react';

<Button variant="primary" size={32}>Save</Button>
```

The generated result uses React wrapper imports where available and translates
custom-element attributes into React-style props.

## Available MCP Tools

### Component Discovery

#### `list_components`

Lists Momentum Design components with names, custom element tags, summaries, and
high-level metadata.

Example questions:

- "List all Momentum Design components."
- "Show all available Momentum components."
- "Which components are available for forms?"

#### `search_components`

Searches components by component name, tag name, documentation text, or common
UI intent.

Example questions:

- "Search for components related to forms."
- "Which component should I use for a dropdown?"
- "Find components for alerts or status messages."
- "Search Momentum components for navigation."

### Component Documentation

#### `get_component_docs`

Returns knowledge-base documentation for a component. This is useful when the
agent needs design guidance, usage guidance, accessibility guidance, limitations,
or when-to-use/when-not-to-use information.

Example questions:

- "Show me the docs for button."
- "What are the accessibility requirements for dialog?"
- "When should I use combobox instead of select?"
- "What are the limitations of virtualizedlist?"

#### `get_component_api`

Returns exact API metadata for a component, including properties, attributes,
allowed values, defaults, slots, events, CSS parts, CSS custom properties, and
documented rules.

Example questions:

- "What properties does mdc-button support?"
- "What are all valid button variants and sizes?"
- "List all slots and events for mdc-dialog."
- "What is the default value for the disabled property?"
- "Give me the exact API for mdc-combobox."

This is the best tool when the user asks for exact values. For example, if the
user asks about the Button component, the agent should use this tool to return
the exact supported properties and values from the generated registry.

#### `get_component_examples`

Returns stored examples for Web Component, Angular, and React usage.

Example questions:

- "Give me button examples in all frameworks."
- "Show Angular usage for checkbox."
- "Show React usage for banner."
- "Show Web Component markup for dialog."

### Code Generation And Validation

#### `generate_component_code`

Generates framework-specific component usage code and validates the generated
props against the component registry.

Supported frameworks:

- `web-component`
- `angular`
- `react`

Example questions:

- "Generate Web Component code for a primary button."
- "Generate Angular code for a required input with a label."
- "Generate React code for a warning banner."
- "Create a dialog example with a primary footer button."
- "Generate a combobox example with three options."

#### `validate_component_usage`

Validates component props or a code snippet against documented component rules.
It returns errors and warnings for invalid values, missing accessibility labels,
invalid child combinations, or unsupported patterns.

Example questions:

- "Validate this mdc-button usage."
- "Is this dialog accessible?"
- "Check whether these input props are valid."
- "Validate this React Button usage."
- "Tell me what is wrong with this mdc-tooltip snippet."

Validation helps catch common issues, but it does not replace full application
testing, visual QA, or accessibility testing in the final product.

### Asset Discovery

#### `list_assets`

Lists public Momentum Design assets by kind.

Supported asset kinds:

- `icon`
- `illustration`
- `animation`
- `brand-visual`

Example questions:

- "List Momentum icons."
- "List available illustrations."
- "Show available brand visuals."
- "List animations."

#### `search_assets`

Searches public Momentum Design asset names, keywords, categories, and formats.

Example questions:

- "Find icons related to calendar."
- "Search for warning icons."
- "Find a success illustration."
- "Search for loading animations."
- "Find Cisco logo assets."

#### `get_asset_info`

Returns exact metadata for an asset, including source path, package name, import
path, kind, format, and usage snippets.

Example questions:

- "Give me asset info for add-bold."
- "How do I use the warning icon?"
- "What package contains this illustration?"
- "Show the import path for a calendar icon."

### Color Tokens

#### `list_color_tokens`

Lists Momentum Design color tokens with token names, CSS variables, themes, and
resolved values.

Example questions:

- "List color tokens."
- "List theme color tokens."
- "Show core color tokens."
- "List tokens for the default theme."

#### `search_color_tokens`

Searches color tokens by token name, CSS variable, theme, keyword, or resolved
hex value.

Example questions:

- "Find tokens for error text."
- "Search for primary text colors."
- "Which token resolves to #3492eb?"
- "Find tokens related to warning backgrounds."
- "Search color tokens for border neutral."

#### `get_color_token`

Returns exact color token metadata, including token name, CSS variable, raw
value, resolved value, theme, parent file, references, and CSS usage.

Example questions:

- "What is the CSS variable for color.theme.text.primary.normal?"
- "Give me details for --mds-color-theme-text-primary-normal."
- "What color token resolves to this hex value?"
- "How do I use this token in CSS?"

### Migration Helpers

#### `migrate_icon_name`

Suggests current Momentum Design icon names from an existing icon reference. The
tool searches the public icon registry and does not invent mappings.

Example questions:

- "Migrate the old icon name icon-arrow-left."
- "What is the Momentum Design icon for arrow-left?"
- "Find the closest current icon for clear-active."
- "Suggest replacement names for this icon."

#### `convert_momentum_ui_usage`

Suggests Momentum Design replacements for older Momentum UI component usage. It
can inspect a component name, package name, or code snippet and return suggested
`mdc-*` replacements.

Example questions:

- "Convert this Momentum UI button to Momentum Design."
- "What replaces md-button?"
- "Suggest Momentum Design components for this old Momentum UI snippet."
- "How should I migrate this Momentum UI form field?"

## Recommended Agent Behavior

When an AI agent has access to this MCP server, it should:

- Use `search_components` first when the correct component is not known.
- Use `get_component_api` when exact properties, values, slots, or events are
  needed.
- Use `get_component_docs` when design guidance or accessibility guidance is
  needed.
- Use `generate_component_code` when the user asks for implementation code.
- Use `validate_component_usage` before finalizing component examples.
- Use `search_assets` or `get_asset_info` when exact asset names are needed.
- Use `search_color_tokens` or `get_color_token` when exact token names, CSS
  variables, or hex values are needed.
- Use `migrate_icon_name` and `convert_momentum_ui_usage` for migration work.

## Example User Prompts

### Components

```text
Which Momentum Design component should I use for a dropdown?
```

```text
What are all supported properties and values for mdc-button?
```

```text
Show me the accessibility guidance for mdc-dialog.
```

### Web Component

```text
Generate Web Component markup for a primary button with a leading icon.
```

```text
Generate an mdc-input example with label, placeholder, and helper text.
```

### Angular

```text
Generate Angular template code for a required checkbox.
```

```text
Create an Angular example for mdc-dialog with open and close handling.
```

### React

```text
Generate React code for a warning banner with an action button.
```

```text
Generate React usage for Button with variant primary and size 32.
```

### Validation

```text
Validate this snippet: <mdc-button variant="danger">Delete</mdc-button>
```

```text
Check whether this combobox usage has the required accessibility props.
```

### Assets

```text
Find a calendar icon and show how to use it.
```

```text
Search for success illustrations.
```

### Colors

```text
Which color token should I use for primary text?
```

```text
Find the Momentum color token for #3492eb.
```

### Migration

```text
Convert this Momentum UI snippet to Momentum Design.
```

```text
Find the current Momentum Design icon name for icon-arrow-left.
```

## Local MCP Configuration

After building the package, a local MCP client can run the server over stdio:

```bash
yarn components-mcp build
```

Example MCP configuration:

```json
{
  "servers": {
    "momentum-design": {
      "command": "node",
      "args": [
        "/path/to/momentum-design/packages/tools/components-mcp/dist/module/index.js"
      ]
    }
  }
}
```

If `node` is not available to the MCP client process, use the absolute path to
the local Node.js binary for `command`.

## Open Source Safety

This package is designed for the public Momentum Design repository.

- Registry data is generated from public files in this monorepo.
- No private tokens or credentials are required.
- No private documentation sources are required.
- No local machine paths are required.
- No private package names are required.
- Build output is generated locally and is not committed.

## Limitations

- The server depends on generated registry data. Run `yarn components-mcp build`
  or `yarn components-mcp test` after component, asset, or token source changes.
- Generated code should still be reviewed by a developer before it is committed
  to an application.
- Validation covers common documented rules and accessibility requirements, but
  it does not replace full application testing.
- Asset and token results are only as current as the public source files in the
  checked-out repository.
