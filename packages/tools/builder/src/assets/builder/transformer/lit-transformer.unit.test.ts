import type { Formats, LitFormat } from '../types';
import Transformer from './transformer';
import LitTransformer from './lit-transformer';
import * as Utils from '../utils';

describe('@momentum-design/builder - Lit Transformer', () => {
  let transformer: LitTransformer;
  const FORMAT: Formats = { config: { hbsPath: '' }, type: 'LIT' } as LitFormat;

  beforeEach(() => {
    transformer = new LitTransformer(FORMAT, '/dist');
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

  describe('addAttributesToSvg', () => {
    it('should add attributes to the svg string', () => {
      const svg = '<svg></svg>';
      const name = 'test';
      const result = transformer.addAttributesToSvg(svg, name);
      expect(result).toBe('<svg aria-hidden="true" part="icon" data-name="test"></svg>');
    });
  });

  describe('convertToLitTemplate', () => {
    it('should convert the svg file to a lit template', async () => {
      const file = { srcPath: '/src/test.svg', data: '<svg></svg>' };
      const templateSpy = jest.fn(({ svgData }) => svgData);
      const transformHbsSpy = jest.spyOn(Utils, 'transformHbs').mockReturnValue(
        new Promise((resolve) => {
          resolve(templateSpy);
        }),
      );

      const result = await transformer.convertToLitTemplate(file);
      expect(transformHbsSpy).toHaveBeenCalledTimes(1);

      expect(result).toEqual({
        srcPath: '/src/test.svg',
        distPath: '/dist/test.ts',
        data: '<svg aria-hidden="true" part="icon" data-name="test"></svg>',
      });
    });
  });

  describe('transformFilesAsync', () => {
    it('should return the correct data from the promise of transformFilesAsync() function', async () => {
      transformer.inputFiles = [{ srcPath: 'font', distPath: 'font', data: '<svg></svg>' }];
      const convertToLitTemplateSpy = jest.spyOn(transformer, 'convertToLitTemplate');
      const outputFiles = [
        {
          srcPath: 'font',
          distPath: '/dist/font.ts',
          data: '<svg aria-hidden="true" part="icon" data-name="font"></svg>',
        },
      ];

      const templateSpy = jest.fn(({ svgData }) => svgData);
      jest.spyOn(Utils, 'transformHbs').mockReturnValue(
        new Promise((resolve) => {
          resolve(templateSpy);
        }),
      );

      await transformer.transformFilesAsync();
      expect(convertToLitTemplateSpy).toHaveBeenCalledTimes(1);
      expect(transformer.outputFiles).toStrictEqual(outputFiles);
    });
  });
});
