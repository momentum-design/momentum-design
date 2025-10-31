import type { PropertyValueMap, PropertyValues } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import type { ElementStoreChangeTypes } from '../../utils/controllers/ElementStore';
import { ElementStore } from '../../utils/controllers/ElementStore';
import { KEYS } from '../../utils/keys';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { CaptureDestroyEventForChildElement } from '../../utils/mixins/lifecycle/CaptureDestroyEventForChildElement';
import { LIFE_CYCLE_EVENTS } from '../../utils/mixins/lifecycle/lifecycle.contants';
import type { LifeCycleModifiedEvent } from '../../utils/mixins/lifecycle/LifeCycleModifiedEvent';
import { ListNavigationMixin } from '../../utils/mixins/ListNavigationMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import type Option from '../option/option.component';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { DEFAULTS as POPOVER_DEFAULTS, POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import type { PopoverStrategy } from '../popover/popover.types';
import { debounce } from '../../utils/debounce';
import type { Debounced } from '../../utils/debounce';

import { ARROW_ICON, DEFAULTS, LISTBOX_ID, TRIGGER_ID } from './select.constants';
import styles from './select.styles';
import type { Placement } from './select.types';

/**
 * The mdc-select component is a dropdown selection control that allows users to pick an option from a predefined list.
 * It is designed to work with `mdc-option` for individual options and `mdc-optgroup` for grouping related options.
 *
 * Every mdc-option should have a `value` attribute set to ensure proper form submission.
 *
 * To set a default option, use the `selected` attribute on the `mdc-option` element.
 * You can also set the `value` attribute on the `mdc-select` element to match the value of the desired option. The component will select the corresponding option automatically.
 *
 * **Note:** Make sure to add `mdc-selectlistbox` as a child of `mdc-select` and wrap options/optgroup in it to ensure proper accessibility functionality. Read more about it in SelectListBox documentation.
 *
 * If you need to use `mdc-tooltip` with any options, make sure to place the tooltip component outside the `mdc-select` element.
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-popover
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @tagname mdc-select
 *
 * @slot default - This is a default/unnamed slot for Selectlistbox including options and/or option group.
 *
 * @event click - (React: onClick) This event is dispatched when the select is clicked.
 * @event change - (React: onChange) This event is dispatched when the select is changed.
 * @event input - (React: onInput) This event is dispatched when the select is changed.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the select.
 * @event focus - (React: onFocus) This event is dispatched when the select receives focus.
 *
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 *
 * @cssproperty --mdc-label-font-size - Font size for the label text.
 * @cssproperty --mdc-label-font-weight - Font weight for the label text.
 * @cssproperty --mdc-label-line-height - Line height for the label text.
 * @cssproperty --mdc-label-color - Color for the label text.
 * @cssproperty --mdc-help-text-font-size - Font size for the help text.
 * @cssproperty --mdc-help-text-font-weight - Font weight for the help text.
 * @cssproperty --mdc-help-text-line-height - Line height for the help text.
 * @cssproperty --mdc-help-text-color - Color for the help text.
 * @cssproperty --mdc-required-indicator-color - Color for the required indicator text.
 * @cssproperty --mdc-select-background-color - The background color of the combobox of select.
 * @cssproperty --mdc-select-text-color - The text color of the select.
 * @cssproperty --mdc-select-border-color - The border color of the select.
 * @cssproperty --mdc-select-width - The width of the select.
 * @cssproperty --mdc-select-listbox-height - The height of the listbox inside the select.
 * @cssproperty --mdc-select-listbox-width - The width of the listbox inside the select (default: `--mdc-select-width`).
 */
