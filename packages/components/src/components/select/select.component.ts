import type { PropertyValues } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { ifDefined } from 'lit/directives/if-defined.js';
import { live } from 'lit/directives/live.js';

import { KEYS } from '../../utils/keys';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS, VALIDATION } from '../formfieldwrapper/formfieldwrapper.constants';
import type { IconNames } from '../icon/icon.types';
import { TAG_NAME as OPTION_GROUP_TAG_NAME } from '../optgroup/optgroup.constants';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

import { ARROW_ICON, LISTBOX_ID, TRIGGER_ID } from './select.constants';
import styles from './select.styles';
import type { ArrowIcon, Placement } from './select.types';

/**
 * The mdc-select component is a dropdown selection control that allows users to pick an option from a predefined list.
 * It is designed to work with `mdc-option` for individual options and `mdc-optgroup` for grouping related options.
 * The component ensures accessibility and usability while handling various use cases,
 * including long text truncation with tooltip support.
 *
 * To set a default option, use the `selected` attribute on the `mdc-option` element.
 *
 * **Note:** Make sure to add `mdc-selectlistbox` as a child of `mdc-select` and wrap options/optgroup in it to ensure proper accessibility functionality. Read more about it in SelectListBox documentation.
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-popover
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @tagname mdc-select
 *
 * @slot default - This is a default/unnamed slot for options and/or option group.
 *
 * @event click - (React: onClick) This event is dispatched when the select is clicked.
 * @event change - (React: onChange) This event is dispatched when the select is changed.
 * @event input - (React: onInput) This event is dispatched when the select is changed.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the select.
 * @event focus - (React: onFocus) This event is dispatched when the select receives focus.
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
   * height attribute of the select field. If set,
   * then a scroll bar will be visible when there more options than the adjusted height.
   * @default auto
   */
  @property({ type: String }) height = 'auto';

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
  @property({ type: Boolean, attribute: 'soft-disabled' }) softDisabled?: boolean;

  /** @internal */
  @queryAssignedElements({ selector: 'mdc-selectlistbox' }) slottedListboxes!: Array<HTMLElement>;

  /** @internal */
  @state() private baseIconName: ArrowIcon = ARROW_ICON.ARROW_DOWN;

  /** @internal */
  @state() selectedValueText?: string;

  /** @internal */
  @state() selectedIcon?: IconNames | null;

  /** @internal */
  @state() selectedValue = '';

  /** @internal */
  @state() displayPopover = false;

  /**
   * @internal
   * The native select element
   */
  @query('select') override inputElement!: HTMLInputElement;

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
   * A helper function which returns a flattened array of all valid options from within the slotted listbox.
   * It takes care of the edge cases where the option is either a direct child or a
   * child of an option group.
   */
  private getAllValidOptions() {
    const optionsList = Array.from(this.slottedListboxes[0]?.children || []);
    return (
      optionsList
        ?.map(option => {
          if (option.tagName.toLowerCase() === OPTION_TAG_NAME) {
            return option;
          }
          if (option.tagName.toLowerCase() === OPTION_GROUP_TAG_NAME) {
            return Array.from(option.children).filter(optgroup => optgroup.tagName.toLowerCase() === OPTION_TAG_NAME);
          }
          return [];
        })
        .flat() || []
    );
  }

  /**
   * Updates the tabindex and selected attribute of the options.
   * If selectedOption is provided, it will be set as the selected option.
   * Otherwise, it will set the first option as the selected option.
   * @param selectedOption - The option which should be selected.
   */
  private updateTabIndexForAllOptions(selectedOption?: EventTarget | null): void {
    let isTabIndexSet = false;
    this.getAllValidOptions().forEach(option => {
      if (option === selectedOption) {
        this.setSelectedValue(option);
        isTabIndexSet = true;
        option.setAttribute('selected', '');
        option.setAttribute('tabindex', '0');
      } else {
        option?.setAttribute('tabindex', '-1');
        option?.removeAttribute('selected');
      }
    });

    if (!isTabIndexSet) {
      // if no option is selected, set the first option as focused
      this.getAllValidOptions()[0]?.setAttribute('tabindex', '0');
    }
  }

  /**
   * A private method which is called when an option is clicked.
   * It is used to update the tabindex and selected attribute of the options.
   * @param event - The event which triggered this function.
   */
  private handleOptionsClick(event: MouseEvent): void {
    this.updateTabIndexForAllOptions(event.target);
  }

  /**
   * Sets the selected value based on the provided option element.
   * It retrieves the 'label' attribute of the option, if present,
   * otherwise it falls back to the option's text content.
   * @param option - The option element from which to set the selected value.
   */
  private setSelectedValue(option: Element): void {
    this.selectedValueText = option?.getAttribute('label') ?? option?.textContent ?? '';
    this.selectedIcon = option?.getAttribute('prefix-icon') as IconNames | null;
    this.selectedValue = option?.getAttribute('value') ?? option?.textContent ?? '';

    this.value = this.selectedValue;
    // Set form value
    this.internals.setFormValue(this.selectedValue);
    this.manageRequired();

    // dispatch a change event when a value is selected
    this.dispatchInput(this.selectedValue);
    this.dispatchChange(this.selectedValue);
  }

  /**
   * Manages the required state of the select.
   * If the select is required and no value is selected,
   * it sets a custom validity message based on the validationMessage property.
   * If the select is not required or a value is selected, it clears the custom validity.
   * This method is called to ensure that the select behaves correctly in forms.
   * @internal
   */
  private manageRequired() {
    if (!this.selectedValue && this.required) {
      if (this.validationMessage) {
        this.inputElement.setCustomValidity(this.validationMessage);
      } else {
        this.inputElement.setCustomValidity('');
      }
    }
    this.setValidity();
  }

  /**
   * @internal
   * Resets the select to its initial state.
   */
  formResetCallback(): void {
    this.selectedValue = '';
    this.selectedValueText = undefined;
    this.selectedIcon = null;
    this.internals.setFormValue(this.selectedValue);
    this.updateTabIndexForAllOptions();
    this.requestUpdate();
  }

  /** @internal */
  formStateRestoreCallback(state: string): void {
    this.selectedValue = state;
    this.selectedValueText = state;
  }

  private dispatchChange(value: string): void {
    if (!value) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent('change', {
        detail: { value },
        composed: true,
        bubbles: true,
      }),
    );
  }

  private dispatchInput(value: string): void {
    if (!value) {
      return;
    }
    this.dispatchEvent(
      new CustomEvent('input', {
        detail: { value },
        composed: true,
        bubbles: true,
      }),
    );
  }

  /**
   * Handles the keydown event on the select element when the popover is open.
   * The options are as follows:
   * - SPACE or ENTER: Selects the currently active option and closes the popover.
   * - HOME: Sets focus and tabindex on the first option.
   * - END: Sets focus and tabindex on the last option.
   * - ARROW_DOWN, ARROW_UP, PAGE_DOWN, PAGE_UP: Handles navigation between options.
   * @param event - The keyboard event.
   */
  private handlePopoverOnOpen(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.TAB: {
        const focusedOptionIndex = this.getAllValidOptions().findIndex(option => option === event.target);
        this.setFocusAndTabIndex(focusedOptionIndex);
        event.preventDefault();
        break;
      }
      case KEYS.SPACE:
        this.closePopover();
        event.preventDefault();
        break;
      case KEYS.ENTER:
        this.closePopover();
        event.preventDefault();
        // if the popover is closed, then we submit the form.
        this.form?.requestSubmit();
        break;
      case KEYS.HOME:
        this.setFocusAndTabIndex(0);
        event.preventDefault();
        break;
      case KEYS.END:
        this.setFocusAndTabIndex(this.getAllValidOptions().length - 1);
        event.preventDefault();
        break;
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
      case KEYS.PAGE_DOWN:
      case KEYS.PAGE_UP:
        this.handleOptionsNavigation(event);
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  private handleClickCombobox(event: MouseEvent): void {
    if (this.disabled || this.softDisabled || this.readonly) {
      return;
    }
    if (this.displayPopover) {
      this.closePopover();
    } else {
      this.openPopover();
    }
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
        this.openPopover();
        // Prevent the default browser behavior of scrolling down
        event.preventDefault();
        break;
      case KEYS.ENTER:
      case KEYS.SPACE:
        this.openPopover();
        // Prevent the default browser behavior of scrolling down
        event.preventDefault();
        event.stopPropagation();
        break;
      case KEYS.HOME:
        this.openPopover();
        this.setFocusAndTabIndex(0);
        event.preventDefault();
        break;
      case KEYS.END:
        this.openPopover();
        this.setFocusAndTabIndex(this.getAllValidOptions().length - 1);
        event.preventDefault();
        break;
      default:
        break;
    }
  }

  /**
   * Handles the navigation of options when the user presses
   * ArrowUp, ArrowDown, PageUp, or PageDown keys.
   * @param event - The keyboard event that triggered the navigation.
   */
  private handleOptionsNavigation(event: KeyboardEvent): void {
    const options = this.getAllValidOptions();
    const currentIndex = options.findIndex(option => option === event.target);
    const newIndex = this.getNewIndexBasedOnKey(event.key, currentIndex, options.length);
    if (newIndex !== -1) {
      this.setFocusAndTabIndex(newIndex);
      // Prevent the default browser behavior of scrolling down
      // when pressing ArrowUp, ArrowDown, PageUp, or PageDown keys
      event.preventDefault();
    }
  }

  /**
   * Calculates the new index based on the pressed navigation key.
   * Supports ArrowUp, ArrowDown, PageUp, and PageDown keys for navigating options.
   * - ArrowDown: Moves focus to the next option, if available.
   * - ArrowUp: Moves focus to the previous option, if available.
   * - PageDown: Moves focus 10 options down or to the last option.
   * - PageUp: Moves focus 10 options up or to the first option.
   *
   * @param key - The navigation key that was pressed.
   * @param currentIndex - The current index of the focused option.
   * @param optionsLength - The total number of options.
   * @returns The new index to focus on, or -1 if no movement is possible.
   */
  private getNewIndexBasedOnKey(key: string, currentIndex: number, optionsLength: number): number {
    if (key === KEYS.ARROW_DOWN && currentIndex !== optionsLength - 1) {
      return currentIndex + 1;
    }
    if (key === KEYS.ARROW_UP && currentIndex > 0) {
      return currentIndex - 1;
    }
    if (key === KEYS.PAGE_DOWN) {
      // Jumps visual focus down 10 options (or to last option).
      return currentIndex + 10 > optionsLength ? optionsLength - 1 : currentIndex + 10;
    }
    if (key === KEYS.PAGE_UP) {
      // Jumps visual focus up 10 options (or to first option).
      return currentIndex - 10 < 0 ? 0 : currentIndex - 10;
    }
    return -1;
  }

  private setFocusAndTabIndex(newIndex: number): void {
    const options = this.getAllValidOptions();
    const targetOption = options[newIndex] as HTMLElement;

    if (targetOption) {
      targetOption.focus();

      options.forEach((node, index) => {
        const newTabindex = newIndex === index ? '0' : '-1';
        node?.setAttribute('tabindex', newTabindex);
      });
    }
  }

  private openPopover(): void {
    this.displayPopover = true;
    this.baseIconName = ARROW_ICON.ARROW_UP;
  }

  private closePopover(): void {
    this.displayPopover = false;
    this.baseIconName = ARROW_ICON.ARROW_DOWN;
  }

  /**
   * Handles the first updated lifecycle event.
   * If an option is selected, use that as the value.
   * If not, use the placeholder if it exists, otherwise use the first option.
   */
  public override async firstUpdated() {
    await this.updateComplete;
    this.modifyListBoxWrapper();

    const options = this.getAllValidOptions();
    const selectedOptionIndex = options.findIndex(option => option?.hasAttribute('selected'));

    if (selectedOptionIndex !== -1) {
      this.setSelectedValue(options[selectedOptionIndex]);
      this.updateTabIndexForAllOptions(options[selectedOptionIndex]);
    } else if (!this.placeholder) {
      // We will show the first option as selected.
      this.setSelectedValue(options[0]);
      this.updateTabIndexForAllOptions();
    } else if (this.placeholder) {
      // If there is no default selected option
      // then we set the placeholder and call the native validity
      this.manageRequired();
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
        this.closePopover();
      }
    }

    if (changedProperties.has('dataAriaLabel')) {
      this.modifyListBoxWrapper();
    }
  }

  private handleOnChange(): void {
    this.selectedValue = this.inputElement.value;
    this.internals.setFormValue(this.selectedValue);
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        <select
          part="native-select"
          id="${this.id}"
          tabindex="-1"
          aria-hidden="true"
          name="${this.name}"
          size="1"
          .value="${live(this.selectedValue)}"
          ?autofocus="${this.autofocus}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          aria-disabled="${ifDefined(this.disabled || this.softDisabled)}"
          @change="${this.handleOnChange}"
          @mousedown="${(event: MouseEvent) => event.preventDefault()}"
        >
          ${this.getAllValidOptions().map(
            option => html`
              <option
                part="native-select"
                value="${option.getAttribute('value') ?? ''}"
                label="${option.getAttribute('label') ?? ''}"
                ?disabled="${!!option.hasAttribute('disabled')}"
                ?selected="${!!option.hasAttribute('selected')}"
              >
                ${option.textContent}
              </option>
            `,
          )}
        </select>
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
          ${this.selectedIcon
            ? html`<mdc-icon length-unit="rem" size="1" name="${this.selectedIcon}" part="selected-icon"></mdc-icon>`
            : nothing}
          <mdc-text
            part="base-text ${this.selectedValueText ? 'selected' : ''}"
            type="${TYPE.BODY_MIDSIZE_REGULAR}"
            tagname="${VALID_TEXT_TAGS.SPAN}"
          >
            ${this.selectedValueText ?? this.placeholder}
          </mdc-text>
          <div part="icon-container">
            <mdc-icon size="1" length-unit="rem" name="${this.baseIconName}"></mdc-icon>
          </div>
        </div>
        <mdc-popover
          trigger="manual"
          triggerid="${TRIGGER_ID}"
          @keydown="${this.handlePopoverOnOpen}"
          interactive
          ?visible="${this.displayPopover}"
          role=""
          hide-on-outside-click
          hide-on-escape
          focus-back-to-trigger
          focus-trap
          size
          placement="${this.placement}"
          @closebyescape="${this.closePopover}"
          @closebyoutsideclick="${this.closePopover}"
          style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
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
