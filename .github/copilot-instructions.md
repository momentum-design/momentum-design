---
applyTo: '**/*'
---

# Basics

- `momentum-design` is a Mono Repository containing all the necessary components and utilities for the Momentum Design System.
- The component library is located in the `packages/components` folder.
- All assets, such as images and fonts, are located in the `packages/assets` folder.
- The documentation website is located in the `packages/documentation` folder.
- Build tools and configurations are located in the `packages/tools` folder.

# Mono Repository Details

- Yarn Workspaces are used to manage the mono repository.
- The root `package.json` file contains the workspace configuration.
- Each package has its own `package.json` file with its dependencies and scripts.
- Each package scripts can be run using `yarn <package-name> <script-name>`.
