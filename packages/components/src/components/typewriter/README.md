# Typewriter Component

The `mdc-typewriter` component provides a typewriter effect for text content,
creating a progressive typing animation. It uses the `mdc-text` component
internally and adds animation capabilities with full accessibility support.

## Usage

```html
<mdc-typewriter
  >This text will be typed out character by character</mdc-typewriter
>
```

## Features

- **Configurable typing speed** with millisecond precision or presets ('slow',
  'normal', 'fast')
- **Dynamic speed adjustment** - change speed during active typing
- **Chunked text addition** - add text pieces with individual speeds
- **Instant text addition** - bypass animation for rapid text updates
- **Mixed animation modes** - combine instant and animated chunks seamlessly
- **Background tab support** - continues typing when tab is not active
- **Intelligent cursor display** - only visible during active typing
- **Full accessibility support** - screen readers announce complete text, not
  character-by-character
- **Performance optimized** - minimal re-renders and efficient animation
- **Event-driven** - fires events for animation completion and content changes
- **ARIA-compliant** - uses proper accessibility attributes

## Dependencies

- `mdc-text` - Used internally to display the text content

## Attributes

| Attribute        | Type             | Default                   | Description                                                                        |
| ---------------- | ---------------- | ------------------------- | ---------------------------------------------------------------------------------- |
| `type`           | String           | `'body-large-regular'`    | Specifies the text style to be applied to the internal `mdc-text` component        |
| `tagname`        | String           | `'p'`                     | HTML tag name for the element (passed to the internal `mdc-text` component)        |
| `speed`          | String \| Number | `'normal'` (60ms)         | Speed in milliseconds per character or preset name                                 |
| `max-queue-size` | Number           | `Number.MAX_SAFE_INTEGER` | Maximum text chunks in queue before dropping oldest chunks (for memory management) |

## Speed System

The typewriter uses milliseconds per character for precise control:

### Speed Presets

| Preset        | Milliseconds | Description                         |
| ------------- | ------------ | ----------------------------------- |
| `'very-slow'` | 240ms        | Very slow, deliberate typing        |
| `'slow'`      | 120ms        | Slow, emphatic typing               |
| `'normal'`    | 60ms         | Comfortable reading speed (Default) |
| `'fast'`      | 20ms         | Rapid typing effect                 |
| `'very-fast'` | 1ms          | Near-instant typing                 |

### Custom Speeds

You can specify any number of milliseconds per character:

- **Minimum**: 10ms (enforced lower bound)
- **Recommended range**: 10-1000ms
- **Values below 10ms** are automatically set to 10ms for performance

## Methods

| Method                                 | Parameters                                                  | Description                                                                    |
| -------------------------------------- | ----------------------------------------------------------- | ------------------------------------------------------------------------------ |
| `addTextChunk(text, speed?, instant?)` | `text: string, speed?: number \| string, instant?: boolean` | Adds a chunk of text to be typed, optionally with different speed or instantly |
| `addInstantTextChunk(text)`            | `text: string`                                              | Adds a chunk of text instantly without typing animation                        |
| `clearQueue()`                         | None                                                        | Clears all pending text chunks from the queue                                  |

## Events

| Event             | Description                                                                      |
| ----------------- | -------------------------------------------------------------------------------- |
| `typing-complete` | Fired when the typewriter finishes typing all content (including instant chunks) |
| `change`          | Fired when the content of the typewriter changes                                 |

## CSS Parts

| Part        | Description                                         |
| ----------- | --------------------------------------------------- |
| `container` | Container for text and cursor (has ARIA attributes) |
| `text`      | The text element (forwarded to `mdc-text`)          |
| `cursor`    | The cursor element (only visible during typing)     |

## Queue Management

The typewriter maintains a queue of text chunks for processing with intelligent
memory management:

- **`max-queue-size`** - Limits queue size (default: `Number.MAX_SAFE_INTEGER` -
  effectively unlimited)
- **`clearQueue()`** - Method to manually clear the queue and stop processing
- **Automatic cleanup** - When limit is reached, oldest chunks are dropped
  automatically
- **Memory safety** - All timeouts are tracked and cleaned up on component
  disconnect
- **Performance optimized** - Efficient queue processing with callback chains to
  prevent blocking

### Memory Management Examples

```html
<!-- Limit queue to 50 chunks for memory-sensitive environments -->
<mdc-typewriter max-queue-size="50">Base text</mdc-typewriter>

<!-- Unlimited queue (default) for maximum flexibility -->
<mdc-typewriter>Base text</mdc-typewriter>
```

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Clear queue manually
typewriter.clearQueue();

