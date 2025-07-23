import { CSSResult, html, nothing, TemplateResult } from 'lit';
import { property, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { Component } from '../../models';
import { CardAndDialogFooterMixin } from '../../utils/mixins/CardAndDialogFooterMixin';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import type { IconNames } from '../icon/icon.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { DEFAULTS, ICON_NAMES_LIST, TOAST_VARIANT } from './toast.constants';
import styles from './toast.styles';
import type { ToastVariant } from './toast.types';

/**
 * Toast is a lightweight, non-blocking alert used to inform the user of a process.
 * It can be used to display success, warning, error, or custom messages.
 * It's a controlled component that can be mounted/unmounted externally.
 *
 * @tagname mdc-toast
 * 
 * @event close - (React: onClose) Dispatched when the Close Button is clicked using mouse or keyboard.
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Toast extends CardAndDialogFooterMixin(Component) {
  /**
   * The unique ID of the toast
   */
  @property({ type: String, reflect: true })
  override id: string = '';

  /**
   * Types of toast
   * Can be `custom`, `success`, `warning` or `error`.
   */
  @property({ type: String, reflect: true })
  variant?: ToastVariant;

  /**
   * Defines a string value for the aria-label attribute for close button accessibility
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel: string | null = null;

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
  headerTagName: string = DEFAULTS.HEADER_TAG_NAME;

  /**
   * Defines a string value for the aria-label attribute when header is not used
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Defines a string value to display as the "Show More" button text
   */
  @property({ type: String, reflect: true, attribute: 'show-more-text' })
  showMoreText?: string;

  /**
   * Defines a string value to display as the "Show Less" button text
   */
  @property({ type: String, reflect: true, attribute: 'show-less-text' })
  showLessText?: string;

  @state()
  private isDetailVisible: boolean = false;

  @state()
  private hasDetailedSlot: boolean = false;

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

  private handleDetailedSlotChange(e: Event) {
    const slot = e.target as HTMLSlotElement;

    const hasMeaningfulContent = slot
      .assignedNodes({ flatten: true })
      .some((node) => {
        if (node.nodeType === Node.ELEMENT_NODE) {
          const element = node as HTMLElement;
          return element.hasChildNodes() || element.textContent?.trim();
        }
        if (node.nodeType === Node.TEXT_NODE) {
          return !!node.textContent?.trim();
        }
        return false;
    });

    this.hasDetailedSlot = hasMeaningfulContent;
  }

  private renderIcon(iconName: string): TemplateResult {
    return html`
      <mdc-icon
        name="${ifDefined(iconName as IconNames)}"
        size="${DEFAULTS.ICON_SIZE}"
        part="toast-prefix-icon"
      ></mdc-icon>
    `;
  }

  private renderIconBasedOnVariant() {
    const { variant } = this;

      switch (variant) {
      case TOAST_VARIANT.SUCCESS:
        return this.renderIcon(ICON_NAMES_LIST.SUCCESS_ICON_NAME);
      case TOAST_VARIANT.WARNING:
        return this.renderIcon(ICON_NAMES_LIST.WARNING_ICON_NAME);
      case TOAST_VARIANT.ERROR:
        return this.renderIcon(ICON_NAMES_LIST.ERROR_ICON_NAME);
      default:
        return nothing;
    }
  }

  protected override renderFooter() {
    return html` <slot name="footer">
      <div part="footer">
        ${this.hasDetailedSlot ? html`<mdc-button part="footer-toggle-btn" @click="${this.toggleDetailVisibility}" postfix-icon="arrow-down-bold" variant="tertiary">${this.isDetailVisible ? 'Show less' : 'Show more'}</mdc-button>`
      : nothing}
        <slot
          name="footer-button-secondary"
          @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, BUTTON_VARIANTS.SECONDARY)}
        ></slot>
        <slot
          name="footer-button-primary"
          @slotchange=${() => this.handleFooterSlot(DEFAULTS.BUTTON, BUTTON_VARIANTS.PRIMARY)}
        ></slot>
      </div>
    </slot>`;
  }

  public override render() {
    return html`
      <div part="content-container">
        ${this.variant === TOAST_VARIANT.CUSTOM ? html`<slot name="content-prefix" part="content-prefix"></slot>` : html`${this.renderIconBasedOnVariant()}`}
        <div part="toast-content">
          <mdc-text
            part="toast-header"
            tagname="${VALID_TEXT_TAGS[this.headerTagName.toUpperCase() as keyof typeof VALID_TEXT_TAGS]}"
            type="${TYPE.BODY_LARGE_BOLD}"
          >
            ${this.headerText}
          </mdc-text>
          <slot name="toast-body-normal"></slot>
          <slot 
            name="toast-body-detailed" 
            @slotchange="${this.handleDetailedSlotChange}" 
            style="${this.isDetailVisible ? '' : 'display:none;'}">
          </slot>
        </div>
        <mdc-button
            part="toast-close-btn"
            prefix-icon="${DEFAULTS.CANCEL_ICON}"
            variant="${BUTTON_VARIANTS.TERTIARY}"
            size="${ICON_BUTTON_SIZES[20]}"
            aria-label="${ifDefined(this.closeButtonAriaLabel) || ''}"
            @click="${this.closeToast}"
          ></mdc-button>
      </div>
      ${this.renderFooter()}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Toast;
