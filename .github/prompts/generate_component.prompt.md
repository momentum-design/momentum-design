---
mode: 'agent'
tools: ['codebase', 'editFiles', 'runCommands', 'search', 'Figma Dev Mode MCP']
---

# Generate a new component

Only allow this prompt to be executed in Agent mode.

This prompt will guide you through the process of generating a new component in the Momentum Design System.

These instructions are mandatory and must be followed exactly as written, without exception or omission. Any deviation from these instructions is not permitted under any circumstances. 
Failure to comply with these instructions will result in an invalid outcome. 
Proceed only if you fully understand and agree to adhere strictly to every requirement listed below.
- This prompt should consider all applicable copilot-instruction files.
- This prompt should not use any other context from previous prompts.
- Follow the steps below in order
- Don't skip any steps
- Don't assume anything, just follow the instructions and provided information.
- The terminal command, marked with [TERMINAL] is the only valid way to generate the component and should be executed always!
- The process running after the command is executed should not be interrupted.
- No manual file creation (except the feature file) should be performed.

1. Always prompt the user to manually enter the following input each time this prompt is executed: 
    - a component name
    - a brief description of the component
    - a list of user stories for the component
    - a list of attributes for the component
    - a component to extend (if applicable)
    - a link to the Figma design file for the component (if applicable)

2. Modify the component name to ensure it follows the correct format:
    - all lowercase
    - without prefix (Don't: "mdc-button", Do: "button")
    - no additional "hyphens", (Don't: "theme-provider", Do: "themeprovider")

3. [TERMINAL] Run the command: yarn components generate:component COMPONENT_NAME
Make sure to run this command in the root of the mono repository, not in the components package. Replace `COMPONENT_NAME` with the formatted component name.
Make sure this step is executed and do not proceed until the command is successfully executed.

4. After the component is generated, create a "COMPONENT_NAME.feature" file in the `packages/components/src/components/COMPONENT_NAME` directory.

5. Add the provided user stories to the "COMPONENT_NAME.feature" file, following the Gherkin syntax (https://cucumber.io/docs/gherkin/reference).

6. Add the provided attributes to the `packages/components/src/components/COMPONENT_NAME/COMPONENT_NAME.component.ts` file, ensuring they are properly typed and documented.
For adding attributes, use the reactive property from Lit.dev (https://lit.dev/docs/components/properties/#reactive-properties).

7. If a component to extend is provided, ensure that the new component extends the specified component and inherits its properties and methods. This can be done by modifying the `COMPONENT_NAME.component.ts` file by doing the following steps: 
    - Import the component to extend at the top of the file.
    - Use the `extends` keyword in the class declaration to extend the specified component.

8. Understand every Feature and User Story in the "COMPONENT_NAME.feature" file, for the next steps.

9. Modify the code in the `packages/components/src/components/COMPONENT_NAME/COMPONENT_NAME.components.ts` file to cover all user stories and attributes provided.
    - Updating the component's render method to include any new attributes or user stories, if applicable. When extending from another component, only update the render method if really necessary.
    - Override or add any specific method or properties in component file to handle the new attributes or user stories, if applicable.
    - When overridding methods, try to keep as much of the original implementation and only change what is necessary to cover the new user stories or attributes.

10. Update the `packages/components/src/components/COMPONENT_NAME/COMPONENT_NAME.styles.ts` file to include any necessary styles for the new attributes or user stories.
    - If a Figma design file link is provided, retrieve the design file using the Figma Dev Mode MCP tool (running tool get_code).
    - Adding any necessary CSS styles in the `COMPONENT_NAME.styles.ts` file based on the retrieved design file.
    - If a Figma design file link is provided, use tool get_image to retrieve the png image of the component from the Figma design file and save it in the `packages/components/src/components/COMPONENT_NAME` directory.

11. Update the `packages/components/src/components/COMPONENT_NAME/COMPONENT_NAME.stories.ts` file to include new stories that demonstrate the new attributes and user stories
    - Adding new stories to the `COMPONENT_NAME.stories.ts` file to demonstrate the new attributes and user stories.
    - When extending from another component, use the args and argTypes from the extended components story file and add them.

12. Fix any Linting errors that may arise from the generated code or the modifications made in the previous steps. 
    - Don't explain the issues, just fix them by making the necessary changes.
    - Don't run the lint command, just fix the issues manually.

13. Modify the `packages/components/src/index.ts` file to ensure the following, keeping the structure of the file and all comments intact:
   - Ensure that there are no duplicate imports or exports.
   - Ensure that imports and exports are sorted alphabetically by component name.