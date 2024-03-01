import path from 'path';
import type { Formats } from '../types';
import ManifestTransformer from './manifest-transformer';
import Transformer from './transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';

describe('@momentum-design/builder - Manifest-Transformer', () => {
  let transformer: ManifestTransformer;
  const DIST_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fileName: DIST_NAME }, type: 'MANIFEST' };

  beforeEach(() => {
    transformer = new ManifestTransformer(FORMAT, '/dist');
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

  describe('transformFilesSync function', () => {
    it('should mock the transformFilesSync function and track its usage', () => {
      transformer.inputFiles = [{ srcPath: '/font/file.svg', distPath: 'font', data: 'testing manifest' }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        {
          data: JSON.stringify(JSON.parse('{"file":".//font/file.svg"}'), null, 2),
          distPath: path.join('/dist', DIST_NAME),
          srcPath: '',
        },
      ]);
    });
    it('should mock the transformFilesSync function and track its usage', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        {
          data: JSON.stringify(JSON.parse('{"font":"./font"}'), null, 2),
          distPath: path.join('/dist', DIST_NAME),
          srcPath: '',
        },
      ]);
    });
  });
});
