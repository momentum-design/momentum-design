import type Dialog from './dialog.component';

export class DialogUtils {
  /** @internal */
  private dialog: Dialog;

  constructor(dialog: Dialog) {
    this.dialog = dialog;
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

  positionCloseButton() {
    const dialogEl = document.querySelector('mdc-dialog') as HTMLElement;
    const closeButton = dialogEl?.shadowRoot?.querySelector('.dialog-close') as HTMLElement;
    const isRtl = document.querySelector('html')
      ?.getAttribute('dir') === 'rtl' || window.getComputedStyle(this.dialog).direction === 'rtl';
    const styleElement = document.createElement('style');
    styleElement.textContent = `
      .dialog-close {
        right: ${isRtl ? 'unset' : '1rem'};
        left: ${isRtl ? '1rem' : 'unset'};
        z-index: ${this.dialog.zIndex + 1};
      }
    `;
    closeButton.appendChild(styleElement);
  }
}
