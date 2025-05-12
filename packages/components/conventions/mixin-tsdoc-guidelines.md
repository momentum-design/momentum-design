# Typescript Convention for Mixins

When writing a mixin that introduces new public or protected APIs (such as methods or properties) that consumers are expected to access or extend, TypeScript does not automatically infer those additions from the mixin class. 
To preserve **type safety** and improve **developer ergonomics**, you must explicitly declare the mixin’s interface and cast the return type accordingly.

---

## 📌 Why This Is Important

By default, when you write a mixin, TypeScript only knows that it returns a subclass of the base class passed to it.
If your mixin adds new methods or properties, **they won't appear on the final subclass type unless you explicitly declare them.** This impacts:

- IntelliSense / autocomplete in editors
- Type safety in consuming code
- Public/protected API expectations

---

## ✅ Pattern Overview

When a **mixin adds public or protected API** (properties or methods), follow these three steps:

1. Define a separate **interface** describing the mixin's API.
2. Implement the mixin as a class expression.
3. Cast the return type using an **intersection** of the interface and the base class.

### Example:

### 1. Define the Mixin Interface

```ts
export declare class ButtonComponentMixinInterface {
  variant: ButtonVariant;
  protected typeInternal: ButtonTypeInternal;
  protected setVariant(variant: ButtonVariant): void;
}
```

### 2. Implement the Mixin

```ts
export const ButtonComponentMixin = <T extends Constructor<Component>>(superClass: T) => {
  class InnerMixinClass extends superClass {
    @property({ type: String }) variant: ButtonVariant = DEFAULTS.VARIANT;

    @state() protected typeInternal: ButtonTypeInternal = DEFAULTS.TYPE_INTERNAL;

    protected setVariant(variant: ButtonVariant) { /* Implementation */ }
  }

  // Important: Cast the return type to your mixin's interface intersected with the superClass type
  return InnerMixinClass as unknown as Constructor<ButtonComponentMixinInterface> & T;
};
```

### 3. Use in a Component

```ts
class MyButton extends ButtonComponentMixin(MyBaseComponent) {
  someMethod() {
    this.setVariant('secondary');
    const btntype = this.typeInternal;
  }
}
```
---

## Summary
This pattern ensures that mixins extending base classes with new public/protected members are:

- Properly typed and discoverable via editor tooling
- Safe to consume in strongly-typed codebases
- Explicit in their API expectations

