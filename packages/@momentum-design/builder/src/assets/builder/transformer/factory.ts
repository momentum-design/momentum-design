import CONSTANTS from '../constants';
import type { Formats } from '../types';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';

type Transformers = Transformer | SVGTransformer;

const transformerFactory = {
  createTransformer(format: Formats): Transformers {
    switch (format.type) {
      case CONSTANTS.FORMATS.OPTIMISED_SVG:
        return new SVGTransformer(format);
      default:
        return new Transformer(format);
    }
  },
};

export { transformerFactory };
