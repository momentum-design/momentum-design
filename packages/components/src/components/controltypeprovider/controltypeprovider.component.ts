import { property } from 'lit/decorators.js';

import { Provider } from '../../models';

import ControlTypeProviderContext from './controltypeprovider.context';
import type { ControlType } from './controltypeprovider.types';
import { DEFAULTS, VALID_VALUES } from './controltypeprovider.constants';

/**
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
