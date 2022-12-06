import type { Formats, TTFFormat } from '../types';
import Transformer from './transformer';
import TTFTransformer from './ttf-transformer';

const mockSVGFontBuffer = Buffer.from(`
<?xml version="1.0" standalone="no"?>
<!DOCTYPE svg PUBLIC "-//W3C//DTD SVG 1.1//EN" "http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd" >
<svg xmlns="http://www.w3.org/2000/svg">
  <defs>
    <font id="MomentumFontIcon" horiz-adv-x="969.6969696969697">
      <font-face font-family="MomentumFontIcon"
        units-per-em="1000" ascent="1000"
        descent="0" />
      <missing-glyph horiz-adv-x="0" />
      <glyph glyph-name="3d-object-bold"
        unicode="&#xF101;"
        horiz-adv-x="969.6969696969697" d="M894.8484848484849 106.969696969697L773.3030303030304
        228.5454545454546A386.909090909091 386.909090909091 0 1 1 741.1818181818184
        196.4242424242425L862.6969696969697 74.8484848484849A22.7272727272727 22.7272727272727
        0 1 1 894.8484848484849 106.969696969697zM243.7878787878788
        243.8181818181818A340.909090909091 340.909090909091 0 1 0
        725.9090909090909 243.8181818181818A341.3030303030303 341.3030303030303 0 0 0
        243.7878787878788 243.8181818181818zM606.0606060606061
        507.5757575757576H363.6363636363637A22.7272727272727 22.7272727272727 0 0 1
        363.6363636363637 462.1212121212121H606.0606060606061A22.7272727272727
        22.7272727272727 0 1 1 606.0606060606061 507.5757575757576z" />
    </font>
  </defs>
</svg>
`);

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
