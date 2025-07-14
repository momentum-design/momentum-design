---
mode: 'agent'
tools: ['codebase', 'editFiles', 'openSimpleBrowser', 'runCommands', 'search', 'Figma Dev Mode MCP']
---

# WIP: Style a existing component based on Figma design

Only allow this prompt to be executed in Agent mode.

This prompt will guide you through the process of updating styles of a existing component in the Momentum Design System based on a Figma design file.

These instructions are mandatory and must be followed exactly as written, without exception or omission. Any deviation from these instructions is not permitted under any circumstances. 
Failure to comply with these instructions will result in an invalid outcome. 
Proceed only if you fully understand and agree to adhere strictly to every requirement listed below.
- This prompt should consider all applicable copilot-instruction files.
- This prompt should not use any other context from previous prompts.
- Follow the steps below in order
- Don't skip any steps (if u have to, abort the prompt)
- Don't assume anything, just follow the instructions and provided information.

1. Always prompt the user to manually enter the following input each time this prompt is executed: 
    - a component name
    - storybook folder of the component (i.e. "components", "work-in-progress", "internal")
    - a link to the Figma design file for the component (if applicable)
2. Save all the inputs provided in the following variables:
    - `COMPONENT_NAME`: the component name provided by the user
    - `COMPONENT_FOLDER`: the storybook folder of the component provided by the user
    - `FIGMA_DESIGN_LINK`: the link to the Figma design file provided by the user
3. Run tool "#get_image" from Figma MCP server with the `FIGMA_DESIGN_LINK` to retrieve the Figma design file screenshot and save it in the `packages/components/src/components/COMPONENT_NAME` directory.
4. Open the simple browser and navigate to URL `http://localhost:6006/?path=/story/COMPONENT_FOLDER-COMPONENT_NAME--default` (replace `COMPONENT_FOLDER` and `COMPONENT_NAME` with the values provided by the user).