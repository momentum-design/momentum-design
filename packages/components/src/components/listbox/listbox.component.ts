import { CSSResult, html, PropertyValues } from 'lit';
import { property, state } from 'lit/decorators.js';

import List from '../list';
import type Option from '../option';
import { TAG_NAME as OPTION_TAGNAME } from '../option/option.constants';
import { ROLE } from '../../utils/roles';
import { DestroyItemMixin } from '../../utils/mixins/lifecycle/ItemsLifeCycleManagerMixin';
import { ListNavigationMixin } from '../../utils/mixins/ListNavigationMixin';
import { Component } from '../../models';
import { ItemCollectionMixin } from '../../utils/mixins/ItemCollectionMixin';
import { LifeCycleModifiedEvent } from '../../utils/mixins/lifecycle/LifeCycleModifiedEvent';

import styles from './listbox.styles';

/**
 * listbox component presents a list of options and allows a user to select one of them.
 *
 * PLease note, this component has name and value attributes and also emits change event,
 * but it is not a form control (yet).
 *
 * @dependency mdc-list
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-option
 * @dependency mdc-optgroup
 *
 * @tagname mdc-listbox
 *
 * @cssproperty --mdc-listbox-max-height - max height of the listbox
 *
 * @slot default - This is a default/unnamed slot
 *
 * @part container - The container of the listbox
 *
 * @event change - (React: onChange) This event is emitted when the selected item changed
 *
 *
 */
class ListBox extends ListNavigationMixin(ItemCollectionMixin<Option, typeof Component>(DestroyItemMixin(Component))) {
  public static override styles: Array<CSSResult> = [...List.styles, ...styles];

  // According to WCAG this is the expected behavior for listbox
  // https://www.w3.org/WAI/ARIA/apg/practices/listbox
  protected override loop = false;

  /**
   * The name attribute is used to identify the listbox
   */
  @property({ type: String, reflect: true }) name?: undefined | string = undefined;

  /**
   * The value attribute is used to represent the last selected option's value in the listbox.
   */
  @property({ type: String, reflect: true }) value?: undefined | string = undefined;

  /** @internal */
  @state() selectedOption?: Option | null;

  constructor() {
    super();
    this.role = ROLE.LISTBOX;
    this.addEventListener('click', this.handleClick);
    this.addEventListener('modified', this.handleModifiedEvent);
  }

  handleModifiedEvent(event: LifeCycleModifiedEvent) {
    const item = event.target as Option;

    if (event.change === 'enabled') {
      this.addItemToCacheAt(item);
    } else if (event.change === 'disabled') {
      this.removeItemFromCache(item);
    }
  }

  protected get navItems(): HTMLElement[] {
    return this.items;
  }

  override isValidItem(item: Element): boolean {
    return item.matches(`${OPTION_TAGNAME}:not([disabled])`);
  }

  handleClick(event: MouseEvent): void {
    const target = event.target as HTMLElement;
    if (this.isValidItem(target)) {
      this.setSelectedOption(target as Option);
    }
  }

  getFirstSelectedOption() {
    return this.items.find(el => el.matches('[selected]'));
  }

  /**
   * Handles the first updated lifecycle event.
   * If an option is selected, use that as the value.
   */
  public override async firstUpdated(changedProperties: PropertyValues): Promise<void> {
    await super.firstUpdated(changedProperties);

    await this.updateComplete;

    const firstSelectedOption = this.getFirstSelectedOption();

    this.setSelectedOption(firstSelectedOption ?? null);
  }

  /**
   * Handles the updated lifecycle event.
   *
   * @param changedProperties - The properties that have changed since the last update.
   */
  override updated(changedProperties: PropertyValues): void {
    if (changedProperties.has('value')) {
      const newSelectedOption = this.items.find(option => option.value === this.value);
      if (newSelectedOption) {
        this.setSelectedOption(newSelectedOption, false);
      } else {
        this.setSelectedOption(null, false);
      }
    }
  }

  /**
   * When an option is selected, this method updates local and options' DOM state and fires the change event.
   *
   * @param option - The option element in DOM which gets selected.
   * @param fireEvent - A boolean flag to indicate whether to fire the change event or not.
   */
  private setSelectedOption(option: Option | null, fireEvent = true): void {
    if (!option || option.disabled || option.softDisabled) return;

    this.updateSelectedInChildOptions(option);

    // set the selected option in the component state
    this.selectedOption = option;

    this.value = option?.value ?? '';

    if (fireEvent) {
      this.fireEvents();
    }
  }

  /**
   * Update all options selection state in the DDM.
   *
   * @param selectedOption - The option which gets selected
   */
  private updateSelectedInChildOptions(selectedOption: Option | null): void {
    this.items.forEach(option => option.removeAttribute('selected'));
    selectedOption?.setAttribute?.('selected', 'true');
  }

  /**
   * Dispatch change event when an option is selected.
   */
  private fireEvents(): void {
    if (this.selectedOption) {
      this.dispatchEvent(new Event('change', { composed: true, bubbles: true }));
    }
  }

  /**
   * Updates the state of the select component.
   * This public method should be fired when the selected on the option components is updated from the outside.
   * It ensures that the selected attribute is set correctly on the options
   * and that the aria-selected attribute is updated accordingly.
   */
  public updateState(): void {
    const newSelectedOption = this.getFirstSelectedOption();

    if (!newSelectedOption) {
      this.setSelectedOption(null);
    } else if (this.selectedOption?.value !== newSelectedOption.value) {
      this.setSelectedOption(newSelectedOption);
    }
  }

  override render() {
    return html`<slot part="container"></slot>`;
  }
}

export default ListBox;
