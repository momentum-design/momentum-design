import { CSSResult, html, PropertyValues, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import styles from './dialog.styles';
import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';
import { DEFAULTS } from './dialog.constants';
import type { DialogRole, DialogSize, DialogVariant } from './dialog.types';
import { DialogUtils } from './dialog.utils';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { DialogEventManager } from './dialog.events';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import { CardAndDialogFooterMixin } from '../../utils/mixins/CardAndDialogFooterMixin';

/**
 * Dialog component is a modal dialog that can be used to display information or prompt the user for input.
 * It can be used to create custom dialogs where content for the body and footer actions is provided by the consumer.
 * The dialog is available in three sizes: small, medium, and large. It may also receive custom styling/sizing.
 * The dialog interrupts the user and will block interaction with the rest of the application until it is closed.
 *
 * Dialog component have 2 variants: default and promotional.
 *
 * **Accessibility notes for consuming (have to be explicitly set when you consume the component)**
 *
 * - The dialog should have an aria-label or aria-labelledby attribute to provide a label for screen readers.
 * - Use aria-labelledby to reference the ID of the element that labels the dialog when there is no visible title.
 *
 * **Note: Programmatic show/hide requires the ? prefix on the visible attribute**
 * - Use `?visible=true/false` as an attribute instead of `visible=true/false`
 * - Reference docs for more info: https://lit.dev/docs/templates/expressions/#boolean-attribute-expressions
 *
 * @dependency mdc-button
 * @dependency mdc-text
 *
 * @tagname mdc-dialog
 *
 * @event shown - (React: onShown) Dispatched when the dialog is shown
 * @event hidden - (React: onHidden) Dispatched when the dialog is hidden
 * @event created - (React: onCreated) Dispatched when the dialog is created (added to the DOM)
 * @event destroyed - (React: onDestroyed) Dispatched when the dialog is destroyed (removed from the DOM)
 *
 * @cssproperty --mdc-dialog-primary-background-color - primary background color of the dialog
 * @cssproperty --mdc-dialog-border-color - border color of the dialog
 * @cssproperty --mdc-dialog-header-text-color - text color of the header/title of the dialog
 * @cssproperty --mdc-dialog-description-text-color - text color of the below header description of the dialog
 * @cssproperty --mdc-dialog-elevation-3 - elevation of the dialog
 * @cssproperty --mdc-dialog-width - width of the dialog
 *
 * @slot dialog-body - Slot for the dialog body content
 * @slot footer-link - This slot is for passing `mdc-link` component within the footer section.
 * @slot footer-button-secondary - This slot is for passing secondary variant of `mdc-button` component
 * within the footer section.
 * @slot footer-button-primary - This slot is for passing primary variant of
 * `mdc-button` component within the footer section.
 *
 */
class Dialog extends FocusTrapMixin(CardAndDialogFooterMixin(Component)) {
  /**
   * The unique ID of the dialog
   */
  @property({ type: String, reflect: true })
  override id: string = '';

  /**
   * The ID of the element that triggers the dialog
   */
  @property({ type: String, reflect: true })
  triggerId: string = '';

  /**
   * The visibility of the dialog
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  visible: boolean = DEFAULTS.VISIBLE;

  /**
   * The z-index of the dialog
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'z-index' })
  zIndex: number = DEFAULTS.Z_INDEX;

  /**
   * The size of the dialog, can be 'small' (432x332), 'medium' (656x356), or 'large' (992x412)
   * @default small
   */
  @property({ type: String, reflect: true })
  size: DialogSize = DEFAULTS.SIZE;

  @property({ type: String, reflect: true })
  variant: DialogVariant = DEFAULTS.VARIANT;

  /**
   * Defines a string value for the aria-label attribute for close button accessibility
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel: string | null = null;

  /**
   * Defines a string value for the aria-labelledby attribute that refers to the element
   * labeling the dialog for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-labelledby' })
  ariaLabelledby: string | null = null;

  /**
   * Defines a string value for the aria-label attribute when header is not used
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Defines a string value to display as the title of the dialog
   */
  @property({ type: String, reflect: true, attribute: 'header-text' })
  headerText: string = '';

  /**
   * Defines a string value to display as the under-header description of the dialog
   */
  @property({ type: String, reflect: true, attribute: 'description-text' })
  descriptionText: string = '';

  /**
   * The html tag to be used for the header text
   */
  @property({ type: String, reflect: true, attribute: 'header-tag-name' })
  headerTagName: string = DEFAULTS.HEADER_TAG_NAME;

  /**
   * The html tag to be used for the below-header description text
   */
  @property({ type: String, reflect: true, attribute: 'description-tag-name' })
  descriptionTagName: string = DEFAULTS.DESCRIPTION_TAG_NAME;

  /**
   * Role of the dialog
   * @default dialog
   */
  @property({ type: String, reflect: true })
  override role: DialogRole = DEFAULTS.ROLE;

  /** @internal */
  public triggerElement: HTMLElement | null = null;

  /** @internal */
  private utils: DialogUtils;

  /** @internal */
  public backdropElement: HTMLElement | null = null;

  constructor() {
    super();
    /** @internal */
    this.utils = new DialogUtils(this);
    document.addEventListener('keydown', this.onEscapeKeydown);
  }

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.setupTriggerListener();
    this.utils.setupAriaAttributes();
    this.style.zIndex = `${this.zIndex}`;
    DialogEventManager.onCreatedDialog(this);

    if (this.visible) {
      await this.handleCreateDialogFirstUpdate();
    }
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
    document.removeEventListener('keydown', this.onEscapeKeydown);
    DialogEventManager.onDestroyedDialog(this);
  }

  /**
   * Sets up the trigger listener for focus trap
   */
  private setupTriggerListener() {
    if (!this.triggerId) return;

    this.triggerElement = (this.getRootNode() as Document | ShadowRoot).querySelector(`[id="${this.triggerId}"]`);
    if (!this.triggerElement) return;

    this.addEventListener('focus-trap-exit', this.hideDialog);
  }

  /**
   * Removes the trigger event listener
   */
  private removeEventListeners() {
    if (!this.triggerElement) return;

    this.removeEventListener('focus-trap-exit', this.hideDialog);
  }

  protected override async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('visible')) {
      const oldValue = (changedProperties.get('visible') as boolean | undefined);
      await this.isOpenUpdated(oldValue, this.visible);
    }
    if (changedProperties.has('zIndex')) {
      this.setAttribute('z-index', `${this.zIndex}`);
    }
    if (changedProperties.has('variant')) {
      this.updateFooterButtonColors(this.variant);
    }
    if (
      changedProperties.has('aria-label')
      || changedProperties.has('aria-labelledby')
    ) {
      this.utils.setupAriaAttributes();
    }
  }

  /**
   * Handles the escape keydown event to close the dialog.
   * @internal
   * @param event - The keyboard event.
   */
  private onEscapeKeydown = (event: KeyboardEvent) => {
    if (!this.visible || event.code !== 'Escape') {
      return;
    }

    event.preventDefault();
    this.hideDialog();
  };

  /**
   * Handles the dialog visibility change.
   * Handles the exit event to close the dialog.
   *
   * @param oldValue - The old value of the visible property.
   * @param newValue - The new value of the visible property.
   */
  private async isOpenUpdated(oldValue: boolean | undefined, newValue: boolean) {
    if (oldValue === newValue || !this.triggerElement) {
      return;
    }

    if (newValue) {
      this.enabledFocusTrap = true;
      this.enabledPreventScroll = true;
      this.utils.createBackdrop();

      await this.handleCreateDialogFirstUpdate();
      this.triggerElement.setAttribute('aria-expanded', 'true');
      this.triggerElement.setAttribute(
        'aria-haspopup',
        this.triggerElement.getAttribute('aria-haspopup') || 'dialog',
      );
      DialogEventManager.onShowDialog(this);
    } else {
      this.backdropElement?.remove();
      this.backdropElement = null;
      this.deactivateFocusTrap?.();
      this.triggerElement.removeAttribute('aria-expanded');
      this.triggerElement.removeAttribute('aria-haspopup');
      this.triggerElement?.focus();
      DialogEventManager.onHideDialog(this);
    }
  }

  /**
   * Hides the dialog.
   * @internal
   */
  public hideDialog = () => {
    this.visible = false;
  };

  /**
   * Sets the focusable elements inside the dialog.
   */
  private async handleCreateDialogFirstUpdate() {
    if (this.visible) {
      this.setFocusableElements?.();
      await this.updateComplete;
      this.setInitialFocus?.();
    }
  }

  public override render() {
    return html`
      ${this.headerText
    ? html`
      <div part="header">
        <mdc-text
          part="header-text"
          tagname="${VALID_TEXT_TAGS[this.headerTagName.toUpperCase() as keyof typeof VALID_TEXT_TAGS]}"
          type="${TYPE.BODY_LARGE_BOLD}"  
        >
          ${this.headerText}
        </mdc-text>
        <mdc-text
          part="description-text"
          tagname="${VALID_TEXT_TAGS[this.descriptionTagName.toUpperCase() as keyof typeof VALID_TEXT_TAGS]}"
          type="${TYPE.BODY_MIDSIZE_REGULAR}"
        >
          ${this.descriptionText ?? nothing}
        </mdc-text>
      </div>`
    : nothing}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${DEFAULTS.CANCEL_ICON}"
        variant="${BUTTON_VARIANTS.TERTIARY}"
        size="${ICON_BUTTON_SIZES[20]}"
        aria-label="${ifDefined(this.closeButtonAriaLabel) || ''}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      ${this.renderFooter()}
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Dialog;
