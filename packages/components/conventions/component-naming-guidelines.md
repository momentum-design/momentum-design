## Naming Conventions

Consistency in naming conventions ensures clarity, maintainability, and ease of
collaboration across the codebase. The following guidelines define standardized
naming patterns for components, class names, and CSS part names in our codebase.
Adhering to these conventions will improve readability and ensure uniformity
across different projects.

### Naming convention for components

To ensure consistency in component naming, all components should follow
PascalCase (UpperCamelCase). This means that each word should start with an
uppercase letter, and there should be no underscores or hyphens.

#### Examples

- ✅ `IconProvider`, `ThemeProvider`, `ModalContainer`, `FormFieldWrapper`
- ❌ `modalcontainer`, `formfieldwrapper`

### Naming convention for class names within the component

All class names within components should follow the kebab-case naming
convention. This means words should be lowercase and separated by hyphens.

#### Examples

- ✅ `.button-primary`, `.input-field-wrapper`
- ❌ `.button_primary`, `.inputFieldWrapper`

### Naming convention for CSS part names

CSS part names should not use the `mdc` prefix. Instead, they should be named in
a straightforward, descriptive manner that aligns with the element’s function.

#### Examples

- ✅ `label`, `button`, `input`
- ❌ `mdc-label`, `mdc-button`, `mdc-input`
