import { CSSResult, PropertyValues, html } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import '../text';

import styles from './typewriter.styles';
import { DEFAULTS, SPEED } from './typewriter.constants';
import type {
  TextType,
  TagName,
  TypewriterSpeed,
  TextChunk,
  TypewriterChangeEvent,
  TypewriterTypingCompleteEvent,
} from './typewriter.types';

/**
 * Typewriter component that creates a typewriter effect on text content.
 * It uses the Text component internally, adding a progressive typing effect.
 *
 * The `type` attribute allows changing the text style (passed to the internal Text component).
 * The `tagname` attribute allows changing the tag name of the text element (passed to the internal Text component).
 * The default tag name is `p`.
 *
 * The `speed` attribute controls typing speed in milliseconds per character:
 * - 'very-slow' = 240ms per character
 * - 'slow' = 120ms per character
 * - 'normal' = 60ms per character (default)
 * - 'fast' = 20ms per character
 * - 'very-fast' = 1ms per character
 * - Or any numeric string representing milliseconds
 *
 * Advanced features:
 * - Dynamic speed adjustment during typing
 * - Chunked text addition via addTextChunk() method
 * - Instant text addition via addInstantTextChunk() method or instant parameter
 * - Mixed instant and animated chunks in queue
 * - Continues typing in background tabs
 * - Performance optimized for large text
 * - maxQueueSize to limit memory usage from excessive queuing
 * - event handling for typing completion and content changes
 *
 * The component includes accessibility features:
 * - Screen readers announce the complete text, not character by character
 * - Uses aria-live="polite" for dynamic content updates
 * - Sets aria-busy during typing animation
 *
 * @dependency mdc-text
 *
 * @tagname mdc-typewriter
 * @slot - Default slot for text content
 *
 * @csspart container - Container for the text element
 * @csspart text - The text element (forwarded to mdc-text)
 *
 * @event typing-complete - (React: onTypingComplete) Fired when the typewriter finishes typing all content.
 *   Detail: \{ finalContent: string \}
 * @event change - (React: onChange) Fired when the content of the typewriter changes.
 *   Detail: \{ content: string, isTyping: boolean \}
 */
class Typewriter extends Component {
  /**
   * Specifies the text style to be applied to the internal text component.
   * Uses the same types as the Text component.
   * @default body-large-regular
   */
  @property({ attribute: 'type', reflect: true, type: String })
  public type: TextType = DEFAULTS.TYPE;

  /**
   * Specifies the HTML tag name for the text element. The default tag name is `p`.
   * This attribute is optional. When set, it changes the tag name of the internal text element.
   *
   * Acceptable values include all valid tag names from the Text component.
   */
  @property({ attribute: 'tagname', reflect: true, type: String })
  public tagname?: TagName = DEFAULTS.TEXT_ELEMENT_TAGNAME;

  /**
   * Speed of the typewriter effect in milliseconds per character.
   * Can be a string preset or a numeric string in milliseconds.
   * - 'very-slow' = 240ms per character
   * - 'slow' = 120ms per character
   * - 'normal' = 60ms per character (default)
   * - 'fast' = 20ms per character
   * - 'very-fast' = 1ms per character
   * - Or any numeric string representing milliseconds (e.g., '100')
   * @default 'normal' (60ms per character)
   */
  @property({ attribute: 'speed', reflect: true })
  public speed: TypewriterSpeed = DEFAULTS.SPEED;

  /**
   * Maximum number of text chunks that can be queued before oldest chunks are dropped.
   * Set to prevent memory accumulation from excessive queuing.
   * @default Number.MAX_SAFE_INTEGER (effectively unlimited)
   */
  @property({ attribute: 'max-queue-size', type: Number, reflect: true })
  public maxQueueSize: number = Number.MAX_SAFE_INTEGER;

  /**
   * Internal state for the displayed text
   * @internal
   */
  @state()
  private displayedText: string = '';

  /**
   * Internal state to track the original text
   * @internal
   */
  @state()
  private originalText: string = '';

  /**
   * Character index for typing animation
   * @internal
   */
  private currentIndex: number = 0;

  /**
   * Typing animation timeout id
   * @internal
   */
  private typingTimeout: number | null = null;

  /**
   * Set of pending setTimeout IDs for cleanup
   * @internal
   */
  private pendingTimeouts: Set<number> = new Set();

  /**
   * Queue of text chunks to be added (limited to prevent memory issues)
   * @internal
   */
  private textChunkQueue: Array<TextChunk> = [];

