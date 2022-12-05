import type { Formats, FileType } from '../types';
import SVGFontTransformer from './svg-font-transformer';
import Transformer from './transformer';

describe('@momentum-design/builder - SVG Font Transformer', () => {
  let transformer: SVGFontTransformer;
  const FONT_NAME = 'MyFont';
  const FORMAT: Formats = { config: { fontName: FONT_NAME }, type: 'SVG_FONT' };

  beforeEach(() => {
    transformer = new SVGFontTransformer(FORMAT, '/dist');
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

  describe('generateGlyphsData', () => {
    it('should generate glyph data for input files', () => {
      const files: FileType[] = [
        {
          srcPath: 'file1.svg',
          distPath: 'file1.svg',
        },
        {
          srcPath: 'file2.svg',
          distPath: 'file2.svg',
        },
      ];
      transformer.inputFiles = files;

      // @ts-ignore
      const glyphs = transformer.generateGlyphsData();

      expect(glyphs).toEqual([
        {
          name: 'file1',
          srcPath: 'file1.svg',
          codepoint: 61697,
          codepointHexa: 'f101',
          unicode: '',
        },
        {
          name: 'file2',
          srcPath: 'file2.svg',
          codepoint: 61698,
          codepointHexa: 'f102',
          unicode: '',
        },
      ]);
    });

    it('should return undefined if no input files are provided', () => {
      // @ts-ignore
      const glyphs = transformer.generateGlyphsData();

      expect(glyphs).toBeUndefined();
    });
  });
});
