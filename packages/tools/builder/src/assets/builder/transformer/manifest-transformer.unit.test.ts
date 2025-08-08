import path from 'path';
import type { Formats } from '../types';
import ManifestTransformer from './manifest-transformer';
import Transformer from './transformer';

describe('@momentum-design/builder - ManifestTransformer', () => {
  const DIST_NAME = 'MyFont';

  describe('constructor()', () => {
    const FORMAT: Formats = { config: { fileName: DIST_NAME }, type: 'MANIFEST' };
    let transformer: ManifestTransformer;

    beforeEach(() => {
      transformer = new ManifestTransformer(FORMAT, '/dist');
      // @ts-ignore
      jest.spyOn(transformer.logger, 'debug').mockImplementation(() => {});
    });

    it('should extend Transformer', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });

    it('should mount the format and destination', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe('/dist');
    });
  });

  describe('transformFilesSync()', () => {
    it('should generate manifest with relative paths and default "./" prefix', () => {
      const FORMAT: Formats = { config: { fileName: DIST_NAME }, type: 'MANIFEST' };
      const transformer = new ManifestTransformer(FORMAT, '/dist');

      transformer.inputFiles = [
        { srcPath: '/dist/icons/test-icon.svg', distPath: '', data: 'svg-data' },
      ];

      transformer.transformFilesSync();

      expect(transformer.outputFiles).toEqual([
        {
          srcPath: '',
          distPath: path.join('/dist', DIST_NAME),
          data: JSON.stringify({
            'test-icon': './icons/test-icon.svg',
          }, null, 2),
        },
      ]);
    });

    it('should generate manifest with staticPath prefix if provided', () => {
      const FORMAT: Formats = {
        config: {
          fileName: DIST_NAME,
          staticPath: '/static/assets',
        },
        type: 'MANIFEST',
      };
      const transformer = new ManifestTransformer(FORMAT, '/dist');

      transformer.inputFiles = [
        { srcPath: '/dist/images/logo.svg', distPath: '', data: 'svg-data' },
      ];

      transformer.transformFilesSync();

      expect(transformer.outputFiles).toEqual([
        {
          srcPath: '',
          distPath: path.join('/dist', DIST_NAME),
          data: JSON.stringify({
            logo: '/static/assets/images/logo.svg',
          }, null, 2),
        },
      ]);
    });

    it('should fallback to "unknown" key if filename is missing', () => {
      const FORMAT: Formats = { config: { fileName: DIST_NAME }, type: 'MANIFEST' };
      const transformer = new ManifestTransformer(FORMAT, '/dist');

      transformer.inputFiles = [
        { srcPath: '/dist/', distPath: '', data: 'svg-data' },
      ];

      transformer.transformFilesSync();

      expect(transformer.outputFiles).toEqual([
        {
          srcPath: '',
          distPath: path.join('/dist', DIST_NAME),
          data: JSON.stringify({
            unknown: './',
          }, null, 2),
        },
      ]);
    });
  });
});
