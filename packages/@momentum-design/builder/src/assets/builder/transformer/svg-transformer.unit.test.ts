import type { Formats, OptimizedSVGFormat } from '../types';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';

describe('@momentum-design/builder - SVG Font Transformer', () => {
  let transformer: SVGTransformer;
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fontName: 'MyFont' }, type: 'OPTIMIZED_SVG' } as OptimizedSVGFormat;

  beforeEach(() => {
    transformer = new SVGTransformer(FORMAT, '/dist');
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => { });
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

  describe('testing optimize function', () => {
    it('returns the correct result after calling optimize function', () => {
      // const svgoOptimizeSpy = jest.spyOn(transformer, 'optimize');
      // const result = transformer.optimize({ distPath: 'font', srcPath: 'font', data: mockSVGFontBuffer });
      // expect(svgoOptimizeSpy).toBeCalledTimes(1);
      // expect(result).toEqual({ distPath: 'font', srcPath: 'font', data: expect.any(Object) });
    });
    it('tests  the transformer.outputFiles correctly ', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const svgoOptimizeSpy = jest.spyOn(transformer, 'optimize');
      svgoOptimizeSpy.mockReturnValue({ distPath: 'font', srcPath: 'font', data: mockSVGFontBuffer });
      expect(transformer.outputFiles).toEqual(undefined);
      transformer.transformFilesSync();
      expect(svgoOptimizeSpy).toBeCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        { distPath: 'font', srcPath: 'font', data: expect.any(Object) },
      ]);
    });
    it('should mock the transformFilesSync function and track its usage', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'MyFont', data: mockSVGFontBuffer }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      // expect(transformer.outputFiles).toEqual([
      //   { distPath: FONT_NAME, srcPath: 'font', data: expect.any(Object) },
      // ]);
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.any(Object),
          distPath: FONT_NAME,
          srcPath: 'font',
        },
      ]);
    });
  });
});
