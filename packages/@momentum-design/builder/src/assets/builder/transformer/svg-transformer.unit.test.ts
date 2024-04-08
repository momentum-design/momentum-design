import Svgo from 'svgo';
import type { Formats, OptimizedSVGFormat } from '../types';
import SVGTransformer from './svg-transformer';
import Transformer from './transformer';
import { mockSVG } from '../../../test/fixtures/svg-transformer.fixtures';

describe('@momentum-design/builder - SVG Transformer', () => {
  let transformer: SVGTransformer;
  let svgoSpy: jest.SpyInstance;
  const DIST_PATH = 'MySvg';
  const SRC_PATH = 'svg';
  const DESTINATION = 'dist';
  const FORMAT: Formats = {
    config: { }, type: 'OPTIMIZED_SVG',
  } as OptimizedSVGFormat;

  beforeEach(() => {
    transformer = new SVGTransformer(FORMAT, DESTINATION);
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => { });
  });

  describe('constructor()', () => {
    it('should extend Builder', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });

    it('should mount the format provided to the class object', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe(DESTINATION);
    });
  });

  describe('optimize', () => {
    beforeEach(() => {
      svgoSpy = jest.spyOn(Svgo, 'optimize');
    });
    afterEach(() => {
      svgoSpy.mockRestore();
    });

    it('checks optimize function and optimize(svgoOptimize) function of svgo library called correctly', () => {
      const optimizeSpy = jest.spyOn(transformer, 'optimize');
      const result = transformer.optimize({ distPath: DIST_PATH, srcPath: SRC_PATH, data: mockSVG });
      expect(optimizeSpy).toBeCalledTimes(1);
      expect(result).toEqual({ distPath: DIST_PATH, srcPath: SRC_PATH, data: expect.any(String) });

      expect(svgoSpy).toBeCalled();
    });

    it('return same file in case of error in svgo library', () => {
      const result = transformer.optimize({ distPath: DIST_PATH, srcPath: SRC_PATH, data: 'incorrect data' });
      expect(svgoSpy).toBeCalled();
      expect(result).toEqual({ distPath: DIST_PATH, srcPath: SRC_PATH, data: 'incorrect data' });
    });
  });

  describe('transformFilesSync', () => {
    it('checks transformFilesSync function called correctly and return optimize data', () => {
      transformer.inputFiles = [{ distPath: DIST_PATH, srcPath: SRC_PATH, data: mockSVG }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toBeCalledTimes(1);
      expect(transformer.outputFiles?.[0].data.length).toBeLessThanOrEqual(transformer.inputFiles?.[0].data.length);
    });

    it('checks optimize(svgoOptimize) function of svgo library called and return data for each Files', () => {
      const filesArray = [
        { distPath: DIST_PATH, srcPath: SRC_PATH, data: mockSVG },
        { distPath: DIST_PATH, srcPath: SRC_PATH, data: mockSVG },
      ];
      transformer.inputFiles = filesArray;
      svgoSpy = jest.spyOn(Svgo, 'optimize');
      transformer.transformFilesSync();
      expect(svgoSpy).toBeCalledTimes(2);
      expect(transformer.outputFiles).toHaveLength(2);
    });

    it('return same file in case of error in svgo library', () => {
      transformer.inputFiles = [{ distPath: DIST_PATH, srcPath: SRC_PATH, data: 'incorrect data' }];
      transformer.transformFilesSync();
      expect(transformer.outputFiles).toEqual([{ distPath: DIST_PATH, srcPath: SRC_PATH, data: 'incorrect data' }]);
    });
  });
});
