---
mode: 'agent'
tools: ['codebase', 'editFiles', 'search']
---

# Create Comprehensive Component Documentation

This prompt guides you through creating thorough, user-friendly documentation for Momentum Design System components based on best practices from real-world component development.

## Prerequisites
- Component must exist in `packages/components/src/components/`
- Follow all applicable copilot-instruction files
- Execute in Agent mode only

## Documentation Structure

### 1. README.md Structure

Create or update the component's README.md with the following comprehensive structure:

#### Header Section
```markdown
# ComponentName Component

Brief, clear description of what the component does and its primary use cases.

## Features

- ✅ Feature 1 with brief description
- ✅ Feature 2 with brief description  
- ✅ Feature 3 with brief description
- ✅ Accessibility support with ARIA attributes
- ✅ Keyboard navigation support
- ✅ TypeScript support
```

#### Installation and Usage
```markdown
## Installation

The component is available as part of the Momentum Design System:

\`\`\`bash
npm install @momentum-design/components
\`\`\`

## Basic Usage

\`\`\`html
<mdc-component-name 
  property1="value1"
  property2="value2">
  Content goes here
</mdc-component-name>
\`\`\`

\`\`\`typescript
import '@momentum-design/components/dist/components/component-name';
\`\`\`
```

#### Properties Table
Create properly formatted ASCII tables for all properties:

```markdown
## Properties

| Property        | Type                 | Default    | Description                                    |
|------------------|----------------------|------------|------------------------------------------------|
| property1        | `string`            | `'default'` | Description of what this property controls     |
| property2        | `number \| string`   | `60`       | Description with multiple types                |
| complexProperty  | `ComplexType`       | `null`     | Reference to interface or enum                 |

### Property Details

#### property1
- **Type**: `string`
- **Default**: `'default'`
- **Description**: Detailed explanation of the property
- **Valid Values**: `'value1'`, `'value2'`, `'value3'`
- **Examples**:
  ```html
  <mdc-component property1="value1">Example</mdc-component>
  ```
```

#### Methods Table
```markdown
## Methods

| Method              | Parameters                    | Returns    | Description                        |
|---------------------|-------------------------------|------------|------------------------------------|
| `methodName()`      | `param: string, optional?: boolean` | `void`     | Description of what method does    |
| `asyncMethod()`     | `data: ComplexType`          | `Promise<Result>` | Async method description        |

### Method Details

#### methodName(param, optional?)
- **Parameters**:
  - `param` (string): Description of required parameter
  - `optional` (boolean, optional): Description of optional parameter
- **Returns**: `void`
- **Description**: Detailed explanation of method behavior
- **Example**:
  ```typescript
  component.methodName('example', true);
  ```
```

#### Events Table
```markdown
## Events

| Event Name      | Detail Type     | Description                                      |
|-----------------|-----------------|--------------------------------------------------|
| `change`        | `{ value: string }` | Fired when component value changes           |
| `custom-event`  | `{ data: CustomType }` | Fired for component-specific behavior     |

### Event Details

#### change
- **Detail**: `{ value: string }`
- **Bubbles**: Yes
- **Cancelable**: No
- **Description**: Detailed explanation of when event fires
- **Example**:
  ```typescript
  component.addEventListener('change', (event) => {
    console.log('New value:', event.detail.value);
  });
  ```
```

### 2. Advanced Usage Examples

#### Interactive Examples
```markdown
## Advanced Usage

### Dynamic Content Management
\`\`\`typescript
const component = document.querySelector('mdc-component-name');

// Example of dynamic usage
component.methodName('dynamic value');
component.addEventListener('custom-event', (e) => {
  console.log('Event fired:', e.detail);
});
\`\`\`

### Configuration Options
\`\`\`html
<!-- Performance optimized configuration -->
<mdc-component-name
  max-queue-size="10"
  property1="optimized-value"
  aria-label="Accessible description">
  Content with performance considerations
</mdc-component-name>
\`\`\`

### Integration with Other Components
\`\`\`html
<mdc-container>
  <mdc-text type="heading-large-bold" tagname="h2">
    Title for Component
  </mdc-text>
  <mdc-component-name property1="integrated">
    Integrated usage example
  </mdc-component-name>
  <mdc-button variant="primary" @click="handleInteraction">
    Interact
  </mdc-button>
</mdc-container>
\`\`\`
```

### 3. Accessibility Documentation

```markdown
## Accessibility

This component follows WCAG 2.1 guidelines and includes:

### ARIA Support
- `aria-live="polite"` for dynamic content announcements
- `aria-busy` attribute during processing states
- `role` attribute for semantic meaning
- `aria-label` and `aria-labelledby` for accessible naming

### Keyboard Navigation
- **Tab**: Focuses the component (if focusable)
- **Enter/Space**: Activates primary action
- **Escape**: Cancels current operation

### Screen Reader Support
- Complete content announced rather than character-by-character
- State changes announced appropriately
- Progress and status updates communicated

### High Contrast Support
- All visual elements maintain contrast ratios
- Focus indicators clearly visible
- No information conveyed by color alone

### Example Accessible Usage
\`\`\`html
<mdc-component-name
  aria-label="Descriptive label for screen readers"
  aria-live="polite"
  role="status">
  Accessible content
</mdc-component-name>
\`\`\`
```

