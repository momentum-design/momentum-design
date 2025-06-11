# Format index files

This prompt will guide you through the process of formatting index files in the Momentum Design System.
- This prompt should not use any other context from previous prompts.
- Follow the steps below in order, don't skip any steps, and ensure you provide the necessary information when prompted.
- Keep the structure of the file and all comments intact.

1. Modify the `packages/components/src/index.ts` file to ensure it exports all components correctly.
   - Ensure that each component is exported with its correct name and path.
   - Ensure that there are no duplicate imports or exports.
   - Ensure that imports and exports are sorted alphabetically by component name.
   - Use the following format for each import:
     ```typescript
     import ComponentName from './components/componentname';
     ```
   - Use the following format for each export:
     ```typescript
     export { ComponentName };
     ```