import Builder from '../builder';
import type { BuilderConfig } from '../builder';

import CONSTANTS from './constants';
import type { Config, Data } from './types';

/**
 * The Builders class to manage a collection of provided builders.
 *
 * @beta
 */
class Builders extends Builder {
  /**
   * Dynamic data stored on this Builder.
   */
  public data: Data;

  /**
   * Construct a new Builders.
   *
   * @param config - Configuration Object to be mounted to this Builder.
   */
  public constructor(config: Config) {
    const { builders, ...other } = config;
    super({ ...other, type: Builders.CONSTANTS.TYPE });

    this.config.builders = builders;

    this.data = {
      builders: [],
    };
  }

  /**
   * Builders associated with this Builders
   */
  public get builders(): Array<Builder> {
    return [...this.data.builders];
  }

  /**
   * Generate Builder class Objects based on the current list of Builder
   * constructors within `this.config.defintions`.
   *
   * @remarks
   * This method requires an Array of fully qualified Builder class constructors
   * to be availabile within the `this.config.definitions` value. Note that this
   * method does not initialize the Builder Objects, and leaves this for a later
   * functional call from `this.initialize()`.
   *
   * @returns - This Builders after executing thsi method.
   */
  public generateBuilders(): this {
    const { builders, definitions } = this.config;

    this.data.builders = definitions.reduce((results: Array<Builder>, definition: BuilderConfig) => {
      const BuilderConstructor = builders.find(
        (builder: typeof Builder) => builder.type === definition.type,
      );

      if (BuilderConstructor) {
        results.push(
          new BuilderConstructor(definition),
        );
      }

      return results;
    }, [] as Array<Builder>);

    return this;
  }

  /**
   * Initialize this Builder.
   *
   * @remarks
   * This method calls `this.generateBuilders()` in order to construct Builder
   * class Objects within its scope. After all Builder class Objects are
   * generated, it attempts to initialize all Builder class Objects before
   * resolving to this Builders class Object.
   *
   * @returns - This Builder after executing this method.
   */
  public override initialize(): Promise<this> {
    this.generateBuilders();

    return Promise.all(this.data.builders.map((builder) => builder.initialize()))
      .then(() => this);
  }

  /**
   * Process this Builder.
   *
   * @remarks
   * This method attemps to run the initialize method of all child Builder class
   * Objects associated with this Builders class Object.
   *
   * @returns - This Buidler after executing this method.
   */
  public override process(): Promise<this> {
    return Promise.all(this.data.builders.map((builder) => builder.process()))
      .then(() => this);
  }

  /**
   * Final methods of this Builder.
   *
   * @remarks
   * This method attemps to run the final method of all child Builder class
   * Objects associated with this Builders class Object.
   *
   * @returns - This Buidler after executing this method.
   */
  public override final(): Promise<this> {
    return Promise.all(this.data.builders.map((builder) => builder.final()))
      .then(() => this);
  }

  /**
   * Constants associated with this Builders class.
   */
  public static override get CONSTANTS(): typeof CONSTANTS {
    return structuredClone(CONSTANTS);
  }

  /**
   * Type of this Builders class.
   */
  public static override get type(): string {
    return CONSTANTS.TYPE;
  }
}

export default Builders;