### Accessibility mdx file
- Create a separate `componentname.accessibility.mdx` file with the following content:

```markdown
import { Meta } from '@storybook/addon-docs/blocks';

<Meta title="Components/componentname/Accessibility" />

## Accessibility Features

Complete accessibility information for the ComponentName component.
```

### 4. Performance and Best Practices

## Performance Considerations

### Memory Management
- Component automatically cleans up resources on disconnect
- Timeouts and intervals are properly managed
- Event listeners removed when appropriate

### Queue Management
- Use `max-queue-size` to limit memory usage for dynamic content
- Queue automatically drops oldest items when limit exceeded
- Default queue size is unlimited (Number.MAX_SAFE_INTEGER)

### Best Practices
1. **Configure queue size** for components handling dynamic content:
   \`\`\`html
   <mdc-component max-queue-size="50">Content</mdc-component>
   \`\`\`

2. **Use appropriate event listeners**:
   \`\`\`typescript
   // Use once: true for one-time events
   component.addEventListener('completion', handler, { once: true });
   \`\`\`

3. **Clean up in disconnected callback**:
   \`\`\`typescript
   // Component handles this automatically, but for custom extensions:
   disconnectedCallback() {
     super.disconnectedCallback();
     this.cleanup();
   }
   \`\`\`
```

### 5. Troubleshooting Section

```markdown
## Troubleshooting

### Common Issues

#### Issue: Component not responding to property changes
**Cause**: Properties not set as reactive or incorrect attribute names
**Solution**: 
- Ensure properties use `@property()` decorator
- Use kebab-case for HTML attributes (`max-queue-size` not `maxQueueSize`)
- Check browser console for warnings

#### Issue: Events not firing
**Cause**: Event listeners added before component initialization
**Solution**:
\`\`\`typescript
// Wait for component to be ready
customElements.whenDefined('mdc-component-name').then(() => {
  component.addEventListener('custom-event', handler);
});
\`\`\`

#### Issue: Performance problems with large content
**Cause**: Unlimited queue size causing memory issues
**Solution**:
\`\`\`html
<mdc-component max-queue-size="100">
  Large content here
</mdc-component>
\`\`\`

#### Issue: Accessibility announcements not working
**Cause**: Missing or incorrect ARIA attributes
**Solution**:
\`\`\`html
<mdc-component 
  aria-live="polite"
  aria-label="Meaningful description">
  Content
</mdc-component>
\`\`\`

### Debug Mode
Enable debug logging by setting the debug property:
\`\`\`typescript
component.debug = true;
\`\`\`
```

### 6. Browser Support and Compatibility

```markdown
## Browser Support

| Browser         | Version | Support Level |
|-----------------|---------|---------------|
| Chrome          | 90+     | Full Support  |
| Firefox         | 88+     | Full Support  |
| Safari          | 14+     | Full Support  |
| Edge            | 90+     | Full Support  |

### Polyfills
For older browser support, include:
- Custom Elements v1 polyfill
- Shadow DOM v1 polyfill

## TypeScript Support

Full TypeScript definitions included:
\`\`\`typescript
import { ComponentName } from '@momentum-design/components';

const component: ComponentName = document.createElement('mdc-component-name');
component.property1 = 'typed value';
\`\`\`
```

## 7. Feature and User Story Documentation

- Create a `COMPONENT_NAME.feature` file in the `packages/components/src/components/COMPONENT_NAME` directory with the following structure:

```gherkin
Feature: ComponentName Feature

  As a user of the ComponentName component
  I want to be able to use its features and properties
  So that I can achieve my desired functionality

  Scenario: Basic Usage
    Given I have the ComponentName component installed
    When I use it with default properties
    Then it should render correctly

  Scenario: Custom Properties
    Given I set custom properties on the ComponentName component
    When I interact with it
    Then it should behave as expected

  Scenario: Accessibility Features
    Given I use the ComponentName component with ARIA attributes
    When I test it with a screen reader
    Then it should announce content correctly

  Scenario: Performance Considerations
    Given I configure the ComponentName component for performance
    When I load it with large data sets
    Then it should not cause memory leaks or performance issues
```

## Documentation Quality Checklist

### Content Quality
- [ ] Clear, concise descriptions
- [ ] Comprehensive property documentation
- [ ] Method signatures with examples
- [ ] Event details with usage examples
- [ ] Accessibility information complete
- [ ] Performance guidelines included
- [ ] Troubleshooting section with common issues

### Formatting Quality
- [ ] Proper ASCII table formatting with consistent spacing
- [ ] Code examples with syntax highlighting
- [ ] Consistent heading structure
- [ ] Links to related components/documentation
- [ ] Table of contents for long documents

### Technical Accuracy
- [ ] All property types correct
- [ ] Method signatures match implementation
- [ ] Event names and details accurate
- [ ] Examples tested and working
- [ ] Browser support info current

### User Experience
- [ ] Logical information flow
- [ ] Easy to scan and find information
- [ ] Practical examples for common use cases
- [ ] Clear troubleshooting steps
- [ ] Accessibility guidance comprehensive

This documentation approach ensures users can effectively implement, customize, and troubleshoot components while maintaining high standards for accessibility and performance.
