import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';
import styles from './stepperitem.styles';
import { Component } from '../../models';
import { DEFAULT, STATUS, STATUS_ICON } from './stepperitem.constants';
import { StatusType, VariantType } from './stepperitem.types';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';

/**
 * stepperitem component, which ...
 *
 * @tagname mdc-stepperitem
 *
 * @slot default - This is a default/unnamed slot
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class StepperItem extends Component {
  @property({ type: String, reflect: true })
  variant: VariantType = DEFAULT.VARIANT;

  @property({ type: String, reflect: true })
  status: StatusType = DEFAULT.STATUS;

  /**
   * Additional informational text that appears below the primary label
   * When status is "error", this property should contain the error message
   */
  @property({ type: String, reflect: true, attribute: 'optional-label' })
  optionalLabel?: string;

  @property({ type: String, reflect: true })
  label: string = '';

  @property({ type: String, reflect: true, attribute: 'step-number' })
  stepNumber?: string;

  private renderStatusIcon() {
    if (this.status === STATUS.COMPLETED || this.status === STATUS.ERROR) {
      const iconName = this.status === STATUS.COMPLETED ? STATUS_ICON.COMPLETED : STATUS_ICON.ERROR;
      return html`<mdc-icon part="status-icon" name=${iconName}
      length-unit="rem" size="1"></mdc-icon>`;
    }

    if (this.stepNumber) {
      return html`<mdc-text part="step-number" 
      tagname=${VALID_TEXT_TAGS.SPAN} 
      type=${TYPE.BODY_MIDSIZE_REGULAR}>${this.stepNumber}</mdc-text>`;
    }

    return nothing;
  }

  private renderOptionalLabel() {
    if (this.optionalLabel && this.status !== STATUS.ERROR) {
      return html`<mdc-text 
        part="optional-label"
        tagname=${VALID_TEXT_TAGS.SPAN} 
        type=${TYPE.BODY_MIDSIZE_REGULAR}>(${this.optionalLabel})</mdc-text>`;
    }
    if (this.optionalLabel && this.status === STATUS.ERROR) {
      return html`<mdc-text 
        part="error-message"
        tagname=${VALID_TEXT_TAGS.SPAN} 
        type=${TYPE.BODY_MIDSIZE_REGULAR}>${this.optionalLabel}</mdc-text>`;
    }
    return nothing;
  }

  public override render() {
    return html`
      <div part="status-container">
        ${this.renderStatusIcon()}
      </div>
      <div part="label-container">
        ${this.label ? html`<mdc-text 
        part="label"
        tagname=${VALID_TEXT_TAGS.SPAN} 
        type=${TYPE.BODY_MIDSIZE_REGULAR}>${this.label}</mdc-text>`
    : nothing}
      ${this.renderOptionalLabel()}
      </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StepperItem;
