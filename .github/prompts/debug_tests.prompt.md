---
mode: 'agent'
tools: ['codebase', 'editFiles', 'runCommands', 'get_errors', 'test_failure']
---

# Debug Failing Component Tests

This prompt provides a systematic approach to debugging and fixing failing e2e tests for Momentum Design System components, based on real-world debugging experience.

## Prerequisites
- Component and tests must exist in `packages/components/src/components/`
- Follow all applicable copilot-instruction files
- Execute in Agent mode only

## Debugging Process

### 1. Initial Assessment

#### Gather Test Information
1. **Run Tests**: Execute failing tests to get current error messages
   ```bash
   yarn components test:e2e --grep "component-name"
   ```

2. **Analyze Failures**: Use `test_failure` tool to understand error context
   - Identify specific failing assertions
   - Note error types (timeout, assertion, compilation)
   - Check for patterns across multiple failing tests

3. **Review Recent Changes**: Check if component API changes broke tests
   - Private property access issues
   - Method signature changes
   - State management modifications

### 2. Common Failure Patterns and Solutions

#### Private Property Access Issues
**Problem**: Tests accessing private properties after encapsulation improvements
```typescript
// ❌ Failing test - private property access
await expect(component.privateQueue).toHaveLength(3);
```

**Solution**: Test through public APIs and observable behavior
```typescript
// ✅ Fixed test - public behavior verification
await component.addTextChunk('test1');
await component.addTextChunk('test2'); 
await component.addTextChunk('test3');
await expect(component).toContainText('test1test2test3');
```

#### Timing and Async Issues
**Problem**: Tests failing due to animation timing or async operations
```typescript
// ❌ Failing test - not waiting for async operations
component.startAnimation();
await expect(component).toHaveText('final text');
```

**Solution**: Proper async handling and waiting
```typescript
// ✅ Fixed test - wait for completion
component.startAnimation();
await component.waitForAnimation(); // or appropriate waiting mechanism
await expect(component).toHaveText('final text');
```

#### State Verification Problems
**Problem**: Tests checking internal state instead of user-visible behavior
```typescript
// ❌ Failing test - internal state checking
await expect(component.isTyping).toBe(false);
```

**Solution**: Verify user-observable behavior
```typescript
// ✅ Fixed test - observable behavior
await expect(component).not.toHaveAttribute('aria-busy', 'true');
await expect(component.querySelector('.cursor')).not.toBeVisible();
```

#### Method Signature Changes
**Problem**: Tests calling methods with outdated signatures
```typescript
// ❌ Failing test - old method signature
component.addText('hello', 50, true, false);
```

**Solution**: Update to current method signatures
```typescript
// ✅ Fixed test - current signature
component.addTextChunk('hello', 50, true);
```

### 3. Systematic Debugging Steps

#### Step 1: Identify Root Cause
1. **Compilation Errors**: Fix TypeScript errors first
   - Use `get_errors` tool to identify compilation issues
   - Update imports and type definitions
   - Fix method signatures and property access

2. **Runtime Errors**: Address execution failures
   - Check for null reference errors
   - Verify DOM element availability
   - Ensure proper test setup

3. **Assertion Failures**: Understand expectation mismatches
   - Compare expected vs actual values
   - Check if behavior changed due to optimizations
   - Verify test assumptions are still valid

#### Step 2: Apply Targeted Fixes

##### For Encapsulation Issues:
```typescript
// Replace private property access with public behavior verification
describe('queue management', () => {
  test('should handle multiple text chunks', async () => {
    // ❌ Old approach
    // await expect(component.textChunkQueue).toHaveLength(0);
    
    // ✅ New approach
    await component.addTextChunk('chunk1');
    await component.addTextChunk('chunk2');
    
    // Verify through observable behavior
    await expect(component).toEventually.containText('chunk1chunk2');
  });
});
```

##### For Async Operations:
```typescript
// Add proper waiting mechanisms
test('should complete animation', async () => {
  const animationPromise = new Promise(resolve => {
    component.addEventListener('typing-complete', resolve, { once: true });
  });
  
  component.startTyping();
  await animationPromise;
  
  await expect(component).toHaveText('expected final text');
});
```

##### For Event Testing:
```typescript
// Test events through proper event listening
test('should fire custom events', async () => {
  const eventPromise = new Promise(resolve => {
    component.addEventListener('custom-event', (e) => {
      resolve(e.detail);
    }, { once: true });
  });
  
  component.triggerAction();
  const eventDetail = await eventPromise;
  
  expect(eventDetail).toEqual(expectedData);
});
```

#### Step 3: Update Test Patterns

##### Behavior-Focused Testing:
```typescript
describe('Component Behavior', () => {
  test('should display content correctly', async () => {
    // Focus on what users see, not internal implementation
    await expect(component).toBeVisible();
    await expect(component).toHaveText('expected content');
    await expect(component).toHaveAttribute('aria-label', 'expected label');
  });
  
  test('should respond to user interactions', async () => {
    await component.click();
    await expect(component).toHaveClass('active');
    // Verify state through observable changes
  });
});
```

##### Accessibility Testing:
```typescript
describe('Accessibility', () => {
  test('should be accessible to screen readers', async () => {
    await expect(component).toHaveAttribute('role', 'expected-role');
    await expect(component).toHaveAttribute('aria-live', 'polite');
    
    // Test dynamic content announcements
    component.updateContent('new content');
    await expect(component).toHaveAttribute('aria-busy', 'false');
  });
});
```

### 4. Test Organization Improvements

#### Group Related Tests:
```typescript
describe('ComponentName', () => {
  describe('Basic Functionality', () => {
    test('should render with default properties', async () => { /* ... */ });
    test('should handle property changes', async () => { /* ... */ });
  });
  
  describe('Dynamic Behavior', () => {
    test('should update content dynamically', async () => { /* ... */ });
    test('should handle user interactions', async () => { /* ... */ });
  });
  
  describe('Edge Cases', () => {
    test('should handle empty content', async () => { /* ... */ });
    test('should handle rapid updates', async () => { /* ... */ });
  });
  
  describe('Accessibility', () => {
    test('should be keyboard navigable', async () => { /* ... */ });
    test('should announce changes to screen readers', async () => { /* ... */ });
  });
});
```

### 5. Validation Process

#### After Fixing Tests:
1. **Run Individual Tests**: Verify each fixed test passes
2. **Run Full Test Suite**: Ensure no regression in other tests
3. **Check Coverage**: Verify test coverage remains comprehensive
4. **Performance Check**: Ensure fixes don't impact test performance

#### Quality Checklist:
- [ ] No private property access in tests
- [ ] All async operations properly handled
- [ ] Tests focus on user-observable behavior
- [ ] Accessibility features tested
- [ ] Edge cases covered
- [ ] Error conditions handled
- [ ] Event firing verified through proper listeners

### 6. Prevention Strategies

#### Code Review Guidelines:
- Review test updates alongside component changes
- Ensure tests use public APIs only
- Verify async handling is proper
- Check accessibility test coverage

#### Documentation Updates:
- Update test documentation with new patterns
- Document common pitfalls and solutions
- Provide examples of behavior-focused testing

This systematic approach ensures tests remain robust and maintainable while properly validating component behavior from a user perspective.
