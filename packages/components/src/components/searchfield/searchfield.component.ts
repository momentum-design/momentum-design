import { CSSResult, html } from 'lit';
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

  public override render() {
    return html`
    ${this.renderLabelElement()}
    <div class="input-container mdc-focus-ring" part="input-container">
      <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
      <div part="filters-container"><slot name="filters"></slot></div>
      <slot name="input">${this.renderInputElement(DEFAULTS.TYPE)}</slot>
      <slot name="trailing-button">${this.renderTrailingButton()}</slot>
    </div>
  `;
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Searchfield;
