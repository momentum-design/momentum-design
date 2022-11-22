/**
 * Core configuration Object for Builder.
 *
 * @beta
 */
export interface Config {
  /**
   * Path to the configuration definition for this Builder.
   */
  definitionPath: string;

  [key: string]: any;
}
