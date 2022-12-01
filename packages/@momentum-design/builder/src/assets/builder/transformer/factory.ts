import CONSTANTS from '../constants';
import type { Formats } from '../types';
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
    default:
      return new Transformer(format);
  }
}

export { createTransformer };
