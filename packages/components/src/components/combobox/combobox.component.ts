import type { CSSResult, PropertyValues, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import { ElementStore } from '../../utils/controllers/ElementStore';
import { KEYS } from '../../utils/keys';
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { CaptureDestroyEventForChildElement } from '../../utils/mixins/lifecycle/CaptureDestroyEventForChildElement';
import { LIFE_CYCLE_EVENTS } from '../../utils/mixins/lifecycle/lifecycle.contants';
import { ROLE } from '../../utils/roles';
import { TAG_NAME as DIVIDER_TAG_NAME } from '../divider/divider.constants';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import Input from '../input/input.component';
import { AUTO_COMPLETE } from '../input/input.constants';
import { TAG_NAME as OPTIONGROUP_TAG_NAME } from '../optgroup/optgroup.constants';
import type Option from '../option/option.component';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { DEFAULTS as POPOVER_DEFAULTS, POPOVER_PLACEMENT, TRIGGER } from '../popover/popover.constants';
import type { PopoverStrategy } from '../popover/popover.types';
import { TAG_NAME as SELECTLISTBOX_TAG_NAME } from '../selectlistbox/selectlistbox.constants';

import { AUTOCOMPLETE_LIST, ICON_NAME, TRIGGER_ID } from './combobox.constants';
import { ComboboxEventManager } from './combobox.events';
import styles from './combobox.styles';
import type { Placement } from './combobox.types';

/**
 * The Combobox component is a text-based dropdown control that allows users to select an option from a predefined list.
 * Users can type text to filter the options and select their desired choice.
 *
 * When the user starts typing, the filter uses a "starts with" search and displays options based on the text entered by the user.
 * If the user entered text that doesn't match with any of the options, then the text in the `no-result-text` attribute will be displayed.
 *
 * If there is no text in the `no-result-text` attribute then nothing will be shown.
 *
 * Combobox is designed to work with `mdc-option` for individual options and `mdc-optgroup` for grouping related options.
 * The component ensures accessibility and usability while handling various use cases, including long text truncation with tooltip support.
 *
 * Every mdc-option should have a `value` attribute set to ensure proper form submission.
 *
 * To set a default option, use the `selected` attribute on the `mdc-option` element.
 *
 * **Note:** Make sure to add `mdc-selectlistbox` as a child of `mdc-combobox` and wrap options/optgroup in it to ensure proper accessibility functionality. Read more about it in SelectListBox documentation.
 *
 * If you need to use `mdc-tooltip` with any options, make sure to place the tooltip component outside the `mdc-selectlistbox` element. Read more about it in Options documentation.
 *
 * To understand more about combobox and its patterns, refer to this [WCAG example](https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-autocomplete-list/).
 *
 * @dependency mdc-buttonsimple
 * @dependency mdc-icon
 * @dependency mdc-input
 * @dependency mdc-listitem
 * @dependency mdc-popover
 *
 * @tagname mdc-combobox
 *
 * @slot default - This is a default/unnamed slot for Selectlistbox including options and/or option group.
 *
 * @event click - (React: onClick) This event is dispatched when the combobox is clicked.
 * @event change - (React: onChange) This event is dispatched when the combobox is changed.
 * @event input - (React: onInput) This event is dispatched when the combobox is changed.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the combobox.
 * @event focus - (React: onFocus) This event is dispatched when the combobox receives focus.
 *
 * @cssproperty --mdc-combobox-border-color - The border color of the combobox
 * @cssproperty --mdc-combobox-icon-color - The icon color of the combobox
 * @cssproperty --mdc-combobox-listbox-height - The height of the listbox inside the combobox
 * @cssproperty --mdc-combobox-listbox-width - The width of the listbox inside the combobox
 * @cssproperty --mdc-combobox-width - The width of the combobox
 * @cssproperty --mdc-combobox-hover-background-color - The background color of the combobox when hovered
 * @cssproperty --mdc-combobox-focused-background-color - The background color of the combobox when focused
 * @cssproperty --mdc-combobox-error-border-color - The border color of the combobox when in error state
 * @cssproperty --mdc-combobox-warning-border-color - The border color of the combobox when in warning state
 * @cssproperty --mdc-combobox-success-border-color - The border color of the combobox when in success state
 * @cssproperty --mdc-combobox-primary-border-color - The border color of the combobox when in primary state
 * @cssproperty --mdc-combobox-text-color-disabled - The text color of the combobox when disabled
 * @cssproperty --mdc-combobox-focused-border-color - The border color of the combobox when focused
 *
 * @csspart internal-native-input - The internal native input element of the combobox.
 * @csspart mdc-input - The input element of the combobox.
 * @csspart no-result-text - The no result text element of the combobox.
 * @csspart combobox__base - The base container element of the combobox.
 * @csspart combobox__button - The button element of the combobox.
 * @csspart combobox__button-icon - The icon element of the button of the combobox.
 */
class Combobox
  extends CaptureDestroyEventForChildElement(
    AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper))),
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
   * readonly attribute of the combobox field. If true, the combobox is read-only.
   * @default false
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The placement of the popover within Combobox.
   * This defines the position of the popover relative to the combobox input field.
   *
   * Possible values:
   *  - 'top-start'
   *  - 'bottom-start'
   * @default 'bottom-start'
   */
  @property({ type: String, reflect: true }) placement: Placement = POPOVER_PLACEMENT.BOTTOM_START;

  /**
   * Text to be displayed when no results are found.
   * @default undefined
   */
  @property({ type: String, attribute: 'no-result-text', reflect: true }) noResultText?: string;

  /**
   * Text to be displayed when no a custom values are selected, without selecting any option from the dropdown
   * @default undefined
   */
  @property({ type: String, attribute: 'invalid-custom-value-text', reflect: true }) invalidCustomValueText?: string;

  /**
   * This describes the clipping element(s) or area relative to which the overflow of the popover will be checked.
   * The default is 'clippingAncestors', which are the overflow ancestors that can cause the element to be clipped.
   * Possible values:
   *  - 'clippingAncestors'
   *  - any css selector
   *
   * @default 'clippingAncestors'
   *
   * @see [Floating UI - boundary](https://floating-ui.com/docs/detectOverflow#boundary)
   */
  @property({ type: String, reflect: true })
  boundary: 'clippingAncestors' | string = POPOVER_DEFAULTS.BOUNDARY;

  /**
   * The strategy of the popover within Combobox.
   * This determines how the popover is positioned in the DOM.
   *
   * In case `boundary` is set to something other than 'clippingAncestors',
   * it might be necessary to set the `strategy` to 'fixed' to ensure that the popover
   * is not getting clipped by scrollable containers enclosing the combobox.
   *
   * @default absolute
   * @see [Floating UI - strategy](https://floating-ui.com/docs/computePosition#strategy)
   */
  @property({ type: String, reflect: true })
  strategy: PopoverStrategy = POPOVER_DEFAULTS.STRATEGY;

  /**
   * The z-index of the popover within Combobox.
   *
   * Override this to make sure this stays on top of other components.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'popover-z-index' })
  popoverZIndex: number = POPOVER_DEFAULTS.Z_INDEX;

  /**
   * ID of the element where the backdrop will be appended to.
   * This is useful to ensure that the backdrop is appended to the correct element in the DOM.
   * If not set, the backdrop will be appended to the parent element of the combobox.
   */
  @property({ type: String, reflect: true, attribute: 'backdrop-append-to' })
  backdropAppendTo?: string;

  /** @internal */
  @query(`[role="${ROLE.COMBOBOX}"]`) private visualCombobox!: HTMLInputElement;

  /** @internal */
  @query(`[part="combobox__button"]`) private dropDownButton!: HTMLElement;

  /** @internal */
  @queryAssignedElements({ selector: SELECTLISTBOX_TAG_NAME }) slottedListboxes!: Array<HTMLElement>;

  /** @internal */
  @state() private isOpen = false;

  /** @internal */
  @state() private filteredValue = '';

  /** @internal */
  private initialSelectedOption: Option | null = null;

  /** @internal */
  get navItems(): Option[] {
    return this.itemsStore.items;
  }

  constructor() {
    super();

    this.addEventListener(LIFE_CYCLE_EVENTS.DESTROYED, this.handleDestroyEvent);
    // This must be initialized after the destroyed event listener
    // to keep the element in the itemStore in order to move the focus correctly
    this.itemsStore = new ElementStore<Option>(this, {
      isValidItem: this.isValidItem,
    });
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete
      .then(() => {
        if (this.inputElement) {
          this.setInputValidity();
          this.internals.setFormValue(this.inputElement.value);
        }
      })
      .catch(this.handleUpdateError);
  }

  private isValidItem(item: Element): boolean {
    return item.matches(`${OPTION_TAG_NAME}:not([disabled])`);
  }

  private openPopover(): void {
    this.isOpen = true;
  }

  private closePopover(): void {
    this.isOpen = false;
  }

  private toggleDropdown(): void {
    this.isOpen = !this.isOpen;
  }

  private compareOptionWithValue(option: Option, value: string): boolean {
    const optionValue = option.getAttribute('label') || '';
    return optionValue.toLowerCase().startsWith(value?.toLowerCase());
  }

  private getFirstSelectedOption(): Option | undefined {
    return this.navItems.find(el => el.hasAttribute('selected'));
  }

  private getVisibleOptions(internalValue: string): Option[] {
    return this.navItems.filter(option => this.compareOptionWithValue(option, internalValue));
  }

  private handleUpdateError = (error: any): void => {
    if (this.onerror) {
      this.onerror(error);
    }
  };

  /**
   * Update the focus when an item is removed.
   * If there is a next item, focus it. If not, focus the previous item.
   *
   * @internal
   */
  private handleDestroyEvent = (event: Event) => {
    const destroyedElement = event.target as HTMLElement;
    if (!this.isValidItem(destroyedElement) || destroyedElement.tabIndex !== 0) {
      return;
    }

    const destroyedItemIndex = this.navItems.findIndex(node => node === destroyedElement);
    if (destroyedItemIndex === -1) {
      return;
    }

    let newIndex = destroyedItemIndex + 1;
    if (newIndex >= this.navItems.length) {
      newIndex = destroyedItemIndex - 1;
    }
  };

  private setSelectedValue(option: Option | null): void {
    // this.value is the actual value of the component
    this.value = option?.getAttribute('value') || '';
    // this.filteredValue is the visible label of the component
    this.filteredValue = option?.getAttribute('label') || '';
    this.internals.setFormValue(this.value);
    this.updateHiddenOptions();
    this.updateSelectedOption(option!);

    this.setInputValidity();
    this.resetHelpText();

    ComboboxEventManager.onInputCombobox(this, option!);
    ComboboxEventManager.onChangeCombobox(this, option!);
  }

  /**
   * Resets the selected value to an empty string and clears the form value.
   * This method is called when there is a change on the input.
   */
  private resetSelectedValue(): void {
    this.value = '';
    this.internals.setFormValue(this.value);
    this.resetHelpText();
  }

  private resetHelpText(): void {
    if (this.invalidCustomValueText && this.helpText === this.invalidCustomValueText) {
      this.helpText = '';
      this.helpTextType = VALIDATION.DEFAULT;
    }
  }

  /**
   * This function is called when the attribute changes.
   * It updates the validity of the input field based on the input field's validity.
   *
   * @param name - attribute name
   * @param old - old value
   * @param value - new value
   */
  override attributeChangedCallback(name: string, old: string | null, value: string | null): void {
    super.attributeChangedCallback(name, old, value);

    if (name === 'validation-message') {
      this.updateComplete
        .then(() => {
          this.setInputValidity();
        })
        .catch(this.handleUpdateError);
    }
  }

  protected override async firstUpdated(_changedProperties: PropertyValues) {
    await this.updateComplete;

    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.inputElement && this.autoFocusOnMount) {
      this.elementToAutoFocus = this.inputElement;
    }
    super.firstUpdated(_changedProperties);

    const firstSelectedOption = this.getFirstSelectedOption();
    if (firstSelectedOption) {
      this.initialSelectedOption = firstSelectedOption;
      this.setSelectedValue(firstSelectedOption);
    } else if (this.value) {
      const validOption = this.navItems.find(option => option.value === this.value);
      this.setSelectedValue(validOption!);
    } else if (this.placeholder) {
      this.setInputValidity();
    }
    this.navItems.forEach(option => {
      option.setAttribute('tabindex', '-1');
    });
  }

  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('slottedListboxes') || changedProperties.has('isOpen')) {
      // Ensure the element exists and has the ariaControlsElements property
      if (this.visualCombobox && 'ariaControlsElements' in this.visualCombobox) {
        (this.visualCombobox as any).ariaControlsElements = this.slottedListboxes;
      }
      if (this.dropDownButton && 'ariaControlsElements' in this.dropDownButton) {
        (this.dropDownButton as any).ariaControlsElements = this.slottedListboxes;
      }
    }

    if (changedProperties.has('disabled') || changedProperties.has('readonly')) {
      if (this.disabled || this.readonly) {
        // If the combobox is disabled or readonly,
        // we close the popover if it is open.
        this.closePopover();
      }
    }
  }

  /**
   * Sets the validity of the input element based on the selected option.
   * If the selected option is not set and the combobox is required,
   * it sets a custom validation message.
   * If the selected option is set or the combobox is not required,
   * it clears the custom validation message.
   * This method is called to ensure that the combobox component behaves correctly
   * in form validation scenarios, especially when the combobox is required.
   * @internal
   */
  private setInputValidity() {
    if (!this.value && this.required) {
      if (this.validationMessage) {
        this.inputElement?.setCustomValidity(this.validationMessage);
      } else {
        this.inputElement?.setCustomValidity('');
      }
      this.setValidity();
    } else {
      this.internals.setValidity({});
    }
  }

  /**
   * Resets the combobox to its initially selected option.
   * @internal
   */
  formResetCallback(): void {
    const optionToResetTo = this.initialSelectedOption || null;
    // Restore the selected option
    this.setSelectedValue(optionToResetTo);
    // Reset the filtered text (typed value shown in input)
    this.filteredValue = optionToResetTo?.label ?? '';
    // Force revalidation after reset
    this.setInputValidity();
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    const optionToRestoreTo = this.navItems.find(option => option.value === state || option.label === state);
    this.setSelectedValue(optionToRestoreTo || null);
  }

  /**
   * When the native input is focused, visually highlight the dropdown options (the "visual combobox"),
   * so users can see which option is active, even though the actual DOM focus remains on the input box.
   * This ensures that after actions like form submission, users can still interact with the dropdown options
   * through visual cues, while keyboard focus stays on the input field.
   * @internal
   */
  private handleNativeInputFocus(): void {
    this.visualCombobox.focus();
  }

  /**
   * Resets the focused option in the dropdown list.
   * This method removes the 'data-focused' attribute from all options that currently have it,
   * effectively clearing any visual indication of focus within the dropdown.
   * It is typically called when the user navigates away from the dropdown or when the dropdown is closed,
   * ensuring that no option remains visually highlighted as focused.
   * @internal
   */
  private resetFocusedOption() {
    this.navItems
      .filter(option => option.hasAttribute('data-focused'))
      .forEach(option => this.updateOptionAttributes(option, false));
  }

  private updateSelectedOption(newOption: Option): void {
    this.navItems.forEach(option => {
      option.removeAttribute('selected');
    });
    newOption?.setAttribute('selected', '');
  }

  /**
   * Updates the visual focus state of a specific option in the dropdown list based on 'data-focused' attribute.
   * It also updates the 'aria-selected' attribute for a11y purposes.
   *
   * @param option - The option element to update focus state for.
   * @param value - The new focus state to set (true for focused, false for unfocused).
   */
  private updateOptionAttributes(option: Option, value: boolean): void {
    if (option === undefined) return;
    if (value) {
      option.setAttribute('data-focused', '');
    } else {
      option.removeAttribute('data-focused');
    }
    option.setAttribute('aria-selected', value.toString());
  }

  /**
   * Handles the blur event of the combobox.
   * This method is called when the combobox loses focus.
   * It checks if the combobox has a focused option and sets the selected value to that option and closes the popover.
   * If the combobox does not have a focused option and the filtered value is not empty,
   * it sets the help text to the invalid custom value text and closes the popover.
   * It also updates the input validity.
   */
  private handleBlurChange(): void {
    const options = this.getVisibleOptions(this.filteredValue);
    const activeIndex = options.findIndex(option => option.hasAttribute('data-focused'));

    if (activeIndex !== -1) {
      this.setSelectedValue(options[activeIndex]);
      this.closePopover();
      return;
    }

    if (
      activeIndex === -1 &&
      this.filteredValue !== '' &&
      this.invalidCustomValueText &&
      !this.getFirstSelectedOption()
    ) {
      this.helpText = this.invalidCustomValueText;
      this.helpTextType = VALIDATION.ERROR;
    }

    // In common cases (when no selection made and focus moved away), close the popover.
    this.setInputValidity();
  }

  private updateFocusAndScrollIntoView(options: Option[], oldIndex: number, newIndex: number): void {
    this.updateOptionAttributes(options[oldIndex], false);
    this.updateOptionAttributes(options[newIndex], true);
    options[newIndex]?.scrollIntoView({ block: 'nearest' });
  }

  private handleInputKeydown(event: KeyboardEvent): void {
    const options = this.getVisibleOptions(this.filteredValue);
    const activeIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    switch (event.key) {
      case KEYS.ARROW_DOWN: {
        this.openPopover();
        const newIndex = options.length - 1 === activeIndex ? 0 : activeIndex + 1;
        this.updateFocusAndScrollIntoView(options, activeIndex, newIndex);
        event.preventDefault();
        break;
      }
      case KEYS.ARROW_UP: {
        this.openPopover();
        const newIndex = activeIndex === -1 || activeIndex === 0 ? options.length - 1 : activeIndex - 1;
        this.updateFocusAndScrollIntoView(options, activeIndex, newIndex);
        event.preventDefault();
        break;
      }
      case KEYS.ENTER: {
        if (activeIndex === -1) return;
        this.setSelectedValue(options[activeIndex]);
        if (this.isOpen === true) {
          this.closePopover();
        }
        break;
      }
      case KEYS.ESCAPE: {
        if (activeIndex !== -1) {
          this.updateOptionAttributes(options[activeIndex], false);
        }
        if (options.length && this.shouldDisplayPopover(options.length)) {
          this.closePopover();
        } else {
          this.resetSelectedValue();
          // clear the visible value
          this.filteredValue = '';
        }
        break;
      }
      case KEYS.TAB: {
        this.closePopover();
        break;
      }
      case KEYS.HOME:
      case KEYS.END: {
        this.resetFocusedOption();
        break;
      }
      default:
        break;
    }
  }

  /**
   * Updates the hidden state of options based on the current filtered value.
   * If an option does not match the current filtered value, it is hidden.
   * Otherwise, it is made visible.
   * Additionally, it updates the hidden state of option groups and dividers based on the current filtered value.
   */
  private updateHiddenOptions(): void {
    this.navItems.forEach(option => {
      if (!this.compareOptionWithValue(option, this.filteredValue)) {
        option.setAttribute('data-hidden', '');
        this.hideOptionGroupAndDivider(option);
      } else {
        option.removeAttribute('data-hidden');
        this.showOptionGroupAndDivider(option);
      }
    });
  }

  private hideOptionGroupAndDivider(option: Option): void {
    if (option.parentElement?.matches(OPTIONGROUP_TAG_NAME)) {
      const optionGroupChildren = Array.from(option.parentElement.children)?.filter(
        option => !option.hasAttribute('data-hidden'),
      );
      if (optionGroupChildren.length === 0) {
        option.parentElement.setAttribute('data-hidden', '');
        if (option.parentElement.nextElementSibling?.matches(DIVIDER_TAG_NAME)) {
          option.parentElement.nextElementSibling.setAttribute('data-hidden', '');
        }
      }
    }
  }

  private showOptionGroupAndDivider(option: Option): void {
    if (option.parentElement?.matches(OPTIONGROUP_TAG_NAME)) {
      const optionGroupChildren = Array.from(option.parentElement.children)?.filter(
        option => !option.hasAttribute('data-hidden'),
      );
      if (optionGroupChildren.length > 0) {
        option.parentElement.removeAttribute('data-hidden');
        if (option.parentElement.nextElementSibling?.matches(DIVIDER_TAG_NAME)) {
          option.parentElement.nextElementSibling.removeAttribute('data-hidden');
        }
      }
    }
  }

  private handleInputChange(event: Event): void {
    this.filteredValue = (event.target as HTMLInputElement).value;
    this.resetSelectedValue();
    this.resetFocusedOption();
    this.updateHiddenOptions();
    // remove the selected attribute on input change
    this.getFirstSelectedOption()?.removeAttribute('selected');
    if (this.isOpen === false) {
      this.openPopover();
    }
  }

  private handleOptionsClick(event: MouseEvent): void {
    // ensure we get the actual option element even if the click target is a child node
    const option = ((event.target as HTMLElement).closest(OPTION_TAG_NAME) as Option) ?? null;
    if (option && !option.hasAttribute('disabled')) {
      this.setSelectedValue(option);
      this.closePopover();
    }
  }

  private shouldDisplayPopover(optionsLength: number): boolean {
    if (this.disabled || this.readonly) {
      return false;
    }
    if (optionsLength) {
      return this.isOpen;
    }
    if (this.noResultText) {
      return true;
    }
    return false;
  }

  /**
   * Renders the native input element.
   * This input is hidden and is used for internal purposes only.
   * The value of the selected option is set as the value of this input.
   * @internal
   */
  private renderNativeInput(): TemplateResult {
    return html`
      <input
        id="${this.inputId}"
        name="${this.name}"
        type="text"
        .value="${live(this.value)}"
        aria-hidden="true"
        part="internal-native-input"
        tabindex="-1"
        ?required=${this.required}
        ?disabled=${this.disabled}
        ?readonly=${this.readonly}
        autocomplete="${AUTO_COMPLETE.OFF}"
        @focus=${this.handleNativeInputFocus}
        @invalid=${this.setInputValidity}
      />
    `;
  }

  /**
   * Renders the base input element with accessibility.
   * This input is displayed on the screen and is used for user interaction only.
   * The label of the selected option is set as the value of this input.
   * @internal
   */
  private renderBaseInput(): TemplateResult {
    return html`
      <input
        id="${this.id}"
        slot="input"
        ?disabled="${this.disabled}"
        .value="${live(this.filteredValue)}"
        autocomplete="${AUTO_COMPLETE.OFF}"
        class="input"
        part="mdc-input"
        placeholder="${ifDefined(this.placeholder)}"
        role="${ROLE.COMBOBOX}"
        ?readonly="${this.readonly}"
        ?required="${this.required}"
        @input=${this.handleInputChange}
        @keydown=${this.handleInputKeydown}
        @blur="${this.handleBlurChange}"
        aria-autocomplete="${AUTOCOMPLETE_LIST}"
        aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
        aria-disabled="${this.disabled ? 'true' : 'false'}"
        aria-expanded="${this.isOpen ? 'true' : 'false'}"
        aria-haspopup="${ROLE.LISTBOX}"
        aria-invalid="${this.helpTextType === VALIDATION.ERROR ? 'true' : 'false'}"
        aria-label="${this.dataAriaLabel ?? ''}"
        aria-labelledby="${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
        aria-readonly="${this.readonly ? 'true' : 'false'}"
        aria-required="${this.required ? 'true' : 'false'}"
      />
    `;
  }

  private renderNoResultsText(optionsLength: number): TemplateResult | typeof nothing {
    return optionsLength === 0 && this.noResultText
      ? html`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`
      : nothing;
  }

  public override render() {
    const options = this.getVisibleOptions(this.filteredValue);
    return html`
      ${this.renderLabel()}
      <div part="combobox__base" id="${TRIGGER_ID}">
        ${this.renderNativeInput()}
        <mdc-input
          @click="${() => this.toggleDropdown()}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          help-text-type="${this.helpTextType}"
        >
          ${this.renderBaseInput()}
        </mdc-input>
        <mdc-buttonsimple
          @click="${() => this.toggleDropdown()}"
          part="combobox__button"
          ?disabled="${this.disabled}"
          tabindex="-1"
          aria-expanded="${this.isOpen ? 'true' : 'false'}"
          aria-label="${this.dataAriaLabel ?? ''}"
        >
          <mdc-icon
            part="combobox__button-icon"
            name="${this.shouldDisplayPopover(options.length) ? ICON_NAME.ARROW_UP : ICON_NAME.ARROW_DOWN}"
            size="1"
            length-unit="rem"
          ></mdc-icon>
        </mdc-buttonsimple>
        <mdc-popover
          ?visible="${this.shouldDisplayPopover(options.length)}"
          @closebyescape="${() => {
            this.closePopover();
          }}"
          @closebyoutsideclick="${() => {
            this.closePopover();
          }}"
          backdrop
          backdrop-append-to="${ifDefined(this.backdropAppendTo)}"
          boundary="${ifDefined(this.boundary)}"
          disable-aria-expanded
          exportparts="popover-content"
          hide-on-escape
          hide-on-outside-click
          is-backdrop-invisible
          placement="${this.placement}"
          role=""
          size
          strategy="${ifDefined(this.strategy)}"
          trigger="${TRIGGER.MANUAL}"
          triggerid="${TRIGGER_ID}"
          z-index="${ifDefined(this.popoverZIndex)}"
        >
          ${this.renderNoResultsText(options.length)}
          <slot @click="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...Input.styles, ...styles];
}

export default Combobox;
