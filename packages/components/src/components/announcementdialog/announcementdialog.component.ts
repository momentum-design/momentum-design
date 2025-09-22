import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import Dialog from '../dialog/dialog.component';
import type { IllustrationNames } from '../illustration/illustration.types';

import styles from './announcementdialog.styles';
import { AnnouncementDialogSize } from './announcementdialog.types';
import { DEFAULTS } from './announcementdialog.constants';

/**
 * AnnouncementDialog component is a modal dialog that can be used to display announcements.
 * It can be used to create custom dialogs where content for the body and footer actions is provided by the consumer.
 * The dialog is available in 4 sizes:  medium, large, xlarge. It may also receive custom styling/sizing.
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
 * @cssproperty --mdc-announcementdialog-illustration-background-color - background color of the illustration section
 * @cssproperty --mdc-dialog-primary-background-color - primary background color of the dialog
 * @cssproperty --mdc-dialog-border-color - border color of the dialog
 * @cssproperty --mdc-dialog-header-text-color - text color of the header/title of the dialog
 * @cssproperty --mdc-dialog-description-text-color - text color of the below header description of the dialog
 * @cssproperty --mdc-dialog-elevation-3 - elevation of the dialog
 * @cssproperty --mdc-dialog-width - width of the dialog
 * @cssproperty --mdc-dialog-height - height of the dialog
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
class Announcementdialog extends Dialog {
  /**
   * The illustration to display in the announcement dialog.
   * This can be an image URL, icon name, or any other illustration identifier.
   *
   * Make sure to choose the right illustration respective the size (the filename includes the size information, i.e. threetwozero = 320px)
   */
  @property({ type: String, reflect: true })
  illustration?: IllustrationNames;

  /**
   * The size of the announcement dialog, can be 'medium' (656px width), 'large' (992px width), 'xlarge' (90% width) or 'fullscreen' (100% width).
   * @default medium
   */
  @property({ type: String, reflect: true })
  override size: AnnouncementDialogSize = DEFAULTS.SIZE;

  protected override renderHeader() {
    return html`${nothing}`;
  }

  protected override renderBody() {
    return html`
      <div part="body">
        <div part="illustration-container">
          <slot name="illustration-container">
            <mdc-illustration name="${this.illustration}"></mdc-illustration>
          </slot>
        </div>
        <div part="text-container">
          <slot name="text-container">
            <mdc-text
              part="header-text"
              tagname="${VALID_TEXT_TAGS[this.headerTagName.toUpperCase() as keyof typeof VALID_TEXT_TAGS]}"
              type="${TYPE.HEADING_MIDSIZE_MEDIUM}"
            >
              ${this.headerText}
            </mdc-text>
            <slot name="description-container"> </slot>
          </slot>
        </div>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Dialog.styles, ...styles];
}

export default Announcementdialog;
