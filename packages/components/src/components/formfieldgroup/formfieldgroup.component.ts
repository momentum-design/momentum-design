import type { CSSResult } from 'lit';
import { html } from 'lit';
import { DataAriaLabelMixin } from '../../utils/mixins/DataAriaLabelMixin';
import FormfieldWrapper from '../formfieldwrapper/formfieldwrapper.component';
import { ROLE } from './formfieldgroup.constants';
import { DEFAULTS as FORMFIELD_DEFAULTS } from '../formfieldwrapper/formfieldwrapper.constants';
import styles from './formfieldgroup.styles';
import type { ValidationType } from '../formfieldwrapper/formfieldwrapper.types';

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
 * @slot default - This is a default slot for checkbox or toggle components.
 */
class FormfieldGroup extends DataAriaLabelMixin(FormfieldWrapper) {
  /**
   * @internal
   * This is used to set the role of the component as `radiogroup` if this is true and to 'group' if it is false.
   */
  protected isRadio = false;

  constructor() {
    super();
    this.helpTextType = undefined as unknown as ValidationType;
  }

  public override render() {
    return html`
      <div
        part="container"
        role="${this.isRadio ? ROLE.RADIOGROUP : ROLE.GROUP}"
        aria-labelledby="${FORMFIELD_DEFAULTS.LABEL_ID}"
        aria-describedby="${FORMFIELD_DEFAULTS.HELPER_TEXT_ID}"
        aria-label="${this.dataAriaLabel ?? ''}"
      >
        ${this.renderLabel()}
        ${this.renderHelpText()}
        <slot></slot>
      </div>
    `;
  }

  public static override styles: Array<CSSResult> = [...FormfieldWrapper.styles, ...styles];
}

export default FormfieldGroup;
