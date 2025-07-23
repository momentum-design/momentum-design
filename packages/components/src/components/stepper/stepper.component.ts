import { CSSResult, html, PropertyValueMap } from 'lit';
import { property } from 'lit/decorators.js';

import { Component, Provider } from '../../models';
import type { OrientationType } from '../connector/connector.types';
import type { VariantType } from '../stepperitem/stepperitem.types';

import { DEFAULTS } from './stepper.constants';
import StepperContext from './stepper.context';
import styles from './stepper.styles';

/**
 * stepper component, which orchestrates stepperitem and connector components, is a wrapper for the stepper functionality.
 * It provides the context for the stepper items and connectors, allowing them to adapt to the stepper's orientation and variant.
 *
 * @tagname mdc-stepper
 *
 * @slot default - Pass the list of mdc-stepperitem and mdc-connector elements to be rendered inside the stepper.
 *
 */
class Stepper extends Provider<StepperContext> {
  constructor() {
    super({
      context: StepperContext.context,
      initialValue: new StepperContext(DEFAULTS.ORIENTATION, DEFAULTS.VARIANT),
    });
  }

  /**
   * Get the context for the stepper component.
   * This context provides the orientation and variant for the stepper items and connectors.
   */
  public static get Context() {
    return StepperContext.context;
  }

  /**
   * The orientation of the connector (vertical or horizontal)
   * @default "horizontal"
   */
  @property({ type: String, reflect: true })
  orientation: OrientationType = DEFAULTS.ORIENTATION;

  /**
   * The variant of the stepper item, which can be `inline` or `stacked`.
   * @default 'inline'
   */
  @property({ type: String, reflect: true })
  variant: VariantType = DEFAULTS.VARIANT;

  protected override updated(changedProperties: PropertyValueMap<Stepper>): void {
    if (changedProperties.has('orientation') || changedProperties.has('variant')) {
      this.updateContext();
    }
  }

  /**
   * Update all observing components of this
   * provider to update the values
   *
   * Is called on every re-render, see Provider class
   */
  protected updateContext(): void {
    if (this.context.value.variant !== this.variant || this.context.value.orientation !== this.orientation) {
      this.context.value.variant = this.variant;
      this.context.value.orientation = this.orientation;
      this.context.updateObservers();
    }
  }

  private handleSlotChange = (event: Event) => {
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
