# Clean Code Guidelines for Master Branches

## Introduction

Maintaining clean code is essential for the health and readability of our codebase. This document outlines the rules and best practices for keeping our master branches of [momentum-design](https://github.com/momentum-design/momentum-design/) free from unnecessary clutter, ensuring a more efficient and effective development process.

## Guidelines

### 1. Avoid Console Logs in Production

- **Rule:** The use of `console.log`, `console.error`, or similar debugging statements should not be merged into production code unless explicitly necessary (e.g., for error handling).
- **Action:** Implement a linter rule to automatically flag these statements during the code review process.

### 2. Eliminate Non-Relevant Commented-Out Code

- **Rule:** Any commented-out code that is not relevant to the current functionality must be removed before merging into production. For example:

```js
function demo() {
    // oldFunctionCall(); // This line should be removed
    ... other code
}
```

- **Action:** Ensure that all commented-out lines that do not serve a purpose are cleaned up during the review.

### 3. Prohibit Incomplete Code Comments

- **Rule:** Commented-out code that indicates unfinished work (e.g., comments suggesting that a function will be completed in an upcoming PR) should not be included in production. For example:

```js
// function will be finished in upcoming PR
/*
function demo() {
}
*/
```

- **Action:** Remove any such comments before merging to maintain clarity and prevent confusion about the state of the code.

### 4. Remove "TODO" Comments

- **Rule:** "TODO" comments should not remain in the code unless they reference an open JIRA ticket and split work at a sensible place.
- **Action:** Regularly audit the codebase for "TODO" comments, ensuring they meet the criteria for retention.

## Benefits of using these Clean Code Practices

- **Streamlined Code Reviews:** With less clutter, reviewers can focus on meaningful changes, improving efficiency.
- **Improved Readability:** A clean codebase is easier to read and understand, making onboarding new developers smoother.
- **Reduced Console Clutter:** By avoiding unnecessary console messages, we maintain a cleaner browser console, which aids in debugging and performance monitoring.

## Conclusion

By adhering to these guidelines, we can significantly enhance the quality of our codebase. Clean code is not just a best practice; it is essential for maintaining a productive and collaborative development environment. Let’s commit to these standards and ensure our master branches remain pristine!
