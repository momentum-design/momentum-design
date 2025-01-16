import { CSSResult, html, nothing } from 'lit';
import { v4 as uuidv4 } from 'uuid';
import { property } from 'lit/decorators.js';
import styles from './helperlabel.styles';
import { Component } from '../../models';
import type { ValidationType } from './helperlabel.types';
import { DEFAULTS, MDC_TEXT_OPTIONS } from './helperlabel.constants';
import { getHelperIcon } from './helperlabel.utils';

/**
 * helperlabel is an internal component that contains the label and helper/validation text
 *  that can be configured in various ways to suit different use cases (most of the input related components).
 * It is used as an internal component and is not intended to be used directly by consumers.
 *
 * @tagname mdc-helperlabel
 *
 */
class Helperlabel extends Component {
/**
     * The label of the input field. It is linked to the input field using the `for` attribute.
     */
@property({ reflect: true, type: String }) label = '';

/**
   * The unique id of the input field. It is used to link the input field with the label.
   */
@property({ type: String }) override id = `mdc-input-${uuidv4()}`;

/**
 * The type of help text. It can be 'default', 'error', 'warning', 'success', 'priority'.
 */
@property({ reflect: true }) helpTextType: ValidationType = DEFAULTS.VALIDATION;

/**
 * The help text that is displayed below the input field.
 */
@property({ type: String, reflect: true }) helpText = '';

/**
 * @beta this attribute is in beta, and is subject to change (given the toggletip component is not ready yet)
 */
@property({ type: String }) labelInfoText = '';

/**
 * creates the label element when the label property is set.
 * id is used to link the label with the input field.
 * @returns void
 */
public renderLabelElement() {
  if (!this.label) {
    return nothing;
  }

  return html`<label for="${this.id}" class='mdc-label'>${this.label}</label>`;
}

/**
 * displays a info icon, which when hovered over, displays the labelInfoText.
 * This is in beta and is subject to change once the toggletip component is ready.
 * @returns void
 */
protected renderLabelInfoToggleTip() {
  if (!this.labelInfoText) {
    return nothing;
  }
  return html`<mdc-icon name=${DEFAULTS.INFO_ICON_NAME} size="1.25" length-unit="rem"></mdc-icon>`;
}

/**
 * creates the helpertext icon based on the helpTextType for validation.
 * If the helpTextType is not set, it defaults to 'default' and it doesn't display any icon.
 * @returns void
 */
protected renderHelpTextIcon() {
  if (!this.helpText) {
    return nothing;
  }
  const helperIcon = getHelperIcon(this.helpTextType || DEFAULTS.VALIDATION);
  if (helperIcon) {
    return html`<mdc-icon size="1" length-unit="rem" name=${helperIcon}></mdc-icon>`;
  }
  return nothing;
}

/**
 * creates the helper text component when the helpertext value is set.
 * It is also used to display the validation message based on the helpTextType.
 * @returns void
 */
protected renderHelpText() {
  if (!this.helpText) {
    return nothing;
  }
  return html`
    <mdc-text tagname=${MDC_TEXT_OPTIONS.TAGNAME} type=${MDC_TEXT_OPTIONS.TYPE}>
      ${this.helpText}
    </mdc-text>
  `;
}

/**
 * renders the header container that contains the label and labelInfoToggleTip.
 * @returns void
 */
protected renderHeaderLabel() {
  return html`<div class="header">
  <slot name="label">${this.renderLabelElement()}</slot>
  <slot name="label-icon">${this.renderLabelInfoToggleTip()}</slot>
</div>`;
}

/**
 * renders the footer container that contains the helpertext icon and helpertext.
 * @returns void
 */
protected renderFooterHelperText() {
  return html`<div class="footer" part="footer">
  <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
  <slot name="help-text">${this.renderHelpText()}</slot>
</div>`;
}

public override render() {
  return html`
    ${this.renderHeaderLabel()}
    <slot></slot>
    ${this.renderFooterHelperText()}
  `;
}

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Helperlabel;
