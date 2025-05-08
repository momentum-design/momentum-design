import type Dialog from './dialog.component';

export class DialogUtils {
  private dialog: Dialog;

  constructor(dialog: Dialog) {
    this.dialog = dialog;
  }

  setupAriaAttributes() {
    if (this.dialog.headerText && !this.dialog.ariaLabel && !this.dialog.ariaLabelledby) {
      this.dialog.setAttribute('aria-labelledby', this.dialog.headerText);
    } else if (!this.dialog.headerText && !this.dialog.ariaLabel && !this.dialog.ariaLabelledby) {
      this.dialog.setAttribute('aria-labelledby', this.dialog.triggerId);
    }
  }

  createBackdrop() {
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
        z-index: ${this.dialog.zIndex - 1};
      }
    `;
    backdrop.appendChild(styleElement);
    this.dialog.parentElement?.appendChild(backdrop);
    this.dialog.backdropElement = backdrop;
  }
}
