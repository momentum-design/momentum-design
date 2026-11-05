import { CSSResult, html, nothing } from 'lit';
import styles from './emptystate.styles';
import { Component } from '../../models';
import { property, state } from 'lit/decorators.js';
import { DEFAULTS } from './emptystate.constants';
import type { EmptyStateHeadingTagName, EmptyStateLayout, EmptyStateSize } from './emptystate.types';

/**
 * Presents an empty view with required descriptive text. Add a heading for
 * first-use or empty collections, and omit it when it would repeat a search or
 * filter result description.
 *
 * @tagname mdc-emptystate
 *
 * @dependency mdc-text
 *
 * @slot illustration - optional illustration / icon
 * @slot heading - optional rich heading content; takes precedence over the heading property
 * @slot actions - optional action buttons
 *
 * @cssproperty --mdc-emptystate-max-width - The maximum width of the empty state content
 */
class EmptyState extends Component {
  /**
   * The layout of the empty state component.
   * Can be 'horizontal' or 'vertical'.
   *
   * @default 'vertical'
   */
  @property({ type: String, reflect: true })
  layout: EmptyStateLayout = DEFAULTS.LAYOUT;

  /**
   * The size of the empty state component.
   * Can be 'medium' or 'large'.
   *
   * @default 'medium'
   */
  @property({ type: String, reflect: true })
  size: EmptyStateSize = DEFAULTS.SIZE;

  /**
   * Heading text for first-use and empty-collection states. A heading slot
   * takes precedence when consumers need rich heading content.
   * Omit it for search or filter results when it would repeat the description.
   */
  @property({ type: String, reflect: true })
  heading?: string;

  /**
   * Required supporting text that explains the empty state and what the user can do next.
   */
  @property({ type: String, reflect: true })
  description?: string;

  /**
   * The HTML tag used for a heading rendered from the heading property. Choose a heading level that fits the page structure.
   * Slotted heading content controls its own semantics.
   * Use a non-heading tag when the title should not create a section heading.
   *
   * @default 'h2'
   */
  @property({ type: String, reflect: true, attribute: 'heading-tag-name' })
  headingTagName: EmptyStateHeadingTagName = DEFAULTS.HEADING_TAG_NAME;

  /** @internal */
  @state() hasActions = false;

  private handleActionsSlotChange(event: Event): void {
    const slot = event.target as HTMLSlotElement;
    this.hasActions = slot.assignedElements({ flatten: true }).length > 0;
  }

  public override render() {
    return html`
      <div part="content">
        <slot name="illustration"></slot>
        <div part="text-and-actions">
          <div part="text">
            <slot name="heading">
              ${this.heading
                ? html`<mdc-text type="heading-small-medium" tagname="${this.headingTagName}">${this.heading}</mdc-text>`
                : nothing}
            </slot>
            ${this.description
              ? html`<mdc-text type="body-small-regular" tagname="span">${this.description}</mdc-text>`
              : nothing}
          </div>
          <slot name="actions" ?hidden="${!this.hasActions}" @slotchange="${this.handleActionsSlotChange}"></slot>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default EmptyState;
