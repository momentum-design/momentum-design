import { CSSResult, html, nothing } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import { TYPE, VALID_TEXT_TAGS } from '../text/text.constants';
import { TabIndexMixin } from '../../utils/mixins/TabIndexMixin';
import { ROLE } from '../../utils/roles';
import { KEYS } from '../../utils/keys';
import providerUtils from '../../utils/provider';
import Stepper from '../stepper/stepper.component';

import styles from './stepperitem.styles';
import { DEFAULT, STATUS, STATUS_ICON } from './stepperitem.constants';
import type { StatusType, VariantType } from './stepperitem.types';

/**
 * stepperitem component is used to represent a single step in a stepper component. It is used within a `mdc-stepper` component to indicate the current step in a process.
 * It can have different statuses such as `completed`, `current`, `incomplete`, `error-current`, and `error-incomplete`.
 * The component supports various visual styles and can be customized with labels, help text, and step numbers.
 *
 * This is an uncontrolled component, meaning it does not manage its own state. Instead, it relies on the consumer's to manage the state of each step.
 * Make sure to set `aria-current="step"` on the current stepper item. It is applicable only when status is `current` or `error-current`. This ensures accessibility for the stepper component. Only one stepper item should have this attribute at a time.
 *
 * Additionally, make use of `aria-label` to provide a descriptive detail about the stepper item, especially for screen readers. If this aria-label is not set, it would read out only the label text and doesn't provide enough context for the user.
 *
 * @dependency mdc-icon
 * @dependency mdc-text
 *
 * @tagname mdc-stepperitem
 *
 * @event click - (React: onClick) This event is dispatched when the stepperitem is clicked.
 * @event keydown - (React: onKeyDown) This event is dispatched when a key is pressed down on the stepperitem.
 * @event keyup - (React: onKeyUp) This event is dispatched when a key is released on the stepperitem.
 *
 * @csspart status-container - The container for the status icon or step number.
 * @csspart label-container - The container for the label and help text.
 * @csspart help-text-container - The container for the help text and error icon when applicable.
 * @csspart status-icon - The icon representing the status of the stepper item.
 * @csspart step-number - The text representing the step number.
 * @csspart label - The text representing the label of the stepper item.
 * @csspart help-text - The text providing additional information about the stepper item.
 * @csspart help-icon - The icon representing an error in the stepper item.
 *
 * @cssproperty --mdc-stepperitem-status-container-background - The background color of the status container.
 * @cssproperty --mdc-stepperitem-status-container-border-color - The border color of the status container.
 * @cssproperty --mdc-stepperitem-label-color - The color of the label text.
 * @cssproperty --mdc-stepperitem-help-text-color - The color of the optional label text.
 * @cssproperty --mdc-stepperitem-label-container-background - The background color of the label container.
 */
class StepperItem extends TabIndexMixin(Component) {
  /**
   * The variant of the stepper item, which can be `inline` or `stacked`.
   * @default 'inline'
   */
  @property({ type: String, reflect: true })
  variant: VariantType = DEFAULT.VARIANT;

  /**
   * The status of the stepper item, which can be `completed`, `current`, `not-started`, `error-current`, or `error-incomplete`.
   * @default 'not-started'
   */
  @property({ type: String, reflect: true })
  status: StatusType = DEFAULT.STATUS;

  /**
   * The label for the stepper item, which is displayed as the main text of the step.
   * This label is typically used to describe the step or action that the step represents.
   * @default ''
   */
  @property({ type: String, reflect: true })
  label: string = '';

  /**
   * Additional informational text that appears below the label
   * This text is optional and can be used to provide more context or instructions for the step.
   * @default ''
   */
  @property({ type: String, reflect: true, attribute: 'help-text' })
  helpText?: string;

  /**
   * The step number for the stepper item, which is displayed as a numeric indicator of the step's position in the sequence.
   * This is useful for indicating the order of steps in a process.
   * @default ''
   */
  @property({ type: Number, reflect: true, attribute: 'step-number' })
  stepNumber?: number;

  /**
   * @internal
   */
  private readonly stepperContext = providerUtils.consume({ host: this, context: Stepper.Context });

