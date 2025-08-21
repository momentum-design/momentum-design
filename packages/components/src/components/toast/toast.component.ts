import type { CSSResult, PropertyValues } from 'lit';
import { html, nothing } from 'lit';
import { property, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { FooterMixin } from '../../utils/mixins/FooterMixin';
import type { IconNames } from '../icon/icon.types';
import { TYPE } from '../text/text.constants';
import type { TagName } from '../text/text.types';

import { DEFAULTS } from './toast.constants';
import { getIconNameForVariant } from './toast.utils';
import styles from './toast.styles';
import type { ToastVariant } from './toast.types';

/**
 * `mdc-toast` is a lightweight, non-blocking alert used to inform users about application processes.
 * It supports success, warning, error, and custom messages, and is designed to be controlled externally.
 * 
 * **Note**: When using `slot="toast-body-normal"` and `slot="toast-body-detailed"`, it's strongly recommended to wrap the content with `<mdc-text tagname="span">`.
 * If not used, ensure your custom content is styled appropriately to match the design and alignment expectations of the toast component.
 * 
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-button
 * @dependency mdc-linkbutton
 *
 * @slot content-prefix - Slot for custom content before the icon (only for custom variant).
 * @slot toast-body-normal - Slot for the main body content of the toast.
 * @slot toast-body-detailed - Slot for additional detailed content, shown when expanded.
 * @slot footer - Slot for custom footer content. Prefer using footer-button-primary and footer-button-secondary slots.
 * @slot footer-button-primary - Slot for passing the primary variant of `mdc-button` in the footer.
 * @slot footer-button-secondary - Slot for passing the secondary variant of `mdc-button` in the footer.
 *
 * @tagname mdc-toast
 * 
 * @event close - (React: onClose) Dispatched when the Close Button is clicked using mouse or keyboard.
 *
 * @csspart content-container - The container for the toast's main content, including icon, text, and close button.
 * @csspart toast-prefix-icon - The icon shown at the start of the toast, styled by variant.
 * @csspart toast-content - The container for the header and body content of the toast.
 * @csspart toast-header - The header text of the toast.
 * @csspart footer - The container for the toast's footer, including toggle and action buttons.
 * @csspart footer-button-toggle - The toggle button for showing/hiding detailed content.
 * @csspart toast-close-btn - The close button for the toast.
 *
 * @cssproperty --mdc-toast-background-color - Background color of the toast.
 * @cssproperty --mdc-toast-border-color - Border color of the toast.
 * @cssproperty --mdc-toast-header-text-color - Color of the header text in the toast.
 * @cssproperty --mdc-toast-icon-color - Color of the icon in the toast.
 * @cssproperty --mdc-toast-elevation-3 - Elevation effect applied to the toast.
 * @cssproperty --mdc-toast-width - Width of the toast.
 * @cssproperty --mdc-toast-padding - Padding inside the toast.
 */
class Toast extends FooterMixin(Component) {
  /**
   * Type of toast
   * - Can be `custom`, `success`, `warning` or `error`.
   * @default 'custom'
   */
  @property({ type: String, reflect: true })
  variant: ToastVariant = DEFAULTS.VARIANT;

  /**
   * Defines aria-label attribute for close button accessibility
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel?: string;

  /**
   * Defines a string value to display as the title of the toast
   */
  @property({ type: String, reflect: true, attribute: 'header-text' })
  headerText?: string;

  /**
   * The html tag to be used for the header text
   * @default 'h2'
   */
  @property({ type: String, reflect: true, attribute: 'header-tag-name' })
  headerTagName: TagName = DEFAULTS.HEADER_TAG_NAME;

  /**
   * Defines aria-label attribute when header is not used
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Defines the text shown on the linkbutton when detailed content is hidden.
   */
  @property({ type: String, reflect: true, attribute: 'show-more-text' })
  showMoreText?: string;

  /**
   * Defines the text shown on the linkbutton when detailed content is visible.
   */
  @property({ type: String, reflect: true, attribute: 'show-less-text' })
  showLessText?: string;

  @state()
  private isDetailVisible: boolean = false;

  @state()
  private hasDetailedSlot: boolean = false;

  @queryAssignedElements({ slot: 'toast-body-detailed', flatten: true })
  private detailedElements!: HTMLElement[];

  @state()
  private hasFooterButtons: string = '';

  /**
   * Fired when Close Button is clicked using mouse or keyboard.
   * This method dispatches the close event.
   * It is used to notify that the toast should be closed.
   */
  private closeToast() {
    const closeEvent = new CustomEvent('close', {
      bubbles: true,
      composed: true,
      detail: { id: this.id },
    });
    this.dispatchEvent(closeEvent);
  }

  private toggleDetailVisibility() {
    this.isDetailVisible = !this.isDetailVisible;
  }

  private updateDetailedSlotPresence() {
    this.hasDetailedSlot = this.detailedElements?.some((el) => el.textContent?.trim()) ?? false;
  }

  private updateFooterButtonsPresence() {
    this.hasFooterButtons = (this.footerButtonPrimary?.length ?? 0) > 0 ||
      (this.footerButtonSecondary?.length ?? 0) > 0 ||
      this.shouldRenderToggleButton() ? 'has-footer-buttons' : '';
  }

  protected override firstUpdated(changedProperties: PropertyValues): void {
    super.firstUpdated(changedProperties);
    this.updateDetailedSlotPresence();
  }

  protected renderIcon(iconName: string) {
    if(!iconName) return nothing;
    return html`
      <mdc-icon
        name="${iconName as IconNames}"
        size="${DEFAULTS.PREFIX_ICON_SIZE}"
        part="toast-prefix-icon"
      ></mdc-icon>
    `;
  }

  private shouldRenderToggleButton() {
    return this.hasDetailedSlot && this.showMoreText && this.showLessText;
  }

  private renderToggleDetailButton() {
    if (!this.shouldRenderToggleButton()) return nothing;
    return html`
      <mdc-linkbutton
        part="footer-button-toggle"
        @click="${this.toggleDetailVisibility}"
        icon-name="${this.isDetailVisible ? DEFAULTS.ARROW_UP_BOLD : DEFAULTS.ARROW_DOWN_BOLD}"
      >
        ${this.isDetailVisible ? this.showLessText : this.showMoreText}
      </mdc-linkbutton>
    `;
  }

  protected renderHeader() {
    return this.headerText
      ? html`
          <mdc-text
            part="toast-header"
            tagname="${this.headerTagName}"
            type="${TYPE.BODY_LARGE_BOLD}"
          >
            ${this.headerText}
          </mdc-text>
        `
      : nothing;
  }
  
  protected override handleFooterSlot(tagname: string, variant?: string | undefined): void {
    super.handleFooterSlot(tagname, variant);
    this.updateFooterButtonsPresence();
  }

  protected override renderFooter() {
    this.updateFooterButtonsPresence();
    return html` <slot name="footer">
      <div part="footer" class="${this.hasFooterButtons}">
        ${this.renderToggleDetailButton()}
        <slot
          name="footer-button-secondary"
          @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, DEFAULTS.SECONDARY_BUTTON)}
        ></slot>
        <slot
          name="footer-button-primary"
          @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, DEFAULTS.PRIMARY_BUTTON)}
        ></slot>
      </div>
    </slot>`;
  }

  public override render() {
    return html`
      <div part="content-container">
        ${this.variant === DEFAULTS.VARIANT 
        ? html`<slot name="content-prefix"></slot>` 
        : html`${this.renderIcon(getIconNameForVariant(this.variant) ?? '')}`}
        <div part="toast-content">
          ${this.renderHeader()}
          <slot name="toast-body-normal"></slot>
          <div ?hidden="${!this.isDetailVisible}">
            <slot name="toast-body-detailed"></slot>
          </div>
        </div>
        <mdc-button
            part="toast-close-btn"
            prefix-icon="${DEFAULTS.CANCEL_ICON}"
            variant="${DEFAULTS.TERTIARY_BUTTON}"
            size="${DEFAULTS.CLOSE_ICON_SIZE}"
            aria-label="${ifDefined(this.closeButtonAriaLabel)}"
            @click="${this.closeToast}"
          ></mdc-button>
      </div>
      ${this.renderFooter()}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Toast;
