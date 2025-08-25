import type { PropertyValues } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';

import { KEYS } from '../../utils/keys';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import type Option from '../option/option.component';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { POPOVER_PLACEMENT, DEFAULTS as POPOVER_DEFAULTS } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { ARROW_ICON, LISTBOX_ID, TRIGGER_ID } from './select.constants';
import styles from './select.styles';
import type { Placement } from './select.types';

/**
 * The mdc-select component is a dropdown selection control that allows users to pick an option from a predefined list.
 * It is designed to work with `mdc-option` for individual options and `mdc-optgroup` for grouping related options.
 *
 * Every mdc-option should have a `value` attribute set to ensure proper form submission.
 *
 * To set a default option, use the `selected` attribute on the `mdc-option` element.
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
 * @cssproperty --mdc-select-background-color - The background color of the combobox of select.
 * @cssproperty --mdc-select-background-color-hover - The background color of the combobox of select when hovered.
 * @cssproperty --mdc-select-background-color-active - The background color of the combobox of select when active.
 * @cssproperty --mdc-select-background-color-disabled - The background color of the combobox of select when disabled.
 * @cssproperty --mdc-select-text-color - The text color of the select.
 * @cssproperty --mdc-select-text-color-selected - The text color of the selected option in the select.
 * @cssproperty --mdc-select-text-color-disabled - The text color of the select when disabled.
 * @cssproperty --mdc-select-border-color - The border color of the select.
 * @cssproperty --mdc-select-border-color-disabled - The border color of the select when disabled.
 * @cssproperty --mdc-select-border-color-success - The border color of the select when in success state.
 * @cssproperty --mdc-select-border-color-warning - The border color of the select when in warning state.
 * @cssproperty --mdc-select-border-color-error - The border color of the select when in error state.
 * @cssproperty --mdc-select-width - The width of the select.
 * @cssproperty --mdc-select-listbox-height - The height of the listbox inside the select.
 * @cssproperty --mdc-select-listbox-width - The width of the listbox inside the select (default: `--mdc-select-width`).
 */
class Select extends FormInternalsMixin(DataAriaLabelMixin(FormfieldWrapper)) implements AssociatedFormControl {
  /**
   * The placeholder text which will be shown on the text if provided.
   */
  @property({ type: String }) placeholder?: string;

  /**
   * readonly attribute of the select field. If true, the select is read-only.
   * @default false
   */
  @property({ type: Boolean }) readonly = false;

  /**
   * The placeholder text which will be shown on the text if provided.
   */
  @property({ type: String, reflect: true }) placement: Placement = POPOVER_PLACEMENT.BOTTOM_START;

  /**
   * Indicates whether the select is soft disabled.
   * When set to `true`, the select appears visually disabled but still allows
   * focus.
   *
   * @default undefined
   */
  @property({ type: Boolean, attribute: 'soft-disabled', reflect: true })
  softDisabled?: boolean;

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
  strategy: 'absolute' | 'fixed' = POPOVER_DEFAULTS.STRATEGY;

  /**
   * The z-index of the popover within Select.
   *
   * Override this to make sure this stays on top of other components.
   * @default 1000
   */
  @property({ type: Number, reflect: true, attribute: 'popover-z-index' })
  popoverZIndex: number = POPOVER_DEFAULTS.Z_INDEX;

  /**
   * ID of the element where the backdrop will be appended to.
   * This is useful to ensure that the backdrop is appended to the correct element in the DOM.
   * If not set, the backdrop will be appended to the parent element of the select.
   */
  @property({ type: String, reflect: true, attribute: 'backdrop-append-to' })
  backdropAppendTo?: string;

  /** @internal */
  @queryAssignedElements({ selector: 'mdc-selectlistbox' }) slottedListboxes!: Array<HTMLElement>;

  /** @internal */
  @query(`[id="${TRIGGER_ID}"]`) private visualCombobox!: HTMLDivElement;

  /** @internal */
  @state() selectedOption?: Option | null;

  /** @internal */
  @state() displayPopover = false;

  /** @internal */
  private initialSelectedOption: Option | null = null;

