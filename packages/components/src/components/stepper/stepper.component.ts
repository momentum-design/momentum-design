import type { CSSResult, PropertyValueMap } from 'lit';
import { html } from 'lit';
import { property } from 'lit/decorators.js';

import { Component, Provider } from '../../models';
import { ROLE } from '../../utils/roles';
import type { OrientationType } from '../stepperconnector/stepperconnector.types';
import type { VariantType } from '../stepperitem/stepperitem.types';

import { DEFAULTS } from './stepper.constants';
import StepperContext from './stepper.context';
import styles from './stepper.styles';

/**
 * Stepper component, which orchestrates stepperitem and stepperconnector components, is a wrapper for the stepper functionality.
 * It provides the context for the stepper items and connectors, allowing them to adapt to the stepper's orientation and variant.
 *
 * @tagname mdc-stepper
 *
 * @slot default - Pass the list of `mdc-stepperitem` and `mdc-stepperconnector` elements to be rendered inside the stepper.
 *
 */
class Stepper extends Provider<StepperContext> {
  /**
   * The orientation of the stepperconnector (vertical or horizontal)
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

  constructor() {
    super({
      context: StepperContext.context,
      initialValue: new StepperContext(DEFAULTS.ORIENTATION, DEFAULTS.VARIANT),
    });
  }

  override connectedCallback(): void {
    super.connectedCallback();
    this.role = ROLE.LIST;
  }

  /**
   * Get the context for the stepper component.
   * This context provides the orientation and variant for the stepper items and connectors.
   */
  public static get Context() {
    return StepperContext.context;
  }

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

  public override render() {
    return html` <slot></slot> `;
  }

  public static override styles: Array<CSSResult> = [...Component.styles, ...styles];
}

export default Stepper;
