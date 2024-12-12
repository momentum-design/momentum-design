# Component Styling

## Using theme tokens only

In the Momentum Design System, it is essential to always use theme tokens when defining colors within our components. This practice ensures consistency, accessibility, and a cohesive visual identity across all applications.

### Token Definitions

We have defined theme tokens that can be found at the following link: [Momentum Design Tokens](https://momentum-design.github.io/momentum-design/en/tokens/theme-stable/). These tokens serve as the standardized color palette for all components.

### Guidelines for Using Theme Tokens

1. **Consistent Usage**: Always utilize the defined theme tokens in your component designs. Avoid using custom colors or any values outside the provided tokens.
1. **Component Specifications**: Ensure that every component specification includes a corresponding theme token. This will help maintain uniformity and facilitate easier updates in the future.
1. **Avoid Anomalies**: There should never be instances of using colors that are not defined in the token library. This helps prevent discrepancies and ensures that all components adhere to the design system.

## Using `rem` instead of `px`

We are using `rem` units instead of `px` units in CSS styling within our project. The goal is to ensure consistency, scalability, and accessibility across all components.

### What is `rem`?

`rem` stands for "root em" and is a relative unit of measurement in CSS. It is based on the font size of the root element (`<html>`). Unlike `em`, which is relative to the font size of its nearest parent, `rem` is always relative to the root font size, providing a more predictable and consistent scaling factor.

### Example

If the root font size is set to 16px:

- `1rem` equals 16px
- `2rem` equals 32px
- `0.5rem` equals 8px

This consistency makes `rem` a powerful tool for responsive design and accessibility.

### Implementation Guidelines

1. **Set a Base Font Size**:  It is important to clarify that this is an action to be taken by the **application or consumer**, and that the our (Momentum Design) team should not set the base font size within our components.

    ```css
    html {
         font-size: 16px; /* This can be adjusted based on design requirements */
    }
    ```

2. **Use `rem` for Sizing**:

    ```css
    .example {
         font-size: 1.5rem; /* 1.5 * 16px = 24px */
         padding: 1rem;    /* 1 * 16px = 16px */
         margin: 2rem;     /* 2 * 16px = 32px */
    }
    ```

3. **Avoid Using `px` directly**:
    - We should refrain from using `px` unless absolutely necessary. Any instances where `px` might be required should be discussed prior to implementation.

## Pixel perfect values when styling components

### 1. Exact Heights, Sizes, and Spacing

- Match the exact padding, margin, and layout dimensions from Figma to maintain visual consistency.
- **Height**: Use the exact height only when specified by a variant (e.g., specific button size variants). In other cases, the height can remain flexible to respond to content or context.
- **Width**: Allow the width to adjust based on the content provided, unless a variant specifies a fixed width.
- Always inspect designs carefully, paying attention to even the smallest details to ensure every layout and dimension aligns with the Figma blueprint.
- Technical breakdowns should clarify whether the height or width should be fixed or content-dependent, based on each component’s unique requirements.

### 2. Rounding of `rem` values

- **Rounding Strategy**: Avoid unnecessary rounding. Only round `rem` values if there are excessive decimal places (e.g., `3.333333` may be rounded to `3.33334`). Precise values are preferred for accuracy and consistency!
- **Conversion Convention**: Follow `px` to `rem` conversions according to the px-to-rem unit standard (see `Using rem instead of px` above).
- **Example**: If Figma specifies `30px`, convert it using the base rem value (e.g., `30px / 16 = 1.875rem`). Avoid rounding unless decimal values are excessive.

### 3. Detail-Oriented Execution

- Attention to detail is critical. Confirm that component borders, shadows, line heights, font sizes, and other small but significant design elements reflect the design spec.
- Regularly validate component styles with Figma to catch any discrepancies early.

### 4. Documentation of Changes

- Document any intentional deviations from Figma specifications, with the reason and approval details, to ensure transparency and track design choices.

## Dynamic styles

### Background

To achieve dynamic styles in Components (based on attributes), we aim to achieve that in CSS only if possible. CSS is more performant in browsers than
setting styles through JS.

### Implementation

Whenever there is a need to style something conditionally based on an attribute which is passed into the component, it can be
styled in the Stylesheet using CSS Attribute Selectors:

```css
:host([variant="primary"]){
    background: var(--mdc-button-primary-background-color);
    color: var(--mdc-button-primary-color);
}

:host([active]){
    font-weight: var(--mds-font-apps-body-large-bold-font-weight);
}
```

## Component variables abstraction

### Background

To achieve flexible and maintainable styling within components, we aim to implement a system that allows for easy modifications at a global level. By assigning relevant component styles to CSS variables, we can effectively achieve this goal.

### Implementation

For each component we develop, we will define CSS variables within the `:host` style. This approach ensures that styles are easily accessible and customizable. Below is an example of how to set up these variables:

```css
:host {
    --mdc-themeprovider-font-family: "Momentum";
    --mdc-themeprovider-color-default: var(--mds-color-theme-text-primary-normal);
 
    font-family: var(--mdc-themeprovider-font-family);
    color: var(--mdc-themeprovider-color-default);
}
```

### Naming Conventions

To maintain clarity and consistency, all component CSS variables should adhere to the following naming convention:

- **Format:** Each variable name must begin with `--mdc-componentname-`.

This structured naming will help in identifying and managing the variables associated with each component efficiently.

### When to Use CSS Variables

CSS variables should be utilized in scenarios where we want to provide consumers the ability to override specific styles. However, it is important to note that certain styles—such as sizes that must adhere to specific guidelines—should remain unchangeable.

### Why Use CSS Variables?

Implementing CSS variables offers several advantages:

- **Flexibility:** Consumers can customize parts of components as needed, allowing for greater adaptability in design.
- **Future-Proofing:** This approach enables us to support other design systems in the future, should the need arise.

By adopting this methodology, we enhance the usability and versatility of our components, ensuring they meet both current and future design requirements.

## CSS animations

### Background

To achieve animations in our components, its advised to try to build the animation with CSS only. This will make sure apps are performant and
animations are loaded as part of the CSS.

### Implementation

If there is a case for building a animation (like spinners, etc.), use tools like <https://css-loaders.com/> or similar which help to create animations
just by using CSS. As a last resort we should fall back to Animations like the Lottie files which are stored in [@momentum-design/animations](https://github.com/momentum-design/momentum-design/tree/main/packages/assets/animations)
