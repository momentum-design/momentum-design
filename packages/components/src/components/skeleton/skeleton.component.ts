import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS } from './skeleton.constants';
import styles from './skeleton.styles';
import type { SkeletonVariant } from './skeleton.types';

/**
 * `mdc-skeleton` is a component that shows a grey placeholder area.
 * It provides visual feedback to users that content is being loaded.
 *
 * **Skeleton Variants:**
 * - **rectangular**: Default variant with 0.25rem border radius
 * - **rounded**: Has 0.5rem border radius
 * - **circular**: Has 50% border radius for circular shapes
 * - **button**: Optimized for button placeholders with 1.25rem border radius
 *
 * **Sizing Behavior:**
 * 1. If wrapping content, takes dimensions of wrapped content
 * 2. Otherwise grows to fill parent container
 *
 * @tagname mdc-skeleton
 *
 * @slot - Content to wrap (optional). When provided, skeleton takes dimensions of this content.
 *
 * @cssproperty --mdc-skeleton-background-color - background color of the skeleton
 * @cssproperty --mdc-skeleton-height - height of the skeleton
 * @cssproperty --mdc-skeleton-width - width of the skeleton
 */
class Skeleton extends Component {
  /**
   * The variant of skeleton to display
   * - **rectangular**: Default rectangular shape with 0.25rem border radius
   * - **rounded**: Rounded rectangle with 0.5rem border radius
   * - **circular**: Circular shape with 50% border radius
   * - **button**: Button placeholder with 1.25rem border radius
   * @default rectangular
   */
  @property({ type: String, reflect: true })
  variant: SkeletonVariant = DEFAULTS.VARIANT;

  /**
   * Styles associated with this component.
   */
  public static override styles: Array<CSSResult> = [
    ...Component.styles,
    styles,
  ];

  public override connectedCallback(): void {
    super.connectedCallback();
    this.setAttribute('aria-hidden', 'true');
  }

  protected override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.checkSlotContent();
  }

  private checkSlotContent(): void {
    const slot = this.shadowRoot?.querySelector('slot');
    if (slot) {
      const hasContent = slot.assignedNodes().length > 0;
      if (hasContent) {
        this.setAttribute('has-content', '');
      } else {
        this.removeAttribute('has-content');
      }
    }
  }

  protected override render() {
    return html`<slot @slotchange=${this.checkSlotContent}></slot>`;
  }
}

export default Skeleton;