class Select
  extends ListNavigationMixin(
    CaptureDestroyEventForChildElement(AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))),
  )
  implements AssociatedFormControl
{
  /** @internal */
  private itemsStore: ElementStore<Option>;

  /**
   * The placeholder text which will be shown on the text if provided.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * The placement of the popover within Select component.
   * This defines the position of the popover relative to the select input field.
   *
   * Possible values:
   *  - 'top-start'
   *  - 'bottom-start'
   * @default 'bottom-start'
   */
  @property({ type: String, reflect: true }) placement: Placement = POPOVER_PLACEMENT.BOTTOM_START;

  /**
   * This describes the clipping element(s) or area that overflow of the used popover will be checked relative to.
   * The default is 'clippingAncestors', which are the overflow ancestors which will cause the
   * element to be clipped.
   *
   * Possible values:
   *  - 'clippingAncestors'
   *  - any css selector
   *
   * @default 'clippingAncestors'
   *
   * @see [Floating UI - boundary](https://floating-ui.com/docs/detectOverflow#boundary)
   */
  @property({ type: String, reflect: true, attribute: 'boundary' })
  boundary: 'clippingAncestors' | string = POPOVER_DEFAULTS.BOUNDARY;

  /**
   * The strategy of the popover within Select.
   * This determines how the popover is positioned in the DOM.
   *
   * In case `boundary` is set to something other than 'clippingAncestors',
   * it might be necessary to set the `strategy` to 'fixed' to ensure that the popover
   * is not getting clipped by scrollable containers enclosing the select.
   *
   * @default absolute
   * @see [Floating UI - strategy](https://floating-ui.com/docs/computePosition#strategy)
   */
  @property({ type: String, reflect: true, attribute: 'strategy' })
  strategy: PopoverStrategy = POPOVER_DEFAULTS.STRATEGY;

  /**
   * The z-index of the popover within Select.
   *
   * Override this to make sure this stays on top of other components.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'popover-z-index' })
  popoverZIndex: number = POPOVER_DEFAULTS.Z_INDEX;

  /**
   * Determines whether the dropdown should flip its position when it hits the boundary.
   * @default false
   */
  @property({ type: Boolean, reflect: true, attribute: 'disable-flipping' }) disableFlipping: boolean =
    DEFAULTS.DISABLE_FLIPPING;

  /**
   * ID of the element where the backdrop will be appended to.
   * This is useful to ensure that the backdrop is appended to the correct element in the DOM.
   * If not set, the backdrop will be appended to the parent element of the select.
   */
  @property({ type: String, reflect: true, attribute: 'backdrop-append-to' })
  backdropAppendTo?: string;

  /** @internal */
  @query(`[id="${TRIGGER_ID}"]`) private visualCombobox!: HTMLDivElement;

  /** @internal */
  @state() selectedOption?: Option | null;

  /** @internal */
  @state() displayPopover = false;

  /** @internal */
  private animationFrameId?: number;

  /** @internal */
  private initialSelectedOption: Option | null = null;

  /** @internal */
  private debounceSearch?: Debounced<() => void>;

  /** @internal */
  private debounceTime = 500;

  /** @internal */
  private searchString = '';

  constructor() {
    super();

    this.addEventListener(LIFE_CYCLE_EVENTS.MODIFIED, this.handleModifiedEvent);
    this.itemsStore = new ElementStore<Option>(this, {
      isValidItem: this.isValidItem,
      onStoreUpdate: this.onStoreUpdate,
    });
  }

  override connectedCallback(): void {
    super.connectedCallback();

    this.loop = 'false';
    this.initialFocus = 0;
    this.setupDebounceSearch();
  }

  override disconnectedCallback(): void {
    super.disconnectedCallback();
    // cancel any pending debounced action and clear DOM timeouts
    this.debounceSearch?.cancel();
    // cancel any pending animation frames
    window.cancelAnimationFrame(this.animationFrameId!);
  }

  /** @internal */
  get navItems(): Option[] {
    return this.itemsStore.items;
  }

  /**
   * This function is called when the value attribute changes.
   * It updates the selected option based on the value attribute.
   *
   * @param name - attribute name
   * @param old - old value
   * @param value - new value
   */
  override attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void {
    super.attributeChangedCallback(name, oldValue, newValue);

    if (
      name === 'value' &&
      newValue !== '' &&
      newValue !== oldValue &&
      newValue !== this.selectedOption?.value &&
      this.navItems.length
    ) {
      const firstSelectedOption = this.getFirstSelectedOption();
      const firstValidOption = this.getFirstOption();
      const valueBasedOption = this.navItems.find(option => option.value === newValue);
      let optionToSelect: Option | null = null;
      if (valueBasedOption) {
        optionToSelect = valueBasedOption;
      } else if (this.placeholder) {
        optionToSelect = null;
      } else if (firstValidOption) {
        optionToSelect = firstValidOption;
      } else if (firstSelectedOption) {
        optionToSelect = firstSelectedOption;
      } else {
        return;
      }
      this.updateComplete
        .then(() => {
          this.setSelectedOption(optionToSelect);
        })
        .catch(error => {
          if (this.onerror) {
            this.onerror(error);
          }
        });
    }
  }

  /** @internal */
  private onStoreUpdate = (
    option: Option,
    changeType: ElementStoreChangeTypes,
    index: number,
    options: Option[],
  ): void => {
    switch (changeType) {
      case 'added':
        option.setAttribute('tabindex', '-1');
        break;
      case 'removed': {
        if (index === -1 || options.length === 0) {
          return;
        }

        let newIndex = index + 1;
        if (newIndex >= options.length) {
          newIndex = index - 1;
        }

        if (newIndex === -1 && this.displayPopover) {
          this.displayPopover = false;
          this.handleNativeInputFocus();
          return;
        }

        if (option.tabIndex === 0) {
          this.resetTabIndexes(newIndex);
        }

        if (option.hasAttribute('selected')) {
          let newOption: Option | null = null;
          // If there is no placeholder, then we set the first option as selected option.
          // If the the first option is about to removed then we set the next (second) option as selected.
          // The next (second) option will become first one, when the option is fully removed.
          if (!this.placeholder) {
            newOption = index === 0 ? options[newIndex] : options[0];
          }
          this.setSelectedOption(newOption);
        }
        break;
      }
      default:
        break;
    }
  };

  /** @internal */
  private isValidItem = (item: Element): boolean => item.matches(`${OPTION_TAG_NAME}:not([disabled])`);

  /** @internal */
  private getFirstSelectedOption(): Option | undefined {
    return this.navItems.find(option => option.hasAttribute('selected'));
  }

  /** @internal */
  private getFirstOption(): Option {
    return this.navItems[0];
  }

  /**
   * Update the selected option when an option is modified.
   *
   * @internal
   */
  private handleModifiedEvent(event: Event): void {
    const option = event.target as Option;
    const firstSelectedOption = this.getFirstSelectedOption();
    switch ((event as LifeCycleModifiedEvent).detail.change) {
      case 'selected': {
        // when selected, check if there is any other option is a selected option,
        // first preference should always be given to the `selected` attribute.
        // if there is no selected option, then reset it to placeholder or first option
        if (firstSelectedOption) {
          this.setSelectedOption(firstSelectedOption);
        } else {
          this.setSelectedOption(option);
        }
        break;
      }
      case 'unselected': {
        // when unselected, check if there is any other option is a selected option,
        // if there is no selected option, then reset it to placeholder or first option
        if (firstSelectedOption) {
          this.setSelectedOption(firstSelectedOption);
        } else {
          this.setSelectedOption(this.placeholder ? null : this.getFirstOption());
        }
        break;
      }
      case 'enabled': {
        this.itemsStore.add(option);
        break;
      }
      case 'disabled': {
        this.itemsStore.delete(option);
        break;
      }
      default:
        break;
    }
  }

  /**
   * Handles the first updated lifecycle event.
   * If an option is selected, use that as the value.
   * If not, use the placeholder if it exists, otherwise use the first option.
   */
  protected override async firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    await this.updateComplete;

    const firstSelectedOption = this.getFirstSelectedOption();

    if (firstSelectedOption) {
      this.initialSelectedOption = firstSelectedOption;
      // do not fire events when setting the selected value
      // which is already selected in the DOM on first update
      this.setSelectedOption(firstSelectedOption);
    } else if (!this.placeholder) {
      const firstValidOption = this.getFirstOption();
      // We will show the first option as selected & fire
      // and event since the selected option changed
      this.setSelectedOption(firstValidOption);
      this.fireEvents();
    } else if (this.placeholder) {
      // If there is no default selected option
      // then we call the native validity
      this.setInputValidity();
    }

    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.inputElement && this.autoFocusOnMount) {
      this.elementToAutoFocus = this.inputElement;
    }
    super.firstUpdated(_changedProperties);
  }

  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (
      changedProperties.has('disabled') ||
      changedProperties.has('softDisabled') ||
      changedProperties.has('readonly')
    ) {
      if (this.disabled || this.softDisabled || this.readonly) {
        // If the select is disabled, soft-disabled or readonly,
        // we close the popover if it is open.
        this.displayPopover = false;
      }
    }
  }

  /**
   * A private method which is called when an option is clicked.
   * It sets the selected option, removes selected from other options, updates the tabindex for all options,
   * closes the popover, and fires the change and input events.
   * @param event - The event which triggered this function.
   */
  private handleOptionsClick(event: MouseEvent): void {
    const option = event.target as Option;
    if (
      option &&
      option.tagName === OPTION_TAG_NAME.toUpperCase() &&
      !option.hasAttribute('disabled') &&
      !option.hasAttribute('soft-disabled')
    ) {
      this.setSelectedOption(option);
      this.displayPopover = false;
      this.fireEvents();
    }
  }

  /**
   * Sets the selected option in the component state and updates the input element's value.
   * This method ensures that only the selected option is marked as selected in the DOM,
   * and updates the tabindex for all options accordingly.
   * It also updates the validity of the input element based on the selected option.
   * This method is called when an option is selected.
   *
   * @param option - The option element in DOM which gets selected.
   */
  private setSelectedOption(option: Option | null): void {
    // if the options is already selected, return
    if (option === this.selectedOption) return;
    // set the attribute 'selected' on the option in HTML and remove it from others
    this.updateSelectedInChildOptions(option);
    // update the tabindex for all options
    this.resetTabIndexes(this.navItems.indexOf(option!));

    // set the selected option in the component state
    this.selectedOption = option;

    // update all form related values
    this.value = this.selectedOption?.value ?? '';
    this.internals.setFormValue(this.value);
    this.inputElement?.setAttribute('value', this.value);

    this.setInputValidity();
  }

  /**
   * Sets selected attribute on the selected option and removes it from all options
   * @param selectedOption - The option which gets selected
   */
  private updateSelectedInChildOptions(selectedOption: Option | null): void {
    selectedOption?.setAttribute('selected', 'true');
    this.navItems.forEach(option => {
      if (option !== selectedOption) {
        option.removeAttribute('selected');
      }
    });
  }

  /**
   * A private method which is called to fire the change and input events.
   * It dispatches the input and change events with the selected option's value and label.
   */
  private fireEvents(): void {
    this.dispatchInput(this.selectedOption!);
    this.dispatchChange(this.selectedOption!);
  }

  /**
   * Sets the validity of the input element based on the selected option.
   * If the selected option is not set and the select is required,
   * it sets a custom validation message.
   * If the selected option is set or the select is not required,
   * it clears the custom validation message.
   * This method is called to ensure that the select component behaves correctly
   * in form validation scenarios, especially when the select is required.
   * @internal
   */
  private setInputValidity() {
    if (!this.selectedOption && this.required && this.validationMessage) {
      this.inputElement?.setCustomValidity(this.validationMessage);
    } else {
      this.inputElement?.setCustomValidity('');
    }
    this.setValidity();
  }

  /**
   * Resets the select to its initially selected option.
   * @internal
   */
  formResetCallback(): void {
    const optionToResetTo = this.initialSelectedOption || null;
    if (this.selectedOption?.value !== optionToResetTo?.value) {
      this.setSelectedOption(optionToResetTo);
      // fire events to notify the change in case of reset
      this.fireEvents();
    }
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    const optionToRestoreTo = this.navItems.find(option => option.value === state || option.label === state);
    if (this.selectedOption?.value !== optionToRestoreTo?.value) {
      this.setSelectedOption(optionToRestoreTo || null);
      // fire events to notify the change in case of restore
      this.fireEvents();
    }
  }

  private dispatchChange(option: Option): void {
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value: option?.value, label: option?.label },
        composed: true,
        bubbles: true,
      }),
    );
  }

  private dispatchInput(option: Option): void {
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value: option?.value, label: option?.label },
        composed: true,
        bubbles: true,
      }),
    );
  }

  /**
   * Handles the click event on the visual combobox.
   * If the select is disabled, soft-disabled or readonly, it does nothing.
   * If the popover is already open, it closes it.
   * If it is closed, it opens it.
   * @param event - The mouse event which triggered this function.
   */
  private handleClickCombobox(event: MouseEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) {
      return;
    }
    // If the popover is already open, we close it.
    // If it is closed, we open it.
    this.displayPopover = !this.displayPopover;

    event.stopPropagation();
  }

  private setupDebounceSearch(): void {
    this.debounceSearch = debounce(() => {
      // for every 500ms, we will reset the search string.
      this.searchString = '';
    }, this.debounceTime);
  }

  private debounceSearchKey(letter: string): string {
    this.debounceSearch?.();
    // add most recent letter to saved search string
    this.searchString += letter;
    return this.searchString;
  }

  /**
   * Filters the given option labels based on the given search key.
   * It returns a new array of options that have labels starting with the given search key case-insensitive.
   *
   * @param options - The options to filter.
   * @param searchKey - The search key to filter by.
   * @returns The filtered options.
   */
  private filterOptionsBySearchKey(options: Option[], searchKey: string): Option[] {
    return options.filter(option => option.getAttribute('label')?.toLowerCase().startsWith(searchKey.toLowerCase()));
  }

  /**
   * Handles the selection of an option based on the filter string.
   * It will select the first option from the filtered list if it is not empty.
   * If the filtered list is empty, it will do nothing.
   * @param searchKey - The filter string to search for options.
   */
  private handleSelectedOptionBasedOnFilter(searchKey: string): void {
    const startIndex = this.navItems.findIndex(option => option.tabIndex === 0) + 1;
    const orderedOptions = [...this.navItems.slice(startIndex), ...this.navItems.slice(0, startIndex)];
    // First, we search for an exact match with then entire search key
    const filteredResults = this.filterOptionsBySearchKey(orderedOptions, searchKey);
    let newOption: Option | null = null;
    if (filteredResults.length) {
      // If the key is an exact match, then we set the first option
      [newOption] = filteredResults;
    } else if (searchKey.split('').every(letter => letter === searchKey[0])) {
      // If the key is same, then we cycle through all options which start with the same letter
      const nextOptionFromList = this.navItems[startIndex];
      const optionsWhichStartWithSameLetter = this.filterOptionsBySearchKey(orderedOptions, searchKey[0]);
      const nextPossibleOption = optionsWhichStartWithSameLetter.filter(option => option === nextOptionFromList);
      newOption = nextPossibleOption.length ? nextPossibleOption[0] : optionsWhichStartWithSameLetter[0];
    }
    if (this.navItems.indexOf(newOption!) !== -1) {
      this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.indexOf(newOption!));
    }
  }

  /**
   * Handles the keydown event on the select element when the popover is closed.
   * The options are as follows:
   * - ARROW_DOWN, ARROW_UP, ENTER, SPACE: Opens the popover and prevents the default scrolling behavior.
   * - HOME: Opens the popover and sets focus and tabindex on the first option.
   * - END: Opens the popover and sets focus and tabindex on the last option.
   * - Any key: Opens the popover and sets focus on the first option which starts with the key.
   * @param event - The keyboard event.
   */
  private handleKeydownCombobox(event: KeyboardEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) {
      return;
    }
    switch (event.key) {
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
      case KEYS.ENTER:
      case KEYS.SPACE:
        this.displayPopover = true;
        event.stopPropagation();
        break;
      case KEYS.HOME: {
        this.displayPopover = true;
        this.resetTabIndexAndSetFocusAfterUpdate(0);
        break;
      }
      case KEYS.END: {
        this.displayPopover = true;
        this.resetTabIndexAndSetFocusAfterUpdate(this.navItems.length - 1);
        break;
      }
      default: {
        if (event.key.length === 1) {
          this.displayPopover = true;
          this.handleSelectedOptionByKeyInput(event.key);
        }
        break;
      }
    }
    event.preventDefault();
    event.stopPropagation();
  }

  private resetTabIndexAndSetFocusAfterUpdate(newOptionIndex: number): void {
    if (this.displayPopover) {
      // When the popover is opened (`this.displayPopover` is true), the underlying DOM (especially
      // the select listbox inside the popover) may not yet be fully rendered or attached to the layout tree.
      // Calling `resetTabIndexAndSetFocus()` immediately in the same frame would fail because
      // the listbox or its scroll container might still have a height of `0` or not be ready for focus.
      // Wrapping the call inside `window.requestAnimationFrame()` defers the execution until the next
      // browser paint cycle — ensuring that:
      //   1. The DOM updates from Lit’s rendering cycle are flushed.
      //   2. The popover and its scroll container are laid out and measurable.
      //   3. The correct element can safely receive focus and scroll into view.
      this.animationFrameId = window.requestAnimationFrame(() => {
        // We need to reset the tabindex after the component renders,
        // so that the dropdown will open and the focus can be set.
        this.resetTabIndexAndSetFocus(newOptionIndex);
      });
    }
  }

  /**
   * If the native input is focused, it will focus the visual combobox.
   * This is to ensure that the visual combobox is focused when the native input is focused.
   * For example when a form is submitted and the native input is focused,
   * we want to focus the visual combobox so that the user can see the selected option
   * and can interact with it.
   * @internal
   */
  private handleNativeInputFocus(): void {
    this.visualCombobox.focus();
  }

  private handleSelectedOptionByKeyInput(searchKey: string): void {
    const searchString = this.debounceSearchKey(searchKey);
    this.handleSelectedOptionBasedOnFilter(searchString);
  }

  private handleKeydownPopover(event: KeyboardEvent): void {
    if (event.key.length === 1) {
      this.handleSelectedOptionByKeyInput(event.key);
    }
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="${TRIGGER_ID}"
          part="base-container"
          @click="${this.handleClickCombobox}"
          @keydown="${this.handleKeydownCombobox}"
          tabindex="${this.disabled ? '-1' : '0'}"
          class="${this.disabled ? '' : 'mdc-focus-ring'}"
          role="${ROLE.COMBOBOX}"
          aria-controls="${LISTBOX_ID}"
          aria-label="${this.dataAriaLabel ?? ''}"
          aria-labelledby="${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
          aria-expanded="${this.displayPopover ? 'true' : 'false'}"
          aria-haspopup="${ROLE.LISTBOX}"
          aria-required="${this.required ? 'true' : 'false'}"
          aria-invalid="${this.helpTextType === VALIDATION.ERROR ? 'true' : 'false'}"
          aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
          aria-readonly="${ifDefined(this.readonly)}"
        >
          ${this.selectedOption?.prefixIcon
            ? html`<mdc-icon
                length-unit="rem"
                size="1"
                name="${this.selectedOption?.prefixIcon}"
                part="selected-icon"
              ></mdc-icon>`
            : nothing}
          <mdc-text
            part="base-text ${this.selectedOption?.label ? 'selected' : ''}"
            type="${TYPE.BODY_MIDSIZE_REGULAR}"
            tagname="${VALID_TEXT_TAGS.SPAN}"
          >
            ${this.selectedOption?.label ?? this.placeholder}
          </mdc-text>
        </div>
        <div part="icon-container">
          <mdc-icon
            size="1"
            length-unit="rem"
            name="${this.displayPopover ? ARROW_ICON.ARROW_UP : ARROW_ICON.ARROW_DOWN}"
          ></mdc-icon>
        </div>
        <input
          id="${this.inputId}"
          part="native-input"
          name="${this.name}"
          type="text"
          ?disabled=${this.disabled}
          ?required=${this.required}
          ?readonly=${this.readonly}
          tabindex="-1"
          aria-hidden="true"
          @focus=${this.handleNativeInputFocus}
          @invalid=${this.setInputValidity}
          aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
        />
        <mdc-popover
          trigger="${TRIGGER.MANUAL}"
          triggerid="${TRIGGER_ID}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          backdrop
          backdrop-append-to="${ifDefined(this.backdropAppendTo)}"
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          @keydown="${this.handleKeydownPopover}"
          ?flip="${this.disableFlipping}"
          boundary="${ifDefined(this.boundary)}"
          strategy="${ifDefined(this.strategy)}"
          placement="${this.placement}"
          @closebyescape="${() => {
            this.displayPopover = false;
          }}"
          @closebyoutsideclick="${() => {
            this.displayPopover = false;
          }}"
          z-index="${ifDefined(this.popoverZIndex)}"
          exportparts="popover-content"
        >
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Select;
