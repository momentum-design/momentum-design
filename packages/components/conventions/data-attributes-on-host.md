# Using data attributes on host components

This document outlines the updated conventions for utilizing data attributes on the :host element of web components. The goal is to avoid hardcoding class names, which can lead to inconsistencies if consumers modify them. Instead, we will leverage custom data attributes to maintain functionality without relying on class names.

**Rationale**

* _Avoid Dependency on Class Names_: Class names can be easily changed by consumers, which may break the logic of the component if it relies on them.
* _Maintainability_: Using data attributes allows for easier updates and management of component behavior without altering the underlying structure.
* _Flexibility_: Data attributes provide a way to store additional information that can be accessed via JavaScript, enhancing interactivity and functionality.

## Recomended Structure

1. Define data attributes on the component

```js
// button.component.ts


  /**
   * Infers the type of button based on the presence of slot and/or prefix and postfix icons.
   * @param slot - default slot of button
   */
  private inferButtonType() {
    const slot = this.shadowRoot?.querySelector('slot')?.assignedNodes().length;
    if (slot && (this.prefixIcon || this.postfixIcon)) {
      this.typeInternal = BUTTON_TYPE_INTERNAL.PILL_WITH_ICON;
      this.setAttribute('data-btn-type', 'pill-with-icon');
    } else if (!slot && (this.prefixIcon || this.postfixIcon)) {
      this.typeInternal = BUTTON_TYPE_INTERNAL.ICON;
      this.setAttribute('data-btn-type', 'icon');
    } else {
      this.typeInternal = BUTTON_TYPE_INTERNAL.PILL;
      this.setAttribute('data-btn-type', 'pill');
    }
  }
  ```

  1. Styling using `:host` selector

  ```css
    :host([size="64"][data-btn-type='icon']), 
  :host([size="52"][data-btn-type='icon']), 
  :host([size="40"][data-btn-type='icon']){
    border-radius: 6.25rem;
    aspect-ratio: 1;
    padding: unset;
  }
  :host([size="64"]){
    height: var(--mdc-button-height-size-64);
  }
  :host([size="52"]){
    height: var(--mdc-button-height-size-52);
  }
  :host([size="40"]){
    height: var(--mdc-button-height-size-40);
    font-size: var(--mds-font-size-body-large);
    line-height: var(--mdc-button-line-height-size-40);
    padding: 0 1rem;
    gap: 0.5rem;
  }
  ```

  1. Class names inside shadow root

  For any elements within the shadow root of your web component, you are free to create class names and style them accordingly without restrictions. This allows for more granular control over styles specific to internal elements.
  
  ```css
  :host {
    display: block; /* Default display style */
    }
    
    .shadow-element {
        color: blue; /* Specific styling for elements inside shadow root */
    }
```