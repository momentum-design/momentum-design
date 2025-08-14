import fs from 'fs';
import Transformer from './transformer';
import ImageTransformer from './image-transformer';
import * as Utils from '../utils';
import { Formats, ImageFormat } from '../types';

describe('@momentum-design/builder - Image Transformer', () => {
  let transformer: ImageTransformer;

  const FORMAT: Formats = {
    config: {
      hbsPath: '/template/image.hbs',
      partName: 'brandvisualImage',
      manifestPath: '@momentum-design/brand-visuals/dist/manifest.json',
    },
    type: 'IMAGE',
  } as unknown as ImageFormat;

  const mockManifest = {
    test: 'test.png',
    image: 'image.png',
  };

  beforeEach(() => {
    transformer = new ImageTransformer(FORMAT, '/dist');
    jest.spyOn(fs.promises, 'readFile').mockResolvedValue(JSON.stringify(mockManifest));
    // @ts-ignore
    jest.spyOn(transformer.logger, 'debug').mockImplementation(() => {});
    // @ts-ignore
    jest.spyOn(transformer.logger, 'error').mockImplementation(() => {});
  });

  describe('constructor()', () => {
    it('should extend Transformer', () => {
      expect(transformer instanceof Transformer).toBe(true);
    });

    it('should mount the format and destination', () => {
      expect(transformer.format).toBe(FORMAT);
      expect(transformer.destination).toBe('/dist');
    });
  });

  describe('convertToImageTemplate()', () => {
    it('should convert image file to lit template using manifest', async () => {
      const file = { srcPath: '/src/test.png', data: '' };

      const templateSpy = jest.fn(({ imageData }) => imageData);

      jest.spyOn(Utils, 'transformHbs').mockResolvedValue(templateSpy);

      const result = await transformer.convertToImageTemplate(file);

      expect(result).toEqual({
        ...file,
        distPath: '/dist/test.ts',
        partName: 'brandvisualImage',
        data: '<img aria-hidden="true" part="brandvisualImage" data-name="test" src="test.png" />',
      });

      expect(templateSpy).toHaveBeenCalledWith({
        imageData: '<img aria-hidden="true" part="brandvisualImage" data-name="test" src="test.png" />',
      });
    });

    it('should throw error if manifest fails to load', async () => {
      jest.spyOn(transformer as any, 'loadManifest').mockImplementation(() => {
        throw new Error('manifest load failed');
      });

      const file = { srcPath: '/src/test.png', data: '' };

      await expect(transformer.convertToImageTemplate(file)).rejects.toThrow('manifest load failed');
    });
  });

  describe('transformFilesAsync()', () => {
    it('should transform all input files', async () => {
      transformer.inputFiles = [{ srcPath: 'image.png', distPath: '', data: '' }];

      const templateSpy = jest.fn(({ imageData }) => imageData);
      jest.spyOn(Utils, 'transformHbs').mockResolvedValue(templateSpy);

      await transformer.transformFilesAsync();

      expect(transformer.outputFiles).toStrictEqual([
        {
          srcPath: 'image.png',
          distPath: '/dist/image.ts',
          partName: 'brandvisualImage',
          data: '<img aria-hidden="true" part="brandvisualImage" data-name="image" src="image.png" />',
        },
      ]);
    });

    it('should resolve immediately if no input files', async () => {
      transformer.inputFiles = undefined;
      await expect(transformer.transformFilesAsync()).resolves.toBeUndefined();
    });
  });
});
