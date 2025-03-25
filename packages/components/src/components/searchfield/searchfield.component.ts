import { CSSResult, html } from 'lit';
import { queryAssignedElements } from 'lit/decorators.js';
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

  override connectedCallback() {
    super.connectedCallback();
    this.leadingIcon = DEFAULTS.ICON;
    this.trailingButton = DEFAULTS.CLOSE_BTN;
    this.helpText = undefined as unknown as string;
    this.helpTextType = undefined as unknown as ValidationType;
    this.requiredLabel = undefined as unknown as string;
    this.validationMessage = undefined as unknown as string;
    this.prefixText = undefined as unknown as string;
    this.requiredLabel = undefined as unknown as string;
  }

  /**
   * This method is used to render the input chips inside filters slot.
   * It will remove any elements that are not input chips.
   */
  private renderInputChips() {
    if (this.inputChips) {
      Array.from(this.inputChips).forEach((element) => {
        if (!element.matches('mdc-inputchip')) {
          element.remove();
        }
      });
    }
  }

  public override render() {
    return html`
    ${this.renderLabelElement()}
    <div class="input-container mdc-focus-ring" part="input-container">
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