  /**
   * Stores previous text content for comparison
   * @internal
   */
  private previousTextContent: string = '';

  /**
   * Whether the typing animation has completed
   * @internal
   */
  @state()
  private typingComplete: boolean = true;

  /**
   * Called when the element is first connected to the document
   */
  public override connectedCallback(): void {
    super.connectedCallback();

    this.createTimeout(() => {
      this.captureAndProcessContent();
    }, 0);
  }

  /**
   * Called when the element is disconnected from the document
   */
  public override disconnectedCallback(): void {
    this.clearTypingAnimation();
    this.clearAllTimeouts();
    super.disconnectedCallback();
  }

  /**
   * Helper to create tracked setTimeout that will be cleaned up on disconnect
   */
  private createTimeout(callback: () => void, delay: number): number {
    const id = window.setTimeout(() => {
      this.pendingTimeouts.delete(id);
      callback();
    }, delay);
    this.pendingTimeouts.add(id);
    return id;
  }

  /**
   * Clear all pending timeouts
   */
  private clearAllTimeouts(): void {
    this.pendingTimeouts.forEach(id => clearTimeout(id));
    this.pendingTimeouts.clear();
  }

  /**
   * Clears the text chunk queue and stops processing
   * Useful for resetting the component state
   */
  public clearQueue(): void {
    this.textChunkQueue.length = 0;
  }

  /**
   * Adds a chunk of text to be typed out, optionally with a different speed
   * @param text - The text to add
   * @param speed - Optional speed override for this chunk
   * @param instant - If true, text appears instantly without animation
   */
  public addTextChunk(text: string, speed?: TypewriterSpeed, instant?: boolean): void {
    if (!text) return;

    if (this.maxQueueSize < Number.MAX_SAFE_INTEGER && this.textChunkQueue.length >= this.maxQueueSize) {
      this.textChunkQueue.splice(0, this.textChunkQueue.length - this.maxQueueSize + 1);
    }

    this.textChunkQueue.push({ text, speed, instant });

    this.processChunkQueue();
  }

  /**
   * Adds a chunk of text instantly without typing animation
   * @param text - The text to add instantly
   */
  public addInstantTextChunk(text: string): void {
    this.addTextChunk(text, undefined, true);
  }

  /**
   * Processes all chunks in the queue
   */
  private processChunkQueue(): void {
    // Process the next chunk - the callback chain will handle remaining chunks
    if (this.textChunkQueue.length > 0) {
      this.processNextChunk();
    }
  }

  /**
   * Processes the next chunk in the queue
   */
  private processNextChunk(): void {
    if (this.textChunkQueue.length === 0) {
      return;
    }

    const chunk = this.textChunkQueue.shift()!;

    const originalSpeed = this.speed;
    if (chunk.speed !== undefined) {
      this.speed = chunk.speed;
    }

    this.originalText += chunk.text;
    this.typingComplete = false;

    if (chunk.instant) {
      this.displayedText = this.originalText;
      this.currentIndex = this.originalText.length;
      this.typingComplete = true;

      this.requestUpdate();

      if (chunk.speed !== undefined) {
        this.speed = originalSpeed;
      }

      if (this.textChunkQueue.length > 0) {
        this.createTimeout(() => {
          this.processNextChunk();
        }, 0);
      } else {
        this.dispatchEvent(
          new CustomEvent(DEFAULTS.CUSTOM_EVENT.TYPING_COMPLETE, {
            bubbles: true,
            composed: true,
          }),
        );
      }
    } else {
      this.startTypingAnimation(() => {
        if (chunk.speed !== undefined) {
          this.speed = originalSpeed;
        }

        // Continue processing remaining chunks or fire completion event
        if (this.textChunkQueue.length > 0) {
          // Use tracked timeout to avoid deep recursion and ensure clean state
          this.createTimeout(() => {
            this.processNextChunk();
          }, 0);
        } else {
          this.dispatchEvent(
            new CustomEvent(DEFAULTS.CUSTOM_EVENT.TYPING_COMPLETE, {
              bubbles: true,
              composed: true,
            }),
          );
        }
      });
    }
  }

