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

  describe('1st - testing optimize function', () => {
    it('optimize function from svgo mockReturnValue', () => {
      const optimizeSVGOSpy = jest.spyOn(transformer, 'optimize');
      transformer.optimize({ distPath: 'font', srcPath: 'font', data: mockSVGFontBuffer });
      expect(optimizeSVGOSpy).toBeCalledTimes(1);
      const mockedoptimizeSVGOData = jest.fn().mockReturnValue('Mocked data');
      expect(mockedoptimizeSVGOData()).toBe('Mocked data');
    });
  });
  describe('2nd - testing optimize function ', () => {
    it('returns the correct result after calling optimize function', () => {
      const svgoOptimizeSpy = jest.spyOn(transformer, 'optimize');
      const result = transformer.optimize({ distPath: 'font', srcPath: 'font', data: 'testing data' });
      expect(svgoOptimizeSpy).toBeCalledTimes(1);
      expect(result).toEqual({ distPath: 'font', srcPath: 'font', data: 'testing data' });
    });
  });

  describe('3rd - testing optimize transformFilesSync svg-transformer', () => {
    it('tests  the transformer.outputFiles correctly ', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const svgoOptimizeSpy = jest.spyOn(transformer, 'optimize');
      svgoOptimizeSpy.mockReturnValue({ distPath: 'font', srcPath: 'font', data: 'testing data' });
      expect(transformer.outputFiles).toEqual(undefined);
      transformer.transformFilesSync();
      expect(svgoOptimizeSpy).toBeCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        { distPath: 'font', srcPath: 'font', data: 'testing data' },
      ]);
    });
  });

  describe('4th testing transformFilesSync svg-transformer', () => {
    it('should mock the transformFilesSync function and track its usage', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'MyFont', data: 'test-svgPublic' }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        { distPath: FONT_NAME, srcPath: 'font', data: 'test-svgPublic' },
      ]);
      expect(transformer.outputFiles).toEqual([
        {
          data: 'test-svgPublic',
          distPath: FONT_NAME,
          srcPath: 'font',
        },
      ]);
    });
  });
});
