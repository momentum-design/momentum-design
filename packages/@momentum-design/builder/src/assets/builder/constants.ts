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
  TTF: 'TTF' as const,
};

// http://en.wikipedia.org/wiki/Private_Use_(Unicode)
const START_CODEPOINT = 0xf101;

const CONSTANTS = {
  ...Builder.CONSTANTS,
  FORMATS,
  PACKAGE,
  TYPE,
  START_CODEPOINT,
};

export default CONSTANTS;
