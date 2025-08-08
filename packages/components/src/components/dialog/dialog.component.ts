import { CSSResult, html, PropertyValues, nothing } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { FocusTrapMixin } from '../../utils/mixins/FocusTrapMixin';
import { PreventScrollMixin } from '../../utils/mixins/PreventScrollMixin';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { BUTTON_VARIANTS, ICON_BUTTON_SIZES } from '../button/button.constants';
import { FooterMixin } from '../../utils/mixins/FooterMixin';

import { DEFAULTS } from './dialog.constants';
import type { DialogRole, DialogSize, DialogVariant } from './dialog.types';
import { DialogEventManager } from './dialog.events';
import styles from './dialog.styles';

/**
 * Dialog component is a modal dialog that can be used to display information or prompt the user for input.
 * It can be used to create custom dialogs where content for the body and footer actions is provided by the consumer.
 * The dialog is available in 5 sizes: small, medium, large, xlarge and fullscreen. It may also receive custom styling/sizing.
 * The dialog interrupts the user and will block interaction with the rest of the application until it is closed.
 *
 * The dialog can be controlled solely through the `visible` property, no trigger element is required.
 * If a `triggerId` is provided, the dialog will manage focus with that element, otherwise it will
 * remember the previously focused element before the dialog was opened.
 *
 * The dialog is a controlled component, meaning it does not have its own state management for visibility.
 * Use the `visible` property to control the visibility of the dialog.
 * Use the `onClose` event to handle the close action of the dialog (fired when Close button is clicked
 * or Escape is pressed).
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
 * @event close - (React: onClose) Dispatched when the Close Button is clicked or Escape key is pressed
 * (this does not hide the dialog)
 *
 * @cssproperty --mdc-dialog-primary-background-color - primary background color of the dialog
 * @cssproperty --mdc-dialog-border-color - border color of the dialog
 * @cssproperty --mdc-dialog-header-text-color - text color of the header/title of the dialog
 * @cssproperty --mdc-dialog-description-text-color - text color of the below header description of the dialog
 * @cssproperty --mdc-dialog-elevation-3 - elevation of the dialog
 * @cssproperty --mdc-dialog-width - width of the dialog
 *
 * @slot header-prefix - Slot for the dialog header content. This can be used to pass custom header content.
 * @slot dialog-body - Slot for the dialog body content
 * @slot footer-link - This slot is for passing `mdc-link` component within the footer section.
 * @slot footer-button-secondary - This slot is for passing secondary variant of `mdc-button` component
 * within the footer section.
 * @slot footer-button-primary - This slot is for passing primary variant of
 * `mdc-button` component within the footer section.
 * @slot footer -  This slot is for passing custom footer content. Only use this if really needed,
 * using the footer-link and footer-button slots is preferred
 */
class Dialog extends PreventScrollMixin(FocusTrapMixin(FooterMixin(Component))) {
  /**
   * The unique ID of the dialog
   */
  @property({ type: String, reflect: true })
  override id: string = '';

  /**
   * The ID of the element that triggers the dialog
   *
   * @default undefined
   */
  @property({ type: String, reflect: true })
  triggerId?: string;

  /**
   * The visibility of the dialog
   *
   * Dialog is a controlled component, visible is the only property that controls the visibility of the dialog.
   * @default false
   */
  @property({ type: Boolean, reflect: true })
  visible: boolean = DEFAULTS.VISIBLE;

  /**
   * The z-index of the dialog
   *
   * The backdrop will have z-index of `zIndex - 1`
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'z-index' })
  zIndex: number = DEFAULTS.Z_INDEX;

  /**
   * The size of the dialog, can be 'small' (432px width), 'medium' (656px width), 'large' (992px width), 'xlarge' (90% width) or 'fullscreen' (100% width).
   * @default small
   */
  @property({ type: String, reflect: true })
  size: DialogSize = DEFAULTS.SIZE;

  /**
   * The variant of the dialog, can be 'default' or 'promotional'
   * @default default
   */
  @property({ type: String, reflect: true })
  variant: DialogVariant = DEFAULTS.VARIANT;

  /**
   * Defines a string value for the aria-label attribute for close button accessibility
   */
  @property({ type: String, attribute: 'close-button-aria-label' })
  closeButtonAriaLabel: string | null = null;

  /**
   * Defines a string value for the aria-label attribute when header is not used
   */
  @property({ type: String, reflect: true, attribute: 'aria-label' })
  override ariaLabel: string | null = null;

  /**
   * Defines a string value for the aria-labelledby attribute that refers to the element
   * labeling the dialog for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-labelledby' })
  ariaLabelledby: string | null = null;

  /**
   * Defines a string value for the aria-describedby attribute that refers to the element
   * describing the dialog for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-describedby' })
  ariaDescribedBy: string | null = null;

  /**
   * Defines a string value for the aria-description attribute that refers to the element
   * describing the dialog for accessibility
   */
  @property({ type: String, reflect: true, attribute: 'aria-description' })
  ariaDescription: string | null = null;

