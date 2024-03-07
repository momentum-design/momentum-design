import path from 'path';
import type { Formats, SwiftFormat } from '../types';
import Transformer from './transformer';
import SwiftTransformer from './swift-transformer';
import * as Utils from '../utils';

describe('@momentum-design/builder - swift Transformer', () => {
  let transformer: SwiftTransformer;
  const FORMAT: Formats = { config: { fileName: 'MyFont', hbsPath: 'hpath' }, type: 'SWIFT' } as unknown as SwiftFormat;

  beforeEach(() => {
    transformer = new SwiftTransformer(FORMAT, '/dist');
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => { });
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

  describe('transformFilesAsync function', () => {
    it('should return the correct data from the promise of transformFilesAsync() function', async () => {
      transformer.inputFiles = [{
        srcPath: 'font',
        distPath: 'font',
        // eslint-disable-next-line max-len, max-len
        data: '{"0": {"name": "accessibility-bold","srcPath" : "testPath","codepoint" : "61697","codepointHexa" : "f101","unicode" : "testUnicode"}}',
      }];
      const transformFilesAsyncSpy = jest.spyOn(transformer, 'transformFilesAsync');

      const templateSpy = jest.fn(({ glyphsData }) => glyphsData);
      const transformHbsSpy = jest.spyOn(Utils, 'transformHbs').mockReturnValue(
        new Promise((resolve) => { resolve(templateSpy); }),
      );

      const result = await transformer.transformFilesAsync();
      expect(transformFilesAsyncSpy).toBeCalledTimes(1);
      expect(transformHbsSpy).toBeCalledTimes(1);

      expect(result).toEqual(undefined);
      expect(Array.isArray(transformer.outputFiles)).toBe(true);
      expect(transformer.outputFiles).toStrictEqual([
        {
          data: [{
            codepoint: '61697',
            codepointHexa: 'f101',
            name: 'accessibility-bold',
            srcPath: 'testPath',
            unicode: 'testUnicode',
          }],
          distPath: path.join('/dist', 'MyFont'),
          srcPath: '',
        },
      ]);
      transformFilesAsyncSpy.mockRestore();
    });
  });
});
