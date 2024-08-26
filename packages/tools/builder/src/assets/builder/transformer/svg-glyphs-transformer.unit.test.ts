import path from 'path';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';
import type { Formats } from '../types';
import SvgGlyphsTransformer from './svg-glyphs-transformer';
import Transformer from './transformer';

describe('@momentum-design/builder - SVG glyphs Font Transformer', () => {
  let transformer: SvgGlyphsTransformer;
  const DESTINATION = 'dist';
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fileName: FONT_NAME }, type: 'SVG_GLYPHS' };
  beforeEach(() => {
    transformer = new SvgGlyphsTransformer(FORMAT, DESTINATION);
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => { });
  });
  describe('constructor', () => {
    it('should extend Builder', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });
    it('should mount the format provided to the class object', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe(DESTINATION);
    });
  });
  describe('transformFilesSync', () => {
    it('transform the passed in files by optimizing each of them', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.any(String),
          distPath: path.join(DESTINATION, FONT_NAME),
          srcPath: '',
        },
      ]);
    });
    it('filters the files and return empty data if srcpath include numbers', () => {
      transformer.inputFiles = [{ srcPath: '12', distPath: 'font', data: mockSVGFontBuffer }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        {
          data: '{}',
          distPath: path.join(DESTINATION, FONT_NAME),
          srcPath: '',
        },
      ]);
    });

    it('return the empty data if inputFiles not supplied', () => {
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toEqual([
        {
          data: '{}',
          distPath: path.join(DESTINATION, FONT_NAME),
          srcPath: '',
        },
      ]);
    });
  });
});
