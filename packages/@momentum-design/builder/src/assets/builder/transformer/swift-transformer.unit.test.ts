import type { Formats, SwiftFormat } from '../types';
import Transformer from './transformer';
import SwiftTransformer from './swift-transformer';
import { mockSVGFontBuffer } from '../../../test/fixtures/transformer.fixtures';

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
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: mockSVGFontBuffer }];
      const transformFilesAsyncSpy = jest.spyOn(transformer, 'transformFilesAsync');
      const result = await transformer.transformFilesAsync();
      expect(transformFilesAsyncSpy).toBeCalledTimes(1);
      expect(result).toEqual(undefined);
      expect(transformer.outputFiles).toEqual(undefined);
      expect(transformer.outputFiles).not.toBe([
        {
          data: expect.any(String),
          distPath: 'font',
          srcPath: 'font',
        },
      ]);
      transformFilesAsyncSpy.mockRestore();
    });
  });
});
