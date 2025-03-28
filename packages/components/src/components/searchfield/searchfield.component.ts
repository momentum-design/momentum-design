import { CSSResult, html } from 'lit';
import { queryAssignedElements, state } from 'lit/decorators.js';
import { classMap } from 'lit-html/directives/class-map.js';
import styles from './searchfield.styles';
import Input from '../input/input.component';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { DEFAULTS } from './searchfield.constants';

/**
 * searchfield component is used as an input field for search functionality.
 * This component is built by extending the mdc-input component.
 *
 * @tagname mdc-searchfield
 *
 */
class Searchfield extends Input {
  @queryAssignedElements({ slot: 'filters' })
  inputChips?: Array<HTMLElement>;

  /**
   * @internal
   */
  @state() isInputFocused = false;

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
    if (this.inputChips) {
      this.inputChips.forEach((element) => {
        if (!element.matches('mdc-inputchip')) {
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

  public override render() {
    return html`
    ${this.renderLabelElement()}
    <div class="${classMap({
    'input-container': true,
    'mdc-focus-ring': this.isInputFocused,
  })}" part="input-container">
    ${this.renderLeadingIcon()}
      <div part='scrollable-container'>
      <div part="filters-container"><slot name="filters" @slotchange=${this.renderInputChips}></slot></div>
      ${this.renderInputElement(DEFAULTS.TYPE)}
      </div>
      ${this.renderTrailingButton()}
    </div>
  `;
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Searchfield;
