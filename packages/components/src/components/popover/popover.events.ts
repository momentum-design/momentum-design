import type Popover from './popover.component';

export class PopoverEventManager {
  /**
   * Dispatches a custom event for the popover.
   *
   * @param eventName - The name of the event.
   * @param instance - The popover instance.
   */
  static dispatchPopoverEvent(eventName: string, instance: Popover) {
    instance.dispatchEvent(
      new CustomEvent(eventName, {
        detail: { show: instance.visible },
        composed: true,
        bubbles: true,
      }),
    );
  }

  /**
   * Custom event that is fired when the popover is shown.
   *
   * @param instance - The popover instance.
   */
  static onShowPopover(instance: Popover) {
    this.dispatchPopoverEvent('shown', instance);
  }

  /**
   * Custom event that is fired when the popover is hidden.
   *
   * @param instance - The popover instance.
   */
  static onHidePopover(instance: Popover) {
    this.dispatchPopoverEvent('hidden', instance);
  }

  /**
   * Custom event that is fired when the popover is created.
   *
   * @param instance - The popover instance.
   */
  static onCreatedPopover(instance: Popover) {
    this.dispatchPopoverEvent('created', instance);
  }

  /**
   * Custom event that is fired when the popover is destroyed.
   *
   * @param instance - The popover instance.
   */
  static onDestroyedPopover(instance: Popover) {
    this.dispatchPopoverEvent('destroyed', instance);
  }

  /**
   * Custom event that is fired when the popover is closed by pressing the Escape key.
   *
   * @param instance - The popover instance.
   */
  static onEscapeKeyPressed(instance: Popover) {
    this.dispatchPopoverEvent('closebyescape', instance);
  }

  /**
   * Custom event that is fired when the popover is closed by clicking outside of it.
   *
   * @param instance - The popover instance.
   */
  static onClickOutside(instance: Popover) {
    this.dispatchPopoverEvent('closebyoutsideclick', instance);
  }
}