  private getAllValidOptions(): Array<Option> {
    return Array.from(this.slottedListboxes[0]?.querySelectorAll(`${OPTION_TAG_NAME}:not([disabled])`) || []);
  }

  private getFirstValidOption(): Option | null {
    return this.slottedListboxes[0]?.querySelector(`${OPTION_TAG_NAME}:not([disabled])`);
  }

  private getLastValidOption(): Option | null {
    const options = this.getAllValidOptions();
    return options.length > 0 ? options[options.length - 1] : null;
  }

  private getFirstSelectedOption(): Option | null {
    return this.slottedListboxes[0]?.querySelector(`${OPTION_TAG_NAME}[selected]:not([disabled])`);
  }

  /**
   * Handles the first updated lifecycle event.
   * If an option is selected, use that as the value.
   * If not, use the placeholder if it exists, otherwise use the first option.
   */
  public override async firstUpdated() {
    await this.updateComplete;
    this.modifyListBoxWrapper();

    const firstSelectedOption = this.getFirstSelectedOption();

    if (firstSelectedOption) {
      this.initialSelectedOption = firstSelectedOption;
      // do not fire events when setting the selected value
      // which is already selected in the DOM on first update
      this.setSelectedOption(firstSelectedOption);
    } else if (!this.placeholder) {
      const firstValidOption = this.getFirstValidOption();
      // We will show the first option as selected & fire
      // and event since the selected option changed
      this.setSelectedOption(firstValidOption);
      this.fireEvents();
    } else if (this.placeholder) {
      // If there is no default selected option
      // then we call the native validity
      this.setInputValidity();
    }
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

    if (changedProperties.has('dataAriaLabel')) {
      this.modifyListBoxWrapper();
    }
  }

  /**
   * Modifies the listbox wrapper to ensure it has the correct attributes
   * and IDs for accessibility.
   *
   * Once [ariaOwnsElements](https://developer.mozilla.org/en-US/docs/Web/API/ElementInternals/ariaOwnsElements) is supported in browsers,
   * this an be removed and mdc-option can be used directly in the select component with a listbox in a different
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
    // set the attribute 'selected' on the option in HTML and remove it from others
    this.updateSelectedInChildOptions(option);
    // update the tabindex for all options
    this.updateTabIndexForAllOptions(option);

    // set the selected option in the component state
    this.selectedOption = option;

    // update all form related values
    this.value = this.selectedOption?.value ?? '';
    this.internals.setFormValue(this.value);
    this.inputElement?.setAttribute('value', this.value);

    this.setInputValidity();
  }

  /**
   * Updates the tabindex of all options.
   * Sets the tabindex of the selected option to '0' and others to '-1'.
   *
   * @param option - The option which tabIndex should be set to 0.
   */
  private updateTabIndexForAllOptions(option?: Option | null): void {
    const options = this.getAllValidOptions();
    const optionToGetTabIndex0 = option || options[0];

    options.forEach(option => {
      option.setAttribute('tabindex', option === optionToGetTabIndex0 ? '0' : '-1');
    });
  }

