# Figma Connect Tool - Testing Guidelines

This document defines the testing standards, patterns, and requirements for the `codeconnect-generator` test suite.

---

## FAST Principles

All tests in this project must adhere to the **FAST** principles:

### **F**ast

- Tests should execute in milliseconds, not seconds.
- Avoid file system operations where possible; use in-memory mocks.
- Never make network requests in unit tests.
- Use `jest.mock()` to replace slow dependencies.

### **A**utonomous (Independent)

- Each test must be completely independent.
- Tests must not depend on execution order.
- Tests must not share mutable state.
- Each test sets up its own fixtures and tears them down.

### **S**table (Repeatable)

- Tests produce the same result every run.
- No randomness, no timestamps, no environment dependencies.
- Mock `Date.now()` when testing time-dependent code.
- Use deterministic test data.

### **T**horough (Self-Validating)

- Tests have clear pass/fail criteria.
- No manual inspection required.
- Assert specific values, not just "truthy" or "defined".
- Cover both happy path and error cases.

---

## Less Code is Best Code

### Minimal Test Code

Write the minimum code necessary to verify behavior:

```typescript
// ✅ Good - Concise and clear
it('should convert camelCase to kebab-case', () => {
  expect(toKebabCase('myPropertyName')).toBe('my-property-name');
});

// ❌ Bad - Unnecessary verbosity
it('should convert a camelCase string to kebab-case format', () => {
  const input = 'myPropertyName';
  const expectedOutput = 'my-property-name';
  const actualOutput = toKebabCase(input);
  expect(actualOutput).toEqual(expectedOutput);
});
```

### Leverage Test Utilities

Create shared helpers for common patterns:

```typescript
// __tests__/helpers/fixtures.ts
export const createMockSourceFile = (content: string): ts.SourceFile =>
  ts.createSourceFile('test.ts', content, ts.ScriptTarget.Latest, true);

export const createMockComponentModel = (overrides?: Partial<ComponentModel>): ComponentModel => ({
  className: 'TestComponent',
  tagName: 'mdc-test',
  filePath: '/test/test.component.ts',
  componentDir: '/test',
  props: [],
  attributes: [],
  events: [],
  importPath: 'components/test',
  ...overrides,
});
```

### One Assertion Per Concept

Group related assertions, but keep each test focused:

```typescript
// ✅ Good - Single concept with related assertions
it('should extract property with all metadata', () => {
  const result = extractPropertyDecorators([classDecl], { checker });

  expect(result.properties).toHaveLength(1);
  expect(result.properties[0]).toMatchObject({
    name: 'disabled',
    type: 'boolean',
    attribute: 'disabled',
  });
});

// ❌ Bad - Multiple unrelated concepts
it('should extract properties', () => {
  const result = extractPropertyDecorators([classDecl], { checker });
  expect(result.properties).toHaveLength(1);
  expect(result.warnings).toHaveLength(0);
  expect(result.properties[0].name).toBe('disabled');
  expect(result.properties[0].type).toBe('boolean');
  // ... 20 more assertions
});
```

---

## Test Naming

- Every test case title must begin with `should...`.
- Use present-tense phrasing after `should` (e.g., `should return`, `should handle`, `should create`).

## Mock Management

### Initialize Mocks in `beforeEach`

Every mock must be initialized fresh for each test:

```typescript
describe('FileWriter', () => {
  let mockExistsSync: jest.SpiedFunction<typeof fs.existsSync>;
  let mockWriteFileSync: jest.SpiedFunction<typeof fs.writeFileSync>;
  let mockMkdirSync: jest.SpiedFunction<typeof fs.mkdirSync>;
  let mockReadFileSync: jest.SpiedFunction<typeof fs.readFileSync>;

  beforeEach(() => {
    mockExistsSync = jest.spyOn(fs, 'existsSync');
    mockWriteFileSync = jest.spyOn(fs, 'writeFileSync').mockImplementation();
    mockMkdirSync = jest.spyOn(fs, 'mkdirSync').mockImplementation();
    mockReadFileSync = jest.spyOn(fs, 'readFileSync');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });
});
```

### Tear Down Mocks in `afterEach`

Always restore mocks to prevent test pollution:

