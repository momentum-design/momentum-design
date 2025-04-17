import type Dialog from './dialog.component';

export class DialogUtils {
  /** @internal */
  private dialog: Dialog;

  constructor(dialog: Dialog) {
    this.dialog = dialog;
  }

  /**
   * Sets up the accessibility attributes for the dialog.
   */
  setupAccessibility() {
    this.dialog.toggleAttribute('aria-modal', true);
    if (!this.dialog.ariaLabel) {
      if (this.dialog.headerText) this.dialog.ariaLabel = this.dialog.headerText;
      else if (this.dialog.descriptionText) this.dialog.ariaLabel = this.dialog.descriptionText;
    } else if (!this.dialog.ariaLabelledById) {
      this.dialog.ariaLabelledById = this.dialog.triggerElement?.id || '';
    }
  }

  createBackdrop() {
    const backdrop = document.createElement('div');
    backdrop.classList.add('dialog-backdrop');
    this.dialog.parentElement?.appendChild(backdrop);

    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dialog-backdrop {
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: gray;
        z-index: ${this.dialog.zIndex - 1};
      }
    `;
    backdrop.appendChild(styleElement);
    this.dialog.backdropElement = backdrop;
  }
}
