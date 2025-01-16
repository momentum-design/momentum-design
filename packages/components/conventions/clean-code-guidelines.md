# Clean Code Guidelines

## Introduction

Maintaining clean code is essential for the health and readability of our codebase. This document outlines the rules and best practices for keeping our master branches of [momentum-design](https://github.com/momentum-design/momentum-design/) free from unnecessary clutter, ensuring a more efficient and effective development process.

## Guidelines

### 1. Avoid Console Logs in Production

- **Rule:** The use of `console.log`, `console.error`, or similar debugging statements should not be merged into production code unless explicitly necessary (e.g., for error handling).

### 2. Clean Up Commented-Out Code and Incomplete Comments

- **Rule:** All commented-out code that is not relevant to the current functionality must be removed before merging into production. This includes any lines of code that do not serve a purpose, as well as comments indicating unfinished work or "TODO" comments that lack proper context. For example:

```js
function demo() {
    // oldFunctionCall(); // This line should be removed
    // function will be finished in upcoming PR
    /*
    function demo() {
    }
    */
}
```

- **Action**: During the code review process, ensure that:  
  - Any commented-out lines that do not contribute to the current functionality are cleaned up.
  - Comments indicating unfinished work are removed to maintain clarity.
  - "TODO" comments are only retained if they reference an open JIRA ticket and are placed sensibly within the code. Regular audits of the codebase should be conducted to enforce these standards.

  ### 3. Using uuid to generate Unique ID values

- **Rule:**
 It is recommended to install the `uuid` library as a dependency and use it for this purpose instead of relying on `Math.random()`. This ensures that the IDs are truly unique, which is especially important when dealing with a large number of input fields on a page.

- **Action:** 
  - The `uuid` library is installed as a dependency within the `components` package.
  - Use the `uuid` library to generate unique IDs in the code. For example:

    ```js
    import { v4 as uuidv4 } from 'uuid';

    const uniqueId = uuidv4();
    ```

  - Ensure that all new code follows this convention for generating unique IDs.
  - During code reviews, verify that `uuid` is used for ID generation instead of `Math.random()` or other methods.

## Benefits of using these Clean Code Practices

- **Streamlined Code Reviews:** With less clutter, reviewers can focus on meaningful changes, improving efficiency.
- **Improved Readability:** A clean codebase is easier to read and understand, making onboarding new developers smoother.
- **Reduced Console Clutter:** By avoiding unnecessary console messages, we maintain a cleaner browser console, which aids in debugging and performance monitoring.

## Conclusion

By adhering to these guidelines, we can significantly enhance the quality of our codebase. Clean code is not just a best practice; it is essential for maintaining a productive and collaborative development environment. Let’s commit to these standards and ensure our master branches remain pristine!
