import { CSSResult, html, PropertyValues, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';
import styles from './dialog.styles';
import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';
import { DEFAULTS } from './dialog.constants';
import type { DialogRole, DialogSize } from './dialog.types';
import { DialogUtils } from './dialog.utils';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { DialogEventManager } from './dialog.events';

/**
 * Dialog component is a modal dialog that can be used to display information or prompt the user for input.
 * It can be used to create custom dialogs where content for the body and footer actions is provided by the consumer.
 * The dialog is available in three sizes: small, medium, and large. It may also receive custom styling/sizing.
 * The dialog interrupts the user and will block interaction with the rest of the application until it is closed.
 *
 * **Accessibility notes for consuming (have to be explicitly set when you consume the component)**
 *
 * - If the dialog is provided with header text, it will be set as the aria-label string value if aria-label
 *   is not provided.
 * - If header text is omitted, consumer should provide aria-label string value or aria-labelledby string value
 *   with the ID of the element labeling the dialog.
 * - If a triggerId is provided, the triggering element will be set as the aria-labelledby value if none is provided.
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
 * @cssproperty --mdc-dialog-height - height of the dialog
 *
 * @slot dialog-body - Slot for the dialog body content
 * @slot dialog-footer - Slot for the dialog footer content (e.g. submit/cancel buttons)
 *
 */
class Dialog extends FocusTrapMixin(Component) {
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
  ariaLabelledById: string | null = null;

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

  public triggerElement: HTMLElement | null = null;

  /** @internal */
  private utils: DialogUtils;

  /** @internal */
  public backdropElement: HTMLElement | null = null;

  constructor() {
    super();
    this.utils = new DialogUtils(this);
  }

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);
    this.setupTriggerListener();
    this.utils.setupAccessibility();
    this.style.zIndex = `${this.zIndex}`;
    DialogEventManager.onCreatedDialog(this);

    if (this.visible) {
      await this.handleCreateDialogFirstUpdate();
    }
  }

  override async disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListeners();
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
    console.log(changedProperties)

    if (changedProperties.has('visible')) {
      const oldValue = (changedProperties.get('visible') as boolean | undefined) || false;
      await this.isOpenUpdated(oldValue, this.visible);
    }
    if (changedProperties.has('zIndex')) {
      this.setAttribute('z-index', `${this.zIndex}`);
    }
    if (
      changedProperties.has('ariaLabel')
      || changedProperties.has('ariaLabelledById')
    ) {
      this.utils.setupAccessibility();
    }
  }

  /**
   * Handles the escape keydown event to close the dialog.
   *
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
  private async isOpenUpdated(oldValue: boolean, newValue: boolean) {
    if (oldValue === newValue || !this.triggerElement) {
      return;
    }

    if (newValue) {
      this.enabledFocusTrap = true;
      this.enabledPreventScroll = true;
      this.utils.createBackdrop();

      await this.handleCreateDialogFirstUpdate();
      document.addEventListener('keydown', this.onEscapeKeydown);
      this.triggerElement.setAttribute('aria-expanded', 'true');
      this.triggerElement.setAttribute(
        'aria-haspopup',
        this.triggerElement.getAttribute('aria-haspopup') || 'dialog',
      );
      DialogEventManager.onShowDialog(this);
    } else {
      this.backdropElement?.remove();
      this.backdropElement = null;
      document.removeEventListener('keydown', this.onEscapeKeydown);
      this.deactivateFocusTrap?.();
      this.triggerElement.removeAttribute('aria-expanded');
      this.triggerElement.removeAttribute('aria-haspopup');
      this.triggerElement?.focus();
      DialogEventManager.onHideDialog(this);
    }
  }

  /**
   * Hides the dialog.
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
        class="dialog-close"
        prefix-icon="cancel-bold"
        variant="tertiary"
        size="20"
        aria-label="${ifDefined(this.closeButtonAriaLabel) || ''}"
        @click="${this.hideDialog}"
      ></mdc-button>
      <div part="body">
        <slot name="dialog-body"></slot>
      </div>
      <div part="footer">
        <slot name="dialog-footer"></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Dialog;
