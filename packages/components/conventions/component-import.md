# Component Import Guidelines: Index File Structure

In our development process, maintaining a clean and organized structure for our components is essential. This document outlines the best practice of importing dependent components in the index file rather than within the class itself. This approach enhances modularity, improves readability, and simplifies dependency management, ultimately leading to a more maintainable codebase.

## Implementation

Here’s an overview of our component structure using the Badge component as an example:

```js
// badge.component.ts

import { CSSResult, html, PropertyValues, TemplateResult } from 'lit';
import { styleMap } from 'lit-html/directives/style-map.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { Component } from '../../models';
import { BADGE_TYPE, BADGE_VARIANT, DEFAULTS } from './badge.constants';
import styles from './badge.styles';

/**
 * A badge is a small, visually distinct element that provides additional information
 * or highlights the status of an item.
 * Badges are often used to display notifications, counts, making them a useful tool for
 * conveying information quickly without taking up much space.
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-badge
 */
class Badge extends Component {
  // Class properties and methods...
}

export default Badge;
```

```js
// index.ts
import Badge from './badge.component';
import { TAG_NAME } from './badge.constants';
import '../icon';  // Importing dependent components
import '../text';  // Importing dependent components

Badge.register(TAG_NAME);

declare global {
    interface HTMLElementTagNameMap {
        ['mdc-badge']: Badge;
    }
}

export default Badge;
```

## Best Practices for Importing Components

### 1. Centralized Imports and improved readability

- **Rule:** All dependent components should be imported in the index file instead of directly within the component class.
- **Reason:** This centralization helps manage dependencies more effectively and reduces coupling between components. It allows developers to see at a glance which components are required for a given module.

### 2. Avoiding Unnecessary Imports in Class Definitions

- **Issue:** When dependent components like `mdc-icon` and `mdc-text` are imported directly within the Badge component class, it can lead to unnecessary imports if the Badge class is extended in other components. For example, if another component extends Badge, both `mdc-icon` and `mdc-text` will be imported again, even if they are not needed in that specific context.
- **Benefit:** By keeping these imports in the index file, we prevent bloating the component with unnecessary dependencies. This practice promotes cleaner code and ensures that only the required components are loaded when necessary.

### 3. Simplified Dependency Management

- **Benefit:** When dependencies are managed through the index file, it becomes easier to update or replace them without modifying multiple files. This reduces the risk of introducing bugs during refactoring.

## Importing Tagnames from constants file

This section outlines the conventions for importing tag names from a constants file instead of hardcoding them within components modules. Following these conventions promotes consistency, maintainability, and reduces the risk of errors in your codebase.

- Consistency: Centralizes tag definitions, ensuring that all components use the same tag names.
- Maintainability: Changes to tag names can be made in one location, reducing the need to update multiple files.
- Readability: Improves code readability by providing clear references to tag names rather than arbitrary strings.

### Recommended Approach

```
// divider.constants.ts

import { TAG_NAME as BUTTON_TAG } from '../button/button.constants';
import { TAG_NAME as TEXT_TAG } from '../text/text.constants';

export {
  TAG_NAME,
  DEFAULTS,
  DIVIDER_VARIANT,
  DIVIDER_ORIENTATION,
  DIRECTIONS,
  BUTTON_TAG,
  TEXT_TAG,
};
```

```
// divider.components.ts 

import {
  BUTTON_TAG,
  DEFAULTS,
  DIVIDER_VARIANT,
  TEXT_TAG,
} from './divider.constants';

... 
 const hasTextChild = assignedElements.some((el) => el.tagName === TEXT_TAG.toUpperCase());
const hasButtonChild = assignedElements.some((el) => el.tagName === BUTTON_TAG.toUpperCase());
// implmentation detials
```

By following this convention of importing tag names from constants files, developers can ensure a more organized and maintainable codebase. This practice not only enhances collaboration among team members but also simplifies future updates and modifications to tag names across the project.

