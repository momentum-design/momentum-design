# Usage of Pixel Perfect values in momentum-design components

## Purpose

To ensure our components align with design specifications exactly as outlined in Figma, achieving pixel-perfect styling and consistency across the application.

## Styling Guidelines

### 1. Exact Heights, Sizes, and Spacing
- Every component should match the exact height, width, padding, and margin values as shown in Figma.
- Inspect designs carefully, paying attention to the smallest details, ensuring every layout and dimension reflects the Figma blueprint.

### 2. Pixel-Perfect Approach
- All components should replicate Figma specifications to a pixel-perfect level, ensuring a visually consistent user experience.
- Perform cross-browser checks to maintain uniformity across various environments.

### 3. Rounding of `rem` Values
- **Rounding Strategy**: Round `rem` values to two decimal places to maintain accuracy and consistency, For example, if a calculated value is `1.876rem`, round it to `1.88rem`.
- **Conversion Convention**: Use `px` to `rem` conversions, following the px to rem unit conversion standards.
- **Example**: If Figma specifies `30px`, use the base rem value (e.g., `30px / 16 = 1.875rem`) and round as per the strategy above.

### 4. Consistent Sizing Tokens (Future Plan)
- In the long run, we will tokenize all component sizes and layouts to standardize component dimensions, allowing easy reuse and streamlined updates if design specifications change.
- Until then, focus on exact matches as per Figma for each new component developed.

### 5. Detail-Oriented Execution
- Attention to detail is critical. Confirm that component borders, shadows, line heights, font sizes, and other small but significant design elements reflect the design spec.
- Regularly validate component styles with Figma to catch any discrepancies early.

### 6. Documentation of Changes
- Document any intentional deviations from Figma specifications, with the reason and approval details, to ensure transparency and track design choices.

### 7. Consistency Across All Devices
- Test components across different screen sizes and resolutions to ensure that pixel-perfect specifications hold up across all devices.

---

This convention ensures each component remains faithful to the design while allowing a smooth transition to tokenized layouts. Let's keep refining these practices as we integrate more components!

### References

- [Momentum Web Library Documentation](https://www.figma.com/design/MrrkzCQ0YXzUTca2XhesDZ/%F0%9F%93%9C-%5BWIP%5D-Momentum-Web-Library-Documentation-2.0---v1.0)
- [Momentum Web Library](https://www.figma.com/design/9qhjTsC97Q3W8ZsbnTiZho/%F0%9F%A7%A9-%5BWIP%5D-Momentum-Web-Library)
