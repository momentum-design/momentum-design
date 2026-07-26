# @momentum-design/components-mcp - Scripts Guide

## Scripts

### start
- Runs the built MCP server over stdio from `./dist/module/index.js`.

### build
- Generates the component, asset, and color token registries and compiles TypeScript to `./dist`.

### test
- Generates the component, asset, and color token registries and runs unit tests.

### analyze
- Generates the component, asset, and color token registries, runs ESLint, and runs TypeScript syntax checks.

### generate:registry
- Generates all static MCP registries from public Momentum source files.

### generate:components
- Generates `src/data/components.registry.ts` from public Momentum component source files.

### generate:assets
- Generates `src/data/assets.registry.ts` from public Momentum asset source files.

### generate:colors
- Generates `src/data/colors.registry.ts` from public Momentum token source files.
