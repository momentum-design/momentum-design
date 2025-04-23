import { CSSResult, html } from 'lit';
import { queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import styles from './searchfield.styles';
import Input from '../input/input.component';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { DEFAULTS } from './searchfield.constants';

/**
 * searchfield component is used as an input field for search functionality.
 *
 * It supports `mdc-inputchip` as filters.
 *
 * This component is built by extending the `mdc-input` component.
 *
 * @tagname mdc-searchfield
 *
 * @slot filters - Slot for input chips
 *
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
    if (event.key === 'Escape') {
      this.clearInputText();
    }
  }

  override connectedCallback() {
    super.connectedCallback();
    this.leadingIcon = DEFAULTS.ICON;
    this.trailingButton = DEFAULTS.CLOSE_BTN;
    this.helpText = undefined as unknown as string;
    this.helpTextType = undefined as unknown as ValidationType;
    this.requiredLabel = undefined as unknown as string;
    this.validationMessage = undefined as unknown as string;
    this.prefixText = undefined as unknown as string;
  }

  /**
   * This method is used to render the input chips inside filters slot.
   * It will remove any elements that are not input chips.
   */
  private renderInputChips() {
    this.hasInputChips = !!this.inputChips?.length;
    if (this.inputChips) {
      this.inputChips.forEach((element) => {
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
  override firstUpdated() {
    this.inputElement.onfocus = () => {
      this.isInputFocused = true;
    };
    this.inputElement.onblur = () => {
      this.isInputFocused = false;
    };
  }

  override clearInputText() {
    super.clearInputText();
    this.inputChips?.forEach((element) => {
      // Dispatch the custom 'remove' event from inputChip
      element.dispatchEvent(new CustomEvent('remove', { bubbles: true, composed: true }));
    });
  }

  public override render() {
    return html`
    ${this.renderLabelElement()}
    <div class="${classMap({
    'input-container': true,
    'mdc-focus-ring': this.isInputFocused,
  })}" part="input-container">
    ${this.renderLeadingIcon()}
      <div part='scrollable-container' tabindex='-1'>
      <div part="filters-container" 
      @click=${() => this.inputElement.focus()} 
      @keydown=${(e: KeyboardEvent) => e.key === 'Enter' ? this.inputElement.focus() : null} 
      @keyup=${(e: KeyboardEvent) => e.key === ' ' ? this.inputElement.focus() : null}>
        <slot name="filters" @slotchange=${this.renderInputChips}></slot></div>
      ${this.renderInputElement(DEFAULTS.TYPE, this.hasInputChips)}
      </div>
      ${this.renderTrailingButton(this.hasInputChips)}
    </div>
  `;
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Searchfield;
