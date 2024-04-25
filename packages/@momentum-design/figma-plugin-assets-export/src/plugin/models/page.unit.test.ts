/* eslint-disable no-undef */
import { AssetSetting } from '../../shared/types';
import Component from './component';
import { componentNodeMock } from './fixtures/component.fixture';
import { assetSettingMock, PageNodeMock, componentNodeMocks } from './fixtures/page.fixture';
import Page from './page';

const DESTINATION = 'dist';

describe('@momentum-design/figma-plugin-assets-export - models.Page', () => {
  let page: Page;
  beforeEach(() => {
    page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
    );
  });

  describe('constructor', () => {
    it('returns instance of Component', () => {
      expect(page instanceof Page).toBe(true);
    });
    it('should mount the appropriate destination', () => {
      expect(page.destination).toBe(DESTINATION);
    });
  });

  describe('components', () => {
    it('returns component nodes in current page', () => {
      const figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      const isNodeContainingImageSpy = jest.spyOn(page, 'isNodeContainingImage');
      isNodeContainingImageSpy.mockReturnValue(false);
      const excludeComponentsSpy = jest.spyOn(page, 'excludeComponents');
      excludeComponentsSpy.mockReturnValue(componentNodeMocks as unknown as Array<ComponentNode>);
      expect(page.components).toHaveLength(2);
      expect(page.components[0] instanceof Component).toBe(true);
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });

    it('should mount the appropriate destination', () => {
      expect(page.destination).toBe(DESTINATION);
    });
  });
  describe('excludeComponents', () => {
    it('returns component nodes in current page by excluding any variant', () => {
      const figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      const isNodeContainingImageSpy = jest.spyOn(page, 'isNodeContainingImage');
      isNodeContainingImageSpy.mockReturnValue(false);

      expect(page.components).toHaveLength(1);
      expect(isNodeContainingImageSpy).toHaveBeenCalled();
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });

    it('throw error', () => {
      const figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
      const isNodeContainingImageSpy = jest.spyOn(page, 'isNodeContainingImage');
      isNodeContainingImageSpy.mockImplementation(() => {
        throw new Error('isNodeContainingImage error');
      });
      try {
        // eslint-disable-next-line no-unused-expressions
        page.components;
      } catch (err) {
        expect(err).not.toBeNull();
      }
      expect(isNodeContainingImageSpy).toHaveBeenCalled();
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });
  });

  describe('isNodeContainingImage', () => {
    let figmaLoadAllPageAsyncSpy: jest.SpyInstance;

    beforeEach(() => {
      figmaLoadAllPageAsyncSpy = jest.spyOn(figma, 'loadAllPagesAsync');
      PageNodeMock.findAllWithCriteria.mockReturnValue(componentNodeMocks);
      page = new Page(
        PageNodeMock as unknown as PageNode,
        DESTINATION,
        assetSettingMock as AssetSetting,
      );
    });

    it('return true if componentNode contains any image', () => {
      componentNodeMock.findAllWithCriteria.mockImplementation(() => ([
        { type: 'RECTANGLE', fills: [{ type: 'IMAGE' }] },
        { type: 'RECTANGLE', fills: [{ type: 'IMAGE' }] },
      ]));
      const isNodeContainingImage = page.isNodeContainingImage(componentNodeMock as unknown as ComponentNode);

      expect(isNodeContainingImage).toBe(true);
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });
    it('return false if componentNode not contains any image', () => {
      componentNodeMock.findAllWithCriteria.mockImplementation(() => ([
        { type: 'RECTANGLE', fills: [{ type: 'LINE' }] },
        { type: 'RECTANGLE', fills: [{ type: 'LINE' }] },
      ]));
      const isNodeContainingImage = page.isNodeContainingImage(componentNodeMock as unknown as ComponentNode);

      expect(isNodeContainingImage).toBe(false);
      expect(figmaLoadAllPageAsyncSpy).toHaveBeenCalled();
    });
  });
});
