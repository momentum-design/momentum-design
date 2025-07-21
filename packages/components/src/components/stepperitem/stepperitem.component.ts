import { CSSResult, html, nothing, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { ROLE } from '../../utils/roles';

import styles from './stepperitem.styles';
import { DEFAULT, STATUS, STATUS_ICON } from './stepperitem.constants';
import type { StatusType, VariantType } from './stepperitem.types';

/**
 * stepperitem component, which ...
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-stepperitem
 *
 * @event focus - (React: onFocus) Triggered when the stepper item receives focus.
 *
 * @cssproperty --mdc-stepperitem-status-container-background - The background color of the status container.
 * @cssproperty --mdc-stepperitem-label-color - The color of the label text.
 * @cssproperty --mdc-stepperitem-optional-label-color - The color of the optional label text.
 * @cssproperty --mdc-stepperitem-step-number-color - The color of the step number text.
 */
class StepperItem extends TabIndexMixin(Component) {
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

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.LISTITEM;
  }

  constructor() {
    super();
    this.addEventListener('keydown', (event: KeyboardEvent) => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        this.dispatchEvent(new FocusEvent('focus', { bubbles: true, composed: true }));
      }
    });
  }

  private updateStatus(status: StatusType) {
    this.tabIndex = status === STATUS.ERROR_INCOMPLETE ? -1 : 0;
    this.ariaDisabled = `${status === STATUS.ERROR_INCOMPLETE}`;
    if (status === STATUS.CURRENT) {
      this.setAttribute('aria-current', 'step');
    } else {
      this.removeAttribute('aria-current');
    }
  }

  protected override updated(changedProperties: PropertyValueMap<StepperItem>): void {
    super.updated(changedProperties);
    if (changedProperties.has('status')) {
      this.updateStatus(this.status);
    }
  }

  private renderStatusIcon() {
    if (this.status === STATUS.COMPLETED || this.status === STATUS.ERROR_CURRENT) {
      const iconName = this.status === STATUS.COMPLETED ? STATUS_ICON.COMPLETED : STATUS_ICON.ERROR;
      return html`<mdc-icon part="status-icon" name=${iconName} length-unit="rem" size="1"></mdc-icon>`;
    }

    if (this.stepNumber) {
      return html`<mdc-text part="step-number" tagname=${VALID_TEXT_TAGS.SPAN} type=${TYPE.BODY_MIDSIZE_REGULAR}
        >${this.stepNumber}</mdc-text
      >`;
    }

    return nothing;
  }

  private renderOptionalLabel() {
    if (!this.optionalLabel) {
      return nothing;
    }
    const content = this.status === STATUS.ERROR_CURRENT ? this.optionalLabel : `(${this.optionalLabel})`;
    return html`<mdc-text part="optional-label" tagname=${VALID_TEXT_TAGS.SPAN} type=${TYPE.BODY_MIDSIZE_REGULAR}
      >${content}</mdc-text
    >`;
  }

  public override render() {
    return html` <div part="status-container">${this.renderStatusIcon()}</div>
      <div part="label-container">
        ${this.label
          ? html`<mdc-text part="label" tagname=${VALID_TEXT_TAGS.SPAN} type=${TYPE.BODY_MIDSIZE_REGULAR}
              >${this.label}</mdc-text
            >`
          : nothing}
        ${this.renderOptionalLabel()}
      </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StepperItem;
