import CONSTANTS from '../constants';
import type { Formats } from '../types';
import ManifestTransformer from './manifest-transformer';
import SVGFontTransformer from './svg-font-transformer';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';
import TTFTransformer from './ttf-transformer';
import WOFFTransformer from './woff-transformer';
import WOFF2Transformer from './woff2-transformer';
import SwiftTransformer from './swift-transformer';
import CssTransformer from './css-transformer';
import SvgGlyphsTransformer from './svg-glyphs-transformer';
import TypesTransformer from './types-transformer';
import LitTransformer from './lit-transformer';
import ManifestModuleTransformer from './manifest-js-transformer';
import ImageTransformer from './image-transformer';

type Transformers =
  | Transformer
  | SVGTransformer
  | SVGFontTransformer
  | TTFTransformer
  | WOFFTransformer
  | WOFF2Transformer
  | ManifestTransformer
  | SwiftTransformer
  | CssTransformer
  | SvgGlyphsTransformer
  | TypesTransformer
  | LitTransformer
  | ImageTransformer;

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
    case CONSTANTS.FORMATS.MANIFEST:
      return new ManifestTransformer(format, destination);
    case CONSTANTS.FORMATS.MANIFEST_MODULE:
      return new ManifestModuleTransformer(format, destination);
    case CONSTANTS.FORMATS.SVG_GLYPHS:
      return new SvgGlyphsTransformer(format, destination);
    case CONSTANTS.FORMATS.SWIFT:
      return new SwiftTransformer(format, destination);
    case CONSTANTS.FORMATS.CSS:
      return new CssTransformer(format, destination);
    case CONSTANTS.FORMATS.TYPES:
      return new TypesTransformer(format, destination);
    case CONSTANTS.FORMATS.LIT:
      return new LitTransformer(format, destination);
    case CONSTANTS.FORMATS.IMAGE:
      return new ImageTransformer(format, destination);
    default:
      return new Transformer(format, destination);
  }
}

export { createTransformer };
