# CSS Variable Conventions per Component

## Background

To achieve flexible and maintainable styling within components, we aim to implement a system that allows for easy modifications at a global level. By assigning relevant component styles to CSS variables, we can effectively achieve this goal.

## Implementation

For each component we develop, we will define CSS variables within the `:host` style. This approach ensures that styles are easily accessible and customizable. Below is an example of how to set up these variables:

```css
:host {
    --mdc-themeprovider-font-family: "Momentum";
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
 
    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
}
```

## Naming Conventions

To maintain clarity and consistency, all component CSS variables should adhere to the following naming convention:

- **Format:** Each variable name must begin with `--mdc-componentname-`.

This structured naming will help in identifying and managing the variables associated with each component efficiently.

## When to Use CSS Variables

CSS variables should be utilized in scenarios where we want to provide consumers the ability to override specific styles. However, it is important to note that certain styles—such as sizes that must adhere to specific guidelines—should remain unchangeable.

## Why Use CSS Variables?

Implementing CSS variables offers several advantages:

- **Flexibility:** Consumers can customize parts of components as needed, allowing for greater adaptability in design.
- **Future-Proofing:** This approach enables us to support other design systems in the future, should the need arise.

By adopting this methodology, we enhance the usability and versatility of our components, ensuring they meet both current and future design requirements.
