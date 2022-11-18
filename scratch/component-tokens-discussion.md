### Component Tokens discussion (9th Nov, 2022)

For this discussion: Taking the assumption that designers will maintain component tokens

Requirements:

- Should allow customising every styling aspect of a component
  - Doesn't matter what route we choose with components, component tokens will be a vital part of a radix-ui like component lib
- Should ideally be lazy loaded
  - Example: If a consumer only uses 1 component of Momentum, ideally only the related component tokens will be loaded
- Is css variables the right approach?
  - Yes, we could take the same approach as material-web component library does it.
  - If consumers want to customize, they would need to use our token builder to modify the tokens and export the css and import that css (either one global css file or specific component css files).
