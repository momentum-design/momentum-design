# Using Enums and Alternatives in TypeScript

Enums are a powerful feature in TypeScript that allows developers to define a set of named constants, providing a constrained set of values. While enums can enhance code readability and maintainability, they come with several challenges and limitations. This document outlines the use of enums, their pitfalls, and alternative approaches such as using objects with as `const` and union types.

## What is an Enum?

An enum is a special "class" that represents a group of constants (unchangeable variables). Enums allow developers to define a constrained set of values, making it easier to document intent or create distinct cases. TypeScript supports both numeric and string-based enums.

Here's an example of an enum:

```js
enum ButtonStyle {
    Primary = "primary",
    Secondary = "secondary",
    Danger = "danger",
    Success = "success"
}
```

### Advantages of Using Enums

- **Readability**: Enums provide meaningful names for sets of related constants, enhancing code clarity.
- **Type Safety**: Enums enforce type safety by restricting values to predefined constants.

### Disadvantages and Challenges

- **Compilation Issues**: TypeScript cannot compile enums to a native JavaScript structure, leading to unexpected runtime behavior.
- **Value Transformation**: Enums define both type and value, but the value cannot be transformed into native JavaScript enums.
- **Const Enum Pitfalls**: The values of const enums are inlined, which can be problematic for libraries because runtime values cannot be exported.
- **Limited Value Types**: Enums can only contain string and number values.
- **Reverse Mapping Limitations**: Reverse mapping works only when the key/value pairs of the enum are identical.
- **Iteration Issues**: Iterating over keys/values may not yield expected results.
- **Debugging Challenges**: Enums without assigned values compile to numeric enums, complicating debugging efforts.
- **Isolated Module Problems**: Enums can present challenges when working with isolated modules, limiting flexibility.

## Alternatives to Enums

Given the challenges associated with enums, developers can consider alternative approaches:

### 1. Using Objects with `as const`

Instead of using enums, developers can utilize objects with `as const` for defining constants:

```js
const A = {
  a: 0,
  b: 1,
} as const; // Type A = { readonly a: 0; readonly b: 1; }

// Without as const, type would be: { a: number; b: number; }
type A = typeof A[keyof typeof A]; // Type: 'a' | 'b'
```

#### Advantages:

- **JavaScript Syntax**: This approach uses standard JavaScript syntax.
- **Explicit Values**: Developers can assign explicit values to keys.
- **Structural Typing**: Supports structural typing, allowing for safe iteration over keys and values.

#### Disadvantages:

- **Extra Work for Type Safety**: Developers must ensure they use as const to maintain type safety.
- **No Reverse Mapping**: Unlike enums, this approach does not support reverse mapping.

### 2. Union Types

Union types provide another alternative by defining types without runtime values:

```js
// Replace enum with...
type Basic = 'hello' | 'world';
```

#### Advantages

- **Simple Definition**: Union types offer a straightforward way to define sets of related constants.
- **No Runtime Imports Needed**: There is no need to import any runtime values (like enums or objects).
- **Structural Typing**: Supports structural typing without requiring additional linting rules.

#### Disadvantages

- **Limited to Serializable Values**: Only serializable values (like strings) can be used; functions or class instances cannot be defined as types.
- **No Iteration or Reverse Mapping**: Union types do not support iteration over values or reverse mapping.

## Conclusion

We are going ahead with using objects with the as const approach, as it provides greater clarity by ensuring that types and values are treated as constants.

### References

- [Enum Documentation](https://www.typescriptlang.org/docs/handbook/enums.html)
- [const enum pitfalls](https://www.typescriptlang.org/docs/handbook/enums.html#const-enum-pitfalls)
- [Enums considered harmful](https://www.youtube.com/watch?v=jjMbPt_H3RQ&t=2s)
- [Enums are MISUNDERSTOOD (not terrible): Josh Goldberg, typescript-eslint maintainer](https://www.youtube.com/watch?v=XTXPKbPcvl4)-
