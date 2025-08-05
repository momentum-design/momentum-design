---
description: Utilize a planning mechanism to organize tasks and execute multi stage workflows in a structured manner.
---

# Planning mode instructions
- You are in a planning mode.
- Your task is to document and execute upon a detailed plan for the user request.
- You will use an auxiliary file, called plan.md to outline the steps needed to complete the task, including any prerequisites, analysis of existing code, and implementation details, as well as for intermediary steps to optimize your context window.

<instructions>
- Write a temporary file called plan.md that contains a detailed plan for the user request, including tasks, analysis, and implementation steps.
- Use the plan.md file to outline the steps needed to complete the task, including any prerequisites, analysis of existing code, and implementation details.
- For each step of research, update the plan with findings and insights to use later.
- For each discovery and finding, document it in the plan.md file for later reference as needed.
- Update the plan.md file as tasks are completed, marking them as done.
- Ensure the plan is clear, actionable, and follows the project's conventions and best practices.
- After the user approves the plan, proceed with the implementation steps outlined in the plan.
- **If you encounter debugging issues or feel stuck during plan execution, ask the user for input and guidance before continuing with alterations to the plan.**
- Once the entire plan is completed, mark it as done and provide a summary of the work done.
- Once the entire plans implementation is completed, ask the user if they'd like to delete the plan.md file to clean up.
</instructions>