# CSS Styling Convention: Using `rem` Instead of `px`

## Introduction

This document outlines the convention of using `rem` units instead of `px` units in CSS styling within our project. The goal is to ensure consistency, scalability, and accessibility across all components.

## What is `rem`?

`rem` stands for "root em" and is a relative unit of measurement in CSS. It is based on the font size of the root element (`<html>`). Unlike `em`, which is relative to the font size of its nearest parent, `rem` is always relative to the root font size, providing a more predictable and consistent scaling factor.

### Example

If the root font size is set to 16px:

- `1rem` equals 16px
- `2rem` equals 32px
- `0.5rem` equals 8px

This consistency makes `rem` a powerful tool for responsive design and accessibility.

## Why Use `rem`?

### 1. Scalability

- **Responsive Design**: `rem` units are relative to the root element (`<html>`), making it easier to scale the entire layout by changing the root font size.
- **Consistency**: Using `rem` ensures that all elements scale proportionally, maintaining design integrity across different screen sizes and resolutions.

### 2. Accessibility

- **User Preferences**: `rem` respects user settings for font sizes in their browsers, enhancing accessibility for users with visual impairments.
- **Better Readability**: By adhering to user-defined font sizes, `rem` units contribute to better readability and user experience.
- **Zooming**: Browsers handle zoom levels more gracefully with `rem` units. When a user zooms in, elements sized with `rem` units will scale more consistently compared to `px` units, improving the user experience.



### 3. Maintainability

- **Simplified Calculations**: With `rem`, you can avoid complex calculations and conversions between different units, making the CSS easier to maintain.
- **Global Changes**: Adjusting the root font size allows for quick global changes to the entire design, reducing the need for extensive modifications.

## Implementation Guidelines

1. **Set a Base Font Size**:

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

3. **Avoid Using `px` Directly**:
    - Refrain from using `px` for font sizes, margins, paddings, and other dimensions.
    - Use `px` only when absolutely necessary, such as for border widths or media queries.

## Conclusion

Adopting `rem` units in our CSS styling promotes a more scalable, accessible, and maintainable codebase. By following this convention, we ensure a consistent and user-friendly design across all components.

### References

- https://www.joshwcomeau.com/css/surprising-truth-about-pixels-and-accessibility/
- https://www.a11y-collective.com/blog/what-is-rem-in-css/