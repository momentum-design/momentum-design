import CONSTANTS from '../constants';
import type { Formats } from '../types';
import SVGFontTransformer from './svg-font-transformer';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';
import TTFTransformer from './ttf-transformer';
import WOFFTransformer from './woff-transformer';
import WOFF2Transformer from './woff2-transformer';

type Transformers =
  | Transformer
  | SVGTransformer
  | SVGFontTransformer
  | TTFTransformer
  | WOFFTransformer
  | WOFF2Transformer;

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
    case CONSTANTS.FORMATS.WOFF:
      return new WOFFTransformer(format, destination);
    case CONSTANTS.FORMATS.WOFF2:
      return new WOFF2Transformer(format, destination);
    default:
      return new Transformer(format, destination);
  }
}

export { createTransformer };