// Set queue limit
typewriter.maxQueueSize = 100;
```

## Examples

### Basic Usage

```html
<mdc-typewriter>Hello, world!</mdc-typewriter>
```

### With Speed Settings

```html
<!-- Using presets -->
<mdc-typewriter speed="very-slow"
  >This will type very slowly for dramatic effect...</mdc-typewriter
>
<mdc-typewriter speed="slow"
  >This will type slowly for emphasis...</mdc-typewriter
>
<mdc-typewriter speed="normal"
  >This will type at normal speed (default).</mdc-typewriter
>
<mdc-typewriter speed="fast">This will type very quickly!</mdc-typewriter>
<mdc-typewriter speed="very-fast"
  >This will type nearly instantly!</mdc-typewriter
>

<!-- Using custom millisecond values -->
<mdc-typewriter speed="30"
  >Custom fast speed (30ms per character)</mdc-typewriter
>
<mdc-typewriter speed="200"
  >Custom slow speed (200ms per character)</mdc-typewriter
>
```

### Dynamic Speed Adjustment

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Change speed during typing
typewriter.speed = 20; // Very fast
typewriter.textContent += ' This will type very quickly!';
```

### Adding Text Chunks

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Add chunks with different speeds
typewriter.addTextChunk(' Fast chunk!', 'fast');
typewriter.addTextChunk(' Very slow chunk...', 'very-slow');
typewriter.addTextChunk(' Custom speed chunk.', 80);
typewriter.addTextChunk(' Normal speed chunk.');

// Clear the queue if needed
typewriter.clearQueue();
```

### Instant Text Addition

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Add text instantly without animation
typewriter.addInstantTextChunk(' This appears instantly!');

// Or use the instant parameter in addTextChunk
typewriter.addTextChunk(' Also instant!', undefined, true);

// Mix instant and animated chunks seamlessly
typewriter.addTextChunk(' This will type out...', 'normal');
typewriter.addInstantTextChunk(' Instant!');
typewriter.addTextChunk(' Back to typing...', 'fast');
```

### Use Cases for Instant Text

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// 1. Rapid data updates (like live feeds or logs)
function addLiveUpdate(message) {
  const timestamp = new Date().toLocaleTimeString();
  typewriter.addInstantTextChunk(`\n[${timestamp}] ${message}`);
}

// 2. Re-rendering scenarios where animation was already shown
if (hasShownAnimationBefore) {
  typewriter.addInstantTextChunk(content);
} else {
  typewriter.addTextChunk(content, 'normal');
}

// 3. High-speed scenarios where animation would be too slow
typewriter.addInstantTextChunk('ERROR: ');
typewriter.addTextChunk('Connection failed', 'fast');

// 4. Mixed content with both instant and animated parts
typewriter.addInstantTextChunk('System Status: ');
typewriter.addTextChunk('All systems operational', 'slow');
```

### Queue Management Examples

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Set a queue size limit for memory-sensitive environments
typewriter.maxQueueSize = 50;

// Add many chunks (older ones will be dropped if limit exceeded)
for (let i = 0; i < 100; i++) {
  typewriter.addTextChunk(`Message ${i} `, 'fast');
}

// Clear the queue to stop all pending chunks
typewriter.clearQueue();

// Check current queue size setting
console.log('Max queue size:', typewriter.maxQueueSize);
```

### With Text Styling

```html
<mdc-typewriter
  type="heading-large-bold"
  tagname="h1"
  speed="slow"
  max-queue-size="10"
>
  This heading will type out with custom styling and limited queue
</mdc-typewriter>
```

### Handling Events

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Listen for typing completion
typewriter.addEventListener('typing-complete', () => {
  console.log('Typing animation completed!');
});

// Listen for content changes
typewriter.addEventListener('change', () => {
  console.log('Content changed!');
});
```

### Dynamic Content

```javascript
// Get reference to the typewriter element
const typewriter = document.querySelector('mdc-typewriter');

// Initial content will be typed out
typewriter.textContent = 'Initial text. ';

