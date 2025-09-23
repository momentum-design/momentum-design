import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import ControlTypeProviderContext from './controltypeprovider.context';
import type { ControlType } from './controltypeprovider.types';

/**
 * ContolTypeProvider component, which allows to be consumed from sub components
 * (see `providerUtils.consume` for how to consume)
 *
 * attribute 'control-type' sets the default control type for all consumers
 *
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

  /**
   * Whether the control type is 'controlled' or 'uncontrolled'
   * @default 'uncontrolled'
   */
  @property({ type: String, attribute: 'control-type' })
  controlType: ControlType = 'uncontrolled';

  protected override updateContext(): void {
    if (this.context.value !== this.controlType) {
      this.context.value = this.controlType;

      this.context.updateObservers();
    }
  }
}

export default ControlTypeProvider;
