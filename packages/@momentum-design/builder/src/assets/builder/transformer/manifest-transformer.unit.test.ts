import type { Formats } from '../types';
import ManifestTransformer from './manifest-transformer';
import Transformer from './transformer';

describe('@momentum-design/builder - Manifest-Transformer', () => {
  let transformer: ManifestTransformer;
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fontName: FONT_NAME }, type: 'SVG_FONT' };

  beforeEach(() => {
    transformer = new ManifestTransformer(FORMAT, '/dist');
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
