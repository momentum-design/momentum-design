# Usage of Pixel Perfect values in momentum-design components

## Purpose

To ensure our components align with design specifications exactly as outlined in Figma, achieving pixel-perfect styling and consistency across the application.

## Styling Guidelines

### 1. Exact Heights, Sizes, and Spacing
- Match the exact padding, margin, and layout dimensions from Figma to maintain visual consistency. 
- **Height**: Use the exact height only when specified by a variant (e.g., specific button size variants). In other cases, the height can remain flexible to respond to content or context.
- **Width**: Allow the width to adjust based on the content provided, unless a variant specifies a fixed width.
- Always inspect designs carefully, paying attention to even the smallest details to ensure every layout and dimension aligns with the Figma blueprint.
- Technical breakdowns should clarify whether the height or width should be fixed or content-dependent, based on each component’s unique requirements.

### 2. Pixel-Perfect Approach
- All components should replicate Figma specifications to a pixel-perfect level, ensuring a visually consistent user experience.
- Perform cross-browser checks to maintain uniformity across various environments.

### 3. Rounding of `rem` Values
- **Rounding Strategy**: Avoid unnecessary rounding. Only round `rem` values if there are excessive decimal places (e.g., `3.333333` may be rounded to `3.33334`). Precise values are preferred for accuracy and consistency.
- **Conversion Convention**: Follow `px` to `rem` conversions according to the px-to-rem unit standard.
- **Example**: If Figma specifies `30px`, convert it using the base rem value (e.g., `30px / 16 = 1.875rem`). Avoid rounding unless decimal values are excessive.

### 4. Detail-Oriented Execution
- Attention to detail is critical. Confirm that component borders, shadows, line heights, font sizes, and other small but significant design elements reflect the design spec.
- Regularly validate component styles with Figma to catch any discrepancies early.

### 5. Documentation of Changes
- Document any intentional deviations from Figma specifications, with the reason and approval details, to ensure transparency and track design choices.

---

This convention ensures each component remains faithful to the design while allowing a smooth transition to tokenized layouts. Let's keep refining these practices as we integrate more components!