  /**
   * Gets the typing delay in milliseconds per character
   */
  private getTypingDelayMs(): number {
    const speedValue = this.speed;

    // Handle preset string values
    switch (speedValue) {
      case 'slow':
        return SPEED.SLOW;
      case 'fast':
        return SPEED.FAST;
      case 'very-slow':
        return SPEED.VERY_SLOW;
      case 'very-fast':
        return SPEED.VERY_FAST;
      case 'normal':
        return SPEED.NORMAL;
      default: {
        // Try to parse as a number string, fallback to normal speed
        const numericSpeed = parseInt(speedValue, 10);
        return !Number.isNaN(numericSpeed) ? Math.max(10, numericSpeed) : SPEED.NORMAL;
      }
    }
  }

  /**
   * Responds to property changes
   */
  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Only restart animation if speed changed during active typing
    // and we're not in the middle of chunk processing
    if (changedProperties.has('speed') && !this.typingComplete && this.textChunkQueue.length === 0) {
      this.startTypingAnimation();
    }
  }

  /**
   * Captures slot content and starts typewriter animation
   */
  private captureAndProcessContent(): void {
    const slot = this.shadowRoot?.querySelector('slot');
    if (!slot) return;

    const content = slot
      .assignedNodes()
      .filter(node => node.nodeType === Node.TEXT_NODE || node.nodeType === Node.ELEMENT_NODE)
      .map(node => node.textContent || '')
      .join('');

    // If no change in content, don't restart animation
    if (content === this.previousTextContent) return;

    // If content is completely different, reset animation
    if (this.displayedText === '' || !content.includes(this.displayedText)) {
      this.originalText = content;
      this.displayedText = '';
      this.currentIndex = 0;
      this.typingComplete = false;
    } else {
      // For additional content, only type the new part
      this.originalText = content;
      this.typingComplete = false;
    }

    this.dispatchEvent(
      new CustomEvent('change', {
        bubbles: true,
        composed: true,
        detail: {
          content: this.originalText,
          isTyping: !this.typingComplete,
        },
      }) as TypewriterChangeEvent,
    );

    this.previousTextContent = content;
    this.startTypingAnimation();
  }

  /**
   * Starts the typewriter animation
   */
  private startTypingAnimation(onComplete?: () => void): void {
    this.clearTypingAnimation();

    // Don't start animation if there's no new content to type
    if (this.displayedText === this.originalText) {
      this.typingComplete = true;
      // IMPORTANT: Always call onComplete even if no animation is needed
      if (onComplete) {
        this.createTimeout(() => {
          onComplete();
        }, 0);
      }
      return;
    }

    // Make sure currentIndex is in sync with displayedText
    this.currentIndex = this.displayedText.length;
    this.typingComplete = false;

    const typeNextCharacter = () => {
      if (this.currentIndex < this.originalText.length) {
        const nextChar = this.originalText[this.currentIndex];
        const newText = this.displayedText + nextChar;

        if (newText !== this.displayedText) {
          this.displayedText = newText;
          this.requestUpdate();
        }

        this.currentIndex += 1;

        // Schedule next character
        this.typingTimeout = window.setTimeout(typeNextCharacter, this.getTypingDelayMs());
      } else {
        this.clearTypingAnimation();
        this.typingComplete = true;

        if (onComplete) {
          this.createTimeout(() => {
            onComplete();
          }, 0);
        } else {
          this.createTimeout(() => {
            this.dispatchEvent(
              new CustomEvent(DEFAULTS.CUSTOM_EVENT.TYPING_COMPLETE, {
                bubbles: true,
                composed: true,
                detail: {
                  finalContent: this.originalText,
                },
              }) as TypewriterTypingCompleteEvent,
            );
          }, 0);
        }
      }
    };

    this.typingTimeout = window.setTimeout(typeNextCharacter, this.getTypingDelayMs());
  }

  /**
   * Clears the typing animation timeout
   */
  private clearTypingAnimation(): void {
    if (this.typingTimeout !== null) {
      clearTimeout(this.typingTimeout);
      this.typingTimeout = null;
    }
  }

  /**
   * Handler for slotchange event
   */
  private handleSlotChange(): void {
    this.captureAndProcessContent();
  }

  /**
   * Render method that uses mdc-text component internally with accessibility features
   */
  public override render() {
    return html`
      <div part="${DEFAULTS.CSS_PART_CONTAINER}" aria-live="polite" aria-busy="${!this.typingComplete}">
        <mdc-text
          part="${DEFAULTS.CSS_PART_TEXT}"
          type="${this.type}"
          tagname="${ifDefined(this.tagname)}"
          aria-label="${this.originalText}"
          >${this.displayedText}</mdc-text
        >
        <slot @slotchange=${this.handleSlotChange} class="typewriter-hidden"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Typewriter;
