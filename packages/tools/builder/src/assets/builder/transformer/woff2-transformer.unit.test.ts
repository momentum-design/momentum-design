import type { Formats, WOFF2Format } from '../types';
import Transformer from './transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';
import WOFF2Transformer from './woff2-transformer';
import TTFTransformer from './ttf-transformer';

describe('@momentum-design/builder - WOFF2 Font Transformer', () => {
  let transformer: WOFF2Transformer;
  const FORMAT: Formats = { config: { fontName: 'MyFont' }, type: 'WOFF2' } as WOFF2Format;

  const svgTransformer = new TTFTransformer({ type: 'TTF', config: { fontName: 'MyFont' } }, '/dist');
  const ttfBuffer = svgTransformer.generateTTFFont(mockSVGFontBuffer).data;

  beforeEach(() => {
    transformer = new WOFF2Transformer(FORMAT, '/dist');
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

  describe('generateWOFF2Font', () => {
    it('returns the correct result', async () => {
      const result = await transformer.generateWOFF2Font(ttfBuffer);
      expect(result).toEqual({ fileCreated: '/dist/MyFont.woff2', data: expect.any(Object) });
    });
  });

  describe('transformFilesSync', () => {
    it('modifies the class properties correctly', async () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: ttfBuffer }];
      const generateWOFF2FontSpy = jest.spyOn(transformer, 'generateWOFF2Font');
      expect(transformer.outputFiles).toEqual(undefined);
      await transformer.transformFilesAsync();
      expect(generateWOFF2FontSpy).toBeCalledWith(ttfBuffer);
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.any(Object),
          distPath: '/dist/MyFont.woff2',
          srcPath: '/dist/MyFont.woff2',
        },
      ]);
    });
  });
});
