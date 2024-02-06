import type { Formats, OptimizedSVGFormat } from '../types';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';

describe('@momentum-design/builder - SVG Font Transformer', () => {
  let transformer: SVGTransformer;
  // const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fontName: 'MyFont' }, type: 'OPTIMIZED_SVG' } as OptimizedSVGFormat;

  beforeEach(() => {
    transformer = new SVGTransformer(FORMAT, '/dist');
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

  describe('transformFilesSync', () => {
    it('modifies the class properties correctly', async () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const optimizeSpy = jest.spyOn(transformer, 'optimize');
      expect(transformer.outputFiles).toEqual(undefined);
      await transformer.transformFilesSync();
      expect(optimizeSpy).toBeCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.anything(),
          distPath: 'font',
          srcPath: 'font',
        },
      ]);
    });
  });
});
