import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import ControlTypeProviderContext from './controltypeprovider.context';
import type { ControlType } from './controltypeprovider.types';
import { DEFAULTS, VALID_VALUES } from './controltypeprovider.constants';

/**
 * ContolTypeProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * attribute 'control-type' sets the default control type for all consumers
    - 'controlled' the consumer component will not handle any interaction itself, e.g. toggling a checkbox.
    - 'uncontrolled' the consumer component will handle interactions
 *
 * ControlTypeMixin allows components to consume this context
 * note that this is intended to be set once, ControlTypeMixin will not update on changes to control-type
 *
 * @tagname mdc-controltypeprovider
 *
 */
class ControlTypeProvider extends Provider<ControlType> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: ControlTypeProviderContext,
    });
  }

  /**
   * Context object of the ControlTypeProvider, to be consumed by child components
   */
  public static get Context() {
    return ControlTypeProviderContext;
  }

  private innerControlType: ControlType = DEFAULTS.CONTROL_TYPE;

  /**
   * Whether the control type is 'controlled' or 'uncontrolled'
   * @default 'uncontrolled'
   */
  @property({ type: String, attribute: 'control-type', reflect: true })
  set controlType(value: ControlType) {
    if (VALID_VALUES.includes(value)) {
      this.innerControlType = value as ControlType;
    }
  }

  get controlType() {
    return this.innerControlType;
  }

  protected override updateContext(): void {
    if (this.context.value !== this.controlType) {
      this.context.value = this.controlType;

      this.context.updateObservers();
    }
  }
}

export default ControlTypeProvider;
