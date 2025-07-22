import { CSSResult, html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component } from '../../models';
import type { VariantType } from '../stepperitem/stepperitem.types';

import { DEFAULTS } from './stepper.constants';
import styles from './stepper.styles';

/**
 * stepper component, which orchestrates stepperitem and connector components, is a wrapper for the stepper functionality.
 *
 * @tagname mdc-stepper
 *
 * @slot default - Pass the list of mdc-stepperitem and mdc-connector elements to be rendered inside the stepper.
 *
 */
class Stepper extends Component {
  @property({ type: String, reflect: true })
  variant: VariantType = DEFAULTS.VARIANT;

  private handleSlotChange = (event: Event) => {
    // remove anything that is not a mdc-stepperitem or mdc-connector
    const slot = event.target as HTMLSlotElement;
    const assignedElements = slot.assignedElements({ flatten: true });
    assignedElements.forEach(element => {
      if (element.tagName.toLowerCase() !== 'mdc-stepperitem' && element.tagName.toLowerCase() !== 'mdc-connector') {
        slot.removeChild(element);
      }
    });
  };

  public override render() {
    return html` <slot @slotchange=${this.handleSlotChange}></slot> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Stepper;
