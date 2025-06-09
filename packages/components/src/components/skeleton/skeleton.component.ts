import type { PropertyValues } from 'lit';
import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';
import { Component } from '../../models';
import { DEFAULTS } from './skeleton.constants';
import styles from './skeleton.styles';
import type { SkeletonType } from './skeleton.types';

/**
 * `mdc-skeleton` is a component that shows a grey placeholder area while content is loading.
 * It provides visual feedback to users that content is being loaded.
 *
 * **Skeleton Types:**
 * - **rectangular**: Default type with 0.25rem border radius
 * - **rounded**: Has 0.5rem border radius
 * - **circular**: Has 50% border radius for circular shapes
 * - **text**: Optimized for text placeholders with 0.25rem border radius and 1rem default height
 *
 * **Sizing Behavior:**
 * 1. Explicit width/height props take highest priority
 * 2. If wrapping content, takes dimensions of wrapped content
 * 3. Otherwise grows to fill parent container
 * 4. Exception: text type defaults to 1rem height when no height specified
 *
 * @tagname mdc-skeleton
 *
 * @slot - Content to wrap (optional). When provided, skeleton takes dimensions of this content.
 */
class Skeleton extends Component {
  /**
   * The type of skeleton to display
   * - **rectangular**: Default rectangular shape with 0.25rem border radius
   * - **rounded**: Rounded rectangle with 0.5rem border radius
   * - **circular**: Circular shape with 50% border radius
   * - **text**: Text placeholder with 0.25rem border radius and 1rem default height
   * @default rectangular
   */
  @property({ type: String, reflect: true })
  type: SkeletonType = DEFAULTS.TYPE;

  /**
   * Width of the skeleton. Can be any valid CSS width value.
   * When provided, this overrides automatic sizing behavior.
   */
  @property({ type: String })
  width?: string;

  /**
   * Height of the skeleton. Can be any valid CSS height value.
   * When provided, this overrides automatic sizing behavior.
   */
  @property({ type: String })
  height?: string;

  /**
   * Styles associated with this component.
   */
  public static override styles: Array<CSSResult> = [
    ...Component.styles,
    styles,
  ];

  protected override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Set width and height as attributes when they change
    if (changedProperties.has('width') || changedProperties.has('height')) {
      this.updateDimensions();
    }
  }

  private updateDimensions(): void {
    if (this.width) {
      this.setAttribute('data-width', this.width);
      this.style.setProperty('--skeleton-width', this.width);
    } else {
      this.removeAttribute('data-width');
      this.style.removeProperty('--skeleton-width');
    }

    if (this.height) {
      this.setAttribute('data-height', this.height);
      this.style.setProperty('--skeleton-height', this.height);
    } else {
      this.removeAttribute('data-height');
      this.style.removeProperty('--skeleton-height');
    }
  }

  protected override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.updateDimensions();
  }

  protected override render() {
    return html`<slot></slot>`;
  }
}

export default Skeleton;