```typescript
afterEach(() => {
  jest.restoreAllMocks(); // Restores original implementations
  jest.clearAllMocks(); // Clears call history
});
```

### Use `mockImplementationOnce` to Prevent Bleeds

Prefer `mockImplementationOnce` over `mockImplementation` for predictable behavior:

```typescript
// ✅ Good - Explicit, single-use mock
mockExistsSync.mockReturnValueOnce(true); // First call returns true
mockExistsSync.mockReturnValueOnce(false); // Second call returns false

// ❌ Bad - Affects all subsequent calls
mockExistsSync.mockReturnValue(true);
```

### Mock Return Values Explicitly Per Test

Each test defines its own mock behavior:

```typescript
it('creates file when it does not exist', () => {
  mockExistsSync.mockReturnValueOnce(false);

  const result = writeFile('/path/to/file.ts', 'content');

  expect(result.status).toBe('created');
});

it('updates file when content differs', () => {
  mockExistsSync.mockReturnValueOnce(true);
  mockReadFileSync.mockReturnValueOnce('old content');

  const result = writeFile('/path/to/file.ts', 'new content');

  expect(result.status).toBe('updated');
});
```

---

## Assertion Requirements

### Assert Call Counts

Always verify how many times a function was called:

```typescript
// ✅ Good - Explicit call count
expect(mockWriteFileSync).toHaveBeenCalledTimes(1);

// ❌ Bad - Only checks if called at least once
expect(mockWriteFileSync).toHaveBeenCalled();
```

### Assert Call Arguments

Verify the exact arguments for each call:

```typescript
// ✅ Good - Verify specific arguments
expect(mockWriteFileSync).toHaveBeenCalledWith('/path/to/file.ts', 'generated content', 'utf8');

// ✅ Good - Verify multiple calls in order
expect(mockWriteFileSync).toHaveBeenNthCalledWith(1, '/first.ts', 'content1', 'utf8');
expect(mockWriteFileSync).toHaveBeenNthCalledWith(2, '/second.ts', 'content2', 'utf8');

// ❌ Bad - No argument verification
expect(mockWriteFileSync).toHaveBeenCalled();
```

### Use Matchers for Partial Matching

When exact matching isn't practical, use matchers:

```typescript
expect(mockLogger.info).toHaveBeenCalledWith(
  expect.stringContaining('discovered'),
  expect.objectContaining({ count: 5 }),
);
```

---

## Test Case Requirements

### Positive Test Cases (Happy Path)

Every function must have tests for expected successful behavior:

```typescript
describe('toKebabCase', () => {
  it('converts camelCase to kebab-case', () => {
    expect(toKebabCase('myProperty')).toBe('my-property');
  });

  it('converts PascalCase to kebab-case', () => {
    expect(toKebabCase('MyComponent')).toBe('my-component');
  });

  it('converts snake_case to kebab-case', () => {
    expect(toKebabCase('my_property')).toBe('my-property');
  });
});
```

### Negative Test Cases (Error Handling)

Every function must have tests for error conditions:

```typescript
describe('toKebabCase - edge cases', () => {
  it('returns empty string for empty input', () => {
    expect(toKebabCase('')).toBe('');
  });

  it('returns empty string for undefined', () => {
    expect(toKebabCase(undefined)).toBe('');
  });

  it('handles string with only special characters', () => {
    expect(toKebabCase('---')).toBe('');
  });
});
```

### Boundary Test Cases

Test edge cases and boundaries:

```typescript
describe('discoverComponentFiles', () => {
  it('returns empty array for non-existent path', () => {
    mockExistsSync.mockReturnValueOnce(false);

    const result = discoverComponentFiles('/non/existent');

    expect(result).toEqual([]);
  });

  it('returns empty array for empty directory', () => {
    mockExistsSync.mockReturnValueOnce(true);
    mockStatSync.mockReturnValueOnce({ isDirectory: () => true } as fs.Stats);
    mockReaddirSync.mockReturnValueOnce([]);

    const result = discoverComponentFiles('/empty/dir');

    expect(result).toEqual([]);
  });
});
```

---

## Test File Structure

### Naming Convention

