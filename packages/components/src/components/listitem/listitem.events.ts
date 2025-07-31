import type ListItem from './listitem.component';

export class ListItemEventManager {
  /**
   * Dispatches a custom event for the ListItem.
   *
   * @param eventName - The name of the event.
   * @param instance - The LitItem instance.
   */
  private static dispatchListItemEvent(eventName: string, instance: ListItem) {
    instance.dispatchEvent(new Event(eventName, { composed: true, bubbles: true }));
  }

  /**
   * Custom event that is fired when the popover is shown.
   *
   * @param instance - The popover instance.
   */
  static onDisableListItem(instance: ListItem) {
    this.dispatchListItemEvent('disabled', instance);
  }

  /**
   * Custom event that is fired when the popover is hidden.
   *
   * @param instance - The popover instance.
   */
  static onEnableListItem(instance: ListItem) {
    this.dispatchListItemEvent('enabled', instance);
  }

  /**
   * Custom event that is fired when the popover is created.
   *
   * @param instance - The popover instance.
   */
  static onCreatedListItem(instance: ListItem) {
    // Use setTimeout to ensure the event is dispatched after the component is fully initialized
    // Inherited Element might execute its own lifecycle methods
    setTimeout(() => {
      this.dispatchListItemEvent('created', instance);
    }, 0);
  }

  /**
   * Custom event that is fired when the popover is destroyed.
   *
   * @param instance - The popover instance.
   */
  static onDestroyedListItem(instance: ListItem) {
    this.dispatchListItemEvent('destroyed', instance);
  }
}
