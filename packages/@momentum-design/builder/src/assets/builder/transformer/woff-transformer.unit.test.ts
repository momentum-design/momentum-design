import type { Formats, WOFFFormat } from '../types';
import Transformer from './transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';
import WOFFTransformer from './woff-transformer';
import TTFTransformer from './ttf-transformer';

describe('@momentum-design/builder - WOFF Font Transformer', () => {
  let transformer: WOFFTransformer;
  const FORMAT: Formats = { config: { fontName: 'MyFont' }, type: 'WOFF' } as WOFFFormat;

  const svgTransformer = new TTFTransformer({ type: 'TTF', config: { fontName: 'MyFont' } }, '/dist');
  const ttfBuffer = svgTransformer.generateTTFFont(mockSVGFontBuffer).data;

  beforeEach(() => {
    transformer = new WOFFTransformer(FORMAT, '/dist');
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

  describe('generateWOFFFont', () => {
    it('returns the correct result', () => {
      const result = transformer.generateWOFFFont(ttfBuffer);
      expect(result).toEqual({ fileCreated: '/dist/MyFont.woff', data: expect.any(Object) });
    });
  });
  describe('transformFilesSync', () => {
    it('modifies the class properties correctly', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: ttfBuffer }];
      const generateWOFFFontSpy = jest.spyOn(transformer, 'generateWOFFFont');
      expect(transformer.outputFiles).toEqual(undefined);
      transformer.transformFilesSync();
      expect(generateWOFFFontSpy).toBeCalledWith(ttfBuffer);
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.any(Object),
          distPath: '/dist/MyFont.woff',
          srcPath: '/dist/MyFont.woff',
        },
      ]);
    });
  });
});
