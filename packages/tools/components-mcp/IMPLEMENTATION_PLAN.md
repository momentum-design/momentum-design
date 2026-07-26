# Components MCP Implementation Plan

This plan tracks the fresh implementation of the Momentum Design components MCP server in the open-source monorepo.

## Scope

- Build inside `packages/tools/components-mcp`.
- Use only public Momentum Design repo sources.
- Use component knowledge-base markdown files as the main documentation source.
- Support Web Components, Angular, and React examples/code generation.
- Cover all components generically first, then improve quality in batches.

## Phase 1: Component MCP Foundation

- [x] Define MCP server entrypoint and stdio transport.
- [x] Add package scripts for build, test, analyze, and clean.
- [x] Add required runtime dependencies for MCP server support.
- [x] Define shared TypeScript types for component registry data.
- [x] Create registry generator for component knowledge-base markdown files.
- [x] Parse component frontmatter: title, summary, tier, and component name.
- [x] Parse documentation sections: overview, usage, guidelines, accessibility, and limitations.
- [x] Extract API metadata from component source/JSDoc where available.
- [x] Extract allowed values and defaults from component constants/types where available.
- [x] Extract examples and arg values from Storybook files where useful.
- [x] Generate a static component registry used by the published package.
- [x] Implement `list_components`.
- [x] Implement `search_components`.
- [x] Implement `get_component_docs`.
- [x] Implement `get_component_api`.
- [x] Implement `get_component_examples`.
- [x] Implement `generate_component_code`.
- [x] Implement `validate_component_usage`.
- [x] Add unit tests for registry generation.
- [x] Add unit tests for each MCP tool.
- [x] Verify build, test, analyze, and dependency checks.

## Phase 2: Component Quality Batches

### Batch 1: Actions and Form Basics

- [x] `button`
- [x] `buttonlink`
- [x] `linkbutton`
- [x] `input`
- [x] `textarea`
- [x] `checkbox`
- [x] `radio`
- [x] `radiogroup`
- [x] `toggle`

### Batch 2: Selection and Menus

- [x] `combobox`
- [x] `listbox`
- [x] `selectlistbox`
- [x] `option`
- [x] `optgroup`
- [x] `menuitem`
- [x] `menuitemcheckbox`
- [x] `menuitemradio`
- [x] `menubar`

### Batch 3: Overlays and Feedback

- [x] `dialog`
- [x] `announcementdialog`
- [x] `popover`
- [x] `tooltip`
- [x] `toggletip`
- [x] `toast`
- [x] `banner`
- [x] `statusmessage`

### Batch 4: Layout and Navigation

- [x] `card`
- [x] `divider`
- [x] `list`
- [x] `listitem`
- [x] `listheader`
- [x] `sidenavigation`
- [x] `tab`
- [x] `tablist`
- [x] `verticaltablist`

### Batch 5: Identity and Visual Components

- [x] `avatar`
- [x] `avatarbutton`
- [x] `badge`
- [x] `chip`
- [x] `filterchip`
- [x] `alertchip`
- [x] `staticchip`
- [x] `presence`
- [x] `icon`
- [x] `illustration`
- [x] `brandvisual`
- [x] `animation`

### Batch 6: Advanced and Utility Components

- [x] `accordion`
- [x] `accordiongroup`
- [x] `accordionbutton`
- [x] `appheader`
- [x] `bullet`
- [x] `buttongroup`
- [x] `buttonsimple`
- [x] `calendar`
- [x] `cardbutton`
- [x] `cardcheckbox`
- [x] `cardradio`
- [x] `coachmark`
- [x] `controltypeprovider`
- [x] `datepicker`
- [x] `focustrap`
- [x] `formfieldgroup`
- [x] `formfieldwrapper`
- [x] `iconprovider`
- [x] `illustrationprovider`
- [x] `inputchip`
- [x] `link`
- [x] `linksimple`
- [x] `marker`
- [x] `menupopover`
- [x] `menusection`
- [x] `navmenuitem`
- [x] `password`
- [x] `progressbar`
- [x] `progressspinner`
- [x] `responsivesettingsprovider`
- [x] `screenreaderannouncer`
- [x] `searchfield`
- [x] `searchpopover`
- [x] `select`
- [x] `skeleton`
- [x] `slider`
- [x] `spatialnavigationprovider`
- [x] `spinner`
- [x] `staticcheckbox`
- [x] `staticradio`
- [x] `statictoggle`
- [x] `stepper`
- [x] `stepperconnector`
- [x] `stepperitem`
- [x] `text`
- [x] `timepicker`
- [x] `typewriter`
- [x] `virtualizedlist`

## Explicit Later Scope

- [x] Asset discovery tools for icons, illustrations, animations, and brand visuals.
- [x] Color variable lookup.
- [x] Icon migration helpers.
- [x] Momentum UI to Momentum Design conversion helpers.

## Review Checklist

- [x] No non-public product-specific documentation is introduced.
- [x] No private URLs, tokens, package names, or local paths are introduced.
- [x] Generated registry is deterministic.
- [x] MCP tool responses are useful without requiring repository access at runtime.
- [x] Framework examples use public Momentum Design import paths.
- [x] Validation catches invalid values and invalid value combinations.
