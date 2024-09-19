import path from 'path';
import type { Formats, TypesFormat } from '../types';
import Transformer from './transformer';
import * as Utils from '../utils';
import TypesTransformer from './types-transformer';

describe('@momentum-design/builder - types Transformer', () => {
  let transformer: TypesTransformer;
  const FORMAT: Formats = {
    config: { fileName: 'types.d.ts', hbsPath: 'hpath', name: 'test', manifestPath: 'mpath' }, type: 'TYPES',
  } as TypesFormat;
  const DIST_PATH = '/dist';

  beforeEach(() => {
    transformer = new TypesTransformer(FORMAT, DIST_PATH);
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

  describe('Types transformer - transformFilesAsync function', () => {
    it('should return the correct data from the promise of transformFilesAsync() function', async () => {
      const transformFilesAsyncSpy = jest.spyOn(transformer, 'transformFilesAsync');
      const templateSpy = jest.fn((data) => data);
      const transformHbsSpy = jest.spyOn(Utils, 'transformHbs').mockReturnValue(
        new Promise((resolve) => { resolve(templateSpy); }),
      );
      await transformer.transformFilesAsync();
      expect(transformFilesAsyncSpy).toBeCalledTimes(1);
      expect(transformHbsSpy).toBeCalledTimes(1);
      expect(transformer.outputFiles).toStrictEqual([
        {
          data: { name: FORMAT.config.name, path: FORMAT.config.manifestPath },
          distPath: path.join(DIST_PATH, FORMAT.config.fileName),
          srcPath: '',
        },
      ]);
      transformFilesAsyncSpy.mockRestore();
    });
  });
});
