import { CSSResult, html } from 'lit';
import { property, queryAssignedElements } from 'lit/decorators.js';
import styles from './stepper.styles';
import { Component } from '../../models';
import { DEFAULT } from './stepper.constants';
import type { OrientationType, StatusType } from './stepper.types';

/**
 * stepper component, which ...
 *
 * @tagname mdc-stepper
 *
 * @slot default - Pass the list of mdc-stepperitem elements to be rendered inside the stepper.
 *
 * @event click - (React: onClick) This event is a Click Event, update the description
 *
 * @cssproperty --custom-property-name - Description of the CSS custom property
 */
class Stepper extends Component {
    @property({ type: String, reflect: true })
    orientation: OrientationType = DEFAULT.ORIENTATION;

    @property({ type: String, reflect: true })
    status: StatusType = DEFAULT.STATUS;

    @queryAssignedElements({ })
    private stepperItems!: Array<HTMLElement>;

    private handleSlotChange() {
      // Ensure that only mdc-stepperitem elements are present in the slot
      // If any other elements are present, remove them
      this.stepperItems?.forEach((item) => {
        if (!item.matches('mdc-stepperitem')) {
          this.remove();
        }
      });
    }

    public override render() {
      return html`<slot @slotchange=${this.handleSlotChange}></slot>`;
    }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Stepper;
