import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';

import { DEFAULTS } from './connector.constants';
import styles from './connector.styles';
import type { OrientationType, StatusType } from './connector.types';

/**
 * Connector component visually represents the connection between two stepper items.
 * Indicates whether the connection is complete or incomplete, and supports vertical or horizontal orientation.
 * They are used between 2 `mdc-stepperitem` components to visually connect them and wrapped in a `mdc-stepper` component.
 *
 * @tagname mdc-connector
 *
 * @csspart connector - The main connector line between steps
 *
 * @cssproperty --mdc-connector-complete-bg - Background color for the complete connector
 * @cssproperty --mdc-connector-incomplete-bg - Background color for the incomplete connector
 *
 * status: The status of the connector ("complete" or "incomplete")
 * orientation: The orientation of the connector ("vertical" or "horizontal")
 */
class Connector extends Component {
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

  override updated(changedProperties: Map<string, unknown>): void {
    super.updated(changedProperties);
    if (changedProperties.has('orientation')) {
      this.ariaOrientation = this.orientation;
    }
  }

  public override render() {
    return html` <div part="connector"></div> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Connector;
