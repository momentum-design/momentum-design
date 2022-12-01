import { Builder } from '../../models';

/**
 * Type of this Builder.
 */
const TYPE: string = 'assets';

const FORMATS = {
  OPTIMISED_SVG: 'OPTIMIZED_SVG' as const,
  CSS: 'CSS' as const,
};

const CONSTANTS = {
  ...Builder.CONSTANTS,
  FORMATS,
  TYPE,
};

export default CONSTANTS;
