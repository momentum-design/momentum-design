import { CSSResult, html, PropertyValueMap } from 'lit';
import { queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';

import Input from '../input/input.component';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { ACTIONS } from '../../utils/mixins/KeyToActionMixin';

import styles from './searchfield.styles';
import { DEFAULTS } from './searchfield.constants';

/**
 * `mdc-searchfield` component is used as an input field for search functionality.
 *
 * It supports `mdc-inputchip` as filters.
 *
 * This component is built by extending the `mdc-input` component.
 *
 * **Accessibility:**
 *
 * NOTE: this component should not be used in combination with a Popover or Listbox component.
 * Search results should be shown permanently on the page if using this component.
 *
 * For a search field that opens a Popover, use the `mdc-searchpopover` widget instead.
 *
 * @tagname mdc-searchfield
 *
 * @event input - (React: onInput) This event is dispatched when the value of the input field changes (every press).
 * @event change - (React: onChange) This event is dispatched when the value of the input field changes (on blur).
 * @event focus - (React: onFocus) This event is dispatched when the input receives focus.
 * @event blur - (React: onBlur) This event is dispatched when the input loses focus.
 * @event clear - (React: onClear) This event is dispatched when the input text is cleared.
 *
 * @slot filters - Slot for input chips
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 * @slot input - Slot for the input element. If not provided, the input field will be rendered.
 * @slot input-leading-icon - Slot for the leading icon before the input field. If not provided, the `leadingIcon` property will be used to render the leading icon.
 * @slot input-prefix-text - Slot for the prefix text before the input field. If not provided, the `prefixText` property will be used to render the prefix text.
 * @slot trailing-button - Slot for the trailing button to clear the input field. If not provided, the clear button will be rendered when `trailingButton` property is set to true.
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
 * @cssproperty --mdc-input-text-color - Text color for the input field
 * @cssproperty --mdc-input-border-color - Border color for the input container
 * @cssproperty --mdc-input-background-color - Background color for the input field
 * @cssproperty --mdc-input-support-text-color - Text color for the help text
 * @cssproperty --mdc-input-selection-text-color - Text color for the selected text
 * @cssproperty --mdc-input-selection-background-color - Background color for the selected text
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart leading-icon - The leading icon element that is displayed before the input field.
 * @csspart prefix-text - The prefix text element that is displayed before the input field.
 * @csspart input-container - The container for the input field, leading icon, prefix text, and trailing button elements.
 * @csspart input-section - The container for the input field, leading icon, and prefix text elements.
 * @csspart input-text - The input field element.
 * @csspart trailing-button - The trailing button element that is displayed to clear the input field when the `trailingButton` property is set to true.
 */
class Searchfield extends Input {
  @queryAssignedElements({ slot: 'filters' })
  inputChips?: Array<HTMLElement>;

  /**
   * @internal
   */
  @state() isInputFocused = false;

  /**
   * @internal
   */
  @state() hasInputChips = false;

  /**
   * Handles the keydown event of the search field.
   * If the key pressed is 'Enter', it submits the form.
   * If the key pressed is 'Escape', it clears the input text.
   * @param event - Keyboard event
   */
  override handleKeyDown(event: KeyboardEvent) {
    super.handleKeyDown(event);
    if (this.getActionForKeyEvent(event) === ACTIONS.ESCAPE) {
      this.clearInputText();
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.leadingIcon = DEFAULTS.ICON;
    this.trailingButton = DEFAULTS.CLOSE_BTN;
    this.helpText = undefined as unknown as string;
    this.helpTextType = undefined as unknown as ValidationType;
    this.required = undefined as unknown as boolean;
    this.validationMessage = undefined as unknown as string;
    this.prefixText = undefined as unknown as string;
  }

  /**
   * This method is used to render the input chips inside filters slot.
   * It will remove any elements that are not input chips.
   * @internal
   */
  protected renderInputChips() {
    this.hasInputChips = !!this.inputChips?.length;
    if (this.inputChips) {
      this.inputChips.forEach(element => {
        if (!element.matches(DEFAULTS.INPUT_CHIP_TAG)) {
          element.remove();
        }
      });
    }
  }

  /**
   * This sets the focus ring state based on the input focus state.
   * Eventually, this logic has to be omitted and achieved using CSS instead.
   * @override
   */
  protected override firstUpdated(_changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>) {
    this.inputElement.onfocus = () => {
      this.isInputFocused = true;
    };
    this.inputElement.onblur = () => {
      this.isInputFocused = false;
    };
    super.firstUpdated(_changedProperties);
  }

  override clearInputText() {
    super.clearInputText();
    this.inputChips?.forEach(element => {
      // Dispatch the custom 'remove' event from inputChip
      element.dispatchEvent(new CustomEvent('remove', { bubbles: true, composed: true }));
    });
  }

  handleFilterContainerClick = () => {
    this.inputElement.focus();
  };

  protected handleFilterContainerKeyDown = (e: KeyboardEvent) => {
    if (this.getActionForKeyEvent(e) === ACTIONS.ENTER) {
      this.handleFilterContainerClick();
    }
  };

  protected handleFilterContainerKeyUp = (e: KeyboardEvent) => {
    if (this.getActionForKeyEvent(e) === ACTIONS.SPACE) {
      this.handleFilterContainerClick();
    }
  };

  public override render() {
    return html`
      ${this.renderLabelElement()}
      <div
        class="${classMap({
          'mdc-focus-ring': this.isInputFocused,
        })}"
        part="input-container"
      >
        ${this.renderLeadingIcon()}
        <div part="scrollable-container" tabindex="-1">
          <div
            part="filters-container"
            @click=${this.handleFilterContainerClick}
            @keydown=${this.handleFilterContainerKeyDown}
            @keyup=${this.handleFilterContainerKeyUp}
          >
            <slot name="filters" @slotchange=${this.renderInputChips}></slot>
          </div>
          ${this.renderInputElement(DEFAULTS.TYPE, this.hasInputChips)}
        </div>
        ${this.renderTrailingButton(this.hasInputChips)}
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Searchfield;
