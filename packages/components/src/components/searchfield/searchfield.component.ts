import { CSSResult, html } from 'lit';
import styles from './searchfield.styles';
import Input from '../input/input.component';
import { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';
import { DEFAULTS } from './searchfield.constants';

/**
 * searchfield component, which ...
 *
 * @tagname mdc-searchfield
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Searchfield extends Input {
  constructor() {
    super();
    this.leadingIcon = DEFAULTS.ICON;
    this.trailingButton = DEFAULTS.CLOSE_BTN;
    this.helpText = undefined as unknown as string;
    this.helpTextType = undefined as unknown as ValidationType;
    this.requiredLabel = undefined as unknown as string;
    this.validationMessage = undefined as unknown as string;
  }

  public override render() {
    return html`
    ${this.renderLabelElement()}
    <div class="input-container mdc-focus-ring" part="input-container">
      <slot name="input-leading-icon">${this.renderLeadingIcon()}</slot>
      <slot name="input">${this.renderInputElement(DEFAULTS.TYPE)}</slot>
      <slot name="trailing-button">${this.renderTrailingButton()}</slot>
    </div>
  `;
  }

  public static override styles: Array<CSSResult> = [...Input.styles, ...styles];
}

export default Searchfield;