  /**
   * Defines a string value to display as the title of the dialog
   */
  @property({ type: String, reflect: true, attribute: 'header-text' })
  headerText?: string;

  /**
   * Defines a string value to display as the under-header description of the dialog
   */
  @property({ type: String, reflect: true, attribute: 'description-text' })
  descriptionText?: string;

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

  /**
   * Disable setting the aria-haspopup attribute on trigger element.
   * Make sure to set this to true when the popover is extended and its role
   * is not 'dialog' or 'alertdialog' i.e. listbox, menu, etc.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-aria-haspopup' })
  disableAriaHasPopup: boolean = DEFAULTS.DISABLE_ARIA_HAS_POPUP;

  /**
   * Determines whether the focus trap is enabled.
   * If true, focus will be restricted to the content within this component.
   *
   * NOTE: this should only be disabled in rare cases! By default a Modal Dialog
   * should trap focus always.
   *
   * @default true
   */
  @property({ type: Boolean, reflect: true, attribute: 'focus-trap' })
  focusTrap: boolean = DEFAULTS.FOCUS_TRAP;

  /**
   * For now preventScroll is always true as the dialog is a modal component only.
   * This means scroll will be prevented when the dialog is open.
   */
  /** @internal */
  protected override preventScroll: boolean = true;

  /** @internal */
  protected triggerElement: HTMLElement | null = null;

  /** @internal */
  protected backdropElement: HTMLElement | null = null;

  /** @internal */
  protected lastActiveElement: HTMLElement | null = null;

  override connectedCallback() {
    super.connectedCallback();

    // event listener can be added to the element directly, since dialog is a modal component
    // and it will not be allowed to be focused outside of it
    this.addEventListener('keydown', this.onEscapeKeydown.bind(this));
  }

  override disconnectedCallback() {
    super.disconnectedCallback();

    this.removeEventListener('keydown', this.onEscapeKeydown);

    this.backdropElement?.remove();
    this.backdropElement = null;

    // Set aria-expanded attribute on the trigger element to false if it exists
    this.triggerElement?.setAttribute('aria-expanded', 'false');

    this.deactivatePreventScroll();

    this.deactivateFocusTrap?.();
    this.handleFocusBackToTrigger();

    DialogEventManager.onDestroyedDialog(this);
  }

  /**
   * Applies the z-index to the dialog and backdrop elements.
   * The dialog will have a z-index of `zIndex` and the backdrop will have a z-index of `zIndex - 1`.
   *
   * @internal
   */
  private applyZIndex() {
    this.style.setProperty('z-index', `${this.zIndex}`);
    this.backdropElement?.style.setProperty('z-index', `${this.zIndex - 1}`);
  }

  protected override async firstUpdated(changedProperties: PropertyValues) {
    super.firstUpdated(changedProperties);

    this.setAttribute('aria-modal', 'true');

    this.setupAriaLabelledDescribedBy();

    this.applyZIndex();

    DialogEventManager.onCreatedDialog(this);
  }

  protected override async updated(changedProperties: PropertyValues) {
    super.updated(changedProperties);

    if (changedProperties.has('triggerId')) {
      this.triggerElement = (this.getRootNode() as Document | ShadowRoot).querySelector(`[id="${this.triggerId}"]`);
      this.setupAriaHasPopup();
    }

    if (changedProperties.has('visible')) {
      const oldValue = changedProperties.get('visible') as boolean | undefined;
      await this.isOpenUpdated(oldValue, this.visible);
    }

    if (changedProperties.has('zIndex')) {
      // If zIndex is not set, use the default value
      // This is to ensure that the dialog has always a z-index set even if not explicitly defined
      if (this.zIndex === null) {
        this.zIndex = DEFAULTS.Z_INDEX;
      }
      this.applyZIndex();
    }

    if (changedProperties.has('variant')) {
      this.updateFooterButtonColors(this.variant);
    }

    if (
      changedProperties.has('ariaLabel') ||
      changedProperties.has('ariaLabelledBy') ||
      changedProperties.has('ariaDescribedBy') ||
      changedProperties.has('ariaDescription') ||
      changedProperties.has('headerText') ||
      changedProperties.has('descriptionText')
    ) {
      this.setupAriaLabelledDescribedBy();
    }

    if (changedProperties.has('focusTrap')) {
      // if focusTrap turned false and the popover is visible, deactivate the focus trap
      if (!this.focusTrap && this.visible) {
        this.deactivateFocusTrap();
      }
    }
  }

  /**
   * Sets up the aria-haspopup attribute for the dialog.
   * This is used to indicate that the dialog can be opened by a trigger element.
   * If the trigger element does not have an aria-haspopup attribute, it will default to 'dialog'.
   *
   * @internal
   */
  private setupAriaHasPopup() {
    if (!this.disableAriaHasPopup) {
      this.triggerElement?.setAttribute(
        'aria-haspopup',
        this.triggerElement?.getAttribute('aria-haspopup') || 'dialog',
      );
    }
  }

