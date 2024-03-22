import path from 'path';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';
import type { Formats } from '../types';
import SvgGlyphsTransformer from './svg-glyphs-transformer';
import Transformer from './transformer';
import * as Utils from '../utils';

describe('@momentum-design/builder - SVG glyphs Font Transformer', () => {
  let transformer: SvgGlyphsTransformer;
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fileName: FONT_NAME }, type: 'SVG_GLYPHS' };
  beforeEach(() => {
    transformer = new SvgGlyphsTransformer(FORMAT, 'dist');
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => { });
  });
  describe('constructor', () => {
    it('should extend Builder', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });
    it('should mount the format provided to the class object', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe('dist');
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
          distPath: path.join('dist', 'MyFont'),
          srcPath: '',
        },
      ]);
    });
  });
  describe('getNextCodepoint', () => {
    it('return codepoint', () => {
      const getNextCodepointSpy = jest.spyOn(Utils, 'getNextCodepoint');
      const resultCodepoint = Utils.getNextCodepoint();
      expect(getNextCodepointSpy).toBeCalledTimes(1);
      expect(resultCodepoint).toBe(61698);
    });
  });
});