// Later, add more content that will also be typed out
setTimeout(() => {
  typewriter.textContent += 'This text is added later and will be typed out!';
}, 3000);
```

## Performance Features

- **Memory-safe architecture** - All timeouts tracked and cleaned up
  automatically on component disconnect
- **Optimized re-renders** - Only updates DOM when text content actually changes
- **Background tab support** - Uses `setTimeout` instead of `setInterval` for
  better performance when tab is not active
- **Efficient queue processing** - Callback-based chunk processing prevents main
  thread blocking
- **Event deduplication** - Prevents duplicate events from firing
- **Minimal CPU usage** - Character-by-character string building instead of
  substring recreation
- **Instant text optimization** - Bypasses animation loop entirely for immediate
  updates
- **Configurable queue limits** - Prevents memory accumulation in long-running
  applications
- **Smart willUpdate logic** - Avoids unnecessary re-renders during speed
  changes

## Memory Management

The component includes comprehensive memory management:

- **Timeout tracking** - All `setTimeout` calls are tracked in a `Set` for
  cleanup
- **Automatic cleanup** - `disconnectedCallback()` clears all pending timeouts
- **Queue size limits** - Configurable `max-queue-size` prevents unbounded
  memory growth
- **Efficient data structures** - Uses arrays and sets for optimal memory usage
- **No memory leaks** - Proper cleanup ensures no orphaned timers or event
  listeners

## Accessibility

The typewriter component is fully accessible:

- **Screen readers** receive the complete text immediately via `aria-label`
- **Live regions** (`aria-live="polite"`) announce content changes appropriately
- **Animation state** is communicated via `aria-busy` attribute
- **Visual cursor** is hidden from assistive technology with `aria-hidden`
- **Semantic markup** is preserved through the underlying `mdc-text` component
- **Instant text** maintains all accessibility features without animation delay

The typing animation is purely visual and does not interfere with assistive
technology users' experience.

## Browser Support

The typewriter component works in all modern browsers that support Web
Components and CSS animations. Background tab typing performance may vary by
browser.

## Advanced Features

### Dynamic Speed Changes

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Change speed during active typing (only affects slot content, not queued chunks)
typewriter.speed = 'very-fast';
typewriter.textContent += ' This will type at the new speed!';
```

### Event-Driven Applications

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Chain operations using events
typewriter.addEventListener('typing-complete', () => {
  // Add more content after current typing completes
  typewriter.addTextChunk('\nNext line of text...', 'normal');
});

// Handle content changes
typewriter.addEventListener('change', event => {
  console.log('Content updated:', event.target.textContent);
});
```

### Performance Monitoring

```javascript
const typewriter = document.querySelector('mdc-typewriter');

// Monitor queue size in memory-sensitive applications
console.log('Current max queue size:', typewriter.maxQueueSize);

// Adjust queue size based on available memory
if (performance.memory && performance.memory.usedJSHeapSize > 50000000) {
  typewriter.maxQueueSize = 10; // Reduce queue size for memory-constrained environments
}
```

## Troubleshooting

### Common Issues and Solutions

**Issue**: Text appears all at once instead of typing

- **Solution**: Ensure the component is properly connected to the DOM before
  setting content
- **Check**: Verify that `speed` is set to a reasonable value (10ms or higher)

**Issue**: Typing animation stops or freezes

- **Solution**: Check console for errors, ensure no exceptions in event handlers
- **Tip**: Use `clearQueue()` method to reset the component state

**Issue**: Memory usage grows over time

- **Solution**: Set a reasonable `max-queue-size` value for your application
- **Prevention**: Use `clearQueue()` periodically in long-running applications

**Issue**: Events not firing

- **Solution**: Ensure event listeners are added after the component is
  connected to DOM
- **Check**: Verify event names are correct (`'typing-complete'`, `'change'`)

**Issue**: Accessibility concerns

- **Solution**: The component handles accessibility automatically, but ensure
  proper semantic markup in surrounding content

### Best Practices

1. **Use appropriate speeds**: Very fast speeds (< 10ms) provide little visual
   benefit
2. **Limit queue size**: Set `max-queue-size` in applications that add many
   chunks
3. **Handle events properly**: Always remove event listeners when components are
   destroyed
4. **Test accessibility**: Verify screen reader compatibility in your specific
   use case
5. **Monitor performance**: Use browser dev tools to check memory usage in
   long-running applications

## Technical Details

### Component Architecture

- **Base class**: Extends Momentum Design Component base class
- **Rendering**: Uses Lit Element reactive updates
- **State management**: Private state with public API methods
- **Memory management**: Comprehensive timeout tracking and cleanup
- **Event system**: Custom events with proper bubbling and composition

### Animation Implementation

- **Algorithm**: Character-by-character string building with setTimeout
  scheduling
- **Performance**: Non-blocking animation loop with yielding to browser
- **Optimization**: Direct character appending instead of substring recreation
- **Background tabs**: Continues animation using setTimeout (not
  requestAnimationFrame)

### Queue Processing

- **Strategy**: Asynchronous callback chains prevent recursion and stack
  overflow
- **Memory safety**: Automatic oldest-first eviction when queue limit exceeded
- **State management**: Private queue with public control methods
- **Error handling**: Graceful handling of malformed chunks and edge cases
