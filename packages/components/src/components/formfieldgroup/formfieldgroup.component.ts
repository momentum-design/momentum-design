import type { CSSResult } from 'lit';
import { html } from 'lit';

import { ROLE } from '../../utils/roles';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';

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
 * @csspart label-toggletip - The toggletip element that is displayed when the info icon button is clicked.
 * @csspart help-text - The helper/validation text element.
 * @csspart helper-icon - The helper/validation icon element that is displayed next to the helper/validation text.
 * @csspart help-text-container - The container for the helper/validation icon and text elements.
 * @csspart group-header - This contains the label and help text for the group
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
 */
class FormfieldGroup extends FormfieldWrapper {
  /**
   * @internal
   * This is used to set the role of the component as `radiogroup` if this is true and to 'group' if it is false.
   */
  protected isRadio = false;

  override connectedCallback(): void {
    super.connectedCallback();
    this.shouldRenderLabel = false;
    this.disabled = undefined as unknown as boolean;
    this.role = this.isRadio ? ROLE.RADIOGROUP : ROLE.GROUP;

    this.ariaDescription = this.helpText ?? '';
    // Add aria-label if not provided by the consumer, to make it accessible.
    // It will use the label property for the aria-label if aria-label is not provided.
    if (!this.hasAttribute('aria-label')) {
      this.setAttribute('aria-label', this.label || '');
    }
  }

  override update(changedProperties: Map<string, unknown>): void {
    super.update(changedProperties);
    if (changedProperties.has('label') && !this.ariaLabel) {
      this.ariaLabel = this.label || '';
    }
    if (changedProperties.has('helpText') && !this.ariaDescription) {
      this.ariaDescription = this.helpText || '';
    }
  }

  public override render() {
    return html`
      <div part="group-header">${this.renderLabel()} ${this.renderHelperText()}</div>
      <slot></slot>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default FormfieldGroup;
