import CONSTANTS from '../constants';
import type { Formats } from '../types';
import SVGFontTransformer from './svg-font-transformer';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';

type Transformers = Transformer | SVGTransformer;

/**
 * Factory Pattern
 *
 * This allows creating a Transformer dynamically, based on the passed in type
 */
function createTransformer(format: Formats): Transformers {
  switch (format.type) {
    case CONSTANTS.FORMATS.OPTIMISED_SVG:
      return new SVGTransformer(format);
    case CONSTANTS.FORMATS.SVG_FONT:
      return new SVGFontTransformer(format);
    default:
      return new Transformer(format);
  }
}

export { createTransformer };