  /**
   * Sets selected attribute on the selected option and removes it from all options
   * @param selectedOption - The option which gets selected
   */
  private updateSelectedInChildOptions(selectedOption: Option | null): void {
    selectedOption?.setAttribute('selected', 'true');
    const options = this.getAllValidOptions();
    options.forEach(option => {
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
    const optionToRestoreTo = this.getAllValidOptions().find(
      option => option.value === state || option.label === state,
    );
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

  /**
   * Handles the keydown event on the select element when the popover is closed.
   * The options are as follows:
   * - ARROW_DOWN, ARROW_UP, SPACE: Opens the popover and prevents the default scrolling behavior.
   * - ENTER: Opens the popover, prevents default scrolling, and submits the form if the popover is closed.
   * - HOME: Opens the popover and sets focus and tabindex on the first option.
   * - END: Opens the popover and sets focus and tabindex on the last option.
   * @param event - The keyboard event.
   */
  private handleKeydownCombobox(event: KeyboardEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) {
      return;
    }
    switch (event.key) {
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
        this.displayPopover = true;
        // Prevent the default browser behavior of scrolling down
        event.preventDefault();
        event.stopPropagation();
        break;
      case KEYS.ENTER:
      case KEYS.SPACE:
        this.displayPopover = true;
        // Prevent the default browser behavior of scrolling down
        event.preventDefault();
        event.stopPropagation();
        break;
      case KEYS.HOME: {
        this.displayPopover = true;
        const firstOption = this.getFirstValidOption();
        if (firstOption) {
          firstOption?.focus();
          this.updateTabIndexForAllOptions(firstOption);
        }
        event.preventDefault();
        break;
      }
      case KEYS.END: {
        this.displayPopover = true;
        const lastOption = this.getLastValidOption();
        if (lastOption) {
          lastOption.focus();
          this.updateTabIndexForAllOptions(lastOption);
        }
        event.preventDefault();
        break;
      }
      default:
        break;
    }
  }

  /**
   * Handles the keydown event on the select element when the popover is open.
   * The options are as follows:
   * - HOME: Sets focus and tabindex on the first option.
   * - END: Sets focus and tabindex on the last option.
   * - ARROW_DOWN, ARROW_UP, PAGE_DOWN, PAGE_UP: Handles navigation between options.
   * @param event - The keyboard event.
   */
  private handlePopoverKeydown(event: KeyboardEvent): void {
    let optionToFocus: Option | null = null;
    switch (event.key) {
      case KEYS.HOME: {
        optionToFocus = this.getFirstValidOption();
        break;
      }
      case KEYS.END: {
        optionToFocus = this.getLastValidOption();
        break;
      }
      case KEYS.ARROW_DOWN: {
        const options = this.getAllValidOptions();
        const currentIndex = options.findIndex(option => option === event.target);
        const newIndex = Math.min(currentIndex + 1, options.length - 1);
        optionToFocus = options[newIndex];
        break;
      }
      case KEYS.ARROW_UP: {
        const options = this.getAllValidOptions();
        const currentIndex = options.findIndex(option => option === event.target);
        const newIndex = Math.max(currentIndex - 1, 0);
        optionToFocus = options[newIndex];
        break;
      }
      case KEYS.PAGE_DOWN: {
        const options = this.getAllValidOptions();
        const currentIndex = options.findIndex(option => option === event.target);
        const newIndex = Math.min(currentIndex + 10, options.length - 1);
        optionToFocus = options[newIndex];
        break;
      }
      case KEYS.PAGE_UP: {
        const options = this.getAllValidOptions();
        const currentIndex = options.findIndex(option => option === event.target);
        const newIndex = Math.max(currentIndex - 10, 0);
        optionToFocus = options[newIndex];
        break;
      }
      default:
        break;
    }

    if (optionToFocus) {
      this.focusAndUpdateTabIndexes(optionToFocus);
      event.preventDefault();
      event.stopPropagation();
    }
  }

  /**
   * Focuses the given option and updates the tabindex for all options.
   * @param option - The option to focus.
   * @internal
   */
  private focusAndUpdateTabIndexes(option: Option | null): void {
    if (option) {
      option.focus();
      this.updateTabIndexForAllOptions(option);
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

  /**
   * Updates the state of the select component.
   * This public method should be fired when the selected on the option components is updated from the outside.
   * It ensures that the selected attribute is set correctly on the options
   * and that the aria-selected attribute is updated accordingly.
   */
  public updateState(): void {
    const newSelectedOption = this.getFirstSelectedOption();

    if (!this.inputElement) {
      return;
    }

    if (!newSelectedOption) {
      this.setSelectedOption(this.placeholder ? null : this.getFirstValidOption());
    } else if (this.selectedOption?.value !== newSelectedOption.value) {
      this.setSelectedOption(newSelectedOption);
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
          <div part="icon-container">
            <mdc-icon
              size="1"
              length-unit="rem"
              name="${this.displayPopover ? ARROW_ICON.ARROW_UP : ARROW_ICON.ARROW_DOWN}"
            ></mdc-icon>
          </div>
        </div>
        <input
          id="${this.inputId}"
          part="native-input"
          name="${this.name}"
          type="text"
          ?autofocus="${this.autofocus}"
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
          trigger="manual"
          triggerid="${TRIGGER_ID}"
          @keydown="${this.handlePopoverKeydown}"
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
