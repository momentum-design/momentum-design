import { Builder } from '../../models';

/**
 * Package name
 */
const PACKAGE = 'builder';

/**
 * Type of this Builder.
 */
const TYPE: string = 'assets';

/**
 * Supported Formats
 */
const FORMATS = {
  OPTIMISED_SVG: 'OPTIMIZED_SVG' as const,
  CSS: 'CSS' as const,
  SVG_FONT: 'SVG_FONT' as const,
};

const CONSTANTS = {
  ...Builder.CONSTANTS,
  FORMATS,
  PACKAGE,
  TYPE,
};

export default CONSTANTS;
