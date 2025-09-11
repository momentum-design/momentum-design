import type { CSSResult, PropertyValues, TemplateResult } from 'lit';
import { html, nothing } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import { KEYS } from '../../utils/keys';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
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
import { AutoFocusOnMountMixin } from '../../utils/mixins/AutoFocusOnMountMixin';

import {
  compareOptionWithValue,
  getAllValidOptions,
  getVisibleOptions,
  getFirstSelectedOption,
  castBooleanToString,
} from './combobox.utils';
import { AUTOCOMPLETE_LIST, ICON_NAME, LISTBOX_ID, TRIGGER_ID } from './combobox.constants';
import styles from './combobox.styles';
import type { Placement } from './combobox.types';
import { ComboboxEventManager } from './combobox.events';

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
  extends AutoFocusOnMountMixin(FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)))
  implements AssociatedFormControl
{
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
  @queryAssignedElements({ selector: SELECTLISTBOX_TAG_NAME }) slottedListboxes!: Array<HTMLElement>;

  /** @internal */
  @query(`[role="${ROLE.COMBOBOX}"]`) private visualCombobox!: HTMLInputElement;

  /** @internal */
  @state() private isOpen = false;

  /** @internal */
  @state() private lastSelectedOptionIndex = 0;

  /** @internal */
  @state() private selectedOption: {
    value?: string;
    label?: string;
  } = {};

  /** @internal */
  @state() private filteredValue = '';

  /** @internal */
  private initialSelectedOption: Option | null = null;

  override connectedCallback(): void {
    super.connectedCallback();
    this.updateComplete
      .then(() => {
        if (this.inputElement) {
          this.setInputValidity();
          this.internals.setFormValue(this.inputElement.value);
        }
      })
      .catch(error => {
        if (this.onerror) {
          this.onerror(error);
        }
      });
  }

  /**
   * Modifies the listbox wrapper to ensure it has the correct attributes
   * and IDs for accessibility.
   *
   * Once [ariaOwnsElements](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaOwnsElements) is supported in browsers,
   * this an be removed and mdc-option can be used directly in the combobox component with a listbox in a different
   * shadow root and aria-owns attribute to connect them.
   */
  private modifyListBoxWrapper() {
    const slottedListBox = this.slottedListboxes[0];
    if (!slottedListBox) {
      return;
    }
    slottedListBox.setAttribute('id', LISTBOX_ID);
    slottedListBox.setAttribute('aria-label', this.dataAriaLabel || '');
    slottedListBox.setAttribute('aria-labelledby', TRIGGER_ID);
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

  private setSelectedValue(option: Option | null): void {
    const newValue = option?.getAttribute('value') || '';
    const newLabel = option?.getAttribute('label') || '';
    this.selectedOption = {
      ...this.selectedOption,
      value: newValue,
      label: newLabel,
    };
    this.value = newValue;
    this.filteredValue = newLabel;
    this.internals.setFormValue(this.value);
    this.updateHiddenOptions();

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
    this.selectedOption.value = '';
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
        .catch(error => {
          if (this.onerror) {
            this.onerror(error);
          }
        });
    }
  }

  protected override async firstUpdated(_changedProperties: PropertyValues) {
    await this.updateComplete;
    this.modifyListBoxWrapper();

    // set the element to auto focus if autoFocusOnMount is set to true
    // before running the super method, so that the AutoFocusOnMountMixin can use it
    // to focus the correct element
    if (this.inputElement && this.autoFocusOnMount) {
      this.elementToAutoFocus = this.inputElement;
    }
    super.firstUpdated(_changedProperties);

    const slottedListBoxes = this.slottedListboxes;
    const firstSelectedOption = getFirstSelectedOption(slottedListBoxes);
    if (firstSelectedOption) {
      firstSelectedOption.removeAttribute('selected');
      this.initialSelectedOption = firstSelectedOption;
      this.setSelectedValue(firstSelectedOption);
    } else if (this.value) {
      const validOption = getAllValidOptions(slottedListBoxes).find(option => option.value === this.value);
      this.setSelectedValue(validOption!);
    } else if (this.placeholder) {
      this.setInputValidity();
    } else {
      this.setSelectedValue(null);
    }
    getAllValidOptions(slottedListBoxes).forEach(option => {
      option.setAttribute('tabindex', '-1');
    });
  }

  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('disabled') || changedProperties.has('readonly')) {
      if (this.disabled || this.readonly) {
        // If the combobox is disabled or readonly,
        // we close the popover if it is open.
        this.isOpen = false;
      }
    }

    if (changedProperties.has('dataAriaLabel')) {
      this.modifyListBoxWrapper();
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
    if (!this.selectedOption.value && this.required) {
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
    if (this.selectedOption?.value !== optionToResetTo?.value) {
      this.setSelectedValue(optionToResetTo);
    }
    /**
     *  else if (optionToResetTo === null) {
      this.resetSelectedValue();
      this.visualCombobox.value = '';
      this.setInputValidity();
      this.requestUpdate();
    }
     */
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    const optionToRestoreTo = getAllValidOptions(this.slottedListboxes).find(
      option => option.value === state || option.label === state,
    );
    if (this.selectedOption?.value !== optionToRestoreTo?.value) {
      this.setSelectedValue(optionToRestoreTo || null);
    }
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
    getAllValidOptions(this.slottedListboxes)
      .filter(option => option.hasAttribute('data-focused'))
      .forEach(option => this.updateFocus(option, false));
  }

  /**
   * Updates the visual focus state of a specific option in the dropdown list based on 'data-focused' attribute.
   * @param option - The option element to update focus state for.
   * @param value - The new focus state to set (true for focused, false for unfocused).
   */
  private updateFocus(option: Option, value: boolean): void {
    if (option === undefined) return;
    if (value) {
      option.setAttribute('data-focused', '');
    } else {
      option.removeAttribute('data-focused');
    }
    option.setAttribute('aria-selected', value.toString());
  }

  private handleBlurChange(): void {
    this.closePopover();
    if (this.filteredValue === this.selectedOption.label) return;

    const options = getVisibleOptions(this.slottedListboxes, this.filteredValue);
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));

    if (getLastFocusedOptionIndex !== -1) {
      this.setSelectedValue(options[getLastFocusedOptionIndex]);
      return;
    }

    if (
      getLastFocusedOptionIndex === -1 ||
      !this.selectedOption.label ||
      this.selectedOption.label !== this.filteredValue
    ) {
      if (this.filteredValue !== '' && this.invalidCustomValueText) {
        this.helpText = this.invalidCustomValueText;
        this.helpTextType = VALIDATION.ERROR;
      }
    }
    this.setInputValidity();
  }

  private handleInputKeydown(event: KeyboardEvent): void {
    const options = getVisibleOptions(this.slottedListboxes, this.filteredValue);
    const getLastFocusedOptionIndex = options.findIndex(option => option.hasAttribute('data-focused'));
    switch (event.key) {
      case KEYS.ARROW_DOWN: {
        this.openPopover();
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === options.length - 1) {
          this.lastSelectedOptionIndex = 0;
        } else {
          this.lastSelectedOptionIndex =
            getLastFocusedOptionIndex + 1 === options.length
              ? getLastFocusedOptionIndex
              : getLastFocusedOptionIndex + 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          this.updateFocus(options[getLastFocusedOptionIndex], false);
        }
        this.updateFocus(options[this.lastSelectedOptionIndex], true);
        event.preventDefault();
        break;
      }
      case KEYS.ARROW_UP: {
        this.openPopover();
        if (getLastFocusedOptionIndex === -1 || getLastFocusedOptionIndex === 0) {
          this.lastSelectedOptionIndex = options.length - 1;
        } else {
          this.lastSelectedOptionIndex =
            getLastFocusedOptionIndex <= 0 ? options.length - 1 : getLastFocusedOptionIndex - 1;
        }
        if (getLastFocusedOptionIndex !== -1) {
          this.updateFocus(options[getLastFocusedOptionIndex], false);
        }
        this.updateFocus(options[this.lastSelectedOptionIndex], true);
        event.preventDefault();
        break;
      }
      case KEYS.ENTER: {
        if (getLastFocusedOptionIndex === -1) return;
        this.setSelectedValue(options[getLastFocusedOptionIndex]);
        if (this.isOpen === true) {
          this.closePopover();
        }
        break;
      }
      case KEYS.ESCAPE: {
        if (getLastFocusedOptionIndex !== -1) {
          this.updateFocus(options[getLastFocusedOptionIndex], false);
        }
        if (options.length && this.shouldDisplayPopover(options.length)) {
          this.closePopover();
        } else {
          this.setSelectedValue(null);
          // force clear the actual DOM input property
          const input = event.target as HTMLInputElement;
          input.value = '';
        }
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
   */
  private updateHiddenOptions(): void {
    const options = getAllValidOptions(this.slottedListboxes);
    options.forEach(option => {
      if (!compareOptionWithValue(option, this.filteredValue)) {
        option.setAttribute('data-hidden', '');
      } else {
        option.removeAttribute('data-hidden');
      }
    });
  }

  /**
   * Updates the hidden state of option groups label heading based on the current filtered value.
   * If an option group does not have any visible options, it is hidden (including the divider at the end of option group).
   * Otherwise, it is made visible.
   */
  private updateHiddenOptionGroups(): void {
    const optionGroups = Array.from(this.slottedListboxes[0]?.querySelectorAll(OPTIONGROUP_TAG_NAME) || []);
    if (!optionGroups.length) return;
    optionGroups.forEach(optionGroup => {
      const optionGroupChildren = Array.from(optionGroup.children)?.filter(
        option => !option.hasAttribute('data-hidden'),
      );
      if (optionGroupChildren.length === 0) {
        optionGroup.setAttribute('data-hidden', '');
      } else {
        optionGroup.removeAttribute('data-hidden');
      }
    });
    const visibleOptionGroups = optionGroups.filter(optionGroup => !optionGroup.hasAttribute('data-hidden'));
    const dividers = Array.from(this.slottedListboxes[0]?.querySelectorAll(DIVIDER_TAG_NAME) || []);
    if (visibleOptionGroups.length <= 1) {
      dividers.forEach(divider => divider.setAttribute('data-hidden', ''));
    } else {
      dividers.forEach(divider => divider.removeAttribute('data-hidden'));
    }
  }

  private handleInputChange(event: Event): void {
    this.filteredValue = (event.target as HTMLInputElement).value;
    this.resetSelectedValue();
    this.resetFocusedOption();
    this.updateHiddenOptions();
    this.updateHiddenOptionGroups();
    if (this.isOpen === false) {
      this.openPopover();
    }
  }

  private handleOptionsClick(event: MouseEvent): void {
    const option = event.target as Option;
    if (option && option.tagName === OPTION_TAG_NAME.toUpperCase() && !option.hasAttribute('disabled')) {
      this.setSelectedValue(option);
      this.closePopover();
    }
  }

  private shouldDisplayPopover(optionsLength: number): boolean {
    if (this.disabled || this.readonly) {
      return false;
    }
    if (!this.slottedListboxes[0]) {
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
        .value="${live(this.selectedOption?.value ?? '')}"
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
        .value="${this.selectedOption?.label ?? ''}"
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
        aria-controls="${LISTBOX_ID}"
        aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
        aria-disabled="${castBooleanToString(this.disabled)}"
        aria-expanded="${castBooleanToString(this.isOpen)}"
        aria-haspopup="${ROLE.LISTBOX}"
        aria-invalid="${castBooleanToString(this.helpTextType === VALIDATION.ERROR)}"
        aria-label="${this.dataAriaLabel ?? ''}"
        aria-labelledby="${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
        aria-readonly="${castBooleanToString(this.readonly)}"
        aria-required="${castBooleanToString(this.required)}"
      />
    `;
  }

  private renderNoResultsText(optionsLength: number): TemplateResult | typeof nothing {
    return this.slottedListboxes[0] && optionsLength === 0 && this.noResultText
      ? html`<mdc-listitem part="no-result-text" tabindex="-1" role="" label="${this.noResultText}"></mdc-listitem>`
      : nothing;
  }

  public override render() {
    const options = getVisibleOptions(this.slottedListboxes, this.filteredValue);
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
          aria-expanded="${castBooleanToString(this.isOpen)}"
          aria-controls="${LISTBOX_ID}"
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
          <slot @mousedown="${this.handleOptionsClick}"></slot>
        </mdc-popover>
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...Input.styles, ...styles];
}

export default Combobox;
