# @momentum-design/components-mcp

[![license: mit](https://img.shields.io/badge/License-MIT-blueviolet?style=flat-square)](https://github.com/momentum-design/momentum-design/blob/main/LICENSE)
![State](https://img.shields.io/badge/State-Alpha-blue?style=flat-square)

## Overview

This package provides a Model Context Protocol server for Momentum Design components
and assets. It helps AI assistants discover components, read public knowledge-base
guidance, inspect component APIs, generate framework examples, validate component
usage, find public asset names for icons, illustrations, animations, and brand
visuals, look up color tokens, and plan Momentum UI migration work.

The component registry is generated from the public component sources in this
monorepo, especially:

```text
packages/components/src/components/*/knowledge-base/*.component.md
packages/assets/{icons,illustrations,animations,brand-visuals}/src
packages/assets/tokens/src
```

## Tools

- `list_components` - List Momentum Design components and custom element tags.
- `search_components` - Search components by name, tag, documentation content, or UI intent.
- `get_component_docs` - Return knowledge-base guidance for a component.
- `get_component_api` - Return properties, values, defaults, slots, events, CSS parts, and rules.
- `get_component_examples` - Return Web Component, Angular, and React examples.
- `generate_component_code` - Generate validated component usage code.
- `validate_component_usage` - Validate props or snippets against documented component API rules.
- `list_assets` - List public Momentum Design icons, illustrations, animations, and brand visuals.
- `search_assets` - Search public Momentum Design asset names.
- `get_asset_info` - Return exact asset metadata and Web Component/Angular usage snippets.
- `list_color_tokens` - List Momentum Design color tokens and CSS variables.
- `search_color_tokens` - Search color token names, CSS variables, themes, and resolved values.
- `get_color_token` - Return exact color token metadata, resolved value, and CSS usage.
- `migrate_icon_name` - Suggest current Momentum Design icon names from existing icon references.
- `convert_momentum_ui_usage` - Suggest Momentum UI to Momentum Design component replacements.

## Local Usage

```bash
yarn components-mcp build
yarn components-mcp start
```

For supported workflows, framework-specific usage, and example prompts, see
[the usage guide](./USAGE.md).

## Contributing

See [our contributing guide](./CONTRIBUTING.md)

## Scripts

See [our script documentation](./SCRIPTS.md)
