import type Dialog from './dialog.component';

export class DialogEventManager {
  /**
   * Dispatches a custom event for the dialog.
   *
   * @param eventName - The name of the event.
   * @param instance - The dialog instance.
   */
  static dispatchDialogEvent(eventName: string, instance: Dialog) {
    instance.dispatchEvent(
      new CustomEvent(eventName, {
        detail: { show: instance.visible },
        composed: true,
        bubbles: true,
      }),
    );
  }

  /**
   * Custom event that is fired when the dialog is shown.
   *
   * @param instance - The dialog instance.
   */
  static onShowDialog(instance: Dialog) {
    this.dispatchDialogEvent('shown', instance);
  }

  /**
   * Custom event that is fired when the dialog is hidden.
   *
   * @param instance - The dialog instance.
   */
  static onHideDialog(instance: Dialog) {
    this.dispatchDialogEvent('hidden', instance);
  }

  /**
   * Custom event that is fired when the dialog is created.
   *
   * @param instance - The dialog instance.
   */
  static onCreatedDialog(instance: Dialog) {
    this.dispatchDialogEvent('created', instance);
  }

  /**
   * Custom event that is fired when the dialog is destroyed.
   *
   * @param instance - The dialog instance.
   */
  static onDestroyedDialog(instance: Dialog) {
    this.dispatchDialogEvent('destroyed', instance);
  }

  /**
   * Custom event that is fired when the dialog is close when click on close icon.
   *
   * @param instance - The dialog instance.
   */
  static onCloseDialog(instance: Dialog) {
    this.dispatchDialogEvent('close', instance);
  }
}