  /**
   * Sets up the aria-labelledby and aria-describedby attributes for the dialog.
   * If no header text or description text is provided, it will point to the the triggerId if available.
   * If neither is provided, it will not set the attributes.
   *
   * @internal
   */
  private setupAriaLabelledDescribedBy() {
    // If aria-labelledby or aria-label is already set, do not override it
    if (!this.ariaLabelledby && !this.ariaLabel) {
      if (this.headerText) {
        this.setAttribute('aria-label', this.headerText);
      } else if (this.triggerId) {
        this.setAttribute('aria-labelledby', this.triggerId);
      }
    }

    // If aria-describedby or aria-description is already set, do not override it
    if (!this.ariaDescribedBy && !this.ariaDescription) {
      if (this.descriptionText) {
        this.setAttribute('aria-description', this.descriptionText);
      } else if (this.triggerId) {
        this.setAttribute('aria-describedby', this.triggerId);
      }
    }
  }

  /**
   * Creates a backdrop element for the dialog.
   * The backdrop is a full-screen overlay that appears behind the dialog when it is open.
   * It prevents interaction with the rest of the application while the dialog is open.
   * @internal
   */
  private createBackdrop() {
    // Remove existing backdrop if present
    if (this.backdropElement && this.backdropElement.parentElement) {
      this.backdropElement.parentElement.removeChild(this.backdropElement);
      this.backdropElement = null;
    }
    const backdrop = document.createElement('div');
    backdrop.classList.add('dialog-backdrop');
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: var(--mds-color-theme-common-overlays-secondary-normal);
        z-index: ${this.zIndex - 1};
      }
    `;
    backdrop.appendChild(styleElement);
    this.parentElement?.appendChild(backdrop);
    this.backdropElement = backdrop;
  }

  /**
   * Fired when Close Button is clicked or Escape key is pressed.
   * This method dispatches the close event. Setting visible to false
   * has to be done by the consumer of the component.
   */
  private closeDialog() {
    DialogEventManager.onCloseDialog(this, false);
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
    // Prevent the event from propagating to the document level
    // pressing escape on a dialog should only close the dialog, nothing else
    event.stopPropagation();

    this.closeDialog();
  };

  /**
   * Handles the dialog visibility change.
   * Handles the exit event to close the dialog.
   *
   * @param oldValue - The old value of the visible property.
   * @param newValue - The new value of the visible property.
   */
  private async isOpenUpdated(oldValue: boolean | undefined, newValue: boolean) {
    if (oldValue === newValue) {
      return;
    }

    if (newValue && !oldValue) {
      // Store the currently focused element before opening the dialog
      this.lastActiveElement = document.activeElement as HTMLElement;

      this.createBackdrop();

      this.activatePreventScroll();

      await this.updateComplete;
      if (this.focusTrap) {
        this.activateFocusTrap?.();
      }
      this.setInitialFocus?.();

      // Set aria-expanded attribute on the trigger element to true if it exists
      this.triggerElement?.setAttribute('aria-expanded', 'true');

      DialogEventManager.onShowDialog(this);
    } else if (!newValue && oldValue) {
      this.backdropElement?.remove();
      this.backdropElement = null;

      // Set aria-expanded attribute on the trigger element to false if it exists
      this.triggerElement?.setAttribute('aria-expanded', 'false');

      this.deactivatePreventScroll();

      this.deactivateFocusTrap?.();
      this.handleFocusBackToTrigger();

      DialogEventManager.onHideDialog(this);
    }
  }

  /**
   * Sets the focus back to the trigger element or the last active element.
   * This is called when the dialog is closed to ensure that the user can continue interacting with the application.
   *
   * @internal
   */
  private handleFocusBackToTrigger() {
    // If the trigger element is defined, focus it
    if (this.triggerElement) {
      this.triggerElement.focus();
    } else if (this.lastActiveElement && this.lastActiveElement.focus) {
      // If the trigger element is not defined, focus the last active element
      this.lastActiveElement.focus();
    }
  }

  public override render() {
    return html`
      ${this.headerText
        ? html` <div part="header-section">
            <div part="header">
              <slot name="header-prefix"></slot>
              <mdc-text
                part="header-text"
                tagname="${VALID_TEXT_TAGS[this.headerTagName.toUpperCase() as keyof typeof VALID_TEXT_TAGS]}"
                type="${TYPE.BODY_LARGE_BOLD}"
              >
                ${this.headerText}
              </mdc-text>
            </div>
            ${this.descriptionText
              ? html`<mdc-text
                  part="description-text"
                  tagname="${VALID_TEXT_TAGS[this.descriptionTagName.toUpperCase() as keyof typeof VALID_TEXT_TAGS]}"
                  type="${TYPE.BODY_MIDSIZE_REGULAR}"
                >
                  ${this.descriptionText}
                </mdc-text>`
              : nothing}
          </div>`
        : nothing}
      <mdc-button
        part="dialog-close-btn"
        prefix-icon="${DEFAULTS.CANCEL_ICON}"
        variant="${BUTTON_VARIANTS.TERTIARY}"
        size="${ICON_BUTTON_SIZES[20]}"
        aria-label="${ifDefined(this.closeButtonAriaLabel) || ''}"
        @click="${this.closeDialog}"
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
