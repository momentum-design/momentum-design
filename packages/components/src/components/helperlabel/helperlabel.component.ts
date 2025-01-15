import { CSSResult, html, nothing } from 'lit';
import { v4 as uuidv4 } from 'uuid';
import { property } from 'lit/decorators.js';
import styles from './helperlabel.styles';
import { Component } from '../../models';
import type { ValidationType } from './helperlabel.types';
import { DEFAULTS } from './helperlabel.constants';
import { getHelperIcon } from './helperlabel.utils';

/**
 * helperlabel component, which ...
 *
 * @tagname mdc-helperlabel
 *
 * @slot default - This is a default/unnamed slot
 *
 * @cssprop --custom-property-name - Description of the CSS custom property
 */
class Helperlabel extends Component {
/**
     * The label of the input field. It is linked to the input field using the `for` attribute.
     */
@property({ reflect: true, type: String }) label = '';

/**
   * The unique id of the input field. It is used to link the input field with the label.
   */
@property({ type: String }) override id = '';

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

private generateId() {
  // generating a random id for associating the input and label field
  return `mdc-input-${uuidv4()}`;
}

constructor() {
  super();
  this.id = this.id || this.generateId();
}

/**
 * creates the label element when the label property is set.
 * id is used to link the label with the input field.
 * @returns void
 */
public renderLabel() {
  if (!this.label) {
    return nothing;
  }

  return html`<label for="${this.id}" class='mdc-label'>${this.label}</label>`;
}

protected renderLabelInfoToggleTip() {
  if (!this.labelInfoText) {
    return nothing;
  }
  return html`<mdc-icon name=${DEFAULTS.INFO_ICON_NAME} size="1.25" length-unit="rem"></mdc-icon>`;
}

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

protected renderHelpText() {
  if (!this.helpText) {
    return nothing;
  }
  return html` <mdc-text tagname='span' type='body-midsize-regular'>${this.helpText}</mdc-text> `;
}

protected renderHeader() {
  return html`<div class="header">
  <slot name="label">${this.renderLabel()}</slot>
  <slot name="label-icon">${this.renderLabelInfoToggleTip()}</slot>
</div>`;
}

protected renderFooter() {
  return html`<div class="footer" part="footer">
  <slot name="help-icon">${this.renderHelpTextIcon()}</slot>
  <slot name="help-text">${this.renderHelpText()}</slot>
</div>`;
}

public override render() {
  return html`
    ${this.renderHeader()}
    <slot></slot>
    ${this.renderFooter()}
  `;
}

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Helperlabel;
