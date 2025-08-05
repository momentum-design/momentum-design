---
mode: 'agent'
tools: ['codebase', 'editFiles', 'runCommands', 'search']
---

# Optimize and Debug Component

This prompt guides you through a comprehensive optimization and debugging process for Momentum Design System components based on best practices learned from real-world development scenarios.

## Prerequisites
- Component must already exist in `packages/components/src/components/`
- Follow all applicable copilot-instruction files
- This prompt should be executed in Agent mode only

## Optimization Process

### 1. Component Analysis Phase
Before making any changes, thoroughly analyze the component:

#### State Management Review
- [ ] Identify all `@state` and `@property` decorators
- [ ] Look for redundant boolean flags that can be derived from existing state
- [ ] Check for state variables that serve the same purpose
- [ ] Verify that state changes trigger appropriate re-renders

#### Performance Assessment  
- [ ] Review `willUpdate()` implementation for unnecessary expensive operations
- [ ] Check for memory leaks: timeouts, intervals, event listeners
- [ ] Analyze queue management and resource cleanup
- [ ] Verify proper lifecycle method usage

#### API Design Evaluation
- [ ] Assess public vs private property accessibility
- [ ] Review method naming consistency
- [ ] Check TypeScript type safety and interfaces
- [ ] Evaluate configuration options and defaults

### 2. Code Optimization Steps

#### Memory Management
1. **Timeout Tracking**: Implement Set<number> to track active timeouts
   ```typescript
   private activeTimeouts = new Set<number>();
   
   private createTimeout(callback: () => void, delay: number): number {
     const id = window.setTimeout(() => {
       callback();
       this.activeTimeouts.delete(id);
     }, delay);
     this.activeTimeouts.add(id);
     return id;
   }
   
   private clearAllTimeouts(): void {
     this.activeTimeouts.forEach(id => window.clearTimeout(id));
     this.activeTimeouts.clear();
   }
   ```

2. **Queue Management**: Implement bounded queues with configurable limits
   ```typescript
   @property({ type: Number, attribute: 'max-queue-size' })
   maxQueueSize: number = Number.MAX_SAFE_INTEGER;
   
   private enforceQueueLimit(): void {
     while (this.queue.length > this.maxQueueSize) {
       this.queue.shift(); // Remove oldest items
     }
   }
   ```

3. **Cleanup Implementation**: Ensure proper disconnection handling
   ```typescript
   disconnectedCallback(): void {
     super.disconnectedCallback();
     this.clearAllTimeouts();
     this.clearQueue();
     // Remove any event listeners
   }
   ```

#### State Optimization
1. **Remove Redundant State**: Eliminate boolean flags that duplicate information
2. **Smart Re-rendering**: Optimize willUpdate logic
   ```typescript
   protected willUpdate(changedProperties: PropertyValues): void {
     super.willUpdate(changedProperties);
     
     // Only perform expensive operations when relevant properties change
     if (changedProperties.has('importantProperty')) {
       this.performExpensiveOperation();
     }
   }
   ```

3. **Private Encapsulation**: Make internal properties private
   ```typescript
   private internalQueue: QueueItem[] = [];
   private internalState: boolean = false;
   ```

#### Event System Enhancement
1. **Consistent Event Firing**: Ensure events fire for all state changes
2. **Custom Event Implementation**: Add component-specific events
   ```typescript
   private fireCustomEvent(type: string, detail?: any): void {
     this.dispatchEvent(new CustomEvent(type, { 
       detail,
       bubbles: true,
       composed: true 
     }));
   }
   ```

### 3. Testing Optimization

#### E2E Test Updates
1. **Behavior-Focused Testing**: Update tests to use public APIs only
   ```typescript
   // ❌ Don't test private properties
   await expect(component.privateProperty).toBe(true);
   
   // ✅ Test observable behavior
   await expect(component).toHaveText('expected result');
   ```

2. **Comprehensive Coverage**: Add tests for:
   - Edge cases and error conditions
   - Memory cleanup scenarios
   - Performance under load
   - Accessibility features

#### Test Organization
- Group related tests with descriptive `describe` blocks
- Use consistent naming: "should [behavior] when [condition]"
- Include setup/teardown for test isolation

### 4. Documentation Updates

#### README.md Enhancement
1. **Complete API Documentation**: Document all public properties and methods
2. **Usage Examples**: Provide comprehensive code examples
3. **Performance Notes**: Include memory management and optimization tips
4. **Troubleshooting Section**: Add common issues and solutions

#### Code Comments
- Add JSDoc comments to all public methods
- Document complex algorithms and business logic
- Include performance considerations in comments

### 5. Story Enhancement (Dogfooding)

#### Replace Native HTML Elements
Replace all native HTML in stories with Momentum components:
```typescript
// ❌ Native HTML
<button onClick={handler}>Click Me</button>
<h3>Title</h3>
<p>Description</p>

// ✅ Momentum Components  
<mdc-button variant="primary" @click={handler}>Click Me</mdc-button>
<mdc-text type="heading-large-bold" tagname="h3">Title</mdc-text>
<mdc-text type="body-large-regular" tagname="p">Description</mdc-text>
```

#### Interactive Demonstrations
- Create stories showing dynamic behavior
- Include performance scenarios
- Demonstrate edge cases and error handling
- Show accessibility features in action

### 6. Validation Steps

After completing optimizations:

1. **Compilation Check**: Ensure no TypeScript errors
2. **Test Execution**: Run all e2e tests to verify functionality
3. **Performance Testing**: Verify memory usage and cleanup
4. **Accessibility Audit**: Test with screen readers
5. **Story Validation**: Ensure all stories work with Momentum components

### 7. Final Deliverables

Complete optimization should include:
- [ ] Optimized component with memory management
- [ ] Updated and passing e2e tests
- [ ] Enhanced stories using dogfooding approach
- [ ] Comprehensive README documentation
- [ ] Performance and accessibility improvements

## Best Practices Checklist

### Code Quality
- [ ] No redundant state variables
- [ ] Proper memory management with timeout tracking
- [ ] Private encapsulation of internal properties
- [ ] Consistent event firing
- [ ] TypeScript type safety throughout

### Testing
- [ ] Behavior-focused e2e tests (no private property access)
- [ ] Comprehensive coverage including edge cases
- [ ] Accessibility testing included
- [ ] Performance testing for memory leaks

### Documentation
- [ ] Complete API documentation
- [ ] Usage examples and best practices
- [ ] Troubleshooting section
- [ ] Performance considerations documented

### Stories
- [ ] All native HTML replaced with mdc-* components
- [ ] Interactive demonstrations of features
- [ ] Accessibility examples included
- [ ] Edge cases and error states shown

This systematic approach ensures components are robust, performant, accessible, and maintainable while following Momentum Design System best practices.
