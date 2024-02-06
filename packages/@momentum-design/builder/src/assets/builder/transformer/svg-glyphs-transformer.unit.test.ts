import type { Formats } from '../types';
import SvgGlyphsTransformer from './svg-glyphs-transformer';
import Transformer from './transformer';

describe('@momentum-design/builder - SVG Font Transformer', () => {
  let transformer: SvgGlyphsTransformer;
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fileName: FONT_NAME }, type: 'SVG_GLYPHS' };
  beforeEach(() => {
    transformer = new SvgGlyphsTransformer(FORMAT, '/dist');
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => {});
  });

  describe('constructor()', () => {
    it('should extend Builder', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });

    it('should mount the format provided to the class object', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe('/dist');
    });
  });
});
