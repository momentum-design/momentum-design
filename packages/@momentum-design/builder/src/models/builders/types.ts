import Builder from '../builder';
import type { BuilderConfig } from '../builder';

/**
 * Configuration Object for the Builders class.
 *
 *@beta
 */
export interface Config extends BuilderConfig {
  /**
   * Array of Builder class constructors to be used by this Builders class
   * Object.
   */
  builders: Array<typeof Builder>;

  /**
   * Array of Builder class constructor configuration objects.
   *
   * @remarks
   * This type will be moved to a global type used to specify the configuration
   * for the CLI tooling associated with this package.
   */
  definitions?: Array<BuilderConfig>;
}

/**
 * Dynamic data Object for the Builders class.
 *
 * @beta
 */
export interface Data {
  /**
   * Array of Builder class Objects associated with the constructed Builders
   * class Object.
   */
  builders: Array<Builder>;
}
