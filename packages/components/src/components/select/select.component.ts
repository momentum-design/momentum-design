import type { PropertyValues, TemplateResult } from 'lit';
import { CSSResult, html, nothing } from 'lit';
import { property, query, queryAssignedElements, state } from 'lit/decorators.js';
import { KEYS } from '../../utils/keys';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { AssociatedFormControl, FormInternalsMixin } from '../../utils/mixins/FormInternalsMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import type { IconNames } from '../icon/icon.types';
import { TAG_NAME as OPTION_GROUP_TAG_NAME } from '../optgroup/optgroup.constants';
import { TAG_NAME as OPTION_TAG_NAME } from '../option/option.constants';
import { POPOVER_PLACEMENT } from '../popover/popover.constants';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { ARROW_ICON } from './select.constants';
import styles from './select.styles';
import type { ArrowIcon } from './select.types';

/**
 * The mdc-select component is a dropdown selection control that allows users to pick an option from a predefined list.
 * It is designed to work with `mdc-option` for individual options and `mdc-optgroup` for grouping related options.
 * The component ensures accessibility and usability while handling various use cases,
 * including long text truncation with tooltip support.
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

  /** @internal */
  @queryAssignedElements() optionsList!: Array<HTMLElement>;

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

  /** @internal */
  @state() activeDescendant = '';

  /**
   * @internal
   * The native select element
   */
  @query('select') override inputElement!: HTMLInputElement;

  override connectedCallback(): void {
    super.connectedCallback();
    // select will only contain name and value will be defined in the options.
    this.value = undefined as unknown as string;
  }

  /**
   * A helper function which returns a flattened array of all valid options from the assigned slot.
   * It takes care of the edge cases where the option is either a direct child or a
   * child of an option group.
   */
  private getAllValidOptions() {
    return this.optionsList
      ?.map((option) => {
        if (option.tagName.toLowerCase() === OPTION_TAG_NAME) {
          return option;
        }
        if (option.tagName.toLowerCase() === OPTION_GROUP_TAG_NAME) {
          return Array.from(option.children).filter((optgroup) => optgroup.tagName.toLowerCase() === OPTION_TAG_NAME);
        }
        return [];
      }).flat() || [];
  }

  private handlePopoverOpen(): void {
    this.displayPopover = true;
    this.baseIconName = ARROW_ICON.ARROW_UP;
    this.updateActivedescendant();
  }

  private handlePopoverClose(): void {
    this.displayPopover = false;
    this.baseIconName = ARROW_ICON.ARROW_DOWN;
  }

  /**
   * Updates the tabindex and selected attribute of the options.
   * If selectedOption is provided, it will be set as the selected option.
   * Otherwise, it will set the first option as the selected option.
   * @param selectedOption - The option which should be selected.
   */
  private updateTabIndexForAllOptions(selectedOption?: EventTarget | null): void {
    let isTabIndexSet = false;
    this.getAllValidOptions().forEach((option) => {
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

    // Set form value
    this.internals.setFormValue(this.selectedValue);
    this.manageRequired();

    // dispatch a change event when a value is selected
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
      this.setValidity();
    } else {
      this.internals.setValidity({});
    }
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

  /**
   * Handles the keydown event on the select element when the popover is open.
   * The options are as follows:
   * - SPACE or ENTER: Selects the currently active option and closes the popover.
   * - ESCAPE: Closes the popover.
   * - HOME: Sets focus and tabindex on the first option.
   * - END: Sets focus and tabindex on the last option.
   * - ARROW_DOWN, ARROW_UP, PAGE_DOWN, PAGE_UP: Handles navigation between options.
   * @param event - The keyboard event.
   */
  private handlePopoverOnOpen(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.SPACE:
        this.updateTabIndexForAllOptions(event.target);
        this.closePopover();
        event.preventDefault();
        break;
      case KEYS.ENTER:
        this.updateTabIndexForAllOptions(event.target);
        this.closePopover();
        event.preventDefault();
        // if the popover is closed, then we submit the form.
        this.form?.requestSubmit();
        break;
      case KEYS.ESCAPE:
        this.closePopover();
        event.stopPropagation();
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

  /**
   * Handles the keydown event on the select element when the popover is closed.
   * The options are as follows:
   * - ARROW_DOWN, ARROW_UP, SPACE: Opens the popover and prevents the default scrolling behavior.
   * - ENTER: Opens the popover, prevents default scrolling, and submits the form if the popover is closed.
   * - HOME: Opens the popover and sets focus and tabindex on the first option.
   * - END: Opens the popover and sets focus and tabindex on the last option.
   * @param event - The keyboard event.
   */
  private handlePopoverOnClose(event: KeyboardEvent): void {
    switch (event.key) {
      case KEYS.ARROW_DOWN:
      case KEYS.ARROW_UP:
      case KEYS.ENTER:
      case KEYS.SPACE:
        this.openPopover();
        // Prevent the default browser behavior of scrolling down
        event.preventDefault();
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
    const currentIndex = options.findIndex((option) => option === event.target);
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
      return (currentIndex + 10) > optionsLength ? optionsLength - 1 : currentIndex + 10;
    }
    if (key === KEYS.PAGE_UP) {
      // Jumps visual focus up 10 options (or to first option).
      return (currentIndex - 10) < 0 ? 0 : currentIndex - 10;
    }
    return -1;
  }

  private updateActivedescendant(target?: EventTarget | null): void {
    if (target) {
      const currentIndex = this.getAllValidOptions().findIndex((option) => option === target);
      this.activeDescendant = this.getAllValidOptions()[currentIndex]?.id ?? '';
    } else {
      // If no target is provided, find the option with tabindex="0" or the first option
      const focusedOption = this.getAllValidOptions().find((option) => option.getAttribute('tabindex') === '0');
      this.activeDescendant = focusedOption?.id ?? this.getAllValidOptions()[0]?.id ?? '';
    }
  }

  private resetActivedescendant(): void {
    this.activeDescendant = '';
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

      // Update activeDescendant after changing focus
      this.activeDescendant = targetOption.id ?? '';
    }
  }

  private openPopover(): void {
    this.displayPopover = true;

    // Find the currently selected option or the first option
    const options = this.getAllValidOptions();
    const selectedOption = options.find((option) => option.hasAttribute('selected'));
    const focusedOption = options.find((option) => option.getAttribute('tabindex') === '0');

    // Set activeDescendant to the selected/focused option or first option
    this.activeDescendant = (selectedOption || focusedOption || options[0])?.id ?? '';
  }

  private closePopover(): void {
    this.displayPopover = false;
    this.resetActivedescendant();
  }

  /**
   * Handles the first updated lifecycle event.
   * If an option is selected, use that as the value.
   * If not, use the placeholder if it exists, otherwise use the first option.
   */
  public override firstUpdated() {
    const options = this.getAllValidOptions();
    const selectedOptionIndex = options.findIndex((option) => option?.hasAttribute('selected'));
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

  /**
   * Generates the native select element.
   * The native select element is not rendered directly and is not visible on the UI.
   * It's rendered only on the DOM for accessibility purposes.
   * Instead, the overlay uses the native select element to generate the list of options.
   * @returns A TemplateResult representing the native select element.
   */
  private getNativeSelect(): TemplateResult {
    return html`
      <select
        part="native-select"
        id="${this.id}"
        tabindex="-1"
        name="${this.name}"
        size="1"
        .value="${this.selectedValue}"
        ?autofocus="${this.autofocus}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @mousedown="${(event: MouseEvent) => event.preventDefault()}"
      >
        ${this.getOptionsContentFromSlot()}
      </select>
    `;
  }

  /**
   * This method maps over all valid options and constructs their corresponding
   * HTML `<option>` elements. The attributes such as `value`, `label`, `disabled`,
   * and `selected` are extracted from the respective option elements.
   * If the attribute is not present, a default value or fallback is used.
   * The content of each `<option>` is set to the text content of the option element.
   * @returns An array of `TemplateResult` representing the option elements.
   */
  private getOptionsContentFromSlot(): TemplateResult[] {
    return this.getAllValidOptions()
      .map((option) => html`
        <option
          part="native-select"
          value="${option.getAttribute('value') ?? ''}"
          label="${option.getAttribute('label') ?? ''}"
          ?disabled="${!!option.hasAttribute('disabled')}"
          ?selected="${!!option.hasAttribute('selected')}"
        >
          ${option.textContent}
        </option>
    `);
  }

  /**
   * Generates the content for the popover associated with the select component.
   * If the component is disabled or readonly, returns `nothing`.
   * Otherwise, returns a `TemplateResult` that renders a popover with various configurations
   * such as visibility, interaction, and event handlers.
   * The popover acts as a dropdown list with options, allowing user interaction.
   */
  private getPopoverContent(): TemplateResult | typeof nothing {
    if (this.disabled || this.readonly) {
      return nothing;
    }
    return html`
      <mdc-popover
        id="options-popover"
        triggerid="select-base-triggerid"
        @keydown="${this.handlePopoverOnOpen}"
        interactive
        ?visible="${this.displayPopover}"
        hide-on-outside-click
        focus-back-to-trigger
        focus-trap
        role="listbox"
        placement="${POPOVER_PLACEMENT.BOTTOM_START}"
        aria-labelledby="select-base-triggerid ${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
        @shown="${this.handlePopoverOpen}"
        @hidden="${this.handlePopoverClose}"
        style="--mdc-popover-max-width: 100%; --mdc-popover-max-height: ${this.height};"
      >
        <slot @click="${this.handleOptionsClick}"></slot>
      </mdc-popover>
    `;
  }

  public override updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    if (changedProperties.has('disabled') || changedProperties.has('readonly')) {
      this.closePopover();
      this.handlePopoverClose();
    }
  }

  public override render() {
    return html`
      ${this.renderLabel()}
      <div part="container">
        <div
          id="select-base-triggerid"
          part="base-container"
          @keydown="${this.handlePopoverOnClose}"
          tabindex="${this.disabled ? '-1' : '0'}"
          class="${this.disabled ? '' : 'mdc-focus-ring'}"
          role="combobox"
          aria-activedescendant="${this.activeDescendant}"
          aria-haspopup="listbox"
          aria-label="${this.dataAriaLabel ?? ''}"
          aria-labelledby="${this.label ? FORMFIELD_DEFAULTS.HEADING_ID : ''}"
          aria-expanded="${this.displayPopover ? 'true' : 'false'}"
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
        ${this.getNativeSelect()}
        ${this.getPopoverContent()}
      </div>
      ${this.renderHelperText()}
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default Select;