```
__tests__/
├── AGENTS.md                           # This file
├── helpers/
│   ├── fixtures.ts                     # Shared test fixtures
│   └── mocks.ts                        # Shared mock utilities
├── io/
│   ├── file-discovery.test.ts
│   ├── file-writer.test.ts
│   ├── section-updater.test.ts
│   └── source-loader.test.ts
├── parsers/
│   └── webcomponent/
│       ├── component-discovery.test.ts
│       ├── decorator-extractor.test.ts
│       ├── event-extractor.test.ts
│       ├── inheritance-resolver.test.ts
│       └── tagname-resolver.test.ts
├── emitters/
│   ├── factory.test.ts
│   ├── figma-react.test.ts
│   └── figma-webcomponent.test.ts
├── pipeline/
│   ├── batch.test.ts
│   └── index.test.ts
└── utils/
    ├── paths.test.ts
    ├── strings.test.ts
    └── ts.test.ts
```

### Test File Template

```typescript
// AI-Assisted
/**
 * @fileoverview Tests for <module-name>
 */

import { functionUnderTest } from '../../src/<module-path>';

describe('<FunctionOrClassName>', () => {
  // Mock declarations
  let mockDependency: jest.SpiedFunction<typeof dependency>;

  beforeEach(() => {
    // Initialize mocks
    mockDependency = jest.spyOn(module, 'dependency');
  });

  afterEach(() => {
    // Tear down mocks
    jest.restoreAllMocks();
  });

  describe('positive cases', () => {
    it('handles standard input correctly', () => {
      // Arrange
      mockDependency.mockReturnValueOnce(expectedValue);

      // Act
      const result = functionUnderTest(input);

      // Assert
      expect(result).toBe(expectedOutput);
      expect(mockDependency).toHaveBeenCalledTimes(1);
      expect(mockDependency).toHaveBeenCalledWith(expectedArgs);
    });
  });

  describe('negative cases', () => {
    it('throws on invalid input', () => {
      expect(() => functionUnderTest(invalidInput)).toThrow('Expected error message');
    });

    it('returns empty result for missing data', () => {
      mockDependency.mockReturnValueOnce(null);

      const result = functionUnderTest(input);

      expect(result).toEqual([]);
    });
  });

  describe('edge cases', () => {
    it('handles empty input', () => {
      const result = functionUnderTest('');
      expect(result).toBe('');
    });
  });
});
// End AI-Assisted
```

---

## Coverage Requirements

### Minimum Coverage Thresholds

| Metric     | Minimum |
| ---------- | ------- |
| Statements | 80%     |
| Branches   | 80%     |
| Functions  | 80%     |
| Lines      | 80%     |

### Coverage Commands

```bash
# Run tests with coverage
yarn test:coverage

# View coverage report
open coverage/lcov-report/index.html
```

---

## Anti-Patterns to Avoid

### ❌ Shared Mutable State

```typescript
// BAD - Shared state between tests
let sharedMock = jest.fn();

it('test 1', () => {
  sharedMock.mockReturnValue(1);
  // ...
});

it('test 2', () => {
  // sharedMock still has state from test 1!
});
```

### ❌ Implementation Testing

```typescript
// BAD - Testing implementation details
it('calls internal helper', () => {
  writeFile('/path', 'content');
  expect(internalHelper).toHaveBeenCalled();
});

// GOOD - Testing observable behavior
it('creates file with correct content', () => {
  writeFile('/path', 'content');
  expect(mockWriteFileSync).toHaveBeenCalledWith('/path', 'content', 'utf8');
});
```

### ❌ Snapshot Overuse

```typescript
// BAD - Brittle snapshot of entire output
expect(generatedCode).toMatchSnapshot();

// GOOD - Targeted assertions on critical parts
expect(generatedCode).toContain('figma.connect(');
expect(generatedCode).toContain('props: {');
expect(generatedCode).toMatch(/disabled:\s*figma\.boolean/);
```

### ❌ Magic Values Without Context

```typescript
// BAD - Magic numbers/strings
expect(result.length).toBe(3);

// GOOD - Named constants or clear setup
const inputFiles = ['a.ts', 'b.ts', 'c.ts'];
const result = discoverFiles(inputFiles);
expect(result).toHaveLength(inputFiles.length);
```
