import path from 'path';
import type { Formats, CSSFormat } from '../types';
import Transformer from './transformer';
import CssTransformer from './css-transformer';
import * as Utils from '../utils';

const inputFilesData = {
  name: 'accessibility-bold',
  srcPath: 'testPath',
  codepoint: '61697',
  codepointHexa: 'f101',
  unicode: 'testUnicode' };
describe('@momentum-design/builder - css Transformer', () => {
  let transformer: CssTransformer;
  const FORMAT: Formats = {
    config: {
      fileName: 'MyFont',
      hbsPath: 'hpath',
      woffPath: 'woffPath',
      woff2Path: 'woff2Path',
    },
    type: 'CSS',
  } as CSSFormat;
  const DIST_PATH = '/dist';

  beforeEach(() => {
    transformer = new CssTransformer(FORMAT, DIST_PATH);
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => { });
  });

  describe('constructor()', () => {
    it('should extend Builder', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });

    it('should mount the format provided to the class object', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe(DIST_PATH);
    });
  });

  describe('Css transformer - transformFilesAsync function', () => {
    it('should return the correct data from the promise of transformFilesAsync() function', async () => {
      transformer.inputFiles = [{
        srcPath: 'font',
        distPath: 'font',
        data: JSON.stringify(inputFilesData),
      }];
      const transformFilesAsyncSpy = jest.spyOn(transformer, 'transformFilesAsync');
      const templateSpy = jest.fn(({ glyphsData }) => glyphsData);
      const transformHbsSpy = jest.spyOn(Utils, 'transformHbs').mockReturnValue(
        new Promise((resolve) => { resolve(templateSpy); }),
      );
      jest.spyOn(Utils, 'generateSCSSFile').mockImplementation();
      await transformer.transformFilesAsync();
      expect(transformFilesAsyncSpy).toBeCalledTimes(1);
      expect(transformHbsSpy).toBeCalledTimes(1);
      expect(transformer.outputFiles).toStrictEqual([
        {
          data: Object.values(inputFilesData),
          distPath: path.join(DIST_PATH, FORMAT.config.fileName),
          srcPath: '',
        },
      ]);
      transformFilesAsyncSpy.mockRestore();
    });
  });
});