  override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);

    const context = this.stepperContext?.value;
    if (!context || !context.variant) return;
    this.variant = context.variant;
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.LISTITEM;
  }

  constructor() {
    super();
    this.addEventListener('keydown', this.handleKeyDown.bind(this));
    this.addEventListener('keyup', this.handleKeyUp.bind(this));
  }

  /**
   * Handles the keydown event on the stepperitem.
   * If the key is 'Enter' or 'Space', the stepperitem is pressed.
   * If the key is 'Enter', the stepperitem is pressed. The native HTML button works in the same way.
   * If the key is 'Space', the stepperitem's default is prevent to avoid scrolling etc in the host application.
   *
   * @param event - The keyboard event.
   */
  private handleKeyDown(event: KeyboardEvent) {
    if ([KEYS.ENTER, KEYS.SPACE].includes(event.key)) {
      this.classList.add('pressed');
      if (event.key === KEYS.ENTER) {
        this.triggerClickEvent();
      }
      // Prevent default event behavior to avoid scrolling or double-triggering
      event.preventDefault();
    }
  }

  /**
   * Triggers a click event on the stepper item.
   */
  private triggerClickEvent() {
    const clickEvent = new MouseEvent('click', {
      bubbles: true,
      cancelable: true,
      view: window,
    });
    this.dispatchEvent(clickEvent);
  }

  /**
   * Handles the keyup event on the stepperitem.
   * If the key is 'Enter' or 'Space', the stepperitem is clicked.
   * If the key is 'Space', the stepperitem is pressed. The native HTML button works in the same way.
   *
   * @param event - The keyboard event.
   */
  private handleKeyUp(event: KeyboardEvent) {
    if ([KEYS.ENTER, KEYS.SPACE].includes(event.key)) {
      this.classList.remove('pressed');
      if (event.key === KEYS.SPACE) {
        this.triggerClickEvent();
      }
    }
  }

  /**
   * Renders the status icon based on the current status of the stepper item.
   * - If the status is `completed`, it renders a check icon.
   * - If the status is `current` or `error-current`, it renders a pencil icon.
   * - If the status is `not-started` or `error-incomplete`, it renders the step number.
   * - If the status is anything else, it renders nothing.
   * @returns A template literal that renders the status icon based on the current status of the stepper item.
   */
  private renderStatusIcon() {
    if (this.status === STATUS.COMPLETED) {
      return html`<mdc-icon part="status-icon" name=${STATUS_ICON.COMPLETED} length-unit="rem" size="1"></mdc-icon>`;
    }
    if (this.status === STATUS.ERROR_CURRENT || this.status === STATUS.CURRENT) {
      return html`<mdc-icon part="status-icon" name=${STATUS_ICON.PENCIL} length-unit="rem" size="1"></mdc-icon>`;
    }
    if (this.stepNumber && (this.status === STATUS.NOT_STARTED || this.status === STATUS.ERROR_INCOMPLETE)) {
      return html`<mdc-text part="step-number" tagname=${VALID_TEXT_TAGS.SPAN} type=${TYPE.BODY_MIDSIZE_REGULAR}
        >${this.stepNumber}</mdc-text
      >`;
    }

    return nothing;
  }

  /**
   * Renders the help text for the stepper item.
   * If the `helpText` property is not set, it returns nothing.
   * @returns A template literal that renders the help text for the stepper item.
   */
  private renderHelpText() {
    if (!this.helpText) {
      return nothing;
    }
    const helpTextContent = html`<mdc-text
      part="help-text"
      tagname=${VALID_TEXT_TAGS.SPAN}
      type=${TYPE.BODY_MIDSIZE_REGULAR}
      >${this.helpText}</mdc-text
    >`;

    if (this.status === STATUS.ERROR_INCOMPLETE || this.status === STATUS.ERROR_CURRENT) {
      return html`<div part="help-text-container">
        <mdc-icon part="help-icon" name=${STATUS_ICON.ERROR} length-unit="rem" size="1"></mdc-icon>
        ${helpTextContent}
      </div>`;
    }
    return helpTextContent;
  }

  public override render() {
    return html` <div part="status-container">${this.renderStatusIcon()}</div>
      <div part="label-container">
        ${this.label
          ? html`<mdc-text part="label" tagname=${VALID_TEXT_TAGS.SPAN} type=${TYPE.BODY_MIDSIZE_REGULAR}
              >${this.label}</mdc-text
            >`
          : nothing}
        ${this.renderHelpText()}
      </div>`;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StepperItem;
