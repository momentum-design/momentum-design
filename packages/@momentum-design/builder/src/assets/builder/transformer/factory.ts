import CONSTANTS from '../constants';
import type { Formats } from '../types';
import SVGFontTransformer from './svg-font-transformer';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';
import TTFTransformer from './ttf-transformer';

type Transformers = Transformer | SVGTransformer;

/**
 * Factory Pattern
 *
 * This allows creating a Transformer dynamically, based on the passed in type
 */
function createTransformer(format: Formats, destination: string): Transformers {
  switch (format.type) {
    case CONSTANTS.FORMATS.OPTIMISED_SVG:
      return new SVGTransformer(format, destination);
    case CONSTANTS.FORMATS.SVG_FONT:
      return new SVGFontTransformer(format, destination);
    case CONSTANTS.FORMATS.TTF:
      return new TTFTransformer(format, destination);
    default:
      return new Transformer(format, destination);
  }
}

export { createTransformer };
