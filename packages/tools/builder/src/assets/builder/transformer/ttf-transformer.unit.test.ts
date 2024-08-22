import type { Formats, TTFFormat } from '../types';
import Transformer from './transformer';
import TTFTransformer from './ttf-transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';

describe('@momentum-design/builder - TTF Font Transformer', () => {
  let transformer: TTFTransformer;
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fontName: FONT_NAME }, type: 'TTF' } as TTFFormat;

  beforeEach(() => {
    transformer = new TTFTransformer(FORMAT, '/dist');
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

  describe('generateTTFFont', () => {
    it('returns the correct result', () => {
      const result = transformer.generateTTFFont(mockSVGFontBuffer);
      expect(result).toEqual({ fileCreated: '/dist/MyFont.ttf', data: expect.any(Object) });
    });
  });
  describe('transformFilesSync', () => {
    it('modifies the class properties correctly', () => {
      transformer.inputFiles = [{ data: mockSVGFontBuffer, srcPath: '', distPath: '' }];
      const generateTTFFontSpy = jest.spyOn(transformer, 'generateTTFFont');
      expect(transformer.outputFiles).toEqual(undefined);
      transformer.transformFilesSync();
      expect(generateTTFFontSpy).toBeCalledWith(mockSVGFontBuffer);
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.any(Object),
          distPath: '/dist/MyFont.ttf',
          srcPath: '/dist/MyFont.ttf',
        },
      ]);
    });
  });
});
