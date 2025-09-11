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
 * @tagname mdc-controltypeprovider
 *
 */
class ControlTypeProvider extends Provider<ControlTypeProviderContext> {
  constructor() {
    // initialise the context by running the Provider constructor:
    super({
      context: ControlTypeProviderContext.context,
      initialValue: new ControlTypeProviderContext(),
    });
  }

  /**
   * Context object of the ControlTypeProvider, to be consumed by child components
   */
  public static get Context() {
    return ControlTypeProviderContext.context;
  }

  @property({ type: String, attribute: 'control-type' })
  controlType?: ControlType;

  protected override updateContext(): void {
    if (this.context.value.controlType !== this.controlType) {
      this.context.value.controlType = this.controlType;

      this.context.updateObservers();
    }
  }
}

export default ControlTypeProvider;
