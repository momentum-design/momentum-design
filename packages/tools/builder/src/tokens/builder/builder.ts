import { Builder as CoreBuilder } from '../../models';

import CONSTANTS from './constants';
import { Config } from './types';

/**
 * The tokens Builder class.
 *
 * @alpha
 */
class Builder extends CoreBuilder {
  /**
   * Construct a new tokens Builder.
   *
   * @remarks
   * This method has not been fully implemented.
   *
   * @param config - Configuration Object to be mounted to this Builder.
   */
  public constructor(config: Config) {
    super({ ...config, type: 'tokens' });
  }

  /**
   * Initialize this tokens Builder.
   *
   * @remarks
   * This method has not been fully implemented.
   *
   * @returns - This tokens Builder after executing this method.
   */
  public override initialize(): Promise<this> {
    return Promise.resolve(this);
  }

  /**
   * Process this tokens Builder.
   *
   * @remarks
   * This method has not been fully implemented.
   *
   * @returns - This tokens Builder after executing thsi method.
   */
  public override process(): Promise<this> {
    return Promise.resolve(this);
  }

  /**
   * Constants associated with this Builder.
   */
  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  /**
   * Type of this Builder.
   */
  public static override get type(): string {
    return Builder.CONSTANTS.TYPE;
  }
}

export default Builder;
