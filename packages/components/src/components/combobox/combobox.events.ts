import type Option from '../option/option.component';

import type Combobox from './combobox.component';

export class ComboboxEventManager {
  /**
   * Dispatches a custom event for the Combobox.
   *
   * @param instance - The combobox instance.
   * @param eventName - The name of the event.
   * @param option - The option that triggered the event.
   * @param bubbles - Whether the event should bubble up the DOM tree.
   */
  static dispatchComboboxEvent(instance: Combobox, eventName: string, option: Option, bubbles = true): void {
    instance.dispatchEvent(
      new CustomEvent(eventName, {
        detail: { value: option?.value, label: option?.label },
        composed: true,
        bubbles,
      }),
    );
  }

  /**
   * Dispatches a custom event for the Combobox when the input value changes.
   *
   * @param instance - The combobox instance.
   * @param option - The value and label of the selected option.
   */
  static onInputCombobox(instance: Combobox, option: Option): void {
    this.dispatchComboboxEvent(instance, 'input', option);
  }

  /**
   * Dispatches a custom event for the Combobox when the selected option changes.
   *
   * @param instance - The combobox instance.
   * @param option - The value and label of the selected option.
   */
  static onChangeCombobox(instance: Combobox, option: Option): void {
    this.dispatchComboboxEvent(instance, 'change', option);
  }
}
