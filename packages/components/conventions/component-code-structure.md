
# Component Code Structure Documentation

This document provides an overview of the component code structure used in our project. By following this convention, developers can ensure consistency and maintainability across components. 


## Generating a New Component

```bash
yarn components generate:component
```

### User Prompt

When this command is run, a prompt will appear for the user to enter the component name. It is important to adhere to the following guidelines:

- Lowercase: The component name should be in lowercase.
- No Prefixes: Avoid using any prefixes.
- No Additional Hyphens: Do not include extra hyphens (e.g., avoid names like theme-provider).

### Generated Structure

Once the user enters the component name, a folder will be created within p`ackages/components/src/components/` with the specified name. The following files will be added inside this folder:

1. `index.js`: This file serves as the entry point for the component. It typically exports the main component or other relevant modules, making them accessible for import in other parts of the application.
1. `x.component.ts`: This file contains the presentational component. It should focus on props, avoiding selectors, dispatches, and side effects.
1. `x.stories.ts`: This file is used for creating stories for the presentational component. The implementer can decide how to structure these stories.
1. `x.e2e-test.ts`:This file contains end-to-end tests, including test hooks and utilities, as well as individual tests for the presentational component.
1. `x.styles.ts`: This file is designated for adding CSS styling to the component.
1. `x.constants.ts`: This file can be used for any constants that may be necessary for the component.

### Additional Files (Optional)

Developers may also include specific files for their components if needed:

- `x.types.ts`: A types file for defining Typescript types.
- `x.utils.ts`: A utilities file for complex functions, if necessary.

While this convention provides a useful guideline for structuring components, it may not apply to every scenario. Developers should use their discretion to determine when to implement specific files based on the requirements of individual components.

## Advantages of this structure

- **Isolated Testing in Storybook**: Testing components in isolation enhances code quality and ensures that each component behaves as expected.
- **Better Unit Testing of Logic**: A consistent structure allows for improved unit testing of logic within components.
- **Common Structure Across Components**: Following a standardized structure promotes familiarity and ease of understanding among team members working on different components.

## Conclusion

By adhering to this documented component code structure, developers can create maintainable, testable, and consistent components within the project. This approach not only improves code quality but also fosters collaboration among team members by providing a clear framework for development.
