import type { Formats, SwiftFormat } from '../types';
import Transformer from './transformer';
import SwiftTransformer from './swift-transformer';

describe('@momentum-design/builder - swift Transformer', () => {
  let transformer: SwiftTransformer;
  const FORMAT: Formats = { config: { fileName: 'MyFont', hbsPath: '' }, type: 'SWIFT' } as unknown as SwiftFormat;
  beforeEach(() => {
    transformer = new SwiftTransformer(FORMAT, '/dist');
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
