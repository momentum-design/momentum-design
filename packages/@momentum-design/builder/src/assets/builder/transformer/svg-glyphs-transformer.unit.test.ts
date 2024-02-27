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
    transformer = new SvgGlyphsTransformer(FORMAT, '/dist');
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

  describe('transformFilesSync function in svg-glyphs-transformer', () => {
    it('should mock the transformFilesSync function and track its usage', () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toHaveBeenCalledTimes(1);
      expect(transformFilesSyncSpy).toHaveBeenCalled();
      expect(transformer.outputFiles).toEqual([
        {
          data: expect.any(String),
          distPath: path.join('/dist', 'MyFont'),
          srcPath: '',
        },
      ]);
      transformFilesSyncSpy.mockRestore();
    });
  });

  describe('getNextCodePoint function testing sample 1', () => {
    it('getNextCodePoint function testing', () => {
      const getNextCodepointSpy = jest.spyOn(Utils, 'getNextCodepoint');
      const resultCodepoint = Utils.getNextCodepoint();
      expect(getNextCodepointSpy).toBeCalledTimes(1);
      expect(resultCodepoint).toBe(61698);
    });

    it('getNextCodePoint function testing sample 2', () => {
      Utils.getNextCodepoint();
      Utils.getNextCodepoint();
      Utils.getNextCodepoint();
      const getNextCodepointmockedfnData = jest.fn(Utils.getNextCodepoint).mockReturnValue(61900);
      expect(getNextCodepointmockedfnData()).toBe(61900);
      const getNextCodepointSpy = jest.spyOn(Utils, 'getNextCodepoint');
      expect(getNextCodepointSpy).toBeCalledTimes(4);
      expect(Utils.getNextCodepoint()).toBe(61702);
    });
    it('should return the correct data from the promise of transformFilesAsync() function', () => {
      transformer.inputFiles = [{
        srcPath: 'font',
        distPath: 'font',
        // eslint-disable-next-line max-len
        data: '{"0": {"name": "font","srcPath" : "font","codepoint" : "61697","codepointHexa" : "f101","unicode" : "testUnicode"}}',
      }];
      const getNextCodepointmockedfn = jest.fn(Utils.getNextCodepoint).mockReturnValue(556);
      expect(getNextCodepointmockedfn()).toBe(556);
      const getNextCodepointSpy = jest.spyOn(Utils, 'getNextCodepoint');
      Utils.getNextCodepoint();
      const transformFilesSyncSpy = jest.spyOn(transformer, 'transformFilesSync');
      transformer.transformFilesSync();
      expect(transformFilesSyncSpy).toBeCalledTimes(1);
      expect(getNextCodepointSpy).toHaveBeenCalled();
      expect(transformer.outputFiles).toStrictEqual([
        {
          distPath: '\\dist\\MyFont',
          srcPath: '',
          data: expect.any(String),
        },
      ]);
      // expect(transformer.outputFiles).toBe([
      //   {
      //     data: {
      //       0: {
      //         name: 'font',
      //         srcPath: 'font',
      //         codepoint: '61704',
      //         codepointHexa: 'f108',
      //         unicode: '',
      //       },
      //     },
      //     distPath: '\\dist\\MyFont',
      //     srcPath: '',
      //   },
      // ]);
      transformFilesSyncSpy.mockRestore();
    });
  });
});
