
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

Once the user enters the component name, a folder will be created within `packages/components/src/components/` with the specified name. The following files will be added inside this folder:

1. `index.ts`: This file serves as the registration point for the web component, ensuring that the component is properly registered and available for use throughout the application.
1. `x.component.ts`: This file contains the presentational component. It should focus on class defintion, reactive properties, render() and life cycle methods.
1. `x.stories.ts`: This file is used for creating stories for the presentational component. The implementer can decide how to structure these stories.
1. `x.e2e-test.ts`:This file contains end-to-end tests, including test hooks and utilities, as well as individual tests for the presentational component.
1. `x.styles.ts`: This file is designated for adding CSS styling to the component.
1. `x.constants.ts`: This file can be used for any constants that may be necessary for the component.

### Additional Files (Optional)

Developers may also include specific files for their components if needed:

- `x.types.ts`: A types file for defining Typescript types.
- `x.utils.ts`: A utilities file for complex functions, if necessary.
- `x.fixtures.ts`: A fixtures file for providing sample data or mock implementations for testing purposes.

While this convention provides a useful guideline for structuring components, it may not apply to every scenario. Developers should use their discretion to determine when to implement specific files based on the requirements of individual components.

## Conclusion

The structured naming of files within the project, such as x.component.ts for component implementations and x.e2e.test.ts for end-to-end tests, offers clear insight into each file's purpose, facilitating a better understanding of their roles within the application. This consistent naming convention enables developers to quickly identify the content and functionality of various files throughout the codebase.