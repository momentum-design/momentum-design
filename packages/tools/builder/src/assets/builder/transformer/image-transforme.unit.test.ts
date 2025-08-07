import Transformer from './transformer';
import ImageTransformer from './image-transformer';
import * as Utils from '../utils';
import { Formats, ImageFormat } from '../types';

jest.mock('fs', () => ({
  promises: {
    readFile: jest.fn(),
  },
}));

jest.mock('@momentum-design/brand-visuals/dist/manifest.json', () => ({
  default: {
    test: '/brandvisuals/resource/png/test.png',
    font: '/brandvisuals/resource/png/font.png',
  },
}), { virtual: true });

describe('@momentum-design/builder - Image Transformer', () => {
  let transformer: ImageTransformer;

  const FORMAT: Formats = {
    config: {
      hbsPath: '/template/image.hbs',
      partName: 'brandvisualImage',
    },
    type: 'IMAGE',
  } as unknown as ImageFormat;

  beforeEach(() => {
    transformer = new ImageTransformer(FORMAT, '/dist');
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
      // eslint-disable-next-line max-len
      const templateSpy = jest.fn(({ distPath, partName, name }) => `<img src="${distPath}" part="${partName}" alt="${name}" />`);

      jest.spyOn(Utils, 'transformHbs').mockResolvedValue(templateSpy);

      const result = await transformer.convertToImageTemplate(file);

      expect(result).toEqual({
        ...file,
        distPath: '/dist/test.ts',
        partName: 'brandvisualImage',
        data: '<img src="/brandvisuals/resource/png/test.png" part="brandvisualImage" alt="test" />',
      });
    });

    it('should throw error if manifest fails to load', async () => {
      // simulate manifest load failure
      jest.spyOn(transformer as any, 'loadManifest').mockImplementation(() => {
        throw new Error('manifest load failed');
      });

      const file = { srcPath: '/src/test.png', data: '' };

      await expect(transformer.convertToImageTemplate(file)).rejects.toThrow('manifest load failed');
    });
  });

  describe('transformFilesAsync()', () => {
    it('should transform all input files', async () => {
      transformer.inputFiles = [{ srcPath: 'font.png', distPath: '', data: '' }];

      // eslint-disable-next-line max-len
      const templateSpy = jest.fn(({ distPath, partName, name }) => `<img src="${distPath}" part="${partName}" alt="${name}" />`);

      jest.spyOn(Utils, 'transformHbs').mockResolvedValue(templateSpy);

      const outputFiles = [
        {
          srcPath: 'font.png',
          distPath: '/dist/font.ts',
          partName: 'brandvisualImage',
          data: '<img src="/brandvisuals/resource/png/font.png" part="brandvisualImage" alt="font" />',
        },
      ];

      await transformer.transformFilesAsync();
      expect(transformer.outputFiles).toStrictEqual(outputFiles);
    });

    it('should resolve immediately if no input files', async () => {
      transformer.inputFiles = undefined;
      await expect(transformer.transformFilesAsync()).resolves.toBeUndefined();
    });
  });
});
