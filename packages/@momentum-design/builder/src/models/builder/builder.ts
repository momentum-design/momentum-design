import { Json } from '@momentum-design/common';

import CONSTANTS from './constants';
import type { Config } from './types';

/**
 * The Builder class to be extended by scoped Builder classes.
 *
 * @beta
 */
class Builder {
  /**
   * The Configuration definition.
   */
  public config: Config;

  /**
   * Construct a new Builder.
   *
   * @param config - Configuration Object to be mounted to this Builder.
   */
  public constructor(config: Config) {
    this.config = structuredClone(config);
  }

  /**
   * Initialize this Builder.
   *
   * @remarks
   * This method should be implemented in class definitions that extend this
   * class. The scope of this method is to perform setup flows needed to adjust
   * data prior to writing it to the disk.
   *
   * @virtual
   *
   * @returns - This Builder after executing this method.
   */
  public initialize(): Promise<this> {
    return Promise.reject(new Error(
      'class method "initialize()" for a provided builder has not bee implemented',
    ));
  }

  /**
   * Process this Builder.
   *
   * @remarks
   * This method should be implemented in class definitions that extend this
   * class. The scope of this method is to perform flows needed to output
   * files from this Builder to the disk.
   *
   * @virtual
   *
   * @returns - This Builder after executing this method.
   */
  public process(): Promise<this> {
    return Promise.reject(new Error(
      'class method "initialize()" for a provided builder has not bee implemented',
    ));
  }

  /**
   * The type of this Builder.
   *
   * @virtual
   */
  public get type(): string {
    return this.config.type || Builder.CONSTANTS.UNKNOWN_TYPE;
  }

  /**
   * Build the output data based on the configuration provided to this Builder.
   *
   * @remarks
   * This method triggers the configuration read flow, then the initialize flow
   * then finally the process flow.
   *
   * @returns - This Builder after executing this method.
   */
  public build(): Promise<this> {
    return this.read()
      .then((self) => self.initialize())
      .then((self) => self.process());
  }

  /**
   * Read the file located via the provided `target` and mount the data found
   * within this Builder.
   *
   * @remarks
   * This method attempts to read files on the file system. Note that the target
   * string will be ammended to the process execution path in order to locate
   * the target configuration file. If the target, which aliases to the
   * `config.definitionPath` is undefined, this method exits with the
   * expectation that the configuration object is being mounted at the time
   * this Builder is constructed.
   *
   * @param target - Target path to attempt to read and mount to this Builder.
   * @returns - This Builder after executing this method.
   */
  public read(target: string | undefined = this.config.definitionPath): Promise<this> {
    if (!target) {
      return Promise.resolve(this);
    }

    if (typeof target !== 'string') {
      return Promise.reject(new Error('TODO - path is not a string or object'));
    }

    return Json.read(target)
      .then((config) => {
        this.config = { ...this.config, ...config };

        return this;
      });
  }

  /**
   * Constants associated with this Builder class.
   */
  public static get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  /**
   * Type of this Builder class.
   */
  public static get type(): string {
    return Builder.CONSTANTS.UNKNOWN_TYPE;
  }
}

export default Builder;
