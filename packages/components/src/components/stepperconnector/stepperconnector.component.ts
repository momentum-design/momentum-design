import type { CSSResult } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import providerUtils from '../../utils/provider';
import Stepper from '../stepper/stepper.component';

import { DEFAULTS } from './stepperconnector.constants';
import styles from './stepperconnector.styles';
import type { OrientationType, StatusType } from './stepperconnector.types';

/**
 * StepperConnector component visually represents the connection between two stepper items.
 * Indicates whether the connection is complete or incomplete, and supports vertical or horizontal orientation.
 * They are used between 2 `mdc-stepperitem` components to visually connect them and wrapped in a `mdc-stepper` component.
 *
 * @tagname mdc-stepperconnector
 *
 * @csspart connector - The main connector line between steps
 *
 * @cssproperty --mdc-stepperconnector-complete-background - Background color for the complete connector
 * @cssproperty --mdc-stepperconnector-incomplete-background - Background color for the incomplete connector
 */
class StepperConnector extends Component {
  /**
   * The status of the connector (complete or incomplete)
   * @default "incomplete"
   */
  @property({ type: String, reflect: true }) status: StatusType = DEFAULTS.STATUS;

  /**
   * The orientation of the connector (vertical or horizontal)
   * @default "horizontal"
   */
  @property({ type: String, reflect: true }) orientation: OrientationType = DEFAULTS.ORIENTATION;

  /**
   * @internal
   */
  private readonly stepperContext = providerUtils.consume({ host: this, context: Stepper.Context });

  override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);

    const context = this.stepperContext?.value;
    if (!context || !context.orientation) return;
    this.orientation = context.orientation;
  }

  public override render() {
    return html` <div part="connector"></div> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default StepperConnector;
