import type { CSSResult } from 'lit';
import { html } from 'lit';
import { ifDefined } from 'lit/directives/if-defined.js';

import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';

import styles from './formfieldgroup.styles';

/**
 * `mdc-formfieldgroup` component, groups the form field components together.
 * All passed in children will have a gap of 12px (0.75rem) each applied.
 *
 * This component is specifically for creating a `checkbox` group and a `toggle` group component.
 * For the radiogroup use the RadioGroup component instead.
 *
 * The header text and description text are displayed above the items with accessible labels.<br/>
 * The consumer has to provide atleast the header-text or the aria-label,
 * like one of them <b>has</b> to be passed in always, otherwise its not accessible.
 *
 * The role will be set to `group`.
 * The aria-label will be set with the data-aria-label property.
 * The aria-labelledby will be set with the header id which contains the header text information.
 * The aria-describedby will be set with the description id which contains the description text information.
 *
 * @tagname mdc-formfieldgroup
 *
 * @dependency mdc-button
 * @dependency mdc-icon
 * @dependency mdc-text
 * @dependency mdc-toggletip
 *
 * @slot default - This is a default slot for checkbox or toggle components.
 * @slot label - Slot for the label element. If not provided, the `label` property will be used to render the label.
 * @slot toggletip - Slot for the toggletip info icon button. If not provided, the `toggletip-text` property will be used to render the info icon button and toggletip.
 * @slot help-icon - Slot for the helper/validation icon. If not provided, the icon will be rendered based on the `helpTextType` property.
 * @slot help-text - Slot for the helper/validation text. If not provided, the `helpText` property will be used to render the helper/validation text.
 *
 * @csspart label - The label element.
 * @csspart label-text - The container for the label and required indicator elements.
 * @csspart required-indicator - The required indicator element that is displayed next to the label when the `required` property is set to true.
 * @csspart info-icon-btn - The info icon button element that is displayed next to the label when the `toggletip-text` property is set.
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is hovered.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 *
 * @cssproperty --mdc-label-font-size - Font size for the label text.
 * @cssproperty --mdc-label-font-weight - Font weight for the label text.
 * @cssproperty --mdc-label-line-height - Line height for the label text.
 * @cssproperty --mdc-label-color - Color for the label text.
 * @cssproperty --mdc-help-text-font-size - Font size for the help text.
 * @cssproperty --mdc-help-text-font-weight - Font weight for the help text.
 * @cssproperty --mdc-help-text-line-height - Line height for the help text.
 * @cssproperty --mdc-help-text-color - Color for the help text.
 */
class FormfieldGroup extends DataAriaLabelMixin(FormfieldWrapper) {
  /**
   * @internal
   * This is used to set the role of the component as `radiogroup` if this is true and to 'group' if it is false.
   */
  protected isRadio = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.shouldRenderLabel = false;
    this.disabled = undefined as unknown as boolean;
  }

  public override render() {
    return html`
      <div
        part="container"
        role="${this.isRadio ? ROLE.RADIOGROUP : ROLE.GROUP}"
        aria-labelledby="${FORMFIELD_DEFAULTS.HEADING_ID}"
        aria-describedby="${ifDefined(this.helpText ? FORMFIELD_DEFAULTS.HELPER_TEXT_ID : '')}"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default FormfieldGroup;
