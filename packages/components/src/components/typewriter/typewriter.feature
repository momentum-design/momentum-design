Feature: Typewriter Animation and Text Management

  Background:
    Given a Typewriter component is rendered
    Then it should display text with typing animation
    And it should be accessible to screen readers

  Rule: ✅ Basic Functionality

    Scenario: Default typewriter animation
      Given a Typewriter is rendered with text "Hello World"
      Then it should animate the text character by character
      And it should use the default speed of 60ms per character
      And it should display a blinking cursor during animation

    Scenario: Custom typing speed
      Given a Typewriter is rendered with speed="100"
      When the animation starts
      Then it should type at 100ms per character
      And the cursor should blink at the appropriate rate

    Scenario: Predefined speed presets
      Given a Typewriter is rendered with speed="fast"
      Then it should type at 20ms per character
      When speed is set to "normal"
      Then it should type at 60ms per character
      When speed is set to "slow"
      Then it should type at 120ms per character

  Rule: ✅ Dynamic Text Management

    Scenario: Adding text chunks with animation
      Given a Typewriter is rendered with initial text
      When I call addTextChunk(" Additional text", 50)
      Then it should animate the new text at 50ms per character
      And it should append to the existing text seamlessly

    Scenario: Adding instant text chunks
      Given a Typewriter is rendered with initial text
      When I call addInstantTextChunk(" INSTANT!")
      Then the text should appear immediately without animation
      And no cursor animation should occur for instant text

    Scenario: Mixed animated and instant text
      Given a Typewriter with initial text
      When I add an animated chunk followed by an instant chunk
      Then the animated chunk should type normally
      And the instant chunk should appear immediately after
      And subsequent animated text should continue properly

  Rule: ✅ Queue Management

    Scenario: Text chunk queuing
      Given a Typewriter is currently animating text
      When I add multiple text chunks quickly
      Then they should be queued and processed in order
      And each chunk should maintain its specified speed

    Scenario: Queue size limits
      Given a Typewriter with maxQueueSize="5"
      When I add more than 5 text chunks
      Then the oldest chunks should be dropped
      And the queue should never exceed 5 items

    Scenario: Queue clearing
      Given a Typewriter with queued text chunks
      When the component is reset or cleared
      Then all queued chunks should be removed
      And any active timeouts should be cleared

  Rule: ✅ Event System

    Scenario: Typing complete event
      Given a Typewriter is animating text
      When the animation finishes
      Then it should fire a "typing-complete" event
      And the event should contain the final text

    Scenario: Change event during typing
      Given a Typewriter is animating text
      When each character is added during animation
      Then it should fire a "change" event
      And the event should reflect the current text state

    Scenario: Event firing for instant text
      Given a Typewriter with existing text
      When I add instant text
      Then it should fire a "change" event immediately
      And it should fire a "typing-complete" event for the instant addition

  Rule: ✅ Accessibility

    Scenario: Screen reader support
      Given a Typewriter with animated text
      Then screen readers should announce the complete final text
      And not announce each individual character during animation

    Scenario: ARIA live region
      Given a Typewriter with aria-live="polite"
      When text changes during animation
      Then screen readers should be notified of updates politely
      And the component should show aria-busy="true" during animation

    Scenario: Keyboard navigation
      Given a Typewriter component
      Then it should be focusable if needed
      And it should maintain proper tab order
      And any interactive elements should be keyboard accessible

  Rule: ✅ Performance and Memory Management

    Scenario: Timeout cleanup
      Given a Typewriter with active animations
      When the component is disconnected
      Then all active timeouts should be cleared
      And no memory leaks should occur

    Scenario: Speed changes during animation
      Given a Typewriter currently animating text
      When the speed property is changed
      Then subsequent characters should use the new speed
      And the change should be seamless

    Scenario: Large text handling
      Given a Typewriter with very long text content
      When the animation starts
      Then it should handle the text efficiently
      And performance should remain acceptable

  Rule: ✅ Configuration Options

    Scenario: Typography settings
      Given a Typewriter with type="heading-large-bold"
      Then it should apply the correct typography styles
      And maintain them throughout the animation

    Scenario: HTML tag customization
      Given a Typewriter with tagname="h2"
      Then it should render as an h2 element
      And maintain semantic meaning for accessibility

    Scenario: Maximum queue size configuration
      Given a Typewriter with maxQueueSize="10"
      Then it should accept up to 10 queued text chunks
      And automatically manage queue overflow by dropping oldest items

  Rule: ✅ Edge Cases and Error Handling

    Scenario: Empty text handling
      Given a Typewriter with empty text
      Then it should handle the empty state gracefully
      And not cause any errors or infinite loops

    Scenario: Rapid successive calls
      Given a Typewriter component
      When multiple addTextChunk calls are made rapidly
      Then all chunks should be processed correctly
      And the component should remain stable

    Scenario: Component reinitialization
      Given a Typewriter that has completed animation
      When the text content is changed externally
      Then it should restart the animation with new content
      And clear any previous state appropriately
